import React, { useReducer, useContext, useEffect } from "react";
import axios from "axios";
import reducer from "./reducer";
import {
  CLEAR_ALERT,
  DISPLAY_ALERT,
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  TOGGLE_SIDEBAR,
  UPDATE_USER_BEGIN,
  LOGOUT_USER,
  UPDATE_USER_ERROR,
  SET_USER,
  ADD_ITEM,
  DEL_ITEM,
  DEL_ALL_ITEMS,
} from "./action";
import { useNavigate } from "react-router-dom";
const token = localStorage.getItem("token");
// const user = localStorage.getItem("user");
// console.log("Reload nhe anh em");
const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  user: null,
  token: token,
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  showSlidebar: false,
  address: "",
  cart: [],
  isAdmin: false
  // tam thoi nay da
};
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };
  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };
  const addUserToLoacalStorage = ({ user, token }) => {
    localStorage.setItem("user", user);
    localStorage.setItem("token", token);
  };
  const removeUserFromLoacalStorage = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };
  const setupUser = async ({ currentUser, endPoint, alertText }) => {
    dispatch({ type: SETUP_USER_BEGIN });
    try {
      const { data } = await axios.post(
        `/api/v1/auth/${endPoint}`,
        currentUser
      );
      const { user, token } = data;
      dispatch({
        type: SETUP_USER_SUCCESS,
        payload: { user, token, alertText: "successfully" },
      });
      addUserToLoacalStorage({ user, token });
    } catch (error) {
      dispatch({
        type: SETUP_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };
  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR });
  };
  const logoutUser = () => {
    removeUserFromLoacalStorage();
    dispatch({ type: LOGOUT_USER });
  };

  const setUser = ( currentUser)=>{
    localStorage.setItem("token", currentUser.token);
    // localStorage.setItem("user", currentUser.email);
    dispatch({
      type: SET_USER,
      payload: currentUser,
    });
  }
  const addItemToCart = (item)=>{
    // console.log(item)
    dispatch({
      type: ADD_ITEM,
      payload: item,
    })
  }
  const deleteItemFromCart = (item)=>{
    // console.log(item);
    dispatch({
      type: DEL_ITEM,
      payload: item,
    })
  }
  useEffect( ()=>{
    // console.log("gia tri cua token : ", localStorage.getItem("token"));
    const token = localStorage.getItem("token");
    
    if( token){
      const getData = async()=>{
        try{
          const res = await axios.get("/api/v1/user/", {
            headers: {
              Authorization : "Bearer " + localStorage.getItem("token")
            }
          })
          return res.data
        }catch(e){
          localStorage.removeItem("token");
        }
      }
      if( localStorage.getItem("token")){
        getData()
          .then( res => {
            const data = {...res.data, token: localStorage.getItem("token")}
            console.log("Get info");
            setUser(data);
          })
      }
    }
  },[dispatch]);
  const deleteAllItemsInCart = async ()=>{
    dispatch({
      type: DEL_ALL_ITEMS,
      payload: ""
    })
  }
  return (
    <AppContext.Provider
      value={{
        ...state,
        logoutUser,
        toggleSidebar,
        setUser,
        addItemToCart,
        deleteItemFromCart,
        deleteAllItemsInCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { initialState, AppProvider, useAppContext };
