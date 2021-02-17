import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";

describe('pruebas en authReducer', () => {

    test('debe realizar login ', () => {
        
        const initState = {} ;

        const action = {
            type: types.login,
            payload: {
                uid: 'abc',
                displayName:'Alvaro'
            }
        };


        const state = authReducer( initState, action);

        expect(state).toEqual({
            uid: 'abc',
            name: 'Alvaro'
        })

    })
    

    test('debe realizar logout ', () => {
        
        const initState = {
            uid: 'abc',
            name:'Alvaro'
        } ;

        const action = {
            type: types.logout,
        };


        const state = authReducer( initState, action);

        expect(state).toEqual({})

    })

    test('no debe hacer cambios en el state ', () => {
        
        const initState = {
            uid: 'fsfsdfsdfsfsfsf',
            name:'Alvaro'
        } ;

        const action = {
            type: 'dsfdsfdfdnfjdsnfj',
        };


        const state = authReducer( initState, action);

        expect(state).toEqual( initState)

    })
    
    
    
})
