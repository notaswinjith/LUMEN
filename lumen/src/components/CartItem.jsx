function CartItem({ product, onIncrease, onDecrease, onRemove }) {
  return (
    <div className="cart-item">

      <input type="checkbox" checked readOnly />

      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />

      <div className="product-info">
        <p className="category">{product.category}</p>

        <h3>{product.name}</h3>

        <p className="details">{product.description}</p>
      </div>

      <div className="quantity">
        <button onClick={() => onDecrease(product.id)}>
          −
        </button>

        <span>{product.quantity}</span>

        <button onClick={() => onIncrease(product.id)}>
          +
        </button>
      </div>

      <div className="price">
        ${(product.price * product.quantity).toFixed(2)}
      </div>

      <button
        className="delete-btn"
        onClick={() => onRemove(product.id)}
      >
        🗑
      </button>

    </div>
  );
}

export default CartItem;