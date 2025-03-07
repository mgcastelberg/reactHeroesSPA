import { types } from "../../../auth/types/types";

describe('Pruebas en types', () => {
    
    test('debe de tener estos tipos', () => {

        console.log(types);
        
        expect( types ).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout'
        });
    });

});
