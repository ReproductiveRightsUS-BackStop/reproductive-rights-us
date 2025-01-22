
import hhsLogo from '../../assets/hhs-logo.png';
import ContactLinks from './ContactLinks';
import References from './References';


export default function Footer() {



    return (
        <div className="bottom-0 w-full bg-gray-200 w-ful h-fit p-12 relative top-24">
            <p>Footer</p>
            <div className="grid grid-cols-12">
                <div className="col-span-2">
                    <img src={hhsLogo} alt="HHS Logo" />
                </div>
                <div className="col-span-10 text-black">
                    <p>
                        ReproductiveRights.gov
                        <strong>An official website of the </strong><a>Department of Health and Human Services</a>
                    </p>
                </div>

            </div>
            <hr className="bg-black h-2 my-3" />
            <ContactLinks />
            <hr className="bg-black h-2 my-3" />
            <div>
                <p>
                    Note that the inclusion of external hyperlinks does not constitute endorsement or recommendation by the
                    U.S. Government or HHS of the linked web resources or the information, products,
                    or services contained therein. This graphic notice means that you are leaving the ReproductiveRights.gov site.
                    HHS does not exercise any control over the content on external sites. You will be subject to that site's
                    privacy policy when you leave ReproductiveRights.gov.
                </p>
            </div>
            <br />
            <p className="bg-white text-gray-700 p-3">*** END OF OFFICIAL CONTENT ***</p>
            <hr className="bg-black h-2 my-3" />
            <br />
           <References />
        </div>
    )
}
