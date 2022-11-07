function deepFind(source, key, value, children = 'children') {
    if(!(source instanceof Array)) {
        throw new Error('Invalid source')
    }
    let temp = null
    for (let index = 0; index < source.length; index++) {
        console.log(source[index][key], value)
        if(source[index][key] === value) {
            temp = source[index]
        }else {
            if(source[index][children] && source[index][children].length) {
                temp = deepFind(source[index][children], key, value, children)
            }
        }
        if(temp) {
            break
        }
        
    }
    return temp
}
export default deepFind