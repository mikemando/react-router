import React from "react";
import { Route, Routes } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Product from "./pages/Product";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";

function App() {
    return (
        <div>
            <MainHeader />
            <main>
                <Routes>
                    <Route path="/welcome" element={<Welcome />}></Route>
                    <Route path="/product" element={<Product />} exact></Route>
                    <Route
                        path="/product/:productId"
                        element={<ProductDetail />}
                    />
                </Routes>
            </main>
        </div>
    );
}

export default App;
