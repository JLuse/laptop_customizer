import React from 'react'
import slugify from 'slugify'
import USCurrencyFormat from './USCurrencyFormat'

export default function Parts(props) {
  const feature = props.feature;

  return (
    <div>
      {props.features[feature].map((item) => {
        const itemHash = slugify(JSON.stringify(item));
        return (
          <div key={itemHash} className="feature__item">
            <input
              type="radio"
              id={itemHash}
              className="feature__option"
              name={slugify(feature)}
              checked={item.name === props.selected[feature].name}
              onChange={e => props.updateFeatures(feature, item)}
            />
            <label htmlFor={itemHash} className="feature__label">
              {item.name} ({USCurrencyFormat.format(item.cost)})
            </label>
          </div>
        );
      })}
    </div>
  );
}
