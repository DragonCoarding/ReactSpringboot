import React, { useEffect, useState } from 'react';
import BookItem from '../../components/BookItem';


const Home = () => {

const[books, setBooks] = useState([]);

// 함수 실행시 최초 한번 실행되는 것 + 상태값이 변경될때마다 실행됨
useEffect(() => {
    fetch("http://localhost:8011/book",{
        method: "GET" // 안적어도 디폴트값은 GET임 생략가능
    }).then(res=>res
        .json())
        .then(res=>{
        //첫번쨰 then 프로미스 응답 res를 json으로 변환 
        console.log(1,res);
        setBooks(res);
    }); // 비동기 함수
}, []) // 왜 빈배열을 넣었냐면 디펜던시임 얘가 setState로 다시 실행될때마다 다시 실행되면안되니까 한번만 실행되라고 넣음
       // useEffect 무한반복 막으려고 결국 넣는거
    return (
        <div>
            {books.map(book=>(
            <BookItem key={book.id} book={book}/>
            ))}
        </div>
    );
};

export default Home;