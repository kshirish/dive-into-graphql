const RatingType = require('./ratingType');

const {
	GraphQLString,
	GraphQLFloat,
	GraphQLBoolean,
	GraphQLList,
	GraphQLObjectType,
	GraphQLEnumType,
	GraphQLNonNull,
	GraphQLInputObjectType
} = require('graphql');

const DetailItemType = new GraphQLObjectType({
	name: 'DetailItem',
	description: 'This represent a DetailItem',
	fields: () => ({
		imdbID: { type: new GraphQLNonNull(GraphQLString) },
		Title: { type: new GraphQLNonNull(GraphQLString) },
		Director: { type: new GraphQLNonNull(GraphQLString) },
		imdbRating: { type: new GraphQLNonNull(GraphQLFloat) },
		shouldWatch: { type: new GraphQLNonNull(GraphQLBoolean) },
		Released: { type: GraphQLString },
		Website: { type: GraphQLString },
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

const DetailItemCreateType = new GraphQLInputObjectType({
  name: 'DetailItemCreateType',
  type: DetailItemType,
  fields: {
	Title: { type: new GraphQLNonNull(GraphQLString) },
	Director: { type: new GraphQLNonNull(GraphQLString) },
	imdbRating: { type: new GraphQLNonNull(GraphQLFloat) },
	shouldWatch: { type: new GraphQLNonNull(GraphQLBoolean) }
  }
});

const DetailItemUpdateType = new GraphQLInputObjectType({
  name: 'DetailItemUpdateType',
  type: DetailItemType,
  fields: {
    imdbID: { type: new GraphQLNonNull(GraphQLString) },
    Title: { type: new GraphQLNonNull(GraphQLString) }
  }
});

const DetailItemDeleteType = new GraphQLInputObjectType({
  name: 'DetailItemDeleteType',
  type: DetailItemType,
  fields: {
    imdbID: { type: new GraphQLNonNull(GraphQLString) },
  }
});

module.exports = {
	DetailItemType,
	DetailItemCreateType,
	DetailItemUpdateType,
	DetailItemDeleteType
};