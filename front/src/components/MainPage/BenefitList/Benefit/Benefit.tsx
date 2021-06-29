import React, { ReactComponentElement } from 'react';
import './Benefit.less';

type BenefitProps = {
  title: string,
  icon: ReactComponentElement<any>,
  body: string,
};

const Benefit: React.FC<BenefitProps> = ({ title, body, icon }: BenefitProps) => (
  <div className="benefit">
    <div className="icon">
      {icon}
    </div>
    <div className="title">
      {title}
    </div>
    <div className="body">
      {body}
    </div>
  </div>
);

export default Benefit;
