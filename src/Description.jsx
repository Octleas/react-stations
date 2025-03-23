// @ts-check

import { DogImage } from './DogImage'

export const Description = ({ dogUrl, onClickButton }) => {
  return (
    <div>
      <button onClick={onClickButton}>表示</button>
      <DogImage imageUrl={dogUrl} />
    </div>
  )
}
