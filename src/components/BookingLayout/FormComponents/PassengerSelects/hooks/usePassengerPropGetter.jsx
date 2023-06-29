import useMenuItemGetter from '../hooks/useMenuItemGetter';
import useFieldSizeGetter from '../../hooks/useFieldSizeGetter';
import useErrorGetter from '../../hooks/useErrorGetter';
import usePassengerSelectPropGetter from './usePassengerSelectPropGetter';

export default function usePropGetter(valueName) {
  const menuItemKey = `${valueName}MenuItems`;
  const propKey = `${valueName}Props`;
  const errorKey = `${valueName}Errors`;

  const menuItems = useMenuItemGetter(valueName);
  const props = usePassengerSelectPropGetter(valueName);
  const errors = useErrorGetter(valueName);
  const size = useFieldSizeGetter();

  return {
    [menuItemKey]: menuItems,
    [propKey]: props,
    [errorKey]: errors,
    size,
  };
}
