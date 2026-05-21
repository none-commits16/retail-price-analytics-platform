import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend
} from "recharts";

function PriceChart({ history, forecast }) {

  const historyData = history.slice(-30).map((item) => ({
    day: item.date,
    actual: item.price
  }));

  const forecastData = forecast.map((item) => ({
    day: `Day ${item.day}`,
    predicted: item.predicted_price
  }));

  const combinedData = [
    ...historyData,
    ...forecastData
  ];

  return (

    <div>

      <h3>Price Trends</h3>

      <LineChart
        width={900}
        height={400}
        data={combinedData}
      >

        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="day" />

        <YAxis />

        <Tooltip />

        <Legend />

        <Line
          type="monotone"
          dataKey="actual"
          stroke="#8884d8"
        />

        <Line
          type="monotone"
          dataKey="predicted"
          stroke="#82ca9d"
        />

      </LineChart>

    </div>
  );
}

export default PriceChart;