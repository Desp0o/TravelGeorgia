export default function ContactBlockFooter(props){
    return(
        <div className="flex flex-col">
            <p className="font-[500] text-[24px] text-[#333333] tracking-[0.08em]">{props.app}</p>
            <p className="font-[500] text-[16px] text-[#FFF]">{props.number}</p>
        </div>
    )
}