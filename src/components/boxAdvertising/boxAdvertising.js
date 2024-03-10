import Advertising from "../advertising/advertising"

const BoxAdvertising = () => {
    return (
        <div>
            <Advertising value = 'YouTube' href ='https://www.youtube.com/' description =' видеохостинг, предоставляющий пользователям услуги хранения, доставки и показа видео. YouTube стал популярнейшим видеохостингом и вторым сайтом в мире по количеству посетителей'/>
            <Advertising value = 'Google' href ='http://www.google.com/' description ='сервис, который позволяет любому пользователю создать свой собственный веб-сайт без необходимости быть профессиональным веб-разработчиком. Это отличный инструмент для создания сайтов, блогов или онлайн-магазинов с минимальными техническими навыками.'/>
        </div>
    )
}
export default BoxAdvertising