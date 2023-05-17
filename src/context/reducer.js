import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  TOGGLE_SIDEBAR,
  LOGOUT_USER,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  HANDLE_CHANGE,
  CLEAR_VALUES,
  SET_USER,
  ADD_ITEM,
  DEL_ITEM,
  DEL_ALL_ITEMS
} from "./action";

import { initialState } from "./appContext";

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: "Please enter all values!",
    };
  }
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: "",
      alertText: "",
    };
  }

  if (action.type === SETUP_USER_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === SETUP_USER_SUCCESS) {
    return {
      ...state,
      isLoading: true,
      token: action.payload.token,
      user: action.payload.user,
      showAlert: true,
      alertType: "success",
      alertText: action.payload.alertText,
    };
  }
  if (action.type === SETUP_USER_ERROR) {
    return {
      ...state,
      isLoading: true,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }

  if (action.type === TOGGLE_SIDEBAR) {
    return {
      ...state,
      showSidebar: !state.showSidebar,
    };
  }
  if (action.type === LOGOUT_USER) {
    return {
      ...initialState,
      user: null,
      token: null,
    };
  }
  if ( action.type === UPDATE_USER_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if ( action.type === UPDATE_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      showAlert: true,
      alertType: "success",
      alertText: "User Profile Updated!",
    };
  }
  if( action.type === SET_USER){
    return {
      ...state,
      firstName: action.payload.firstName,
      lastName: action.payload.lastName,
      phone: action.payload.phone,
      email: action.payload.email,
      address: action.payload?.address,
      token: action.payload.token,
    }
  }
  if( action.type === ADD_ITEM){
    return {
      ...state,
      cart: [...state.cart, action.payload]
    }
  }
  if( action.type === DEL_ITEM){
    const newCart = [...state.cart]
    var pos = null;
    newCart.forEach((item, index)=>{
      if( item._id === action.payload.id) pos = index
    })
    newCart.splice( pos, 1);
    
    return {
      ...state,
      cart: newCart,
    }
    

  }
  if( action.type === DEL_ALL_ITEMS){
    const newCart = [...state.cart]
    newCart.splice(0, newCart.length);
    return {
      ...state,
      cart: newCart
    }   
  }
};



export default reducer;
