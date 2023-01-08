import logo from './logo.svg';
import './App.css';
import {Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
} from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
)

function App() {

  const data = {
      labels:['Mon' , 'Tue' , 'Wed'],
      datasets: [{
          label : 'Sales of week',
          data : [6,3,9],
          backgroundColor : 'aqua',
          borderColor : 'black',
          pointBorderColor : 'aqua',
          fill : true,
          tension:0.4

        }
      ]
  }

  const options = {
    Plugins :{
      legend:true
    },
    scales:{
      y:{
        // min:3,
        // max :6
      }
    }
  }

  return (
    <div className="App">
      <h1>Chart</h1>
      <div style={ 
        {
        width :  '1000px',
        height: '800px',
        padding: '20px'
        }
      }>

        <Line
          data={data}
          options = {options}
        >
        </Line>
      </div>
    </div>
  );
}

export default App;
