import React, { useState } from 'react';
import '../styles/Organization.css'; // Importing the CSS file

const OrganizationForm = () => {
    const [formData, setFormData] = useState({
        orgName: '',
        longitude: '',
        latitude: '',
    });
    
    const [submittedData, setSubmittedData] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Add the submitted form data to the submittedData array
        setSubmittedData([
            ...submittedData,
            {
                orgName: formData.orgName,
                longitude: formData.longitude,
                latitude: formData.latitude,
            },
        ]);

        // Show an alert with the submitted form data
        alert(
            `Organization Name: ${formData.orgName}\nLongitude: ${formData.longitude}\nLatitude: ${formData.latitude}`
        );

        // Reset the form
        setFormData({
            orgName: '',
            longitude: '',
            latitude: '',
        });
    };

    const handleDelete = (index) => {
        // Remove the specific entry from the submittedData array
        const updatedData = submittedData.filter((_, i) => i !== index);
        setSubmittedData(updatedData);
    };

    return (
        <div className="form-container">
            <h2>Organization Information</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="orgName">Organization Name</label>
                    <input
                        type="text"
                        id="orgName"
                        name="orgName"
                        value={formData.orgName}
                        onChange={handleChange}
                        required
                        placeholder="Enter organization name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="longitude">Longitude</label>
                    <input
                        type="text"
                        id="longitude"
                        name="longitude"
                        value={formData.longitude}
                        onChange={handleChange}
                        required
                        placeholder="Enter longitude"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="latitude">Latitude</label>
                    <input
                        type="text"
                        id="latitude"
                        name="latitude"
                        value={formData.latitude}
                        onChange={handleChange}
                        required
                        placeholder="Enter latitude"
                    />
                </div>
                <button type="submit" className="submit-btn">Submit</button>
            </form>

            {/* Display the submitted data in a table */}
           
            {submittedData.length > 0 && (
                
                <table className="data-table"> 
                    <thead>
                        <tr>
                            <th>Organization Name</th>
                            <th>Longitude</th>
                            <th>Latitude</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {submittedData.map((data, index) => (
                            <tr key={index}>
                                <td>{data.orgName}</td>
                                <td>{data.longitude}</td>
                                <td>{data.latitude}</td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(index)}
                                        className="delete-btn"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default OrganizationForm;
