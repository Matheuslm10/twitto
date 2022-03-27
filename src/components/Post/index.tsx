import * as S from './styles'
import Card from 'components/Card'
import { useProfileModal } from 'hooks/use-profile-modal'

type PostProps = {
  id: number
  author: {
    name: string
    username: string
  }
  postContent: string
}

const Post = ({ author, postContent }: PostProps) => {
  const { openModalWithUserData } = useProfileModal()

  return (
    <Card>
      <S.Wrapper>
        <S.ProfilePicture
          src={author.username + '.jpeg'}
          onClick={() => openModalWithUserData(author.username)}
        />
        <S.TextWrapper>
          <S.UserInfoWrapper
            onClick={() => openModalWithUserData(author.username)}
          >
            <h1>{author.name}</h1>
            <h2>{'@' + author.username}</h2>
          </S.UserInfoWrapper>
          <S.PostContent>{postContent}</S.PostContent>
        </S.TextWrapper>
      </S.Wrapper>
    </Card>
  )
}

export default Post
