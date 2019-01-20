const redux = require('redux');
const createStore = redux.createStore;

const initialState = [
    {name: 'Иван Дудкин', score: '1000', picture: {}},
    {name: 'Иван Пупкин', score: '900', picture: {}},
    {name: 'Иван Дулин', score: '800', picture: {}},
    {name: 'Иван Иванов', score: '700', picture: {}}
];

//Reducer
const rootReducer = (state = initialState, action) => {
    if (action.type === 'ADD_NAME') {
        return {
            ...state,
            name: state.name
        }
    }
    if (action.type === 'ADD_SCORE') {
        return {
            ...state,
            score: state.score
        }
    }
    if (action.type === 'ADD_TROPHY_PICTURE') {
        return {
            ...state,
            picture: state.picture
        }
    }
    return state
};

//Store
const store = createStore();
console.log(store.getState());

//Subscription
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
});

//Dispatching Action
store.dispatch({type: 'ADD_NAME'});
store.dispatch({type: 'ADD_SCORE'});
store.dispatch({type: 'ADD_TROPHY_PICTURE'});

