import {
	GraphQLNonNull,
	GraphQLID
} from 'graphql'

import { todoType } from '../../types/Todo';
import TodoModel from '../../../models/Todo';

export default {
	type: todoType,
	args: {
		id: {
			name: 'id',
			type: new GraphQLNonNull(GraphQLID)
		}
	},
	resolve(root, params) {
		const removedTodo = TodoModel.findByIdAndRemove(params.id).exec();
		if (!removedTodo) {
			throw new Error('Error removing Todo')
		}
		return removedTodo;
	}
}
