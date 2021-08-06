
const initialState = {
  coins: [
    {
      id: 1,
      label: "1p",
      stock: 22,
      value: 0.01
    },
    {
      id: 2,
      label: "2p",
      stock: 12,
      value: 0.02
    },
    {
      id: 3,
      label: "5p",
      stock: 14,
      value: 0.05
    },
    {
      id: 4,
      label: "10p",
      stock: 5,
      value: 0.1
    },
    {
      id: 5,
      label: "20p",
      stock: 20,
      value: 0.2
    },
    {
      id: 6,
      label: "50p",
      stock: 11,
      value: 0.5
    },
    {
      id: 7,
      label: "£1",
      stock: 13,
      value: 1
    },
    {
      id: 8,
      label: "£2",
      stock: 7,
      value: 2
    }
  ],
  money: 0,
  balance: [],
  message: 'Please send money and make an order'
};

const coins = (state = initialState, action) => {
  switch (action.type) {
    case 'SEND_MONEY': {
      return { ...state, money: action.payload };
    }
    case 'SEND_BALANCE': {
      return { ...state, balance: action.payload };
    }
    case 'GET_REST': {
      return { ...state, balance: [], money: 0 };
    }
    case 'CHANGE_COUNT_COIN': {
      state.coins.forEach((coin) => {
        if (coin.id === action.payload) {
          coin.stock += 1;
        }
      })
    }
      return state;
    case 'SEND_MESSAGE': {
      return { ...state, message: action.payload };
    }
    default:
      return state;
  }
};

export default coins;
