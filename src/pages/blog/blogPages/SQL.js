import styled from "styled-components";
import "../blogComponents/styles.css"
import SqlSnippet from "../blogComponents/CodeBlock";
import BasicBlogWindow from "../blogComponents/BasicBlogWindow";

const ContentAndText = styled.div`
    display: flex;
    @media screen and (max-width: 600px) {
        display: block;
    }
    p {
        padding-left: 15px;
    }
`

const Block = styled.div`
    padding-top: 30px;
    padding-bottom: 5px;
`
export default function SQL () {
    return (
        <BasicBlogWindow name={"Язык SQL, Часть 1. Теория и таблицы"}>
            <h1 style={{textAlign: "center", paddingBottom: "5px"}}></h1>
            <p>SQL - это язык структурированных запросов, применяемый для создания,
                модификации и управлением данными в реляционных базах данных.</p>

            <p>
                Напомню, что реляционные базы данных представляют собой двумерные таблицы, которые состоят из полей и записей.
                Для каждой записи необходимо наличие уникального значения, который называется первичным ключом, или же PRIMARY KEY.
            </p>


            <p>Для наглядности, я создам небольшую таблицу для учета пользователей, которой дам название users.</p>
            <ContentAndText>
                <SqlSnippet> {`CREATE TABLE users (\n  id INT PRIMARY KEY,\n  name VARCHAR(64)\n);`}</SqlSnippet>
                <p>В результате исполнения этого кода, мы получим таблицу с названием users.
                    Как мы помним, для любой таблицы необходим PRIMARY KEY. Здесь в его роли будет выступать числовое поле id.
                    Каждый будущий юзер будет так же иметь имя. Мы можем указать гораздо больше интересных полей, но пока, давайте ограничимся этим.</p>
            </ContentAndText>
            <div className={"warning"}>Обратите внимание, что вы можете добавить любое количество параметров, однако наличие PRIMARY KEY
                является обязательным для любой таблицы.
            </div>

            <Block>
                <h3>Типы данных</h3>
            </Block>

            <p>Остаётся только вопрос, а что означает INT и VARCHAR? По аналогии со многими типизированными языками
                программирования, SQL имеет типы данных. Давайте разберём основные из них.</p>

            <ContentAndText style={{alignItems: "center"}}>
                <SqlSnippet>{`BIGINT`}</SqlSnippet>
                <p>Самый большой числовой тип данных, имеет разброс от -9,223,372,036,854,775,808 до
                    9,223,372,036,854,775,807.</p>
            </ContentAndText>
            <ContentAndText style={{alignItems: "center"}}>
                <SqlSnippet>{`INT`}</SqlSnippet>
                <p>Стандартный числовой тип данных, имеет разброс от -2,147,483,648 до 2,147,483,647.</p>
            </ContentAndText>
            <ContentAndText style={{alignItems: "center"}}>
                <SqlSnippet>{`VARCHAR`}</SqlSnippet>
                <p>Основной строковый тип данных, в скобках можно указать максимальный размер строки в символах.</p>
            </ContentAndText>
            <ContentAndText style={{alignItems: "center"}}>
                <SqlSnippet>{`DATE`}</SqlSnippet>
                <p>Основной тип для даты, имеет формат - NOV 25, 2005.</p>
            </ContentAndText>
            <ContentAndText style={{alignItems: "center"}}>
                <SqlSnippet>{`TIME`}</SqlSnippet>
                <p>Основной тип для времени, имеет формат - 15:00 P.M.</p>
            </ContentAndText>

            <Block>
                <h3>Язык определения данных (DDL)</h3>
            </Block>
            <p>Язык определения данных используется для взаимойствия с таблицами.</p>
            <ContentAndText style={{alignItems: "center"}}>
                <SqlSnippet>{`CREATE`}</SqlSnippet>
                <p>Уже знакомая нам команда для создания таблицы.</p>
            </ContentAndText>
            <ContentAndText style={{alignItems: "center"}}>
                <SqlSnippet>{`ALTER`}</SqlSnippet>
                <p>Обновление таблицы.</p>
            </ContentAndText>
            <ContentAndText style={{alignItems: "center"}}>
                <SqlSnippet>{`DROP`}</SqlSnippet>
                <p>Удаление таблицы.</p>
            </ContentAndText>

            <p>Теперь, давайте немного улучшим нашу таблицу с пользователями. Добавим колонку с почтой, датой рождения и
                временем регистрации, а колонку name переименуем в nickname и увеличим у неё максимальное число символов
                до 128.</p>
            <ContentAndText style={{alignItems: "center"}}>
                <SqlSnippet>{`ALTER TABLE users \nADD mail VARCHAR(128), \nADD date_birth DATE, \nADD register_time TIME;`}</SqlSnippet>
                <p>Добавляем новые колонки.</p>
            </ContentAndText>
            <ContentAndText style={{alignItems: "center"}}>
                <SqlSnippet>{`ALTER TABLE users \nRENAME COLUMN name TO nickname; \n\nALTER TABLE users \nMODIFY nickname VARCHAR(128);`}</SqlSnippet>
                <p>Изменяем данные колонки name. Сначала выполняем команду по смене имени на nickname, а потом обновляем тип данных.</p>
            </ContentAndText>
            <ContentAndText style={{alignItems: "center"}}>
                <SqlSnippet>{`ALTER TABLE users \nCHANGE COLUMN name nickname VARCHAR(128);`}</SqlSnippet>
                <p>Более простой вариант запроса по изменению колонки name. Он лучший с точки зрения производительности, ибо состоит всего из одного запроса.</p>
            </ContentAndText>
            <ContentAndText style={{alignItems: "center"}}>
                <SqlSnippet>{`DROP TABLE users;`}</SqlSnippet>
                <p>Ну и на последок, вот такой синтаксис используется для удаления таблицы.</p>
            </ContentAndText>
            <div className={"warning"}>Формально, оператором окончания блока кода является символ точки с запятой ( ; ).</div>
        </BasicBlogWindow>
    )
}