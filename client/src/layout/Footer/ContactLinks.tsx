import ExternalLink from "../../components/ExternalLink";




export default function ContactLinks() {


    return (
        <>
            <div className="grid grid-cols-12">
                <div className="col-span-12 lg:col-span-4">
                    <h2 className="font-serif font-semibold">
                        HHS Resources
                    </h2>
                    <div className="text-sm font-sans">
                        <br />
                        <ExternalLink label={"About HHS"} path={"https://www.hhs.gov/about/index.html"} />
                        <br />
                        <ExternalLink label={" HHS FAQs"} path={"https://www.hhs.gov/answers/"} />
                        <br />
                        <ExternalLink label={" HHS Archive"} path={"https://www.hhs.gov/about/archive/index.html"} />
                        <br />
                        <ExternalLink label={"HHS Guidance Portal"} path={"https://www.hhs.gov/guidance/"} />
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-4">
                    <h2 className="font-serif font-semibold">
                        Policies & Support
                    </h2>
                    <div className="text-sm font-sans">
                        <br />
                        <ExternalLink label={"Accessibility"} path={"https://www.hhs.gov/web/policies-and-standards/hhs-web-policies/accessibility/index.html"} />
                        <br />
                        <ExternalLink label={"FOIA requests"} path={"https://www.hhs.gov/foia/"} />
                        <br />
                        <ExternalLink label={" No FEAR Act Data"} path={"https://www.hhs.gov/about/agencies/asa/eeo/resources/no-fear-act/index.html"} />
                        <br />
                        <ExternalLink label={"Office of Inspector General"} path={"https://oig.hhs.gov/"} />
                        <br />
                        <ExternalLink label={"Performance Reports"} path={"https://www.hhs.gov/about/budget/index.html"} />
                        <br />
                        <ExternalLink label={"Privacy Policy"} path={"https://www.hhs.gov/privacy.html"} />
                        <br />
                        <ExternalLink label={"Vulnerability Disclosure Policy"} path={"https://www.hhs.gov/vulnerability-disclosure-policy/index.html"} />
                        <br />
                        <ExternalLink label={"Viewers & Players"} path={"https://www.hhs.gov/web/policies-and-standards/hhs-web-policies/plugins/index.html"} />
                        <br />
                    </div>

                </div>
                <div className="col-span-12 lg:col-span-4">
                    <h2 className="font-serif font-semibold">
                        Contact Info
                    </h2>
                    <p>200 Independence Ave., S.W.</p>
                    <p>Washington, DC 20201 </p>
                    <br />
                    <ExternalLink label={"1-877-696-6775"} path={"tel:1-877-696-6775"} />
                    <br />
                    <ExternalLink label={"Contact Us"} path={"https://www.hhs.gov/about/contact-us/index.html"} />
                    <br />
                    <h2 className="font-serif font-semibold">
                        Connect with Us
                    </h2>
                    <ExternalLink label="Sign Up for Email Updates" path="https://cloud.connect.hhs.gov/subscriptioncenter" />
                    <br />
                </div>

            </div>
        </>
    )
} 