export default function Counting(props){
    return(
        <div className="flex flex-col gap-[10px]">
            <p className="font-[800] text-[48px] xs:text-[26px]">{props.number}+</p>
            <p className="font-[600] text-[24px] xs:text-[16px] capitalize">{props.text}</p>
        </div>
    )
}