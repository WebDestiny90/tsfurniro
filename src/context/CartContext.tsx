"use client"
import { createContext, useContext, useState, ReactNode } from 'react';
import { Sofa, ColorVariant, CartContextType, CartItem } from '@/src/Types';

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showNotification, setShowNotification] = useState(false);

  const addToCart = (sofa: Sofa, selectedColor: ColorVariant) => {
    setCartItems(prev => {
      const existingItem = prev.find(item =>
        item.sofa.id === sofa.id && item.selectedColor === selectedColor
      );

      if (existingItem) {
        return prev.map(item =>
          item.sofa.id === sofa.id && item.selectedColor === selectedColor
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { sofa, quantity: 1, selectedColor }];
    });

    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  const removeFromCart = (sofaId: string, selectedColor: ColorVariant) => {
    setCartItems(prev => prev.filter(item => !(item.sofa.id === sofaId && item.selectedColor === selectedColor)));
  };

  const updateQuantity = (sofaId: string, quantity: number) => {
    setCartItems(prev =>
      prev.map(item =>
        item.sofa.id === sofaId ? { ...item, quantity } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      showNotification
    }}>
      {children}
      {showNotification && (
        <div style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          background: '#B88E2F',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '5px',
          zIndex: 1000,
        }}>
          Товар добавлен в корзину
        </div>
      )}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}; 