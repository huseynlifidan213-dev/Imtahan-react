import React from 'react'
import sekil4 from '../../assets/sekil4.png'

const About = () => {
    return (
        <div className='flex justify-center'>
            <div className="w-[90%] h-[100vh] flex justify-between items-center">
                <div className="w-[50%] h-[90%] pl-[30px]">
                    <img src={sekil4} alt="sekil" />
                </div>
                <div className="w-[45%] h-[90%] pl-[20px] flex flex-col gap-[20px] pr-[30px]">
                    <h1 className='text-[40px] font-semibold'>Nombre del producto</h1>
                    <p className='text-[#828282] text-[24px] font-normal'>Subtítulo</p>
                    <p className='text-[24px]'>10,99 $</p>
                    <p className='text-[#828282] text-[20px]'>Cuerpo del texto para describir qué es este producto <br></br>y por qué es una compra imprescindible.</p>
                    <button className='bg-[#000000] text-[#FFFFFF] rounded-[8px] w-[520px] h-[46px]'>Añadir al carrito</button>
                </div>

            </div>
        </div>
    )
}

export default About