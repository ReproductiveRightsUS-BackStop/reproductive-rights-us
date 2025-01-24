
import flag from '../../assets/usa-flag.png';
import govLogo from '../../assets/hhs-logo.png';
import { Link } from 'react-router-dom';
import Disclaimer from './Disclaimer';


export default function Header() {


    return (
        <>
            <div className="w-full h-fit">
                <Disclaimer />
                <nav className="w-full h-12 bg-gray-500">
                    <div className="bg-gray w-full grid grid-cols-12">
                        <span className="col-span-12 md:col-span-6 lg:col-span-3 inline-flex m-3 text-xs">
                            <img src={flag} alt="USA flag icon" className="w-16 mr-3" />
                            <p>A reproduction of an official website of the United States government</p>
                            <p className="text-blue-800">Counteracting Musk</p>
                        </span>

                        <div className="col-span-12 md:col-span-6  lg:col-span-3 inline m-3 text-blue-950 hover:text-blue-500">
                            <p>Please see below for links and screenshots for where this information came from</p>
                        </div>
                    </div>
                    <div className="mt-3" >
                        <Link to={'/'}>
                            <div className="inline-flex float-left">
                                <img src={govLogo} alt="Reproductive Rights USHSS Logo" className="w-12 mr-6" />
                                <h1 className="text-blue-950 font-bold mt-3 text-xl">REPRODUCTIVE <span className="font-normal">RIGHTS.</span><span className="text-gray-400 font-normal">GOV</span></h1>
                            </div>
                        </Link>
                    </div>
                    <div className="float-right inline-flex">
                        <a href="#reproductive-rights">
                            <p className="mx-3 p-3 text-blue-500 hover:text-blue-900 hover:bg-gray-300 rounded-lg">Your Rights</p>
                        </a>
                        <Link to={'/emergency-care'}>
                            <p className="mx-3 p-3 text-blue-500 hover:text-blue-900 hover:bg-gray-300 rounded-lg">Emergency Care</p>
                        </Link>
                    </div>
                </nav >
            </div>
        </>
    )
}
