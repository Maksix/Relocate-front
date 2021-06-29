import React from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

type BreadcrumbsType = {
  breadcrumbs: {
    text: string,
    link?: string
  }[]
};

const Breadcrumbs: React.FC<BreadcrumbsType> = ({ breadcrumbs }: BreadcrumbsType) => (
  <Breadcrumb separator="->">
    {breadcrumbs.map((breadcrumb) => (
      <Breadcrumb.Item key={`breadcrumb-${breadcrumb.text}`}>
        {breadcrumb.link ? (
          <Link to={breadcrumb.link}>
            {breadcrumb.text}
          </Link>
        ) : (
          <>
            {breadcrumb.text}
          </>
        )}
      </Breadcrumb.Item>
    ))}
  </Breadcrumb>
);

export default Breadcrumbs;
