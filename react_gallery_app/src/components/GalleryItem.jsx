import React from 'react'

export const GalleryItem = ({ server, id, secret, title }) => {
	let randomAniDelay = Math.floor(Math.random() * 1000)

	let myStyle = {
		animation: `spin2 3s .${randomAniDelay}s ease forwards`
	}

	return (
		<li style={myStyle}>
			<img src={`https://live.staticflickr.com/${server}/${id}_${secret}.jpg`} alt={title} />
		</li>
	)
}
