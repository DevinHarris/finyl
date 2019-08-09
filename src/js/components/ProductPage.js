import React from 'react';
import { ProductConsumer } from './ProductContext';

const ProductPage = () => (
    <ProductConsumer>
        {
            context => (
                <div>
                    <h1>Product Barcode</h1>
                    <p>{context.barcode}</p>
                </div>
            )
        }
    </ProductConsumer>
)

export default ProductPage;