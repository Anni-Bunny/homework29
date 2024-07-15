function Button(props){

    if (props.theme === 'primary'){
        return(
            <button className={`btn btn-primary`}>primary</button>
        )
    } else if (props.theme === 'secondary'){
        return(
            <button className={`btn btn-secondary`}>secondary</button>
        )
    } else if (props.theme === 'outline'){
        return(
            <button className={`btn btn-outline`}>outline</button>
        )
    }
}
export default Button;