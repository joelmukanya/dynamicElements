// Function
function smartPeople() {
    // Create an array
    let names = [
        'Joel', 'Class 2',
        'Sarah', 'Peter', 'Samuel',
        'David', 'Godwin'
    ];

    let ul = document.createElement('ul');
    // Let place the ul on our body
    document.body.appendChild(ul);
    // names
    names.forEach( (item, index)=> {
        ul.innerHTML += `
            <li>${index}: ${item} </li>
        `;
    });
}
// Call a function
smartPeople();