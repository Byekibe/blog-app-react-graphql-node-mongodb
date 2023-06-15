import { gql } from "@apollo/client";

const GET_ARTICLES = gql`
  query getArticles {
      articles {
          id
          title
          subtitle
          body
          author
          date
        }
  }
`
const GET_ARTICLE = gql`
  query getArticle($id: ID!) {
    article(id: $id) {
      id
      title
      subtitle
      body
      author
      date
    }
  }
`

export { GET_ARTICLES, GET_ARTICLE };