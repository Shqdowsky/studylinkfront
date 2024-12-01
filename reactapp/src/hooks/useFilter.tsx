import React, { useMemo, useState } from "react"
import { IWork } from "../components/models/IWork"

export const useFilterWorks = (works: IWork[], query: any) => {
    const sortedWorks = useMemo(() => {
        return [...works].filter(work => work.title.toLocaleLowerCase().includes(query) || work.body.toLocaleLowerCase().includes(query))
    }, [query, works])
    return (sortedWorks)
}