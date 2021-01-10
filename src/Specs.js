
import React from 'react'
import Parts from './Parts'

export default function Specs(props) {
  return (
    <div>
      {Object.keys(props.features).map((feature, idx) => {
        const featureHash = feature + "-" + idx;
        return (
          <fieldset className="feature" key={featureHash}>
            <legend className="feature__name">
              <h3>{feature}</h3>
            </legend>
            <Parts 
              features={props.features}
              feature={feature}
              selected={props.selected}
              updateFeatures={props.updateFeatures}
            />
          </fieldset>
        );
      })}
    </div>
  );
}