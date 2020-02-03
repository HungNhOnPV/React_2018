import React from "react";
import Header from "./components/Header";
import Message from "./components/Message";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import ProductsContainer from "./containers/ProductsContainer";

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <!-- Header --> */}
        <Header />
        <main id="mainContainer">
          <div className="container">
            {/* <!-- Products --> */}
            <ProductsContainer />
            {/* <!-- Message --> */}
            <Message />
            {/* <!-- Cart --> */}
            <Cart />
          </div>
        </main>
        {/* <!-- Footer --> */}
        <Footer />
      </div>
    );
  }
}

export default App;
