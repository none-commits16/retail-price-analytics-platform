import { useEffect, useState } from "react";
import axios from "axios";

import ProductSelector from "./ProductSelector";
import PriceChart from "./PriceChart";
import MetricsCard from "./MetricsCard";

const API_BASE = "https://retail-price-analytics-platform.onrender.com/api";

function PriceDashboard() {

  const [products, setProducts] = useState([]);

  const [selectedProduct, setSelectedProduct] = useState(1);

  const [history, setHistory] = useState([]);

  const [forecast, setForecast] = useState([]);

  const [metrics, setMetrics] = useState({});

  // Load products
  useEffect(() => {

    axios
      .get(`${API_BASE}/products`)
      .then((response) => {
        setProducts(response.data);
      });

  }, []);

  // Load selected product data
  useEffect(() => {

    axios
      .get(`${API_BASE}/history/${selectedProduct}`)
      .then((response) => {
        setHistory(response.data);
      });

    axios
      .get(`${API_BASE}/forecast/${selectedProduct}`)
      .then((response) => {
        setForecast(response.data);
      });

    axios
      .get(`${API_BASE}/metrics/${selectedProduct}`)
      .then((response) => {
        setMetrics(response.data);
      });

  }, [selectedProduct]);

  return (

    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f4f6f8",
        padding: "40px",
        fontFamily: "Arial"
      }}
    >

      <div
        style={{
          maxWidth: "1100px",
          margin: "auto"
        }}
      >

        <h1
          style={{
            textAlign: "center",
            marginBottom: "40px",
            color: "#222"
          }}
        >
          AI-Powered Retail Pricing Analytics
        </h1>

        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "12px",
            marginBottom: "30px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
          }}
        >

          <ProductSelector
            products={products}
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
          />

        </div>

        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "12px",
            marginBottom: "30px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
          }}
        >

          <PriceChart
            history={history}
            forecast={forecast}
          />

        </div>

        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "12px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
          }}
        >

          <MetricsCard metrics={metrics} />

        </div>

      </div>

    </div>
  );
}

export default PriceDashboard;