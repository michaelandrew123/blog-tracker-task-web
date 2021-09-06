const Button = ({title, addClass, onAddBtn}) => {
 

    return (
        <> 
            <button className={addClass} onClick={onAddBtn}>{title}</button>
        </>

    );
}


export default Button;