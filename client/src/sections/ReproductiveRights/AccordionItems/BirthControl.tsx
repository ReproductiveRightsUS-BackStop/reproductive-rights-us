import ExternalLink from "../../../components/ExternalLink";





export default function BirthControl() {

    return (
        <>
            <br />
            <p>The Affordable Care Act requires most employer-based health plans and private health
                insurance plans to cover family planning counseling and to cover certain birth control methods with no out- of - pocket
                costs to you if you have a prescription.This includes, but is not limited to :</p>
            <ul className="list-disc m-3">
                <li className="my-2"> Hormonal methods, like birth control pills and vaginal rings </li>
                <li className="my-2">  Implanted devices, like intrauterine devices(IUDs) </li>
                <li className="my-2">  Emergency contraception, like Plan B&reg; and ella&reg; </li>
                <li className="my-2">  Barrier methods, like diaphragms and sponges </li>
                <li className="my-2">  Patient education and counseling </li>
                <li className="my-2">  Sterilization procedures </li>
                <li className="my-2">  And additional forms of contraceptives approved, granted, or cleared by the Food and Drug Administration(FDA) </li>
            </ul>
            <br />
            <p>To learn more about birth control coverage requirements for different types of health coverage,
                visit <span className="inline"><ExternalLink label={"here."} path="https://www.healthcare.gov/coverage/birth-control-benefits/" /></span>
                &nbsp;To learn more about birth control methods, visit <span className="inline"><ExternalLink label={"here."} path="https://www.fda.gov/consumers/womens-health-topics/birth-control"/></span>
            </p>
            < br />
            <p>Some birth control methods are available over - the - counter and without a prescription including:</p>
            <ul className="list-disc m-3">
                <li className="my-2">  Emergency contraception, like Plan B&reg;</li>
                <li className="my-2">
                    Condoms
                </li>
                <li className="my-2"> Birth control pills, like Opill&reg;
                </li>
            </ul>
        </>
    )
}

