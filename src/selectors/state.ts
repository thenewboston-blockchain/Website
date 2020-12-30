import {State} from 'types/store';

export const selectActiveUser = (state: State) => state.APP.ACTIVE_USER;
