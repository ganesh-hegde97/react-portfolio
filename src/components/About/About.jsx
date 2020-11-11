import React, { Component } from "react";
import { Container, Col, Image } from "react-bootstrap";
import Footer from "../Layouts/Footer";

import styles from "./About.module.css";

export default class About extends Component {
    render() {
        return (
            <div className={styles.container}>
                <Image
                    src="assets/nature-boy.jpg"
                    className={styles.headerImage}
                />
                <Col xs={12} sm={{ span: 8, offset: 2 }}>
                    <Container>
                        <Image
                            src="assets/person-1.jpg"
                            rounded
                            className={styles.aboutProfile}
                        />
                        <h3>Mandis The Master</h3>
                        <div className="text-justify">
                            <p>
                                If you overwork it you become a cloud killer.
                                There's nothing worse than a cloud killer. And
                                right there you got an almighty cloud. We don't
                                have anything but happy trees here. Follow the
                                lay of the land. It's most important.
                            </p>
                            <p>
                                You create the dream - then you bring it into
                                your world. It's beautiful - and we haven't even
                                done anything to it yet. Maybe there's a little
                                something happening right here. Everything is
                                happy if you choose to make it that way.
                            </p>
                            <p>
                                Decide where your cloud lives. Maybe he lives
                                right in here. There he comes. But we're not
                                there yet, so we don't need to worry about it.
                            </p>
                            <p>
                                Little trees and bushes grow however makes them
                                happy. I sincerely wish for you every possible
                                joy life could bring. It's cold, but it's
                                beautiful. Brown is such a nice color.
                            </p>
                        </div>
                    </Container>
                </Col>
                <Footer />
            </div>
        );
    }
}
