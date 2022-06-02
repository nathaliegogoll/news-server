const {checkDuplicates, checkTime} = require('./helpers.js')

describe('CheckDuplicates', () => {
    test('check for empty existing array', () => {
        array1 = [];
        array2 = [1, 2, 3];
    
        const result = checkDuplicates(array1, array2);
    
        expect(result).toEqual(array2);
    });
    test('concatinating', () => {
        array1 = [{link: 1}, {link: 2}];
        array2 = [{link: 3}, {link: 4}]
    
        const result = checkDuplicates(array1, array2);
    
        expect(result).toEqual([{link: 1}, {link: 2}, {link: 3}, {link: 4}]);
    });
    test('removes duplicates', () => {
        array1 = [{link: 1}, {link: 2}];
        array2 = [{link: 2}, {link: 3}]
    
        const result = checkDuplicates(array1, array2);
    
        expect(result).toEqual([{link: 1}, {link: 2}, {link: 3}]);
    });
})
describe('CheckTime', () => {
    test('sorts after time', () => {
        array = [
        {date: 'Wed, 15 May 2022 15:43:05 +0200'}, 
        {date: 'Wed, 18 May 2022 15:43:05 +0200'}, 
        {date: 'Wed, 16 May 2022 15:43:05 +0200'}];
    
        const result = checkTime(array);
    
        expect(result).toEqual([{date: 'Wed, 18 May 2022 15:43:05 +0200'}, {date: 'Wed, 16 May 2022 15:43:05 +0200'}, {date: 'Wed, 15 May 2022 15:43:05 +0200'}]);
    });
})