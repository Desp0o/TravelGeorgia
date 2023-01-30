export default function ContactBlockFooter(props){
    return(
        <div className="flex flex-col">
            <p className="font-[500] text-[24px] xs:text-[18px] text-[#333333] tracking-[0.08em]">{props.app}</p>
            <p className="font-[500] text-[16px] xs:text-[14px] text-[#FFF]">{props.number}</p>
        </div>
    )
}