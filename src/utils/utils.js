export function getTime(num, ...args) {
  let time = new Date(num)
  let [y, m, d, hh, mm, ss] = [
    time.getFullYear(),
    time.getMonth() + 1,
    time.getDate(),
    time.getHours(),
    time.getMinutes(),
    time.getSeconds(),
  ]
  return `${y}年${m}月${d}日 ${hh}:${mm}:${ss}`
}

export function getTimeJ(num) {
  let time = new Date(num)
  let [ m, d, hh, mm] = [
    time.getMonth() + 1,
    time.getDate(),
    time.getHours(),
    time.getMinutes(),
  ]
  return `${m}月${d}日 ${hh}:${mm}`
}

export function getDay(num) {
  let time = new Date(num)
  let [y, m, d] = [
    time.getFullYear(),
    time.getMonth() + 1,
    time.getDate(),
  ]
  return `${y}年${m}月${d}日`
}

export function getHour(num) {
  let time = new Date(num)
  let [hh, mm, ss] = [
    time.getHours(),
    time.getMinutes(),
    time.getSeconds(),
  ]
  return `${hh}:${mm}:${ss}`
}

export function getReqUrl(type, targetArr) {
  return targetArr[type-1]
}

export function getItem(key) {
  return localStorage.getItem(key)
}
export function setItem(key, value) {
  return localStorage.setItem(key, value)
}

export function removeItem(key, value) {
  return localStorage.removeItem(key)
}
