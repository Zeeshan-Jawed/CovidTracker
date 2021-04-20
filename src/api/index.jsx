import axios from 'axios';

// const url ='https://covid2019-api.herokuapp.com/v2'
    const url ='https://api.covid19api.com/summary'
    const inurl='https://api.covid19india.org/data.json'

export const fetchapi=async()=>{
    let changeableUrl=url;
    // if (country) {
    //     changeableUrl = `${url}/country/${country}`;
    //   }
        try{
            const {data:{Global}} =await axios.get(changeableUrl)
            const modifieddata={
                confirmed:Global.TotalConfirmed,
                deaths:Global.TotalDeaths,
                recovered:Global.TotalRecovered,
                active:Global.NewConfirmed
            }
            
        dailyfetchapi()
            return modifieddata
        }catch(err){
                console.log(err)
        }
        
}
export const dailyfetchapi=async()=>{
    try{
        const  {data}=await axios.get(inurl)
        const modifieddata={
            data:data.cases_time_series
        }
        const modify=modifieddata.data.map(obj=>({
            confirmed:obj.dailyconfirmed,
                deaths:obj.dailydeceased,
                recovered:obj.dailyrecovered,
                date:obj.date
        }))
        return modify
    }catch(err){
        console.log(err)
    }
}