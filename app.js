document.getElementById('toggleButton').addEventListener('click', function () {
    const moreItems = document.querySelector('.more');
    const toggleButton = document.getElementById('toggleButton');

    if (moreItems.style.display === 'none' || moreItems.style.display === '') {
        moreItems.style.display = 'grid';
        toggleButton.innerHTML = 'See Less Dishes<img src="./icon/Arrow - Right Circle.svg">';
    } else {
        moreItems.style.display = 'none';
        toggleButton.innerHTML = 'See More Dishes<img src="./icon/Arrow - Right Circle.svg">';
    }
});
