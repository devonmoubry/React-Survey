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

    case "SUBMIT_ANSWERS":
      console.log('submit answers');
      $.ajax({
        type: 'POST',
        url: 'https://api.backendless.com/v1/data/MovieQuestions',
        headers: {
          "application-id": "24B65924-C870-5359-FF6E-4A5396B35700",
          "secret-key": "BFBB0F72-782B-9CF9-FF71-D0C15271A900",
          "application-type": "REST",
          "Content-Type": "application/json"
        },
        data: JSON.stringify({
          "Answers": JSON.stringify(state.answers)
        }),
        success: function (data, status, xhr) {
          console.log('victory!');
        },
        error: function(data, status, xhr) {
          console.log('error', data);
        }
      })
      return state;

    default:
      return state;
  }
}
