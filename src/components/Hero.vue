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
          <h1 class="my-4 text-5xl font-bold leading-tight">
            Start organizing Your projects With Managie
          </h1>
          <p class="leading-normal text-lg mb-4 py-2">
            Managie helps you to organize and priotize your projects and keep
            them on track in a fun and flexible way
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
        />
      </div>

      <div class="flex-1 px-6 py-6">
        <p class="uppercase md:mb-6 font-bold py-2">Company</p>
      </div>
    </div>
    <section class="body-font">
      <!-- component -->
      <!-- responsive table-->
      <div class="mt-2">
        <table class="max-w-5xl mx-auto table-auto">
          <thead class="justify-between">
            <tr class="bg-green-600">
              <th class="px-16 py-2">
                <span class="text-gray-100 font-semibold">Avatar</span>
              </th>
              <th class="px-16 py-2">
                <span class="text-gray-100 font-semibold">Name</span>
              </th>

              <th class="px-16 py-2">
                <span class="text-gray-100 font-semibold">Date</span>
              </th>

              <th class="px-16 py-2">
                <span class="text-gray-100 font-semibold">Time</span>
              </th>

              <th class="px-16 py-2">
                <span class="text-gray-100 font-semibold">Setting</span>
              </th>
            </tr>
          </thead>
          <tbody class="bg-gray-200">
            <tr class="bg-white border-b-2 border-gray-200">
              <td class="px-16 py-2 flex flex-row items-center">
                <img
                  class="h-8 w-8 rounded-full object-cover"
                  src="https://randomuser.me/api/portraits/men/30.jpg"
                  alt=""
                />
              </td>
              <td>
                <span class="text-center ml-2 font-semibold">John Doe</span>
              </td>

              <td class="px-16 py-2">
                <span>05/06/2020</span>
              </td>
              <td class="px-16 py-2">
                <span>10:00</span>
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
                    class="h-5 w-5 text-red-700"
                    viewBox="0 0 20 20"
                    fill="currentColor"
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
            <tr class="bg-white border-b-2 border-gray-200">
              <td class="px-16 py-2 flex flex-row items-center">
                <img
                  class="h-8 w-8 rounded-full object-cover"
                  src="https://randomuser.me/api/portraits/men/76.jpg"
                  alt=""
                />
              </td>
              <td>
                <span class="text-center ml-2 font-semibold">John Frillo</span>
              </td>

              <td class="px-16 py-2">
                <span>05/06/2020</span>
              </td>
              <td class="px-16 py-2">
                <span>12:15</span>
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
                    class="h-5 w-5 text-red-700"
                    viewBox="0 0 20 20"
                    fill="currentColor"
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
            <tr class="bg-white border-b-2 border-gray-200">
              <td class="px-16 py-2 flex flex-row items-center">
                <img
                  class="h-8 w-8 rounded-full object-cover"
                  src="https://randomuser.me/api/portraits/men/38.jpg"
                  alt=""
                />
              </td>
              <td>
                <span class="text-center ml-2 font-semibold"
                  >Brett Castillo</span
                >
              </td>

              <td class="px-16 py-2">
                <span>05/06/2020</span>
              </td>
              <td class="px-16 py-2">
                <span>08:35</span>
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
                    class="h-5 w-5 text-red-700"
                    viewBox="0 0 20 20"
                    fill="currentColor"
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
    </section>
  </section>
</template>

<script>
export default {
  name: "Hero",
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


		
