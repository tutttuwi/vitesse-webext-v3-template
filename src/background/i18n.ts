import en from '../../public/_locales/en/messages.json'
import ja from '../../public/_locales/ja/messages.json'

const messages = { en, ja }
type Language = keyof typeof messages
type MessageKey = keyof typeof en & keyof typeof ja

export const getMessage = (key: MessageKey) => {
  const lang = navigator.language.slice(0, 2) as Language
  return messages[lang || 'en'][key].message
}
