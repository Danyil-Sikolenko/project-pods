const chooseColor = document.querySelectorAll('.choose_color_btn');
const contentItems = document.querySelectorAll('.content_items_change');

chooseColor.forEach(function(Elements){
    Elements.addEventListener('click',open)
})

function open(evt){
    const target = evt.currentTarget;
    const button = target.dataset.button;
    const contentActive = document.querySelectorAll(`.${button}`);

    chooseColor.forEach(function(item){
        item.classList.remove('choose_color_btn-active')
    })

    target.classList.add('choose_color_btn-active')


    contentItems.forEach(function(item){
        item.classList.remove('content_items_change-active')
    });

    contentActive.forEach(function(item){
        item.classList.add('content_items_change-active')

    })
}
