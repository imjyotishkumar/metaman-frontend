import { Suspense } from 'react'
import UserDetail from '../Components/UserDetail'

const Userdetailpage = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <UserDetail />
    </Suspense>
  )
}

export default Userdetailpage