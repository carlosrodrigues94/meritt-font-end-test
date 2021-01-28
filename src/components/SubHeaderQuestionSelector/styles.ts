import styled, { css } from 'styled-components';

interface IContainerProps {
  isOpen: boolean;
}

interface IButtonProps {
  isCompleted?: boolean;
  isMarked?: boolean;
  isSelected?: boolean;
}

const getButtonStyle = (props: IButtonProps) => {
  const { isCompleted, isSelected } = props;

  if (!isCompleted) {
    return css`
      border: 0;
      background: none;
      color: #757575;
    `;
  }

  if (isSelected) {
    return css`
      border: 1px solid #fa558f;
      background: #fa558f;
      color: #fff;
    `;
  }

  if (isCompleted) {
    return css`
      border: 1px solid #757575;
      background: none;
      color: #000;
    `;
  }

  return css``;
};

export const Container = styled.div<IContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 284px;
  min-height: 400px;
  flex-wrap: wrap;
  padding: 10 24px;
  background: #fff;
  position: relative;
  border-radius: 3px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 88px;
  b {
    color: #000;
    margin: 0;
  }

  .content-button-close-question-number {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 0 12px;
    position: relative;
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 12px;
      background: none;
      border-radius: 50%;
      border: 0;
      color: #c4c4c4;
      font-size: 14px;
      cursor: pointer;
      outline: 0;

      &:hover {
        opacity: 0.8s;
      }
      svg {
        margin: 0;
      }
    }
  }

  animation: ${props =>
      props.isOpen ? 'showCardQuestionsSelector' : 'hideCardQuestionsSelector'}
    0.1s linear forwards;
  transform-origin: top;

  @keyframes showCardQuestionsSelector {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }

  @keyframes hideCardQuestionsSelector {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(0);
    }
  }

  @media (max-width: 960px) {
    top: 68px;
  }

  @media (max-width: 600px) {
    top: 60px;
  }

  @media (max-width: 460px) {
    right: 0;
    left: 0;
    margin: 0 auto;
  }
  @media (max-width: 340px) {
    width: 90%;
    max-width: 90%;
    margin: 0 15px;
  }
`;

export const ContentButtonsQuestions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  padding: 10 37px;
`;

export const Button = styled.button<IButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 34px;
  height: 34px;
  margin: 5px;
  cursor: pointer;
  font-weight: bold;
  position: relative;
  outline: none;

  .icon-bookmark-question {
    position: absolute;
    top: -8px;
    color: #fa558f;
    font-size: 18px;
  }

  ${props => getButtonStyle(props)}

  &:hover {
    ::after {
      content: '';
      animation: showAfterBackground 0.2s ease-in-out normal;
      position: absolute;
      background: #fa558f;
      border-radius: 50%;
      height: 100%;
      width: 100%;
      opacity: 0.4;
      transform-origin: center;
      color: #fff;
      @keyframes showAfterBackground {
        0% {
          transform: scale(0);
          opacity: 0.1;
        }
        50% {
          opacity: 0.5;
        }
        100% {
          opacity: 0.4;
          transform: scale(1);
        }
      }
    }
  }
`;
export const BackgroundDarken = styled.div`
  display: flex;
  position: fixed;
  top: 140px;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(89, 89, 89, 0.6);

  @media (max-width: 960px) {
    top: 120px;
  }
  @media (max-width: 600px) {
    top: 112px;
  }
`;
