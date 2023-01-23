import styled, { css } from 'styled-components'

type BaseBtnStyleType = {
  colorTxt?: string
  colorBg?: string
}

export const BaseBtnContainer = styled.button<BaseBtnStyleType>`
  flex: 1;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors['base-white']};
  text-transform: uppercase;
  padding: 0.8rem 1.5rem;

  cursor: pointer;

  border-radius: 3rem;
  border: none;

  transition: 0.4s ease;

  button:hover {
    background: linear-gradient(
      90deg,
      rgba(184, 84, 232, 1) 0%,
      rgba(132, 53, 222, 1) 100%
    );
  }

  ${({ colorTxt, colorBg }) =>
    css`
      background: linear-gradient(
        90deg,
        rgba(132, 53, 222, 1) 0%,
        rgba(184, 84, 232, 1) 100%
      );

      /* background-color: ${colorBg
        ? colorBg
        : ({ theme }) => theme.colors['brand-secondary']};
      color: ${colorTxt
        ? colorTxt
        : ({ theme }) => theme.colors['base-black']}; */
    `}
`
