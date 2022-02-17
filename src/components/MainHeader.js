import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./MainHeader.module.css";

const MainHeader = () => {
    return (
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <NavLink activeclassname={classes.active} to="/welcome">
                            welcome
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeclassname={classes.active} to="/product">
                            products
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainHeader;
