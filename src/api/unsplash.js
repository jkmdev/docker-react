import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID DE8dGrQnnjjsgyO68C0nnzSQaIAzlsOcbVL2sc90SU8'
    }
});