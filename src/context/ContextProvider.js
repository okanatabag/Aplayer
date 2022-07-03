import React,{useState, useMemo,createContext} from 'react';
import PropTypes from 'prop-types';

const DataContext = createContext();
function ContextProvider({ children }) {
  const [playlist, setPlaylist] = useState([]);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [formData, setFormData] = useState({});
  const [toast, setToast] = useState({message: '', type: '', duration: 0});

    const values = useMemo(() => ({
      playlist,
      setPlaylist,
      currentMediaIndex,
      setCurrentMediaIndex,
      formData,
      setFormData,
      toast,
      setToast,
    }), [playlist, currentMediaIndex, formData, toast]);

    return (
        <DataContext.Provider value={values}>{children}</DataContext.Provider>
    );
}

ContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export {ContextProvider, DataContext}