import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAnswers } from '../redux/selectors';
import PropTypes from 'prop-types';

class Result extends React.Component {
  render() {
    const totalResult = this.props.resultArray.filter((question) =>  question).length;
    const answers = [];
    const totalQuestions = this.props.resultArray.length;
    for (let i=0;i<totalQuestions;i++) {
      if(this.props.resultArray[i]) {
        answers.push(<p key={i} style={{color: 'green'}}>Question #{`${i+1}`} CORRECT</p>);
      } else {
        answers.push(<p key={i} style={{color: 'red'}}>Question #{`${i+1}`} INCORRECT</p>);
      }
      answers.push();
    }
    return (
      <React.Fragment>
        <div id="quiz">
          <h2>Your Score: {totalResult} out of {totalQuestions}</h2>
          {answers}
        </div>
        <footer id="options">
          <p><Link to="/questions/0">Retake the quiz!</Link></p>
          <p><Link to="/question">Contribute to question set!</Link></p>
        </footer>
      </React.Fragment>
    );
  }
}

Result.propTypes = {
  resultArray: PropTypes.array.isRequired
}

const mapStateToProps = (state, ownProps) => {
  const resultArray = getAnswers(state);
  return { resultArray };
};

export default connect(mapStateToProps, {})(Result);
