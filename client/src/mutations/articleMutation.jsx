import { gql } from "@apollo/client";

const DELETE_ARTICLE =gql`
    mutation DeleteArticle($id: ID!) {
        deleteArticle(id: $id) {
            id
        }
    }
`

const ADD_ARTICLE = gql`
    mutation AddArticle(
        $title: String!
        $subtitle: String!
        $body: String!
        $author: String!
    ) {
        addArticle(
            title: $title
            subtitle: $subtitle
            body: $body
            author: $author
        ) {
            id
            title
            subtitle
            body
            author
        }
    }
`

const UPDATE_ARTICLE = gql`
    mutation UpdateArticle(
        $id: ID!
        $title: String!
        $subtitle: String!
        $body: String!
        $author: String!
    ){
        updateArticle(
            id: $id
            title: $title
            subtitle: $subtitle
            body: $body
            author: $author
        ) {
            id
            title
            subtitle
            body
            author
        }
    }
`

export { UPDATE_ARTICLE, ADD_ARTICLE, DELETE_ARTICLE }