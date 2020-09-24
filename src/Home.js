import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="66666"
            title="Deneme Title"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="1111"
            title="Lorem ipsum dolor sit"
            price={29.99}
            image="https://m.media-amazon.com/images/I/41F2TDYj96L.__AC_SY200_.jpg"
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            id="222"
            title="Lorem ipsum dolor sit"
            price={29.99}
            image="https://m.media-amazon.com/images/I/31Vi302KrsL.__AC_SY200_.jpg"
            rating={3}
          />
          <Product
            id="3333"
            title="Lorem ipsum dolor sit"
            price={29.99}
            image="https://m.media-amazon.com/images/I/31Vi302KrsL.__AC_SY200_.jpg"
            rating={3}
          />
          <Product
            id="2222222"
            title="Lorem ipsum dolor sit"
            price={29.99}
            image="https://m.media-amazon.com/images/I/31Vi302KrsL.__AC_SY200_.jpg"
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            id="2221313"
            title="Lorem ipsum dolor sit"
            price={29.99}
            image="https://m.media-amazon.com/images/I/31Vi302KrsL.__AC_SY200_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
