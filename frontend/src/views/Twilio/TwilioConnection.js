import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CForm,
  CFormLabel,
  CFormInput,
  CButton,
  CRow,
  CCol
} from '@coreui/react'

const ConnectionsPage = () => {
  const [twilioAccountSid, setTwilioAccountSid] = useState('')
  const [twilioAuthToken, setTwilioAuthToken] = useState('')
  const [twilioPhoneNumber, setTwilioPhoneNumber] = useState('')

  const [abcApiKey, setAbcApiKey] = useState('')
  const [abcAppId, setAbcAppId] = useState('')

  const [openAiApiKey, setOpenAiApiKey] = useState('')

  const handleTwilioSubmit = () => {
    if (!twilioAccountSid || !twilioAuthToken || !twilioPhoneNumber) {
      alert('Please fill out all Twilio fields')
      return
    }

    const twilioPayload = {
      twilioAccountSid,
      twilioAuthToken,
      twilioPhoneNumber,
    }

    // Example: sending the Twilio credentials to backend
    // axios.post('/api/connect-twilio', twilioPayload)

    alert('Twilio account connected successfully!')
  }

  const handleAbcSubmit = () => {
    if (!abcApiKey || !abcAppId) {
      alert('Please fill out all ABC Fitness API fields')
      return
    }

    const abcPayload = {
      abcApiKey,
      abcAppId,
    }

    // Example: sending ABC Fitness API credentials to backend
    // axios.post('/api/connect-abc', abcPayload)

    alert('ABC Fitness API connected successfully!')
  }

  const handleOpenAiSubmit = () => {
    if (!openAiApiKey) {
      alert('Please enter your OpenAI API Key')
      return
    }

    const openAiPayload = {
      openAiApiKey,
    }

    // Example: sending OpenAI API credentials to backend
    // axios.post('/api/connect-openai', openAiPayload)

    alert('OpenAI API connected successfully!')
  }

  return (
    <CCard>
      <CCardHeader>
        <h4>Connect Your Accounts</h4>
      </CCardHeader>
      <CCardBody>
        {/* Twilio Section */}
        <h5>Twilio SMS Connection</h5>
        <CForm>
          <CRow className="mb-3">
            <CCol>
              <CFormLabel htmlFor="twilioAccountSid">Twilio Account SID</CFormLabel>
              <CFormInput
                type="text"
                id="twilioAccountSid"
                placeholder="Enter Twilio Account SID"
                value={twilioAccountSid}
                onChange={(e) => setTwilioAccountSid(e.target.value)}
              />
            </CCol>
            <CCol>
              <CFormLabel htmlFor="twilioAuthToken">Twilio Auth Token</CFormLabel>
              <CFormInput
                type="password"
                id="twilioAuthToken"
                placeholder="Enter Twilio Auth Token"
                value={twilioAuthToken}
                onChange={(e) => setTwilioAuthToken(e.target.value)}
              />
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CCol>
              <CFormLabel htmlFor="twilioPhoneNumber">Twilio Phone Number</CFormLabel>
              <CFormInput
                type="text"
                id="twilioPhoneNumber"
                placeholder="Enter Twilio Phone Number"
                value={twilioPhoneNumber}
                onChange={(e) => setTwilioPhoneNumber(e.target.value)}
              />
            </CCol>
          </CRow>
          <CButton color="primary" onClick={handleTwilioSubmit}>Connect Twilio Account</CButton>
        </CForm>

        <hr />

        {/* ABC Fitness API Section */}
        <h5>ABC Fitness API Connection</h5>
        <CForm>
          <CRow className="mb-3">
            <CCol>
              <CFormLabel htmlFor="abcApiKey">ABC Fitness API Key</CFormLabel>
              <CFormInput
                type="text"
                id="abcApiKey"
                placeholder="Enter ABC Fitness API Key"
                value={abcApiKey}
                onChange={(e) => setAbcApiKey(e.target.value)}
              />
            </CCol>
            <CCol>
              <CFormLabel htmlFor="abcAppId">ABC Fitness App ID</CFormLabel>
              <CFormInput
                type="text"
                id="abcAppId"
                placeholder="Enter ABC Fitness App ID"
                value={abcAppId}
                onChange={(e) => setAbcAppId(e.target.value)}
              />
            </CCol>
          </CRow>
          <CButton color="primary" onClick={handleAbcSubmit}>Connect ABC Fitness API</CButton>
        </CForm>

        <hr />

        {/* OpenAI API Section */}
        <h5>OpenAI API Connection</h5>
        <CForm>
          <CRow className="mb-3">
            <CCol>
              <CFormLabel htmlFor="openAiApiKey">OpenAI API Key</CFormLabel>
              <CFormInput
                type="text"
                id="openAiApiKey"
                placeholder="Enter OpenAI API Key"
                value={openAiApiKey}
                onChange={(e) => setOpenAiApiKey(e.target.value)}
              />
            </CCol>
          </CRow>
          <CButton color="primary" onClick={handleOpenAiSubmit}>Connect OpenAI API</CButton>
        </CForm>
      </CCardBody>
    </CCard>
  )
}

export default ConnectionsPage