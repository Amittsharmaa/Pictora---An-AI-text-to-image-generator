import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex justify-between items-center gap-4 py-3 mt-20 pb-5'>
        <img src= {assets.logo_icon} alt="" />
        <p className='text-4xl text-white font-bold'>Pictora</p>
        <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-400 max-sm:hidden'>Copywright @ DevSharma | All right reserved.</p>

        <div className='flex gap-3.5 cursor-pointer'>
            <img src={assets.facebook_icon}alt="" width={35} style={{backgroundColor: 'white', borderRadius: '50%'}}/>
            <img src={assets.twitter_icon}alt="" width={35} style={{backgroundColor: 'white', borderRadius:'50%' }}/>
            <img src={assets.instagram_icon}alt="" width={35} style={{backgroundColor: 'white', borderRadius: '50%'}}/>
        </div>
    </div>
  )
}

export default Footer