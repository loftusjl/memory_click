import React, { Component } from 'react';
import './CharlieCard.css';
import { sampleSize } from 'lodash'

class CharlieCard extends Component {
  state = {
    sample: [],
    img: [
'ash.png',
'bates.png',
'blade.png',
'buffalobill.png',
'carrie.png',
'chucky.png',
'cthulhu.png',
'dracula.png',
'edward.png',
'frankenstein.png',
'freddy.png',
'furter.png',
'ghostface.png',
'hannibal.png',
'jack.png',
'jasongritty.png',
'jason.png',
'joker.png',
'kramer.png',
'lazarou.png',
'leatherfacegritty.png',
'leatherface.png',
'mummy.png',
'myers.png',
'nosferatu.png',
'rick.png',
'sadako.png',
'shaun.png',
'slappy.png',
'spaulding.png',
'sweeny.png',
'wolfman.png',
'zombie.png',
    ]
  };

  render() {
    return (
      <div>
        {sampleSize(this.state.img, 3).map(image => (
          <img 
          key={image}
          className='CharlieCard'
          src={`/img/charlie-brown/${image}`} />)
        )}
      </div>
    )
  };
};

export default CharlieCard;