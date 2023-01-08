import logo from './logo.svg';
import './App.css';
import {Line } from 'react-chartjs-2';
import { Data } from "./data";
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
      labels:['12-Nov' , '13-Nov' , '14-Nov', '15-Nov', '16-Nov','17-Nov','18-Nov'],
      datasets: [{
          label : 'Tempreature Data',
          data : Data,
          backgroundColor : 'aqua',
          borderColor : 'black',
          pointBorderColor : 'Black',
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
