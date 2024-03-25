import clock from '../components/images/icons/clock.webp'
import { Link } from 'react-router-dom'

export default function CardComponent(props){
    return(
        <div className="w-[270px] h-[440px] overflow-hidden rounded-[15px] box-border">
            {/* სურათი */}
            <Link to={props.link}><img src={props.cover} className="cursor-pointer relative w-full h-[360px] object-cover rounded-[15px]" alt="cover"/> </Link>

            <div className="my-[20px]">
                {/* სათაური */}
                <h1 className="text-[20px] font-[500] text-left">{props.title}</h1>

                {/* იქონი და ადგილი */}
                <div className="flex items-center gap-2">
                    {/* იქონი */}
                    <img src={clock} alt='clock' />
                    
                    {/* დანიშNულების ადგილი */}
                    <p className="font-[700] text-[16] text-[#6A6A6A]">{props.time}</p>
                </div>
            </div>
        </div>
    )
}