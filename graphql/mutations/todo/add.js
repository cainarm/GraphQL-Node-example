import {
	GraphQLNonNull,
} from 'graphql';

import { todoType, todoInputType } from '../../types/Todo';
import TodoModel from '../../../models/Todo';

export default {
	type: todoType,
	args: {
		data: {
			name: 'data',
			type: new GraphQLNonNull(todoInputType)
		}
	},
	resolve(root, params) {
		const uModel = new TodoModel(params.data);
		const newTodo = uModel.save();
		if (!newTodo) {
			throw new Error('Error adding todo');
		}
		return newTodo;
	}
}
