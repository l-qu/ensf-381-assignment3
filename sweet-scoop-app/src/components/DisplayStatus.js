function DisplayStatus({ type, message }){
    if (type == 'success'){
        return(
        <p style = {{ color : 'green'}}>{message}</p>
        );
    }else if (type == 'error'){
        return(
            <p style = {{ color : 'red'}}>{message}</p>
        );
    }else{
        return(
            <p></p>
        );
    }
}


export default DisplayStatus;