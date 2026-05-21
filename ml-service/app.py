from flask import Flask, jsonify
from flask_cors import CORS

import pandas as pd
import joblib

app = Flask(__name__)
CORS(app)

# Load dataset
df = pd.read_csv("data/price_history.csv")

# Load trained models
models_data = joblib.load("best_models.pkl")

# -----------------------------------
# GET ALL PRODUCTS
# -----------------------------------
@app.route("/api/products")
def get_products():

    products = df[[
        "product_id",
        "product_name"
    ]].drop_duplicates()

    return jsonify(
        products.to_dict(orient="records")
    )

# -----------------------------------
# GET PRICE HISTORY
# -----------------------------------
@app.route("/api/history/<int:product_id>")
def get_history(product_id):

    product_df = df[
        df["product_id"] == product_id
    ]

    return jsonify(
        product_df.to_dict(orient="records")
    )

# -----------------------------------
# GET MODEL METRICS
# -----------------------------------
@app.route("/api/metrics/<int:product_id>")
def get_metrics(product_id):

    return jsonify(
        models_data[product_id]["metrics"]
    )

# -----------------------------------
# GET FORECAST
# -----------------------------------
@app.route("/api/forecast/<int:product_id>")
def forecast(product_id):

    model = models_data[product_id]["model"]

    product_df = df[
        df["product_id"] == product_id
    ]

    future_days = list(
        range(
            len(product_df),
            len(product_df) + 30
        )
    )

    predictions = model.predict(
        [[x] for x in future_days]
    )

    result = []

    for i, pred in enumerate(predictions):

        result.append({
            "day": i + 1,
            "predicted_price": round(
                float(pred),
                2
            )
        })

    return jsonify(result)

# -----------------------------------
# RUN APP
# -----------------------------------
if __name__ == "__main__":
    app.run(debug=True)