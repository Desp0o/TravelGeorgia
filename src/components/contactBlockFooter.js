export default function ContactBlockFooter(props){
    return(
        <div className="flex flex-col">
            <p className="font-[500] text-[18px] xs:text-[14px] text-[#333333] tracking-[0.08em]">{props.app}</p>
            <p className="font-[500] text-[14px] xs:text-[12px] text-[#FFF]">{props.number}</p>
        </div>
    )
}