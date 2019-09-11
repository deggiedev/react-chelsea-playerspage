import React, { Component } from 'react'
import PlayerCard from '../components/PlayerCard'

class SelectedPlayerContainer extends Component {

    render() {
    
      return (
  
        <div className={'SelectedPlayerContainer'}>
          
          {this.props.fiveasideTeam.map((player, index) => <PlayerCard key={index} handleClick={this.props.unpickPlayer} player={player} /> )}
          
        </div>
      )
    }  
  }
  
  export default SelectedPlayerContainer ;