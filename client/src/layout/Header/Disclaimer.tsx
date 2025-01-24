
import hybridLogo from '../../assets/blm-rrgus-logo-simple.png'


export default function Disclaimer() {


    return (
        <div className="mb-12">
            <div className="grid grid-cols-2 bg-blue-300">
                <div className="col-span-2 md:col-span-1">
                    <p className="text-purple text-3xl font-bold">Your Reproductive rights</p>
                    <p className="text-purple text-sm font-bold">This is salvaging from the internet archives</p>
                </div>
                <div className="col-span-2 md:col-span-1">
                    <img
                        className="float-right w-36 -top-36"
                        src={hybridLogo}
                        alt="Hybrid Logo - Borrowed Lines Media and DHHS"
                    />
                </div>
            </div>
            <div className="p-6 text-center w-full h-fit border border-blue-950">
                <p>*** OFFICIAL CONTENT STARTS HERE ***</p>
            </div>
        </div>

    )
}