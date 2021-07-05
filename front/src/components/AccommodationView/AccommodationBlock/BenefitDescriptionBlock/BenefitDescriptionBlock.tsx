import React from 'react';
import './BenefitDescriptionBlock.less';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { accommodationOptions, rulesOfAccommodation } from
  '../../../AccommodationListPage/FiltersBlock/AdditionalFilters/AdditionalFilters';
import { OptionsType } from '../../../../interfaces/AccommodationTypes/OptionsType';
import { RulesType } from '../../../../interfaces/AccommodationTypes/RulesType';

type BenefitDescriptionBlockType = {
  options: OptionsType,
  rules: RulesType,
  description: string
};

const BenefitDescriptionBlock: React.FC<BenefitDescriptionBlockType> = ({ options, rules, description }: BenefitDescriptionBlockType) => (
  <>
    <div className="options-block">
      <div className="block-title">Удобства и условия проживания</div>
      {options.map((option) => (
        <div className="option" key={option.title}>
          {option.value ? <CheckOutlined style={{ color: '#78BA4D' }} /> : <CloseOutlined />}
          <span>{accommodationOptions.find((accOption) => accOption.value === option.title)?.label}</span>
        </div>
      ))}
    </div>
    <div className="description-block">
      <div className="block-title">Описание</div>
      {description}
    </div>
  </>
);

export default BenefitDescriptionBlock;
