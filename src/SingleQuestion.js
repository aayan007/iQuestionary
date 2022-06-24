import React, { useState } from "react";
import questions from "./data";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const SingleQuestion = () => {
  const [index, setIndex] = useState(0);
  const { id, title, info } = questions[index];

  const checkNumber = (number) => {
    if (number > questions.length - 1) {
      return 0;
    } else if (number < 0) {
      return questions.length - 1;
    } else {
      return number;
    }
  };

  const nextQuestion = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevQuestion = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const randomQuestion = () => {
    let randomNumber = Math.floor(Math.random() * questions.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <article className="question__container">
      <h4 className="questions">
        {id}. {title}
      </h4>
      <p className="answer">{info}</p>

      <div className="button__container">
        <button className="prev-btn" onClick={prevQuestion}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextQuestion}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomQuestion}>
        Random
      </button>
    </article>
  );
};

export default SingleQuestion;
