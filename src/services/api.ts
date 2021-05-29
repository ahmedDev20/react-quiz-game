import axios from 'axios';
import _ from 'lodash';

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuestionState = Question & { answers: string[] };

export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty, category: number | undefined) => {
  const BASE_URL = 'https://opentdb.com/api.php';

  const { data } = await axios.get(BASE_URL, {
    params: {
      amount,
      difficulty,
      category,
      type: 'multiple',
    },
  });

  return data.results.map((question: Question) => ({
    ...question,
    answers: _.shuffle([...question.incorrect_answers, question.correct_answer]),
  }));
};

export const fetchQuizCategories = async () => {
  const { data } = await axios.get('https://opentdb.com/api_category.php');

  return data.trivia_categories;
};
