import React from 'react'
import * as S from './styles'

import { ReactComponent as PosterrLogo } from 'assets/posterr-logo.svg'

const Header = () => {
  return (
    <S.Header>
      <S.Wrapper>
        <PosterrLogo />
        <S.DefaultUserIdentification>
          <div>
            <h1>{'Default User'}</h1>
            <p>{'@defaultUser2022'}</p>
          </div>
          <S.ProfilePicture src={'defaultUser2022.jpeg'} />
        </S.DefaultUserIdentification>
      </S.Wrapper>
    </S.Header>
  )
}

export default Header
