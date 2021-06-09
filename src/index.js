import store from './store';
import * as actions from './actions';

store.subscribe(() => console.log('state changed', store.getState()));

//store.dispatch(actions.addBugs());
// store.dispatch(actions.removedBugs('0172cd75-02e7-42a5-a630-f3c69fcb1bb5'));
store.dispatch(actions.resolvedBug('9bb03a56-18bf-4888-95b6-da0d619c67c3'));


console.log(store.getState());
