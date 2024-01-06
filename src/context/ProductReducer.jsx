import { createContext, useReducer } from "react";
import  reducer, { initialVal } from "./reducer";

export const StoreContext = createContext();

function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialVal);

  const addToBasket = (product) => {
    const updateBasket = state.products;
      updateBasket.push(product);
        updatePrice(updateBasket)
        dispatch({
          type: "add_basket",
          payload: updateBasket,
        });
  };
  const removeFromBasket = (product) => {
    const updateBasket = state.products.filter(
      (currentProduct) => currentProduct.name !== product.name
    );
    updatePrice(updateBasket)
    dispatch({
      type: "remove_basket",
      payload: updateBasket,
    });
  };
  const addToFavorite = (product) => {
    const updateFavorite = state.favoritList;
    updateFavorite.push(product);
    dispatch({
      type: "add_favorite_list",
      payload: updateFavorite,
    });
  };
  const removeFromFavorite = (product) => {
    const updateFavorite = state.favoritList.filter(
      (currentProduct) => currentProduct.name !== product.name
    );
    dispatch({
      type: "remove_favorite_list",
      payload: updateFavorite,
    });
  };
  const addSearchList = (product) => {
    const updateSearchList = state.searchList;
      updateSearchList.push(product);
        dispatch({
          type: "add_search_list",
          payload: updateSearchList,
        });
  };
  const addSearchText = (text) => {
    let updateSearchText = state.searchText;
      updateSearchText = text;
        dispatch({
          type: "add_search_text",
          payload: updateSearchText,
        });
  };
  const updatePrice = (products) => {
  let total = 0;
  products.forEach(product => {
    total += product.price
  })
  dispatch({
    type: "update_price",
    payload: total,
  });
  }

  const value = {
    total: state.total,
    products: state.products,
    favoritList:state.favoritList,
    searchList: state.searchList,
    searchText: state.searchText,
    addToBasket,
    removeFromBasket,
    addToFavorite,
    removeFromFavorite,
    addSearchList,
    addSearchText,
  }
  return (
    <StoreContext.Provider value={value}>
      {children}
    </StoreContext.Provider>
  );
}

export default StoreProvider;
