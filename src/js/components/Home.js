import React from 'react';
import { Link } from 'react-router-dom';
import Quagga from 'quagga';
import { ProductConsumer } from './ProductContext';
import Footer from './Footer';


class Home extends React.Component {


    handleStartQuagga = () => {
        Quagga.init({
            inputStream: {
                name: 'Live',
                type: 'LiveStream',
                numOfWorkers: navigator.hardwareConcurrency,
                target: '.scan'
            },
            decoder: {
                readers: ["upc_reader", "upc_e_reader", "ean_reader", "ean_8_reader"]
            }
        }, err => {
            if (err) {
                console.log(err);
                return
            }

            const scanEl = document.querySelector('.scan');
            scanEl.classList.add('active');
    
            console.log("Finished. Ready to start");
            Quagga.start();

            Quagga.onDetected(data => {
                let barcodeData = data;
                Quagga.stop();
                window.open(`https://www.google.com/search?q=${barcodeData.codeResult.code}`);
                this.props.handleSetBarcode(barcodeData.codeResult.code);
            }, err => console.log(err))
            })
    }

    
    render() {
        return (
            <div className="home">
                <div className="home__logo-cont" >
                    <img src="public/img/logo.png" alt="Finyl logo" className="home__logo"/>
                </div>
                <h2 className="home__headline">Never make a blind purchase again.</h2>
                <p className="home__instructions">Scan the barcode of a product you want to buy and see what people are saying.</p>
                <ProductConsumer>
                        {
                            context => (
                                context.barcode ? (
                                    <div>
                                        <h2 className="home__barcode">Your barcode: {context.barcode}</h2>
                                        <p className="home__rescan-msg">Barcode not correct? Try rescanning below.</p>
                                    </div>
                                ): null
                            )
                        }
                     </ProductConsumer>
                <div className="start">
                    <button className="start__btn" onClick={this.handleStartQuagga}>Scan</button>
                </div>
                <div className="scan">
                    <img src="public/img/logo.png" alt="scan logo" className="scan__logo" />
                    <p className="scan__scanning">Scanning your product.</p>
                </div>
                {/* <Link to="/product/24556">Go to product page.</Link>
                <Link to="/recent/">Go to recents page.</Link> */}
                {/* <Footer /> */}
            </div>
        )
    }
}

export default Home;