const animals = ['crab', 'frog', 'dog'];

function showArr(arr, elem) {
    let out = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != undefined) {
            out += `<div><img src='./img/${arr[i]}.png' class="img_animal"><span>${i}</span></div>`
        }

    }
    document.querySelector(elem).innerHTML = out;
    document.querySelector('.out_length').innerHTML = `length arr ${animals.length}`;
    document.querySelector('.out').innerHTML = `const animals = ['${animals}']`;

}

showArr(animals, '.out_img');

function addToArray() {
    let index = parseInt(document.querySelector('.array_index').value);
    if (index > 50) {
        alert('WOOOW enter number less')
        return false;
    } else if (index < 0) {
        alert('Write Index > 0')
        return false;
    }
    animals[index] = document.querySelector('.array_element').value;
    showArr(animals, '.out_img');

}

document.querySelector('.add_to_array').addEventListener('click', () => addToArray());