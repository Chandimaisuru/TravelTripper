import React from 'react'
import { Container,Row,Button } from 'reactstrap'
import { NavLink,Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

function Header() {
  return (
      <header className='header'>
        
        <Container>
            <Row>
                <div className='nav_wrapper d-flex align-items-center justify-content-between'>
                     
                     {/* ============logo=========== */}

                      <div className='logo'>
                        <img src={logo} alt=" logo" />
                      </div>

                     {/* ============logo end=========== */}

                </div>
                


            </Row>
            
            
            
            </Container>  





        
      </header>
  )
}

export default Header