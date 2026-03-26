function OrderItem({item, onRemove}){
    return(
        <div>
            <h3>{item.name}</h3>
            <p>Quantity: {item.quantity}</p>
            <p>{item.price}</p>
            
            <button className = "remove" onClick = {() => onRemove(item.id)}>Remove Item</button>
        </div>
    );
}

export default OrderItem;