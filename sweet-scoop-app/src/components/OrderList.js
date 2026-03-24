import OrderItem from './OrderItem';

function OrderList({order = [], onRemove}){
    return(
        <div className = "order-list">
            <h3>Your Order</h3>
            {order.length === 0 ? (<p>No items in your order</p>) :
            (order.map(item => (
                <OrderItem key = {item.id}
                           item = {item}
                           onRemove = {onRemove}/>
            )))}
        </div>
    );
}

export default OrderList