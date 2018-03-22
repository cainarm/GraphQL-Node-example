import {
	GraphQLNonNull,
	GraphQLID
} from 'graphql'

import { todoType, todoInputType } from '../../types/Todo';
import TodoModel from '../../../models/Todo';

export default {
	type: todoType,
	args: {
		id: {
			name: 'ID',
			type: new GraphQLNonNull(GraphQLID)
		},
		data: {
			name: 'data',
			type: new GraphQLNonNull(todoInputType)
		}
	},
	resolve(root, params) {
		return TodoModel.findByIdAndUpdate(
			params.id,
			{ $set: { ...params.data } },
			{ new: true }
		)
		.catch(err => new Error('Couldn\'t Update Todo data, ', err));
	}
}
