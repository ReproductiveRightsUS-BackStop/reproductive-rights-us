
import hybridLogo from '../../assets/blm-rrgus-logo-simple.png'


export default function Disclaimer() {


    return (
        <div className="mb-2">
            <div className="grid grid-cols-2 bg-blue-300 p-2 md:p-6">
                <div className="col-span-2 md:col-span-1">
                    <p className="text-purple lg:text-3xl font-bold ">Your Reproductive rights</p>
                    <p className="text-purple text-xs lg:text-sm font-bold">This is salvaging from the internet archives</p>
                </div>
                <div className="col-span-2 md:col-span-1">
                    <img
                        className="float-right w-12 -top-12 lg:w-36 lg:-top-36"
                        src={hybridLogo}
                        alt="Hybrid Logo - Borrowed Lines Media and DHHS"
                    />
                </div>
            </div>
            <div className="p-2 text-xs md:text-sm lg:text-base  text-center w-full h-fit border border-blue-950">
                <p>*** OFFICIAL CONTENT STARTS HERE ***</p>
            </div>
        </div>

    )
}