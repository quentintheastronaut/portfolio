import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Contact from "pages/Contact";
import Home from "pages/Home";
import Profile from "pages/Profile";
import Project from "pages/Project";
import Resume from "pages/Resume";
import styles from './index.less'

function BasicLayout() {
    return (
        <Router>
            <Header />
            <div className={styles.container}>
                <Switch>
                    <Route exact path="/profile">
                        <Profile />
                    </Route>
                    <Route exact path="/project">
                        <Project />
                    </Route>
                    <Route exact path="/resume">
                        <Resume />
                    </Route>
                    <Route exact path="/contact">
                        <Contact />
                    </Route>
                    <Route exact path="/">
                        <Home />
                    </Route>

                </Switch>
            </div>
            <Footer />
        </Router >
    );
}

export default BasicLayout;
