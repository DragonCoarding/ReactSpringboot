import React from "react";
import {Container} from 'react-bootstrap';
import { Route } from "react-router";
import Header from "./components/Header";
import Home from "./pages/book/Home";
import Detail from "./pages/book/Detail";
import SaveForm from "./pages/book/SaveForm";
import UpdateForm from "./pages/book/UpdateForm";
import LoginForm from "./pages/user/LoginForm";
import JoinForm from "./pages/user/JoinForm";
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
  return (
  <div>
    <Header />
    <Container>
      <Route path="/" exact={true} component={Home} />
      <Route path="/saveForm" exact={true} component={SaveForm} />
      <Route path="/book/:id" exact={true} component={Detail} />
      <Route path="/loginForm" exact={true} component={LoginForm} />
      <Route path="/joinForm" exact={true} component={JoinForm} />
      <Route path="/updateForm/:id" exact={true} component={UpdateForm} />
    </Container>
  </div>
  );
}

export default App;
