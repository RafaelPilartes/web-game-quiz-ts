import { useContext } from 'react'

// Lottie
import Lottie from 'lottie-react'
import CelebrateQuizAnimation from '../../data/lottie/celebrate.json'
import CelebrationGraffeQuizAnimation from '../../data/lottie/Celebration-giraffe.json'
import CongratulationsQuizAnimation from '../../data/lottie/congratulations.json'
import LossQuizAnimation from '../../data/lottie/loss.json'

// Styles
import { GameOverContainer } from './styles'

// Context
import { QuizContext } from '../../context/quizContext'
import BaseBtn from '../BaseBtn'

function GameOver() {
  const [quizState, dispatch] = useContext(QuizContext)
  const questionsLength = quizState.questions.length

  // menos de metade
  const lessThanHalf = Number(questionsLength / 2)

  return (
    <GameOverContainer>
      <h2>Fim de jogo!</h2>
      <p>
        Pontuação: <span>{quizState.score}</span>
      </p>
      <p>
        Você acertou <span>{quizState.score}</span> de{' '}
        <span>{questionsLength}</span> perguntas.
      </p>

      {quizState.score == questionsLength && (
        <div className="prepareQuiz">
          <Lottie
            className="lossQuiz"
            animationData={CongratulationsQuizAnimation}
            loop={true}
          />
        </div>
      )}
      {quizState.score == 0 && (
        <div className="prepareQuiz">
          <h1>Naõ acertou nenhuma</h1>
          <Lottie
            className="lossQuiz"
            animationData={LossQuizAnimation}
            loop={true}
          />
        </div>
      )}
      {quizState.score > 0 && quizState.score <= lessThanHalf && (
        <div className="prepareQuiz">
          <Lottie animationData={CelebrationGraffeQuizAnimation} loop={true} />
        </div>
      )}
      {quizState.score > 0 && quizState.score >= lessThanHalf && (
        <div className="prepareQuiz">
          <Lottie animationData={CelebrateQuizAnimation} loop={true} />
        </div>
      )}

      <BaseBtn
        onClick={() => dispatch({ type: 'NEW_GAME' })}
        title="Reiniciar"
      />
    </GameOverContainer>
  )
}

export default GameOver
