import React from 'react'
import * as S from './styles'

import { ReactComponent as PosterrLogo } from 'assets/posterr-logo.svg'

const Header = () => {
  return (
    <S.Header>
      <S.Wrapper>
        <PosterrLogo />
      </S.Wrapper>
    </S.Header>
  )
}

export default Header
