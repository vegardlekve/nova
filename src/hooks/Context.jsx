import React, { createContext, useContext, useState } from "react";

const ShopContext = createContext();

export const StateContext = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [qty, setQty] = useState(1);
    const [totalQty, setTotalQty] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

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
        //Total price
        setTotalPrice(
            (prevTotal) => prevTotal + product.discountedPrice * quantity
        );
        //Increase total qunatity
        setTotalQty((prevTotal) => prevTotal + quantity);

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

    const onRemove = (product) => {
        //Total price
        setTotalPrice((prevTotal) => prevTotal - product.discountedPrice);
        //Decrease total qunatity
        setTotalQty((prevTotal) => prevTotal - 1);

        const exist = cartItems.find((item) => item.id === product.id);
        if (exist.quantity === 1) {
            setCartItems(cartItems.filter((item) => item.id !== product.id));
        } else {
            setCartItems(
                cartItems.map((item) =>
                    item.id === product.id
                        ? { ...exist, quantity: exist.quantity - 1 }
                        : item
                )
            );
        }
    };

    return (
        <ShopContext.Provider
            value={{
                qty,
                increaseQty,
                decreaseQty,
                cartItems,
                onAdd,
                onRemove,
                totalQty,
                totalPrice,
            }}
        >
            {children}
        </ShopContext.Provider>
    );
};

export const useStateContext = () => useContext(ShopContext);
