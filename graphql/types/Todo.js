import {
	GraphQLObjectType,
	GraphQLInputObjectType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLID
} from 'graphql';

export const todoType = new GraphQLObjectType({
	name: 'Todo',
	fields: () => ({
		_id: {
			type: new GraphQLNonNull(GraphQLID)
		},
		uid: {
			type: GraphQLString
		},
    	name: {
			type: GraphQLString
		},
		description: {
			type: GraphQLString
		},
    	imageUrl: {
      		type: GraphQLString
    	}
	})
})


export const todoInputType = new GraphQLInputObjectType({
	name: 'TodoInput',
	fields: () => ({
		uid: {
			type: GraphQLString
		},
    	name: {
			type: GraphQLString
		},
		description: {
			type: GraphQLString
		},
		imageUrl: {
			type: GraphQLString
		},
	})
})
