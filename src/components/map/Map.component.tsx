import {useEffect, useContext} from 'react'
import {ComponentsContext} from '@/contexts/components'
import {StyledMap} from '.'
import {map, icon, marker, tileLayer} from 'leaflet'
import 'leaflet/dist/leaflet.css'

export const Map: App.MapComponent = ({className, styles}) => {
	const context = useContext(ComponentsContext)

	useEffect(() => {
		if (typeof window != 'undefined') {
			const position: L.LatLngExpression = [33.8358, -118.3406]
			const Map = map('map').setView(position, 9)
			const Icon = icon({...icon, iconUrl: '/images/interface/marker.png'})
			const Marker = marker(position, {icon: Icon}).addTo(Map)
			Marker.bindPopup('<b>Torrance, CA</b><br />Born and raised.').openPopup()
			tileLayer(
				'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
				{
					maxZoom: 9,
					minZoom: 9,
					id: 'iambrennanwalsh/ckd4c2rku0wdu1ip4cogwrzuu',
					tileSize: 512,
					zoomOffset: -1,
					accessToken: context.key
				}
			).addTo(Map)
		}
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
