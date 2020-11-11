import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, News, About, Navbar } from "./components";

import styles from "./App.module.css";

function App() {
    return (
        <Router>
            <div className={styles.App}>
                <Navbar />
                <Route exact path="/" component={Home} />
                {/* <Route exact path="/home" component={Home} /> */}
                <Route exact path="/news" component={News} />
                <Route exact path="/about" component={About} />
            </div>
        </Router>
    );
}

export default App;
