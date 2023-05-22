import React, { useState, useEffect } from 'react'
import { Nav } from './components/Nav'
import { SearchForm } from './components/SearchForm'
import { Gallery } from './components/Gallery'
import apiKey from './config'
import { Routes, Route, Navigate } from 'react-router-dom'
import { NotFound404Error } from './components/NotFound404Error'
import axios from 'axios'

export default function App() {
	const [photos, setPhotos] = useState([])
	const [cats, setCats] = useState([])
	const [dogs, setDogs] = useState([])
	const [computers, setComputers] = useState([])
	const [loading, setLoading] = useState([true])

	const handleSearch = (keyWord = 'cats') => {
		setLoading(true)
		axios
			.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${keyWord}&per_page=24&format=json&nojsoncallback=1`)
			.then((response) => {
				setLoading(false)
				if (keyWord === 'cats') {
					setCats(response.data.photos.photo)
				} else if (keyWord === 'dogs') {
					setDogs(response.data.photos.photo)
				} else if (keyWord === 'computers') {
					setComputers(response.data.photos.photo)
				} else {
					setPhotos(response.data.photos.photo)
				}
			})
			.catch((error) => console.log('Error fetching and parsing data: ', error))
	}

	useEffect(() => {
		handleSearch()
		handleSearch('cats')
		handleSearch('dogs')
		handleSearch('computers')
	}, [])

	return (
		<section className='container'>
			<SearchForm onSearch={handleSearch} setLoading={setLoading} />
			<Nav />
			{loading ? (
				<h2>Loading, please wait...</h2>
			) : (
				<Routes>
					<Route path='/' element={<Navigate to='/cats' />} />
					<Route path='/cats' element={<Gallery data={cats} />} />
					<Route path='/dogs' element={<Gallery data={dogs} />} />
					<Route path='/computers' element={<Gallery data={computers} />} />
					<Route path='/search/:keyWord' element={<Gallery data={photos} />} />
					<Route path='*' element={<NotFound404Error />} />
				</Routes>
			)}
		</section>
	)
}
