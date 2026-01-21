// const wait = (seconds: number) => {
//     return new Promise(resolve => setTimeout(resolve, seconds * 1000))
// }

// const imgContainer = document.querySelector('.images') as HTMLElement

// const createImage  = (imgPath: string): Promise<HTMLImageElement> => {
//     return new Promise((resolve, reject) => {
//         const img = document.createElement('img')

//         img.src = imgPath

//         img.addEventListener('load', () => {
//             imgContainer.append(img)
//             resolve(img)
//         })

//         img.addEventListener('error', () => {
//             reject(new Error('Image not found'))
//         })
//     })
// }

// let currentImg: HTMLImageElement;

// createImage('img/img.jpg')
//     .then(img => {
//         currentImg = img
//         console.log('Img 1 loaded');
//         return wait(2)
//     })
//     .then(() => {
//         currentImg.style.display = 'none'
//         return createImage('img/img2.jpg')
//     })
//     .then(img => {
//     currentImg = img;
//     console.log('Image 2 loaded');
//     return wait(2);
//     })
//     .then(() => {
//         currentImg.style.display = 'none';
//     })
//     .catch(err => console.error(err));

