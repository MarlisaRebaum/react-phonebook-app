let token = 'd2cfe38a5a46f6bb960afdce6abb3acb130bba8960b31dca';

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://phonebook-codingtemple-marlisa.herokuapp.com/api/contacts`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },

    create: async(data: any = {}) => {
        const response = await fetch(`https://phonebook-codingtemple-marlisa.herokuapp.com/api/contacts`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok){
            throw new Error('Failed to create new data on server')
        }

        return await response.json()
    },

    update: async (id:string, data:any = {}) => {
        const response = await fetch(`https://phonebook-codingtemple-marlisa.herokuapp.com/api/contacts/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
    },

    delete: async(id:string) => {
        const response = await fetch(`https://phonebook-codingtemple-marlisa.herokuapp.com/api/contacts/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });
    }
};

