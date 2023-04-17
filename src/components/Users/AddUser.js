//Hooks
import {useState, useRef} from 'react'
// UI
import {CardUser as Card} from "../UI/Card";
import {Button as Btn} from "../UI/Button";
import {UserModal as Error} from "../UI/UsersModal";
import {Wrapper as Wrap} from "../Helpers/Wrapper";
//Styles
import classes from './AddUser.module.css';
//Components
export const AddUser = prop => {
    //Hooks
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    // const [inputUserName, setUserName] = useState('')
    // const [inputUserAge, setUserAge] = useState('')
    const [error, setError] = useState()
    //Functions
    // const userNameChenge = (e) => {
    //     setUserName(e.target.value)
    // }
    // const userAgeChenge = (e) => {
    //     setUserAge(e.target.value)
    // }

    const addUserHendler = (taret) => {
        taret.preventDefault()
        const inputName = nameInputRef.current.value;
        const inputAge = ageInputRef.current.value
        if (inputName.trim().length === 0 || inputAge.trim().length === 0){
        setError({
            titleError: 'Invalid input',
            msg: 'Please input a valid name and age (maybe or name or age)'
        });
        return;
        }
        if (+inputAge < 1){
            setError({
                titleError: 'Invalid age',
                msg: 'Please input a valid age (more than one)'
            });
            return;
        }
        prop.onAddUser(inputName, inputAge)
        nameInputRef.current.value = ''
        ageInputRef.current.value = ''
        // setUserName('');
        // setUserAge('');
    }

    const errorHandler = (e) => {
        setError(null)
    }
    //Component
    return (
        <Wrap>
            {error && <Error titleError = {error.titleError} msg = {error.msg} onDelete={errorHandler}/>}
        <Card clssName={classes.input}>
            <form onSubmit={addUserHendler}>
            <label htmlFor='username'>Username</label>
            <input
                id='username'
                type='text'
                // value={inputUserName}
                // onChange={userNameChenge}
                ref={nameInputRef}/>
            <label htmlFor='age'>Age(year)</label>
            <input id='age'
                   type='text'
                   // onChange={userAgeChenge}
                   // value={inputUserAge}
                    ref={ageInputRef}/>
            <Btn type='submit'>Add user</Btn>
        </form>
        </Card>
        </Wrap>
    )
}