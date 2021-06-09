import { v4 } from 'uuid';
import {ADD_BUGS, REMOVED_BUG, RESOLVED_BUG} from './actionTypes';

export const addBugs = (payload) => ({
	type: ADD_BUGS,
	payload: {
		id: v4(),
		description: 'LogIn button is not working',
		resolved: false
	}
});

export const removedBugs = (id) => ({
	type: REMOVED_BUG,
	payload: {
		id: id
	}
});

export const resolvedBug = (id) => ({
	type: RESOLVED_BUG,
	payload: {
		id: id
	}
})
