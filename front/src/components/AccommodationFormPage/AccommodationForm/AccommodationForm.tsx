import React from 'react';
import './AccommodationForm.less';
import { Form, Radio } from 'antd';
import { ReactComponent as RoomIcon } from '../../../icons/room.svg';

const AccommodationForm = (): JSX.Element => {
  const onFinish = (values: any) => {
    console.log(values);
  };
  return (
    <div className="form">
      <div className="form-title">
        Мое объявление
      </div>
      <Form
        initialValues={{}}
        onFinish={onFinish}
      >
        <Form.Item label="Что сдаете?" name="roomType">
          <div className="form-room">
            <Radio.Group>
              <Radio.Button value="room">
                <div className="room-icon">
                  <RoomIcon />
                </div>
                Room
              </Radio.Button>
              <Radio.Button value="flat">
                <div className="flat-icon">
                  <RoomIcon />
                </div>
                Flat
              </Radio.Button>
            </Radio.Group>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};
export default AccommodationForm;
