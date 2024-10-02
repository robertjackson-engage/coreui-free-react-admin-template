import React from 'react'
import { useParams } from 'react-router-dom'
import { CCard, CCardBody, CCardHeader, CListGroup, CListGroupItem } from '@coreui/react'

const memberData = {
  1: {
    name: 'Yiorgos Avraamu',
    joined: '2023-01-01',
    interactions: [
      { date: '2023-01-01', action: 'Member joined the club.' },
      { date: '2023-01-05', action: 'Sent welcome message via SMS.' },
      { date: '2023-01-06', action: 'First visit to the gym.' },
      { date: '2023-01-10', action: 'Emailed a workout plan.' },
      { date: '2023-01-15', action: 'Attended a group class.' },
    ],
  },
  2: {
    name: 'Avram Tarasios',
    joined: '2023-01-01',
    interactions: [
      { date: '2023-01-01', action: 'Member joined the club.' },
      { date: '2023-01-07', action: 'Sent welcome message via SMS.' },
      { date: '2023-01-12', action: 'First visit to the gym.' },
    ],
  },
}

const MemberTimeline = () => {
  const { memberId } = useParams()

  const member = memberData[memberId] || { name: 'Unknown', interactions: [] }

  return (
    <CCard className="mb-4">
      <CCardHeader>{member.name}'s Interaction Timeline</CCardHeader>
      <CCardBody>
        <CListGroup>
          {member.interactions.map((interaction, index) => (
            <CListGroupItem key={index}>
              <strong>{interaction.date}</strong>: {interaction.action}
            </CListGroupItem>
          ))}
        </CListGroup>
      </CCardBody>
    </CCard>
  )
}

export default MemberTimeline