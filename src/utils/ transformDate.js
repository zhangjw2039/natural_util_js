function transformDate(date, format, isFill = true) {
    if(Object.prototype.toString.call(date) !== '[object Date]' && Object.prototype.toString.call(date) !== '[object String]') {
        throw new Error('Invalid Date')
    }
    
    date = Object.prototype.toString.call(date) === '[object Date]' ? date : new Date(date)
    if(date.toString() === 'Invalid Date') {
        throw new Error('Invalid Date')
    }
    return formatFn(date, format, isFill)
}
function formatFn(date, format, isFill) {
    if(format.indexOf('YYYY') !== -1) {
        let year = date.getFullYear()
        format = format.replace('YYYY', year)
    }
    if(format.indexOf('MM') !== -1) {
        let month = date.getMonth() + 1
        month = (isFill && month < 10) ? '0' + month : month
        format = format.replace('MM', month)
    }
    if(format.indexOf('DD') !== -1) {
        let dates = date.getDate()
        dates = (isFill && dates < 10) ? '0' + dates : dates
        format = format.replace('DD', dates)
    }
    if(format.indexOf('HH') !== -1) {
        let hours = date.getHours()
        hours = (isFill && hours < 10) ? '0' + hours : hours
        format = format.replace('HH', hours)
    }
    if(format.indexOf('mm') !== -1) {
        let minutes = date.getMinutes()
        minutes = (isFill && minutes < 10) ? '0' + minutes : minutes
        format = format.replace('mm', minutes)
    }
    if(format.indexOf('SS') !== -1) {
        let seconds = date.getSeconds()
        seconds = (isFill && seconds < 10) ? '0' + seconds : seconds
        format = format.replace('SS', seconds)
    }
    return format
}
export default transformDate