import React from 'react';
import './newQuestion.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateQuestion } from "../redux/actions/question-action";
import PropTypes from 'prop-types';

class NewQuestion extends React.Component {
  handleSubmit = (e) => {
    let questionForm =  e.target;
    e.preventDefault();
    var newQuestion = {
      question: questionForm.question.value,
      choiceA: questionForm.choiceA.value,
      choiceB: questionForm.choiceB.value,
      choiceC: questionForm.choiceC.value,
      choiceD: questionForm.choiceD.value,
      correct: questionForm.correct.value
    };
    this.props.updateQuestion(newQuestion);

    questionForm.reset();
    return false;
  }
  render() {
    return (
      <form id="add-question" onSubmit={(e) => this.handleSubmit(e)}>
        <h2>Add a Question:</h2>
        <input type="text" required name="question" placeholder="Full Question" />
        <input type="text" required name="choiceA" placeholder="Choice A" />
        <input type="text" required name="choiceB" placeholder="Choice B" />
        <input type="text" required name="choiceC" placeholder="Choice C" />
        <input type="text" required name="choiceD" placeholder="Choice D" />
        Correct Answer: <select form="add-question" name="correct" placeholder="Correct Answer">
          <option value="A">Choice A</option>
          <option value="B">Choice B</option>
          <option value="C">Choice C</option>
          <option value="D">Choice D</option>
        </select>
        <input type="submit" value="Submit Question" />
        <hr />
        <footer>
            <p><Link to="/questions/0">Take the quiz!</Link></p>
        </footer>
      </form>
    );
  }
}

NewQuestion.propTypes = {
  updateQuestion: PropTypes.func.isRequired
}

const mapDispatchToProps = {
  updateQuestion
};
export default connect(null, mapDispatchToProps)(NewQuestion);
