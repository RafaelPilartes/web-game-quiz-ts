import styled from 'styled-components'

export const WelcomeContainer = styled.div`
  width: 100%;
  max-width: 500px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.6rem;
  color: ${({ theme }) => theme.colors['base-white']};

  h2 {
    font-size: 2.2rem;
    text-transform: uppercase;
    font-weight: bold;
    color: ${({ theme }) => theme.colors['base-white']};
  }

  p {
    font-size: 1.2rem;
    color: #8435de;
  }

  img {
    width: 34rem;
    margin-top: 2rem;
  }
`
