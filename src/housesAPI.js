const HOUSES_ENDPOINT = 'https://ancient-taiga-31359.herokuapp.com/api/houses';

class HousesAPI {
    get = () => {
        try {
            const resp = fetch(HOUSES_ENDPOINT).then();
            const data = resp.json();
            return data;
        }
        catch(e) {
            console.log(e)
        }
    }
}

export const housesAPI = new HousesAPI();