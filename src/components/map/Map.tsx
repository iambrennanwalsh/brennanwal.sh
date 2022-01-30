import type {Component, Props} from '@/'
import {icon, map, marker, tileLayer} from 'leaflet'
import 'leaflet/dist/leaflet.css'
import {useEffect, useState} from 'react'
import {StyledMap} from '.'

export type MapProps = Props<typeof StyledMap>

export const Map: Component<MapProps> = props => {
  const [defined, setDefined] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined' && defined == false) {
      const position: L.LatLngExpression = [33.8358, -118.3406]
      const LeafletMap = map('map', {
        scrollWheelZoom: false,
        dragging: false,
        zoomControl: false,
      }).setView(position, 9)
      setDefined(true)
      tileLayer(
        'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
        {
          maxZoom: 9,
          minZoom: 9,
          id: 'iambrennanwalsh/ckd4c2rku0wdu1ip4cogwrzuu',
          tileSize: 512,
          zoomOffset: -1,
          accessToken: process.env.NEXT_PUBLIC_MAPBOX_API_KEY,
        }
      ).addTo(LeafletMap)
      const Icon = icon({
        iconUrl: '/images/interface/marker-icon.png',
        iconRetinaUrl: '/images/interface/marker-icon-2x.png',
        shadowUrl: '/images/interface/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [13, 41],
      })
      const Marker = marker(position, {icon: Icon}).addTo(LeafletMap)
      Marker.bindPopup('<b>Torrance, CA</b><br />Born and raised.')
    }
  }, [defined])

  return <StyledMap id="map" {...props} />
}
