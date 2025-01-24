import ExternalLink from "../components/ExternalLink";
import ReproductiveRights from "../sections/ReproductiveRights/ReproductiveRights";


export default function Home() {

    return (
        <div className="w-full min-h-screen mt-24">
            <div>
                <div className="text-white rounded-lg m-0 lg:m-12 p-6 lg:p-2 bg-blue-950">
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center wrap leading-none">Update on Medication Abortion</h1>
                    <div className="grid grid-cols-2 w-full">
                        <div className="col-span-2 md:col-span-1 p-3 m-3">
                            On June 13, the Supreme Court issued a unanimous decision holding that the plaintiffs in <ExternalLink label={"FDA v. Alliance for Hippocratic Medicine"} path={"https://www.supremecourt.gov/opinions/23pdf/23-235_n7ip.pdf"} />
                            &nbsp; lacked standing to challenge FDA’s actions. Mifepristone—which FDA approved as
                            safe and effective more than 20 years ago—remains available under the conditions of use approved by FDA.
                        </div>
                        <div className="col-span-2 md:col-span-1 p-3 m-3">
                            The Biden-Harris Administration remains committed to protecting reproductive rights, ensuring women can
                            make their own decisions about their own bodies, and preserving the FDA’s authority to make science-based
                            determinations about what medications are safe and effective. Read statements from <ExternalLink label={"President Joe Biden"} path={"https://www.whitehouse.gov/briefing-room/statements-releases/2024/06/13/statement-from-president-joe-biden-on-supreme-court-decision-on-fda-v-alliance-for-hippocratic-medicine/"} />&nbsp;,
                            <ExternalLink label={"Attorney General Merrick Garland"} path={"https://www.justice.gov/opa/pr/attorney-general-merrick-b-garland-statement-supreme-courts-decision-fda-v-alliance"} />&nbsp;, and <ExternalLink label={"Health and Human Services Secretary Xavier Becerra"} path={"https://www.hhs.gov/about/news/2024/06/13/hhs-secretary-xavier-becerra-statement-supreme-court-decision-food-drug-administration-alliance-hippocratic-medicine.html"} />.
                        </div>
                    </div>
                </div>
                <br />
                <div className="grid grid-cols-2 m-0 lg:m-12 p-6 lg:p-2 bg-blue-300 rounded-lg">
                    <div className="col-span-2 md:col-span-1 p-3 m-3">
                        <h1 className="text-3xl font-semibold text-blue-800">
                            Know Your Rights: Reproductive Health Care
                        </h1>

                    </div>
                    <div className="col-span-2 md:col-span-1 p-3 m-3 h-fit ">
                        <p>Reproductive health care, including access to birth control and safe and legal abortion care, is an essential
                            part of your health and well-being. While Roe v. Wade was overturned, abortion remains legal in many states,
                            and other reproductive health care services remain protected by law. The U.S. Department of Health and Human Services (HHS) is committed to providing you with accurate and up-to-date information about
                            access to and coverage of reproductive health care and resources. Our goal is to make sure you have appropriate information and support.
                        </p>
                    </div>
                </div>

                <br />
            </div>
            <br />
            <div id="reproductive-rights" className="bg-white mt-12 p-3">
                <h1 className="text-3xl font-bold p-3"> Your Reproductive Rights</h1>
                <br />
                <p>
                    Below you will find information on your right to access reproductive health care, what your health insurance is required to cover,
                    and where to go if you need health insurance.
                </p>
                <br />
                <p>
                    Whether you get coverage through your employer, Medicaid, HealthCare.gov, or elsewhere in the private insurance market, most plans
                    cover family planning counseling, birth control, and other preventive services at no additional cost to you. Federal law allows federally-funded
                    health coverage (like Medicaid) to cover abortion in some situations, and some private health insurance plans also cover abortion care.
                </p>
                <br />
            </div>
            <br />
            <div className="">
                <ReproductiveRights />
            </div>
            <br />
            <br />
            <div className="text-lg p-6">
                <br />
                <h1 className="text-3xl my-6">Civil Rights Complaints</h1>
                <p>
                    The U.S. Department of Health and Human Services’ Office for Civil Rights (OCR) enforces federal civil rights laws that
                    prohibit discrimination in health programs receiving federal financial assistance. If you believe that your or another person’s
                    civil rights or health information privacy rights have been violated,&nbsp;
                    <span className="inline"><ExternalLink label="you can file a complaint with HHS here." path="https://www.hhs.gov/ocr/complaints/index.html" /></span>
                </p>
                <br />
                <h1 className="text-3xl my-6">Patient Privacy</h1>
                <p>
                    Federal law prohibits health care providers, health insurance plans, and other entities subject to the HIPAA Privacy Rule
                    from using or sharing your health information to investigate or impose liability on yourself or any person for the mere act of seeking,
                    obtaining, providing, or facilitating lawful reproductive health care.<a className="text-sm text-blue-600 relative -top-3" href="#footnote-2">2</a>
                    &nbsp; To learn more click <span className="inline"><ExternalLink label="here" path="https://www.hhs.gov/hipaa/for-professionals/special-topics/reproductive-health/index.html" /></span>.
                </p>
                <br />
                <p>
                    Understand your rights to protect your private medical information under federal law.
                    If you think your privacy has been violated, click <span className="inline"><ExternalLink label="here" path="https://www.hhs.gov/hipaa/filing-a-complaint/complaint-process/index.html" /></span>&nbsp; to learn how to file a complaint.
                </p>
                <br />
                <p>
                    Guidance on Protecting the Privacy and Security of Your Health Information When Using Your Personal
                    Cell Phone or Tablet may be found <span className="inline"><ExternalLink label="here" path="https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/cell-phone-hipaa/index.html" /></span>.
                </p>
                <br />
                <p>
                    Guidance on the HIPAA Privacy Rule and Disclosures of Information Relating to Reproductive Health Care may be found <span className="inline"><ExternalLink label="here" path="https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/phi-reproductive-health/index.html" /></span>.
                </p>
                <br />
                <p>
                    Guidance on the Use of Online Tracking Technologies by HIPAA Covered Entities and Business Associates may be found <span className="inline"><ExternalLink label="here" path="https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/hipaa-online-tracking/index.html" /></span>.
                </p>
                <br />
                <h1 className="text-3xl my-6">Department of Justice Resources</h1>
                <br />
                <p>
                    The U.S. Department of Justice is also working to protect access to reproductive health services under federal law.
                    Visit the <span className="inline"><ExternalLink label="Justice Department's Reproductive Rights Task Force" path="https://www.justice.gov/reproductive-rights" /></span> website for more information.
                </p>
                <br />
            </div>
            <hr />
            <br />
            <p className="p-6">
                <span id="footnote-2" className="text-sm text-blue-600 relative -top-3">2</span>This prohibition goes into effect on June 25, 2024, and can be enforced beginning on December 23, 2024
            </p>
        </div>
    )
}