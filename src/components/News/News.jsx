import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Footer from "../Layouts/Footer";

import styles from "./News.module.css";

export default class News extends Component {
    render() {
        return (
            <div>
                <Image
                    src="assets/mountain-boy.jpg"
                    className={styles.headerImage}
                />
                <Container>
                    <h2>News</h2>
                    <Row>
                        <Col xs={12} sm={8} className={styles.mainSection}>
                            <div className="text-justify">
                                <p>
                                    Nothing wrong with washing your brush. You
                                    can do anything here. So don't worry about
                                    it. This present moment is perfect simply
                                    due to the fact you're experiencing it. We
                                    have a fantastic little sky!
                                </p>
                                <p>
                                    Trees grow however makes them happy. There
                                    are no mistakes. You can fix anything that
                                    happens. Every time you practice, you learn
                                    more. All you need to paint is a few tools,
                                    a little instruction, and a vision in your
                                    mind.
                                </p>
                                <p>
                                    Sometimes you learn more from your mistakes
                                    than you do from your masterpieces. I
                                    thought today we would do a happy little
                                    picture. How do you make a round circle with
                                    a square knife? That's your challenge for
                                    the day.
                                </p>
                                <p>
                                    Let's put some happy trees and bushes back
                                    in here. Zip. That easy. It is a lot of fun.
                                </p>
                            </div>
                        </Col>
                        <Col xs={12} sm={4} className={styles.sideBarSection}>
                            <Image src="assets/nature-boy.jpg" />
                            <p className="text-justify">
                                Decide where your cloud lives. Maybe he lives
                                right in here. There he comes. But we're not
                                there yet, so we don't need to worry about it.
                            </p>
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
        );
    }
}
