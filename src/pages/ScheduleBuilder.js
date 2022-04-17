
import React from 'react'
import ClassSearcher from './Components/ClassSearcher.js';
import CreateSchedule from './Components/CreateSchedule.js';
import DropdownAp from './Components/DropdownAp.js';
import DropdownIb from './Components/DropdownIB.js';
import NumberCreditsSemesters from './Components/NumberCreditsSemesters.js';


const ScheduleBuilder = () => (
            <div>
            <h1 >Schedule Builder</h1>
          
           <ClassSearcher/>
          <DropdownAp/>
          <DropdownIb/>
          <NumberCreditsSemesters/>
          <CreateSchedule/> 
          
        </div>
    
)
    

export default ScheduleBuilder;








