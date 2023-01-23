import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors['base-background']};
  padding: 1rem;

  /* filter: blur(8px);
  -webkit-filter: blur(8px); */

  border-bottom: 0.01rem solid
    ${({ theme }) => theme.colors['brand-primary-light-opacity']};

  img {
    width: 22rem;
    cursor: pointer;
  }
`
