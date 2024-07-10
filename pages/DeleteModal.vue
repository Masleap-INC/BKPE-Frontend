<template>
  <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-white rounded-lg p-8 max-w-md">
      <p class="text-lg font-semibold mb-4">Are you sure you want to delete?</p>
      <div class="flex justify-end">
        <button class="px-4 py-2 bg-red-500 text-white rounded mr-2" @click="confirmDelete">Delete</button>
        <button class="px-4 py-2 bg-gray-300 text-gray-700 rounded" @click="cancelDelete">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  methods: {
    confirmDelete() {
      // Call the deleteItem method in the parent component and pass the id
      this.$emit('delete', this.id);
      this.$emit('close');
    },
    cancelDelete() {
      this.$emit('close');
    }
  }
}
</script>

