import React, { useState } from 'react';
import { ArrowLeft, Save, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SideBar from './SideBar';
import './AddPatient.css';

const AddPatient = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: '',
        location: '',
        email: '',
        age: '',
        gender: '',
        contactNumber: '',
        condition: '',
        pastTreatments: '',
        currentMedications: '',
        notes: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, you would submit data here
        console.log('Patient Data Submitted:', formData);
        // Navigate back to patients list after submission
        navigate('/admin/patients');
    };

    return (
        <div className="add-patient-container">
            <SideBar />

            <div className="add-patient-content">
                {/* Header with Back Button */}
                <div className="add-patient-header">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => navigate(-1)}
                            className="p-2 hover:bg-gray-200 rounded-full transition-colors text-gray-500 hover:text-gray-900"
                        >
                            <ArrowLeft size={24} />
                        </button>
                        <div>
                            <h1 className="add-patient-title">Add New Patient</h1>
                            <p className="text-gray-500 text-sm mt-1">Create a new patient record in the system</p>
                        </div>
                    </div>
                </div>

                {/* Form Card */}
                <div className="add-patient-form-card">
                    <form onSubmit={handleSubmit} className="p-6 md:p-8">

                        <div className="form-grid">

                            {/* Personal Information Section */}
                            <div className="md:col-span-2">
                                <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">Personal Information</h3>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Full Name</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="e.g. Chinaza Akachi"
                                    required
                                    className="form-input"
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Location</label>
                                <input
                                    type="text"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    placeholder="e.g. Mumbai, Maharashtra"
                                    className="form-input"
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="e.g. chinaza@example.com"
                                    required
                                    className="form-input"
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Contact Number</label>
                                <input
                                    type="tel"
                                    name="contactNumber"
                                    value={formData.contactNumber}
                                    onChange={handleChange}
                                    placeholder="e.g. +91 98765 43210"
                                    required
                                    className="form-input"
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Age</label>
                                <input
                                    type="number"
                                    name="age"
                                    value={formData.age}
                                    onChange={handleChange}
                                    placeholder="e.g. 29"
                                    className="form-input"
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Gender</label>
                                <select
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                    className="form-input"
                                >
                                    <option value="">Select Gender</option>
                                    <option value="Female">Female</option>
                                    <option value="Male">Male</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            {/* Medical Information Section */}
                            <div className="md:col-span-2 mt-4">
                                <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">Medical Information</h3>
                            </div>

                            <div className="form-group md:col-span-2">
                                <label className="form-label">Mental Health Condition</label>
                                <input
                                    type="text"
                                    name="condition"
                                    value={formData.condition}
                                    onChange={handleChange}
                                    placeholder="e.g. Post-Traumatic Stress Disorder"
                                    className="form-input"
                                />
                            </div>

                            <div className="form-group md:col-span-2">
                                <label className="form-label">Past Treatments</label>
                                <textarea
                                    name="pastTreatments"
                                    value={formData.pastTreatments}
                                    onChange={handleChange}
                                    rows="2"
                                    placeholder="e.g. Group Therapy, EMDR"
                                    className="form-textarea"
                                ></textarea>
                            </div>

                            <div className="form-group md:col-span-2">
                                <label className="form-label">Current Medications</label>
                                <textarea
                                    name="currentMedications"
                                    value={formData.currentMedications}
                                    onChange={handleChange}
                                    rows="2"
                                    placeholder="e.g. Paroxetine 20mg"
                                    className="form-textarea"
                                ></textarea>
                            </div>

                            <div className="form-group md:col-span-2">
                                <label className="form-label">Additional Notes</label>
                                <textarea
                                    name="notes"
                                    value={formData.notes}
                                    onChange={handleChange}
                                    rows="3"
                                    placeholder="Any other relevant details..."
                                    className="form-textarea"
                                ></textarea>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="form-actions">
                            <button
                                type="button"
                                onClick={() => navigate(-1)}
                                className="btn-cancel"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="btn-submit flex items-center gap-2"
                            >
                                <Save size={18} />
                                Save Patient
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddPatient;
