import { useCallback, useState } from 'react';

export default function useNavMenu(setValue) {
  const [open, setOpen] = useState(null);
  const [onMenu, setOnMenu] = useState(null);

  const openNavMenu = useCallback(({ e, link }) => {
    setOpen({ target: e.currentTarget, link });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTimeout(() => {
      console.log(onMenu);

      if (!onMenu) {
        setOpen(null);
      }
    }, 2000);
  }, [onMenu]);

  const handleMouseOnMenu = useCallback(() => {
    setOnMenu(true);
  }, []);

  const closeNavMenu = useCallback(
    (link) => {
      setOpen(null);
      setOnMenu(null);

      if (!link.nativeEvent) {
        setValue(link);
      }
    },
    [setValue],
  );

  return {
    open,
    openNavMenu,
    handleMouseLeave,
    handleMouseOnMenu,
    closeNavMenu,
  };
}
