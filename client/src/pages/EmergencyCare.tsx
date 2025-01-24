import ExternalLink from "../components/ExternalLink";



export default function EmergencyCare() {


    return (

        <div className="top-48 mb-36 p-6">
            <div className="w-full">
                <br />
                <p className="text-3xl">Your Right to Emergency Medical Care</p>
                <br />
            </div>
            <div>
                <p><br />In light of the Supreme Court's decision to overturn Roe v. Wade, it's more important than ever that you know your rights on receiving emergency medical care.</p>
                <ul className="list-disc m-3 p-3">
                    <li className="my-2">
                        Federal law requires Medicare-participating hospital emergency departments to provide you an appropriate medical screening examination.
                    </li>
                    <li className="my-2">
                        If the physician or provider determines that you have an emergency medical condition, federal law requires the hospital to offer you necessary stabilizing treatment, and transfer, if necessary, in order to receive necessary stabilizing care not available at the presenting hospital.
                    </li>
                    <li className="my-2">
                        These federal rights take precedence over state laws or mandates that apply to specific procedures.
                        <a className="text-sm text-blue-600 relative -top-3" href="#footnote-2">1</a>
                    </li>
                </ul>
                <p className="text-">
                    <span className="text-sm text-blue-600 relative -top-3">1 </span> Please note: pursuant to the preliminary injunction in Texas v. Becerra, No. 5:22-CV-185-H (N.D. Tex.), HHS may not enforce the
                    following interpretations contained in the July 11, 2022, CMS guidance (and the corresponding letter sent the same day by HHS Secretary
                    Becerra): (1) the Guidance and Letter’s interpretation that Texas abortion laws are preempted by EMTALA; and (2) the Guidance and Letter’s
                    interpretation of EMTALA — both as to when an abortion is required and EMTALA’s effect on state laws governing abortion — within the State of
                    Texas or against the members of the American Association of Pro Life Obstetricians and Gynecologists (AAPLOG) and the Christian Medical and Dental
                    Association (CMDA).
                </p>
                <br />
            </div>
            <div>
                <h1 className="text-3xl">If you are a health care provider:</h1>

                <ul className="list-disc m-3 p-3">
                    <li className="my-2">
                        <strong>For frontline health care providers</strong>, the Emergency Medical Treatment and Active Labor Act (EMTALA) statute gives precedence to your
                        clinical judgment and the actions that you take to provide stabilizing medical treatment to any
                        pregnant patients presenting to the hospital with an emergency medical condition,
                        <strong>regardless of any restrictions in the state where you practice.</strong>
                    </li>
                    <li className="my-2">
                        This means that physicians and other qualified medical personnel are required by federal law to offer stabilizing medical treatment to a patient who presents to the emergency department and is found to have an emergency medical condition. This requirement preempts any directly conflicting state law or mandate that might otherwise prohibit such treatment, such as state prohibitions or restrictions on abortions.
                    </li>
                    <li className="my-2">
                        Stabilizing treatment could include medical and/or surgical interventions (such as abortion, removal of one or both fallopian tubes, anti-hypertensive therapy, or methotrexate therapy), irrespective of any state laws or mandates that apply to specific procedures.
                    </li>
                </ul>
            </div>
            <div>
                <h1 className="text-3xl">If you are a patient:</h1>
                <ul className="list-disc m-3 p-3">
                    <li className="my-2">
                        If you present to the emergency department, you must be offered an appropriate medical screening examination to determine if you have an emergency medical condition. If you do, your health care providers in the emergency department are not permitted to wait until your emergency medical condition declines before they provide stabilizing treatment.
                    </li>
                    <li className="my-2">
                        The enforcement of EMTALA is a complaint driven process. If you or someone you know did not receive the emergency stabilizing medical care to which they were entitled, you can file an EMTALA complaint either by contacting your state’s survey agency or by filing on the Centers for Medicare and Medicaid Services webform.
                    </li>
                    <ul>
                        <li className="my-2">
                            To contact your state's survey agency, use the tool below.
                        </li>
                        <li className="my-2">
                            To file a complaint with the Centers for Medicare & Medicaid Services click <ExternalLink label={"here."} path={"https://www.cms.gov/priorities/your-patient-rights/emergency-room-rights"} />
                        </li>
                    </ul>
                </ul>

            </div>
            <div className="rounded-lg border-2 m-6 p-12 h-fit mb-36 text-xl font-bold">
                <ExternalLink label={"Contact Information for Filing a Complaint with the State Survey Agency"} path={"https://www.cms.gov/medicare/health-safety-standards/quality-safety-oversight-general-information/contact-information"} />
            </div>
        </div>

    )
}