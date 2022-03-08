const format = (require_date) => {
  const new_date = new Date(require_date)
  const year = new_date.getFullYear()
  const month = new_date.getMonth() + 1
  const day = new_date.getDate()
  const dateOfWeekInteger = new_date.getDay()
  const date = [ "日", "月", "火", "水", "木", "金", "土" ][dateOfWeekInteger]  
  const hour = new_date.getHours()
  let minitue = new_date.getMinutes()
  if (minitue < 10) {
    minitue = `${0}${minitue}`
  }
  return `${year}/${month}/${day}(${date}) ${hour}:${minitue}`
}

export default ({}, inject) => {
  inject('format', format)
}
