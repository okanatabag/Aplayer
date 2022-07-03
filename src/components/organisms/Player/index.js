import React, { useEffect, useContext, useCallback} from 'react';
import { DataContext } from '../../../context/ContextProvider';
import {Image, Video} from '../../atoms';

export default function Player() {
  const {playlist, setPlaylist, currentMediaIndex, setCurrentMediaIndex} = useContext(DataContext);

  const nextMedia = useCallback((index) => {
    setCurrentMediaIndex(index);
    window.timeout=window.setTimeout( 
      nextMedia.bind(undefined, (index + 1) % playlist.length), 1000*parseInt(playlist[index].duration,10) );
  }, [playlist, setCurrentMediaIndex]);

  const fetchPlaylist = async () => {
    fetch('http://localhost:1955/api/playlist')
      .then(res => res.json())
      .then(data => {
        setPlaylist(data);
      })
   }
    
  useEffect(() => {
    fetchPlaylist()
  },[]);

  useEffect(() => {
    if(playlist.length > 0) {
      clearTimeout(window.timeout);
      nextMedia(0);
    }
  }, [playlist]);

  return (
    <div>
      {
        playlist.length > 0 && (
        (playlist[currentMediaIndex]?.type==='image') ? (
          <Image src={playlist[currentMediaIndex].url} alt={playlist[currentMediaIndex].name} />
        ) : (
          <Video src={playlist[currentMediaIndex].url} />
        ))
      }
    </div>
  )
}
