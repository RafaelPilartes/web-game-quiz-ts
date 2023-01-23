import { useState, KeyboardEvent, useEffect, useRef, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

// Icons
import { RiSave2Fill } from 'react-icons/ri'

// Styles
import { HeaderContainer } from './styles'

// Images
import QuizzallLogo from '../../assets/logo/QuizzallLogo.svg'

function Header() {
  const navigate = useNavigate()

  return (
    <HeaderContainer>
      <img onClick={() => navigate(`/`)} src={QuizzallLogo}></img>
    </HeaderContainer>
  )
}

export default Header
