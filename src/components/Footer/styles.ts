import styled from 'styled-components'

export const FooterContainer = styled.footer`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors['base-background']}
    linear-gradient(
      180deg,
      rgba(184, 84, 232, 0.2) 0%,
      rgba(184, 84, 232, 0.3) 100%
    );

  .containerBottom {
    display: flex;
    flex-direction: row;
    justify-content: center;

    padding: 2.6rem 0.4rem;

    p {
      font-size: 0.9rem;
      font-weight: 500;
      color: ${({ theme }) => theme.colors['base-white']};
    }
  }
`
