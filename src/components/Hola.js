// images
import portImg from '../images/pic3.png';
import animate from '../images/animate2.png';
import arc from '../images/arc.webp';
import hi from '../images/hi.png';
import banik from '../images/bane.png';
import katu from '../images/katu.png';



function Hola() {

  return (
    <div className='section-in'>
      <div className='box box-big-sq mid-left'>
        <div className='hi-icon'>
          <img src={hi} alt="logo" width='120%' />
        </div>
        <div>
          <h6>Hola I am </h6> 
          <h3> Lyusi </h3>
        </div>
      </div>
      <div className='box box-mid mid-down-left'>
        <div>Software developer</div>
        <div>REACT LOVER</div>
      </div>
      <div className='circle-mid mid-left-left circle'></div>
      <div className='circle-small pink mid-left-bottom circle'></div>
      <div className='circle-big bottom-left circle'></div>
      <div className='circle-mid pink bottom-right circle'></div>
      <div className='circle-big mid-mid-right animate__fadeIn animate__animated'>
        <img src={banik} width='100%'/>
        <div className='banik'></div>
      </div>
      <div className='circle-big mid-mid-left animate__fadeIn animate__animated'>
        <img src={katu} width='100%'/>
        <div className='katu'></div>
      </div>
      <div className='circle-inner circle-mid top-right'>
        <div className='circle-mid  black circle animate__fadeIn animate__animated'>
          <img src={animate} className="App-logo" alt="logo" width='120%' height='100%'/>
        </div>
        <p>animations</p>
      </div>
      <div className='circle-inner circle-big mid-right'>
        <div className='circle-big blueLight circle animate__fadeIn animate__animated'>
          <img src={arc} className="App-logo" alt="logo" width='100%'/>
        </div>
        <p>code architecture</p>
      </div>
      <div className="main-circle circle"></div>
      <div className='profile-wrapper'>
        <div className="profile-img animate__fadeIn animate__animated">
          <img src={portImg} className="App-logo" alt="logo" width='100%'/>
        </div>
      </div>
    </div>
  );
}

export default Hola;