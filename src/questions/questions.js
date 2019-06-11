import React from 'react';
import './questions.css';
import { NotFound } from '../not-found/noRouteFound';
import { connect } from 'react-redux';
import {getQuestions} from '../redux/selectors';
import { updateResultArray } from "../redux/actions/answer-action";
import PropTypes from 'prop-types';

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disableSubmit: true
    };
  }
  handleChange = () => {
    let selectedElement = document.querySelector('input[name = choices]:checked');
    this.setState({disableSubmit: !selectedElement});
  }
  handleClick = (correctAnswer) => {
    // check if correct
    let selectedElement = document.querySelector('input[name = choices]:checked');
    // if (!selectedElement) {
    //   alert('Please select something');
    //   return;
    // }

    let id = this.props.match.params.id;
    this.props.updateResultArray(id, correctAnswer === selectedElement.value);

    // move to next question
    if (parseInt(id) >= this.props.questions.length - 1) {
      this.props.history.push('/result');
    } else {
      this.props.history.push(`/questions/${parseInt(id)+1}`);
    }
    this.setState({disableSubmit: true});
    // selectedElement.checked = false;
  }

  render() {
    const id = this.props.match.params.id;
    return (
      <div>
      {parseInt(id) < this.props.questions.length ?
      (<div id="quiz" key={id}>
          <h2 id="question">{this.props.questions[id].question}</h2>
          <div><input type="radio" name="choices" onChange={this.handleChange} value="A" /><span id="choiceA">{this.props.questions[id].choiceA}</span></div>
          <div><input type="radio" name="choices" onChange={this.handleChange} value="B" /><span id="choiceB">{this.props.questions[id].choiceB}</span></div>
          <div><input type="radio" name="choices" onChange={this.handleChange} value="C" /><span id="choiceC">{this.props.questions[id].choiceC}</span></div>
          <div><input type="radio" name="choices" onChange={this.handleChange} value="D" /><span id="choiceD">{this.props.questions[id].choiceD}</span></div>
          <button id="submit" disabled={this.state.disableSubmit} onClick={() => this.handleClick(this.props.questions[id].correct)}>Submit</button>
          <h3 id="quizStatus">Question {parseInt(id)+1} of {this.props.questions.length}</h3>
     </div>) : <NotFound />}
   </div>
   );
  }
}

Questions.propTypes = {
  updateResultArray: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  }),
  questions: (props, propName, componentName) => {
    if (props[propName].length <= 0 ) {
      return new Error(`${componentName} validation failed.`);
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const questions = getQuestions(state);
  return { questions };
};

const mapDispatchToProps = {
  updateResultArray
};

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
