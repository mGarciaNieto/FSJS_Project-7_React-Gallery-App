import React from 'react'

export const GalleryItem = ({ server, id, secret, title }) => {
	let randomAniDelay = Math.floor(Math.random() * 500)
	let myStyle = {
		animation: `fadeIn 2s .${randomAniDelay}s ease forwards`
	}

	return (
		<li style={myStyle}>
			<img src={`https://live.staticflickr.com/${server}/${id}_${secret}.jpg`} alt={title} />
		</li>
	)
}
