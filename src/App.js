import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import {Routes, Route} from "react-router";

import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import SignUpComponent from './components/SignUpComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import GetTemplate from './components/GetTemplate';
import CreateTemplateComponent from './components/CreateTemplateComponent';
import UpdateTemplateComponent from './components/UpdateTemplateComponent';
import LoginComponent from './components/LoginComponent';


function App() {
  return (
    <div className='page'>
      
      <Router>
        <div className='container'>
          <HeaderComponent />
          <div className="container">
          <Routes>
            <Route path = "/" element={<ListEmployeeComponent/>}></Route>
            <Route path = "/employees" element={<ListEmployeeComponent/>}></Route>
            <Route path = "/login" element={<LoginComponent/>}></Route>
            <Route path = "/add-employee" element={<SignUpComponent/>}></Route>
            <Route path = "/update-employee/:id" element={<UpdateEmployeeComponent/>}></Route>
            <Route path = "/:id/get-templates" element={<GetTemplate/>}></Route>
            <Route path = "/:id/add-template" element={<CreateTemplateComponent/>}></Route>
            <Route path = ":employeeId/update-template/:id" element={<UpdateTemplateComponent/>}></Route>
          </Routes>
          </div>
          <FooterComponent />
        </div>
      </Router>
    </div>
  );
}

export default App;
