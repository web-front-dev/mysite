import React from 'react'
import { Link } from 'react-router-dom'
import styles from 'components/common/Common.module.css'
import img1 from 'images/instagram/1.png'
import img2 from 'images/instagram/2.png'
import img3 from 'images/instagram/3.png'
import img4 from 'images/instagram/4.png'

const InstagramSearch: React.FC = () => {
  return (
    <div className={styles.main}>
      <h2>Инструкция по поиску - Instagram:</h2>
      <h3> Особенности поиска </h3>
      <p>
        {' '}
        Поиск у инстаграма относительно доступный, поэтому у нас есть несколько
        приятных вариантов, среди которых каждый модератор может выбрать
        найболее подходящий.{' '}
      </p>
      <h4> Поиск через гугл </h4>
      <p>
        {' '}
        Гугл уже не в первый раз упрощает нам весь процесс, за что ему отдельная
        благодарность. Для получeния нарушений с инстаграма нужно вбить
        следующий запрос:{' '}
      </p>
      <ul>
        <li>(site:Instagram.com) или (Inurl:instagram.com/p/)</li>
        <li>наш запрос</li>
      </ul>
      <div>
        <img width="650" height="650" src={img1} alt="" />
      </div>
      <div>
        <img width="650" height="250" src={img2} alt="" />
      </div>
      <p>
        {' '}
        Таким образом, гугл дает нам право на очень объемный поиск. Меняя наш
        запрос на различные связки слов из разных групп{' '}
        <Link to="/network/search/vk#table">таблицы</Link>, мы получим очень
        большое количество нарушений. Мы ведь этого и хотели, верно?{' '}
      </p>
      <h4> Внутренний поиск инстраграма </h4>
      <p>
        {' '}
        Один из способов - поиск в самом инстаграме. Возможно, этот способ будет
        не самый продуктивный, но также имеет право на существование. Для начала
        требуется перейти на главную страницу своего профиля и в самом верху мы
        увидим полосу с поиском, где я и буду осуществлять это дело. Тут нужно
        воспользоваться 1 (действие) и 3 (проект) группой нашей{' '}
        <Link to="/network/search/vk#table">таблицы</Link>, ведь широкий поиск с
        использованием 2 (товар) группы может не дать желанных результатов.{' '}
      </p>
      <div>
        <img width="800" height="55" src={img3} alt="" />
      </div>
      <div>
        <img width="540" height="380" src={img4} alt="" />
      </div>
      <h4> FAQ </h4>
      <p>
        {' '}
        Существует много вопросов, которые задают модераторы, впервые пришедшие
        для поиска в инстаграм. В этом разделе я попробую расставить все на свои
        места:{' '}
      </p>
      <ul>
        <li>
          {' '}
          "Я недавно занимался поиском и случайно наткнулся на сторис с
          нарушением. Мы ведь работаем со сторисами? Или нет?" Да, по сторисам
          мы можем оформить бан. Но тут все зависит от конкретики. Если там
          четко видно нарушение и прописан проект, который нам необходим - этого
          хватит. Во всех остальных случаях рекомендую лично написать нарушителю
          и уточнить то, чего не будет с самой истории.{' '}
        </li>
        <li>
          {' '}
          "Вчера мне написал мошенник. А сегодня я увидел сообщение с продажей в
          своем танковом чате. Что делать? Может мне нужно кому-то в инстаграме
          скинуть эти сообщения?" Да, такие ситуации тоже бывают. В инстаграме
          не нужно никому ничего скидывать. А вот в Vk у нас есть отдельная
          беседа для инстаграма. Достаточно отправить туда скриншот, а также
          ссылку на профиль нарушителя.{' '}
        </li>
        <li>
          {' '}
          "Я хоть и модератор, но у меня нет никаких ваших бесед по инстаграму.
          Как быть?" Если Вы не находитесь в ней, то можно попросить доступ у{' '}
          <a href="https://vk.com/steel_wg" target="_blank" rel="noreferrer">
            великодушного борца за справедливость
          </a>
          , который с радостью (но это не точно) добавит Вас туда!{' '}
        </li>
      </ul>
      <p>
        {' '}
        На данный момент это последняя инструкция, все остальные в разработке.
        Спасибо за внимание!{' '}
      </p>
    </div>
  )
}

export default InstagramSearch
