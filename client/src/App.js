import React, { Component } from "react";
import ReactGA from "react-ga";
import AOS from "aos";
import Loader from "./Components/Loader";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Testimonials from "./Components/Testimonials";
import Portfolio from "./Components/Portfolio";
import { getResumeData } from "./apiResources/endpoints";
import { loadingStates } from "./constants";
import "aos/dist/aos.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			resumeData: {},
			loadingStatus: loadingStates.LOADING
		};
		AOS.init();
		ReactGA.initialize("UA-110570651-1");
		ReactGA.pageview(window.location.pathname);
	}

	async componentDidMount() {
		try {
			const resumeData = await getResumeData();
			this.setState({ resumeData, loadingStatus: loadingStates.LOADED });
		} catch (error) {
			this.setState({ loadingStatus: loadingStates.ERROR });
		}
	}

	render() {
		const { resumeData, loadingStatus } = this.state;
		if(loadingStatus === loadingStates.LOADED){
			const {
				bios,
				educations,
				works,
				skills,
				projects,
				testimonials,
			} = resumeData;
			return <div className="App">
					<Header data={bios} />
					<About data={bios} />
					<Resume educations={educations} works={works} skills={skills} />
					<Portfolio data={projects} />
					<Testimonials data={testimonials} />
					<Contact data={bios} />
					<Footer data={bios} />
				</div>
		} 

		return <Loader loadingStatus={loadingStatus} />
	}
}

export default App;
