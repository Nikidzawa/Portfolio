export default function GetBlogs () {
    return [
        {
            title: "Язык SQL",
            description: `Язык SQL Является важным навыком любого бекенд разработчика или аналитика. Этот курс пригодится как для изучения новичкам, так и для повторения опытным специалистам.`,
            level: 0,
            img: require("./imgs/SQL.png"),
            theme: "backend",
            url: "sql",
            type: "course",
            pages: [
                {
                    title: "Часть 1. Теория и таблицы",
                    description: `В этой статье расскажу про теорию SQL, а так же про основы работы с таблицами`,
                    level: 0,
                    img: require("./imgs/SQL.png"),
                    theme: "backend",
                    url: "page_1"
                },
                {
                    title: "Часть 2. Основы взаимодействий с записями",
                    description: `Работа с записями является ключевой темой в SQL, в этой статье рассмотрим её основы`,
                    level: 0,
                    img: require("./imgs/SQL.png"),
                    theme: "backend",
                    url: "page_2"
                },
            ]
        },
        {
            title: "Полезные фишки в JavaFX",
            description: `JavaFx является самой популярной библиотекой по созданию десктопных приложений на Java. За время её использования, я набрался опыта и смог подчеркнуть для себя некоторые неочевидные фишки, знание которых может вам помочь построить по настоящему крутое приложение.`,
            level: 1,
            img: require("./imgs/javaFX.png"),
            theme: "frontend",
            url: "javaFX",
            type: "article"
        }
    ]
}