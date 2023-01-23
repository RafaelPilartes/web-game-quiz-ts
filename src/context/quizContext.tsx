import { createContext, ReactNode, useReducer } from 'react'

import questions from '../data/questions_complete'
import { IChildren } from '../interfaces/children'

export type QuestionsCategoryType = {
  category: string
  questions: {
    question: string
    options: string[]
    answer: string
    tip: string
  }
}
export type QuestionsType = {
  question: string
  options: string[]
  answer: string
  tip: string
}
type initialStatesType = {
  gameStage: GameStageType
  questions: QuestionsType[]
  currentQuestion: number
  score: number
  answerSelected: boolean
}

type DispatchType = {
  type?:
    | 'CHANGE_STAGE'
    | 'LOADING_STAGE'
    | 'CHANGE_STATE'
    | 'SHOW_TIP'
    | 'REMOVE_OPTION'
    | 'CHANGE_QUESTION'
    | 'REORDER_QUEST'
    | 'NEW_GAME'
    | 'START_GAME'
    | 'REORDER_QUESTIONS'
    | 'CHECK_ANSWER'
  allQuestions?: any
  category?: string
  payload?: {
    answer: string
    option: string
  }
}

export enum GameStageType {
  start = 'Start',
  category = 'Category',
  playing = 'Playing',
  end = 'End',
  loading = 'Loading'
}

export const QuizContext = createContext(
  {} as [initialStatesType, React.Dispatch<DispatchType>]
)

const STAGES = ['Start', 'Category', 'Playing', 'End', 'Loading']

const initialStates = {
  gameStage: STAGES[0],
  questions,
  currentQuestion: 0,
  score: 0,
  answerSelected: false
}

const quizReducer = (state: any, action: DispatchType) => {
  switch (action.type) {
    case 'CHANGE_STAGE':
      console.log(state)

      return {
        ...state,
        gameStage: STAGES[2]
      }

    case 'LOADING_STAGE':
      console.log(state)

      return {
        ...state,
        gameStage: STAGES[4]
      }

    case 'REORDER_QUEST':
      const reorderedRequest = questions.sort(() => {
        return Math.random() - 0.5
      })

      return {
        ...state
      }

    case 'CHANGE_QUESTION':
      const questionsList = action.allQuestions
      const nextQuestion = state.currentQuestion + 1
      let endGame = false

      if (!questionsList[nextQuestion]) {
        endGame = true
      }

      return {
        ...state,
        currentQuestion: nextQuestion,
        gameStage: endGame ? STAGES[3] : state.gameStage,
        answerSelected: false
      }

    case 'START_GAME':
      let quizQuestions = null

      state.questions.forEach(
        (question: QuestionsCategoryType, index: number) => {
          if (question.category === action.category) {
            quizQuestions = question.questions
          }
        }
      )

      return {
        ...state,
        questions: quizQuestions,
        gameStage: STAGES[2]
      }

    case 'REORDER_QUESTIONS':
      const reorderedQuestions = state.questions.sort(() => {
        return Math.random() - 0.5
      })

      return {
        ...state,
        questions: reorderedQuestions
      }

    case 'NEW_GAME':
      return initialStates

    case 'CHECK_ANSWER':
      if (state.answerSelected) return state

      const answer = action.payload?.answer
      const option = action.payload?.option

      let correctAnswer = 0

      if (answer == option) correctAnswer = 1

      return {
        ...state,
        score: state.score + correctAnswer,
        answerSelected: true
      }

    default:
      return state
  }
}

export function QuizContextProvider({ children }: IChildren) {
  const value = useReducer(quizReducer, initialStates)

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}
