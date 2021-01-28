import * as _ from 'lodash';

interface IQuestion {
  id: number;
  descriptions: string;
  isCompleted: boolean;
  isMarked: boolean;
  isSelected: boolean;
}

interface IUsePersistedQuestion {
  questions: IQuestion[];
}

const questionsQtd = 45;
const localStorageKey = '@Somos:test-job-questions-storaged';

const usePersistedQuestions = (): IUsePersistedQuestion => {
  const getQuestions = (questionsQuantity: number): IQuestion[] => {
    const questions: IQuestion[] = [];

    for (let i = 0; i <= questionsQuantity; i += 1) {
      questions.push({
        id: i,
        descriptions: 'questions description',
        isCompleted: _.random(0, questionsQuantity) > i,
        isMarked: _.random(0, questionsQuantity) > i,
        isSelected: _.random(0, questionsQuantity) > i,
      });
    }

    return questions;
  };

  const questionStoraged = localStorage.getItem(localStorageKey);

  if (!questionStoraged) {
    const questions = getQuestions(questionsQtd);
    const questionsStringfied = JSON.stringify(questions);
    localStorage.setItem(localStorageKey, questionsStringfied);
    return { questions };
  }

  const questionsParsed: IQuestion[] = JSON.parse(questionStoraged);

  if (questionsParsed.length) {
    return { questions: questionsParsed };
  }

  const questions = getQuestions(questionsQtd);

  const questionsStringfied = JSON.stringify(questions);
  localStorage.setItem(localStorageKey, questionsStringfied);

  return { questions };
};
export { usePersistedQuestions };
