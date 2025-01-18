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
  description: {
    text: string;
    images: string[];
  };
  additional: {
    text: string;
    text2: string;
    text3: string;
    text4: string;
    text5: string;
  };
  reviews: {
    text: string;
  };
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

export interface BlogItem {
  id: number;
  imgSrc: string;
  alt: string;
  admin: string;
  date: string;
  tag: string;
  title: string;
  text: string;
  loading?: "lazy" | "eager";
}