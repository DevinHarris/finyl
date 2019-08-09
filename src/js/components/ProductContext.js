import React from 'react';

const ProductContext = React.createContext({
    barcode: ''
});

export const ProductProvider = ProductContext.Provider;
export const ProductConsumer = ProductContext.Consumer;

