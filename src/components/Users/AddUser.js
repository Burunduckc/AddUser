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

    const userNameChenge = (e) => {
        setUserName(e.target.value)
    }
    const userAgeChenge = (e) => {
        setUserAge(e.target.value)
    }


    const addUserHendler = (taret) => {
        taret.preventDefault()
        if (inputUserName.trim().length === 0 || inputUserAge.trim().length === 0){
        return;
        }
        if (+inputUserAge < 1){
            return;
        }
        prop.onAddUser(inputUserName, inputUserAge)
        setUserName('');
        setUserAge('');
    }

    return (
        <div>
        <Error titleError = 'Error' msg = 'Somthing went wrong!'/>
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