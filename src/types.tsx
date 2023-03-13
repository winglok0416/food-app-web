export declare interface Ingredient {
    aisle: string,
    amount: number,
    id: number,
    image: string,
    meta: Array<string>,
    name: string,
    original: string,
    originalName: string,
    unit: string,
    unitLong: string,
    unitShort: string
}

export declare interface Recipe {
    id: number,
    image: string,
    imageType: string,
    likes: number,
    title: string,
    // missedIngredientCount: number,
    // missedIngredients: Array<Ingredient>,
    // usedIngredientCount: number,
    // usedIngredients: Array<Ingredient>,
    // unusedIngredients: Array<Ingredient>,
};