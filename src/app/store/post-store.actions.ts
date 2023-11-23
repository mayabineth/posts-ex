import { createAction, props } from '@ngrx/store';
//actions

export const editPost = createAction('[Post] Edit Post', props<{post:any}>());
