import React, { Component } from 'react';
import { Card, CardTitle, Col, Container, Row } from 'reactstrap';
export default class CategoriesComponent extends Component {
    // this.props.history.push('/quiz/start')
    render() {
        return (
            <Container>
                <h1>Front-End</h1>
                <Row>
                    <Col>
                        <Card className="answer1 clickable"
                            // onClick={()}
                            body inverse>
                            <h1><CardTitle>CSS</CardTitle></h1>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="answer2 clickable" body inverse>
                            <h1><CardTitle>HTML</CardTitle></h1>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="answer3 clickable" body inverse>
                            <h1><CardTitle>JavaScript</CardTitle></h1>
                        </Card>
                    </Col>
                </Row>
                <h1>Back-End</h1>
                <Row>
                    <Col>
                        <Card className="answer4 clickable" body inverse>
                            <h1><CardTitle>Node</CardTitle></h1>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="answer5 clickable" body inverse>
                            <h1><CardTitle>Express</CardTitle></h1>
                        </Card>
                    </Col>
                </Row>
                <h1>Data Structures / Algorithms</h1>
                <Row>
                    <Col>
                        <Card className="question clickable" body inverse>
                            <h1><CardTitle>Data Structures / Algorithms</CardTitle></h1>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}