export declare interface Ingredient {
  aisle: string;
  amount: number;
  id: number;
  image: string;
  meta: Array<string>;
  name: string;
  original: string;
  originalName: string;
  unit: string;
  unitLong: string;
  unitShort: string;
}

export declare interface Recipe {
  id: number;
  image: string;
  imageType: string;
  likes: number;
  title: string;
}

export declare interface Step {
  number: number;
  step: string;
}
export declare interface RecipeDetail {
  name: string;
  steps: Array<Step>;
}

export declare interface Nutrition {
  name: string;
  calories: number;
  serving_size_g: number;
  fat_total_g: number;
  fat_saturated_g: number;
  protein_g: number;
  sodium_mg: number;
  potassium_mg: number;
  cholesterol_mg: number;
  carbohydrates_total_g: number;
  fiber_g: number;
  sugar_g: number;
}
