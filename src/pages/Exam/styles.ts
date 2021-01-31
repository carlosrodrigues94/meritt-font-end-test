import styled, { css } from 'styled-components';

interface ILabelProps {
  isDisable: boolean;
}

export const ContentQuestion = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  min-height: 80vh;
  padding: 15px;
  margin: 80px 0 0 0;

  img + div {
    display: flex;
    align-items: center;
    padding: 0;
    justify-content: center;
    height: auto;
    width: 100%;
    margin: 16px 0 0 0;

    br {
      display: none;
    }
  }

  div + br {
    display: none;
  }

  h2 {
    font-size: 14px;
    font-weight: normal;
    margin: 0;
    padding: 0;
  }

  img {
    width: 95%;
    max-width: 556px;
    padding: 40px 0 0 0;
  }

  @media (max-width: 860px) {
    margin: 60px 0 0 0;

    img {
      padding: 20px 0 0 0;
    }
  }
`;
export const Label = styled.label<ILabelProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-height: 54px;
  transition: all 0.3s;
  cursor: pointer;
  width: 95%;
  max-width: 555px;
  font-size: 14px;
  padding: 0 6px;
  position: relative;
  margin: 4px 0;
  strong {
    margin: 0 7px 0 0;
    font-weight: 400;
  }
  p {
    margin: 0;
  }

  b {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 0 0 0;
    margin: 0 8px 0 0;
    * {
      margin: 0;
    }
    svg {
      margin: 0;
    }
  }

  input {
    display: none;
    background: #000;
    color: #000;
    border-color: #000;
    outline: 0;
  }

  svg {
    margin: 0 7px 0 0;
  }

  ${props =>
    props.isDisable &&
    css`
      ::after {
        content: '';
        height: 0;
        width: 75%;
        border-bottom: 1px solid #757575;
        position: absolute;
        opacity: 0.8;
        margin-left: 42px;
        min-width: 0;

        @media (max-width: 490px) {
          width: 60%;
        }
      }
      color: #757575;
    `}

  &:hover {
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 450px) {
    .icon-radio {
      margin: 0 8px 10px 0;
      font-size: 18px;
    }
    strong {
      margin: 0 8px 10px 0;
      font-weight: bold;
    }
    p {
      margin: 0 0 6px 0;
    }
  }
`;
