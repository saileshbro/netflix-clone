import React from 'react'
import { useContent } from '../hooks'
import selectionFilter from '../utils/selection_filter'

const Browse = () => {
  const { series } = useContent('series')
  const { films } = useContent('films')
  const slides = selectionFilter({ series, films })
  return <div>Browse</div>
}

export default Browse
