import { useState } from "react";

export const useForm = ( initialForm = {} ) => {

    const [formState, setFormState] = useState( initialForm );
    
    const onInputChange = ( {target} ) => {
        // console.log(event.target.value);
        const { name, value } = target;
        // console.log({name, value});
        setFormState({
            ...formState,
            [name]: value,
        });
    }
    
    const onResetForm = () => {

        // Recorre las claves del objeto y asigna un string vacío a cada campo
        const resetState = Object.keys(initialForm).reduce((acc, key) => {
            acc[key] = ""; 
            return acc;
        }, {});
        
        setFormState(resetState);

        // setFormState( initialForm );
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}