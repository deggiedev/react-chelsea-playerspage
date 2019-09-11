import React from 'react'
import Plimage from '../pl_logo_img/pl.jpg'

const ExtraPlayerInfo = (props) => (
    <div className={'ExtraPlayerInfo'}>
            <img className={'Plimage'} alt={''} src={Plimage} ></img>
            <h5>Position: {props.player.position}</h5>
            <h5>Age: {props.player.age}</h5>
            <h5>Squad: 1st Team</h5>             
    </div>
)
   
export default ExtraPlayerInfo
