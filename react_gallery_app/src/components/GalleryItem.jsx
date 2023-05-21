import React from 'react'

export const GalleryItem = ({ server, id, secret, title }) => {
	return (
		<li>
			<img src={`https://live.staticflickr.com/${server}/${id}_${secret}.jpg`} alt={title} />
		</li>
	)
}
