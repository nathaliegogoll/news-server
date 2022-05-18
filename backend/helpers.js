const checkDuplicates = (existingArray, newArray) => {
    if (existingArray.lenght == 0) {
        return newArray;
    }
    
    const combinedArray = existingArray;
    const existingLinks = existingArray.map(e => {
       return e.link;
    })

    newArray.forEach(element => {
        if (!existingLinks.includes(element.link)) {
            combinedArray.push(element)
        }
    });
    
    return combinedArray;
}

const checkTime = (array) => {
    return array.sort((a, b) => {
        var d1 = new Date(a.date)
        var d2 = new Date(b.date)
        return d2.getTime() - d1.getTime()
    })
}

module.exports = { checkDuplicates, checkTime };