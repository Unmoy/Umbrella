import products from "../../FakeData/BedData.json";


const initialState = {
  productList: products,
  cartList: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const newState = {
        ...state,
        readingList: [...state.readingList, action.payload],
      };
      return newState;
    }
    case "REMOVE_FROM_CART": {
      const newState = {
        ...state,
        readingList: state.readingList.filter((b) => b.id !== action.payload),
      };
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default productReducer;
