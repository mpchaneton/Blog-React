import classNames from "classnames";
import "./Paragraph.scss"


const Paragraph = ({as="span", children, size = "sm", isHelpText}) =>{

const Component = as;

    return (

    <p className={
        
        classNames ("paragraph", "font-regular", {
            
            [`paragraph-${size}`]:size,
            "is-help-text": isHelpText, 
        })}

>
{children}</p>

);
};

export default Paragraph;