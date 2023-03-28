import React, { useContext } from "react";
import { GlobalDataContext } from '../../../context/context'
import { BsCalendar4Range, BsClockHistory } from 'react-icons/bs'
import Navmenu from './NavMenu'
import { FaRegEnvelope } from "react-icons/fa";
import { FiPhoneCall, FiMapPin } from "react-icons/fi";



const HeaderSeven = () => {

    const { rpdata } = useContext(GlobalDataContext)

    return (
        <header className='absolute w-full h-auto z-[15]'>
            <div className='hidden md:flex mx-auto w-full bgColor2'>
                <div className=' w-full md:w-1/2 flex p-2'>
                    <ul className="flex w-full justify-center md:justify-start space-x-7 pr-5">
                        {rpdata?.dbSocialMedia?.redes.map((item, index) => {
                            return (
                                <li key={index} className="text-white">
                                    <a href={item.url} target="_blank" rel='noopener noreferrer'>
                                        <i
                                            className={`fab fa-${item.icon}`}
                                            aria-hidden="true"
                                        />
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className='hidden md:flex w-1/2 p-1'>
                    <ul className="flex w-full justify-end space-x-7 pr-5 text-white">
                        <a href={`mailto:${rpdata?.dbPrincipal?.emails[0].email}`}>
                            <li className=" flex items-center">
                                <FaRegEnvelope fontSize={15} />
                                <span className="pl-3">
                                    {rpdata?.dbPrincipal?.emails[0].email}
                                </span>
                            </li>
                        </a>
                        {
                            rpdata?.dbPrincipal?.phones.map((phone, index) => {
                                return (
                                    <a href={`tel:+1${phone.phone}`} key={index}>
                                        <li className=" flex items-center">
                                            <FiPhoneCall fontSize={15} />
                                            <span className="pl-3">
                                                {phone.phone}
                                            </span>
                                        </li>
                                    </a>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className='flex flex-col mx-auto w-full justify-center items-center bg-white'>
                <div className='w-4/5 flex '>
                    <div className='w-full md:w-[35%] lg:w-[22%] py-2'>
                        <img
                            src={rpdata?.dbPrincipal?.logo}
                            alt='logo'
                            loading='lazy'
                            className='w-[100%] mx-auto '
                        />
                    </div>
                    <div className='hidden lg:flex mx-auto justify-end space-x-3 px-5 items-center md:w-[65%] lg:w-[70%]'>
                        <div className='flex space-x-4 w-1/3 items-center text-black'>
                            <div className='w-[15%] bgColor1 items-center justify-center flex h-[45px] rounded-lg'>
                                <FiMapPin color='white' fontSize={30} />
                            </div>
                            <div>
                                <p className='-mb-3'>Location</p>
                                <h5 className='text-[21px]'>
                                    {rpdata?.dbPrincipal?.location?.[0]?.address}
                                </h5>
                            </div>
                        </div>
                        <div className='flex space-x-4 w-1/3 items-center text-black'>
                            <div className='w-[15%] bgColor1 items-center  flex h-[45px] justify-center rounded-lg'>
                                <BsCalendar4Range color='white' fontSize={30} />
                            </div>
                            <div>
                                <p className='-mb-3'>Workdays</p>
                                <h5 className='text-[21px]'>
                                    {rpdata?.dbPrincipal?.workdays?.[0]?.day}
                                </h5>
                            </div>
                        </div>
                        <div className='flex space-x-4 w-1/3 items-center text-black'>
                            <div className='w-[15%] bgColor1 items-center justify-center flex h-[45px] rounded-lg'>
                                <BsClockHistory color='white' fontSize={30} />
                            </div>
                            <div>
                                <p className='-mb-3'>Work Hours</p>
                                <h5 className='text-[21px]'>
                                    {rpdata?.dbPrincipal?.workHours?.[0]?.hour}
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' bg1 w-full md:w-4/5 flex items-center self-center z-50 lg:-mb-8 p-2'>
                    <nav className='md:w-full w-[15%] h-full '>
                        <Navmenu />
                    </nav>
                    
                    <div className=' md:hidden flex md:w-1/2 w-[80%] h-full '>
                        <ul className="flex w-full justify-end md:justify-start space-x-7 pr-5">
                            {rpdata?.dbSocialMedia?.redes.map((item, index) => {
                                return (
                                    <li key={index} className="text-white">
                                        <a href={item.url} target="_blank" rel='noopener noreferrer'>
                                            <i
                                                className={`fab fa-${item.icon}`}
                                                aria-hidden="true"
                                            />
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    
                </div>
            </div>

        </header>
    )
}

export default HeaderSeven