import pandas as pd
import numpy as np
from datetime import datetime, timedelta
import os

np.random.seed(42)

products = {
    1: ("Laptop", 70000),
    2: ("Headphones", 3000),
    3: ("Smartwatch", 15000),
    4: ("Keyboard", 2500),
    5: ("Monitor", 12000)
}

rows = []

start_date = datetime.now() - timedelta(days=365)

for product_id, (product_name, base_price) in products.items():

    current_price = base_price

    for day in range(365):

        date = start_date + timedelta(days=day)

        seasonal_effect = np.sin(day / 30) * 500

        random_noise = np.random.normal(0, 300)

        trend = day * 2

        price = current_price + seasonal_effect + random_noise + trend

        rows.append([
            product_id,
            product_name,
            date.strftime("%Y-%m-%d"),
            round(price, 2)
        ])

df = pd.DataFrame(rows, columns=[
    "product_id",
    "product_name",
    "date",
    "price"
])

os.makedirs("data", exist_ok=True)

df.to_csv("data/price_history.csv", index=False)

print("Dataset generated successfully!")