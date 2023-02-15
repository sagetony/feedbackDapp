import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Button, Col, Container, Row } from "react-bootstrap";



const Feedback = ({feedback}) => {

    const [feedbackInfo, setFeedbackInfo] = useState("");

    const handler = (event) => {

        setFeedbackInfo(event.target.value)
    }

    const feedBackButton =  async (event) => {
        
        event.preventDefault();
        // console.log(feedback)
        const deployedMsg = await feedback.sendFeedback(feedbackInfo);
        alert("Mining Process!! Kindly exercise patience")
        await deployedMsg.wait(1)
        alert("Feedback Successful")
        window.location.reload(false);

        
    }
  return (
    <Container className='text-white'>
        <Row>
            <Col ></Col>
            <Col md={8}>
            <div className="feedback-title">
                    <h2>2023 Upcoming General Election Feedback</h2>
                </div>
                <div className="feedback-text">
                    <p>This is a Dapp that will help get your view and opinion about the forthcoming general election!!! Please share your honest opinion.</p>
                </div>
                <div className="feedback-textarea "  style={{ textAlign: "center" }}>
                    <Form onSubmit={feedBackButton}>
                        <Form.Group className="mb-3">
                            <Form.Label>Share Your View</Form.Label>
                            <Form.Control as="textarea" rows={4} col={3} value ={feedbackInfo} onChange={handler} />
                        </Form.Group>
                        <Button type='submit'>Submit </Button>
                    </Form>
                </div>
            </Col>
            <Col></Col>

        </Row>
     
    </Container>
  )
}

export default Feedback
