import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef, useState } from "react";
import { waveEffect } from '../../utils/utils'
import "./styles.css";
import Hero from "../Hero/Hero";
import AdTapes from "../AdTapes/AdTapes";

gsap.registerPlugin(ScrollTrigger);

export default function Sample() {
    const [show, setShow] = useState(false)
    const component = useRef();
    const slider = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let panels = gsap.utils.toArray(".panel");
            gsap.to(panels, {
                xPercent: -100 * (panels.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: slider.current,
                    pin: true,
                    scrub: 2,
                    // snap: () => slider.current.offsetWidth * 0.2,
                    // snap: 1 / (panels.length - 1),
                    end: () => `+=${slider.current.offsetWidth * 1.1}`,
                    // end: () => "+=" + slider.current.offsetWidth,
                    markers: true
                }
            });
        }, component);
        return () => ctx.revert();
    });

    return (
        <main className='heroMain' ref={component}>
            <Hero setShow={setShow} />
            <AdTapes />
            <div ref={slider} className="container">
                <div className="caveContainer">
                    <img src="./cave/caveBg.jpg" alt="" className='caveBg' />
                    <img src="./cave/topCaveVignetteMargin.png" alt="" className='topCave' />
                    <img src="./cave/bottomCave.png" alt="" className='bottomCave' />
                </div>
                <div className="projectsMain panel">
                    {waveEffect('Featured Website Proyects')}
                    <p className="textGlow">Behold the evolution I've been through over time! At the start, we're talking basic HTML -
                        you know, those 'learning' days, the web equivalent of baby steps. But hang on, the magic's
                        coming! Brace yourself for websites born from the ashes, rising each time, stronger and fancier!
                        Click those images to unveil the chronicles of my coding escapades – each one crazier than the last!</p>
                </div>
                <div className="panel">
                    <div className="projectItem">
                        <img src='./uku.jpg' />
                        <div>
                            <strong>Ukulele Project</strong>
                            <p>Project Description</p>
                        </div>
                    </div>
                </div>
                <div className="panel">
                    <div className="projectItem">
                        <img src='./quiz.jpg' className='breathAnimationY animation4' />
                        <div>
                            <strong>Ukulele Project</strong>
                            <p>Project Description</p>
                        </div>
                    </div>
                </div>
                <div className="panel">
                    <div className="projectItem">
                        <img src='./fakeIkea.jpg' className='breathAnimationY animation2' />
                        <div>
                            <strong>Ukulele Project</strong>
                            <p>Project Description</p>
                        </div>
                    </div>
                </div>
                <div className="panel">
                    <div className="projectItem">
                        <img src='./oldPortfolio.jpg' className='breathAnimationY animation3' />
                        <div>
                            <strong>Ukulele Project</strong>
                            <p>Project Description</p>
                        </div>
                    </div>
                </div>
                <div className="panel">
                    <div className="projectItem">
                        <img src='./treeStore.jpg' className='breathAnimationY animation1' />
                        <div>
                            <strong>Ukulele Project</strong>
                            <p>Project Description</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lastContainer">Last Container</div>
        </main >
    );
}
