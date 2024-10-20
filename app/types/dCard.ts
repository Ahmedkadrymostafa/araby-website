interface DCard {
    id: string
    name: string | undefined,
    address: string | undefined,
    phone?: string,
    views?: number,
    likes?: number,
    date?: string,
    googleMapUrl?: string,
    pageUrl: string,
    source?: string,
}

interface DCardData {
    data: DCard[],
} 

export type { DCard }
export default DCardData