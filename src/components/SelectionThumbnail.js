import React from 'react';
import './SelectionThumbnail.css';

const SelectionThumbnail = (props) => {
  return(
    <div className="topicSelectionThumbnail-container" >
      <div className={ `${props.name}-thumbnail`}></div>
      <div className="text-for-thumbnail">
        <h1>{props.headline}</h1>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default SelectionThumbnail;