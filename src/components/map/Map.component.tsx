import {useEffect, useContext} from 'react'
import 'leaflet/dist/leaflet.css'
import {map, icon, marker, tileLayer} from 'leaflet'
import {StyledMap} from '.'
import {ComponentsContext} from '@/contexts/components'

export const Map: App.MapComponent = ({className, styles}) => {
	const context = useContext(ComponentsContext)
	useEffect(() => {
		const {key} = context
		context.key = ''
		const position: L.LatLngExpression = [33.8358, -118.3406]
		const Map = map('map').setView(position, 9)
		const Icon = icon({...icon, iconUrl: '/images/interface/marker.png'})
		tileLayer(
			'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
			{
				maxZoom: 9,
				minZoom: 9,
				id: 'iambrennanwalsh/ckd4c2rku0wdu1ip4cogwrzuu',
				tileSize: 512,
				zoomOffset: -1,
				accessToken: key
			}
		).addTo(Map)
		const Marker = marker(position, {icon: Icon}).addTo(Map)
		Marker.bindPopup('<b>Torrance, CA</b><br />Born and raised.').openPopup()
	}, [])

	return (
		<div>
			<StyledMap
				id="map"
				{...(styles && {css: styles})}
				{...(className && {className: className})}
			/>
		</div>
	)
}
