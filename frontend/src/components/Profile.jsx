import { useState, useEffect } from 'react'

export default function Profile() {
  const [liked, setLiked] = useState([])
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('likedBands') || '[]')
    setLiked(stored)
  }, [])

  return (
    <div>
      <h2>Liked Bands</h2>
      <ul>
        {liked.map((b) => (
          <li key={b.name}>{b.name}</li>
        ))}
      </ul>
    </div>
  )
}
