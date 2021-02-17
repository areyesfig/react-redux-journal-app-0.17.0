import { finishLoading, removeError, setError, starLoading } from "../../actions/ui";
import { types } from "../../types/types";




describe('Pruebas en ui-actions', () => {

    test('todas las acciones deben funcionar ', () => {
        
        const action = setError('HELP!!');

        expect( action ).toEqual({
            type: types.uiSetError,
            payload: 'HELP!!'
        })

        const removeErrorAction = removeError();
        const startLoading = starLoading();
        const finishLoadingAction = finishLoading();


        expect(removeErrorAction).toEqual({
            type: types.uiRemoveError
        })
        expect(startLoading).toEqual({
            type: types.uiStarLoading
        })
        expect(finishLoadingAction).toEqual({
            type: types.uiFinishLoading
        })

    })
    
    
})
