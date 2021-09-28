
const ADD_MESSAGE = 'ADD-MESSAGE'

let initialState = {
    dial: [
        { id: 1, name: 'Dima', adres: 'https://i.pinimg.com/474x/68/bf/63/68bf6332f73706ed6ce388b5fdaf9a98.jpg' },
        { id: 2, name: 'Andrey', adres: 'https://uprostim.com/wp-content/uploads/2021/01/image066-37.jpg' },
        { id: 3, name: 'Sveta', adres: 'https://srisovat.ru/wp-content/uploads/2018/10/milye-malenkie-risunki-dlja-srisovki-1.jpg' },
        { id: 4, name: 'Sasha', adres: 'https://shutniki.club/wp-content/uploads/2019/12/kartinki_pikachu_dlya_srisovki_2_29150237-600x372.jpg' },
        { id: 5, name: 'Victor', adres: 'https://bipbap.ru/wp-content/uploads/2019/05/86ae0b2400c92d333751c8d9a9ae68e4.png' },
        { id: 6, name: 'Valera', adres: 'https://webmg.ru/wp-content/uploads/2020/12/prostye-risunki-dlya-srisovki.jpg' }
    ],
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your it-kamasutra' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo' },
        { id: 6, message: 'Yo' }
    ]

}

const messagesReduser = (state = initialState, action) => {

    switch (action.type) {

        case ADD_MESSAGE:
            
            return {
                ...state,
                messages: [...state.messages, { id: (state.messages.length + 1),  message: action.values.Message }],
                
            }

        default:
            return state
    }
}
export default messagesReduser

export const addMessage = (values) => {
    return { type: ADD_MESSAGE , values}
}

