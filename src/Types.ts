export interface productsInfo {
  id: number;
  title: string;
  text: string;
  price: number;
  priceOld: number;
  image: string;
  discount: number;
  color: string;
}

export interface categoryItems {
  title: string;
  text: string;
}

export type ColorVariant = string;

export interface ColorPaths {
  [key: string]: {
    main: string;
    previews: string[];
    mains: string[];
    cssColor: string;
  }
}

export interface Sofa {
  id: string;
  name: string;
  price: string;
  alt: string;
  mainImg: string;
  nameDesc: string;
  colors: ColorPaths;
  descriptionText: string;
}

export interface CartItem {
  sofa: Sofa;
  quantity: number;
  selectedColor: ColorVariant;
}

export interface CartContextType {
  cartItems: CartItem[];
  addToCart: (sofa: Sofa, selectedColor: ColorVariant) => void;
  removeFromCart: (sofaId: string, selectedColor: ColorVariant) => void;
  updateQuantity: (sofaId: string, quantity: number) => void;
  showNotification: boolean;
}