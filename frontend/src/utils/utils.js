export const groupCategories = (categories) => {
   const result = [];
   
   for (let i = 0; i < categories.length; i += 2) {
      result.push(categories.slice(i, i + 2));
   }
   
   return result;
};