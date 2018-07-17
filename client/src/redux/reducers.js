import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer, { RESET_REDUX_STORE } from './modules/auth.module';
import blogsReducer from './modules/lesson.module';

const appReducer = combineReducers({
  auth: authReducer,
  form: reduxForm,
  blogs: blogsReducer
});

const rootReducer = (state, action) => {
  // Reducers will return the initial state when they are called with undefined as the first
  // argument, no matter the action. Whenever USER_LOGOUT fires, all reducers will be initialized
  // anew.
  if (action.type === RESET_REDUX_STORE) {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;