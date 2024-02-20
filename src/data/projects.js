import GO_LINK from "./imgs/logo.png"
import LIBRARY from "./imgs/book.png"
import LEONARDO from "./imgs/leonardo.png"
import GAME from "./imgs/space.png"

export default function GetProjects () {
    return [
        {
            img: GO_LINK,
            title: "Десктопный месседжер. Мой аналог телеграма"
        },
        {
            img: LIBRARY,
            title: "Решение для автоматизации учёта книг в библиотеках"
        },
        {
            img: GAME,
            title: "Игровой движок для создания ретро-игр"
        },
        {
            img: LEONARDO,
            title: "Моя копия популярного телеграм бота для знакомств"
        }
    ]
}