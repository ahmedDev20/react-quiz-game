import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: white;
  }

  .title-primary {
    color: dodgerblue;
    font-family: 'Londrina Solid', cursive;
    font-size: 8em;
    font-weight: 400;
    text-align: center;
    margin: 20px;
  }

  .title-secondary {
    color: #fff;
    font-family: 'Londrina Solid', cursive;
  }

  .start {
    cursor: pointer;
    background: linear-gradient(180deg, #ffffff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
    font-size: 1.2em;
    max-width: 200px;
  }
`;

export const OptionsWrapper = styled.div`
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .select {
    flex: 0.6;
    border-radius: 10px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  }
`;
