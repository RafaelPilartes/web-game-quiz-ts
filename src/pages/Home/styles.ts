import styled from 'styled-components'

export const HomeContainer = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  @keyframes searchAnim {
    0% {
      transform: translate(0);
    }

    20% {
      transform: translate(6px, -6px);
    }

    40% {
      transform: translate(6px, 6px);
    }

    60% {
      transform: translate(-6px, 6px);
    }

    80% {
      transform: translate(-6px, -6px);
    }

    100% {
      transform: translate(0);
    }
  }

  .container {
    width: 100%;
    max-width: 76rem;
    margin: 1rem;

    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 2rem 0;

    display: flex;

    .prepareQuiz {
      width: 100%;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      padding: 2rem 0;

      display: flex;

      h1 {
        font-size: 2.2rem;
        font-weight: bold;
        color: ${({ theme }) => theme.colors['base-white']};
        padding: 0.8rem 1.5rem;
        animation: searchAnim 4s ease 0s infinite alternate none;
      }

      .lossQuiz {
        margin-top: -10rem;
      }
    }
  }
`
