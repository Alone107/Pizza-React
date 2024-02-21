import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={260}
    height={465}
    viewBox="0 0 260 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="124" cy="124" r="124" />
    <rect x="0" y="267" rx="10" ry="10" width="260" height="16" />
    <rect x="0" y="316" rx="16" ry="16" width="260" height="77" />
    <rect x="0" y="417" rx="10" ry="10" width="90" height="21" />
    <rect x="145" y="412" rx="10" ry="10" width="110" height="27" />
  </ContentLoader>
);

export default MyLoader;
