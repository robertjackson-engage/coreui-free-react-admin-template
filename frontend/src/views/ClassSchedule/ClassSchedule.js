import axios from 'axios'
import { useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CFormLabel,
  CFormInput,
  CButton,
  CRow,
  CCol,
} from '@coreui/react'

const ClassSchedule = () => {
  const [clubNumber, setClubNumber] = useState('')
  const [schedule, setSchedule] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [apiResponse, setApiResponse] = useState(null)

  // Helper function to format the date in YYYY-MM-DD format
  const formatDate = (date) => {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0') // Add leading zero for month
    const day = String(date.getDate()).padStart(2, '0') // Add leading zero for day

    return `${year}-${month}-${day}` // Return only date in YYYY-MM-DD format
  }

  // Get the date range for the next 7 days (no time component)
  const getNextWeekDateRange = () => {
    const today = new Date()
    const nextWeek = new Date(today)
    nextWeek.setDate(today.getDate() + 7)

    const startDate = formatDate(today)
    const endDate = formatDate(nextWeek)

    // URL-encode the comma between the start and end date
    return `${startDate},${endDate}`.replace(',', '%2C')
  }

  // Handle fetching the class schedule
  const handleFetchSchedule = () => {
    if (!clubNumber) {
      setError('Please enter a club number.')
      return
    }

    const dateRange = getNextWeekDateRange() // Get the date range without time
    setLoading(true)
    setError('')

    // Set headers as required by the API
    const headers = {
      'Accept': 'application/json;charset=UTF-8',
      'app_id': '2bbd150c',   // Replace with your app_id
      'app_key': '456d6c719eb865fccec4bb94baaef367', // Replace with your app_key
    }

    // Manually construct the URL
    const apiUrl = `https://api.abcfinancial.com/rest/${clubNumber}/calendars/events?eventDateRange=${dateRange}&eventCategory=class&page=1`

    // Make the axios GET request
    axios
      .get(apiUrl, { headers })
      .then((response) => {
        console.log('Full API Response:', response)  // Log full API response for debugging
        setApiResponse(response)  // Store full API response for troubleshooting
        setSchedule(response.data.events || [])  // Set the events in state
        setLoading(false)
      })
      .catch((error) => {
        console.error('API Error:', error.response ? error.response.data : error.message)
        setApiResponse(error.response ? error.response.data : error.message)  // Store error in state
        setError('Failed to fetch the class schedule.')
        setLoading(false)
      })
  }

  return (
    <CCard>
      <CCardHeader>
        <h4>Class Schedule for Next Week</h4>
      </CCardHeader>
      <CCardBody>
        <CRow className="mb-3">
          <CCol>
            <CFormLabel htmlFor="clubNumber">Club Number</CFormLabel>
            <CFormInput
              type="text"
              id="clubNumber"
              placeholder="Enter the club number"
              value={clubNumber}
              onChange={(e) => setClubNumber(e.target.value)}
            />
          </CCol>
        </CRow>
        <CButton color="primary" onClick={handleFetchSchedule}>
          Fetch Schedule
        </CButton>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div className="mt-3">
          {schedule && schedule.length > 0 ? (
            <ul>
              {schedule.map((event) => (
                <li key={event.eventId}>
                  <strong>{event.eventName}</strong> - {event.eventTimestamp} ({event.duration} mins)
                  <br />
                  Instructor: {event.employeeName || 'N/A'} | Location: {event.locationName || 'N/A'}
                </li>
              ))}
            </ul>
          ) : (
            !loading && <p>No classes found for the next week.</p>
          )}
        </div>

        {/* Display the full API response for troubleshooting */}
        <div className="mt-3">
          <h5>API Response (for troubleshooting)</h5>
          <pre>{JSON.stringify(apiResponse, null, 2)}</pre>
        </div>
      </CCardBody>
    </CCard>
  )
}

export default ClassSchedule