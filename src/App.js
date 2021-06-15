import React,{useState} from 'react'
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";


function App(){
  const [startDate, setStartDate] = useState(new Date());
  const [isTW ,setisTW] = useState(0);

  const newChange=(date)=>{
    var start = date.getFullYear();
    if (start>1911){
        const newdate = date.setFullYear(start-1911);
        setisTW(true);
        return(setStartDate(newdate));
    }
    else{
      return setStartDate(date)
    }
  }

  return (
    <div>
    <DatePicker dateFormat={isTW?"民國yyy年/MM月/dd日":" "} selected={startDate}  onChange={date=>newChange(date)}/>
    </div>
  );
};
export default App;