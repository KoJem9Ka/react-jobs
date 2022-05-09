import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import data from './mock/data.json'
import JobList from './components/JobList/JobList'
import FilterPanel from './components/FilterPanel/FilterPanel'
import { actionSetPositions } from './store/features/positions-slice'

const App: React.FC = () => {
  const dispatch = useDispatch()

  useEffect( () => {
    dispatch( actionSetPositions( data ) )
  }, [] )

  return (
    <>
      <header>
        <a href='https://github.com/KoJem9Ka/react-jobs'>Repo</a>
      </header>
      <main>
        <FilterPanel/>
        <JobList/>
      </main>
    </>
  )
}

export default App
