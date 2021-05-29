import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .actions {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;

export const Infos = styled.div`
  .score {
    font-size: 1.7rem;
    margin: 0;
    background: white;
    color: black;
    padding: 0.1em 2em;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border: 2px solid #0085a3;
    z-index: -1;
    position: relative;
    bottom: -5px;
  }
`;

type ButtonProps = {
  visible: boolean;
};

export const ButtonWrapper = styled.div<ButtonProps>`
  .next,
  .restart,
  .go-home {
    cursor: pointer;
    background: linear-gradient(180deg, #ffffff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
    font-size: 1.2em;
    transition: opacity 0.2s ease;
    opacity: ${({ visible }) => (visible ? '1' : '0')};
    pointer-events: ${({ visible }) => (visible ? 'all' : 'none')};
  }

  .restart,
  .go-home {
    max-width: 200px;
  }
`;
