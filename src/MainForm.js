import React from 'react';
import Specs from './Specs';


export default function MainForm (props) {
  return (
    <form className="main__form">
      <h2>Customize your laptop</h2>
      <Specs
        selected={props.selected}
        features={props.features}
        updateFeatures={props.updateFeatures}
      />
  </form>
  )
}