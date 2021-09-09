<template>
  <section class="hero___content">
    <div class="md:py-12 py-24">
      <div
        class="
          container
          px-3
          mx-auto
          flex flex-wrap flex-col
          md:flex-row
          items-center
        "
      >
        <!--Left Col-->
        <div
          class="
            flex flex-col
            w-full
            md:w-2/5
            justify-center
            lg:items-start
            items-center
            text-center
            md:text-left
            hero-text
          "
        >
          <h1 class="my-6 text-5xl font-bold">
            Happiness is not in money but in shopping
          </h1>
          <p class="leading-normal text-lg mb-4 py-2">
            Shoper helps you to organize and priotize your list and keep them on
            track ✔✔✔
          </p>

          <!-- <input
              type="email"
              class="
                md:w-4/5
                w-full
                px-2
                py-4
                mr-2
                bg-gray-100
                shadow-inner
                rounded-md
                border border-gray-400
                focus:outline-none
              "
              required
            /> -->
        </div>
      </div>
    </div>

    <div class="w-full flex flex-col md:flex-row py-6">
      <div class="flex-1 mx-8 py-6">
        <input
          type="text"
          class="
            md:w-5/6
            w-full
            px-2
            py-4
            mr-2
            bg-gray-100
            shadow-inner
            rounded-md
            border
            focus:outline-none
            text-input
          "
          required
          placeholder="Create List"
          v-model="currentList"
          v-on:keyup.enter="addList"
        />
      </div>

      <div class="flex-1 px-6 py-6">
        <input
          type="email"
          class="
            md:w-5/6
            w-full
            px-2
            py-4
            mr-2
            bg-gray-100
            shadow-inner
            rounded-md
            border
            focus:outline-none
            text-input
          "
          required
          placeholder="Category"
        />
      </div>
      <div class="flex-1 px-6 py-6">
        <input
          type="email"
          class="
            md:w-5/6
            w-full
            px-2
            py-4
            mr-2
            bg-gray-100
            shadow-inner
            rounded-md
            border
            focus:outline-none
            text-input
          "
          required
          placeholder="Quantity"
        />
      </div>

      <div class="flex-1 px-6 py-6">
        <button
          class="
            md:w-1/2
            w-full
            px-2
            py-4
            mr-2
            bg-gray-100
            shadow-inner
            rounded-md
            border
            focus:outline-none
            text-input
          "
          type="submit"
        >
          Save
        </button>
      </div>
    </div>
    <section class="body-font">
      <!-- component -->
      <TableList />
    </section>
  </section>
</template>

<script>
import TableList from "@/components/TableList";
export default {
  name: "Hero",
  components: {
    TableList
  },

};
</script>
<style scoped>
.btn-start {
  background: #273335;
  border-radius: 8px;
}
.text-input {
  background-color: #3e3e41;
  border: 2px solid #3e3e41;
}
.bg-hero {
  background-color: #f3f8f8;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='%23428d96' fill-opacity='0.37'%3E%3Cpolygon fill-rule='evenodd' points='8 4 12 6 8 8 6 12 4 8 0 6 4 4 6 0 8 4'/%3E%3C/g%3E%3C/svg%3E");
}
</style>


		
