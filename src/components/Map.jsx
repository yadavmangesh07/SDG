import React, { useState } from 'react'

import MapPicker from 'react-google-map-picker'
import ResponseForm from './ResponseFrom';

const DefaultLocation = { lat: 28.4812, lng: 77.4916 };
const DefaultZoom = 17;

const Map = () => {

    const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);

    const [location, setLocation] = useState(defaultLocation);
    const [zoom, setZoom] = useState(DefaultZoom);

    function handleChangeLocation(lat, lng) {
        setLocation({ lat: lat, lng: lng });
    }

    function handleChangeZoom(newZoom) {
        setZoom(newZoom);
    }

    function handleResetLocation() {
        setDefaultLocation({ ...DefaultLocation });
        setZoom(DefaultZoom);
    }

    return (
        <div className="parent m-5 flex font-sans tracking-widest">
            <div className="FormSection border ">
                <ResponseForm location={location} />
            </div>
            <div className='MapSection border-2 border-red-500 w-auto p-2'>
                <div className="buttonBox  ">
                    <button className='bg-white border-1 border-black shadow-2xl rounded w-[10rem] h-[3rem] absolute z-10 m-1' onClick={handleResetLocation}>Reset Location</button>
                    {/* <label>Latitute:</label><input type='text' value={location.lat} disabled />
                    <label>Longitute:</label><input type='text' value={location.lng} disabled /> */}
                   
                   
                   
                </div>

                <div className="map -z-10 ">
                    <MapPicker defaultLocation={defaultLocation}
                        zoom={zoom}
                        mapTypeId="roadmap"
                        style={{ height: '700px', width: '700px' }}
                        onChangeLocation={handleChangeLocation}
                        onChangeZoom={handleChangeZoom}
                        apiKey='AIzaSyD07E1VvpsN_0FvsmKAj4nK9GnLq-9jtj8' />

                </div>
            </div>
        </div>

    );
}

export default Map