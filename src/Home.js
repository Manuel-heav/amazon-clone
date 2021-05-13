import React from 'react'
import './Home.css'
import Product from './Product'

const Home = () => {
    return (
        <div className="home">
            <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" alt="" />

            {/* Product id, title, price, rating, image */}
            <div className="home__row">
                <Product 
                    id={3241234} 
                    title="Lijun Smart LED Strip Lights, 65.6ft WiFi RGB Rope Light Work with Alexa Google Assistant, Remote App Control Lighting Kit, Music Sync Color Changing Lights for Bedroom, Living Room"
                    price={13.6} 
                    rating={5} 
                    image="https://m.media-amazon.com/images/I/81fWaExUH8L._AC_UL320_.jpg"
                />
                 <Product 
                    id={3241234} 
                    title="Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PS4, & Xbox - 1-Year Rescue Service (STGX2000400)"
                    price={43.8} 
                    rating={3} 
                    image="https://images-na.ssl-images-amazon.com/images/I/81tjLksKixL._AC_SX679_.jpg"
                />
            </div>
            <div className="home__row">
                <Product 
                    id={3241234} 
                    title="Logitech MK270 Wireless Keyboard and Mouse Combo - Keyboard and Mouse Included, Long Battery Life"
                    price={22.2} 
                    rating={4} 
                    image="https://images-na.ssl-images-amazon.com/images/I/61v%2BtaI5jvL._AC_SX569_.jpg"
                />
                 <Product 
                    id={3241234} 
                    title="Laura Ashley Home | Paisley Patchwork Collection | Luxury Premium Ultra Soft Quilt Set, Comfortable & Stylish, All Season Bedding, Queen, Blue"
                    price={123.6} 
                    rating={2} 
                    image="https://images-na.ssl-images-amazon.com/images/I/915BWTjx-LL._AC_SX679_.jpg"
                />
                <Product 
                    id={3241234} 
                    title="SAMSUNG 40-inch Class LED Smart FHD TV 1080P (UN40N5200AFXZA, 2019 Model)"
                    price={45.99} 
                    rating={5} 
                    image="https://images-na.ssl-images-amazon.com/images/I/71Ao8Im97TL._AC_SX425_.jpg"
                />
            </div>

            <div className="home__row">
            <Product 
                    id={3241234} 
                    title="Comfy Brace Posture Corrector-Back Brace for Men and Women- Fully Adjustable Straightener for Mid, Upper Spine Support- Neck, Shoulder, Clavicle and Back Pain Relief-Breathable,"
                    price={4.99} 
                    rating={5} 
                    image="https://images-na.ssl-images-amazon.com/images/I/71hN0EkrOiL._SX466_.jpg"
                />
            </div>
            
            {/* Product */}
        </div>
    )
}

export default Home
