import React from 'react'
import { NotFoundResults } from './NotFoundResults'
import { GalleryItem } from './GalleryItem'

export const Gallery = ({ data }) => {
	const photoItems = data
	let itemsResults = null

	if (photoItems.length > 0) {
		itemsResults = photoItems.map((item) => <GalleryItem id={item.id} key={item.id} title={item.title} server={item.server} secret={item.secret} />)
	} else {
		itemsResults = <NotFoundResults />
	}

	return (
		<section className='photo-container'>
			<h2>Results</h2>
			<ul>{itemsResults}</ul>
		</section>
	)
}
