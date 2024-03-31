import { useCallback, useRef, useState } from 'react';

export default function useNavMenu(setValue) {
  const [open, setOpen] = useState(null);
  const menuRef = useRef();

  const openNavMenu = useCallback(({ e, link }) => {
    setOpen({ target: e.currentTarget, link });
  }, []);

  const closeNavMenu = useCallback(
    (link) => {
      setOpen(null);
      menuRef.current = null;

      if (!link.nativeEvent) {
        setValue(link);
      }
    },
    [setValue],
  );

  const handleMouseLeave = useCallback(() => {
    setTimeout(() => {
      if (!menuRef?.current?.isMouseOn) {
        setOpen(null);
      }
    }, 250);
  }, [menuRef]);

  const handleMouseOnMenu = useCallback(() => {
    if (menuRef?.current) {
      menuRef.current.isMouseOn = true;
    }
  }, []);

  return {
    open,
    openNavMenu,
    closeNavMenu,
    handleMouseLeave,
    handleMouseOnMenu,
    menuRef,
  };
}
