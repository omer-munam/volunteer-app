import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { CircularProgress } from '@mui/material';

function Home() {
  const router = useRouter()

  useEffect(() => {
    router.push('/login')
  }, [])

  return <div><CircularProgress /></div>
}

export default Home