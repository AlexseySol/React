import React from "react"
import ContentLoader from "react-content-loader"

const CardLoader = () => (
  <ContentLoader 
    speed={2}
    width={210}
    height={260}
    viewBox="0 0 210 260"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
   
  >
    <rect x="0" y="35" rx="9" ry="9" width="150" height="91" /> 
    <rect x="73" y="130" rx="0" ry="0" width="0" height="1" /> 
    <rect x="0" y="194" rx="8" ry="8" width="80" height="24" /> 
    <rect x="114" y="186" rx="8" ry="8" width="32" height="32" /> 
    <rect x="0" y="109" rx="3" ry="3" width="150" height="15" /> 
    <rect x="0" y="136" rx="3" ry="3" width="93" height="15" />
  </ContentLoader>
)

export default CardLoader