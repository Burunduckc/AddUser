import classes from './Card.module.css'

export const CardUser = prop => {
    return <div className={`${classes.card} ${prop.clssName}`}>{prop.children}</div>
}