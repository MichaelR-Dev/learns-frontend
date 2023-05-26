import './App.css';
import { Link, Route, Routes } from "react-router-dom"
import * as Pages from "./pages/pages"
import * as Comp from "./components/components";
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome"
import * as faSolid from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <>
      <nav className="mobile-nav">
        <Comp.MobileButtonNav img={faSolid.faHome} linkTo="/dashboard"></Comp.MobileButtonNav>
        <Comp.MobileButtonNav img={faSolid.faList} linkTo="/schedule"></Comp.MobileButtonNav>
        <Comp.MobileButtonNav img={faSolid.faFaceGrin} linkTo="/staff"></Comp.MobileButtonNav>
        <Comp.MobileButtonNav img={faSolid.faCalendarAlt} linkTo="/calendar"></Comp.MobileButtonNav>
        <Comp.MobileButtonNav img={faSolid.faChartColumn} linkTo="/charts"></Comp.MobileButtonNav>
      </nav>
      <nav>

        <h4>Logged in: Michael Reynolds</h4>

        <ul>
          <li>
            <FontAwesomeIcon className='nav-icon' icon={faSolid.faHome}></FontAwesomeIcon>
            <Link to="/dashboard">Home</Link>
          </li>
          <li>
            <FontAwesomeIcon className='nav-icon' icon={faSolid.faList}></FontAwesomeIcon>
            <Link to="/schedule">Schedule</Link>
          </li>
          <li>
            <FontAwesomeIcon className='nav-icon' icon={faSolid.faFaceGrin}></FontAwesomeIcon>
            <Link to="/staff">Staff</Link>
          </li>
          <li>
            <FontAwesomeIcon className='nav-icon' icon={faSolid.faCalendarAlt}></FontAwesomeIcon>
            <Link to="/events">Events</Link>
          </li>
          <li style={{borderRight: "2px dotted white"}}>
            <FontAwesomeIcon className='nav-icon' icon={faSolid.faChartColumn}></FontAwesomeIcon>
            <Link to="/charts">Charts</Link>
          </li>
        </ul>
        <Comp.UserCard userName='Michael Reynolds'></Comp.UserCard>
      </nav>
      
      <Routes>
        <Route path="/" element={<Pages.LoginPage />}/>
        <Route path="/login" element={<Pages.LoginPage />}/>

        <Route path="/dashboard" element={<Pages.DashboardPage />}/>
        <Route path="/schedule" element={<Pages.SchedulePage />}/>
        <Route path="/schedule/:month/:day/:year" element={<Pages.SchedulePage />}/>
        <Route path="/staff" element={<Pages.StaffPage />}/>
        <Route path='/events' element={<Pages.EventsPage />}/>
        <Route path='/charts' element={<Pages.ChartsPage />} />

        <Route path='*' element={<Pages.NOTFOUND></Pages.NOTFOUND>}></Route>
      </Routes>
      
      
      <Comp.Footer_Custom></Comp.Footer_Custom>
    </>
  );
}

export default App;
