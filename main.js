function calculateDaysNeeded() {
    let input = document.getElementById('input-pages').value;
    let pages = parseInt(input);
    if (isNaN(pages)) {
        document.getElementById('pages-output').innerHTML = 'BROOO!!, This is not a number!!!! Go to Kindergarten';
        return;
    }
    if (pages <= 0 || pages > 604) {
        document.getElementById('pages-output').innerHTML = 'You can\'t read this amount of pages';
        return;
    }
    let result = 604 / pages;

    document.getElementById('pages-output').innerHTML = 'The number of days you need is ' +  Math.round(result) + ' have fun reading ';
}