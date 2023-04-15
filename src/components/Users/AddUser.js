//Hooks
import {useState} from 'react'
// UI
import {CardUser as Card} from "../UI/Card";
import {Button as Btn} from "../UI/Button";
import {UserModal as Error} from "../UI/UsersModal";
//Styles
import classes from './AddUser.module.css';
export const AddUser = prop => {
    const [inputUserName, setUserName] = useState('')
    const [inputUserAge, setUserAge] = useState('')
    const [error, setError] = useState()

    const userNameChenge = (e) => {
        setUserName(e.target.value)
    }
    const userAgeChenge = (e) => {
        setUserAge(e.target.value)
    }


    const addUserHendler = (taret) => {
        taret.preventDefault()
        if (inputUserName.trim().length === 0 || inputUserAge.trim().length === 0){
        setError({
            titleError: 'Invalid input',
            msg: 'Please input a valid name and age (maybe or name or age)'
        });
        return;
        }
        if (+inputUserAge < 1){
            setError({
                titleError: 'Invalid age',
                msg: 'Please input a valid age (more than one)'
            });
            return;
        }
        prop.onAddUser(inputUserName, inputUserAge)
        setUserName('');
        setUserAge('');
    }

    const errorHandler = (e) => {
        setError(null)
    }

    return (
        <div>
            {error && <Error titleError = {error.titleError} msg = {error.msg} onDelete={errorHandler}/>}
        <Card clssName={classes.input}>
            <form onSubmit={addUserHendler}>
            <label htmlFor='username'>Username</label>
            <input id='username' type='text' value={inputUserName} onChange={userNameChenge}/>
            <label htmlFor='age'>Age(year)</label>
            <input id='age'
                   type='text'
                   onChange={userAgeChenge}
                   value={inputUserAge}/>
            <Btn type='submit'>Add user</Btn>
        </form>
        </Card>
        </div>
    )
}