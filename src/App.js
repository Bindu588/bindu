import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {   Route, Routes } from "react-router-dom";
import NavBar from './components/navbar';
import { Provider } from "react-redux";
import {store} from "./store";
import PatientDoctor from './components/PatientDoctor';
import { AdmittedPatients } from './components/admittedpatients';

function App(){
    return(
        <div>
         <Provider store={store}> 
          <NavBar />
          <Routes>
            <Route path="/" element={ <PatientDoctor />} /> 
            <Route path="/patientDoctor" element={ <PatientDoctor />} /> 
            <Route path="/admittedPatients" element={<AdmittedPatients/>}/>
          </Routes>
         </Provider>
       
        </div>
    );
}

export default App;