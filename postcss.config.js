import cssnano from 'cssnano';
import purgecss from '@fullhuman/postcss-purgecss';
import autoprefixer from 'autoprefixer';
export default {
  plugins: [
    autoprefixer,
    cssnano({
      preset: 'default',
    }),
    purgecss({
      content: ['./**/*.html'],
    }),
  ],
};
