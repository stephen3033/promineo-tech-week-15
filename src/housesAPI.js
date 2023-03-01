const HOUSES_ENDPOINT = 'https://ancient-taiga-31359.herokuapp.com/api/houses';

class HousesAPI {
    get = async () => {
        try {
            const resp = await fetch(HOUSES_ENDPOINT);
            const data = await resp.json();
            
            console.log(data);
            return data;
        }
        catch(e) {
            console.log(e)
        }
    }

    put = async (house) => {
        try {
            const resp = await fetch(`${HOUSES_ENDPOINT}/${house._id}`, {
                method: 'PUT',
                headers : {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(house),
            });
            return await resp.json();
        }
        catch (e) {
            console.log(e)
        }
    }
}

export const housesAPI = new HousesAPI();