import { combineReducers } from "@reduxjs/toolkit";
import patientDoctor from "./patientDoctor";
import admittedPatients from "./admittedPatients";

export default combineReducers({patientDoctor,admittedPatients})