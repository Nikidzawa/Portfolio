export default class LanguageData {
    static getStarterSectionWords(language) {
        switch (language) {
            case "en":
                return {
                    greeting: "Hello👋",
                    introduction: "my name is",
                    name: "Nikita",
                    profession: "I'm",
                    role: "FullStack",
                    preRole: "developer."
                }
            case "ru":
                return {
                    greeting: "Привет👋",
                    introduction: "меня зовут",
                    name: "Никита",
                    profession: "Я",
                    role: "FullStack",
                    preRole: "разработчик."
                }
            default:
                break;
        }
    }

    static getBestProjectSectionWords(language) {
        switch (language) {
            case "en":
                return {
                    title: "BEST PET PROJECT",
                    name: "Enigma Messenger",
                    previewTitle: "Enigma",
                    preview: " this is my desktop cross-platform analogue of the Telegram messenger",
                    desc1: "The messenger has high security, supports sending text, photos, voice messages and has a media and audio player. You can edit and delete messages. Data exchange between users is carried out in real time using web sockets",
                }
            case "ru":
                return {
                    title: "ЛУЧШИЙ ПЕТ ПРОЕКТ",
                    name: "Мессенджер Enigma",
                    previewTitle: "Enigma",
                    preview: "- это мой десктопный кроссплатформенный аналог мессенджера Telegram",
                    desc1: "Мессенджер поддерживает отправку текста, фотографий, голосовых сообщений и имеет медиа и аудио плеер. Можно изменять и удалять сообщения. Обмен данных между пользователями осуществляется в режиме реального времени c помощью вебсокетов",
                }
            default:
                break;
        }
    }

    static getBestFreelancerSectionWords(language) {
        switch (language) {
            case "en":
                return {
                    title: "FREELANCE",
                    name: "Telegram dating bot",
                    resume: "For one of the largest Russian-language networks, Telegram offers a dating bot. In the first week of operation, the bot brought in a net profit of about 1 million rubles",
                    desc1: "The bot is made in the image and likeness of Tinder. You can upload several photos or videos to the profile, indicate your name, locality, age and tell a little about yourself. Thanks to the integration of the best geocoding services, the bot can arrange recommendations in order of proximity to the user.",
                    desc2: "While viewing profiles, you can offer a \"match\" to a person, or send them a message. This can be a text message, voice, photo, video, or circle. In the case of a \"match\", users will receive links to each other's accounts, where they can continue communicating.",
                    desc3: "If a user behaves inappropriately, you can send a complaint about him. Administrators can view it through a convenient admin panel.",
                    desc4: "By using the best technologies and patterns, the bot responds instantly even under high loads."
                }
            case "ru":
                return {
                    title: "ФРИЛАНС",
                    name: "Дейтинг приложение",
                    resume: "Для одной из крупнейшей русскоязычной сетки телеграм каналов разработал бота для знакомств. В первую неделю работы бот принёс чистой прибыли около 1 млн рублей",
                    desc1: "Бот выполнен по образу и подобию Tinder. В анкету можно загрузить несколько фото или видео, указать имя, населённый пункт, возраст и немного рассказать о себе. Благодаря интеграции лучших сервисов геокодирования, бот может выстроить рекомендации в порядке близости к пользователю.",
                    desc2: "Во время просмотра анкет можно предложить \"метч\" человеку, или отправить ему послание. Это может быть текстовое сообщение, голосове, фото, видео или кружок. В случае \"мэтча\" пользователи получат ссылки на аккаунты друг-друга, где смогут продолжить общение.",
                    desc3: "В случае если пользователь неподобающе себя ведёт, то можно отправить на него жалобу. Её могут посмотреть администраторы через удобную админ панель.",
                    desc4: "Благодаря использованию лучших технологий и паттернов, бот мгновенно откликается даже при высоких нагрузках."
                }
            default:
                break;
        }
    }

    static getSkillSectionWords(language) {
        switch (language) {
            case "en":
                return {
                    title: "MY STACK"
                }
            case "ru":
                return {
                    title: "МОЙ СТЕК"
                }
            default:
                break;
        }
    }

    static getContactSectionWords(language) {
        switch (language) {
            case "en":
                return {
                    title: "Social Links"
                }
            case "ru":
                return {
                    title: "Связь со мной"
                }
            default:
                break;
        }
    }
}