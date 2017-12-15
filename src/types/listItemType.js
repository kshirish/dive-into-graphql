const {
	GraphQLString,
	GraphQLObjectType,
	GraphQLNonNull
} = require('graphql');

const ListItemType = new GraphQLObjectType({
	name: 'ListItem',
	description: 'This represent a ListItem',
	fields: () => ({
		imdbID: { type: new GraphQLNonNull(GraphQLString) },
		Title: { type: new GraphQLNonNull(GraphQLString) },
		Poster: { type: GraphQLString }
	})
});

module.exports = ListItemType;