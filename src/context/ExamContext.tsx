import { AxiosResponse } from 'axios';
import React, { createContext, useCallback, useState } from 'react';
import api from '../services/api';

import { Event, Exam } from '../types/types';

interface IRootObject {
  id: string;
  events: Event;
  exam: Exam;
  questions: {
    [id: string]: {
      id_group: string;
      question: string;
      type: string;
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
  exam: IRootObject[];
  getExam: () => Promise<void>;
}

const ExamContext = createContext<IExamContext>({} as IExamContext);

const ExamProvider: React.FC = ({ children }) => {
  const [exam, setExam] = useState<IRootObject[]>([]);

  const getExam = useCallback(async () => {
    try {
      const response: AxiosResponse<IRootObject[]> = await api.get('/proofs');

      setExam(response.data);
    } catch (err) {
      console.log('err');
    }
  }, []);

  return (
    <ExamContext.Provider value={{ exam, getExam }}>
      {children}
    </ExamContext.Provider>
  );
};

export { ExamContext, ExamProvider };
