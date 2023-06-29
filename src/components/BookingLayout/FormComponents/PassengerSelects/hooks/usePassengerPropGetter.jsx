import useMenuItemGetter from '../hooks/useMenuItemGetter';
import usePassengerSelectPropGetter from './usePassengerSelectPropGetter';

export default function usePropGetter(valueName) {
  const menuItemKey = `${valueName}MenuItems`;
  const propKey = `${valueName}Props`;

  const menuItems = useMenuItemGetter(valueName);
  const props = usePassengerSelectPropGetter(valueName);

  return {
    [menuItemKey]: menuItems,
    [propKey]: props,
  };
}
