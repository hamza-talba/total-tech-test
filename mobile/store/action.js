export const usersListRequestAction = (params) => ({
    type: 'LIST_API_REQUEST',
    payload: {
        page: params.page,
    }
})

export const userByIdRequestAction = (params) => ( {
    type: 'USER_API_REQUEST',
    payload: {
        userId: params.userId
    }
})