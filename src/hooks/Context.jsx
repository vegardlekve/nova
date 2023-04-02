import React, { createContext, useContext, useState } from "react";

const ShopContext = createContext();

export const StateContext = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [qty, setQty] = useState(1);

    const increaseQty = () => {
        setQty((prevQty) => prevQty + 1);
    };

    const decreaseQty = () => {
        setQty((prevQty) => {
            if (prevQty - 1 < 1) return 1;
            return prevQty - 1;
        });
    };

    const onAdd = (product, quantity) => {
        const exist = cartItems.find((item) => item.id === product.id);
        if (exist) {
            setCartItems(
                cartItems.map((item) =>
                    item.id === product.id
                        ? { ...exist, quantity: exist.quantity + quantity }
                        : item
                )
            );
        } else {
            setCartItems([...cartItems, { ...product, quantity: quantity }]);
        }
    };

    return (
        <ShopContext.Provider
            value={{ qty, increaseQty, decreaseQty, cartItems, onAdd }}
        >
            {children}
        </ShopContext.Provider>
    );
};

export const useStateContext = () => useContext(ShopContext);
