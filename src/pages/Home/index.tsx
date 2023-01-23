import { useState, KeyboardEvent, useEffect, useRef, useContext } from 'react'

// Toast
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Lottie
import Lottie from 'lottie-react'
import PrepareQuizAnimation from '../../data/lottie/prepare_quiz.json'

// Styles
import { HomeContainer } from './styles'

// Components
import BaseBtn from '../../components/BaseBtn'
import Welcome from '../../components/Welcome'
import { GameStageType, QuizContext } from '../../context/quizContext'
import Question from '../../components/Question'
import GameOver from '../../components/GameOver'
import { HashLoader } from 'react-spinners'
import { defaultTheme } from '../../themes/default'

function Home() {
  const [quizState, dispatch] = useContext(QuizContext)

  useEffect(() => {
    dispatch({ type: 'REORDER_QUEST' })
  }, [])

  return (
    <HomeContainer>
      <div className="container">
        {quizState.gameStage === GameStageType.start && <Welcome />}
        {quizState.gameStage === GameStageType.playing && <Question />}
        {quizState.gameStage === GameStageType.end && <GameOver />}
        {quizState.gameStage === GameStageType.loading && (
          <>
            <div className="prepareQuiz">
              <h1>Preparando as questões...</h1>

              <Lottie animationData={PrepareQuizAnimation} loop={true} />
            </div>
          </>
        )}
      </div>
    </HomeContainer>
  )
}

export default Home
