import {
	GraphQLList,
	GraphQLNonNull,
	GraphQLString
} from 'graphql';
import { todoType } from '../../types/Todo';
import todoModel from '../../../models/Todo';

export default {
	type: new GraphQLList(todoType),
	args: {
		name: {
			name : 'name',
			type:  GraphQLString
		},
		description: {
			name : 'description',
			type:  GraphQLString
		},
		imageUrl: {
			name : 'imageUrl',
			type:  GraphQLString
		}
	},
	resolve(root, params) {
		return todoModel.find(params).exec();
	}
}
