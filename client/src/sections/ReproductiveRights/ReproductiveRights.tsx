import { ReactNode, useState } from "react";
import BirthControl from "./AccordionItems/BirthControl";
import AccessMedication from "./AccordionItems/AccessMedication";
import AccessAbortion from "./AccordionItems/AccessAbortion";
import PreventativeHealth from "./AccordionItems/PreventativeHealth";
import NoInsurance from "./AccordionItems/NoInsurance";
import { Link } from "react-router-dom";



interface AccordianContentType {
    title: string,
    content?: ReactNode,
}


function AccordionUnit(props: AccordianContentType) {

    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
        console.log(`Toggle! State: ${isExpanded}`);
        return;
    }

    return (
        <>
            <div className="border-y border-blue-300 p-9  text-black" onClick={handleToggle}>
                <h1 className="text-2xl text-black">
                    {props.title}
                </h1>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="fill-blue-800 float-right w-6 mb-2">
                    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                </svg>
                <div className="">
                    {isExpanded && <div>{props.content ? props.content : <></>}</div>}
                </div>
            </div>

        </>
    )
}


export default function ReproductiveRights() {

    const EmergencyCare = () => {

        return (<>
            <Link to="/emergency-care" title="More Info" />
        </>)
    }

    const accordionData: AccordianContentType[] = [
        {
            title: "Your Right to Emergency Care",
            content: <EmergencyCare />
        },
        {
            title: "Your Right to Birth Control Coverage",
            content: <BirthControl />
        },
        {
            title: "Your Right to Access Medication",
            content: <AccessMedication />
        },
        {
            title: "Your Right to Access Abortion",
            content: <AccessAbortion />
        },
        {
            title: "Your Right to Coverage of Other Preventive Health Services",
            content: <PreventativeHealth />
        },
        {
            title: " If You Do Not Have Health Insurance Coverage",
            content: <NoInsurance />
        },
    ]


    const accordions = accordionData.map(({ title, content }, index) => {
        console.log(title);
        return (
            <AccordionUnit key={`accordion-${index}`} title={title} content={content} />
        )
    });

    return (
        <div className="mb-36">
            {accordions}
        </div>
    )
}