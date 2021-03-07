import { MapLayer, withLeaflet } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-routing-machine';
import 'lrm-google';

class Routing extends MapLayer {
  createLeafletElement() {
    const {
      map,
      startAddressed,
      endAddressed,
      startLocation,
      position,
    } = this.props;

    const leafletElement = L.Routing.control({
      waypoints: [
        L.latLng(
          startLocation === 'Ma position'
            ? position[0]
            : startAddressed[0].geometry.coordinates[1],
          startLocation === 'Ma position'
            ? position[1]
            : startAddressed[0].geometry.coordinates[0]
        ),
        L.latLng(
          endAddressed[0].geometry.coordinates[1],
          endAddressed[0].geometry.coordinates[0]
        ),
      ],
      lineOptions: {
        styles: [
          {
            color: '#0CB8FD',
            opacity: 0.9,
            weight: 4,
          },
        ],
      },
      addWaypoints: false,
      draggableWaypoints: false,
      fitSelectedRoutes: false,
      showAlternatives: false,
    }).addTo(map.leafletElement);

    return leafletElement.getPlan();
  }
}
export default withLeaflet(Routing);
