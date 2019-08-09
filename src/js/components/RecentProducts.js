import React from 'react';
import { ProductConsumer } from './ProductContext';

const RecentProducts = () => (
    
        <ProductConsumer>
            {
                context => (
                    <div>
                        { context.recentProducts.map(product => {
                            return (
                                <div>{product.name}</div>
                            )
                        }) }
                    </div>
                )
            }
        </ProductConsumer>
    
)

export default RecentProducts;