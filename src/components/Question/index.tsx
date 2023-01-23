import { useContext } from 'react'
import { QuizContext } from '../../context/quizContext'
import BaseBtn from '../BaseBtn'
import Option from '../Option'
import { QuestionContainer } from './styles'

function Question() {
  const [quizState, dispatch] = useContext(QuizContext)
  const currentQuestion = quizState.questions[quizState.currentQuestion]

  console.log('quizState.questions', quizState)

  function onSelectOption(option: string): void {
    dispatch({
      type: 'CHECK_ANSWER',
      payload: {
        answer: currentQuestion.answer,
        option: option
      }
    })
  }

  return (
    <QuestionContainer>
      <div id="question">
        <p>
          Pergunta {quizState.currentQuestion + 1} de{' '}
          {quizState.questions.length}
        </p>
        <h2>{currentQuestion.question}</h2>
        <div id="options-container">
          {currentQuestion.options.map((option: any) => (
            <Option
              option={option}
              key={option}
              answer={currentQuestion.answer}
              selectOption={() => onSelectOption(option)}
              // hide={quizState.optionToHide === option ? 'hide' : null}
            />
          ))}
        </div>
        {/*         
        {!quizState.answerSelected && !quizState.help && (
          <>
            {currentQuestion.tip && (
              <button onClick={() => dispatch({ type: 'SHOW_TIP' })}>
                Dica
              </button>
            )}
            <button onClick={() => dispatch({ type: 'REMOVE_OPTION' })}>
              Excluir uma
            </button>
          </>
        )}
         */}
        {/* 
        {!quizState.answerSelected && quizState.help === 'tip' && (
          <p>{currentQuestion.tip}</p>
        )}
         */}
        {quizState.answerSelected && (
          <BaseBtn
            title="Continuar"
            // onClick={() => }
            onClick={() => {
              dispatch({
                type: 'CHANGE_QUESTION',
                allQuestions: quizState.questions
              })
              console.log(quizState.questions)
            }}
          />
        )}

        <BaseBtn
          title="Desistir"
          onClick={() => dispatch({ type: 'NEW_GAME' })}
        />
      </div>
    </QuestionContainer>
  )
}

export default Question
