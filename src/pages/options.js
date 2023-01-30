

export default function Options(props){
    return(
        <div className="">
            <p><b>Длительность</b> – {props.time} часов</p>
            <p><b>Цена:</b> {props.price1}$ за всю семью</p>
            <p><b>Цена:</b> {props.price2}$ от 1 до 4 Человек </p>
            <p><b>Цена:</b> рассчитывается индивидуально от 7+ Человек</p>
        </div>
    )
}