import { Container, Navbar, Nav} from 'react-bootstrap'
import React from 'react'
import { Link } from 'react-router-dom'

const Navmenu = () => {
  return (
    <Container>
        <Link to='/'>
          <img src={require('../img/logo_melon.png')} alt= "로고" />
        </Link>
        <Navbar>
            <Nav className="me-auto">
                <Nav.Link href="/">멜론차트</Nav.Link>
                <Nav.Link href="/">장르음악</Nav.Link>
                <Nav.Link href="ticket">이용권구매</Nav.Link>
                <Nav.Link href="login">로그인</Nav.Link>
            </Nav>
        </Navbar>
    </Container>
  )
}

export default Navmenu
