import React from "react";
import { Route, Routes } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Product from "./pages/Product";
import MainHeader from "./components/MainHeader";

function App() {
    return (
        <div>
            <MainHeader />
            <main>
                <Routes>
                    <Route path="/welcome" element={<Welcome />}></Route>
                    <Route path="/product" element={<Product />}></Route>
                </Routes>
            </main>
        </div>
    );
}

export default App;
