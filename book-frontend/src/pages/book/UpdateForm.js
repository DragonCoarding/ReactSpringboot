import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';



const UpdateForm = (props) => {

    const id = props.match.params.id;

    const [book, setBook] = useState({
        title: "",
        author: ""
    });

    
    useEffect(() => {
        fetch("http://localhost:8011/book/"+id)
        .then(res=>res.json())
        .then(res=>{
            setBook(res);
        });
    }, []);

    const changeValue = (e) => {
        setBook({
            ...book,
            [e.target.name] : e.target.value
        });
    }

    const submitBook = (e) => {
        e.preventDefault(); 
        fetch("http://localhost:8011/book/"+id,{
            method: "PUT",
            headers: {
                "Content-Type":"application/json; charset=utf-8"
            },
            body:JSON.stringify(book)
        })
        .then((res)=> {
        if(res.status === 200) {
           return res.json(); 
        }else{
            return null;
        }
    })
        .then((res)=> { 
            if(res !== null){
                props.history.push("/book/"+id);
            } else {
                alert('수정에 실패하였습니다.');
            }
        })
    };

    return (
            <Form onSubmit={submitBook}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>제목</Form.Label>
                    <Form.Control type="text" placeholder="수정할 책 제목을 입력해주세요" 
                    onChange={changeValue} name="title"  value={book.title}/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>저자</Form.Label>
                    <Form.Control type="text" placeholder="수정 할 저자를 입력해주세요"  
                    onChange={changeValue} name="author" value={book.author}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    수정
                </Button>
            </Form>    
    );
};

export default UpdateForm;