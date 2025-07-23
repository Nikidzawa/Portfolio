import JAVA_IMG from "./imgs/java.png"
import SPRING_IMG from "./imgs/spring.png"
import SQL_IMG from "./imgs/SQL.png"
import REDIS_IMG from "./imgs/redis.png"
import SWAGGER_IMG from "./imgs/swagger.png"
import JS from "./imgs/JS.png"
import HTML from "./imgs/html.jpg"
import CSS from "./imgs/css.jpg"
import REACT from "./imgs/react.png"
import MOBX from "./imgs/mobx.png"
import LINUX from "./imgs/linux.png"
import DOCKER from "./imgs/docker.png"
import GITHUB from "./imgs/github.png"
import POSTMAN_IMG from "./imgs/postman.png"
import FX_IMG from "./imgs/javaFX.jpg"
import NGINX from "./imgs/nginx.png"
import TOMCAT from "./imgs/tomcat.png"
import ELASTIC from "./imgs/elasticsearch.svg"
import RABBIT_MQ from "./imgs/rabbitmq.svg"
import KAFKA from "./imgs/kafka.svg"

export function GetBackEndSkills() {
    return [
        {
            img: JAVA_IMG,
            title: "Java 22"
        },
        {
            img: SPRING_IMG,
            title: "Spring Framework"
        },
        {
            img: SQL_IMG,
            title: "Postgresql"
        },
        {
            img: REDIS_IMG,
            title: "Redis"
        },
        {
            img: RABBIT_MQ,
            title: "RabbitMq"
        },
        {
            img: ELASTIC,
            title: "Elasticsearch"
        },
        {
            img: KAFKA,
            title: "Kafka"
        }
    ]
}

export function GetFrontendSkills() {
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
            img: MOBX,
            title: "MobX"
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

export function GetOtherSkills() {
    return [
        {
            img: LINUX,
            title: "Linux Ubuntu"
        },
        {
            img: DOCKER,
            title: "Docker"
        },
        {
            img: NGINX,
            title: "Nginx"
        },
        {
            img: TOMCAT,
            title: "Apache Tomcat"
        },
        {
            img: POSTMAN_IMG,
            title: "Postman"
        },
        {
            img: GITHUB,
            title: "Git"
        },

    ]
}

