import { useEffect, useState } from 'react'
import { ApiGet } from '../services/API/api'

export default function useProjectData(productFilter) {
    const [loadingProduct, setLoading] = useState(true)
    const [errorProduct, setError] = useState(false)
    const [getAllProduct, setGetAllProject] = useState([])
    const [hasMoreProduct, setHasMore] = useState(false)


    const getProjectData = async () => {
        if (productFilter.page == 0) {
            return
        }
        await ApiGet(`get_product_by_category?productId=${productFilter?.id}`, productFilter)
            .then((response) => {
                setGetAllProject((product) => {
                    if (productFilter.page == 1) {
                        return (
                            [response?.data?.product, ...response?.data?.data]
                        )
                    }
                    return (
                        [...product, ...response?.data?.data]
                    )
                })
                setHasMore(response?.data?.data.length > 0)
                setLoading(false)
            })
            .catch(error => {
                console.log("Error", error)
            })
    }

    useEffect(() => {
        setLoading(true)
        setError(false)
        getProjectData();
    }, [productFilter?.page])

    return { loadingProduct, errorProduct, getAllProduct, hasMoreProduct }
}