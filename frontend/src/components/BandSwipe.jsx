import TinderCard from 'react-tinder-card'
import './BandSwipe.css'

const defaultBands = [
  { name: 'Band A', image: 'https://via.placeholder.com/300x400?text=Band+A' },
  { name: 'Band B', image: 'https://via.placeholder.com/300x400?text=Band+B' },
  { name: 'Band C', image: 'https://via.placeholder.com/300x400?text=Band+C' },
  { name: 'Band D', image: 'https://via.placeholder.com/300x400?text=Band+D' }
]

export default function BandSwipe() {
  const bands = defaultBands

  const onSwipe = (dir, band) => {
    if (dir === 'right') {
      const liked = JSON.parse(localStorage.getItem('likedBands') || '[]')
      localStorage.setItem('likedBands', JSON.stringify([...liked, band]))
    }
  }

  return (
    <div className="swipeContainer">
      {bands.map((band) => (
        <TinderCard
          key={band.name}
          onSwipe={(dir) => onSwipe(dir, band)}
          preventSwipe={['up', 'down']}
        >
          <div className="card" style={{ backgroundImage: `url(${band.image})` }}>
            <h3>{band.name}</h3>
          </div>
        </TinderCard>
      ))}
    </div>
  )
}
