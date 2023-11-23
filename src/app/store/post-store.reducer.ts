import { createReducer, on } from '@ngrx/store';
import { editPost } from './post-store.actions';

const initialState = {
  post: {
    body: '',
    title: '',
    id: null,
    userId: null,
  },
};

export const postReducer = createReducer(
  initialState,

  on(editPost, (state, action) => {
    return {
      ...state,
      post: action.post ,
    };
  })
);
