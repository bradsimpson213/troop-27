export const normalizeObj = (arr) => {
    const obj = {};
    arr.forEach((ele) => obj[ele.id] = ele );
    console.log(obj)
    return obj;
}