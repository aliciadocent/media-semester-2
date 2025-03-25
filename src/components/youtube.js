"use client";

import PropTypes from "prop-types";

export default function Youtube({ videoId }) {
  return (
    <div className="w-200 h-auto max-w-full">
      <div className="relative overflow-hidden" style={{ paddingTop: "56.25%" }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

Youtube.propTypes = {
  videoId: PropTypes.string.isRequired,
};
