import React, { createContext } from 'react';
import childrenPropType from '../propTypes/ChildrenPropType';

export const RoadTripContext = createContext(null);

export default function RoadTripContextProvider({ children }) {
  const [roadTrip, setRoadTrip] = React.useState({
    startDate: '',
    startTime: '',
    startStreetNumber: '',
    startStreetType: '',
    startStreetExt: '',
    startStreetName: '',
    startPostalCode: '',
    startCity: '',
    startLat: '',
    startLong: '',
    endTime: '',
    endStreetNumber: '',
    endStreetType: '',
    endStreetExt: '',
    endStreetName: '',
    endPostalCode: '',
    endCity: '',
    endLat: '',
    endLong: '',
    creationComment: '',
    status: '',
    coPylotMax: '',
    userId: '',
  });

  return (
    <RoadTripContext.Provider value={{ roadTrip, setRoadTrip }}>
      {children}
    </RoadTripContext.Provider>
  );
}

RoadTripContextProvider.propTypes = childrenPropType;
