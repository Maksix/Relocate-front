export type OptionsType =
[
  {
    title: 'rentTerm',
    value: 'short' | 'long',
  },
  {
    title: 'wcType',
    value: 'combined' | 'separated',
  },
  {
    title: 'bathType'
    value: 'shower' | 'bath',
  },
  {
    title: 'balcony'
    value: boolean,
  },
  {
    title: 'elevator'
    value: boolean,
  },
  {
    title: 'conditioner'
    value: boolean,
  },
  {
    title: 'fridge'
    value: boolean,
  },
  {
    title: 'dishWasher'
    value: boolean,
  },
  {
    title: 'laundry'
    value: boolean,
  },
  {
    title: 'internet'
    value: boolean,
  },
  {
    title: 'tv'
    value: boolean,
  },
];

export type AccommodationOptionsLabelType =
  {
    value: string,
    label: string,
    options?: [
      {
        value: string,
        label: string
      },
      {
        value: string,
        label: string
      },
    ]
  }[];
