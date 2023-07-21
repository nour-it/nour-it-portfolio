import React from 'react'

export default function Skills() {
  return (
    <section className="section_skills" id="skills">
      <div>
        <h1 className="h1">Skills</h1>
        <p className="text-gray-1">My technical level</p>
      </div>
      <div>
        <div className="card-1 border"><img src="/img/figma.png" alt="" />
          <p className="text-black-3">Figma</p><span className="text-gray-3">UI Design, Prototype</span>
        </div>
        <div className="card-1 border"><img src="/img/react.svg" alt="" height="50px"/>
          <p className="text-black-3">ReactJS + React Native</p><span className="text-gray-3">Front-end developpement</span>
        </div>
        <div className="card-1 border">
          <div><img src="/img/mysql.png" alt="" height="50px"/><img src="/img/postgres.png" alt="" height="50px"/></div>
          <p className="text-black-3">Mysql + Postgres</p><span className="text-gray-3">Databases</span>
        </div>
        <div className="card-1 border">
          <div><img src="/img/php.png" alt="" height="50px"/><img src="/img/nodejs.png" alt="" height="50px"/></div>
          <p className="text-black-3">Php + NodeJS</p><span className="text-gray-3">Server-side languages</span>
        </div>
        <div className="card-1 border"><img src="/img/html.png" alt=""/>
          <p className="text-black-3">HTML 5</p><span className="text-gray-3">Structural Design</span>
        </div>
        <div className="card-1 border">
          <div><img src="/img/css.png" alt=""/><img src="/img/scss.png" alt="" height="60px"/></div>
          <p className="text-black-3">CSS 3 + SCSS</p><span className="text-gray-3">Style Design</span>
        </div>
        <div className="card-1 border"><img src="/img/laravel.svg" alt=""/>
          <p className="card-1 text-black-3">Laravel</p><span className="text-gray-3">Frameworks and libraries</span>
        </div>
        <div className="card-1 border"><img src="/img/vscode.png" alt=""/>
          <p className="text-black-3">VS Code</p><span className="text-gray-3">Code Editor</span>
        </div>
        <div className="card-1 border"><img src="/img/git.png" alt="" width="100px"/>
          <p className="text-black-3">Git</p><span className="text-gray-3">Version control</span>
        </div>
      </div>
    </section>
  )
}
