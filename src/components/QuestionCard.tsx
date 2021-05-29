import React from 'react';

// Types
import { AnswerObject } from '../App';

// Styles
import { ButtonWrapper, Wrapper } from './QuestionCard.styles';

type Props = {
  category: string;
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({ category, question, answers, callback, userAnswer, questionNr, totalQuestions }) => (
  <Wrapper>
    <div className="infos">
      <p className="number">
        Question: {questionNr} / {totalQuestions}
      </p>
      <p className="category">{category}</p>
    </div>

    <p className="question" dangerouslySetInnerHTML={{ __html: question }} />

    <div className="answers">
      {answers.map((answer, index) => (
        <ButtonWrapper key={index} correct={userAnswer?.correctAnswer === answer} userClicked={userAnswer?.answer === answer}>
          <button disabled={!!userAnswer} value={answer} onClick={callback}>
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </ButtonWrapper>
      ))}
    </div>
  </Wrapper>
);

export default QuestionCard;
