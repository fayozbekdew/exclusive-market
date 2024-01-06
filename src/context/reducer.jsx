export const initialVal = {
  total: 0,
  products: [],
  favoritList: [],
  searchList: [],
  searchText: "",
};
function storeReducer(state, action) {
  switch (action.type) {
    case "add_basket":
      return {
        ...state,
        products: action.payload,
      };
    case "remove_basket":
      return {
        ...state,
        products: action.payload,
      };
    case "update_price":
      return {
        ...state,
        total: action.payload,
      };
    case "add_favorite_list":
      return {
        ...state,
        favoritList: action.payload,
      };
    case "remove_favorite_list":
      return {
        ...state,
        favoritList: action.payload,
      };
    case "add_search_list":
      return {
        ...state,
        searchList: action.payload,
      };
    case "add_search_text":
      return {
        ...state,
        searchText: action.payload,
      };
    default:
      throw Error("Cannot match case in reducer");
  }
}

export default storeReducer;
