import { Link } from 'react-router-dom'
import arrowBack from '../components/images/icons/arrowBack.png'

export default function StepBack(props){
    return (
        <div className=" pl-[120px] xs:pl-[20px] my-[20px] w-fit">
            <Link to={props.link}>
                <div className='flex items-center gap-[5px] cursor-pointer'>
                    <img src={arrowBack} alt='arrow Back' className='h-[10px]' />
                    <p className=" text-[18px] font-[500] text-[#04C4D9]">назад</p>
                </div>
            </Link>
        </div>
    )
}