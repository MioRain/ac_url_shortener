function getStringFromCharCode(start, end) {
  let str = ''
  while (start < end) {
    str += String.fromCharCode(start++)
  }
  return str
}

function getAlphanumericStr() {
  let collection = ''
  const passwordCondition = {
    lowercase: getStringFromCharCode(97, 97 + 26),
    uppercase: getStringFromCharCode(65, 65 + 26),
    numbers: getStringFromCharCode(48, 48 + 10)
  }

  for (let key in passwordCondition) {
    collection += passwordCondition[key]
  }
  return collection
}

function getRandomAN(length) {
  const str = getAlphanumericStr()
  let randomNum = ''
  let randomAN = ''
  for (let i = 0; i < length; i++) {
    randomNum = Math.floor(Math.random() * str.length)
    randomAN += str[randomNum]
  }
  return randomAN
}

export default getRandomAN