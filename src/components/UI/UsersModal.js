//UI

import {CardUser as Card} from "./Card";
import {Button as Btn} from "./Button";

//Styles
import classes from "./UsersModal.module.css";


//Component
export const  UserModal = (prop) => {
    return(
        <div>
            <div className={classes.backdrop} onClick={prop.onDelete}/>
            <Card clssName = {classes.modal}>
                <header className={classes.header}>
                    <h2>{prop.titleError}</h2>
                </header>
                <div className={classes.content}>
                    <p>{prop.msg}</p>
                </div>
                <footer className={classes.actions}>
                    <Btn onClick={prop.onDelete}>Okay</Btn>
                </footer>
            </Card>
        </div>
    )
}