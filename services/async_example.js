//ajax request using 'fetch'
//https://rallycoding.herokuapp.com/api/music_albums
function fetchAPI() {
    fetch('')
     .then(res => res.json())
     .then(json => console.log(json));
}

async function fetchAPIRefactor() {
    const res = await fetch('');
    const json = await res.json();
    
    console.log(json);
}

const fetchAPIRefactor2 = async () => {
    const res = await fetch('');
    const json = await res.json();
    
    console.log(json);
}