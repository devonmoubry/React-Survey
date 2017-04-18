export default function AppReducer (state, action) {
  if (state === undefined) {
    return {
      answers: [null, null, null, null, null, null, null, null, null, null]
    };
  }

  switch(action.type) {
    case "SAVE_ANSWER":
      console.log('It worked the save answer thing.');
      const questionId = action.question_id;
      const newAnswer = action.answer;

      let answers = state.answers;
      answers[questionId - 1] = newAnswer;

      var newState = {
        answers: answers
      };

      return Object.assign({}, state, newState);
    default:
      return state;
  }
}
