//React imports
    import React from "react";
    import ReactDOM from "react-dom";
//UI

import {CardUser as Card} from "./Card";
import {Button as Btn} from "./Button";

//Styles
import classes from "./UsersModal.module.css";

//Component

const Backdrop = (prop) => {
    return <div className={classes.backdrop} onClick={prop.onDelete}></div>
}

const ModalOverlay = (prop) => {
    return (
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
    )
}


export const  UserModal = (prop) => {
    return(
        <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop onDelete={prop.onDelete} />,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <ModalOverlay msg={prop.msg} titleError={prop.titleError} onDelete={prop.onDelete}/>,
                document.getElementById('overlay-root')
            )}
        </React.Fragment>
    )
}