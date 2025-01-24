import ExternalLink from "../../../components/ExternalLink";




export default function NoInsurance() {



    return (
        <>
            <br />
            <ul className="list-disc m-3">
                <li className="p-2">
                    Go to <span className="inline"><ExternalLink label="HealthCare.gov" path="https://www.healthcare.gov/" /></span> and see if you qualify for insurance coverage and financial assistance to make coverage more affordable.
                </li>
                <li className="p-2">
                    <strong>Title X Family Planning Clinics</strong> provide a broad range of family planning services and provide preventive health services that benefit reproductive health, such as STI and HIV testing, HIV counseling, and HPV vaccines.
                    <br />
                    <span className="inline"><ExternalLink label="Find a Title X Family Planning Clinic near you." path="https://opa-fpclinicdb.hhs.gov/" /></span>

                </li>
                <li className="p-2">
                    Health centers are community - based organizations that deliver high - quality primary health care services, regardless of your ability to pay.
                    <br />
                    <span className="inline"><ExternalLink label=" Find a health center near you. " path="https://findahealthcenter.hrsa.gov/" /></span>
                </li>
                <li className="p-2">
                    The Ryan White HIV / AIDS Program provides medical care, medications, and essential support services to people with HIV.
                    <br />
                    <span className="inline">
                        <ExternalLink
                            label="Find how to get HIV care and services through the Ryan White HIV /AIDS Program near you."
                            path="https://archive.is/o/SAq24/https://ryanwhite.hrsa.gov/hiv-care/services" />
                    </span>

                </li>
            </ul>

        </>
    )
}

