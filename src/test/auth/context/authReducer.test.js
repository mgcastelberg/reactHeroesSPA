import { authReducer } from "../../../auth/context/authReducer";
import { types } from "../../../auth/types/types";

describe('authReducer', () => {
    
    test('debe de retornar el estado por defecto', () => {
        const state = authReducer({ logged: false }, {});
        expect(state).toEqual({ logged: false });
    });

    test('debe de autenticar el usuario', () => {
        const action = {
            type: types.login,
            payload: {
                name: 'Manux',
                id: '123'
            }
        }
        const state = authReducer({ logged: false }, action);
        expect(state).toEqual({
            logged: true,
            user: action.payload
        });
    });

    test('debe de borrar el name del usuario', () => {

        const state = {
            logged: true,
            user: { id: '123', name: 'Manux' }
        }

        const action = {
            type: types.logout                
        }

        const newState = authReducer(state, action);

        expect(newState).toEqual({ logged: false });
    });

});
