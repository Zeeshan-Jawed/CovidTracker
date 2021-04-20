import react,{useEffect,useState} from 'react';
import { Line } from 'react-chartjs-2';
import {dailyfetchapi} from '../../api/index'


const Chart = () => {
    const [daily, setdaily] = useState({})
    useEffect(() => {
        async function getdailyapi(){
            const daily= await dailyfetchapi();
            setdaily(daily)
           }
           getdailyapi();
    },[] )
    let data ={}
    const lineChart = (
       
        daily[0] ? (
          <Line width={950} height={350}
            data={{
              labels: daily.map(({ date }) => new Date(date).toLocaleDateString()),
              datasets: [{
                data: daily.map((data) => data.confirmed),
                label: 'Infected',
                borderColor: '#3333ff',
                fill: true,
              }, {
                data: daily.map((data) => data.deaths),
                label: 'Deaths',
                borderColor: 'red',
                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                fill: true,
              },  {
                data: daily.map((data) => data.recovered),
                label: 'Recovered',
                borderColor: 'green',
                backgroundColor: 'rgba(0, 255, 0, 0.5)',
                fill: true,
              },
              ],
            }}
          />
        ) : null
      );
    
    return(
        <div >
        {data?lineChart:'null'}
    </div>
    )
}



export default Chart