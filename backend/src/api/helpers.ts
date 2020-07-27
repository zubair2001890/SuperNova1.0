export const addStringToArray = function (stringArray: Array<String>, newString: String)
{   let currentArray = new Array();
    if (stringArray !== null && stringArray !== undefined)
    {
        currentArray = stringArray;
    }
    console.log("typeof currentArray = " + typeof currentArray);
    currentArray.push(newString);
    return currentArray;
}

export const arrayContainsString = function(stringArray: Array<String>, string: String)
{
    for (let i = 0; i < stringArray.length; i++)
    {
        if (stringArray[i] === string)
        {
            return true;
        }
    }
    return false;
}
