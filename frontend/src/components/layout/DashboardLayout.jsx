// InterviewPrepAi\frontend\src\components\layout\DashboardLayout.jsx

import React, { useContext } from 'react'
import { UserContext } from '../../Context/userContext'
import Navbar from './Navbar'

function DashboardLayout({ children }) {

  const { user } = useContext(UserContext)

  return (

<div className="relative pt-20 min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-900">

  {/* Animated Blob Background */}
  <div className="absolute inset-0">

    <div className="absolute inset-0 overflow-hidden">

      <div className="blob blob1"></div>
      <div className="blob blob2"></div>
      <div className="blob blob3"></div>

    </div>

  </div>

  <Navbar />

  {user && (
    <div className="relative z-10">
      {children}
    </div>
  )}

</div>

  )
}

export default DashboardLayout