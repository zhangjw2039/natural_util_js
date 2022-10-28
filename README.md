## 安装
```
npm install natural_util_js
```

## listToTree
``` js

    // arr 数据源（必传）, 
    // iden = 'id'（唯一值）, 
    // children = 'children'（子类集合属性）, 
    // parentIden = 'parent'（父类标识）
    listToTree(arr)
```

## treeToList
``` js

    // tree 数据源（必传）,  
    // children = 'children'（子类集合属性）, 
    treeToList(tree)
```

## transformDate
``` js

    // date 数据源（必传）'2022-9-10' 或者date对象,  
    // format(必传) = YYYY(单位)MM(单位)DD(单位) HH(单位)mm(单位)SS(单位),
    // isFill 默认true 补零 
    transformDate(date, format, isFill)
```