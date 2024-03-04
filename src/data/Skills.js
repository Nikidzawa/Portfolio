import JAVA_IMG from "./imgs/java.png"
import SPRING_IMG from "./imgs/spring.png"
import SQL_IMG from "./imgs/SQL.png"
import REDIS_IMG from "./imgs/redis.png"
import KAFKA_IMG from "./imgs/Kafka.jpg"
import SWAGGER_IMG from "./imgs/swagger.png"
import REST_ASSURED from "./imgs/restAssured.png"
import LOGBACK_IMG from "./imgs/logback.png"
import LOMBOK_IMG from "./imgs/lombok.png"
import JS from "./imgs/JS.png"
import HTML from "./imgs/html.jpg"
import CSS from "./imgs/css.jpg"
import REACT from "./imgs/react.png"
import LINUX from "./imgs/linux.png"
import DOCKER from "./imgs/docker.png"
import GITHUB from "./imgs/github.png"
import POSTMAN_IMG from "./imgs/postman.png"
import FX_IMG from "./imgs/javaFX.jpg"

export function GetBackEndSkills () {
    return [
        {
            img: JAVA_IMG,
            title: "Java"
        },
        {
            img: SPRING_IMG,
            title: "Spring Framework (CORE, BOOT, JDBC, JPA, SECURITY)"
        },
        {
            img: SQL_IMG,
            title: "Знаю язык SQL, в качестве СУБД использую PostgreSQL"
        },
        {
            img: REDIS_IMG,
            title: "Redis. Умею писать кастомные аннотации кэширования применяя АОП"
        },
        {
            img: LOMBOK_IMG,
            title: "Lombok"
        },
        {
            img: KAFKA_IMG,
            title: "Apache kafka. Так же пробовал писать собственные брокеры сообщений на базе TCP/IP стека"
        },
        {
            img: REST_ASSURED,
            title: "Rest-Assured"
        },
        {
            img: LOGBACK_IMG,
            title: "Logback"
        },
        {
            img: POSTMAN_IMG,
            title: "Postman"
        },
        {
            img: SWAGGER_IMG,
            title: "Swagger"
        },
    ]
}

export function GetFrontendSkills () {
    return [
        {
            img: JS,
            title: "JavaScript"
        },
        {
            img: REACT,
            title: "React"
        },
        {
            img: HTML,
            title: "HTML"
        },
        {
            img: CSS,
            title: "CSS"
        },
        {
            img: FX_IMG,
            title: "JavaFx"
        }
    ]
}

export function GetOtherSkills () {
    return [
        {
            img: LINUX,
            title: "Использую ядро линукс на втором компьютере и разворачиваю на нём сервера. Умею писать bash-скрипты"
        },
        {
            img: DOCKER,
            title: "Умею контейнеризировать в docker, настраивать окружение в docker-compose"
        },
        {
            img: GITHUB,
            title: "В качестве системы контроля версий использую GIT"
        },

    ]
}

