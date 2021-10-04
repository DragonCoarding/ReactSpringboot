import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';


// 데이터를 날릴려면 상태로 보관하는게 제일편해서 상태를 먼저 만들어본다
const SaveForm = (props) => {

    const [book, setBook] = useState({
        title: "",
        author: ""
    });

    const changeValue = (e) => {
        setBook({
            ...book, // 기존값 지워지지말라고 
            // 동적으로 키값 변수 만들기 
            [e.target.name] : e.target.value
        });
    }

    const submitBook = (e) => {
        e.preventDefault(); // submit이 action을 안타고 자기 할일을 그만함.
        fetch("http://localhost:8011/book",{
            method: "POST",
            headers: {
                "Content-Type":"application/json; charset=utf-8"
            },
            body:JSON.stringify(book)
        })
        .then((res)=> {
        if(res.status === 201) { // 응답 스테이터스 값이 201이면 파싱해서 정상적으로 진행
           return res.json(); //json으로 파싱하는 부분
        }else{ // 응답값이 201이 아니면 널값
            return null;
        }
    })
        .then((res)=> { // 원래 Catch는 여기서 오류가나야실행되는데 아까는 안됨 ...
            if(res !== null){
                props.history.push("/");
            } else {
                alert('등록에 실패하였습니다.');
            }
        })
    };

    return (
            <Form onSubmit={submitBook}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>제목</Form.Label>
                    <Form.Control type="text" placeholder="책 제목을 입력해주세요" 
                    onChange={changeValue} name="title" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>저자</Form.Label>
                    <Form.Control type="text" placeholder="저자를 입력해주세요"  
                    onChange={changeValue} name="author"/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    등록
                </Button>
            </Form>    
    );
};

export default SaveForm;