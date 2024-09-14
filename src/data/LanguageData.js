export default class LanguageData {
    static getStarterSectionWords(language) {
        switch (language) {
            case "en": return {
                greeting: "Hello👋",
                introduction: "my name is",
                name: "Nikita",
                profession: "I'm",
                role: "FullStack",
                preRole: "developer."
            }
            case "ru": return {
                greeting: "Привет👋",
                introduction: "меня зовут",
                name: "Никита",
                profession: "Я",
                role: "FullStack",
                preRole: "разработчик."
            }
            default: break;
        }
    }

    static getBestProjectSectionWords(language) {
        switch (language) {
            case "en": return {
                title: "BEST PET PROJECT",
                name: "GoLink Messenger",
                previewTitle: "GoLink",
                preview: "this is my desktop equivalent of the Telegram messenger",
                firstParagraph: "It has all the functions typical of regular messengers - it supports sending text photos, voice messages, and has a built-in media and audio player. Messages can be edited and deleted.",
                secondParagraph: "The messenger is well optimized. The database is used only during the first launch, all other actions, including sending messages, are carried out using the TCP/IP network protocol."
            }
            case "ru": return {
                title: "ЛУЧШИЙ ПЕТ ПРОЕКТ",
                name: "Мессенджер GoLink",
                previewTitle: "GoLink",
                preview: "- это мой десктопный аналог мессенджера Telegram",
                firstParagraph: "Есть все функции присущие обычным мессенджерам - он поддерживает отправку текста, фотографий, голосовых сообщений и имеет встроенный медиа и аудио плеер. Можно изменять и удалять сообщения",
                secondParagraph: "Мессенджер хорошо оптимизирован. Использование базы данных происходит только при первом запуске, все остальные действия, в том числе отправка сообщений, осуществляются с помощью сетевого протокола TCP/IP"
            }
            default: break;
        }
    }

    static getBestFreelancerSectionWords(language) {
        switch (language) {
            case "en": return {
                title: "FREELANCE",
                name: "ThatGirl Oasis",
                firstParagraph: "this is a women's community for meeting new friends and spending quality time together. For this community, I have created an informational ecosystem that allows finding new friends and participating in exciting offline events together.",
                secondParagraph: "The ecosystem includes a Telegram bot for dating, working on the Tinder principle - you create a profile, choose a photo, and an intelligent recommendation mechanism, based on physical proximity and age, will find you good company. You can then sign up for the best offline events in your city through a poster website directly within the bot."
            }
            case "ru": return {
                title: "ФРИЛАНС",
                name: "ThatGirl Oasis",
                firstParagraph: "- это женское сообщество для знакомств и уютного время провождения. Для этого сообщества я создал информационную экосистему, которая позволяет находить новых подруг и вместе участвовать в увлекательных оффлайн мероприятиях",
                secondParagraph: "В экосистему входит телеграм бот для знакомств, работающий по принципу Tinder - создаёшь анкету, выбираешь фотографию, а умный механизм рекомендаций, на основании физической близости и возраста, подберёт для тебя хорошую компанию, с которой ты сможешь записаться на лучшие в твоём городе оффлайн мероприятия через сайт-афишу прямо внутри бота. Верификация происходит на месте проведения, когда один из организаторов отсканирует QR-код, который приходит на почту участника после оплаты билета"
            }
            default: break;
        }
    }

    static getSkillSectionWords(language) {
        switch (language) {
            case "en": return {
                title: "MY STACK"
            }
            case "ru": return {
                title: "МОЙ СТЕК"
            }
            default: break;
        }
    }

    static getContactSectionWords(language) {
        switch (language) {
            case "en": return  {
                title: "Social Links"
            }
            case "ru": return {
                title: "Связь со мной"
            }
            default: break;
        }
    }
}