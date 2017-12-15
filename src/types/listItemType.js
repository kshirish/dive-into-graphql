const _ = require('lodash');
const { DetailItemType } = require('./detailItemType');
const Details = require('../data/details');

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
		Poster: { type: GraphQLString },
		detail: {
			type: DetailItemType,
			resolve: function(listItem) {
				return _.find(Details, a => a.imdbID == listItem.imdbID);
			}
		}
	})
});

module.exports = ListItemType;