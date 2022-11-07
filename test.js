import deepFind from './src/utils/deepFInd.js'

const arr = [
    {
        id: 1,
        name: '张三',
        children: [
            {
                id: 1.1,
                name: '里斯'
            }
        ]
    },
    {
        id: 2,
        name: '王二',
        children: [
            {
                id: 2.1,
                name: '王五'
            },
            {
                id: 2.2,
                name: '王八'
            }
        ]
    }
]

const a = deepFind(arr, 'id', 2.2)
console.log(a)