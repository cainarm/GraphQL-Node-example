import {
  GraphQLID,
  GraphQLNonNull
} from 'graphql';
import { todoType } from '../../types/Todo';
import todoModel from '../../../models/Todo';

export default {
	type: todoType,
	args: {
		id: {
			name: 'ID',
			type: new GraphQLNonNull(GraphQLID)
		}
	},
	resolve(root, params) {
		return todoModel.findById(params.id).exec();
	}
}
