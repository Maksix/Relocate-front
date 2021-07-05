import { OptionsType } from './OptionsType';
import { RulesType } from './RulesType';

export type AccommodationType = {
  id: number,
  price: number,
  description: string,
  title: string,
  floor: number,
  maxFloor: number,
  roomCount: number,
  address: string,
  space: number,
  metro: {
    name: string,
    color: string,
    transportTime: number,
    transportType: string,
  }[]
  images: { src: string }[]
  owner: {
    name: string,
    phoneNumber: string,
  }
  options: OptionsType
  rules: RulesType
};
