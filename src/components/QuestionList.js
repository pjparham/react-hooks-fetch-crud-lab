import React, { useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, setQuestions}) {

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then ((r => r.json()))
    .then((questionData) => setQuestions(questionData))
  })

  function handleDeleteQuestion(deletedQuestion){
    const updatedQuestions = questions.filter((question) => question.id !== deletedQuestion.id);
    setQuestions(updatedQuestions)
  }

  function handleUpdateQuestion(updatedQuestion){
    const updatedQuestions = questions.map((question) => {
      if (question.id === updatedQuestion.id) {
        return updatedQuestion
      } else {return question}
    });
    setQuestions(updatedQuestions)
  }


  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map((question) => <QuestionItem onUpdateQuestion={handleUpdateQuestion} onDeleteQuestion={handleDeleteQuestion} key={question.id} question={question}/>)}</ul>
    </section>
  );
}

export default QuestionList;
