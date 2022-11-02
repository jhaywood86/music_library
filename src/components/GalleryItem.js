import { useState } from "react";

export function GalleryItem({ track }) {
  let [isExpanded, setIsExpanded] = useState(false)

  const clickHandler = () => {
    setIsExpanded(!isExpanded)
  }
  // styles --------------------------------------------

  const simpleStyle = {
    'width': '25vw',
    'height': '20vh',
    'border': '1px solid black',
    'margin': '2px'
  }

  const detailStyle = {
    'width': '80vw',
    'height': '20vh',
    'border': '1px solid black',
    'margin': '2px',
    'backgroundImage': `url(${track.artworkUrl100})`,
    'backgroundRepeat': 'no-repeat',
    'backgroundSize': 'cover',
    'color': 'yellow'
  }

  // views ---------------------------------------------

  const simpleView = (
    <div style={simpleStyle}>
      <h3>{track.trackName}</h3>
      <h4>{track.collectionName}</h4>
      <img src={track.artworkUrl100} alt="album art" />
    </div>
  )

  const detailView = () => {
    return (
        <div style={detailStyle}>
            <h2>{props.item.trackName}</h2>
            <h3>
                <a href={`/artist/${props.item.artistId}`}>
                    {props.item.artistName}
                </a>
            </h3>
            <h3>
                <a href={`/album/${props.item.collectionId}`}>
                    {props.item.collectionName}
                </a>
            </h3>
            <h4>{props.item.primaryGenreName}</h4>
            <h4>{props.item.releaseDate}</h4>
        </div>
    )
}




  return (
    <div onClick={clickHandler} style={{ 'display': 'inline-block' }}>
      {
        isExpanded
          ? detailedView
          : simpleView
      }
    </div>
  );
}


