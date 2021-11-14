import logo from '../assets/logo.png'
import '../styles/Banner.css'


function Banner(){

    const title = 'La maison jungule'
    const currentMonth = new Date().getMonth()
    const isSpring = currentMonth >= 2  && currentMonth <= 5
    console.log(currentMonth +1)

    const recommentdation = isSpring ? (
        <div> C'est le pritemps, rempotez</div>
    ) :(
        <div> Ce n'est apas le moment de rempotez !</div>
    )

    return (
     <div className='lmj-banner'>
            <div className='lmj-banner-row'> 
                <img src={logo}  alt='La maison jungule' className='lmj-logo'/>
                <h1 className='lmj-title'> {title} </h1>
            </div>
            {recommentdation}
      </div>
    )
}

export default Banner