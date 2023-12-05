import './YouWebsite.css'

const YourWebsite = ({setShow}) => {
  return (
    <section>
      <div className='contentWrapper'>
        <h3 className='sectionTitle'>So... About your new website!</h3>
        <p className='sectionDesc'>I'm not trying to be too forward, but hey, the first chats are on the house.
          You've got nothing to lose, And everything to gain.</p>
        <div className='columnWrapper'>
          <div className='getInTouchContainer'>
            <h4>Let's talk!</h4>
            <div className='getInTouchButton' onClick={()=>setShow(true)}>Get in Touch</div>
          </div>
          <img src="https://dummyimage.com/250x320/000000/fff" alt="" />
        </div>
      </div>
    </section>
  )
}

export default YourWebsite