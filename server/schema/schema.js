import Article from '../models/Article.js';
// import Articles from '../models/Article.js'
import 
{ 
    GraphQLID, 
    GraphQLList, 
    GraphQLNonNull, 
    GraphQLObjectType, 
    GraphQLScalarType, 
    GraphQLSchema, 
    GraphQLString,
    Kind
} 
from "graphql";

const dateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  serialize(value) {
    if (value instanceof Date) {
      return value.getTime(); // Convert outgoing Date to integer for JSON
    }
    throw Error('GraphQL Date Scalar serializer expected a `Date` object');
  },
  parseValue(value) {
    if (typeof value === 'number') {
      return new Date(value); // Convert incoming integer to Date
    }
    throw new Error('GraphQL Date Scalar parser expected a `number`');
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      // Convert hard-coded AST string to integer and then to Date
      return new Date(parseInt(ast.value, 10));
    }
    // Invalid hard-coded value (not an integer)
    return null;
  },
});


const ArticleType = new GraphQLObjectType({
    name: 'Article',
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        subtitle: { type: GraphQLString },
        body: { type: GraphQLString },
        author: { type: GraphQLString },
        date: { type: GraphQLString }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        article: {
            type: ArticleType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Article.findById(args.id);
            }
        },

        articles: {
            type: new GraphQLList(ArticleType),
            resolve(parent, args) {
                return Article.find();
            }
        }
    }
});

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addArticle: {
            type: ArticleType,
            args: {
                title: { type: GraphQLNonNull(GraphQLString) },
                subtitle: { type: GraphQLNonNull(GraphQLString) },
                body: { type: GraphQLNonNull(GraphQLString)},
                date: { type: dateScalar },
                author: { type: GraphQLNonNull(GraphQLString)}
            },
            resolve(parent, args) {
                const article = new Article({
                    title: args.title,
                    subtitle: args.subtitle,
                    body: args.body,
                    date: args.date,
                    author: args.author
                });

                return article.save();
            }
        },

        deleteArticle: {
            type: ArticleType,
            args: { id: {type: GraphQLNonNull(GraphQLID)} },
            resolve(parent, args) {
                return Article.findByIdAndRemove(args.id);
            }
        },

        updateArticle: {
            type: ArticleType,
            args: {
                id: { type: GraphQLNonNull(GraphQLID) },
                title: { type: GraphQLString },
                subtitle: { type: GraphQLString },
                body: { type: GraphQLString },
                author: { type: GraphQLString }
            },
            resolve(parent, args) {
                return Article.findByIdAndUpdate(
                    args.id,
                    {
                        $set: {
                            title: args.title,
                            subtitle: args.subtitle,
                            body: args.body,
                            author: args.author
                        }
                    }
                )
            }
        },



    }
})

export default new GraphQLSchema({
    query: RootQuery,
    mutation
})