import React from 'react'
import'../styles/home.css'
import { Container,Row, Col } from 'reactstrap'
// import heroImg from '../assets/images/hero-img01.jpg'
// import heroImg02 from '../assets/images/hero-img02.jpg'
// import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import Subtitle from '../shared/Subtitle'

function Home() {
  return (
  <>
   
   <section>

     <Container>
        
        <Row>
           <Col lg='6'>
              
              <div className='hero__content'>
                <div className="hero__subtitle d-flex align-item-center">

                  <Subtitle subtitle={"Know Before You Go"}/>

                  <img src={worldImg} alt="" />

                  

                </div>

             
                <h1>Traveling opens the door to Creating{""} <span className='highlight'>memories</span></h1>
                <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, sit consequuntur nesciunt odit omnis veritatis modi sint. Corrupti ipsam facere ut accusamus rerum hic, consequuntur aliquid ad voluptates incidunt quibusdam voluptate beatae harum laboriosam sint numquam dignissimos nihil aperiam tempora.
                </p>
              </div>
              
           </Col>

        </Row>


     </Container>


   </section>
  
  
  
  </>
  )
}

export default Home