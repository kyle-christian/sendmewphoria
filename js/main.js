document.querySelector('#submit').addEventListener('click', getCat);

function getCat() {
    document.querySelector('div').style.display = 'contents';

    fetch("https://api.thecatapi.com/v1/images/search")
        .then(res => res.json()) // parse response as JSON
        .then(data => {
        console.log(data)
        document.querySelector('img').src = data[0].url
        })
        .catch(err => {
            console.log(`error ${err}`)
    });
};

