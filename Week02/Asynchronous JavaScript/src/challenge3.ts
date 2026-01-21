const wait = (seconds: number) => {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000))
}

const imgContainer = document.querySelector('.images') as HTMLElement

const createImage  = (imgPath: string): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
        const img = document.createElement('img')

        img.src = imgPath

        img.addEventListener('load', () => {
            imgContainer.append(img)
            resolve(img)
        })

        img.addEventListener('error', () => {
            reject(new Error('Image not found'))
        })
    })
}

const loadNpause = async () => {
    try {
        let img = await createImage('img/img.jpg')
        console.log('Image 1 loaded');

        await wait(2)
        img.style.display = 'none'

        img = await createImage('img/img2.jpg')
        console.log('Image 2 loaded');

        await wait(2)
        img.style.display = 'none'
    } catch (err) {
        console.log(err);
    }
}

const loadAll = async (imgArr: string[]) => {
    try {
        const imgs = imgArr.map( async (imgPath) => await createImage(imgPath))

        const run = await Promise.all(imgs)
        console.log('All images loaded:', run)

        run.forEach(img => img.classList.add('parallel'));
    } catch (err) {
        console.log(err);
    }
}


console.log("RUN");
// loadNpause()
loadAll(['img/img.jpg', 'img/img2.jpg'])