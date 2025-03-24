import { useEffect, useState } from 'react'
import BreedsSelect from './BreedsSelect'

export const DogListContainer = () => {
  const [breed, setBreed] = useState([])
  const [selectedBreed, setSelectedBreed] = useState('affenpinscher')
  const [breedImage, setBreedImage] = useState([])

  const handleSelectChange = selectedBreed => {
    if (!selectedBreed) return
    fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/12`)
      .then(res => res.json())
      .then(data => {
        setBreedImage(data.message)
      })
      .catch(error => console.error('Error fetching breed images:', error))
  }
  const handleButtonClick = () => {
    if (!selectedBreed) return
    handleSelectChange(selectedBreed)
  }

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(res => res.json())
      .then(data => {
        setBreed(Object.keys(data.message))
      })
  }, [])

  useEffect(() => {
    handleSelectChange(selectedBreed) // 初期画像を取得
  }, [])

  return (
    <div>
      <BreedsSelect breed={breed} selectedBreed={setSelectedBreed} />
      <button onClick={handleButtonClick}>表示</button>
      <div>
        {breedImage.map(url => (
          <img key={url} src={url} alt="犬の画像" />
        ))}
      </div>
    </div>
  )
}
