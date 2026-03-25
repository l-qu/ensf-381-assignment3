import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import { useState } from "react";
import FlavorCatalog from "./components/FlavorCatalog";
import OrderList from "./components/OrderList";

function FlavorPage() {
    const [order, setOrder] = useState([]);

    const handleAdd = (flavor) => {
        setOrder((prev) => {
            const existing = prev.find(item => item.id === flavor.id);

            if(existing){
                return prev.map(item =>
                    item.id === flavor.id ? {...item, quantity: item.quantity + 1} : item
                );
            }
            return [... prev, {...flavor, quantity: 1}];
        });
    };

    const handleRemove = (id) => {
        setOrder((prev) => prev.map(item =>
            item.id === id ? {...item, quantity: item.quantity - 1} : item
        ).filter(item => item.quantity > 0));
    };

    return (
        <div className="flavors-page">
            <Header />
            <div className="content">
                <FlavorCatalog onAdd = {handleAdd} />
                <OrderList order = {order} onRemove = {handleRemove} />
            </div>
            <Footer />
        </div>
    );
}

export default FlavorPage