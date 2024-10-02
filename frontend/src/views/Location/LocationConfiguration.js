import React, { useState } from 'react'
import { CForm, CFormLabel, CFormInput, CButton, CRow, CCol, CFormSelect } from '@coreui/react'

const LocationConfiguration = () => {
  const [location, setLocation] = useState({
    locationName: '',
    address: '',
    phoneNumber: '',
    email: '',
    openingHours: '',
    services: [],
    membershipTypes: '',
    amenities: '',
    guidelines: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setLocation({ ...location, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Location Configuration:', location)
    // Save to backend or perform an API call
  }

  return (
    <CForm onSubmit={handleSubmit}>
      <h3>Location Configuration</h3>

      <CRow className="mb-3">
        <CCol xs="12" md="6">
          <CFormLabel htmlFor="locationName">Location Name</CFormLabel>
          <CFormInput
            id="locationName"
            name="locationName"
            placeholder="Enter location name"
            value={location.locationName}
            onChange={handleChange}
            required
          />
        </CCol>

        <CCol xs="12" md="6">
          <CFormLabel htmlFor="phoneNumber">Phone Number</CFormLabel>
          <CFormInput
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Enter phone number"
            value={location.phoneNumber}
            onChange={handleChange}
            required
          />
        </CCol>
      </CRow>

      <CRow className="mb-3">
        <CCol xs="12" md="6">
          <CFormLabel htmlFor="email">Email</CFormLabel>
          <CFormInput
            id="email"
            name="email"
            placeholder="Enter email address"
            value={location.email}
            onChange={handleChange}
            required
          />
        </CCol>

        <CCol xs="12" md="6">
          <CFormLabel htmlFor="openingHours">Operating Hours</CFormLabel>
          <CFormInput
            id="openingHours"
            name="openingHours"
            placeholder="Enter operating hours (e.g., 6AM - 10PM)"
            value={location.openingHours}
            onChange={handleChange}
          />
        </CCol>
      </CRow>

      <div className="mb-3">
        <CFormLabel htmlFor="address">Address</CFormLabel>
        <textarea
          className="form-control"
          id="address"
          name="address"
          placeholder="Enter the address"
          rows="3"
          value={location.address}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <CFormLabel htmlFor="services">Available Services</CFormLabel>
        <CFormSelect
          id="services"
          name="services"
          multiple
          value={location.services}
          onChange={(e) => setLocation({ ...location, services: [...e.target.selectedOptions].map(opt => opt.value) })}
        >
          <option value="Personal Training">Personal Training</option>
          <option value="Group Classes">Group Classes</option>
          <option value="Swimming Pool">Swimming Pool</option>
          <option value="Nutrition Counseling">Nutrition Counseling</option>
        </CFormSelect>
      </div>

      <div className="mb-3">
        <CFormLabel htmlFor="membershipTypes">Membership Types</CFormLabel>
        <CFormInput
          id="membershipTypes"
          name="membershipTypes"
          placeholder="Enter membership types (e.g., Basic, Premium)"
          value={location.membershipTypes}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <CFormLabel htmlFor="amenities">Amenities</CFormLabel>
        <CFormInput
          id="amenities"
          name="amenities"
          placeholder="List available amenities (e.g., Sauna, Free Weights, etc.)"
          value={location.amenities}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <CFormLabel htmlFor="guidelines">Rules & Guidelines</CFormLabel>
        <textarea
          className="form-control"
          id="guidelines"
          name="guidelines"
          placeholder="Enter any rules or guidelines"
          rows="3"
          value={location.guidelines}
          onChange={handleChange}
        />
      </div>

      <CButton type="submit" color="primary">Save Location</CButton>
    </CForm>
  )
}

export default LocationConfiguration