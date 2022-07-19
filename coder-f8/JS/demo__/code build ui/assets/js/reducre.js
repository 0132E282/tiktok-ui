const init = {
   cars : ['b,ư']
}
export default function reducer (state = init , action , args){
    switch (action){
        case 'add':
            const [newCar] = args;
            return {
                ...state,
                cars: [...state.cars,newCar]
            }
        default : 
            return state;
    }
} 