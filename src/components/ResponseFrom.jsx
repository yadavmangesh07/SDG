import React, { useState, useEffect } from 'react';
const ResponseForm = ({ location }) => {
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        email: '',
        aadharNo: '',
        longitude: '',
        latitude: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        postalCode: '',
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

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     // Check if longitude and latitude are not empty
    //     if (formData.longitude !== '' && formData.latitude !== '') {
    //         // Send form data to the backend
    //         fetch('http://localhost:3001/submit-form', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(formData),
    //         })
    //             .then(response => {
    //                 if (response.ok) {
    //                     console.log('Form data submitted successfully');
    //                     // Reset form after successful submission
    //                     setFormData({
    //                         name: '',
    //                         phoneNumber: '',
    //                         email: '',
    //                         aadharNo: '',
    //                         longitude: '',
    //                         latitude: '',
    //                         addressLine1: '',
    //                         addressLine2: '',
    //                         city: '',
    //                         state: '',
    //                         postalCode: '',
    //                     });
    //                 } else {
    //                     console.error('Failed to submit form data');
    //                 }
    //             })
    //             .catch(error => {
    //                 console.error('Error occurred while submitting form data:', error);
    //             });
    //     } else {
    //         console.error('Longitude and latitude cannot be empty');
    //     }
    // };
    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if longitude and latitude are not empty
        if (formData.longitude !== '' && formData.latitude !== '') {
            // Send form data to the backend
            fetch('http://localhost:3000/submit-form', {
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
                            addressLine1: '',
                            addressLine2: '',
                            city: '',
                            state: '',
                            postalCode: '',
                        });
                    } else {
                        return response.json().then(data => {
                            console.error('Failed to submit form data:', data.message);
                            throw new Error(data.message);
                        });
                    }
                })
                .catch(error => {
                    console.error('Error occurred while submitting form data:', error.message);
                });
        } else {
            console.error('Longitude and latitude cannot be empty');
        }
    };
    return (
        <div className="parent border-1 flex  flex-col w-full p-5  shadow-lg rounded-lg font-sans tracking-widest">
            <h3 className='text-center tracking-widest font-light'>Contribute With Us</h3>
            <div className="max-w-md mx-auto mt-10">
                <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="name" className="block">Name*</label>
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
                        <label htmlFor="phoneNumber" className="block">Phone Number*</label>
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
                        <label htmlFor="email" className="block">Email*</label>
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
                        <label htmlFor="aadharNo" className="block">Aadhar Number*</label>
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
                    <div>
                        <label htmlFor="addressLine1" className="block">Address Line 1*</label>
                        <input
                            type="text"
                            id="addressLine1"
                            name="addressLine1"
                            value={formData.addressLine1}
                            onChange={handleChange}
                            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="addressLine2" className="block">Address Line 2</label>
                        <input
                            type="text"
                            id="addressLine2"
                            name="addressLine2"
                            value={formData.addressLine2}
                            onChange={handleChange}
                            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="city" className="block">City*</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="state" className="block">State*</label>
                        <input
                            type="text"
                            id="state"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="postalCode" className="block">Postal Code*</label>
                        <input
                            type="text"
                            id="postalCode"
                            name="postalCode"
                            value={formData.postalCode}
                            onChange={handleChange}
                            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="col-span-2">
                        <h5 className='font-light'>Location</h5>
                        {location && (
                            <>
                            <p> Longitude : {location.lng} </p>
                            <p className='mt-[-.5rem]'>  Latitude : {location.lat}</p>
                            </>
                        )}
                        {/* Store latitude and longitude in form data */}
                        {location && (
                            <>
                                <input type="hidden" name="longitude" value={location.lng} />
                                <input type="hidden" name="latitude" value={location.lat} />
                            </>
                        )}
                    </div>
                    <div className="col-span-2 text-center">
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</button>
                    </div>
                </form>
                
            </div>
        </div>
    );
};

export default ResponseForm;
