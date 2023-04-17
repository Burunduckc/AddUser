//UI
import {CardUser as Card} from "../UI/Card";
//Styles
import styles from './ListUsers.module.css'
//Components
export const UserList = (prop) => {
    return <Card clssName = {styles.users}>
        <ul>
            {prop.users.map(e => {
                return <li key='g1'>{e.name} ({e.age} years old)</li>
            })}
        </ul>
    </Card>
}