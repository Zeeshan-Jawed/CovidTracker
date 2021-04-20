import React,{useEffect,useState} from 'react';
import {fetchapi} from './api/index'
import image from './asset/image.png'
import './App.css';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';

function App() {
  
  const [data, setdata] = useState('Loading')
  useEffect(() => {
    async function getdata(){
      const apidata= await fetchapi();
      setdata(apidata)
    }
     getdata();
     
  }, [])
  return (
    <div className="container">
      <img className={image} src={image} alt="COVID-19" />
      <h1>Gobal Stats</h1>
      <Cards data={data}/>
      <h1>India Stats</h1>
      <Chart />
    </div>
  );
}

export default App;
