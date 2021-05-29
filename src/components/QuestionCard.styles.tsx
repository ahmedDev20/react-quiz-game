import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 600px;
  background: #ebfeff;
  border-radius: 10px;
  border: 2px solid #0085a3;
  padding: 1em;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;
  transition: all 0.2s ease;

  .infos {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .number,
  .category {
    padding: 0.5em 1em;
    border-radius: 2em;
    color: white;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border: 3px solid white;
  }

  .number {
    background: tomato;
  }

  .category {
    font-size: 0.8em;
    background: dodgerblue;
  }

  .question {
    font-size: 1.5em;
    margin: 1.5em 0;
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;
  :hover {
    opacity: 0.8;
  }
  button {
    cursor: pointer;
    user-select: none;
    font-size: 0.9rem;
    width: 100%;
    padding: 0.7em 2em;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
      correct
        ? 'linear-gradient(90deg, #56FFA4, #59BC86)'
        : !correct && userClicked
        ? 'linear-gradient(90deg, #FF5656, #C16868)'
        : 'linear-gradient(90deg, #56ccff, #6eafb4)'};
    border: 3px solid #ffffff;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: #fff;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  }
`;
