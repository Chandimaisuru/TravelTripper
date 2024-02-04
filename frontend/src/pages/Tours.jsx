import React from 'react'
import CommonSection from '../shared/CommonSection'

import '../styles/tour.css'
import tourData from '../assets/data/tours';
import TourCard from '../shared/TourCard';
import SearchBar from '../shared/SearchBar';
import Newsletter  from '../shared/Newsletter';
import { Col, Container,Row } from 'reactstrap';


function Tours() {
  return (
    <>
    
     <CommonSection title={"All tours"}/>

     <section>
       <Container>
        <Row>
            <SearchBar/>
        </Row>
       </Container>
     </section>

     <section className='pt-0'>
       <Container>
        <Row>
           {tourData ?.map(tour =>(
             <Col lg='3'className='mb-4' key={tour.id}>
               <TourCard tour={tour}/>
             </Col>
           ))}

           {/* <Col lg='12'>
               <div className='gap-3 mt-4 pagination d-flex align-items-center justify-content-center'>
                {[...Array(pageCount).keys()].map(number =>(
                  <span key={number} onClick={number}>
                    {number + 1}

                  </span>
                ))          
                
                }

               </div>
           </Col> */}
        </Row>
       </Container>
     </section>
    
    </>
  )
}

export default Tours