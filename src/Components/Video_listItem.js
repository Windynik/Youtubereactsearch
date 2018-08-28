import React from 'react';

const VideoListItem = ({video,onVideoSelect})=>{
        //or change (props) to ({props}) , which is ES6 syntax.
        //thats like using const video=props.video;
    const imageUrl=video.snippet.thumbnails.default.url;
    return( 
    <li onClick={()=>onVideoSelect(video)} className="ListGroupitem">
        <div className="list-group-item">
            <div className="media-left">
                <img className="media-object" src={imageUrl} />

            </div>
            <div className="media-body">
                <div className="media-header">{video.snippet.title}</div>
            </div>
        </div>
    </li>
    )
};
export default VideoListItem;