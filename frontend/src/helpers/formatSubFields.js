export const formatSubFields = function(subFieldsArray)
{
    subFieldsArray = Array.from(subFieldsArray)
    if (subFieldsArray.length === 0)
    {
        return subFieldsArray;
    }
    const subFieldsExcludingDuplicates = new Array();
    subFieldsArray.forEach(function(subField, index)
    {
        if (!subFieldsExcludingDuplicates.includes(subField)) 
        {
            subFieldsExcludingDuplicates.push(subField)
        }     
    })
    
    const formattedArray = new Array();
    for (let i = 0; i < subFieldsExcludingDuplicates.length; i += 3)
    {
        let first = subFieldsExcludingDuplicates[i];
        let second = subFieldsExcludingDuplicates[i+1];
        let third = subFieldsExcludingDuplicates[i+2];
        if (first === undefined)
        {
            first = "";
        }
        if (second === undefined)
        {
            second = "";
        }
        if (third === undefined)
        {
            third = "";
        }
        
        let subFieldObject = {
            name1: first,
            name2: second,
            name3: third
        }
        formattedArray.push(subFieldObject);
    } // The for loop ends here.
    return formattedArray;
}