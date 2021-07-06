import React from 'react';
import './BenefitDescriptionBlock.less';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { accommodationOptions, accommodationRules } from
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
    <div className="description-title">Удобства и условия проживания</div>
    <div className="accommodation-option-block">
      <div className="options-block">
        {options.map((option) => (
          <div className="option" key={option.title}>
            {accommodationOptions.find((accOption) => accOption.value === option.title)?.options ? (
              <span>
                {accommodationOptions.find((accOption) => accOption.value === option.title)?.label}
                {': '}
                {accommodationOptions.find((accOption) => accOption.value === option.title)
                  ?.options?.find((optionItem) => optionItem?.value === option.value)?.label}
              </span>
            ) : (
              <>
                {option.value ? <CheckOutlined style={{ color: '#78BA4D' }} /> : <CloseOutlined />}
                <span className="option-label">{accommodationOptions.find((accOption) => accOption.value === option.title)?.label}</span>
              </>
            )}
          </div>
        ))}
      </div>
      <div className="rules-block">
        {rules.map((rule) => (
          <div className="option" key={rule.title}>
            {rule.value ? <CheckOutlined style={{ color: '#78BA4D' }} /> : <CloseOutlined />}
            <span className="option-label">{accommodationRules.find((accRule) => accRule.value === rule.title)?.label}</span>
          </div>
        ))}
      </div>
    </div>
    <div className="description-block">
      <div className="description-title">Описание</div>
      {description}
    </div>
  </>
);

export default BenefitDescriptionBlock;
