import React from 'react'
import './Mywork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from "../../assets/mywork_data"
import arrow_icon from '../../assets/arrow_icon.svg'

const Mywork = () => {
  return (
    <div id='mywork' className='mywork'>
        <div className="mywork-title">
            <h1>My latest works</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="mywork-container">
            {mywork_data.map((work, index) => {
                return <div key={index} className='mywork-image'><a href={work.w_link}><img src={work.w_img} alt="" /></a></div>
            })
        }
        </div>
        <div className="mywork-readmore" style={{marginBottom: "50px"}}>
            <p>Showmore</p>
            <img src={arrow_icon} alt="" />
        </div>
    </div>
  )
}

export default Mywork