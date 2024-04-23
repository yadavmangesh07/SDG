import React, { useState, useEffect } from 'react';

const ResponseForm = ({ location }) => {
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        email: '',
        aadharNo: '',
        longitude: '',
        latitude: '',
    });

    // Update form data when location prop changes
    useEffect(() => {
        if (location) {
            setFormData(prevState => ({
                ...prevState,
                longitude: location.lng,
                latitude: location.lat
            }));
        }
    }, [location]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if longitude and latitude are not empty
        if (formData.longitude !== '' && formData.latitude !== '') {
            // Send form data to the backend
            fetch('http://localhost:3001/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
                .then(response => {
                    if (response.ok) {
                        console.log('Form data submitted successfully');
                        // Reset form after successful submission
                        setFormData({
                            name: '',
                            phoneNumber: '',
                            email: '',
                            aadharNo: '',
                            longitude: '',
                            latitude: '',
                        });
                    } else {
                        console.error('Failed to submit form data');
                    }
                })
                .catch(error => {
                    console.error('Error occurred while submitting form data:', error);
                });
        } else {
            console.error('Longitude and latitude cannot be empty');
        }
    };

    return (
        <div className="parent flex flex-col w-full p-5 font-sans tracking-widest">
            <h3 className='text-center tracking-widest'>Fill Details</h3>
            <div className="max-w-md mx-auto mt-10">
                <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="name" className="block">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="phoneNumber" className="block">Phone Number</label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="aadharNo" className="block">Aadhar Number</label>
                        <input
                            type="text"
                            id="aadharNo"
                            name="aadharNo"
                            value={formData.aadharNo}
                            onChange={handleChange}
                            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="col-span-2">
                        <h3>Location</h3>
                        {location && (
                            <h6> Longitude = {location.lng} & Latitude = {location.lat}</h6>
                        )}
                        {/* Store latitude and longitude in form data */}
                        {location && (
                            <>
                                <input type="hidden" name="longitude" value={location.lng} />
                                <input type="hidden" name="latitude" value={location.lat} />
                            </>
                        )}
                    </div>
                    <div className="col-span-2">
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ResponseForm;
