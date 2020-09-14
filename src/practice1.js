const parseData = (input) => {
    const {data, column} = input;
    const keys = column.map(obj => obj.name)
    const output = [];
    data.map((info) => {
        const values = {}
        info.map((item,index) => {
            values[keys[index]] = item
        })
        output.push(values)
    })
    return output;
}
export { parseData };
