import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Container, Image, Row, Col, Button } from "react-bootstrap";
import styles from "./Home.module.css";

export default class Home extends Component {
    render() {
        return (
            <Container fluid>
                <Jumbotron className="mt-md-3">
                    <img
                        src={process.env.PUBLIC_URL + "/assets/favicon.png"}
                        alt="Site-Logo"
                        width="60"
                        height="60"
                        className="mb-lg-3"
                    />
                    <h2>Welcome to CodeLife.io</h2>
                    <p>
                        A website built with React, React-Router &
                        React-Bootstrap
                    </p>
                    <Link to="/about">
                        <Button className="mt-lg-3" variant="info">
                            About
                        </Button>
                    </Link>
                </Jumbotron>
                <Row className="show-grid text-center">
                    <Col xs={12} sm={4} className="mb-md-3">
                        <Image
                            src="assets/person-1.jpg"
                            roundedCircle
                            className={styles.profile}
                        />
                        <h3 className={styles.name}>Hitler</h3>
                        <p>
                            A tree needs to be your friend if you're going to
                            paint him. Be so very light. Be a gentle whisper.
                            Let's do it again then, what the heck.
                        </p>
                    </Col>
                    <Col xs={12} sm={4} className="mb-md-3">
                        <Image
                            src="assets/person-2.jpg"
                            roundedCircle
                            className={styles.profile}
                        />
                        <h3 className={styles.name}>Tuco</h3>
                        <p>
                            A tree needs to be your friend if you're going to
                            paint him. Be so very light. Be a gentle whisper.
                            Let's do it again then, what the heck.
                        </p>
                    </Col>
                    <Col xs={12} sm={4} className="mb-md-3">
                        <Image
                            src="assets/person-3.jpg"
                            roundedCircle
                            className={styles.profile}
                        />
                        <h3 className={styles.name}>Salman</h3>
                        <p>
                            A tree needs to be your friend if you're going to
                            paint him. Be so very light. Be a gentle whisper.
                            Let's do it again then, what the heck.
                        </p>
                    </Col>
                </Row>
            </Container>
        );
    }
}
