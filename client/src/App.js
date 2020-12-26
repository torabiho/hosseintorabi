import React, { Component } from "react";
import ReactGA from "react-ga";
import AOS from "aos";
import Loader from "./components/Loader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import Portfolio from "./components/Portfolio";
import { getResumeData } from "./apiResources/endpoints";
import { loadingStates } from "./constants";
import "./App.scss";

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
