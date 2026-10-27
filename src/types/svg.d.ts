// SVG files are compiled to components by react-native-svg-transformer (metro.config.js)
declare module '*.svg' {
  import type {FC} from 'react';
  import type {SvgProps} from 'react-native-svg';

  const content: FC<SvgProps & {className?: string}>;
  export default content;
}
