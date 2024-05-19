function createUserProfiles(names, modifiedNames) {
    return names.map((name, index) => ({
        originalName: name,
        modifiedName: modifiedNames[index],
        id: index + 1
    }));
}

// Example usage
const names = ['Kwame', 'Daniel', 'Siaw', 'Michael', 'Eve'];
const modifiedNames = ['KWAME', 'Daniel', 'SIAW', 'Michael', 'EVE'];

const userProfiles = createUserProfiles(names, modifiedNames);
console.log(userProfiles);


