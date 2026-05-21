function ProductSelector({
  products,
  selectedProduct,
  setSelectedProduct
}) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>Select Product</h3>

      <select
        value={selectedProduct}
        onChange={(e) =>
          setSelectedProduct(e.target.value)
        }
        style={{
          padding: "10px",
          width: "250px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          fontSize: "16px"
        }}
      >
        {products.map((product) => (
          <option
            key={product.product_id}
            value={product.product_id}
          >
            {product.product_name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ProductSelector;