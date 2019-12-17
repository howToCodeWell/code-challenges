import React from "react"
const ChallengeLink = ({ challenger }) => (
  <div className="flex">
    <a href={challenger} target="_blank" rel="noopener noreferrer">
        <div className="flex">
      <img  alt={challenger.replace(/https:\/\/github.com\/(.*)\/(.*)/i, '$1')} className="profile-image" src={"https://github.com/" + challenger.replace(/https:\/\/github.com\/(.*)\/(.*)/i, '$1') + ".png"} align={'test'}/>
        <div className="ml-2 mt-3">
        {challenger.replace(/https:\/\/github.com\/(.*)\/(.*)/i, '$1')}
        </div>
        </div>
    </a>
  </div>
)
export default ChallengeLink