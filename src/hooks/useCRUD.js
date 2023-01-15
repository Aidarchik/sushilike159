import { useCallback, useEffect, useState } from "react"
import useFetch from "./useFetch"

export default function useCRUD(URL) {

    const [data, setData] = useState([])
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
            setData([...data, response])
        } catch (e) { }
    }

    const onRead = useCallback(async (id = null) => {
        try {
            if (id) {
                const response = await request(URL + '/' + id, 'GET')
                setData(response.message.map(el => ({ ...el, isDelete: false, isUpdate: false })))
            }
            else {
                const response = await request(URL, 'GET')
                setData(response.message.map(el => ({ ...el, isDelete: false, isUpdate: false })))
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
            setData(data.map(elem => {
                if (elem._id === id) {
                    return { ...elem, isDelete: true }
                }
                return elem
            }))
            const response = await request(URL + '/' + id, 'DELETE')
            setData(data.filter(elem => elem._id !== response._id))
        } catch (e) { }
    }

    useEffect(() => {
        onRead()
    }, [onRead])


    return { data, loading, error, onCreate, onRead, onUpdate, onDelete };
}