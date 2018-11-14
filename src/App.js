import React, { Component } from 'react';
import './App.css';
import WordContainer from './components/words/wordcontainer';
import Sentences from './components/sentences/sentences';
import MadLibCombined from './components/madlibcombined/madlibcombined';
import {Switch, Route, Link} from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {

    return (
      <div className="App">
      	<div className="nav">
      		<Link to="words">Words</Link>
      		<Link to="sentences">Sentences</Link>
      		<Link to="combined">MadLib</Link>
      	</div>
      	<Switch>
      		<Route exact path="/" component={WordContainer}/>
      		<Route path="/words" component={WordContainer}/>
      		<Route path="/sentences/:newsentence?" component={Sentences}/>
      		<Route path="/combined" component={MadLibCombined}/>
      	</Switch>
      </div>
    );
  }
}

export default App;










