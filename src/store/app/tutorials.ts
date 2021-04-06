import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {APP_TUTORIALS} from 'constants/redux';
import {Category, Playlist, Video} from 'types/tutorials';

interface InitialState {
  categories: Category[];
  currentCategory: Category | null;
  playlists: Playlist[];
  videos: Video[];
}

const initialState: InitialState = {
  categories: [],
  currentCategory: null,
  playlists: [],
  videos: [],
};

const tutorials = createSlice({
  initialState,
  name: APP_TUTORIALS,
  reducers: {
    setCurrentCategory: (state, action: PayloadAction<Category | null>) => {
      state.currentCategory = action.payload;
    },
  },
});

export const {setCurrentCategory} = tutorials.actions;

export default tutorials;
