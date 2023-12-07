import { useState } from 'react';
import './DesignProcess.css'
import React from 'react';
import { waveEffect } from '../../utils/utils';

const DesignProcess = () => {
    return (
        <section className='designWrapper'>
            <div className='contentWrapper'>
                {waveEffect("Design & Development Process")}    
                <p className='designSubText'>Processes are the silent wizards that help us save time and energy. The idea is to create a
                    structured workflow, typically spanning 4 to 6 weeks based on your specific needs.</p>
                <div className='designContent'>
                    <div className='designFlex'>
                        <div className='designInfoText breathAnimationY animation1'>
                            <img src="https://dummyimage.com/100x100/000000/fff" alt="" />
                            <h4>Discovery</h4>
                            <p>Initially, let's dive into the goals for your site and identify your target audience. The
                                foundation of fantastic websites begins with understanding who the users are and what they'll
                                be seeking from your site. Everything else flows naturally from this point.</p>
                        </div>
                        <img src="https://dummyimage.com/300x300/000000/fff" alt="" className='breathAnimationX  animation3' />
                    </div>
                    <div className='designFlex designReverse'>
                        <div className='designInfoText breathAnimationY animation3'>
                            <img src="https://dummyimage.com/100x100/000000/fff" alt="" />
                            <h4>UX Structure</h4>
                            <p>Next, we translate your user's needs into a sitemap detailing all your pages and their underlying
                                structure. (Don't worry, I'll break this down when the time is right.) Once approved, we deliver
                                basic wireframes of the site, which are then iterated on to confirm the layout of the site.</p>
                        </div>
                        <img src="https://dummyimage.com/300x300/000000/fff" alt="" className='breathAnimationX animation2' />
                    </div>
                    <div className='designFlex'>
                        <div className='designInfoText breathAnimationY animation2'>
                            <img src="https://dummyimage.com/100x100/000000/fff" alt="" />
                            <h4>Final Design</h4>
                            <p>Let's dive into the aesthetics! We'll chat about the look and feel of the site, brainstorming ways
                                to delight your web visitors. Following our discussion, I'll craft the ultimate mockups for your
                                site's pages, and then it's over to you for the grand review!</p>
                        </div>
                        <img src="https://dummyimage.com/300x300/000000/fff" alt="" className='breathAnimationX  animation4' />
                    </div>
                    <div className='designFlex designReverse'>
                        <div className='designInfoText breathAnimationY animation4'>
                            <img src="https://dummyimage.com/100x100/000000/fff" alt="" />
                            <h4>Develop & Launch</h4>
                            <p>I'll develop animated pages that not only showcase your content but also bring a smile to your users'
                                faces. By weaving together all the previous information, we'll craft an experience that truly stands
                                out. After a couple of walk-throughs, you'll be all set to rumble!</p>
                        </div>
                        <img src="https://dummyimage.com/300x300/000000/fff" alt="" className='breathAnimationX  animation1' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DesignProcess