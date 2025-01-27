
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Registering chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ProductPriceChart = () => {
  const data = [
    { "id": "1", "title": "HP Spectre x360", "price": 1200 },
    { "id": "2", "title": "MacBook Pro 14", "price": 2500 },
    { "id": "3", "title": "iPhone 14 Pro", "price": 1300 },
    { "id": "4", "title": "Samsung Galaxy S23 Ultra", "price": 1400 },
    { "id": "5", "title": "Apple Watch Series 8", "price": 500 },
    { "id": "6", "title": "Dell XPS 15", "price": 1500 },
    { "id": "7", "title": "Google Pixel 7 Pro", "price": 900 },
    { "id": "8", "title": "MacBook Air M2", "price": 1100 },
    { "id": "9", "title": "Samsung Galaxy Watch 5", "price": 350 },
    { "id": "10", "title": "Lenovo ThinkPad X1 Carbon", "price": 1400 },
    // Add more items if needed
  ];

  // Extracting titles and prices
  const titles = data.map(item => item.title);
  const prices = data.map(item => item.price);

  const chartData = {
    labels: titles, // Labels for X-axis
    datasets: [
      {
        label: 'Price (USD)',
        data: prices, // Y-axis data
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }
    ]
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      legend: {
        position: 'top'
      },
      tooltip: {
        enabled: true
      }
    }
  };

  return (
    <div className='my-12'>
      <h2 className='mt-6 font-bold'>Product Price Comparison</h2>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default ProductPriceChart;
