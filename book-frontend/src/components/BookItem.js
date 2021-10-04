import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// const BookItem = ({ id, title, author}) => {} 이런식으로 구조분할한걸 애초에 요기서 받아도됨 
// 이런 방식들이 더 쉽지만 book 말고는 받을수없음
const BookItem = (props) => {
    const { id, title, author} = props.book;
    return (
       <Card>
           <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Link to={"/book/" + id} className="btn btn-primary">
                    상세보기
                </Link> 
           </Card.Body>
           <br /> 
       </Card>
    );
};

export default BookItem;