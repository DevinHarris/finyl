import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Home';
import ProductPage from './ProductPage';
import RecentProducts from './RecentProducts';

import { ProductProvider } from './ProductContext';

class Finyl extends React.Component {

    state = {
        barcode: '',
        recentProducts: [
            {
                name: 'MyProtein Whey',
                barcode: '004939567'
            },

            {
                name: 'Movie',
                barcode: '5674377'
            },

            {
                name: 'Shampoo and Conditioner',
                barcode: '667474678'
            },

            {
                name: 'Shoes',
                barcode: '576678789'
            }
        ],
        handleSetBarcode: this.handleSetBarcode,
        scanAttempts: 0
    }

    handleSetBarcode = (barcode) => {
        this.setState({
            barcode
        })
        
    }

    render() {
        return (
            <div>
                <ProductProvider value={this.state}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={() => <Home handleSetBarcode={this.handleSetBarcode} />}/>
                        <Route path="/product/:id" component={ProductPage} />
                        <Route path="/recent" component={RecentProducts} />
                    </Switch>
                </BrowserRouter>
            </ProductProvider>
            </div>
            
        )
    }
}

export default Finyl;