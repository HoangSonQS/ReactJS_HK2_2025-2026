const whereAmI = (lat: number, lng: number) => {
    fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
        .then(res => {
            if (!res.ok)
                throw new Error(`Problem with geocoding (${res.status})`)
            return res.json()
        })
        .then(data => {
            console.log(`You are in ${data.city}, ${data.country}`)
            return fetch(`https://restcountries.com/v3.1/name/${data.country}`)
        })
        .then(res => {
            if (!res.ok)
                throw new Error(`Country not found (${res.status})`)
            return res.json()
        })
        .then(data => {
            const country = data[0]
            console.log(`Found country info: ${country.name.common}, Region: ${country.region}`);
        })
        .catch(err => {
            console.log(`ERROR: ${err.message}`)
        })
}


whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);