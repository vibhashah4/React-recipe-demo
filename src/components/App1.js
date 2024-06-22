import React from "react";
import Menu from "../components/Menu";
import "bootstrap/dist/css/bootstrap.min.css";

// const App1 = (elem) => {
//   const { id, name, image, description, price } = elem;

//   return (
//     <div className="card" style={{ width: "18rem" }}>
//       <img src={image} className="card-img-top" alt="Card Image" />
//       <div className="card-body">
//         <h5 className="card-title">{name}</h5>
//         <p className="card-text">{description}</p>
//         <p>{price}</p>
//         <a href="#" className="btn btn-primary">
//           Order Now
//         </a>
//       </div>
//     </div>
//   );
// };

// export default App1;

const App1 = (elem) => {
  const { id, name, image, description, price } = elem;
  return (
    <React.Fragment>
      <h1 className="text-center text-danger text-capitalize">
        Welcome to my Restaurant
      </h1>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <img
                src="https://picsum.photos/seed/picsum/300/200"
                className="card-img-top"
                alt="..."
                height="200px"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://picsum.photos/id/1060/300/200?blur=2"
                className="card-img-top"
                alt="..."
                height="200px"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://picsum.photos/id/237/300/200"
                className="card-img-top"
                alt="..."
                height="200px"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App1;
