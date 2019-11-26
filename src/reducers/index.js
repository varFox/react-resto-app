const initialState = {
  menu: [],
  loading: true,
  error: false,
  items: [],
  price: 0
}

const reduser = (state = initialState, action) => {
  switch (action.type) {
    case 'MENU_LOADED':
      return {
        ...state,
        menu: action.payload,
        loading: false,
        error: false
      };
    case 'MENU_REQUESTED':
      return {
        ...state,
        loading: true,
        error: false
      };
    case 'MENU_ERROR':
      return {
        ...state,
        error: true
      };
    case 'ITEM_ADD_TO_CARD':
      const id = action.payload;
      const item = state.menu.find(item => item.id === id);
      const indexItem = state.items.find(item => item.id === id);
      const newItem = {
        title: item.title,
        price: item.price,
        url: item.url,
        id: item.id,
        count: indexItem ? indexItem.count : 1
      };
      if (indexItem) {
        const indexItemId = state.items.findIndex(item => item.id === indexItem.id)
        newItem.count++ ;
        return {
          ...state,
          items: [
            ...state.items.slice(0, indexItemId),
            newItem,
            ...state.items.slice(indexItemId + 1)
          ],
          price: state.price + newItem.price
        }
      }
      return {
        ...state,
        items: [
          ...state.items,
          newItem
        ],
        price: state.price + newItem.price
      };
    case 'ITEM_REMOVE_FROM_CARD':
      const idx = action.payload;
      const itemId = state.items.findIndex(item => item.id === idx);
      const itm = state.items.find(item => item.id === idx)
      
      return {
        ...state,
        items: [
          ...state.items.slice(0, itemId),
          ...state.items.slice(itemId + 1)
        ],
        price: state.price - (itm.count * itm.price)
      };

    default:
      return state;
  }
}

export default reduser;