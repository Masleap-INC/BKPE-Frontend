export default async ({ store }) => {
    try {
      await store.dispatch('products/getAppProducts');
      await store.dispatch('products/getCategories');
      await store.dispatch('products/getAppProductsAdmin')
      // await store.dispatch('auth/attempt',"GAsds")
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };