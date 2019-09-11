import React, { Component } from 'react'
import PlayerCard from '../components/PlayerCard'

class PlayersContainer extends Component {

    render() {
      return (
        <div className={'PlayersContainer'}>
          {this.props.players.map((player, index) => <PlayerCard key={index} handleClick={this.props.handleClick} player={player}/>)}
        </div>
      )
    }  
  }
  
  export default PlayersContainer;