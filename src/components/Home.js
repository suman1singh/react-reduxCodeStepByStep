import React from "react";

export default function Home() {
  return (
    <div>
      <h1>Home Component</h1>
      <div className="add-to-cart">
        <img src="https://images.cdn3.stockunlimited.net/preview1300/add-to-cart-icon_1249253.jpg" />
      </div>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src="https://m.media-amazon.com/images/I/61eDXs9QFNL._SX522_.jpg" />
        </div>
        <div className="text-wrapper item">
          <span>I Phone</span><br />
          <span>Price: $1000.00</span>
        </div>
        <div className="btn-wrapper item">
            <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
}
