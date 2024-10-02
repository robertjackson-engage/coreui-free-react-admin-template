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
  CCol,
} from '@coreui/react'

const BrandingUpload = () => {
  const [headerImage, setHeaderImage] = useState(null)
  const [footerImage, setFooterImage] = useState(null)

  const handleHeaderChange = (e) => {
    setHeaderImage(e.target.files[0])
  }

  const handleFooterChange = (e) => {
    setFooterImage(e.target.files[0])
  }

  const handleSubmit = () => {
    if (!headerImage || !footerImage) {
      alert('Please upload both header and footer images.')
      return
    }

    const formData = new FormData()
    formData.append('header', headerImage)
    formData.append('footer', footerImage)

    // Example: Sending to backend (API integration)
    // axios.post('/api/upload-branding', formData)
    //   .then(response => {
    //     console.log('Branding uploaded successfully!', response.data)
    //   })
    //   .catch(error => {
    //     console.error('Error uploading branding:', error)
    //   })

    alert('Header and Footer uploaded successfully!')
  }

  return (
    <CCard>
      <CCardHeader>
        <h4>Upload Branding for Emails</h4>
      </CCardHeader>
      <CCardBody>
        <CForm>
          <CRow className="mb-3">
            <CCol>
              <CFormLabel htmlFor="headerUpload">Upload Header Image</CFormLabel>
              <CFormInput type="file" id="headerUpload" onChange={handleHeaderChange} />
            </CCol>
            <CCol>
              <CFormLabel htmlFor="footerUpload">Upload Footer Image</CFormLabel>
              <CFormInput type="file" id="footerUpload" onChange={handleFooterChange} />
            </CCol>
          </CRow>
          <CButton color="primary" onClick={handleSubmit}>
            Upload Branding
          </CButton>
        </CForm>
        <div className="mt-3">
          <h5>Preview:</h5>
          {headerImage && <img src={URL.createObjectURL(headerImage)} alt="Header Preview" width="100%" />}
          {footerImage && <img src={URL.createObjectURL(footerImage)} alt="Footer Preview" width="100%" />}
        </div>
      </CCardBody>
    </CCard>
  )
}

export default BrandingUpload