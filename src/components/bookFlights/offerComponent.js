export default function OfferComponent(props){
    return(
        <div className="flex gap-[20px]">
            <img src={props.icon} alt='icon' className="w-[50px] h-[50px]" />

            <div className="flex flex-col">
                <h1 className="font-[700] text-[24px] text-[#00A0B1]">{props.title}</h1>
                <p className="font-[400] text-[16px] text-[#A2A2A2] capitalize w-[400px] xs:w-[200px]">{props.descritpion}</p>
            </div>
        </div>
    )
}