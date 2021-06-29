import React from 'react';
import IPage from '../../interfaces/IPage';
import './AccommodationView.less';
import AccommodationBlock from './AccommodationBlock/AccommodationBlock';
import OwnerInfoBlock from './OwnerInfoBlock/OwnerInfoBlock';

const accommodation = {
  id: 1,
  title: 'Сдается 2-комнатная квартира, 65м²',
  description: 'Сдаётся впервые уютная светлая квартира от собственника в 3 минутах ходьбы от ст.м. Котельники.'
    + ' Закрытая территория внутреннего благоустроенного двора с детской площадкой.\n'
    + '\n'
    + 'Функциональная гардеробная комната - 5,5 кв.м с современным гардеробом. 2 санузла'
    + ' (отдельный гостевой и совмещённый). 2 изолированные комнаты.\n'
    + '\n'
    + 'Приветствуются арендаторы со своей мебелью и техникой. По согласованию со мной можем докупить необходимую мебель/технику.\n'
    + '\n'
    + 'Рядом с домом вся необходимая инфраструктура (школы, детские сады, поликлиники, торговые центры, Макдональдс, Фудмолл Привоз).\n'
    + '\n'
    + 'Сдаю квартиру официально по договору, как самозанятый. Возможно заключение договора с юр.лицом. АГЕНТАМ НЕ ЗВОНИТЬ.\n'
    + '\n'
    + 'Залог можно разбить на 2 месяца. ВОЗМОЖЕН ТОРГ.',
  price: 55000,
  address: 'Москва, ул. Академика Янгеля, 8',
  space: 120,
  floor: 4,
  maxFloor: 9,
  roomCount: 2,
  metro: [
    {
      name: 'Авиамоторная',
      color: '#ffc61a',
      transportTime: 5,
      transportType: 'Пешком',
    },
    {
      name: 'Улица Академика Янгеля',
      color: '#a1a2a3',
      transportTime: 10,
      transportType: 'Транспортом',
    },
  ],
  images: [
    {
      src: 'https://j.etagi.com/uploads/2020/10/stil-modern-75.jpg',
    },
    {
      src: 'https://alianstreid.ru/upload/iblock/6ff/6ff526e21d23fd2a44c811b6c98fe925.jpeg',
    },
    {
      src: 'https://mykaleidoscope.ru/uploads/posts/2021-03/1616640848_3-p-krasivie-gostinie-v-kvartirakh-4.jpg',
    },
    {
      src: 'https://www.dizainvfoto.ru/wp-content/uploads/2019/05/50-foto-idej-modnyh-intererov-2019-goda8.jpg',
    },
    {
      src: 'http://kevazingo.ru/wp-content/uploads/2012/08/9290_21.jpg',
    },
  ],
  owner: {
    name: 'Максим',
    phoneNumber: '8(800)555-35-35',
  },
};

const AccommodationView: React.FC<IPage> = () => (
  <div className="view-page">
    <AccommodationBlock accommodation={accommodation} />
    <OwnerInfoBlock />
  </div>
);

export default AccommodationView;
