import './Cave.css'

const Cave = () => {
  return (
    <div className='caveWrapper'>
      <div className='caveContainer'>
        <img src="./cave/caveBg.jpg" alt="" className='caveBg' />
        <img src="./cave/topCaveVignetteMargin.png" alt="" className='topCave' />
        <img src="./cave/bottomCave.png" alt="" className='bottomCave' />
      </div>
    </div>
  )
}

export default Cave