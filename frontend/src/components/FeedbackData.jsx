import { useCallback, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const FeedbackData = ({feedback}) => {
    const [feedbackMsg, setfeedbackMsg] = useState([])
    const feedbackDisplay = useCallback(async () => {
        console.log(await feedback.viewFeedback())
        const feedbackMsgs = await feedback.viewFeedback()
        // console.log(feedbackMsgs)
        setfeedbackMsg(feedbackMsgs)

    }, [feedback])

    useEffect(() =>{
        feedbackDisplay()
        console.log(feedbackMsg)

    }, [feedbackDisplay])

return (
    <div>
       <Container className="mt-4" id="feedback">
        <h3 className="mt-4 text-white mb-4">View Feedbacks</h3>
        {/* {console.log(feedbackMsg)} */}
        <Row>
        {feedbackMsg.map((item) =>
                
                <Col className='m-3'>
                    <Card style={{ width: '18rem'  }}>
                    <Card.Body style={{ color: "black" }}>
                        <Card.Text >
                        {item}
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
        )}
          </Row>
       
       </Container>
           
    </div>
)
} 

export default FeedbackData;