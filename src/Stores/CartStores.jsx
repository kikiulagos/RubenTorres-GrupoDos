import { create } from 'zustand';

export const useCartStore = create((set) => ({
  cart: [],

  addToCart: (product) => set((state) => {
    const existingProduct = state.cart.find(item => item.id === product.id);
    if (existingProduct) {
      return {
        cart: state.cart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };
    } else {
      return {
        cart: [...state.cart, { ...product, quantity: 1 }],
      };
    }
  }),

  removeFromCart: (id) => set((state) => {
    const product = state.cart.find(item => item.id === id);
    if (product && product.quantity > 1) {
      return {
        cart: state.cart.map(item =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        ),
      };
    } else {
      return {
        cart: state.cart.filter(item => item.id !== id),
      };
    }
  }),

  clearCart: () => set(() => ({
    cart: [],
  })),
}));