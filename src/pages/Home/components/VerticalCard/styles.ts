import styled from 'styled-components';

export const ContainerCardsScrolled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 546px;
  overflow-y: auto;
  width: 100%;
  padding: 65px 24px 24px 24px;

  /* width */
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.15);
    border: 0;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.1);
    border: 0;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 660px) {
    ::-webkit-scrollbar {
      height: 5px;
    }
    display: inline-flexbox;
    flex-direction: row;
    height: auto;
    width: 100%;
    overflow-x: auto;
    padding: 0;
  }
`;
