import {ADD_BUGS, REMOVED_BUG, RESOLVED_BUG} from './actionTypes';

const reducer = (state = [], {type, payload}) => {
	switch(type) {
		case ADD_BUGS:
			return [...state, payload]

		case REMOVED_BUG:
			return state.filter((s) => s.id !== payload.id);

		case RESOLVED_BUG:
			const found = state.find((s) => s.id === payload.id);
			if(found) {
				let temp = {...found, resolved: true};
				return [... state, temp];
			} else {
				return state;
			}

		default:
			return state;
	}
}

export default  reducer;