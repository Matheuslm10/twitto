export type Post = {
  id: number
  author: {
    name: string
    username: string
  }
  postContent: string
}

export type User = {
  name: string
  username: string
  joiningData: string
  followers: string[]
  following: string[]
}
