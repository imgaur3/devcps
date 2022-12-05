import { configureStore } from '@reduxjs/toolkit';

import AuthReducer from '../redux/Reducer';

export default configureStore({
  reducer: {
    AuthReducer: AuthReducer,
  },
});
