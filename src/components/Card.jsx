import React from "react"

export default function Card(props) {
  let badgeText;
  if (props.items.openSpots === 0) {
    badgeText = 'SOLD OUT'
  } else if (props.items.location === 'Online') {
    badgeText = 'ONLINE'
  }

    return (
      <div className="card">
        {badgeText && <div className="card-badge">{badgeText}</div>}
        <img src={`/assets/${props.items.coverImg}`} className="card-image" />
        <div className="card-stats">
            <img src="/assets/star.png" className="card-star" />
            <span>{props.rating}</span>
            <span className="gray">({props.items.stats.reviewCount}) • </span> 
            <span className="gray">{props.items.location}</span>
        </div>
        <p>{props.items.title}</p>
        <p><span className="bold">From ${props.items.price}</span> / person</p>
      </div>
    )
}
