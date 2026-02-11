import React from "react";
import "./App.css";
import gothfield from "./assets/gothfield.jpg";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <Container>
                <Row>
                    <div style={{ backgroundColor: "red" }}>
                        <Col>
                            <div
                                style={{
                                    width: "10px",
                                    height: "7px",
                                    backgroundColor: "red",
                                }}
                            ></div>
                            <header
                                className="App-header"
                                style={{ backgroundColor: "purple" }}
                            >
                                UD CISC275 with React Hooks and TypeScript By
                                Valerie Owens + Hello World
                            </header>
                        </Col>
                        <Col>
                            <div
                                style={{
                                    width: "10px",
                                    height: "7px",
                                    backgroundColor: "red",
                                }}
                            ></div>
                            <p>
                                Edit <code>src/App.tsx</code> and save. This
                                page will automatically reload.
                            </p>
                        </Col>
                    </div>
                </Row>
                <Row>
                    <div>
                        <Col>
                            <div
                                style={{
                                    width: "10px",
                                    height: "7px",
                                    backgroundColor: "red",
                                }}
                            ></div>
                            <h1
                                className="App-header"
                                style={{ backgroundColor: "blue" }}
                            >
                                Dab on the h8rs
                            </h1>
                        </Col>
                        <Col>
                            <div
                                style={{
                                    width: "10px",
                                    height: "7px",
                                    backgroundColor: "red",
                                }}
                            ></div>
                            <img
                                src={gothfield}
                                alt="Garfield dressed in goth"
                            />
                            <p>Reasons Garfield would be a bad husband:</p>
                        </Col>
                        <Col>
                            <div
                                style={{
                                    width: "10px",
                                    height: "7px",
                                    backgroundColor: "red",
                                }}
                            ></div>
                            <ul>
                                <li>He is a cat</li>
                                <li>He is lazy</li>
                                <li>He does not pay taxes</li>
                            </ul>
                        </Col>
                        <Col>
                            <div
                                style={{
                                    width: "10px",
                                    height: "7px",
                                    backgroundColor: "red",
                                }}
                            ></div>
                            <Button
                                onClick={() => {
                                    console.log("Hello World!");
                                }}
                            >
                                Log Hello World
                            </Button>
                        </Col>
                    </div>
                </Row>
            </Container>
        </div>
    );
}

export default App;
