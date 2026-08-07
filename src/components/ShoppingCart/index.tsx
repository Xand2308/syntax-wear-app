import IconCart from "@/assets/images/icon-cart.png";
import { useContext, useState } from "react";
import { formatCurrency } from "../../utils/format-currency";
import { CartContext } from "../../contexts/CartContext";

export const ShoppingCart = () => {
  const [cartIsOpen, setCartIsOpen] = useState<boolean>(false);
  const { cart, removeFromCart, incrementInCart, decrementInCart } = useContext(CartContext);

  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      <button
        className="cursor-pointer relative"
        onClick={() => setCartIsOpen(!cartIsOpen)}
      >
        <img src={IconCart} alt="Ícone carrinho de compras" />
        {totalQuantity > 0 && (
          <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
            {totalQuantity}
          </span>
        )}
      </button>

      {/* Overlay */}
      <div
        className={`${cartIsOpen ? "bg-black/70 visible opacity-100" : "bg-transparent invisible opacity-0"} fixed top-0 bottom-0 left-0 right-0 z-50 transition-all duration-300`}
        onClick={() => setCartIsOpen(false)}
      >
        {/* Drawer */}
        <div
          className={`${cartIsOpen ? "translate-x-0" : "translate-x-full"} absolute top-0 right-0 bottom-0 bg-white pt-6 transition-all duration-500 ease-in-out w-75 md:w-106 text-black flex flex-col justify-between`}
          onClick={(e) => e.stopPropagation()}
        >
          <header className="flex items-center justify-between px-5 pb-4 border-b border-gray-200">
            <p className="text-2xl font-bold">Carrinho 🛒 ({cart.length})</p>
            <button className="text-xl font-bold cursor-pointer hover:text-gray-600" onClick={() => setCartIsOpen(!cartIsOpen)}>x</button>
          </header>

          <ul className="p-4 overflow-y-auto scrollbar-hide flex-1 flex flex-col gap-3">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-500 gap-2 my-auto">
                <p className="text-lg font-medium">Seu carrinho está vazio</p>
                <p className="text-sm">Adicione produtos para começar suas compras!</p>
              </div>
            ) : (
              cart.map((product) => (
                <li key={product.id} className="flex flex-col gap-1 pr-2 border-b border-gray-100 pb-3">
                  <button
                    className="self-end text-xs text-gray-400 hover:text-red-500 cursor-pointer font-bold"
                    onClick={() => removeFromCart(product.id)}
                  >x</button>

                  <div className="flex gap-4">
                    <img src={product.image} alt={product.name} className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-md"/>

                    <div className="flex flex-col items-start flex-1">
                      <p className="mb-1 text-sm font-semibold">{product.name}</p>
                      {product.color && <p className="mb-1 text-xs text-gray-500">Cor: {product.color}</p>}

                      <p className="mb-2 text-sm">
                        <span className="font-bold mr-1.5">{formatCurrency(product.price * product.quantity)}</span>
                      </p>

                      <div className="border border-gray-300 rounded flex gap-4 py-1 px-3 items-center">
                        <button
                          className="cursor-pointer font-bold px-1 hover:text-purple-600"
                          onClick={() => decrementInCart(product)}
                        >
                          -
                        </button>
                        <p className="text-sm font-medium">{product.quantity}</p>
                        <button
                          className="cursor-pointer font-bold px-1 hover:text-purple-600"
                          onClick={() => incrementInCart(product)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))
            )}
          </ul>

          <footer className="p-4 border-t border-gray-200 bg-white">
            <div className="flex justify-between items-center mb-3">
              <span className="font-semibold text-gray-700">Subtotal:</span>
              <span className="font-bold text-lg">{formatCurrency(totalPrice)}</span>
            </div>
            <button
              className="w-full py-3 bg-black text-white rounded-md cursor-pointer hover:bg-gray-800 font-bold transition-colors"
              onClick={() => {
                if (cart.length > 0) {
                  alert("Pedido finalizado com sucesso!");
                }
              }}
            >
              Fechar pedido
            </button>
          </footer>
        </div>
      </div>
    </>
  );
};
