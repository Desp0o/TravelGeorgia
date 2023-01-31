import HeaderComponent from '../../components/HeaderComponent'
import Navbar from '../../components/navbar/Navbar'
import StepBack from '../stepBack'
import Footer from '../../components/Footer/Footer'

import cover from '../../components/images/inner/forGeorgiaInner.jpg'

export default function ForGeorgians() {
    return (

        <div className="w-full">
            <Navbar homePage='*' />

            <div className='pt-[0px] xs:pt-[100px]'>
                <HeaderComponent title='ქართველებისთვის' />
            </div>

            <StepBack link='/pages/allTours/allTours' />


            <img src={cover} alt='cover' className='w-full h-[300px] pl-[120px] xs:pl-[20px] xs:pr-[20px] pr-[120px] object-cover object-center' />

            <div className='w-full pl-[120px] xs:pl-[20px] pt-[20px] pr-[120px] xs:pr-[20px] xl:pl-[400px] xl:pr-[400px]' >
                <p>Გაიცანით თქვენი სამშობლო უკეთსად,ვიდრეს იცნობთ. Გაიგეთ სწორი და ნამდვილი ისტორია თქვენი სამშობლოს შესახებ. Იმოგზაურეთ და გაიეგთ წარსულის შესახებ უფრო დაწვრილებით  და აღამოაჩინეთ ახალი ისტორიები. Ისიამოვნეთ მოგზაურობით მთებში,ქალაქებში და საქართველოს სხვადასხვა რეგიონებში.</p>
                <p>
                    Ჩვენ უმარავი რამ დაგვჩა სათქმელი და აღმოსაჩენი,რომელიც ჯერ არც უფროს თაობას და არც ბავშვებს არ უნახავთ.
                    Კომფორტული,კეთილმოწყობილი სატრანსპორტო მომსახურეობა ნებისმიერი  რაოდენობის ადარმიანებისთის.ასევე, ჩვენ მზად ვართ ვითანამშრომლოთ საგანმანაღლებლო ჯგუფებთან.
                    Მოგზაურობა მარტო და მოგზაურობა ოჯახთან ერთად,რომელიც დაუვიწყარი შთაბეჭდილებებით იქნება სავსე და უკან დაბრუნების სურვილს გაგიჩენთ.
                    Ჩვენი გუნდის მთავარი მიზანია ხარიხსი,რომელიც დაკომპლექტებულია  პროფესიონალი თანამშრომლებისგან.
                    განაცხადის გამოგზავნა  შესაძლებელია ელექტრონული ფოსტით
                    kodageo@gmail.com ან Viber, WhatsApp +995 597772845
                </p>



            </div>




            <div className='pt-[100px]'>
                <Footer />
            </div>

        </div>
    )
}