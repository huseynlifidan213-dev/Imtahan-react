import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-center'>
        <div className='w-[90%] h-[100px] flex justify-center items-center'>
            <div className="w-[96%] h-[60px] flex items-center justify-between">
                <h2 className='font-medium'>Nombre del sitio</h2>
                <div className="flex items-center gap-[20px]">
                    <nav>
                        <ul>
                            <li className='flex gap-[60px]  font-medium'>
                                <a href="#">Página</a>
                                <a href="#">Página</a>
                                <a href="#">Página</a>
                            </li>
                        </ul>
                    </nav>
                    <button className='w-[80px] h-[40px] border border-solid border-black rounded-[8px] bg-[#000000] text-[#FFFFFF]'>Botón</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header