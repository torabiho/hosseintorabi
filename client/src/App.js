import React, { useState, useEffect } from "react";
import ReactGA from "react-ga";
import AOS from "aos";
import {
  Loader,
  Header,
  Footer,
  About,
  Resume,
  Contact,
  Testimonials,
  Portfolio,
} from "./components";
import { getResumeData } from "./apiResources/endpoints";
import { loadingStates } from "./constants";
import "./App.scss";

const App = () => {
  const [resumeData, setResumeData] = useState({});
  const [loadingStatus, setLoadingStatus] = useState(loadingStates.LOADING);

  useEffect(() => {
    AOS.init();
    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);

    const fetchData = async () => {
      try {
        const data = await getResumeData();
        setResumeData(data);
        setLoadingStatus(loadingStates.LOADED);
      } catch (error) {
        setLoadingStatus(loadingStates.ERROR);
      }
    };

    fetchData();
  }, []);

  if (loadingStatus === loadingStates.LOADED) {
    const { bios, educations, works, skills, projects, testimonials } =
      resumeData;

    return (
      <div className="App">
        <Header data={bios} />
        <About data={bios} />
        <Resume educations={educations} works={works} skills={skills} />
        <Portfolio data={projects} />
        <Testimonials data={testimonials} />
        <Contact data={bios} />
        <Footer data={bios} />
      </div>
    );
  }

  return <Loader loadingStatus={loadingStatus} />;
};

export default App;
