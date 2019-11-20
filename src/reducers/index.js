const initialState = {
  menu: [],
  loading: true,
  error: false
}

const reduser = (state = initialState, action) => {
  switch (action.type) {
    case 'MENU_LOADED':
      return {
        menu: action.payload,
        loading: false,
        error: false
      };
    case 'MENU_REQUESTED':
      return {
        menu: state.menu,
        loading: true,
        error: false
      };
      case 'MENU_ERROR':
        return {
          menu: state.menu,
          loading: state.loading,
          error: true
        };
    default:
      return state;
  }
}

export default reduser;