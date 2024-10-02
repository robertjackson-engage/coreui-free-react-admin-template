import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CForm,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CButton
} from '@coreui/react'

const EngagementCustomization = () => {
  const [cadence, setCadence] = useState('weekly')
  const [messageTone, setMessageTone] = useState('motivational')
  const [customMessage, setCustomMessage] = useState('')

  const handleSave = () => {
    // Simulate saving the settings (could connect to an API later)
    console.log('Cadence:', cadence)
    console.log('Message Tone:', messageTone)
    console.log('Custom Message:', customMessage)
  }

  return (
    <CCard>
      <CCardHeader>
        <h4>Engagement Customization</h4>
      </CCardHeader>
      <CCardBody>
        <CForm>
          {/* Engagement Cadence */}
          <div className="mb-3">
            <CFormLabel htmlFor="cadenceSelect">Engagement Cadence</CFormLabel>
            <CFormSelect 
              id="cadenceSelect" 
              value={cadence} 
              onChange={(e) => setCadence(e.target.value)}
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="bi-weekly">Bi-weekly</option>
              <option value="monthly">Monthly</option>
            </CFormSelect>
          </div>

          {/* Message Tone */}
          <div className="mb-3">
            <CFormLabel htmlFor="messageToneSelect">Message Tone</CFormLabel>
            <CFormSelect 
              id="messageToneSelect" 
              value={messageTone} 
              onChange={(e) => setMessageTone(e.target.value)}
            >
              <option value="motivational">Motivational</option>
              <option value="informational">Informational</option>
              <option value="casual">Casual</option>
            </CFormSelect>
          </div>

          {/* Custom Message */}
          <div className="mb-3">
            <CFormLabel htmlFor="customMessage">Custom Message</CFormLabel>
            <CFormTextarea 
              id="customMessage" 
              rows="4" 
              value={customMessage} 
              onChange={(e) => setCustomMessage(e.target.value)}
            />
          </div>

          {/* Save Button */}
          <CButton color="primary" onClick={handleSave}>Save Settings</CButton>
        </CForm>
      </CCardBody>
    </CCard>
  )
}

export default EngagementCustomization