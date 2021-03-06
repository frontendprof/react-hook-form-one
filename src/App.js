import React from "react"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from "./components/Header"
import StepOne from "./components/StepOne"
import StepTwo from "./components/StepTwo"
import StepThree from "./components/StepThree"
import Result from "./components/Result"

function App() {
  return (
    <>
    <Header />
    <Router>
      <Switch>
        <Route exact path="/" component={StepOne} />
        <Route path="/step2" component={StepTwo} />
        <Route path="/step3" component={StepThree} />
        <Route path="/result" component={Result} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
