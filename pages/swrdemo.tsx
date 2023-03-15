import React from 'react'
import useSWR from 'swr'

const fetcher = (url : string) => fetch(url).then(res => res.json())

export default function swrdemo() {
const URL = 'https://api.github.com/repos/vercel/swr'
const {data, error, isLoading} = useSWR(URL, fetcher)

if(error) return "Error";
if(isLoading) return "Still loading....";

  return (
    <div>swrdemo {data.name} {data.fullname} </div>
  )
}
