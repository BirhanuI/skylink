import logo from './../assets/logo.jpg'
import logo2 from './../assets/logo2.jpg'
import logo3 from './../assets/logo3.png'
import logo4 from './../assets/logo4.jpg'
import logo5 from './../assets/logo5.jpg'
import logo6 from './../assets/logo6.jpg'
import logo10 from './../assets/logo10.png'
import logo9 from './../assets/logo9.png'
import logo7 from './../assets/logo7.png'

const OurClients = () => {
    const logos = [{icon:logo,},{icon:logo2},{icon:logo3},{icon:logo4},{icon:logo5},{icon:logo6},{icon:logo10},{icon:logo9},{icon:logo7}]
    return ( <div className=" w-full mb-10">
        <h1 className='text-4xl text-center p-10 '>Our Clients</h1>
        <div className="flex flex-wrap justify-center md:gap-20 gap-5">{logos.map((item,index)=>{return <img key={index} className="md:h-32 h-20 rounded-2xl duration-200 hover:shadow-2xl hover:scale-110" src={item.icon} alt="logo"/>})}</div>
    </div> );
}
 
export default OurClients;