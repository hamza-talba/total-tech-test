const endpoint = "http://10.0.2.2:3000/users"
 
export const usersListRequest = async (params) => {
 
    const response = await fetch(endpoint+`?page=${params.page}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
         }       
        )
     return response.json()
}

export const userByIdRequest = async (params) => {  
      const response = await fetch(endpoint+`/${params.userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
         }       
        )
      return response.json()
}