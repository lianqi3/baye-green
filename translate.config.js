import { Lang } from 'language-translate/types'
import { defineConfig } from 'language-translate/utils'

export default defineConfig({
  translateRuntimeMergeEnabled: false,
  proxy: {
    host: '127.0.0.1',
    port: 7890,
  },
  fromLang: Lang['zh-CN'],
  fromPath: 'src/language/zh.json',
  translate: [
    {
      label: '将结果翻译到language文件夹下',
      targetConfig: [
        {
          targetLang: Lang['zh-TW'],
          outPath: 'src/language/tw.json',
        },
        {
          targetLang: Lang.ja,
          outPath: 'src/language/ja.json',
        },
        {
          targetLang: Lang.ko,
          outPath: 'src/language/ko.json',
        },
        {
          targetLang: Lang.id,
          outPath: 'src/language/id.json',
        },
        {
          targetLang: Lang.hi,
          outPath: 'src/language/hi.json',
        },
        {
          targetLang: Lang.en,
          outPath: 'src/language/en.json',
        },
        // {
        //   targetLang: Lang.es,
        //   outPath: 'src/language/es.json',
        // },
        // {
        //   targetLang: Lang.ja,
        //   outPath: 'src/language/ja.json',
        // },
        // {
        //   targetLang: Lang.ru,
        //   outPath: 'src/language/ru.json',
        // },
      ],
    },
  ],
})
