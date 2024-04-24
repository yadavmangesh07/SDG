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
        setLocation({lat:0,lng:0})
    }

    return (
        <div className="parent m-5 absolute top-[3rem]  flex justify-around font-light font-sans tracking-widest max-h-screen">
            <div className="FormSection  ">
                <ResponseForm location={location} />
            </div>
            <div className='MapSection w-auto p-2'>
                <div className="buttonBox  ">
                    <button className='bg-white border-1 border-black shadow-2xl rounded w-[10rem] h-[3rem] absolute z-10 m-1' onClick={handleResetLocation}>Reset Location</button>
                   
                   
                   
                </div>

                <div className="map -z-10 ">
                    <MapPicker defaultLocation={defaultLocation}
                        zoom={zoom}
                        className='rounded-lg'
                        mapTypeId="roadmap"
                        style={{ height: '800px', width: '700px' }}
                        onChangeLocation={handleChangeLocation}
                        onChangeZoom={handleChangeZoom}
                        apiKey='AIzaSyD07E1VvpsN_0FvsmKAj4nK9GnLq-9jtj8' />

                </div>
            </div>
        </div>

    );
}

export default Map