
import hhsLogo from '../../assets/hhs-logo.png';
import ExternalLink from '../../components/ExternalLink';
import ContactLinks from './ContactLinks';
import References from './References';

export default function Footer() {

    return (
        <div className="bg-gray-200 p-12">
            <div className="grid grid-cols-12">
                <div className="col-span-1">
                    <img src={hhsLogo} alt="HHS Logo" className="w-12" />
                </div>
                <div className="col-span-11 text-black p-6">
                    <p>ReproductiveRights.gov</p>
                    <p><strong>An official website of the &nbsp;
                        <span className="inline"><ExternalLink label="Department of Health and Human Services" path="https://hhs.gov/" /></span>
                    </strong>
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
