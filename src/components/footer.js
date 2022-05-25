export const Footer = (props) => {
  console.log(props.data)
  return (
    <div>
      <div id='footer'>
        <div className='container text-center'>
          {/* <p>
            &copy; 2022 created by Jessica Liu
          </p> */}
          <img src={props.data.img}></img>
        </div>
      </div>
    </div>
  )
}
