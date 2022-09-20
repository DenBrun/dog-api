let dogImg = document.getElementById('dogImage')

// dogs

const getDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(json => {
            dogImg.src = json.message
        })
}

// just imgs
// const getDog = () => {
//     fetch('https://picsum.photos/1920/900')
//         .then(response => {
//             dogImg.src = response.url
//         })
// }


getDog()

document.getElementById('getDogButton').onclick = getDog