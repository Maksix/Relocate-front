import React from 'react';
import './AccommodationCard.less';
import {
  Image, Card, Badge, Typography,
} from 'antd';
import { Link } from 'react-router-dom';

const { Paragraph } = Typography;
type AccommodationCardType = {
  accommodation: {
    id: number,
    price: number,
    description: string,
    floor: number,
    maxFloor: number,
    roomCount: number,
    address: string,
    space: number
  };
};

const AccommodationCard: React.FC<AccommodationCardType> = ({ accommodation }: AccommodationCardType) => {
  const {
    price, description, floor, maxFloor, space, roomCount, address, id,
  } = accommodation;
  return (
    <Card
      cover={(
        <Image.PreviewGroup>
          <Image width={200} height={200} src="https://j.etagi.com/uploads/2020/10/stil-modern-75.jpg" />
          <Image width={200} height={200} src="https://i.pinimg.com/originals/9b/29/b2/9b29b2b32dff399ff12a4d6a72cc47fb.jpg" />
        </Image.PreviewGroup>
      )}
    >
      <Link to={`/accommodation/${id}`}>
        <div className="metro-block">
          <Badge color="#DDB836" text="Авиамоторная" />
          <span>15 минут пешком</span>
        </div>
        <div className="price-block">
          <span className="price">{price}</span>
          ₽/мес
        </div>
        <div className="space-block">
          <span>
            {`${roomCount}-комн`}
          </span>
          <span>
            {`${space}м`}
            <sup>2</sup>
          </span>
          <span>
            {`${floor}/${maxFloor} этаж`}
          </span>
        </div>
        <Paragraph ellipsis={{ rows: 3 }}>
          {address}
        </Paragraph>
        <div className="description">
          <Paragraph ellipsis={{ rows: 3 }}>
            {description}
          </Paragraph>
        </div>
      </Link>
    </Card>
  );
};

export default AccommodationCard;
