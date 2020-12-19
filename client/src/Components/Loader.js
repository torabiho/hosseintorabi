import React from "react";
import { loadingStates } from "../constants";
import "./Loader.scss";

const Loader = ({ loadingStatus }) => {

    return <header id="home" className="header--loader">
        <div class="loader__container">
            {loadingStatus === loadingStates.LOADING ?
            <><svg class="loader__icon"viewBox="25 25 50 50" >
                <circle class="loader__path" cx="50" cy="50" r="20" fill="none" stroke-width="2" />
            </svg>
            <h1 className="loader__text">Loading ...</h1></>: 
            <h1 className="loader__text">Sorry! <br /> The content cannot be loaded. <br /> Please try again later </h1>
            }
        </div>
    </header>
}

export default Loader;