import { Tooltip as TooltipAntd } from 'antd';

import { TooltipTestIds } from './__test__/Tooltip.spec';
import { ContainerExternal, ContainerTooltip } from './tooltip.style';

interface TolltipProps {
  children: React.ReactNode;
  tooltip?: React.ReactNode;
  title?: string;
}

const Tooltip = ({ children, tooltip, title }: TolltipProps) => {
  if (title) {
    return <TooltipAntd title={title}>{children}</TooltipAntd>;
  }

  return (
    <ContainerTooltip>
      <ContainerExternal>{tooltip}</ContainerExternal>
      {children}
    </ContainerTooltip>
  );
};

export default Tooltip;