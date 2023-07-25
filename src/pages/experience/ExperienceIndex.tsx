import React from 'react'
import NourContainer from '../../components/core/NourContainer'
import ExperienceHeader from '../../components/header/ExperienceHeader'
import HomeFooter from '../../components/footer/HomeFooter'
import NourIcon from '../../components/core/NourIcon'

const description = `
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, excepturi. Nam sunt omnis eos nemo. Officia quas quisquam accusamus? Distinctio omnis perferendis aut ipsum, alias nihil asperiores blanditiis ad quae.</p>
<img src="/img/client/user.jpg" alt="" />
`


export default function ExperienceIndex(props: any) {



  return (
    <NourContainer >
      <ExperienceHeader />
      <div className='experience'>
        <div className="card-3 right">
          <div>
            <h2 className="h2">company internship</h2>
            <a className="h2 gray-5" href="#">Tixpros, Lome-Togo</a>
          </div>
          <span className="text-gray-2">
            <NourIcon id="calendar" width="18" />
            Oct 2021 - Dec 2021
          </span>
        </div>
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </div>
      <HomeFooter />
    </NourContainer>
  )
}
