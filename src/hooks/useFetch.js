import { useCallback, useState } from "react";

export default function useFetch() {

    const [loading, setLoading] = useState({
        isCreate: false,
        isRead: false,
        isUpdate: false,
        isDelete: false,
        id: null
    });
    const [error, setError] = useState(null);

    const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        setLoading((loading) => ({ ...loading, id: null }));
        switch (method) {
            case 'GET':
                if (url.split('/')[5]) setLoading((loading) => ({ ...loading, isRead: true, id: url.split('/')[5] }))
                else setLoading((loading) => ({ ...loading, isRead: true }));
                break;
            case 'POST':
                setLoading((loading) => ({ ...loading, isCreate: true }));
                break;
            case 'PUT':
                setLoading((loading) => ({ ...loading, isUpdate: true, id: JSON.parse(body)._id }));
                break;
            case 'DELETE':
                setLoading((loading) => ({ ...loading, isDelete: true, id: url.split('/')[5] }));
                break;

            default:
                break;
        }
        try {
            const response = await fetch(url, { method, body, headers })
            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message || 'Что то пошло не так')
            }
            setLoading((loading) => ({
                ...loading,
                isCreate: false,
                isRead: false,
                isUpdate: false,
                isDelete: false
            }))
            return data

        } catch (e) {
            setLoading({
                isCreate: false,
                isRead: false,
                isUpdate: false,
                isDelete: false,
                id: null
            })
            setError(e.message)
            throw e
        }

    }, [])

    const clearError = useCallback(() => setError(null), [])

    return { loading, error, request, clearError };
}

