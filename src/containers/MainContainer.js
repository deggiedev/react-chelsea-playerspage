import React, { Component } from 'react'
import PlayersContainer from './PlayersContainer'
import SelectedPlayerContainer from './SelectedPlayerContainer'
import FiveasideHeader from './FivasideHeader'
import Navbar from './Navbar';

const fetchPlayers = () => {
    return fetch("http://localhost:3000/players")
    .then(resp => resp.json())
}

class MainContainer extends Component {

    state = {
        players: [],
        searchTerm: "",
        dropdownChoice: "",
        fiveasideTeam: [],
        selectedPlayer: []
    }

    componentDidMount() {
        fetchPlayers()
        .then(players => this.setState({players}))
    }

    handleClick = (player) => {
        this.setState({selectedPlayer: player})
    }

    handleSearchTerm = (event) => {
      this.setState({searchTerm: event.target.value})
    }

    handleDropdown = (event) => {
      this.setState({dropdownChoice: event.target.value})
    }

    pickPlayer = (player) => {
      if (!this.state.fiveasideTeam.includes(player) && this.state.fiveasideTeam.length <= 4) {
        this.setState({fiveasideTeam: [...this.state.fiveasideTeam, player]})
      }
    }

    unpickPlayer = (player) => {
      this.setState({fiveasideTeam: this.state.fiveasideTeam.filter(p => p !== player)})
    }

    filterPlayers = () => {
      if (this.state.searchTerm) {
        return this.state.players.filter(player => player.name.toLowerCase().includes(this.state.searchTerm))
      } else if (this.state.dropdownChoice === "All") {
        return this.state.players
      } else if (this.state.dropdownChoice) {
        return this.state.players.filter(player => player.position === this.state.dropdownChoice)
      } else {
        return this.state.players
      }
    }

    render() {
      return (
        <div className={'MainContainer'}>
          <Navbar handleDropdown={this.handleDropdown} handleChange={this.handleSearchTerm}/>
          <PlayersContainer handleClick={this.pickPlayer} players={this.filterPlayers()}/>
          <FiveasideHeader />
          <SelectedPlayerContainer fiveasideTeam={this.state.fiveasideTeam} unpickPlayer={this.unpickPlayer}/> 
        </div>
      )
    }  
  }
  
  export default MainContainer;