import React from "react";

import VaccinationGotEasier from "./components/VaccinationGotEasier";
import VaccinesTypeSlider from "./components/VaccinesTypes";
import VaccinationToday from "./components/VaccinationToday";
import GetVaccinationToday from "./components/GetVaccinationToday";
import Symptoms from "./components/Symptoms";
import Feedbacks from "./components/Feedbacks";
import Footer from "./components/Footer";

import "./styles/global.scss";

const App = () => (
  <>
    <VaccinationGotEasier />
    <VaccinesTypeSlider />
    <VaccinationToday />
    <GetVaccinationToday />
    <Symptoms />
    <Feedbacks />
    <Footer />
  </>
);

export default App;
