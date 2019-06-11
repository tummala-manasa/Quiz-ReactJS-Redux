import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { NotFound } from '../not-found/noRouteFound';
import PropTypes from 'prop-types';
import NewQuestion from '../new-question/newQuestion';
import Result from '../result/result';
import Questions from '../questions/questions';
import { connect } from 'react-redux';
import { getSavedQuestions } from "../redux/actions/saved-question-action";

class App extends React.Component {

  componentDidMount() {
    // if local storage contains questions, add to question set
    this.props.getSavedQuestions();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>What Do You Know?</h1>
          <Switch>
            <Route
              path="/questions/:id"
              render={(props) => <Questions {...props} />}
            />
            <Route
              path="/result"
              render={() => <Result />}
            />
            <Route
              path="/question"
              render={() => <NewQuestion />}
            />
            <Route component={NotFound} />
          </Switch>
        </header>
      </div>
    );
  }
}

App.propTypes = {
  getSavedQuestions: PropTypes.func.isRequired
}

const mapDispatchToProps = {
  getSavedQuestions
};

export default connect(null, mapDispatchToProps)(App);
