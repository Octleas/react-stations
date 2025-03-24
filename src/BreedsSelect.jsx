// @ts-check

export const BreedsSelect = ({ breed = [], selectedBreed }) => {
  const handleSelectChange = e => {
    selectedBreed(e.target.value)
  }

  return (
    <select onChange={handleSelectChange}>
      {breed.map(breedName => (
        <option key={breedName} value={breedName}>
          {breedName}
        </option>
      ))}
    </select>
  )
}

export default BreedsSelect
