import React, { useState } from 'react';
import { fetchQuizQuestions } from './services/api';
import useSound from 'use-sound';
import { ValueType, ActionMeta } from 'react-select';

// @ts-ignore
import CorrectSFX from './assets/sounds/correct.mp3';
// @ts-ignore
import IncorrectSFX from './assets/sounds/incorrect.mp3';
// @ts-ignore
import GameOverSFX from './assets/sounds/gameOver.mp3';

// Components
import Home from './components/Home';
import Game from './components/Game';
import { FaSpinner } from 'react-icons/fa';

// Types
import { Difficulty, QuestionState } from './services/api';
import { Option } from './components/Home';

// Styles
import { GlobalStyle } from './App.styles';

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

export const TOTAL_QUESTIONS = 10;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const [playCorrect] = useSound(CorrectSFX);
  const [playIncorrect] = useSound(IncorrectSFX);
  const [playGameOver] = useSound(GameOverSFX);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY, selectedOption?.value);

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;

      if (correct) {
        playCorrect();
        setScore(score + 1);
      } else {
        playIncorrect();
      }

      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };

      setUserAnswers([...userAnswers, answerObject]);
    } else {
      playGameOver();
    }
  };

  const nextQuestion = () => {
    const nextQuestion = number + 1;

    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  const handleOptionChange = (value: ValueType<Option, false>, meta: ActionMeta<Option>) => {
    setSelectedOption(value);
  };

  const goHome = () => setGameOver(true);

  return (
    <>
      <GlobalStyle />

      {gameOver && <Home onStart={startTrivia} selectedOption={selectedOption} onChange={handleOptionChange} />}

      {!gameOver && !loading ? (
        <Game
          onAnswer={checkAnswer}
          onNext={nextQuestion}
          onGoHome={goHome}
          onRestart={startTrivia}
          questions={questions}
          userAnswers={userAnswers}
          number={number}
          gameOver={gameOver}
          loading={loading}
          score={score}
        />
      ) : null}

      {loading && (
        <p className="loading">
          Loading...
          <FaSpinner className="spin" color="white" />
        </p>
      )}
    </>
  );
};

export default App;
