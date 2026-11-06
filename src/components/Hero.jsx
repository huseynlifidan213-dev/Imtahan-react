import React from 'react'
import image from './/..//assets/Image.png'


const Hero = () => {
  return (
    <div className='flex justify-center'>
        <div className="w-[90%] h-auto flex flex-col justify-center">
            <div className="w-[60%] h-[200px] flex flex-col gap-[20px] pl-[40px] pb-[10px]">
                <h1 className='text-[62px] font-semibold leading-[100%] tracking-[-2%]'>Título de la página de inicio</h1>
                <p className='text-[#000000BF] text-[18px] font-normal'>Subtítulo que establece el contexto, comparte más información sobre el sitio web o, en general,<br/> motiva a la gente a seguir navegando.</p>
                <button className='w-[80px] min-h-[40px] border border-solid border-black rounded-[8px] bg-[#000000] text-[#FFFFFF]'>Botón</button>
            </div>
            <div className="w-[88%] h-auto pl-[40px] pt-[15px]">
                <img src={image} alt="sekil" className='bg-cover w-[100%]'/>
            </div>
            <div className="w-[40%] h-auto pl-[40px] pt-[20px]">
                <h1 className='text-[42px] font-semibold'>Encabezado de sección</h1>
            </div>
        </div>
    </div>
  )
} 

export default Hero