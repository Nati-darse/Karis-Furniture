// 'use client'

// import { useRouter } from 'next/navigation'
// import { useAuth } from '@/providers/AuthProvider'
// import { useEffect } from 'react'
// import { supabase } from '@/lib/supabase'

// export default function AdminLayout({ children }: { children: React.ReactNode }) {
//   const { user, loading } = useAuth()
//   const router = useRouter()

//   useEffect(() => {
//     if (!loading && !user) {
//       router.push('/admin/login')  // only runs for protected pages
//     }
//   }, [user, loading, router])

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-100">
//         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
//         <span className="ml-4 text-gray-600">Loading...</span>
//       </div>
//     )
//   }

//   if (!user) {
//     return null // prevents flash of content before redirect
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Admin Navigation */}
//       <nav className="bg-white shadow-sm border-b">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-16 items-center">
//           <h1 className="text-xl font-semibold text-gray-900">Karis Admin</h1>
//           <div className="flex items-center space-x-4">
//             <span className="text-sm text-gray-600 hidden sm:block">Welcome, {user.email}</span>
//             <button
//               onClick={() => supabase.auth.signOut()}
//               className="text-sm text-gray-600 hover:text-gray-900 bg-gray-100 px-3 py-1 rounded-md"
//             >
//               Sign Out
//             </button>
//           </div>
//         </div>
//       </nav>

//       <main>{children}</main>
//     </div>
//   )
// }


'use client'

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/providers/AuthProvider"
import { supabase } from "@/lib/supabase"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { user, loading, signOut } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/admin/login')
    }
  }, [user, loading, router])

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  if (!user) return null

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm p-4 flex justify-between items-center">
        <h1 className="font-bold text-lg">Karis Admin</h1>
        <div className="flex items-center space-x-4">
          <span>{user.email}</span>
          <button
            onClick={() => signOut().then(() => router.push('/admin/login'))}
            className="bg-gray-100 px-3 py-1 rounded hover:bg-gray-200"
          >
            Sign Out
          </button>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  )
}
