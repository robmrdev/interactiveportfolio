import './ContactForm.css'

const ContactForm = ({show, setShow}) => {
    if (!show) return null
  return (
    <div className='contactBackground'>
        <div className='contactContainer'>
            <div className='contactHeader'> <i class="fi fi-br-cross closeButton" onClick={()=>setShow(false)}></i></div>
            <div className='contactInner'>
                <div className='contactHeadInfo'>
                    <img src="https://dummyimage.com/160x160/000000/fff" alt="" srcset="" />
                    <div className='contactHeadTex'>
                        <h4>Contact form</h4>
                        <p>Wow, you made it to the form! That's great for both of us. I look forward to hearing from you! <br/><br/> - Robert Mendoza, Web Developer</p>
                    </div>
                </div>
                <form action="">
                    <input type="text" placeholder='Name' className='fromText' required/>
                    <input type="text" placeholder='Email' className='fromText' required/>
                    <p>What services are you interested in?</p>
                    <div className='contactCheckboxs'>
                        <div className='checkboxContainer'>
                            <input type="checkbox" name="" id="" />
                            <p>Design</p>
                        </div>
                        <div className='checkboxContainer'>
                            <input type="checkbox" name="" id="" />
                            <p>Design</p>
                        </div>
                        <div className='checkboxContainer'>
                            <input type="checkbox" name="" id="" />
                            <p>Design</p>
                        </div>
                        <div className='checkboxContainer'>
                            <input type="checkbox" name="" id="" />
                            <p>Design</p>
                        </div>
                    </div>
                    <p>What's your budget (optional)</p>
                    <div className='contactCheckboxs'>
                        <div className='checkboxContainer'>
                            <input type="checkbox" name="" id="" />
                            <p>Design</p>
                        </div>
                        <div className='checkboxContainer'>
                            <input type="checkbox" name="" id="" />
                            <p>Design</p>
                        </div>
                        <div className='checkboxContainer'>
                            <input type="checkbox" name="" id="" />
                            <p>Design</p>
                        </div>
                        <div className='checkboxContainer'>
                            <input type="checkbox" name="" id="" />
                            <p>Design</p>
                        </div>
                    </div>
                    <textarea name="" id="" placeholder='Say Hi!' ></textarea>
                    <input type="submit" value="Submit" className='getInTouchButton'/>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ContactForm