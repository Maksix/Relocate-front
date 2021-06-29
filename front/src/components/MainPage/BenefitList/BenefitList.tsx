import React from 'react';
import { ReactComponent as DoneIcon } from '../../../icons/done.svg';
import { ReactComponent as SearchIcon } from '../../../icons/search.svg';
import { ReactComponent as DollarIcon } from '../../../icons/dollar.svg';
import { ReactComponent as KeyIcon } from '../../../icons/key.svg';
import Benefit from './Benefit/Benefit';
import './BenefitList.less';

const benefits = [
  {
    title: 'Только проверенные объявления',
    body: 'Модераторы проверяют каждое объявление,'
      + ' чтобы убедиться, что посредников и комиссии действительно нет, а также что предлагаемый номер действителен',
    icon: <DoneIcon />,
  },
  {
    title: 'Быстрый и удобный поиск',
    body: 'Специальные алгоритмы уберут дубли, а также предоставят возможность к большому количеству фильтров',
    icon: <SearchIcon />,
  },
  {
    title: 'Экономия денег и времени',
    body: 'Мы связываем арендодателей с жильцами'
      + ' совершенно бесплатно без комиссий всего в один клик',
    icon: <DollarIcon />,
  },
  {
    title: 'Безопасная сделка и защита от обмана',
    body: 'Ваши данные защищены и не попадут в руки злоумышленников,'
      + ' заполнить заявку на сдачу квартиры очень просто - надо только заполнить форму',
    icon: <KeyIcon />,
  },
];

const BenefitList: React.FC = () => (
  <div className="benefit-page">
    <div className="main-title">
      Почему Relocate?
    </div>
    <div className="benefit-list">
      {benefits.map(({ title, body, icon }) => (
        <Benefit key={title} title={title} body={body} icon={icon} />
      ))}
    </div>
  </div>
);

export default BenefitList;
