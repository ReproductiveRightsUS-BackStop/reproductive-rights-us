
import govLogo from '../assets/hhs-logo.png'
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <nav className="w-full h-36 min-h-fit bg-white sticky top-0 md:p-6 mt-12 z-10 ">
            <div className="mt-3 w-full  z-9">
                <Link to={'/reproductive-rights-us'}>
                <a href="#main-area">
                    <div className="inline-flex float-left">
                        <img src={govLogo} alt="Reproductive Rights USHSS Logo" className="w-8 h-8 translate-y-3 lg:w-12 mr-3" />
                        <h1 className="text-blue-950 font-bold mt-3 text-xl">REPRODUCTIVE <span className="font-normal">RIGHTS.</span><span className="text-gray-400 font-normal">GOV</span></h1>
                    </div>
                    </a>
                </Link>
            </div>
            <div className="float-right inline-flex h-fit mb-24 bg-white w-full">
                <a href="#reproductive-rights">
                    <p className="mx-3 p-3 text-blue-500 hover:text-blue-900 hover:bg-gray-300 rounded-lg">Your Rights</p>
                </a>
                <Link to={'/emergency-care'}>
                    <p className="mx-3 p-3 text-blue-500 hover:text-blue-900 hover:bg-gray-300 rounded-lg">Emergency Care</p>
                </Link>
            </div>
        </nav>
    )
}