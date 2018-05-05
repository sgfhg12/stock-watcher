export const calculateDate = (dates, i) => {
    let tick = Math.floor(dates.length / 10)
    let tickValues = [];
    for(var j = 0; j < dates.length; j = j + tick){
        tickValues.push(dates[j])
    }
    return tickValues;
}