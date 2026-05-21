function MetricsCard({ metrics }) {

  return (

    <div>

      <h3>Model Metrics</h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px"
        }}
      >

        {Object.entries(metrics).map(
          ([model, values]) => (

            <div
              key={model}
              style={{
                background: "#fafafa",
                borderRadius: "12px",
                padding: "20px",
                border: "1px solid #eee"
              }}
            >

              <h4>{model}</h4>

              <p>R²: {values.R2}</p>

              <p>MAE: {values.MAE}</p>

              <p>RMSE: {values.RMSE}</p>

            </div>

          )
        )}

      </div>

    </div>
  );
}

export default MetricsCard;