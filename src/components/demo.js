import ReactPlayer from 'react-player'

export const Demo = (props) => {
    return (
      <div id = 'demo' className = 'text-center'>
        <div className = 'container'>
          <div className = "col-md-10 col-md-offset-1 section-title">
            <h2> Demo Video </h2>
          </div>
            <div className ='video' id = 'demo-video'>
            <ReactPlayer url = 'https://youtu.be/N_SbEswAa8A' width = "800px" height = "450px"/>
          </div>
        </div>
      </div>
)}
