import React from 'react';

import BookmarkIcon from '@material-ui/icons/Bookmark';
import CloseIcon from '@material-ui/icons/Close';
import {
  Container,
  ContentButtonsQuestions,
  Button,
  BackgroundDarken,
} from './styles';
import { usePersistedQuestions } from '../../hooks/usePersistedQuestions';

interface ISubHeaderQuestionSelectorProps {
  isOpen: boolean;
  onClickClose: () => void;
}
const SubHeaderQuestionSelector: React.FC<ISubHeaderQuestionSelectorProps> = ({
  isOpen,
  onClickClose,
}) => {
  const { questions } = usePersistedQuestions();

  return (
    <>
      <BackgroundDarken style={{ display: isOpen ? 'flex' : 'none' }} />
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
          {questions.map(question => (
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
    </>
  );
};

export default SubHeaderQuestionSelector;
