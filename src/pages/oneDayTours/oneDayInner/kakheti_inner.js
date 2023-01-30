import HeaderComponent from '../../../components/HeaderComponent'
import Navbar from '../../../components/navbar/Navbar'
import StepBack from '../../stepBack'
import Uslugi from '../../uslugi'
import Footer from '../../../components/Footer/Footer'

import cover from '../../../components/images/inner/kaxeti.jpg'
import Options from '../../options'

export default function KakhetiOneDay(){
    return(
        
        <div className="w-full">
            <Navbar homePage='*' />
            
            <div className='pt-[100px]'>
                <HeaderComponent title='Мцхета' />
            </div>

            <StepBack link='/pages/oneDayTours/oneDayTours' />

            
                <img src={cover} alt='cover' className='w-full h-[200px] pl-[120px] xs:pl-[20px] xs:pr-[20px] pr-[120px] object-cover object-center' />
            
                <div className='w-full pl-[120px] xs:pl-[20px] pt-[20px] pr-[120px] xs:pr-[20px]'>
                    <Options 
                        time='10'
                        price1='185'
                        price2='220'
                    />

                    <p className='my-[30px]'>
                    &nbsp;&nbsp;Будет интересна и детям, и взрослым! Любителям природы, чудесных горных видов, старинной архитектуры, ценителям кухни и вина, и людям верующим.
                    </p>

                    
                    
                </div>
            

            <Uslugi />

            <div className='pt-[100px]'>
                <Footer />
            </div>
            
        </div>
    )
}