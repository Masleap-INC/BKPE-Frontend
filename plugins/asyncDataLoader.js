export default async ({ store }) => {
    try {
      await store.dispatch('products/getAppProducts');
      await store.dispatch('products/getCategories');
      await store.dispatch('products/getAppProductsAdmin')
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };