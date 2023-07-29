import { Button, Card, Form } from "react-bootstrap";
import { SubmitForm } from "./controllers/submit";
import { centeringStyle } from "../../styles/styles";

import Logo from "../Logo/Logo";
import { useState } from "react";

const cardOuterContainerStyle: any = {
    ...centeringStyle,
    position: 'relative',
    top: '2.55vmin'
};

const cardContainerStyle: any = {
    width: '80vmin',
    padding: '2vmin',
    background: 'rgb(34, 34, 34)',
    border: '.35vh solid black',
    marginBottom: '4vmin'
};

// CONTACT FORM COMPONENT
const ContactForm: React.FC = () => {
    let alertClearingTimeout: any;

    // WHEN SUBMIT BUTTON IS PRESSED, SET STATE AFTER API REQUEST
    const [submissionStatus, setSubmissionStatus]: any = useState({});
    const submitButtonPressed = async (event: any) => {
        setSubmissionStatus({});
        clearTimeout(alertClearingTimeout);

        // WAIT FOR SUBMISSION
        const res = await SubmitForm(event);
        setSubmissionStatus(res);

        // CLEAR ALERT AFTER A BIT
        alertClearingTimeout = setTimeout(() => {
            setSubmissionStatus({});
        }, 10000);
    }

    // RETURN ELEMENT
    return (
        <>
            <div style={cardOuterContainerStyle}>
                <Card style={cardContainerStyle}>
                    <Card.Body>
                        {submissionStatus['success'] === true &&
                            <div className="alert alert-success" role="alert">
                                The email has been submitted! Thank you so much!
                            </div>
                        }

                        {submissionStatus['success'] === false &&
                            <div className="alert alert-danger" role="alert">
                                There was an error with sending the email! Please try again later!
                            </div>
                        }

                        <Logo />

                        <Card.Title className="text-light">Contact Me</Card.Title>
                        <Card.Subtitle className="mb-2 text-white-50">Alexander Arizola</Card.Subtitle>

                        <Card.Text className="mt-4 text-light">
                            Hello! You may fill this form out and press the submit button to send me an email!
                        </Card.Text>

                        <Form onSubmit={submitButtonPressed}>
                            <Form.Group className="mb-3" controlId="contactForm.Name">
                                <Form.Label className="text-light">Name *</Form.Label>
                                <Form.Control type="text" name="name" placeholder="John Appleseed" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="contactForm.Email">
                                <Form.Label className="text-light">Email Address *</Form.Label>
                                <Form.Control type="email" name="email" placeholder="name@example.com" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="contactForm.Subject">
                                <Form.Label className="text-light">Subject *</Form.Label>
                                <Form.Control type="subject" name="subject" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="contactForm.Message">
                                <Form.Label className="text-light">Message *</Form.Label>
                                <Form.Control name="message" type="message" as="textarea" rows={5} required />
                            </Form.Group>

                            <div style={centeringStyle}>
                                <Button className="mt-3" variant="primary" type="submit">Submit</Button>
                            </div>
                        </Form>

                        <Card.Text className="mt-4 mb-1 text-light text-center">
                            This form was created in <a href="https://react.dev/" rel="noopener noreferrer" target="_blank">TypeScript React</a> and <a href="https://getbootstrap.com/" rel="noopener noreferrer" target="_blank">Bootstrap 5</a>. :)
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default ContactForm;
