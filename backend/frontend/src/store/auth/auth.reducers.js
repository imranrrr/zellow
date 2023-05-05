import { SIGNIN_SUCCESS, SIGNOUT } from "./auth.constants";

export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case SIGNIN_SUCCESS:
      return {
        ...state,
        userInfo: action.payload,
        loading: false,
        success: true,
      };

    case SIGNOUT:
      return {};
    default:
      return state;
  }
};
