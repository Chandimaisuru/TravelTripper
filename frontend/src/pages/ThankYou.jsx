import React from 'react'
import { Container,Row,Button,Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import'../styles/thank-you.css'

function ThankYou() {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12 pt-5 text-center">
            <div className="thank__you">
              <span>
                <i className="ri-checkbox-circle-fill"></i>
              </span>
              <h1 className="mb-3 fw-semibold">Thank You</h1>
              <h3 className="mb-4">Your Trip is booked.</h3>

              <Button className="mt-4 btn primary__btn w-25 ">
                <Link to='/home'>Back to home</Link>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ThankYou