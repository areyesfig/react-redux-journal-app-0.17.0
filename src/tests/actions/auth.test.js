import { login, logout } from "../../actions/auth";
import { types } from "../../types/types";

describe('Pruebas con las acciones auth', () => {
    

    test('login y logout deben de crear la accion respectiva ', () => {
        
        const uid = 'ABCD12';
        const displayName = 'Alvaro';

        const loginAction = login(uid, displayName);
        const logoutAction = logout();


        expect( loginAction).toEqual({
            type: types.login,
            payload: {
                uid,
                displayName
            }
        });


        expect( logoutAction).toEqual({
            type: types.logout
        });
    })
    
})
