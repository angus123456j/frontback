const API_BASE = 'http://localhost:2356/recipes';

export const getAllRecipes = async () => {
    try{
        const result = await fetch(API_BASE);
        if(!result.ok) throw new Error('Failed to fetch recipes');
        return await result.json()

    }catch(err){
        console.error('Error fetching all recipes', err);
        throw err;
    }
};

