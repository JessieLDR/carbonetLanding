import {footerImg} from "../footerIcon.png";

export const Footer = (props) => {
<<<<<<< HEAD
=======
  console.log(props.data)
>>>>>>> 30420d31b7ba9ee81bcd8df4644c1299d9356b83
  return (
    <div>
      <div id='footer'>
        <div className='container text-center'>
<<<<<<< HEAD
          <image src = "../footerIcon.png"></image>
          <p>
            &copy; 2022 created by Carbonet
          </p>
=======
          {/* <p>
            &copy; 2022 created by Jessica Liu
          </p> */}
          <img src={props.data.img}></img>
>>>>>>> 30420d31b7ba9ee81bcd8df4644c1299d9356b83
        </div>
      </div>
    </div>
  )
}
