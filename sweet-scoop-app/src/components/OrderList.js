import OrderItem from './OrderItem';

function OrderList({order = [], onRemove}){
    const total = order.reduce((sum, item) => {
        return sum + (parseFloat(item.price.replace('$', '')) * item.quantity);
    }, 0);

    return(
        <div className = "order-list">
            <h3>Your Order</h3>
            {order.length === 0 ? (<p>No items in your order</p>) :
            (order.map(item => (
                <OrderItem key = {item.id}
                           item = {item}
                           onRemove = {onRemove}/>
            )))}

            <h4>Total: ${total.toFixed(2)}</h4>
        </div>
    );
}

export default OrderList;
