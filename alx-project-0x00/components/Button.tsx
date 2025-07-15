import { ButtonInterface } from "@/interfaces";
//button component 
const Button: React.FC<ButtonInterface> = ({title, styles}) => {

    
    const className = `cursor-pointer bg-blue-500 px-4 py-2  hover:bg-blue-600 ${styles}` ;
    return(
        
            <button className={className}>{title}</button>
        
    )
}

export default Button;