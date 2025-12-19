import React, { useMemo, useEffect } from 'react';
import { View } from 'react-native';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
// Leaflet CSS is injected via CDN at runtime to avoid bundler CSS asset issues.

export default function LeafletMap({ locations, selectedFilters }) {
  // Ensure Leaflet CSS is present (fallback for bundlers that don't load CSS imports)
  useEffect(() => {
    if (typeof document !== 'undefined' && !document.getElementById('leaflet-css')) {
      const link = document.createElement('link');
      link.id = 'leaflet-css';
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      document.head.appendChild(link);
    }
  }, []);
  const { points, center } = useMemo(() => {
    const baseLat = 40.7128; // NYC placeholder center
    const baseLng = -74.0060;
    const selKeys = Object.keys(selectedFilters).filter((k) => selectedFilters[k]);
    const items = selKeys.flatMap((k) => (locations[k] || []));

    const pts = items.map((loc, idx) => ({
      id: loc.id,
      name: loc.name,
      address: loc.address,
      // spread markers out in a grid near center for demo
      lat: baseLat + ((idx % 5) * 0.01),
      lng: baseLng + (Math.floor(idx / 5) * 0.01),
      distance: loc.distance,
    }));

    return {
      points: pts,
      center: [baseLat, baseLng],
    };
  }, [locations, selectedFilters]);

  return (
    <View style={{ width: '100%', height: '100%', borderRadius: 8, overflow: 'hidden' }}>
      <MapContainer center={center} zoom={12} style={{ height: '100%', width: '100%' }} scrollWheelZoom>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {points.map((p) => (
          <CircleMarker key={p.id} center={[p.lat, p.lng]} radius={10} pathOptions={{ color: '#2196F3', fillColor: '#2196F3', fillOpacity: 0.6 }}>
            <Popup>
              <div style={{ minWidth: 180 }}>
                <div style={{ fontWeight: '600', marginBottom: 4 }}>{p.name}</div>
                <div style={{ color: '#444', marginBottom: 2 }}>{p.address}</div>
                <div style={{ color: '#2196F3' }}>{p.distance}</div>
              </div>
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>
    </View>
  );
}
