import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./ThirdPartyFacade.scss";

export const ThirdPartyFacade = ({ url, title, customStyle }) => {
  const [loaded, setLoaded] = useState(false);
  const placeholderRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !loaded) {
            setLoaded(true); // Load the third-party content when in viewport
          }
        });
      },
      {
        rootMargin: "100px 0px 0px 0px", // 100px top margin
        threshold: 0.1, // Trigger when 10% of the placeholder is visible
      }
    );

    const currentPlaceholder = placeholderRef.current;
    if (currentPlaceholder) {
      observer.observe(currentPlaceholder);
    }

    return () => {
      if (currentPlaceholder) {
        observer.unobserve(currentPlaceholder);
      }
    };
  }, [loaded]); // Depend on 'loaded' to avoid adding multiple observers

  return (
    <div ref={placeholderRef} className="facade-container">
      {loaded ? (
        <iframe
          title={title}
          style={customStyle}
          src={url}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <span>Scroll to load content</span>
      )}
    </div>
  );
};

ThirdPartyFacade.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  customStyle: PropTypes.object,
};
