import React from 'react';
import './AccommodationForm.less';
import {
  Form, Radio, Button, Input, Checkbox, Upload,
} from 'antd';
import { CloseOutlined, FileImageOutlined } from '@ant-design/icons';
import { ReactComponent as RoomIcon } from '../../../icons/room.svg';
import MetroSelect from '../../../common/Filters/MetroSelect/MetroSelect';
import RoomSelect from '../../../common/Filters/RoomSelect/RoomSelect';
import {
  accommodationOptions,
  accommodationRules,
} from '../../AccommodationListPage/FiltersBlock/AdditionalFilters/AdditionalFilters';

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
          <div className="room-type-field">
            <Radio.Group>
              <Radio.Button value="room">
                <div className="room-icon">
                  <RoomIcon />
                </div>
                <div className="room-title">
                  Комнату
                </div>
              </Radio.Button>
              <Radio.Button value="flat">
                <div className="flat-icon">
                  <RoomIcon />
                </div>
                <div className="room-title">
                  Квартиру
                </div>
              </Radio.Button>
            </Radio.Group>
          </div>
        </Form.Item>
        <Form.List name="metro">
          {(fields, { add, remove }) => (
            <>
              {fields?.length > 0 && (
                <div className="metro-title-block">
                  <div>Ближайшее метро</div>
                  <div>Минут до метро</div>
                </div>
              )}
              {fields.map(({ key, name, fieldKey }) => (
                <div className="metro-fields" key={key}>
                  <Form.Item
                    name={[name, 'metro']}
                    fieldKey={[fieldKey, 'metro']}
                    rules={[{ required: true, message: 'Укажите метро' }]}
                  >
                    <div className="form-metro-select metro-select">
                      <MetroSelect />
                    </div>
                  </Form.Item>
                  <Form.Item
                    name={[name, 'transportTime']}
                    fieldKey={[fieldKey, 'transportTime']}
                    rules={[{ required: true, message: 'Укажите время' }]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name={[name, 'transportType']}
                    fieldKey={[fieldKey, 'transportType']}
                    rules={[{ required: true, message: 'Укажите тип транспорта' }]}
                  >
                    <Radio.Group>
                      <Radio.Button value="Пешком">
                        Пешком
                      </Radio.Button>
                      <Radio.Button value="Транспортом">
                        Транспортом
                      </Radio.Button>
                    </Radio.Group>
                  </Form.Item>
                  <CloseOutlined onClick={() => remove(name)} />
                </div>
              ))}
              <div className="add-metro-field">
                <Form.Item>
                  <Button onClick={() => add()}>
                    Добавить метро
                  </Button>
                </Form.Item>
              </div>
            </>
          )}
        </Form.List>
        <div className="price-field">
          <Form.Item label="Цена" name="price">
            <Input suffix="₽/мес" />
          </Form.Item>
        </div>
        <div className="room-space-block">
          <div className="room-field">
            <Form.Item label="Количество комнат" name="roomCount">
              <RoomSelect />
            </Form.Item>
          </div>
          <div className="space-field">
            <Form.Item
              label={(
                <span>
                  Площадь, м
                  <sup>2</sup>
                </span>
              )}
              name="roomCount"
            >
              <Input />
            </Form.Item>
          </div>
          <div className="floor-field">
            <Form.Item
              label="Этаж"
              name="floor"
            >
              <Input />
            </Form.Item>
            <div className="divider">
              /
            </div>
            <Form.Item name="maxFloor">
              <Input />
            </Form.Item>
          </div>
        </div>
        <div className="benefits-block">
          <div className="advantages-field">
            <div className="block-title">
              Удобства
            </div>
            {accommodationOptions.map((rule) => (
              <div key={rule.value} className="checkbox-block">
                <Form.Item name={rule.value} valuePropName="checked">
                  <Checkbox>
                    {rule.label}
                  </Checkbox>
                </Form.Item>
              </div>
            ))}
          </div>
          <div className="options-field">
            <div className="block-title">
              Особенности
            </div>
            {accommodationRules.map((rule) => (
              <div key={rule.value} className="checkbox-block">
                <Form.Item name={rule.value} valuePropName="checked">
                  <Checkbox>
                    {rule.label}
                  </Checkbox>
                </Form.Item>
              </div>
            ))}
          </div>
        </div>
        <div className="image-field">
          <div className="image-title">
            Фотографии
          </div>
          <Form.Item name="dragger" valuePropName="fileList" noStyle>
            <Upload.Dragger name="files" action="/upload.do">
              <p className="ant-upload-drag-icon">
                <FileImageOutlined />
              </p>
              <p className="ant-upload-text">Выберите или перетащите фотографии в область</p>
              <p className="ant-upload-hint">Поддерживается загрузка нескольких фото</p>
            </Upload.Dragger>
          </Form.Item>
        </div>
        <div className="description-field">
          <Form.Item name="description" label="Описание">
            <Input.TextArea />
          </Form.Item>
        </div>
        <Form.Item>
          <div className="button-wrapper">
            <Button htmlType="submit">
              Разместить объявление
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};
export default AccommodationForm;
