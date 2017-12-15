const _ = require('lodash');
const {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLList
} = require('graphql');

const List = require('./data/list');
const ListItemType = require('./types/listItemType');

const Details = require('./data/details');
const DetailItemType = require('./types/detailItemType');

const QueryRootType = new GraphQLObjectType({
	name: 'AppSchema',
	description: 'Application Schema Query Root',
	fields: () => ({
		list: {
			type: new GraphQLList(ListItemType),
			description: 'List of all list items',
			resolve: function() {
				return List
			}
		},
		details: {
			type: new GraphQLList(DetailItemType),
			description: 'List of all details items',
			resolve: function() {
				return Details
			}
		}
	})
});

const AppSchema = new GraphQLSchema({
	query: QueryRootType 
});

module.exports = AppSchema;