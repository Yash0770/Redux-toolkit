const redux = require('redux')
const produce = require('immer').produce
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators

const initialValue = {
    car:{
        carModel: 'V5',
        carBrand: 'Audi',
        carDetails: {
            car1:'1',
            car2:'2',
            car3: {
                name1:'name1',
                name2: 'name2'
            }
        }
    }
}

const CARS = 'CARS'

const carInfo = (details)=>{
    return{
        type: 'CARS',
        payload: details
    }
}

const reducer = (state = initialValue, action)=>{
    switch (action.type) {
        case 'CARS':
            // return {
            //     ...state,
            //     car: {
            //         ...state.car,
            //         carDetails: {
            //             ...state.car.carDetails,
            //             car3: {
            //                 ...state.car.carDetails.car3,
            //                 name2: action.payload,
            //             }
            //         }
            //     }
            // }
        
        return produce(state, (draft) => {
            draft.car.carDetails.car3.name2 = action.payload
        })

        default:
            return state;
    }
}

const store = createStore(reducer)
console.log("Details:",store.getState());

const unsubscribe = store.subscribe(()=>
    console.log('Specific Details:', store.getState().car.carDetails)
)

store.dispatch(carInfo("New Value"))
// action.carInfo();

unsubscribe()