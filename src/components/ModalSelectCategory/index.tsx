import React, { useContext, useState } from 'react'

// Modal
import Modal from 'react-modal'

// images
import categoryJaneth from '../../assets/categories/janeth.jpg'

// Styles
import { ModalContainer, ButtonAction } from './styles'

// Components
import CategoryCard from '../CategoryCard'

type modalType = {
  modalSelectCategoryIsOpen: boolean
  setModalSelectCategoryIsOpen: (e: boolean) => void
}

const customStyles = {
  overlay: {
    backgroundColor: '#00000069',
    zIndex: 10
  },
  content: {
    width: '70%',
    height: '75%',
    backgroundColor: 'transparent',
    padding: 0,
    borderWidth: 0,
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

const ModalSelectCategory: React.FC<modalType> = ({
  modalSelectCategoryIsOpen,
  setModalSelectCategoryIsOpen
}): JSX.Element => {
  const categories = [
    {
      imgCategory: categoryJaneth,
      nameCategory: 'Janeth Pilartes',
      categoryQuiz: 'Pessoal',
      category: 'Janeth'
    },
    {
      imgCategory: 'https://ayltoninacio.com.br/img/p/90w750.jpg',
      nameCategory: 'HTML',
      categoryQuiz: 'linguagem de programação',
      category: 'HTML'
    },
    {
      imgCategory:
        'https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png',
      nameCategory: 'CSS',
      categoryQuiz: 'linguagem de programação',
      category: 'CSS'
    },
    {
      imgCategory:
        'https://miro.medium.com/max/1400/1*ahpxPO0jLGb9EWrY2qQPhg.jpeg',
      nameCategory: 'JavaScript',
      categoryQuiz: 'linguagem de programação',
      category: 'JavaScript'
    }
  ]

  const renderCategories = categories.map((item, index) => (
    <CategoryCard data={item} />
  ))

  function closeModal() {
    setModalSelectCategoryIsOpen(false)
  }

  return (
    <Modal
      isOpen={modalSelectCategoryIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      ariaHideApp={false}
    >
      <ModalContainer>
        <div className="container">
          <h1 className="title"> ✨ Teste o seu conhecimento sobre: </h1>

          <div className="containerListCards">{renderCategories}</div>
        </div>
      </ModalContainer>
    </Modal>
  )
}

export default ModalSelectCategory
