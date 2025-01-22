import { ReactNode, useState } from "react";
import BirthControl from "./AccordionItems/BirthControl";
import AccessMedication from "./AccordionItems/AccessMedication";
import AccessAbortion from "./AccordionItems/AccessAbortion";
import PreventativeHealth from "./AccordionItems/PreventativeHealth";
import NoInsurance from "./AccordionItems/NoInsurance";



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
            <div className="border-y-2 border-blue-300 p-9 text-black" onClick={handleToggle}>
                <h1 className="text-2xl text-black">
                    {props.title}
                </h1>
                <p className="float-right"></p>
                <div className="">
                {isExpanded && <div>{props.content}</div>}
                </div>
            </div>

        </>
    )
}


export default function ReproductiveRights() {

    const accordionData: AccordianContentType[] = [
        {
            title: "Your Right to Emergency Care",
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
        return (
            <AccordionUnit key={`accordion-${index}`} title={title} content={content ? content : ''} />
        )
    });

    return (
        <>
            {accordions}
        </>
    )
}