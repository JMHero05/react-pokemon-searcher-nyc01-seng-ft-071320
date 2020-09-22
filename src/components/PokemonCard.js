import React from 'react';
import { Card } from 'semantic-ui-react';

class PokemonCard extends React.Component {
  state = {
    clicked: false,
  };

  clickHandler = () => {
    this.setState((previousState) => ({ clicked: !previousState.clicked }));
  };

  render() {
    const { id, name, hp, sprites } = this.props.pokemon;
    return (
      <Card>
        <div id={id}>
          <div className='image'>
            <img
              alt='oh no!'
              src={this.state.clicked ? sprites.back : sprites.front}
              onClick={this.clickHandler}
            />
          </div>
          <div className='content'>
            <div className='header'>{name}</div>
          </div>
          <div className='extra content'>
            <span>
              <i className='icon heartbeat red' />
              {hp}
            </span>
          </div>
        </div>
      </Card>
    );
  }
}

export default PokemonCard;
