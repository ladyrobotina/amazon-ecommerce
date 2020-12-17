import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg" alt="" />
                <div className="home_row">
                    {/* Producto */}
                    <Product title="Fosmon Cargador de doble controlador compatible con controladores Xbox One/One X/One S Elite (no para Xbox Series X/S 2020), (dos ranuras) estación de carga de acoplamiento de alta velocidad con 2 baterías recargables - negro" 
                    price={39.99} image="https://images-na.ssl-images-amazon.com/images/I/61eEbDA%2BVHL._AC_SL1000_.jpg" rating={4} />
                    {/* Producto */}
                    <Product title="Dash DCAF200GBWH02 - Freidora de aire eléctrica Tasti-Crisp + Horno con control de temperatura, cesta antiadherente, guía de recetas + función de apagado automático, 2.6 cuartos" 
                    price={49.99} image="https://images-na.ssl-images-amazon.com/images/I/41nAh8iD4KL.jpg" rating={5} />
                </div>

                <div className="home_row">
                    {/* Producto */}
                    <Product title="Motorola Razr 5G | Unlocked | Made for US by Motorola | 8/256GB | 48MP Camera | 2020 | Polished Graphite" 
                    price={1199.99} image="https://images-na.ssl-images-amazon.com/images/I/61aGanMnfFL._AC_SL1500_.jpg" rating={4} />
                    {/* Producto */}
                    <Product title="Educational Insights Artie 3000 The Coding Robot: Perfecto para la escuela en casa y el aula - STEM Toy, Robot codificador para niños a partir de 7 años." 
                    price={41.19} image="https://images-na.ssl-images-amazon.com/images/I/61EaZh9lZcL._AC_SL1480_.jpg" rating={4} />
                    {/* Producto */}
                    <Product title="Termómetro de frente sin contacto para adultos y niños, termómetro de frente infrarrojo sin tacto para fiebre, pistola de lectura de temperatura inteligente en la frente" 
                    price={17.99} image="https://images-na.ssl-images-amazon.com/images/I/61DzZlL0igL._SL1500_.jpg" rating={5} />
                </div>
                
                <div className="home_row">
                    {/* Producto */}
                    <Product title="Samsung QN32Q50RAFXZA Flat 32 QLED 4K Serie 32Q50 Smart TV" 
                    price={397.99} image="https://images-na.ssl-images-amazon.com/images/I/51NKhnjhpGL._AC_SL1024_.jpg" rating={5} />
                </div>
            </div>
        </div>
    )
}

export default Home
