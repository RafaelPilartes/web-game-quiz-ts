import styled from 'styled-components'

export const GameOverContainer = styled.div`
  text-align: center;
  max-width: 500px;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 2.1rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors['base-white']};
    padding: 0.8rem 1.5rem;
  }

  p {
    font-size: 1.21rem;
    color: ${({ theme }) => theme.colors['brand-secondary']};
    font-weight: 500;
    margin-top: 0.4rem;

    span {
      color: ${({ theme }) => theme.colors['base-white']};
    }
  }

  img {
    margin: 2rem auto;
    height: 200px;
  }
`
