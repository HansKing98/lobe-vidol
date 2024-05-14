'use client';

import React, { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import TopBanner from '@/components/TopBanner';
import RoleDisplay from '@/features/AgentViewer/RoleDisplay/index';
import RoleEdit from '@/panels/RolePanel/RoleEdit';

import SideBar from './SideBar';
import { useStyles } from './style';

const Role = () => {
  const { styles } = useStyles();
  return (
    <Flexbox flex={1} height={'100%'} width={'100%'} horizontal>
      <SideBar />
      <Flexbox className={styles.preview}>
        <TopBanner title={'Role Preview and Setting'} />
        <Flexbox horizontal>
          <Flexbox className={styles.edit} flex={2}>
            <RoleEdit />
          </Flexbox>
          <Flexbox className={styles.model} flex={1}>
            <RoleDisplay />
          </Flexbox>
        </Flexbox>
      </Flexbox>
      {/*<RoleInfo />*/}
    </Flexbox>
  );
};

export default memo(Role);
