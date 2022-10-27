import TextField from "../TextField"
import Button from "../Button"
import {useState} from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { editUser } from "./UserSlice";


const EditUser = () => {
    
    const dispatch = useDispatch();
    const params = useParams();
    const users = useSelector(store =>store.users);

    const existingUser = users.filter(user => user.id === params.id);
    const { name, email } = existingUser[0];

    const navigate = useNavigate();
    const [values, setValues] = useState({
        name,
        email
    });

    const handlEditUser = () => {
        setValues({name:'',email:''});
        dispatch(editUser({
            id: params.id,
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
        <Button onClick={handlEditUser}>Edit</Button>
    </div>
  )
}

export default EditUser