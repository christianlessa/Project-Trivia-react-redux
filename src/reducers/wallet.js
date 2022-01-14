// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  currencies: [],
  expenses: [{ id: -1,
    value: 0,
    currency: '',
    method: '',
    tag: '',
    description: '',    
    exchangeRates: [] }],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'RECEIVE_MOVIES':
      return {
        currencies: state.currencies,
        expenses: [
          ...state.expenses, // estado antarior de baixo
          {
            id: state.expenses[state.expenses.length - 1].id+1,
            ...action.ss,
            exchangeRates: action.exchangeRates,
          }, // id mais 1 com dados da despesa com caotações
        ], //[{ exchangeRates: action.exchangeRates}]
      };
      case 'RECEIVE_MOVIES2':
      return {
        currencies: action.currencies,
        expenses: state.expenses, //[{id: state.expenses[0].id}],  //state.expenses //[{ exchangeRates: action.exchangeRates}]
      };
      
    default:
      return state;
  }
};

export default wallet;
