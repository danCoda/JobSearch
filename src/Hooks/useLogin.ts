import { useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../State";

const TEST_WORKER_ID = "7f90df6e-b832-44e2-b624-3143d428001f";
const LOGIN_ERROR_MESSAGE = "User was not found. Please contact swipejobs admin";

export const useLogin = () => {
  const [error, setError] = useState<null | string>(null);
  const [isPending, setIsPending] = useState(false);

  const dispatch = useDispatch();
  const { loginUser } = bindActionCreators(actionCreators, dispatch);

  const login = async (email: string, password: string) => {
    return new Promise<void>(async (resolve, reject) => {
        setError(null);
        setIsPending(true);
    
        try {
            // Todo: Try to get workerId using email and password.
    
            // Retreive worker details using workerId.
            const response = await fetch(`https://test.swipejobs.com/api/worker/${TEST_WORKER_ID}/profile`);
            
            if (response.status === 404) {
                throw new Error(LOGIN_ERROR_MESSAGE);
            }
    
            const user = await response.json();
            
            // setTimeout is just for demoing loading. 
            setTimeout(() => {
                setIsPending(false);
                setError(null);
                loginUser(user); // Save user in Store.
                resolve();
            }, 2000);
            
        } catch (e) {
            if (e instanceof Error) {
                setError(e.message);
                setIsPending(false);
            }
        }
    })
    
  };

  return { login, error, isPending };
};
