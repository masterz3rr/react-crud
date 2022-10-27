import TextField from "../TextField"
import Button from "../Button"
import {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "./UserSlice";
import { v4 as uuidv4 } from 'uuid';

const AddUser = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name: '',
        email: ''
    });

    const handleAddUser = () => {
        setValues({name:'',email:''});
        dispatch(addUser({
            id: uuidv4(),
            name: values.name,
            email: values.email
        }))
        navigate('/');
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

export default AddUser