export const parseCode = (str: string, maxValue: number) => {
  const splitVal = str.split('-')
  str = str.replace(splitVal[0], '')
  str = str.replace(/\W+/g, "")
  str = str.match(new RegExp('.{1,' + maxValue + '}', 'g')).join('-').toUpperCase();
  return `${splitVal[0]}-${str}`
}