import React, { Component } from 'react'

class Navbar extends Component {

    render() {
      return (
        <div className={'Navbar'}>
            <div className="SearchDiv">
                <textarea onChange={(event) => this.props.handleChange(event)} placeholder={'enter player name...'} className={'Searchbar'}></textarea>
            </div>
            <div className={"DropdownBox"}>
            <select onChange={(event) => this.props.handleDropdown(event)} className={"Dropdown"}>
                <option value="All">All</option>
                <option value="Midfielder">Midfielder</option>
                <option value="Forward">Forward</option>
                <option value="Defender">Defender</option>
            </select>
            </div>
        </div>
      )
    }  
  }
  
  export default Navbar;