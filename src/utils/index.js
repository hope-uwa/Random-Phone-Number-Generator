
export const randomUniqueNumbers =(allNumber) => {
    let uniqueNumber = Math.floor(Math.random()*8+1)+Math.random().toString().slice(2,10);
    if(allNumber[uniqueNumber]){
        randomUniqueNumbers(allNumber)
    }
    return uniqueNumber;
}

export function generateNumbers(amount) {
    const generatedCollection = {};
    for (var i = 0; i < amount; i++) {
        let generated = randomUniqueNumbers(generatedCollection)
        generatedCollection[generated] = `0${generated}`
    }
    const { maxNumber, minNumber, data, sorted } = sortData(generatedCollection)
    return {
        maxNumber,
        minNumber,
        data,
        sorted
    }
}

export function sortData (data, desc) {
const arrange = typeof(data) === 'object' ? Object.values(data).sort() : data;
const maxNumber = arrange[arrange.length-1];
const minNumber = arrange[0];
const rearrange = desc  ? arrange.reverse() : arrange
const sorted = rearrange.reduce((rows, key, index) => (index % 10 === 0 ? rows.push([key]) 
  : rows[rows.length-1].push(key)) && rows, []);
return { maxNumber, minNumber, data: rearrange, sorted }
}


