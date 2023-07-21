import React from 'react'

export default function Qualification() {
  return (
    <section className="section_qualification" id="blog">
      <div>
        <h1 className="h1">Qualification</h1>
        <p className="text-gray-1">My personal journey</p>
      </div>
      <div>
        <div>
          <svg id="hat-svg" width="36" height="31">
            <use xlinkHref="/css/sprite.svg#hat-svg" />
          </svg>
          <h2 className="h2">Education</h2>
        </div>
        <div>
          <svg id="bag-svg" width="27" height="31">
            <use xlinkHref="/css/sprite.svg#bag-svg" />
          </svg>
          <h2 className="h2">Experience</h2>
        </div>
      </div>
      <div>
        <div className="line">
          <span className="round"></span>
          <span className="round"></span>
          <span className="round"></span>
          <span className="round"></span>
        </div>
        <div className="card-3 left">
          <div>
            <h2 className="h2">scientific secondary school diploma</h2>
            <p className="h2 gray-5">CPAP, Lome-Togo</p>
          </div>
          <span className="text-gray-2">
            <svg id="calendar" width="18" height="18">
              <use xlinkHref="/css/sprite.svg#calendar" />
            </svg>
            2017-2018
          </span>
        </div>
        <div className="card-3 right">
          <div>
            <h2 className="h2">company internship</h2>
            <p className="h2 gray-5">Tixpros, Lome-Togo</p>
          </div>
          <span className="text-gray-2">
            <svg id="calendar" width="18" height="18">
              <use xlinkHref="/css/sprite.svg#calendar" />
            </svg>
            Oct 2021 - Dec 2021
          </span>
        </div>
        <div className="card-3 left">
          <div>
            <h2 className="h2">Bachelor in Application Development</h2>
            <p className="h2 gray-5">Lome-Togo</p>
          </div>
          <span className="text-gray-2">
            <svg id="calendar" width="18" height="18">
              <use xlinkHref="/css/sprite.svg#calendar" />
            </svg>
            2022-2023
          </span>
        </div>
        <div className="card-3 right">
          <div>
            <h2 className="h2">Freelance</h2>
            <p className="h2 gray-5">Lome-Togo</p>
          </div>
          <span className="text-gray-2">
            <svg id="calendar" width="18" height="18">
              <use xlinkHref="/css/sprite.svg#calendar" />
            </svg>
            2022 - now
          </span>
        </div>
      </div>
    </section>
  )
}
