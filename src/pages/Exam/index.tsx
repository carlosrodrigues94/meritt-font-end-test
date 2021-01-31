import React, { useCallback, useContext, useEffect, useState } from 'react';
import htmlParser from 'html-react-parser';
import { Box, Button } from '@material-ui/core';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

import SubHeader from './components/SubHeader';
import { ExamContext, IQuestion } from '../../context/ExamContext';
import { ContentQuestion, Label } from './styles';
import alphabetArray from '../../utils/alphabetArray';
import landscapeImg from '../../assets/landscapeImg.jpg';
import ButtonThreeDots from './components/ButtonThreeDots';
import { calculatePercentage } from '../../utils/calculatePercentage';
import SnackbarAlert from './components/SnackbarAlert';
import { StylesContext } from '../../context/StylesContext';

interface IQuestionAnswered {
  id: string;
  answerId: string;
}

const Exam: React.FC = () => {
  const { questions, getQuestions } = useContext(ExamContext);
  const { classes } = useContext(StylesContext);

  const [page, setPage] = useState(0);
  const [isOpenAlert, setIsOpenAlert] = useState({
    isOpen: false,
    message: '',
  });
  const [questionsBookmarked, setQuestionsBookmarked] = useState<string[]>([]);
  const [questionsInPage, setQuestionsInPage] = useState<IQuestion[]>([]);
  const [questionsAnswered, setQuestionAnswered] = useState<
    IQuestionAnswered[]
  >([]);
  const [answersIdIgonored, setAnswersIdIgnored] = useState<string[]>([]);

  const handleAnswerQuestion = useCallback(
    (questionId: string, answerId: string) => {
      const answerExists = questionsAnswered.find(question => question.id);

      if (!answerExists) {
        setQuestionAnswered([
          ...questionsAnswered,
          { id: questionId, answerId },
        ]);
        return;
      }

      const questionsAnsweredFiltered = questionsAnswered.filter(
        question => question.id !== questionId,
      );

      setQuestionAnswered([
        ...questionsAnsweredFiltered,
        { id: questionId, answerId },
      ]);
    },
    [questionsAnswered],
  );

  const handleIgnoreAnswer = useCallback(
    (answerId: string) => {
      const answerExists = answersIdIgonored.find(
        answer => answer === answerId,
      );
      if (answerExists) {
        const answersFiltered = answersIdIgonored.filter(
          answer => answer !== answerId,
        );
        setAnswersIdIgnored(answersFiltered);
        return;
      }

      setQuestionAnswered([]);
      setAnswersIdIgnored(oldState => [...oldState, answerId]);
    },
    [answersIdIgonored],
  );

  const handleClickNext = useCallback(() => {
    if (page === questions.length - 1) return;
    setPage(oldState => oldState + 1);
  }, [page, questions]);

  const handleClickBack = useCallback(() => {
    if (page === 0) return;
    setPage(oldState => oldState - 1);
  }, [page]);

  const handleClickAddBookmark = useCallback(() => {
    if (!questionsInPage) return;
    if (!questionsInPage.length) return;
    if (!questionsInPage[0]) return;
    if (!questionsInPage[0].answers.length) return;

    const { questionId } = questionsInPage[0];

    const questionBookmarked = questionsBookmarked.find(
      question => question === questionId,
    );

    if (questionBookmarked) {
      const questionsBookmarkedUpdated = questionsBookmarked.filter(
        question => question !== questionId,
      );

      setQuestionsBookmarked(questionsBookmarkedUpdated);
      return;
    }
    setIsOpenAlert({
      isOpen: true,
      message: 'Marcada para revisar mais tarde',
    });

    setQuestionsBookmarked([...questionsBookmarked, questionId]);
  }, [questionsBookmarked, questionsInPage]);

  const validateQuestionIsBookmarked = useCallback(() => {
    if (!questionsInPage) return false;
    if (!questionsInPage.length) return false;
    if (!questionsInPage[0]) return false;
    if (!questionsInPage[0].answers) return false;
    if (!questionsInPage[0].answers.length) return false;

    const question = questionsInPage[0].questionId;

    if (!question) return false;
    if (questionsBookmarked.includes(question)) {
      return true;
    }

    return false;
  }, [questionsBookmarked, questionsInPage]);

  useEffect(() => {
    const questionChoosed = questions[page];
    const questionsArray = [questionChoosed];
    if (!questionsArray.length) return;
    setQuestionsInPage(questionsArray);
  }, [questions, page]);

  useEffect(() => {
    getQuestions();
  }, [getQuestions]);

  return (
    <>
      <SubHeader
        examTitleInitials="LC"
        examTitleName="Linguagens e Códigos"
        progress={calculatePercentage(page, questions.length - 1)}
      />

      <SnackbarAlert
        isOpen={isOpenAlert.isOpen}
        onClose={() => setIsOpenAlert({ isOpen: false, message: '' })}
      />

      <Box component="div" className={classes.examContainer}>
        <ContentQuestion>
          <Box component="div" className={classes.containerBookmark}>
            <b className={classes.questionNumber}>{page + 1}</b>
            <Button
              type="button"
              className={classes.buttonBookmark}
              onClick={() => handleClickAddBookmark()}
            >
              {validateQuestionIsBookmarked() ? (
                <BookmarkIcon
                  className={classes.bookmarkIconQuestion}
                  style={{ color: '#FA558F' }}
                />
              ) : (
                <BookmarkBorderIcon
                  className={classes.bookmarkIconQuestion}
                  style={{ color: '#FA558F' }}
                />
              )}
            </Button>
          </Box>

          {questionsInPage.map(item => {
            if (!item) return <React.Fragment key={Math.random()} />;
            return (
              <React.Fragment key={item?.question}>
                <img src={landscapeImg} alt="img-landscape" />
                {htmlParser(item?.question)}
                {item.answers.map((answer, index) => (
                  <Label
                    htmlFor={answer.id}
                    key={answer.id}
                    isDisable={answersIdIgonored.includes(answer.id)}
                  >
                    <strong>{alphabetArray[index]}</strong>
                    <input
                      type="radio"
                      id={answer.id}
                      name="answer"
                      disabled={answersIdIgonored.includes(answer.id)}
                      onChange={() => {
                        handleAnswerQuestion(answer.id_question, answer.id);
                      }}
                    />

                    <b>
                      {questionsAnswered.find(
                        question => question.answerId === answer.id,
                      ) ? (
                        <RadioButtonCheckedIcon className="icon-radio" />
                      ) : (
                        <RadioButtonUncheckedIcon className="icon-radio" />
                      )}
                    </b>
                    <div>{htmlParser(answer.value)}</div>
                    <ButtonThreeDots
                      onClickUnMarkOption={() => handleIgnoreAnswer(answer.id)}
                      onClickIgnoreOption={() => handleIgnoreAnswer(answer.id)}
                      textBtn1="Desmarcar essa opção"
                      textBtn2={
                        answersIdIgonored.includes(answer.id)
                          ? 'Considerar'
                          : 'Desconsiderar essa opção'
                      }
                    />
                  </Label>
                ))}
              </React.Fragment>
            );
          })}

          <Box component="div" className={classes.containerButtonsNavigation}>
            <Button
              type="button"
              className={classes.buttonNavigatePageBack}
              onClick={handleClickBack}
            >
              <KeyboardArrowLeftIcon className={classes.buttonNavigateIcon} />
              <b className={classes.buttonNavigateText}>Anterior</b>
            </Button>
            <Button
              type="button"
              className={classes.buttonNavigatePageNext}
              onClick={handleClickNext}
            >
              <b className={classes.buttonNavigateText}>Próximo</b>
              <KeyboardArrowRightIcon className={classes.buttonNavigateIcon} />
            </Button>
          </Box>
        </ContentQuestion>
      </Box>
    </>
  );
};

export default Exam;
