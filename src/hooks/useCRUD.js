import { useCallback, useEffect, useState } from "react"
import useFetch from "./useFetch"

export default function useCRUD(URL) {

    const [data, setData] = useState(null)
    const { request, error, loading } = useFetch()

    const onCreate = async (createData) => {
        try {
            const response = await request(
                URL,
                'POST',
                JSON.stringify(createData),
                {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                }
            )
            if (data) setData([...data, response])
            else setData([response])

        } catch (e) { }
    }

    const onRead = useCallback(async (id = null) => {
        try {
            if (id) {
                const response = await request(URL + '/' + id, 'GET')
                if (response.message.length !== 0) {
                    setData(response.message)
                }
                else setData(null)
            }
            else {
                const response = await request(URL, 'GET')
                if (response.message.length !== 0) {
                    setData(response.message)
                }
                else setData(null)
            }
        } catch (e) { }
    }, [request, URL])

    const onUpdate = async (updateData) => {
        try {
            const response = await request(
                URL,
                'PUT',
                JSON.stringify(updateData),
                {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                }
            )
            setData(data.map(elem => {
                if (elem._id === response._id) { return response }
                return elem
            }))
        } catch (e) { }
    }

    const onDelete = async (id) => {
        try {
            const response = await request(URL + '/' + id, 'DELETE')
            if (data.length === 1) setData(null)
            else setData(data.filter(elem => elem._id !== response._id))
        } catch (e) { }
    }


    useEffect(() => {
        onRead()
    }, [onRead])

    return { data, loading, error, onCreate, onRead, onUpdate, onDelete };
}