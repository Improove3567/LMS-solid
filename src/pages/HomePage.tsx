import React from 'react';
import { useTranslation } from 'react-i18next';
import PageContainer from '../components/PageContainer/PageContainer';

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <PageContainer name="User" puth="*" btnText="Click here">
        <h1>{t('LMS')}</h1>
      </PageContainer>
    </div>
  );
};

export default HomePage;
