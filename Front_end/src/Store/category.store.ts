import create from 'zustand'
export interface ICategory{
    categoryName : string;
}

export const useCategoryStore = create(set => ({
  categoryName:"",
  setCategoryName: (value:string) => set((state:any) => ({ categoryName: value })),
}))
