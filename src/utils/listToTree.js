/**
 * @description: 一维数组转成树形结构数组
 * @return {*}
 */
function listToTree(arr, iden = 'id', children = 'children', parentIden = 'parent') {
    const nodeMap = new Map()
    const result = []
    for (const node of arr) {
        node[children] = node[children] || []
        nodeMap.set(node[iden], node)
    }
    for (const node of arr) {
        
        const parent = nodeMap.get(node[parentIden])
        // console.log(parent)
        if(parent) { // 获取到所有带有子类的项
            parent[children].push(node)
        }else {
            result.push(node)
        }
    }
    return result
}

module.exports = listToTree
