
//This page sets up a layout for a page, I do not think it is currently being used but do not want to remove it incase it causes errors.
//This page and if it is needed or not will be revisited later

import { Outlet, Link } from "react-router-dom";

//Below is code that when put between the <ul> and </ul> will bring it up in bullet points
/* 
       <li>
            <Link to="/">Home</Link>
       </li>
       <li>
            <Link to="/MajorDeterminator">Major Determinator</Link>
       </li>

       <li>
            <Link to="/MajorNavigator">Major Navigator</Link>
       </li>

       <li>
            <Link to="/ClassesNavigator">Classes Navigator</Link>
       </li>

 
*/

const Layout = () => {
    return (
      <> 
      <nav>
      <ul>

        </ul>
        </nav>
          <Outlet />
          
    </>
  )
};

export default Layout;