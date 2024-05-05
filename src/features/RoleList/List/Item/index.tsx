import { memo, useMemo, useState } from 'react';
import { shallow } from 'zustand/shallow';

import { agentListSelectors, useAgentStore } from '@/store/agent';

import ListItem from '../../ListItem';
import Actions from './Actions';

interface SessionItemProps {
  id: string;
  onClick: () => void;
}

const SessionItem = memo<SessionItemProps>(({ id, onClick }) => {
  const [open, setOpen] = useState(false);
  const [active] = useAgentStore((s) => [s.currentIdentifier === id]);
  const [getAgentById, isDefaultAgent] = useAgentStore((s) => [
    s.getAgentById,
    agentListSelectors.isDefaultAgent(s),
  ]);

  const isDefault = isDefaultAgent(id);
  const agent = getAgentById(id);
  const { name, description, avatar } = agent?.meta || {};

  const actions = useMemo(() => <Actions id={id} setOpen={setOpen} />, [id]);

  return (
    <ListItem
      actions={isDefault ? null : actions}
      active={active}
      avatar={avatar || ''}
      description={description || agent?.systemRole}
      onClick={onClick}
      showAction={open}
      title={name}
    />
  );
}, shallow);

export default SessionItem;
