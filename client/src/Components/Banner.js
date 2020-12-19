import React from "react";
import "./Banner.scss";

const getBannerInfo = bio =>{
    return <>
        <h1 className="banner__header">I'm {bio.name}.</h1>
        <h3>I'm a {bio.address.city} based <span>{bio.occupation}</span>. {bio.description}.</h3>
        <hr />
        <ul className="social">Find me on:
            {bio.social.map(network => <li key={network.name}>
                    <a href={network.url} target='_blank'>
                    <i className={network.className}></i>
                    </a>
                </li>
            )}
        </ul>
    </>
}

export const Banner = ({ data }) => {
    return <div className="row banner">
        <div className="banner__container">
            {data && getBannerInfo(data[0])}
        </div>
    </div>
}