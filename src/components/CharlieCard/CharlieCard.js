import React, { Component } from 'react';
import './CharlieCard.css';
import { sampleSize } from 'lodash';

class CharlieCard extends Component {
  state = {
    score: 0,
    topScore: 0,
    character: [
      {id: '1',img: 'ash.png', clicked: false},
      {id: '2',img: 'bates.png', clicked: false},
      {id: '3',img: 'blade.png', clicked: false},
      {id: '4',img: 'buffalobill.png', clicked: false},
      {id: '5',img: 'carrie.png', clicked: false},
      {id: '6',img: 'chucky.png', clicked: false},
      {id: '7',img: 'cthulhu.png', clicked: false},
      {id: '8',img: 'dracula.png', clicked: false},
      {id: '9',img: 'edward.png', clicked: false},
      {id:'10' ,img: 'frankenstein.png', clicked: false},
      {id:'11' ,img: 'freddy.png', clicked: false},
      {id:'12' ,img: 'furter.png', clicked: false},
      {id:'13' ,img: 'ghostface.png', clicked: false},
      {id:'14' ,img: 'hannibal.png', clicked: false},
      {id:'15' ,img: 'jack.png', clicked: false},
      {id:'16' ,img: 'jasongritty.png', clicked: false},
      {id:'17' ,img: 'jason.png', clicked: false},
      {id:'18' ,img: 'joker.png', clicked: false},
      {id:'19' ,img: 'kramer.png', clicked: false},
      {id:'20' ,img: 'lazarou.png', clicked: false},
      {id:'21' ,img: 'leatherfacegritty.png', clicked: false},
      {id:'22' ,img: 'leatherface.png', clicked: false},
      {id:'23' ,img: 'mummy.png', clicked: false},
      {id:'24' ,img: 'myers.png', clicked: false},
      {id:'25' ,img: 'nosferatu.png', clicked: false},
      {id:'26' ,img: 'rick.png', clicked: false},
      {id:'27' ,img: 'sadako.png', clicked: false},
      {id:'28' ,img: 'shaun.png', clicked: false},
      {id:'29' ,img: 'slappy.png', clicked: false},
      {id:'30' ,img: 'spaulding.png', clicked: false},
      {id:'31' ,img: 'sweeny.png', clicked: false},
      {id:'32' ,img: 'wolfman.png', clicked: false},
      {id:'33' ,img: 'zombie.png', clicked: false},
    ]
  };

  gameLose = () => {

  };

  handleClick = id => {
    let clickState = this.state.character.find(char => char.id === id);
console.log(clickState)
    if(clickState.clicked) {
      this.gameLose();
    } else {
      clickState.clicked = true;
      let newChars = this.state.character.filter(char => char.id !== id);
      newChars.push(clickState)
      console.log(`New clicked state ${clickState.clicked} for ${clickState.img}`)

      this.setState({
        ...this.state,
        score: this.state.score +1,
        topScore: this.state.score === this.state.topScore
          ? this.state.topScore + 1
          : this.state.topScore,
        character: newChars
      })
    }
  };

  sample = sampleSize(this.state.character, 10);

  render() {
    return (
      <div>
        { this.sample.map(image => (
          <img 
          key={image.id}
          id={image.id}
          alt={`${image.img}`}
          className='CharlieCard'

          onClick={ () => this.handleClick(image.id) }
          src={`/img/charlie-brown/${image.img}`} />)
        ).sort( () => Math.random() - 0.5) }
      </div>
    )
  };
};

export default CharlieCard;