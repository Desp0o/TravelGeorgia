

export default function Options(props){
    return(
        <div className="">
            <p><b>Длительность</b> – {props.time} часов</p>
            <p><b>Цена:</b> {props.price1}$ за всю семью до 5 чел</p>
            <p><b>Цена:</b> {props.price2}$ от 6 до 8 человек </p>
            <p><b>Цена:</b> От 9 чел.  и более (автобусы) рассчитывается индивидуально.</p>
        </div>
    )
}