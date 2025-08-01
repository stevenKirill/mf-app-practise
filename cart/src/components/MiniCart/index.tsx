import React, { useState, useEffect } from "react";
import { currency } from "home/services";
import { cart } from "../../api/consts";
import { clearCart } from "../../api/routes/cart";
import { CartItem } from "../../types";

export const MiniCart = () => {
  const [items, setItems] = useState<CartItem[] | []>([]);
  const [show, setShow] = useState<boolean>(false);
  const [checkout, setCheckout] = useState(false);
  useEffect(() => {
    setItems(cart.value?.cartItems);
    cart.subscribe((c) => {
        setItems(c)
    });
  }, []);

  const handleCheckout = () => {
    setCheckout(!checkout);
  };

  if (!items) return null;

  return (
    <React.Fragment>
      <span onClick={() => setShow(!show)} id="showcart_span">
        <i className="ri-shopping-cart-2-fill text-2xl" id="showcart"></i>
        {items.length}
      </span>
      {show && (
        <>
          <div
            className="absolute p-5 border-4 border-blue-800 bg-white rounded-xl text-black"
            style={{
              width: 300,
              top: "2rem",
              left: -250,
            }}
          >
            <span style={{ cursor: 'pointer' }} onClick={() => setShow(false)}>
              <i className="ri-close-fill"></i>
            </span>
            {items.length > 0 ?
            <div
              className="grid gap-3 text-sm"
              style={{
                gridTemplateColumns: "1fr 3fr 10fr 2fr",
              }}
            >
              {items.map((item) => (
                <React.Fragment key={item.id}>
                  <div>{item.quantity}</div>
                  <img src={item.image} alt={item.name} className="max-h-6" />
                  <div>{item.name}</div>
                  <div className="text-right">
                    {currency.format(item.quantity * item.price)}
                  </div>
                </React.Fragment>
              ))}
              <div></div>
              <div></div>
              <div></div>
              <div>
                {currency.format(
                  items.reduce((a, v) => a + v.quantity * v.price, 0)
                )}
              </div>
            </div> 
            : 
            <div>No items</div>
            }
            {checkout && (
              <div>Checkout</div>
            )}
            <div className="flex">
              <div className="flex-grow">
                <button
                  id="clearcart"
                  className="bg-white border border-green-800 text-green-800 py-2 px-5 rounded-md text-sm"
                  onClick={clearCart}
                >
                  Clear Cart
                </button>
              </div>
              <div className="flex-end">
                <button
                  className="bg-green-900 text-white py-2 px-5 rounded-md text-sm"
                  onClick={handleCheckout}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </React.Fragment>
  );
};
