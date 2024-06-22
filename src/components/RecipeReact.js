import React, { useState } from "react";
import Menu from "../components/Menu";
import "bootstrap/dist/css/bootstrap.min.css";

const RecipeReact = () => {
  const [items, setItems] = useState(Menu);

  const filterItem = (categItem) => {
    const updatedItems = Menu.filter((currElem) => {
      return currElem.category === categItem;
    });
    setItems(updatedItems);
  };

  return (
    <>
      <h1 className="mt-3 text-align-centre main-heading">
        Order your Favourite Food
      </h1>
      <hr />
      <div className="menu-tabs container">
        <div className="menu-tab d-flex justify-content-around">
          <button
            className="btn btn-warning"
            onClick={() => filterItem("breakfast")}
          >
            Breakfast
          </button>
          <button
            className="btn btn-warning"
            onClick={() => filterItem("lunch")}
          >
            Lunch
          </button>
          <button
            className="btn btn-warning"
            onClick={() => filterItem("Dinner")}
          >
            Dinner
          </button>
          <button className="btn btn-warning" onClick={() => setItems(Menu)}>
            All
          </button>
        </div>
      </div>
      {/* main items section */}
      <div className="menu-items container-fluid mt-5">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row my-5">
              {items.map((elem) => {
                const { id, name, image, description, price } = elem;
                return (
                  <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5">
                    <div className="row Item-inside">
                      {/* for images */}
                      <div className="col-12 col-md-12 col-lg-4 img-div"></div>
                      <img src={image} alt="menuPic" className="img-fluid" />
                    </div>
                    {/* menu items description */}
                    <div className="col-12 col-md-12 col-lg-8">
                      <div className="main-title pt-4 pb-3">
                        <h1>{name}</h1>
                        <p>{description}</p>
                      </div>
                      <div className="menu-price">
                        <div className="price-book-divide d-flex justify-content-between">
                          <h2>Price: {price}</h2>
                          <a href="#">
                            <button className="btn btn-primary">
                              Order Now
                            </button>
                          </a>
                        </div>
                        <p>*Prices may vary on selected dates</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeReact;
