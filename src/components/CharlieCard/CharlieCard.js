import React, { Component } from 'react';

class CharlieCard extends Component {
  state = {
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
        {this.state.img.map(image => (
          <img src={`/img/charlie-brown/${image}`} />)
        )}
      </div>
    )
  };
};

export default CharlieCard;