import styled from 'styled-components'

export const Container = styled.div`
  width: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors['base-background']};
`
export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem 1.4rem;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  background-color: ${props => props.theme.colors['base-background']};

  .container {
    display: flex;
    flex-direction: column;
    gap: 1.4rem;

    .title {
      color: ${props => props.theme.colors['base-white']};
      align-self: center;
    }

    .containerListCards {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 1rem;
    }
  }

  @media only screen and (max-width: 574px) {
    .container {
      .title {
        font-size: 1.6rem;
      }
    }
  }
  @media only screen and (max-width: 470px) {
    .container {
      .title {
        font-size: 1.2rem;
      }
    }
  }
`
export const ButtonAction = styled.a`
  display: flex;
  align-items: center;
  padding: 0.2rem 0.4rem;
  color: #6c6a72;

  border: none;
  background-color: transparent;
  transition: 0.4s ease;

  :hover {
    color: #fff;
    background-color: ${props => props.color};
  }
`
