import { createContext, useContext, useEffect, useReducer } from "react";
import reducerFunction from "../Reducer/usersReducer";
const UserContext = createContext();
const UserProvider = ({ children }) => {
  const initialState = {
    openLogin: false,
    isNotify: false,
    notifyMessage: "",
    notifyColor: "#4caf50",
    userData: {},
    openConfirm: false,
    productData: {},
  };
  const [state, dispatchUser] = useReducer(reducerFunction, initialState);

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatchUser({ type: "CLOSE_NOTIFICATION" });
    }, 4500);

    return () => clearTimeout(timeout);
  }, [state.isNotify]);

  return (
    <UserContext.Provider value={{ ...state, dispatchUser }}>
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => {
  return useContext(UserContext);
};
export { UserProvider, useUserContext };
