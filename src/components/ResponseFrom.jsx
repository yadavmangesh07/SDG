import React, { useState } from 'react';

const ResponseForm = ({location}) => {
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        email: '',
        aadharNo: '',
        location: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
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
                        <h6> Longitude = {location.lng} & Latitude = {location.lat}</h6>
                        
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
