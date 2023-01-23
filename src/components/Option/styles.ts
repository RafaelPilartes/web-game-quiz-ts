import styled from 'styled-components'

export const OptionContainer = styled.div`
  width: 100%;
  display: flex;

  .options-container {
    width: 100%;
    background-color: #3c0e70;
    border-radius: 0.5rem;
    padding: 1rem;
    margin-bottom: 1rem;
    cursor: pointer;
    opacity: 1;
    transition: 0.4s;

    :hover {
      opacity: 1;
    }
  }

  .correct {
    background-color: #0bfc03;
    font-weight: bold;
  }
  .wrong {
    background-color: #3c0e70;
    opacity: 0.4;
    pointer-events: none;
  }
  .incorrect {
    background-color: #fc0303;
    font-weight: bold;
    pointer-events: none;
    opacity: 0.8;
  }

  .hide {
    display: none;
  }
`
