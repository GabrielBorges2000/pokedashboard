import { StaticImageData } from 'next/image';
import Image1 from '../assets/Game1.jpg'
import Image2 from '../assets/Game2.jpg'
import Image3 from '../assets/Game3.jpg'

export type iGame = {
    image: StaticImageData;
    name: string;
    category: string;
}

export type iMyGame = iGame & {
    install: boolean
}

export const gameData: iGame[] = [
    {
        image: Image1,
        name: 'Fornite',
        category: 'RPG',
    },
    {
        image: Image2,
        name: 'Arterly',
        category: 'RPG',
        
    },
    {
        image: Image3,
        name: 'League of Legends',
        category: 'RPG',
        
    }
]
export const myGameData: iMyGame[] = [
    {
        image: Image1,
        name: 'Fornite',
        category: 'RPG',
        install: true        
    },
    {
        image: Image2,
        name: 'Arterly',
        category: 'RPG',
        install: false        
    },
    {
        image: Image3,
        name: 'League of Legends',
        category: 'RPG',
        install: false       
    }
]