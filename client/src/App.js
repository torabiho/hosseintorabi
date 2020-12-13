import React, { Component } from "react";
import ReactGA from "react-ga";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Testimonials from "./Components/Testimonials";
import Portfolio from "./Components/Portfolio";
import { getResumeData } from "./apiResources/resumeData";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeData: {}
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  async componentDidMount() {
    try {
      const resumeData = await getResumeData();
      this.setState({ resumeData });
    } catch (error) {
      this.setState({ error });
    }
  }

  render() {
    const {bios, educations, works, skills, projects, testimonials } = this.state.resumeData;
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
}

export default App;
