import { useContext, useState } from 'react'

// Styles
import { WelcomeContainer } from './styles'

// Assets
import Quiz from '../../assets/illustrations/quiz.svg'

// Context
import { QuizContext } from '../../context/quizContext'
import BaseBtn from '../BaseBtn'
import ModalSelectCategory from '../ModalSelectCategory'

function Welcome() {
  const [modalSelectCategoryOpen, setModalSelectCategoryOpen] = useState(false)

  function seeCategories() {
    setModalSelectCategoryOpen(true)
  }

  return (
    <WelcomeContainer>
      <h2>Seja bem-vindo</h2>
      <p>Clique no botão abaixo para começar:</p>
      <BaseBtn title="Iniciar" onClick={seeCategories} />
      <img src={Quiz} alt="Início do Quiz" />

      <ModalSelectCategory
        modalSelectCategoryIsOpen={modalSelectCategoryOpen}
        setModalSelectCategoryIsOpen={setModalSelectCategoryOpen}
      />
    </WelcomeContainer>
  )
}

export default Welcome
