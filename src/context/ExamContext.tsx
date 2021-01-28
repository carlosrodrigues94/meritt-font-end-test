import { AxiosResponse } from 'axios';
import React, { createContext, useCallback, useEffect, useState } from 'react';
import api from '../services/api';

import { Event, Exam } from '../types/types';

interface IAnswer {
  id: string;
  id_question: string;
  value: string;
}

export interface IQuestion {
  ref: string;
  id_group: string;
  question: string;
  type: string;
  answers: IAnswer[];
  questionId: string;
}

interface IRootObject {
  id: string;
  events: Event;
  exam: Exam;
  questions: {
    [id: string]: {
      id_group: string;
      question: string;
      type: string;
      ref: string;
      answers: {
        [id: string]: {
          id_question: string;
          value: string;
        };
      };
    };
  };
}

interface IExamContext {
  questions: IQuestion[];
}

const ExamContext = createContext<IExamContext>({} as IExamContext);

const ExamProvider: React.FC = ({ children }) => {
  // const [exam, setExam] = useState<IRootObject[]>([]);
  const [questions, setQuestions] = useState<IQuestion[]>([]);

  const getExam = useCallback(async () => {
    try {
      const response: AxiosResponse<IRootObject[]> = await api.get('/proofs');

      const exam = response.data;

      if (!Array.isArray(exam) || !exam) return [];

      const questionsIdsMaped = Object.keys(exam[0].questions).map(
        item => item,
      );

      const questionsArray: IQuestion[] = questionsIdsMaped.map(item => {
        const { answers } = exam[0].questions[item];
        const answersIds = Object.keys(answers).map(id => id);

        const answersArray: IAnswer[] = answersIds.map(answerId => ({
          ...answers[answerId],
          id: answerId,
          questionId: item,
        }));

        const { id_group, question, type, ref } = exam[0].questions[item];

        const questionParsed: IQuestion = {
          id_group,
          question,
          type,
          ref,
          answers: answersArray,
          questionId: item,
        };

        return questionParsed;
      });

      setQuestions(questionsArray);
    } catch (err) {
      console.log('err');
    }

    return [];
  }, []);

  useEffect(() => {
    getExam();
  }, [getExam]);

  return (
    <ExamContext.Provider value={{ questions }}>
      {children}
    </ExamContext.Provider>
  );
};

export { ExamContext, ExamProvider };