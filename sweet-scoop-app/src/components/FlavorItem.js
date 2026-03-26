import { useState } from "react";

function FlavorItem({image, name, price, desc, onAdd}){
    const [showDesc, setShowDesc] = useState(false);

    return(
        <div className = "flavor-card"
            onMouseEnter = {() => setShowDesc(true)}
            onMouseLeave = {() => setShowDesc(false)}>
                <img src = {image} alt = {name}></img>
                <h3>{name}</h3>
                <p>{price}</p>
                <button onClick = {() => onAdd()}>Add to Order</button>

                {showDesc && (<p className = "description">{desc}</p>)}
        </div>

    )
}

export default FlavorItem;
