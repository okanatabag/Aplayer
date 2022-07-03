import React, {useContext} from 'react';
import { DataContext } from '../../../context/ContextProvider';
import { Card, Toast} from '../../molecules';
import { Placer, Label, Input, Select, Button } from '../../atoms';

function Form() {
  const { formData, setFormData, toast, setToast, setPlaylist} = useContext(DataContext);

  const handleToastShow = (message, type, duration) => {
    setToast({message, type, duration});
    setTimeout(() => {
        setToast({message: '', type: '', duration: 0});
    }, duration);
  }

  const handleChangeInput = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const fetchPlaylist = async () => {
    fetch('http://localhost:1955/api/playlist')
      .then(res => res.json())
      .then(data => {
        setPlaylist(data);
      })
   }

  const handleSubmit = (e) => {
    e.preventDefault();
      fetch('http://localhost:1955/api/add', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then((res) => res.json())
      .then((data) => {
        if(data.success) {
          setFormData({});
          fetchPlaylist();
          handleToastShow(data.message, 'success', 3000);
        }else{
          const errors = data.errors.map(err =>err.msg).join( "|" );
          handleToastShow(errors, 'error', 5000);
        }
      })
    }

   

  return (
    <>
    <Placer top={10} right={10} width={300}>
    <Card>
      <h1 style={{fontSize:'24px'}}>Add Content</h1>
      <Label mt={10}>Content Name</Label>
      <Input name="name" type="text" placeholder="" onChange={handleChangeInput} value={formData.name || ""}/>
      <Label mt={10}>URL</Label>
      <Input name="url" type="text" placeholder="https://" onChange={handleChangeInput} value={formData.url || ""} />
      <Label mt={10}>Duration (seconds)</Label>
      <Input name="duration" type="text" placeholder="3" onChange={handleChangeInput} value={formData.duration || ""} />
      <Label mt={10}>Type</Label>
      <Select name="type" items={[{name:'Image',value:'image'},{name:'Video',value:'video'}]} onChange={handleChangeInput} value={formData.type || ""} />
      <Button mt={10} bg="green" color='white' type="button" onClick={handleSubmit}>Add</Button>
    </Card>
  </Placer>
  <Toast message={toast.message} type={toast.type} duration={toast.duration} />
  </>
  )
}

export default Form;
