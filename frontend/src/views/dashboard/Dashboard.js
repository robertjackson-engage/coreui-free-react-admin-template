import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  CAvatar,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CFormSelect,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPeople } from '@coreui/icons'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js'

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement)


import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
const Dashboard = () => {
  // Sample Data for 6-month retention
  const sixMonthData = {
    labels: ['April', 'May', 'June', 'July', 'August', 'September'],
    datasets: [
      {
        label: '6-Month Retention Rate',
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: 'rgba(75,192,192,1)',
        pointBorderColor: '#fff',
        data: [85, 80, 82, 83, 78, 79], // Example Data
      },
    ],
  }

  // Sample Data for 3-month retention
  const threeMonthData = {
    labels: ['July', 'August', 'September'],
    datasets: [
      {
        label: '3-Month Retention Rate',
        backgroundColor: 'rgba(153,102,255,0.2)',
        borderColor: 'rgba(153,102,255,1)',
        pointBackgroundColor: 'rgba(153,102,255,1)',
        pointBorderColor: '#fff',
        data: [92, 89, 87], // Example Data
      },
    ],
  }

  return (
    <>
      {/* Chart Rows */}
      <CRow>
        {/* 6-Month Retention Chart */}
        <CCol xs={12} lg={6}>
          <CCard className="mb-4">
            <CCardHeader>6-Month Retention Rate</CCardHeader>
            <CCardBody>
              <Line data={sixMonthData} />
            </CCardBody>
          </CCard>
        </CCol>

        {/* 3-Month Retention Chart */}
        <CCol xs={12} lg={6}>
          <CCard className="mb-4">
            <CCardHeader>3-Month Retention Rate</CCardHeader>
            <CCardBody>
              <Line data={threeMonthData} />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

const memberExample = [
  {
    id: 1,
    avatar: { src: avatar1, status: 'success' },
    user: { name: 'Yiorgos Avraamu', lastCheckIn: '2 days ago' },
    status: 'green',
  },
  {
    id: 2,
    avatar: { src: avatar2, status: 'warning' },
    user: { name: 'Avram Tarasios', lastCheckIn: '6 days ago' },
    status: 'yellow',
  },
  {
    id: 3,
    avatar: { src: avatar3, status: 'danger' },
    user: { name: 'Quintin Ed', lastCheckIn: '15 days ago' },
    status: 'red',
  },
  {
    id: 4,
    avatar: { src: avatar4, status: 'danger' },
    user: { name: 'Enéas Kwadwo', lastCheckIn: '16 days ago' },
    status: 'red',
  },
]

const MemberDashboard = () => {
  const [filter, setFilter] = useState('all')
  const navigate = useNavigate()

  // Filter members based on the selected filter status
  const filteredMembers = memberExample.filter((member) => {
    if (filter === 'all') return true
    return member.status === filter
  })

  // Function to handle row click and navigate to the timeline
  const handleRowClick = (memberId) => {
    navigate(`/member-timeline/${memberId}`)
  }

  return (
    <>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <div className="d-flex justify-content-between align-items-center">
                <span>Members' Last 90 Days</span>
                <CFormSelect
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  style={{ width: '200px' }}
                >
                  <option value="all">All</option>
                  <option value="green">Green (Last 3 Days)</option>
                  <option value="yellow">Yellow (Last 7 Days)</option>
                  <option value="red">Red (Last 14+ Days)</option>
                </CFormSelect>
              </div>
            </CCardHeader>
            <CCardBody>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead className="text-nowrap">
                  <CTableRow>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">Member</CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">Last Check-in</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {filteredMembers.map((item, index) => (
                    <CTableRow key={index} onClick={() => handleRowClick(item.id)} style={{ cursor: 'pointer' }}>
                      <CTableDataCell className="text-center">
                        <CAvatar size="md" src={item.avatar.src} status={item.avatar.status} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.user.name}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.user.lastCheckIn}</div>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default MemberDashboard