const RatingType = require('./ratingType');
const {
	GraphQLString,
	GraphQLFloat,
	GraphQLBoolean,
	GraphQLList,
	GraphQLObjectType,
	GraphQLEnumType,
	GraphQLNonNull
} = require('graphql');

const DetailItemType = new GraphQLObjectType({
	name: 'DetailItem',
	description: 'This represent a DetailItem',
	fields: () => ({
		imdbID: { type: new GraphQLNonNull(GraphQLString) },
		Title: { type: new GraphQLNonNull(GraphQLString) },
		Director: { type: new GraphQLNonNull(GraphQLString) },
		Released: { type: new GraphQLNonNull(GraphQLString) },
		Website: { type: new GraphQLNonNull(GraphQLString) },
		imdbRating: { type: new GraphQLNonNull(GraphQLFloat) },
		shouldWatch: { type: new GraphQLNonNull(GraphQLBoolean) },	
		Ratings: { type: new GraphQLList(RatingType) },
		Rated: { type: new GraphQLEnumType({
			name: 'Rated',
			values: {
				teens: { value: 'PG-13' },
				adults: { value: 'R' }
			}
		}) }
	})
});

module.exports = DetailItemType;