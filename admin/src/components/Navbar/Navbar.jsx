import {assets} from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='flex flex justify-between items-center p-2 max-h-1/8 z[20]'>
      <img src={assets.logo} className='w-18 max-h-12' />
      <img src={assets.profile_image} className='w-10 max-h-14'/>
    </div>
  )
}

export default Navbar
