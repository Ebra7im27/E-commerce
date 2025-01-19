import { ADDITEM, DELITEM } from "../Action"

// Retrieve initial state from localStorage if available
const getInitialCart = () => {
    let stordCart = localStorage.getItem("cart")
    return stordCart ? JSON.parse(stordCart) : []
}

function handleCart(state = getInitialCart(), action) {
    const product = action.payload
    let updateCart

    switch (action.type) {
        // Add item
        case ADDITEM:
            // Check if product already in cart
            const check = state.find((x) => x.id === product.id)
            if (check) {
                // Increase the quantity
                updateCart = state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty + 1 } : x
                )
            } else {
                updateCart = [...state, { ...product, qty: 1 }]
            }
            // Update localStorage
            localStorage.setItem("cart", JSON.stringify(updateCart))
            return updateCart;

        // Delete Item
        case DELITEM:
            // Check if product already in cart
            const check2 = state.find((x) => x.id === product.id)
            if (check2 && check2.qty === 1) {
                updateCart = state.filter((x) => x.id !== product.id)
            }
            // Decrease the quantity
            else {
                updateCart = state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty - 1 } : x
                )
            }
            // Update localStorage
            localStorage.setItem("cart", JSON.stringify(updateCart))
            return updateCart;

        default:
            return state
    }
}

export default handleCart