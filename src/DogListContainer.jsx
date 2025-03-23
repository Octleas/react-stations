// @ts-check

import React, { useEffect, useState } from 'react'
import BreedsSelect from './BreedsSelect'

export const DogListContainer = () => {
  const [breed, setBreed] = useState([])

  const [selectedBreed, setSelectedBreed] = useState('')

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(res => res.json())
      .then(data => {
        setBreed(Object.keys(data.message))
      })
  }, [])

  return (
    <div>
      <BreedsSelect breed={breed} selectedBreed={selectedBreed} />
    </div>
  )
}
