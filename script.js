document.addEventListener('DOMContentLoaded',()=> { //Used this so that first DOM should be loaded and then the event should be added.
    const button = document.getElementById('btn');
    button.addEventListener('click', ()=> {
        confirm("You Want to Submit this Form");
    });
});
