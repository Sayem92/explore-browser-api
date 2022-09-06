console.log('hi')

const getCookiesByName = name =>{
    const cookieString = document.cookie
    const cookieParts = cookieString.split('; ')
    const cookie = cookieParts.find(c => c.includes(name))

    if(cookie){
        const cookieValue = cookie.split('=')[1]
        return cookieValue;
    }
}

//    BD