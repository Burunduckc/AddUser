//Styles
import classesBtn from './Button.module.css'
//Components
export const Button = (prop) => {
    return <button className={classesBtn.button}
                   type={prop.type || 'button'}
                   onClick={prop.onClick}>{prop.children}</button>
}