
import flag from '../../assets/usa-flag.png';

import Disclaimer from './Disclaimer';


export default function Header() {

    return (

        <div className="top-0 block w-full max-h-fit h-96 bg-white z-10">
            <Disclaimer />
            <div className="w-full h-12 bg-gray-500">
                <div className="bg-gray w-full grid grid-cols-12">
                    <span className="col-span-12 md:col-span-6 lg:col-span-3 inline-flex m-3 text-xs">
                        <img src={flag} alt="USA flag icon" className="w-16 mr-3" />
                        <p>A reproduction of an official website of the United States government</p>
                        <p className="text-blue-800">Counteracting Musk</p>
                    </span>
                    <div className="col-span-12 md:col-span-6  lg:col-span-3 inline m-3 text-blue-950 hover:text-blue-500">
                        <p className="text-xs md:text-sm xl:text-base">Please see below for links and screenshots for where this information came from</p>
                    </div>
                </div>
            </div>
        </div>

    )
}
