import React, {Component} from 'react';
import ExtraPlayerInfo from './ExtraPlayerInfo'

class PlayerCard extends Component {

    state = {
        showPlayerInfo: false
    }
    
    handleToggle = () => {
        console.log('clicked')   
        this.setState({showPlayerInfo: !this.state.showPlayerInfo})
    }

    render() {
        return(
            <>
            <div className={'PlayerCard'} onClick={() => this.props.handleClick(this.props.player)}>
                <h3>{this.props.player.name}</h3>
                <img className={'PlayerImage'} alt={''} src={require('../player_images/' + this.props.player.name.split(" ").join('_') + '.png')}/>
                <button onClick={() => this.handleToggle()}>Show Player Info</button>
                {this.state.showPlayerInfo === true ? <ExtraPlayerInfo player={this.props.player} /> : null}
            </div>
        </>
        )
    }
}

export default PlayerCard