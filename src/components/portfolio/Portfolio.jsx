import React from 'react'
import './portfolio.css'

import KG from '../../assets/PDF Kerry Group Report.pdf'
import CN from '../../assets/CSU 33031 ASSIGNMENT 2 REPORT PDF.pdf'
import COVID from '../../assets/COVID Project.zip'
import DEMO1 from '../../assets/CS1013-DemoForBestProject-19.mp4'
import CC from '../../assets/Sem2 Essay PDF.pdf'
import DEMO2 from '../../assets/Video Presentation.mp4'
import CMM from '../../assets/Marketing.pdf'
import DANCE from '../../assets/dance.pdf'
import DEMO3 from '../../assets/gs vid.mp4'
import GYMS from '../../assets/gs.jpg'
import GYMSI from '../../assets/gsimg.pdf'
import CB from '../../assets/Hooligans.pdf'


import IMG1 from '../../assets/port1.jpg'
import IMG2 from '../../assets/port2.jpg'
import IMG3 from '../../assets/port3.jpg'
import IMG4 from '../../assets/port4.jpg'
import IMG5 from '../../assets/port5.jpg'
import IMG6 from '../../assets/port6.jpg'
import IMG7 from '../../assets/port7.jpg'
import IMG8 from '../../assets/port8.jpg'
import IMG21 from '../../assets/port21.jpg'
import IMG22 from '../../assets/lein.jpg'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
            <h3>Microsoft Pneumothorax Detection Software</h3>
            <small>A machine learning algorithm that can detect the presence of pneumothorax in X-Ray images</small>
            <br/>
            <br/>
            <br/>
            <div className="portfolio__item-cta">
              <a href="https://github.com/cianmawhinney/microsoft-pneumothorax-classifier" className='btn' target='_blank'>Repository</a>
              <a href="https://pneumothorax.mawh.in/index.html" className='btn btn-primary' target='_blank'>Website</a>
            </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG21} alt="" />
          </div>
          <h3>DANCE - Detection of ANti-patterns in a C++ Environment </h3>
          <small>Managed a team of students to develop a software capabe of detecting anti-patterns
            in a large C++ codebase using the Clang framework. Project done in collaboration with Cisco
          </small>
          <div className="portfolio__item-cta">
            <a href="https://github.com/DylanFitzpatrick01/detect-antipatterns" className='btn' target='_blank'>Repository</a>
            <a href={DANCE} className='btn btn-primary' download>Download Report</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={GYMS} alt="" />
          </div>
          <h3>Gymshark Marketing Campaign </h3>
          <small>Co-ordinated a small team to create an advertising campaign for Gymshark for entry into the 'D & AD New Blood Awards'. 
            Designed branding, edited advertising and built mockups for the project
          </small>
          <br/>
          <br/>
          <div className="portfolio__item-cta">
            <a href={DEMO3} className='btn btn-primary' download>View Advertisement</a>
            <a href={GYMSI} className='btn btn-primary' download>Brief Summary</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>GitHub Productivity Measurer</h3>
          <small>A productivity measuring software that determines the productivity of a 
            software team through the repository they've been working on</small>
            <br/>
            <br/>
          <div className="portfolio__item-cta">
            <a href="https://github.com/jawood25/Software-Enginerring-Main-Project-Group-1" className='btn' target='_blank'>Repository</a>
            <a href="https://group1-performance-measurer.herokuapp.com" className='btn btn-primary' target='_blank'>Website</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
            <h3>Kerry Group: Fundamental Equity Analysis</h3>
            <small>A fundamental analysis of Kerry Group and an assessment on their potential investment appeal</small>
            <br/>
            <br/>
            <div className="portfolio__item-cta">
              <a href={KG} className='btn btn-primary' download>Download Report</a>
            </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
            <h3>Computer Networks: Flow Forwarding Network Using an SD-WAN Overlay</h3>
            <small>Basic implementation of a small network with the use of a controller, forwarding tables and various routers and hosts</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/elliot-lyons/comp-networks-assmt-2" className='btn' target='_blank'>Repository</a>
              <a href={CN} className='btn btn-primary' download>Download Report</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>US COVID-19 Analysis Software</h3>
          <small>Basic COVID-19 Webapp that displays COVID case data in the US in the year 2020</small>
          <br/>
          <br/>
          <div className="portfolio__item-cta">
            <a href={COVID} className='btn' download>Source Code</a>
            <a href={DEMO1} className='btn btn-primary' download>View Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>Climate Change: The Promises and Perils of Strategic Cognition</h3>
          <small>A brief paper highlighting the various cognitive challenges poised by Climate Change</small>
          <div className="portfolio__item-cta">
            <a href={CC} className='btn btn-primary' download>Download Paper</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG7} alt="" />
          </div>
          <h3>TransLink Bus Route Planner</h3>
          <small>A simple navigation application that guides the user along an appropriate bus route (using the Canadian bus route service)</small>
          <div className="portfolio__item-cta">
            <a href="https://github.com/elliot-lyons/alg-and-data-structures-2-project" className='btn' target='_blank'>Repository</a>
            <a href={DEMO2} className='btn btn-primary' download>View Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG8} alt="" />
          </div>
            <h3>Contemporary Marketing Management Issues Faced in Rolex</h3>
            <small>A mock speech directed towards the top management team in Rolex highlighting the various challenges digitalisation creates</small>
            <div className="portfolio__item-cta">
              <a href={CMM} className='btn btn-primary' download>Download Paper</a>
            </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG22} alt="" />
          </div>
            <h3>A Hooligan's Game</h3>
            <small>A paper scrutinising the difference in consumer experience found at rugby and football matches</small>
            <br/>
            <br/>
            <br/>
            <div className="portfolio__item-cta">
              <a href={CB} className='btn btn-primary' download>Download Paper</a>
            </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio