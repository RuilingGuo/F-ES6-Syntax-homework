const parseData = (input) => {
    const {data} = input;
    const output = [];
    data.map((obj) => {
        const [name, age, gender, birthday] = obj;
        const result = { name, age, gender, birthday };
        output.push(result)
    })
    return output;
}
export { parseData };
