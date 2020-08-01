<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 86164e3b8c9125e188061fb0af886930bfd0c43e
export const getFieldForNumber = function(fieldID: number)
{
    let fieldsArray = [];
    fieldsArray[1] = "Biology";
    fieldsArray[2] = "Physics";
    fieldsArray[3] = "Social Sciences";
    fieldsArray[4] = "Mathematics and Statistics";
    fieldsArray[5] = "Space Sciences";
    fieldsArray[6] = "Computer Science";
    fieldsArray[7] = "Engineering and Technology";
    fieldsArray[8] = "Earth Sciences";
    return fieldsArray[fieldID];
}

export const getSubFieldForNumber = function subFieldID(subFieldID: number)
{
    let subFieldsArray = [];
    for (let i = 1; i < 20; i++)
    {
        subFieldsArray[i] = "Sub field " + i.toString;
    }
    return subFieldsArray[subFieldID];
}

<<<<<<< HEAD
>>>>>>> e0ff23a36d49cd1b62e9c5eaf71176fdc3b0cc64
=======
>>>>>>> 86164e3b8c9125e188061fb0af886930bfd0c43e
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
