const menuLoaded = (newMenu) => {
  return {
    type: 'MENU_LOADED',
    payload: newMenu
  };
};

const menuRequested = () => {
  return {
    type: 'MENU_REQUESTED'
  };
};

const menuError = () => {
  return {
    type: 'MENU_ERROR'
  };
};

const addedToCard = (id) => {
  return {
    type: 'ITEM_ADD_TO_CARD',
    payload: id
  };
};

const deleteFromCard = (id) => {
  return {
    type: 'ITEM_REMOVE_FROM_CARD',
    payload: id
  };
};

export {
  menuLoaded,
  menuRequested,
  menuError,
  addedToCard,
  deleteFromCard
};