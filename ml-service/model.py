import pandas as pd
import joblib

from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import PolynomialFeatures
from sklearn.pipeline import make_pipeline
from sklearn.ensemble import RandomForestRegressor

from sklearn.metrics import (
    r2_score,
    mean_absolute_error,
    mean_squared_error
)

from sklearn.model_selection import train_test_split

# Load dataset
df = pd.read_csv("data/price_history.csv")

models_data = {}

# Train models for each product
for product_id in df["product_id"].unique():

    product_df = df[df["product_id"] == product_id]

    # X = day index
    X = [[i] for i in range(len(product_df))]

    # y = prices
    y = product_df["price"]

    X_train, X_test, y_train, y_test = train_test_split(
        X,
        y,
        test_size=0.2,
        random_state=42
    )

    models = {

        "Linear Regression": LinearRegression(),

        "Polynomial Regression": make_pipeline(
            PolynomialFeatures(degree=3),
            LinearRegression()
        ),

        "Random Forest": RandomForestRegressor(
            n_estimators=100,
            random_state=42
        )
    }

    best_model = None
    best_score = -999

    metrics = {}

    for name, model in models.items():

        # Train model
        model.fit(X_train, y_train)

        # Predict
        predictions = model.predict(X_test)

        # Metrics
        r2 = r2_score(y_test, predictions)

        mae = mean_absolute_error(y_test, predictions)

        rmse = mean_squared_error(
            y_test,
            predictions
        ) ** 0.5

        metrics[name] = {
            "R2": round(r2, 4),
            "MAE": round(mae, 2),
            "RMSE": round(rmse, 2)
        }

        # Select best model
        if r2 > best_score:
            best_score = r2
            best_model = model

    models_data[product_id] = {
        "model": best_model,
        "metrics": metrics
    }

# Save models
joblib.dump(models_data, "best_models.pkl")

print("Models trained successfully!")