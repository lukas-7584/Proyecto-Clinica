import React, {createContext, useState} from 'react'

export const cartContext = createContext ( );





const CartProvider = ( {children} ) =>{

    return (
        <cartContext.Provider value ={ { } }>

            { children }

        </cartContext.Provider>
    )
};

export default CartProvider;