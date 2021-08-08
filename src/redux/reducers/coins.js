
const initialState = {
  coins: [
    {
      id: '1x1p',
      label: "1p",
      stock: 22,
      value: 0.01
    },
    {
      id: '1x2p',
      label: "2p",
      stock: 12,
      value: 0.02
    },
    {
      id: '1x5p',
      label: "5p",
      stock: 14,
      value: 0.05
    },
    {
      id: '1x10p',
      label: "10p",
      stock: 5,
      value: 0.1
    },
    {
      id: '1x20p',
      label: "20p",
      stock: 20,
      value: 0.2
    },
    {
      id: '1x50p',
      label: "50p",
      stock: 11,
      value: 0.5
    },
    {
      id: '1x£1',
      label: "£1",
      stock: 13,
      value: 1
    },
    {
      id: '1x£2',
      label: "£2",
      stock: 7,
      value: 2
    }
  ],
  money: 0,
  balance: [],
  reset: 0,
  message: 'Please send money and make an order'
};

const coins = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_COIN': {
      for (const [key, value] of Object.entries(action.payload)) {
        state.coins.forEach((item) => {
          if (item.id === key) {
            item.stock += +value;
          }
        })
      }
      action.forceUpdate();
      return {
        ...state, reset: Math.random()
      };
    }
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
