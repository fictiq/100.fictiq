import { useQuery } from "@tanstack/react-query"


export function useWritePrimative(idx) {
    return useQuery({
        queryFn: async () => {

            let bit =  await window['SOLID']( '', {idx})
            return bit

        },
        queryKey: ['writePrimative']
    })
}


export function useReadPrimative(idx) {
    return useQuery({
        queryFn: async () => {

            let bit =  await window['SOLID']( '', {idx})
            return bit

        },
        queryKey: ['readPrimative']
    })
}
