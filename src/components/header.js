import ParticlesBg from "particles-bg";
import graph from "../header.png"

export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        {/* <ParticlesBg type="circle" bg={{zIndex: 0, position:"absolute", top:0}} /> */}
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 intro-text'>
                <div className="left">
                  <h1>
                    {props.data ? props.data.title : 'Loading'}
                    <span></span>
                  </h1>
                  <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                  <a
                    href='https://carbonet.netlify.app/'
                    className='btn btn-custom btn-lg page-scroll'
                    // onClick={window.location.href = 'http://localhost:3000/'}
                  >
                    Start Now
                  </a>{' '}
                  <a
                    href='#demo'
                    className='btn btn-demo btn-lg page-scroll'
                  >
                  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                  <span class="material-symbols-outlined" id="play-icon"> play_circle </span>
                    Watch Demo
                  </a>{' '}
                </div>
                <div className="graph"><img src={graph} /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
