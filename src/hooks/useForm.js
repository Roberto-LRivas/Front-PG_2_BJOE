import { useState } from "react"


export const useForm = ( initialState = {}) => {

    const [values, setValue] = useState(initialState);

    const reset = () => {
        setValue(initialState);
    }
    
    const handleInputChange = ( {target} ) => {
        setValue({
            ...values,
            [target.name]: target.value
        });
    }
    //console.log(values);

    return [
        values,
        handleInputChange,
        reset
    ]
}