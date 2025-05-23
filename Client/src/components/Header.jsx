import { useContext } from 'react'
import { assets, img_assets } from '../assets/assets'
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const { user, setShowLogin } = useContext(AppContext);
    const navigate = useNavigate();
    const onClickHandler = () => {
        if (user) {
            navigate('/Result')
        } else {
            setShowLogin(true);
        }
    }

    return (
        <motion.div className='flex flex-col justify-center items-center text-center my-20 sliders-container'
            initial={{ opacity: 0.2, y: 100 }} transition={{ duration: 1 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        >

            <motion.div className='flex text-left mt-20'>
                <div>
                    <motion.h1 className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 font-serif'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 2 }}
                    >From <span className='text-teal-500'>Text</span> to Stunning Visuals</motion.h1>


                    <p className=' max-w-xl mx-auto mt-10 text-xl'>Turn your imagination into stunning AI-generated art. Just type a description — watch powerful AI bring your ideas to life in seconds.</p>

                    <motion.button onClick={onClickHandler} className='sm:text-lg text-white w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-lg bg-gradient-to-r from-green-400 to-teal-500'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ default: { duration: 0.5 }, opacity: { delay: 0.8, duration: 1 } }}
                    >
                        Generate image
                        <img className='h-6' src={assets.star_group} />
                    </motion.button>
                </div>

            </motion.div>




            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className='mt-20 text-2xl '>Generated image from Pictora</motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className='flex mt-16 gap-3 flex-wrap justify-center'>

                {img_assets.map((item, index) => (
                    <motion.img
                        key={index}
                        src={item}
                        alt={`img-${index}`}
                        width={300}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.1 }}
                        className="rounded cursor-pointer transition-all duration-300 hover:scale-105 max-sm:w-10"
                    />
                ))}
            </motion.div>

        </motion.div>
    )
}

export default Header