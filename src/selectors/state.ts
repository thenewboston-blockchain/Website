import {User} from 'types/app/User';
import {Dict} from 'types/generic';
import {State} from 'types/store';

// App
export const selectActiveUser = (state: State) => state.APP.ACTIVE_USER;

// Models
export const selectUsers = (state: State): Dict<User> => state.MODELS.USERS;
