import React, { Suspense } from "react";
import logo from "./logo.svg";
import "./App.scss";
import AnimalCard from "./components/animal-card/AnimalCard";
import "antd/dist/antd.min.css";
import { Row, Col, Layout } from "antd";
import NavHeader from "./components/header/NavHeader";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { mainRoute } from "./routers/main.route";

const HomePage = React.lazy(() => import("./pages/home-page/HomePage"));
function App() {
    return (
        <div className="App">
            <NavHeader></NavHeader>
            <Suspense fallback="Wait or go out">
                <BrowserRouter>
                    <Routes>
                        {mainRoute.map((routeProp, index) => (
                            <Route key={index} {...routeProp}></Route>
                        ))}
                    </Routes>
                </BrowserRouter>
            </Suspense>
            <Footer></Footer>
        </div>
    );
}

export default App;
