<template>
  <!-- responsive table-->
  <div class="mt-2">
    <table class="max-w-6xl mx-auto table-auto my-12 overflow-x-scroll">
      <thead class="justify-between">
        <tr class="">
          <th class="px-16 py-2">
            <span class="text-gray-100 font-semibold">Category</span>
          </th>
          <th class="px-16 py-2">
            <span class="text-gray-100 font-semibold pl-15">List Item</span>
          </th>

          <th class="px-16 py-2">
            <span class="text-gray-100 font-semibold">Date</span>
          </th>

          <th class="px-16 py-2">
            <span class="text-gray-100 font-semibold">Quantity</span>
          </th>
          <th class="px-16 py-2">
            <span class="text-gray-100 font-semibold">Action</span>
          </th>
        </tr>
      </thead>
      <tbody
        v-for="(list, index) in lists"
        :key="index"
        :class="{ removed: list.checked }"
      >
        <tr class="border-b-2 border-gray-400">

          <input type="checkbox" v-model="list.checked" class="input-box" />

          <td class="label">
            <span class="text-center ml-2 font-semibold">{{ list.text }}</span>
          </td>

          <td class="px-16 py-2">
            <span>{{ list.date }}</span>
          </td>
          <td class="px-16 py-2">
            <span>1</span>
          </td>

          <td class="px-16 py-2">
            <span class="text-yellow-500 flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-green-700 mx-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
                />
                <path
                  fill-rule="evenodd"
                  d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-red-700 cursor-pointer"
                viewBox="0 0 20 20"
                fill="currentColor"
                v-on:click="removeList(index)"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "TableList",
  data() {
    return {
      lists: [
        { text: "Surface Laptop 2", date: "09/09/21", checked: false },
        { text: "GooglePixel 4xl", date: "09/09/21", checked: false },
        { text: "Sony 1000xm4", date: "09/09/21", checked: false },
      ],
      currentList: "",
    };
  },
  methods: {
    addList() {
      this.lists.push({ text: this.currentList, checked: false });
      this.currentList = "";
    },
    removeList(index) {
      this.lists.splice(index, 1);
    },
  },
};
</script>
<style>
.removed label {
  text-decoration: line-through;
}
.removed {
  color: red;
}
</style>