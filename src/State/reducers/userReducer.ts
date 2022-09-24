import { User } from "../../customTypes";
import { UserLoginType } from "../action-types";

type Store = {
  currentUser: null | User;
};

const initialState: Store = {
  currentUser: null,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UserLoginType.LOGIN:
      return { ...state, currentUser: action.payload };

    case UserLoginType.LOGOUT:
      return { ...state, currentUser: initialState.currentUser };

    default:
      return state;
  }
};

export default reducer;
