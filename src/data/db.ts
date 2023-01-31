import Image1 from '../assets/Game1.jpg'
import Image2 from '../assets/Game2.jpg'
import Image3 from '../assets/Game3.jpg'

export type iGame = {
    image: string;
    name: string;
    category: string
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