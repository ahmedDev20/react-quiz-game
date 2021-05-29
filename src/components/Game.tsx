import React from 'react';

// Components
import QuestionCard from './QuestionCard';

// Constants
import { TOTAL_QUESTIONS } from '../App';

// Styles
import { Wrapper, Infos, ButtonWrapper } from './Game.styles';

// Types
import { AnswerObject } from '../App';
import { QuestionState } from '../services/api';

type Props = {
  questions: QuestionState[];
  userAnswers: AnswerObject[];
  gameOver: boolean;
  loading: boolean;
  number: number;
  score: number;
  onAnswer: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onNext: () => void;
  onRestart: () => void;
  onGoHome: () => void;
};

const Game: React.FC<Props> = ({ questions, userAnswers, number, gameOver, loading, score, onAnswer, onNext, onRestart, onGoHome }) => {
  return (
    <Wrapper>
      <div className="actions">
        <ButtonWrapper visible={!loading && userAnswers.length === TOTAL_QUESTIONS}>
          <button className="go-home" onClick={onGoHome}>
            Main Menu
          </button>
        </ButtonWrapper>

        <ButtonWrapper visible={!loading && userAnswers.length === TOTAL_QUESTIONS}>
          <button className="restart" onClick={onRestart}>
            Restart
          </button>
        </ButtonWrapper>
      </div>

      <Infos>{!gameOver && !loading ? <p className="score">Score: {score}</p> : null}</Infos>

      {!loading && !gameOver && (
        <QuestionCard
          category={questions[number].category}
          question={questions[number].question}
          questionNr={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={onAnswer}
        />
      )}

      <ButtonWrapper visible={!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1}>
        <button className="next" onClick={onNext}>
          Next Question
        </button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Game;
