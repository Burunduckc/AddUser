//Styles
import classes from './Card.module.css'
//Component
export const CardUser = prop => {
    return <div className={`${classes.card} ${prop.clssName}`}>{prop.children}</div>
}