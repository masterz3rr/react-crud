import TextField from "../TextField"
import Button from "../Button"
import {useState} from 'react';
import { useNavigate } from "react-router-dom";

const EditUser = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name: '',
        email: ''
    });

    const handleAddUser = () => {
        setValues({name:'',email:''});
        navigate('/');
        console.log(values);
    }
    
  return (
    <div className="mt-10 mx-w-xl mx-auto">
        <TextField
            label="Name"
            value={values.name}
            onChange ={(e) =>setValues({...values, name:e.target.value})}
            inputProps={ {
                type: 'text',
                placeholder: 'Jerry Ale'
            }}
        />
        <br/>
        <TextField
            label="Email"
            value={values.email}
            onChange ={(e) =>setValues({...values, email:e.target.value})}
            inputProps={ {
                type: 'email',
                placeholder: 'jerry.ale@gmail.com'
            }}
        />
        <Button onClick={handleAddUser}>Submit</Button>
    </div>
  )
}

export default EditUser