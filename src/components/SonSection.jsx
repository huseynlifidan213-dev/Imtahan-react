import React from 'react'
import sekil1 from './/..//assets/sekil1.png'
import sekil2 from './/..//assets/sekil2.png'
import sekil3 from './/..//assets/sekil3.png'
import { Link } from 'react-router-dom'

const SonSection = () => {
    return (
        <div className='flex justify-center'>
            <div className="w-[90%] h-[100vh] flex justify-center items-center">
                <div className="w-[96%] h-[90%] bg-white flex justify-between items-center">
                    <Link to="/about">
                        <div className="w-[400px] h-[610px] flex flex-col gap-[8px]">
                            <img src={sekil1} alt="sekil" className='bg-cover' />
                            <h3 className='text-[25px] font-medium'>Subtítulo</h3>
                            <p className='text-[#828282] text-[25px] font-normal'>Cuerpo del texto para lo que desees añadir adicionalmente al subtítulo. </p>
                        </div>
                    </Link>
                    <Link to="/about">
                        <div className="w-[400px] h-[610px]">
                            <img src={sekil2} alt="sekil" className='w-[450px]' />
                            <h3 className='text-[25px] font-medium pt-[8px]'>Subtítulo</h3>
                            <p className='text-[#828282] text-[25px] font-normal pt-[8px]'>Cuerpo del texto para lo que desees añadir adicionalmente al subtítulo. </p>
                        </div>
                    </Link>
                    <Link to="/about">
                        <div className="w-[400px] h-[610px]">
                            <img src={sekil3} alt="sekil" className='w-[450px]' />
                            <h3 className='text-[25px] font-medium pt-[8px]'>Subtítulo</h3>
                            <p className='text-[#828282] text-[25px] font-normal pt-[8px]'>Cuerpo del texto para lo que desees añadir adicionalmente al subtítulo. </p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SonSection