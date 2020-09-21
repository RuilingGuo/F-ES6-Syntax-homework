const parseData = (input) => {
    // TODO 解构可以优化到函数接受参数中
    const {data, column} = input;
    // TODO keys 没有必要
    const keys = column.map(obj => obj.name)
    // TODO 使用map做数组与数组的转化，不用声明output，查查map的使用
    const output = [];
    data.map((info) => {
        const values = {}
        // TODO 这一层不是使用map的场景
        info.map((item,index) => {
            values[keys[index]] = item
        })
        output.push(values)
    })
    return output;
}
export { parseData };
