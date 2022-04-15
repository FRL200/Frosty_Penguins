
import React from 'react'
import ClassSearcher from './Components/ClassSearcher.js';
import CreateSchedule from './Components/CreateSchedule.js';
import DropdownAp from './Components/DropdownAp.js';
import DropdownIb from './Components/DropdownIB.js';

//This page sets up a Classes Navigator page for any user to use
const ScheduleBuilder = () => (
            <div>
            <h1>Schedule Builder</h1>
          
           <ClassSearcher/>
          <DropdownAp/>
          <DropdownIb/>
          <CreateSchedule/> 

       

        </div>
    
)
    

export default ScheduleBuilder;

// function ScheduleBuilder(){
//     return(
//         <div>
//             <h1>Page</h1>
//            <ClassSearcher/>
//         </div>

//     );
// }
// export default ScheduleBuilder






