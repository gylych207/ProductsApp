import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
import Nav from "./components/Nav.jsx";
import Products from "./components/Products.jsx";
import ProductInfo from "./components/ProductInfo.jsx";

function App() {
  const [data, setData] = useState("");
  const [info, setInfo] = useState("");

  useEffect(() => {
    const getData = async function () {
      let response = await axios.get(
        " https://products-api-01.herokuapp.com/api/products"
      );
      console.log(response.data);
      setData(response.data);
    };
    getData();
  }, []);

  return (
    <div className="App">
      <Router>
        <Nav />

        <Route path exact="/">
          <Products data={data} setData={setData} setInfo={setInfo} />
        </Route>

        <Route path="/Info">
          <ProductInfo info={info} />
        </Route>
      </Router>
    </div>
  );
}

export default App;
