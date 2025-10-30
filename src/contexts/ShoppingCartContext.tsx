import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useIsMobile } from '@/hooks/use-mobile';

interface CartItem {
  id: string;
  title: string;
  price: string;
  quantity: number;
}

interface ShoppingCartContextType {
  cartItems: CartItem[];
  addToCart: (pkg: any) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

const ShoppingCartContext = createContext<ShoppingCartContextType | undefined>(undefined);

export const useShoppingCart = () => {
  const context = useContext(ShoppingCartContext);
  if (!context) {
    throw new Error('useShoppingCart must be used within a ShoppingCartProvider');
  }
  return context;
};

interface ShoppingCartProviderProps {
  children: ReactNode;
}

export const ShoppingCartProvider: React.FC<ShoppingCartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { toast } = useToast();
  const isMobile = useIsMobile();

  const addToCart = (pkg: any) => {
    // If the title encodes duration like "Henkilösuoja Yhdelle – 12 kk", ensure only one duration per product
    const baseTitle = typeof pkg.title === 'string' && pkg.title.includes(' – ')
      ? pkg.title.split(' – ')[0]
      : undefined;

    // Remove any existing items – allow only one package in cart at a time
    let nextItems: CartItem[] = [];

    // Prevent duplicates of the exact same title as well
    const existingItemIndex = nextItems.findIndex(item => item.title === pkg.title);
    if (existingItemIndex > -1) {
      const updatedItems = [...nextItems];
      updatedItems[existingItemIndex].quantity = 1;
      setCartItems(updatedItems);
      return;
    }

    const newItem = {
      id: Date.now().toString(),
      title: pkg.title,
      price: pkg.price,
      quantity: 1
    };
    setCartItems([...nextItems, newItem]);

    // Toast notifications disabled per request
  };

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(id);
      return;
    }
    
    const updatedItems = cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedItems);
  };

  const removeFromCart = (id: string) => {
    const updatedItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedItems);
    // Toast notifications disabled per request
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};