import React from "react";
import './Playlist.css';

import Tracklist from "../TrackList/TrackList";

class Playlist extends React.Component{
    constructor(props){
        super(props);

        this.handlenameChange = this.handlenameChange.bind(this);
    }

    handlenameChange(event){
        this.props.onNameChange(event.target.value);

    }

    render() {
        return (
            <div className="Playlist">
            <input defaultValue={"New Playlist"} onChange={this.handlenameChange} />
            <Tracklist tracks={this.props.playlistTracks}
                        onRemove={this.props.onRemove}
                        isRemoval={true} /> 
            <button className="Playlist-save" onClick={this.props.onSave} >SAVE TO SPOTIFY</button>
            </div>
        )
    }
}

export default Playlist;