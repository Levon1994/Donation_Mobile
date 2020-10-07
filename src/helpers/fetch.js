import AsyncStorage from '@react-native-community/async-storage';
import { BASE_URL } from '../configs';

const clearAppData = async function() {
    try {
        const keys = await AsyncStorage.getAllKeys();
        await AsyncStorage.multiRemove(keys);
    } catch (error) {
        console.error('Error clearing app data.');
    }
}

export default class Fetch {
    static async fetch(options) {
        const ACCESS_TOKEN = await AsyncStorage.getItem('token');
        const { headers, method, body, path, data, withAuthToken, verify } = options;

        let requestOptions = {
            headers: {
                'Accept': 'application/json',
                ...headers,
            },
            method,
            redirect: 'follow',
        };

        if(withAuthToken) {
            requestOptions.headers['Authorization'] = `Bearer ${ACCESS_TOKEN}`;
        }

        if (body) {
            requestOptions.headers['Content-Type'] = 'application/json';
            requestOptions.body = JSON.stringify(body);
        } else if(data) {
            requestOptions.body = data;
        }
        // Fire the Request and Return the response promise Object
        const response = await fetch(new Request(`${BASE_URL}${path}`, requestOptions))
        .then(res => res.json())
        .then(res => res);

        if ((response?.detail || response?.token) && verify) {
            clearAppData();
        }

        return response;
    }

    /* GET (retrieve) */
    static get = options => Fetch.fetch({ ...options, method: 'GET' });

    /* POST (create) */
    static post = options => Fetch.fetch({ ...options, method: 'POST' });

    /* PUT (update) */
    static put = options => Fetch.fetch({ ...options, method: 'PUT' });;

    /* DELETE (remove) */
    static delete = options => Fetch.fetch({ ...options, method: 'DELETE' });
}
