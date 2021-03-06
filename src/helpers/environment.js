let APIURL = ''

switch (window.location.hostname) {
    case 'localhost':
    case '127.0.0.1':
        APIURL = 'http://localhost:3000'
        break
    case 'm-gather.herokuapp.com':
        APIURL = 'https://jf-gather.herokuapp.com'
}

export default APIURL