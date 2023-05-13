import React from "react";
import Info from "./Info";
import Businesscard from "./Businesscard";
import './Home.css';

const Home = () => {
    return(
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className="block">
                <Info />
                <Businesscard />
            </div>
        </div>
    );
};

export default Home;