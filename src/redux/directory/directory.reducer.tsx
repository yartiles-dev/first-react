export interface Directory {
    title: string;
    imageUrl:string;
    id: number;
    size?: string;
    linkUrl: string
}

const INITIAL_STATE: {
    sections: Directory[]
} = {
    sections: [
        {
            title: 'hats',
            imageUrl: process.env.NODE_ENV==='development' ? '/images/hats.png' : 'https://i.ibb.co/cvpntL1/hats.png',
            id: 1,
            linkUrl: 'shop/hats'
        },
        {
            title: 'jackets',
            imageUrl: process.env.NODE_ENV==='development' ? '/images/jackets.png' : 'https://i.ibb.co/px2tCc3/jackets.png',
            id: 2,
            linkUrl: 'shop/jackets'
        },
        {
            title: 'sneakers',
            imageUrl: process.env.NODE_ENV==='development' ? '/images/sneakers.png' : 'https://i.ibb.co/0jqHpnp/sneakers.png',
            id: 3,
            linkUrl: 'shop/sneakers'
        },
        {
            title: 'womens',
            imageUrl: process.env.NODE_ENV==='development' ? '/images/womens.png' : 'https://i.ibb.co/GCCdy8t/womens.png',
            size: 'large',
            id: 4,
            linkUrl: 'shop/womens'
        },
        {
            title: 'mens',
            imageUrl: process.env.NODE_ENV==='development' ? '/images/men.png' : 'https://i.ibb.co/R70vBrQ/men.png',
            size: 'large',
            id: 5,
            linkUrl: 'shop/mens'
        }
    ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default directoryReducer