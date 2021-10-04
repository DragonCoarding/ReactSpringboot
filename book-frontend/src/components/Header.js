import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';



const Header = () => {
    return (
        <>
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/">홈</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="/joinForm">회원가입</Nav.Link>
            <Nav.Link href="/loginForm">로그인</Nav.Link>
            <Nav.Link href="/saveForm">글쓰기</Nav.Link>
            <Nav.Link href="#pricing">리액트스프링 CRUD 구현중!</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        </>
    );
};

export default Header;