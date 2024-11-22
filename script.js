document.getElementById('cssButton').addEventListener('click', function() {
    filterItems('css');
});

document.getElementById('jsButton').addEventListener('click', function() {
    filterItems('js');
});

document.getElementById('allButton').addEventListener('click', function() {
    filterItems('all');
});

function filterItems(type) {
    const items = document.querySelectorAll('.grid-item');
    if (type == "all"){
        items.forEach(item => {
            if (item.id.startsWith("css")) {
                item.style.display = 'block'; // Show items with matching ID
            } else {
                item.style.display = 'block'; // Hide others
            }

        });
        return false
    }
    items.forEach(item => {
        if (item.id.startsWith(type)) {
            item.style.display = 'block'; // Show items with matching ID
        } else {
            item.style.display = 'none'; // Hide others
        }
    });
}

// menu
let btn=document.querySelector('#btn');
let icon=document.querySelector('.fa-xmark');
 

function modal() {
    document.body.querySelector('.modal').style.display= "block"
} 

function icn() {
     document.body.querySelector('.modal').style.display= "none"
}

btn.addEventListener('click', modal)
icon.addEventListener('click', icn)