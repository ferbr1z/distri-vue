<template>
    <nav v-if="totalPages > 1">
      <ul class="pagination">
        <li class="page-item" :class="{ 'disabled': currentPage === 1 }">
          <a class="page-link" @click="changePage(currentPage - 1)" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
  
        <li v-for="page in totalPages" :key="page" class="page-item" :class="{ 'active': currentPage === page }">
          <a class="page-link" @click="changePage(page)">{{ page }}</a>
        </li>
  
        <li class="page-item" :class="{ 'disabled': currentPage === totalPages }">
          <a class="page-link" @click="changePage(currentPage + 1)" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'PaginationComponent',
    props: {
      totalItems: {
        type: Number,
        required: true
      },
      totalPages: {
        type: Number,
        required: true
      },
      currentPage: {
        type: Number,
        required: true
      }
    },
    methods: {
      changePage(page) {
        if (page > 0 && page <= this.totalPages && page !== this.currentPage) {
          this.$emit('page-change', page);
        }
      }
    }
  };
  </script>