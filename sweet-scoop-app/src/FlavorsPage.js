import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import { useState } from "react";
import FlavorCatalog from "./components/FlavorCatalog";
import OrderList from "./components/OrderList";

function FlavorPage() {
    return (
        <div className="flavors-page">
            <Header />
            <div className="content">
                <FlavorCatalog />
                <OrderList />
            </div>
            <Footer />
        </div>
    );
}

export default FlavorPage

