import { types } from '../../types/types';

describe('Pruebas con nuestros tipos', () => {

    test('debe de tener estos tipos', () => {
        
        expect( types ).toEqual({
            
                login : '[Auth] login',
                logout : '[Auth] logout',
            
                uiSetError: '[UI] Set Error',
                uiRemoveError: '[UI] Remove Error',
            
                uiStarLoading: '[UI] Start Loading ',
                uiFinishLoading: '[UI] Finish Loading',
            
                notesAddNew: '[Notes] New note',
                notesActive: '[Notes] Set active note',
                notesLoad: '[Notes] Load note',
                notesUpdated: '[Notes] Updated note',
                notesFileUrl: '[Notes] Updated image url',
                notesDelete: '[Notes] Delete note',
                notesLogoutCleaning: '[Notes] Logout Clean',
            
            
        })
    })
    
})