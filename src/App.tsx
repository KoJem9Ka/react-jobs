import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import data from './mock/data.json'
import { addPositions } from './store/positions/actions'
import JobList from './components/JobList/JobList'
import FilterPanel from './components/FilterPanel/FilterPanel'

const App = () => {
  const dispatch = useDispatch()

  useEffect( () => {
    dispatch( addPositions( data ) )
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
