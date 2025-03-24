import './App.css'
import { useState } from 'react'
import { Header } from './Header'
import { Description } from './Description'
import { DogListContainer } from './DogListContainer'

export const App = () => {
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg',
  )

  const onClickButton = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(data => {
        setDogUrl(data.message)
      })
  }

  return (
    <>
      <Header />
      <Description dogUrl={dogUrl} onClickButton={onClickButton} />
      <DogListContainer />
    </>
  )
}
