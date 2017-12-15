const {
	GraphQLString,
	GraphQLObjectType,
	GraphQLNonNull
} = require('graphql');

const RatingType = new GraphQLObjectType({
	name: 'Rating',
	description: 'This represent a Rating',
	fields: () => ({
		Source: { type: new GraphQLNonNull(GraphQLString) },
		Value: { type: new GraphQLNonNull(GraphQLString) }
	})
});

module.exports = RatingType;