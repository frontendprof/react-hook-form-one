import React from "react"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Header />
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/step2" component={StepTwo} />
        <Route path="/step3" component={StepThree} />
        <Route path="/step4" component={StepFour} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
