import React from 'react'
const Movies = () => {
  console.log(process.env.URL+"posts");
  return (
    <div><p>
      URL:{URL}
      </p>
      <button>Data</button>
      </div>
  )
}

export default Movies