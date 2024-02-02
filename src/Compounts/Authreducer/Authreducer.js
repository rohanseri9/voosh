
const initialState = {
    user: null,
    isAuthenticated: false
  };
  
  export const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          user: action.payload,
          isAuthenticated: true
        };
      case 'LOGOUT':
        return initialState;
      default:
        return state;
    }
  };
  
  // authActions.js
  export const login = (user) => ({
    type: 'LOGIN',
    payload: user
  });
  
  export const logout = () => ({
    type: 'LOGOUT'
  });
  