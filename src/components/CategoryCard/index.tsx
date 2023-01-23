import React, {
  useState,
  KeyboardEvent,
  useEffect,
  useRef,
  useContext
} from 'react'

// Icons
import { MdOutlineLocationOn } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { QuizContext } from '../../context/quizContext'
// import { githubUserComplete } from '../../interfaces/github'

// Styled
import { CategoryCardContainer, SButton } from './styles'

type CategoryCardProps = {
  data: {
    imgCategory: string
    nameCategory: string
    categoryQuiz: string
  }
}

const CategoryCard = ({ data }: CategoryCardProps) => {
  const [quizState, dispatch] = useContext(QuizContext)

  function initQuiz(category: string) {
    dispatch({ type: 'LOADING_STAGE' })

    setTimeout(() => {
      dispatch({ type: 'START_GAME', category: category })

      dispatch({ type: 'REORDER_QUESTIONS' })
    }, 4000)
  }

  return (
    <CategoryCardContainer onClick={() => initQuiz(data.nameCategory)}>
      <img src={data.imgCategory} alt="" />

      <div className="containerInfo">
        <h2> {data.nameCategory} </h2>
        <h3> {data.categoryQuiz}</h3>
      </div>

      <div className="mask"></div>
      <div className="shadow"></div>
    </CategoryCardContainer>
  )
}

export default CategoryCard
