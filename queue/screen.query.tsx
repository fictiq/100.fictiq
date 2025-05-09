import { useQuery } from "@tanstack/react-query"


export function useWriteScreen(idx) {
    return useQuery({
        queryFn: async () => {

            let bit =  await window['SOLID']( '', { idx })
            return bit

        },
        queryKey: ['writeScreen']
    })
}


export function useReadScreen( idx ) {
    return useQuery({
        queryFn: async () => {

            let bit =  await window['SOLID']( '', {idx })
            return bit

        },
        queryKey: ['readScreen']
    })
}
