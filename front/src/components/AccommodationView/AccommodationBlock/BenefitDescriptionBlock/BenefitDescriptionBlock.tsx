import React from 'react';
import './BenefitDescriptionBlock.less';
import { accommodationOptions, rulesOfAccommodation } from
  '../../../AccommodationListPage/FiltersBlock/AdditionalFilters/AdditionalFilters';

type BenefitDescriptionBlockType = {
  options: { value: string }[],
  rules: { value: string }[],
  description: string
};

const BenefitDescriptionBlock: React.FC<BenefitDescriptionBlockType> = ({ options, rules, description }: BenefitDescriptionBlockType) => (
  <>
    <div className="options-block">
      <div className="block-title">Удобства и условия проживания</div>
      <div />
      <div />
    </div>
    <div className="description-block">
      <div className="block-title">Описание</div>
      {description}
    </div>
  </>
);

export default BenefitDescriptionBlock;
