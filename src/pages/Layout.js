import { Outlet, Link } from "react-router-dom";

//Below is code that when put between the <ul> and </ul> will bring it up in bullet points
/*          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/MajorDeterminator">Major Determinator</Link>
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