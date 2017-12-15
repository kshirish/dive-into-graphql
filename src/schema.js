const _ = require('lodash');
const uuidv4 = require('uuid/v4');
const List = require('./data/list');
const ListItemType = require('./types/listItemType');
const Details = require('./data/details');

const {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLList,
	GraphQLNonNull
} = require('graphql');

const { 
	DetailItemType, 
	DetailItemCreateType, 
	DetailItemUpdateType, 
	DetailItemDeleteType 
} = require('./types/detailItemType');

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

const MutationRootType = new GraphQLObjectType({
	name: 'MutationRootType',
	description: 'Application Schema Mutation Root',
	fields: {
		createDetailItem: {
			type: DetailItemType,
			args: {
				input: { type: new GraphQLNonNull(DetailItemCreateType) }
			},
			resolve: (source, { input }) => {

				let data = {};

				data.imdbID = uuidv4();
				data.Title = input.Title;
				data.Director = input.Director;
				data.imdbRating = input.imdbRating;
				data.shouldWatch = input.shouldWatch;

				Details.push(data);
				return data;
			}
		},
		updateDetailItem: {
			type: DetailItemType,
			args: {
				input: { type: new GraphQLNonNull(DetailItemUpdateType) }
			},
			resolve: (source, { input }) => {
				
				const item = _.find(Details, d => d.imdbID !== input.imdbID); 

				item.Title = input.Title;
				return item;
			}
		},
		deleteDetailItem: {
			type: DetailItemType,
			args: {
				input: { type: new GraphQLNonNull(DetailItemDeleteType) }
			},
			resolve: (source, { input }) => {

				_.remove(Details, d => d.imdbID === input.imdbID)
				return input;
			}
		}
	}
});

const AppSchema = new GraphQLSchema({
	query: QueryRootType,
	mutation: MutationRootType
});

module.exports = AppSchema;