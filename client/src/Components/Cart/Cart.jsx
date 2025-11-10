import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increaseQuantity, decreaseQuantity, removeFromCart, clearCart } from '../../redux/feature/CartSlice.js'
import { Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

export default function Cart() {
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cart.items)

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="max-w-5xl mx-auto my-10 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-5 text-center text-gray-700">
        🛒 Your Cart
      </h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty!</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded-md shadow-sm mb-3">
              <div className="flex items-center space-x-4">
                <img src={item.image} alt={item.title} className="w-16 h-16 object-contain rounded" />
                <div>
                  <h4 className="font-semibold text-gray-700 line-clamp-1">{item.title}</h4>
                  <p className="text-sm text-gray-500">${item.price}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Button variant="outlined" onClick={() => dispatch(decreaseQuantity(item.id))}>-</Button>
                <span className="font-semibold">{item.quantity}</span>
                <Button variant="outlined" onClick={() => dispatch(increaseQuantity(item.id))}>+</Button>
              </div>

              <div className="flex items-center gap-3">
                <p className="font-bold text-gray-700">${(item.price * item.quantity).toFixed(2)}</p>
                <Button color="error" onClick={() => dispatch(removeFromCart(item.id))}>
                  <DeleteIcon />
                </Button>
              </div>
            </div>
          ))}

          <div className="flex justify-between items-center mt-6 border-t pt-4">
            <h3 className="text-lg font-semibold text-gray-700">
              Total: <span className="text-green-600">${total.toFixed(2)}</span>
            </h3>
            <div className="flex gap-3">
              <Button color="error" variant="outlined" onClick={() => dispatch(clearCart())}>
                Clear Cart
              </Button>
              <Button color="success" variant="contained">
                Checkout
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
