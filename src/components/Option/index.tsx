import { useContext, useState } from 'react'
import { QuizContext } from '../../context/quizContext'
import { OptionContainer } from './styles'

type OptionsProps = {
  option: string
  answer: string
  selectOption: (option: string) => void
  hide?: string | null
}

function Option({ option, answer, selectOption, hide }: OptionsProps) {
  const [quizState, dispatch] = useContext(QuizContext)
  const [isIncorrect, setIsIncorrect] = useState(false)

  return (
    <OptionContainer
      onClick={() => {
        selectOption(option)

        if (option != answer && !quizState.answerSelected) setIsIncorrect(true)
      }}
    >
      <div
        className={`
      options-container
      ${isIncorrect ? 'incorrect' : ''} 
      ${quizState.answerSelected && option == answer ? 'correct' : ''}
      ${quizState.answerSelected && option !== answer ? 'wrong' : ''}
      ${hide ? 'hide' : ''}
        `}
      >
        <p>{option}</p>
      </div>
    </OptionContainer>
  )
}

export default Option
