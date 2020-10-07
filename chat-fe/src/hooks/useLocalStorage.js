import {useEffect, useState} from 'react'

const PREFIX = 'chat-app-'


export default function useLocalStorage(key, initialValue) {

    const prefixedKey = PREFIX + key

    const [value,setValue] = useState( () => {

        const jsonValue = localStorage.getItem(prefixedKey)
        if(jsonValue) return JSON.parse(jsonValue)

    } )

    



}
