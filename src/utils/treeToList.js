/**
 * @description: 
 * @return {*}
 */
function treeToList(tree, children = 'children') {
    const arr = []
    const uniarr = [...tree]
    while(uniarr.length > 0) {
        const item = uniarr.shift()
        arr.push({
            ...item,
            [children]: []
        })
        if(item[children] && item[children].length > 0) {
            uniarr.push(...item[children])
        }
    }
    return arr
}

export default treeToList