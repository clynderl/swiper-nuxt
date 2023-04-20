import { defineConfig, presetUno, presetIcons } from 'unocss';
import { presetIconExtraProperties, presetAnu } from 'anu-vue';
import { presetThemeDefault } from '@anu-vue/preset-theme-default';

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
      extraProperties: presetIconExtraProperties,
    }),
    presetAnu(),
    presetThemeDefault(),
  ],
  include: [/.*\/anu-vue\.js(.*)?$/, './**/*.vue', './**/*.md'],
});
