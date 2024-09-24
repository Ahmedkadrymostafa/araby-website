interface DCard {
    id: string
    name: string,
    address: string,
    phone?: string,
    views?: number,
    likes?: number,
    date?: string,
    pageUrl: string,
}

interface DCardData {
    data: DCard[],
} 

export type { DCard }
export default DCardData