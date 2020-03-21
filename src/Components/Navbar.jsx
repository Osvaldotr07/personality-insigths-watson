import React, {useEffect, useState} from 'react'
import {Col,Row ,Container} from 'react-bootstrap/'
import {Navbar} from 'react-bootstrap'
import {GiHamburgerMenu} from 'react-icons/gi'
// import '../Styles-components/Navbar.css'


export default function NavbarCom(props){
    const [mediaQuery, setMediaQuery] = useState(false)
    useEffect(() => {
        const media = window.matchMedia("(min-width: 480px)")
        media.addListener(e => {
            console.log('button', e)
            if(e.matches){
                setMediaQuery(false)
            }
            else {
                setMediaQuery(false)
            }
        })
    })
    return(
        <React.Fragment>
            <Container fluid={true}>
                <Row>
                    <Col sm={6}>
                        <Navbar className="container-navbar">
                            {/* <Navbar.Brand href="#home">Hello world</Navbar.Brand> */}
                            <h1>Personality Insights with watson</h1>
                            {mediaQuery && (
                                <GiHamburgerMenu size={30}  className="burgerButton" style={{cursor: 'pointer'}} onClick={() => props.fnBurgerOpen()}/>
                            )}
                        </Navbar>
                    </Col>
                    
                </Row>
            </Container>
        </React.Fragment>
    )
}

