# AI-Powered Retail Pricing Analytics Platform

A full-stack machine learning application that forecasts ecommerce product prices using multiple regression models and visualizes historical + predicted pricing trends through an interactive React dashboard.

---

## Features

- Product price forecasting
- Historical price trend visualization
- Comparison of multiple ML models
- REST API integration using Flask
- Interactive frontend dashboard using React
- Real-time chart updates
- Model evaluation metrics display

---

## Tech Stack

### Frontend
- React.js
- Axios
- Recharts

### Backend
- Flask
- Flask-CORS

### Machine Learning
- scikit-learn
- Linear Regression
- Polynomial Regression
- Random Forest Regression

### Data Handling
- Pandas
- NumPy

---

## Project Architecture

React Frontend
↓
Flask REST API
↓
ML Models + Dataset

---

## Machine Learning Models

The project compares the following models:

- Linear Regression
- Polynomial Regression
- Random Forest Regression

Models are evaluated using:

- R² Score
- Mean Absolute Error (MAE)
- Root Mean Squared Error (RMSE)

The best-performing model is automatically selected.

---

## API Endpoints

| Endpoint | Method | Description |
|---|---|---|
| `/api/products` | GET | Returns all products |
| `/api/history/<product_id>` | GET | Returns historical price data |
| `/api/forecast/<product_id>` | GET | Returns 30-day forecast |
| `/api/metrics/<product_id>` | GET | Returns ML metrics |

---

## Installation

### Clone Repository

```bash
git clone https://github.com/none-commits16/retail-price-analytics-platform.git
```

---

### Backend Setup

```bash
cd ml-service

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt
```

---

### Generate Dataset

```bash
python generate_data.py
```

---

### Train Models

```bash
python model.py
```

---

### Start Flask Backend

```bash
python app.py
```

Backend runs on:

```text
http://127.0.0.1:5000
```

---

### Frontend Setup

```bash
cd frontend

npm install

npm start
```

Frontend runs on:

```text
http://localhost:3000
```

---

## Future Improvements

- PostgreSQL integration
- User authentication
- Live ecommerce data integration
- Advanced time-series forecasting
- Docker deployment

---

## Resume Description

Designed a predictive pricing analytics platform using Python and scikit-learn comparing Linear Regression, Polynomial Regression, and Random Forest models; developed REST APIs using Flask and interactive dashboards using React.js and Recharts for real-time pricing insights and model evaluation.
