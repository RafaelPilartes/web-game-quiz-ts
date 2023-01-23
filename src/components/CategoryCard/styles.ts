import styled, { css } from 'styled-components'

export const CategoryCardContainer = styled.button`
  position: relative;
  flex: 1;
  position: relative;

  border: none;
  background-color: transparent;

  width: 100%;
  max-width: 26rem;
  min-width: 16rem;
  height: 14rem;

  cursor: pointer;

  transition: ease 0.46s;

  object-fit: cover;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;

    transition: 0.5s ease;

    z-index: 1;
  }

  .mask {
    opacity: 0;
    -webkit-transition: 0.5s;
    transition: 0.5s;

    background: linear-gradient(
      0deg,
      ${props => props.theme.colors['brand-secondary']} 0%,
      rgba(184, 130, 252, 0) 65%
    );
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 0;

    width: 20%;
    height: 10%;

    z-index: 2;
  }

  .shadow {
    background: linear-gradient(0deg, black 0%, rgba(0, 0, 0, 0.2) 65%);
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;

    width: 100%;
    height: 100%;
    z-index: 1;
  }

  .containerInfo {
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 0.4rem;
    padding: 1.4rem 2.4rem;
    text-align: left;

    z-index: 20;

    h2 {
      font-size: 1.4rem;
      text-transform: capitalize;
      text-align: start;
      transition: ease 0.5s;
      color: ${props => props.theme.colors['base-white']};

      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    h3 {
      font-size: 0.9rem;
      text-transform: uppercase;
      text-align: start;
      transition: ease 0.5s;
      color: ${props => props.theme.colors['brand-secondary']};
    }
  }

  :hover {
    img {
      transform: scale(1.06);
    }

    .mask {
      opacity: 1;

      width: 100%;
      height: 100%;
    }

    h3 {
      color: ${props => props.theme.colors['base-white']};
    }
  }

  @media only screen and (max-width: 574px) {
    min-width: 12rem;
    height: 9rem;
  }
  @media only screen and (max-width: 426px) {
    min-width: 12rem;
    height: 9rem;

    .containerInfo {
      h2 {
        font-size: 1rem;
      }
      h3 {
        font-size: 0.8rem;
      }
    }
  }
`
export const SButton = styled.button`
  position: relative;
  padding: 1rem 1.8rem;
  margin: 2rem 1rem;
  background-color: ${props => props.theme.colors['brand-primary']};
  border: none;

  cursor: pointer;
  transition: 0.6s ease;

  ::before {
    position: absolute;
    content: '';
    left: 50%;
    right: 50%;
    top: 0;
    width: 3%;
    height: 100%;
    transform: translate(-50%, 0%);
    background-color: transparent;
    z-index: 1;
    transition: 0.4s ease;
  }

  :hover::before {
    width: 100%;
    background-color: #000;
  }

  :active::before {
    background-color: #1d1e1d;
  }

  div {
    position: relative;
    color: #fff;
    font-size: 0.9rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.6rem;
    letter-spacing: 1px;
    z-index: 1;
  }
`
