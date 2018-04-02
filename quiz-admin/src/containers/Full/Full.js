import React, {Component} from 'react';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';

import Dashboard from '../../views/Dashboard/';
import SubjectList from '../../views/Subject/SubjectList/SubjectList';
import SubjectCreate from '../../views/Subject/SubjectCreate/SubjectCreate';
import UserCreate from '../../views/User/UserCreate/UserCreate'
import UserList from '../../views/User/UserList/UserList'
import UserEdit from '../../views/User/UserEdit/UserEdit'
import QuestionCreate from '../../views/Questions/QuestionsCreate/QuestionsCreate'
import QuestionList from '../../views/Questions/QuestionList/QuestionList'
import AnswerCreate from '../../views/Answers/AnswerCreate/AnswerCreate'
import AnswerList from '../../views/Answers/AnswerList'

class Full extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props}/>
          <main className="main">
            <Breadcrumb />
            <Container fluid>
              <Switch>
                <Route path="/dashboard" name="Dashboard" component={Dashboard}/>
                <Route path="/subject/list" name="SubjectList" component={SubjectList}/>
                <Route path="/subject/new" name="SubjectCreate" component={SubjectCreate}/>
                <Route path="/user/list" name="UserList" component={UserList}/>
                <Route path="/user/new" name="UserCreate" component={UserCreate}/>
                <Route path="/user/edit/:id" name="UserEdit" component={UserEdit}/>
                <Route path="/question/new/" name="QuestionCreate" component={QuestionCreate}/>
                <Route path="/question/list/" name="QuestionList" component={QuestionList}/>
                <Route path="/question/:id/answer/new" name="AnswerCreate" component={AnswerCreate} />
                <Route path="/question/:id/answer/list" name="AnswerList" component={AnswerList} />
                <Redirect from="/" to="/dashboard"/>
              </Switch>
            </Container>
          </main>
          <Aside />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Full;
