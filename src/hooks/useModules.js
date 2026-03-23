import { useEffect, useState } from 'react'
import { apiGet } from '../config/api'

export function useModules() {
  const [modules, setModules] = useState([])

  useEffect(() => {
    apiGet('/integration/modules').then(res => {
      if (res?.data) {
        setModules(res.data)
      }
    })
  }, [])

  return modules
}
