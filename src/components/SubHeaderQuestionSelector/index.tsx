import React from 'react';

import * as _ from 'lodash';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import CloseIcon from '@material-ui/icons/Close';
import { Container, ContentButtonsQuestions, Button } from './styles';

interface IQuestion {
  id: number;
  descriptions: string;
  isCompleted: boolean;
  isMarked: boolean;
  isSelected: boolean;
}

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

interface ISubHeaderQuestionSelectorProps {
  questionsQuantity: number;
  isOpen: boolean;
  onClickClose: () => void;
}
const SubHeaderQuestionSelector: React.FC<ISubHeaderQuestionSelectorProps> = ({
  questionsQuantity,
  isOpen,
  onClickClose,
}) => {
  return (
    <Container isOpen={isOpen}>
      <div className="content-button-close-question-number">
        <p>
          <b>20</b>
          /45
        </p>
        <button type="button" onClick={onClickClose}>
          <CloseIcon />
        </button>
      </div>
      <ContentButtonsQuestions>
        {getQuestions(questionsQuantity).map(question => (
          <Button
            type="button"
            key={question.id}
            onClick={() => console.log('clicou')}
            isSelected={question.isSelected}
            isMarked={question.isMarked}
            isCompleted={question.isCompleted}
          >
            {question.id}

            {question.isMarked && !question.isSelected && (
              <BookmarkIcon className="icon-bookmark-question" />
            )}
          </Button>
        ))}
      </ContentButtonsQuestions>
    </Container>
  );
};

export default SubHeaderQuestionSelector;
