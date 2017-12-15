const {
	GraphQLString,
	GraphQLObjectType,
	GraphQLNonNull
} = require('graphql');

const DetailItemType = new GraphQLObjectType({
	name: 'DetailItem',
	description: 'This represent a DetailItem',
	fields: () => ({
		imdbID: { type: new GraphQLNonNull(GraphQLString) },
		Title: { type: new GraphQLNonNull(GraphQLString) },
		Year: { type: new GraphQLNonNull(GraphQLString) },
		Rated: { type: GraphQLString }
	})
});

module.exports = DetailItemType;