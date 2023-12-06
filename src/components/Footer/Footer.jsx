import { Link } from "react-router-dom"
import { HiOutlineMail } from 'react-icons/hi'
import { FaFacebook } from "react-icons/fa";

export default function Footer () {
    return (
        <div className="w-full flex justify-between p-5">
            <div className="mb-2 flex-col">
                <div>
                    <div className="hover:underline"><Link to="about">About BARK</Link></div>
                    <div className="hover:underline"><Link to="/contactus">Donate</Link></div>
                </div>
                <div className="flex mt-5">
                    <div className="pr-2">
                        <a href="https://www.facebook.com/barkanimalrescue"  target="_blank" rel="noreferrer">
                            <FaFacebook size={30} />
                        </a>
                    </div>
                    <div>
                        <a href="mailto:longj1003@aol.com" className='flex justify-between items-center w-full'>
                            <HiOutlineMail size={30} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="text-xs w-[50%] h-auto self-end mb-3">
                <div className="inset-x-0 bottom-0 justify-end">Boudreaux’s Animal Rescue Krewe (B.A.R.K.) is a 501c(3) non-profit animal welfare organization and NO-KILL animal shelter in Alexandria.Louisiana.</div>
            </div>
        </div>
    )
}