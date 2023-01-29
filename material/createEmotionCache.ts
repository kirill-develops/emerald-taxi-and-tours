import createCache from '@emotion/cache';

export default function creatEmotionCache() {
  return createCache({ key: 'css', prepend: true });
};