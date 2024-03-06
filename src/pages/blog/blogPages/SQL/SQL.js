import styled from "styled-components";
import "../../blogComponents/blog-components.css"
import SqlSnippet from "../../blogComponents/CodeBlock";
import BasicBlogWindow from "../../blogComponents/BasicBlogWindow";

const ContentAndText = styled.div`
    display: flex;
    align-items: center;
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
                Напомню, что реляционные базы данных представляют собой двумерные таблицы, которые состоят из полей и
                записей.
                Для каждой записи необходимо наличие уникального значения, который называется первичным ключом, или же
                PRIMARY KEY.
            </p>


            <p>Для наглядности, я создам небольшую таблицу для учета пользователей, которой дам название users.</p>
            <ContentAndText>
                <SqlSnippet> {`CREATE TABLE users (\n  id INT PRIMARY KEY,\n  name VARCHAR(64)\n);`}</SqlSnippet>
                <p>В результате исполнения этого кода, мы получим таблицу с названием users.
                    Как мы помним, для любой таблицы необходим PRIMARY KEY. Здесь в его роли будет выступать числовое
                    поле id.
                    Каждый будущий юзер будет так же иметь имя. Мы можем указать гораздо больше интересных полей, но
                    пока, давайте ограничимся этим.</p>
            </ContentAndText>
            <div className={"warning"}>Обратите внимание, что вы можете добавить любое количество полей, однако наличие
                PRIMARY KEY
                является обязательным для любой таблицы.
            </div>

            <Block>
                <h2>Типы данных</h2>
            </Block>

            <p>Остаётся только вопрос, а что означает INT и VARCHAR? По аналогии со многими типизированными языками
                программирования, SQL имеет типы данных. Давайте разберём основные из них.</p>

            <ContentAndText>
                <SqlSnippet>{`BIGINT`}</SqlSnippet>
                <p>Самый большой числовой тип данных. Формальное ограничение составляет 9 квинтиллионов</p>
            </ContentAndText>
            <ContentAndText>
                <SqlSnippet>{`INT`}</SqlSnippet>
                <p>Стандартный числовой тип данных, имеет ограничение в 2 миллиарда</p>
            </ContentAndText>
            <ContentAndText>
                <SqlSnippet>{`VARCHAR`}</SqlSnippet>
                <p>Основной строковый тип данных, в скобках можно указать максимальный размер строки в символах.</p>
            </ContentAndText>
            <ContentAndText>
                <SqlSnippet>{`DATE`}</SqlSnippet>
                <p>Основной тип для даты, имеет формат - NOV 25, 2005.</p>
            </ContentAndText>
            <ContentAndText>
                <SqlSnippet>{`TIME`}</SqlSnippet>
                <p>Основной тип для времени, имеет формат - 15:00 P.M.</p>
            </ContentAndText>

            <Block>
                <h2>Язык определения данных (DDL)</h2>
            </Block>

            <p>Язык определения данных используется для взаимойствия с таблицами.</p>
            <ContentAndText>
                <SqlSnippet>{`CREATE`}</SqlSnippet>
                <p>Уже знакомая нам команда для создания таблицы.</p>
            </ContentAndText>
            <ContentAndText>
                <SqlSnippet>{`ALTER`}</SqlSnippet>
                <p>Обновление таблицы.</p>
            </ContentAndText>
            <ContentAndText>
                <SqlSnippet>{`DROP`}</SqlSnippet>
                <p>Удаление таблицы.</p>
            </ContentAndText>

            <p>Теперь, давайте немного улучшим нашу таблицу с пользователями. Добавим колонку с почтой, датой рождения и
                временем регистрации, а колонку name переименуем в nickname и увеличим у неё максимальное число символов
                до 128.</p>
            <ContentAndText>
                <SqlSnippet>{`ALTER TABLE users \nADD mail VARCHAR(128), \nADD date_birth DATE, \nADD register_time TIME;`}</SqlSnippet>
                <p>Добавляем новые колонки.</p>
            </ContentAndText>
            <ContentAndText>
                <SqlSnippet>{`ALTER TABLE users \nRENAME COLUMN name TO nickname; \n\nALTER TABLE users \nMODIFY nickname VARCHAR(128);`}</SqlSnippet>
                <p>Изменяем данные колонки name. Сначала выполняем команду по смене имени на nickname, а потом обновляем
                    тип данных.</p>
            </ContentAndText>
            <ContentAndText>
                <SqlSnippet>{`DROP TABLE users;`}</SqlSnippet>
                <p>Давайте теперь удалим таблицу</p>
            </ContentAndText>
            <div className={"warning"}>Формально, оператором окончания блока кода является символ точки с запятой ( ;
                ).
            </div>

            <Block>
                <h2>Ограничения (constraints)</h2>
            </Block>

            <p>При создании поля, можно так же задавать определённые правила, которые будут применяться к данным в этом
                столбце.
                К примеру, ранее рассмотренный PRIMARY KEY является одним из таких правил.
            </p>
            <ContentAndText>
                <SqlSnippet>{`NOT NULL`}</SqlSnippet>
                <p>Это ограничение не позволяет нам иметь пустые значения в колонке.</p>
            </ContentAndText>
            <ContentAndText>
                <SqlSnippet>{`UNIQUE`}</SqlSnippet>
                <p>Ограничение говорит о том, что каждое значение в колонке должно быть уникальным.</p>
            </ContentAndText>
            <ContentAndText>
                <SqlSnippet>{`DEFAULT`}</SqlSnippet>
                <p>Указывает значение колонки по умолчанию.</p>
            </ContentAndText>
            <ContentAndText>
                <SqlSnippet>{`CHECK`}</SqlSnippet>
                <p>Ограничение указывает на то, что каждое значение в колонке должно удовлетворять определённому
                    условию.</p>
            </ContentAndText>
            <ContentAndText>
                <SqlSnippet>{`FOREIGN KEY`}</SqlSnippet>
                <p>Указывает, что данное значение в колонке является внешнии ключом, об этом поговорим немного
                    позже.</p>
            </ContentAndText>

            <p>Поскольку мы ранее удалили таблицу, то давайте создадим новую и поставим некоторые ограничения.</p>
            <ContentAndText>
                <SqlSnippet>
                    {`CREATE TABLE users (\n  id BIGINT PRIMARY KEY,\n  nickname VARCHAR(128) NOT NULL,\n  age INT CHECK (age >= 18),\n  role VARCHAR(64) DEFAULT \`USER\`,\n  mail VARCHAR(128) UNIQUE\n);`}</SqlSnippet>
            </ContentAndText>
            <p>Отлично! мы изучили теорию и узнали как выглядят таблицы в SQL. В следующей статье мы научимся создавать
                и взаимодействовать с записями в таблицах</p>
        </BasicBlogWindow>
    )
}