import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CRow,
  CFormSelect,
} from '@coreui/react'

const SurveyPage = () => {
  const [formData, setFormData] = useState({
    workoutDays: '',
    fitnessGoal: '',
    classPreferences: '',
    motivationLevel: 5,
    workoutFrequency: '',
    dietaryPreferences: '',
    medicalConditions: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Survey Submitted:', formData)
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard>
          <CCardHeader>
            <h4>Help Us Understand Your Fitness Preferences</h4>
            <p>Please answer a few questions to help us tailor your fitness plan.</p>
          </CCardHeader>
          <CCardBody>
            <CForm onSubmit={handleSubmit}>
              
              {/* Workout Days & Times */}
              <CRow className="mb-3">
                <CCol>
                  <CFormLabel htmlFor="workoutDays">What days / general times will you workout?</CFormLabel>
                  <CFormTextarea
                    id="workoutDays"
                    name="workoutDays"
                    value={formData.workoutDays}
                    onChange={handleChange}
                    placeholder="e.g., Monday, Wednesday, Friday - Mornings"
                  />
                </CCol>
              </CRow>

              {/* Fitness Goals */}
              <CRow className="mb-3">
                <CCol>
                  <CFormLabel htmlFor="fitnessGoal">What are your fitness goals?</CFormLabel>
                  <CFormSelect
                    id="fitnessGoal"
                    name="fitnessGoal"
                    value={formData.fitnessGoal}
                    onChange={handleChange}
                  >
                    <option>Select your goal</option>
                    <option value="Weight Loss">Weight Loss</option>
                    <option value="Muscle Gain">Muscle Gain</option>
                    <option value="Endurance">Endurance</option>
                    <option value="Flexibility">Flexibility</option>
                  </CFormSelect>
                </CCol>
              </CRow>

              {/* Class Preferences */}
              <CRow className="mb-3">
                <CCol>
                  <CFormLabel htmlFor="classPreferences">What types of classes do you like?</CFormLabel>
                  <CFormTextarea
                    id="classPreferences"
                    name="classPreferences"
                    value={formData.classPreferences}
                    onChange={handleChange}
                    placeholder="e.g., Yoga, Strength Training, Spin Classes"
                  />
                </CCol>
              </CRow>

              {/* Motivation Level */}
              <CRow className="mb-3">
                <CCol>
                  <CFormLabel htmlFor="motivationLevel">How motivated are you to achieve your goal? (1-10)</CFormLabel>
                  <CFormInput
                    type="number"
                    id="motivationLevel"
                    name="motivationLevel"
                    value={formData.motivationLevel}
                    onChange={handleChange}
                    min="1"
                    max="10"
                  />
                </CCol>
              </CRow>

              {/* Workout Frequency */}
              <CRow className="mb-3">
                <CCol>
                  <CFormLabel htmlFor="workoutFrequency">How many days a week do you want to workout?</CFormLabel>
                  <CFormInput
                    type="number"
                    id="workoutFrequency"
                    name="workoutFrequency"
                    value={formData.workoutFrequency}
                    onChange={handleChange}
                    min="1"
                    max="7"
                  />
                </CCol>
              </CRow>

              {/* Dietary Preferences */}
              <CRow className="mb-3">
                <CCol>
                  <CFormLabel htmlFor="dietaryPreferences">Do you have any dietary preferences/restrictions?</CFormLabel>
                  <CFormTextarea
                    id="dietaryPreferences"
                    name="dietaryPreferences"
                    value={formData.dietaryPreferences}
                    onChange={handleChange}
                    placeholder="e.g., Vegan, Low-Carb, No Sugar"
                  />
                </CCol>
              </CRow>

              {/* Medical Conditions */}
              <CRow className="mb-3">
                <CCol>
                  <CFormLabel htmlFor="medicalConditions">
                    Do you have any past injuries or medical conditions that would limit activities you can do in the gym?
                  </CFormLabel>
                  <CFormTextarea
                    id="medicalConditions"
                    name="medicalConditions"
                    value={formData.medicalConditions}
                    onChange={handleChange}
                    placeholder="Please list any past injuries or conditions"
                  />
                </CCol>
              </CRow>

              <CButton type="submit" color="primary">Submit Survey</CButton>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default SurveyPage