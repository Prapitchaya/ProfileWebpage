import React from 'react'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then(res => res.json())

function useUser(id: number) {
    const { data, error, isLoading } = useSWR(`https://randomuser.me/api${id}`, fetcher)

    return {
        user: data,
        isLoading,
        isError: error
    }
    
}

