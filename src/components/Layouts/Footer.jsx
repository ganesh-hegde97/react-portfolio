import React from "react";
import {
    BottomNavigation,
    BottomNavigationAction,
    Typography,
} from "react-bootstrap";

import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.container}>
            <h6>Made with &#x1F5A4; by Ganesh Hegde</h6>
            <h6>
                <a
                    href="#"
                    className={styles.source}
                >
                    &#127760; Source Code available on Github : 
                </a>
            </h6>
        </div>
    );
};

export default Footer;
