import React from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import Message from "./components/Message";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <!-- Header --> */}
        <Header />
        <main id="mainContainer">
          <div className="container">
            {/* <!-- Products --> */}
            <Products />
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
