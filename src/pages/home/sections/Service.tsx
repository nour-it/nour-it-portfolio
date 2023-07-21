import React from 'react'

export default function Service() {
  return (
    <section className="section_service" id="service">
      <div>
        <h1 className="h1">Service</h1>
        <p className="text-gray-1">What i offer</p>
      </div>
      <div>
        <div className="border rounded">
          <svg id="web-svg" width="30" height="30">
            <use xlinkHref="/css/sprite.svg#web-svg" />
          </svg>
          <h2 className="h2">Web Designer</h2>
          <div>
            <span className="text-gray-2">view more</span>
            <svg id="arrow-right-svg" width="15" height="15">
              <use xlinkHref="/css/sprite.svg#arrow-right-svg" />
            </svg>
          </div>
        </div>
        <div className="border rounded">
          <svg id="code-svg" width="37" height="37">
            <use xlinkHref="/css/sprite.svg#code-svg" />
          </svg>
          <h2 className="h2">Full-stack development</h2>
          <div>
            <span className="text-gray-2">view more</span>
            <svg id="arrow-right-svg" width="15" height="15">
              <use xlinkHref="/css/sprite.svg#arrow-right-svg" />
            </svg>
          </div>
        </div>
        <div className="border rounded">
          <svg id="edit-svg" width="29" height="29">
            <use xlinkHref="/css/sprite.svg#edit-svg" />
          </svg>
          <h2 className="h2">Mobile app development</h2>
          <a href="#">
            <span className="text-gray-2">view more</span>
            <svg id="arrow-right-svg" width="15" height="15">
              <use xlinkHref="/css/sprite.svg#arrow-right-svg" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
