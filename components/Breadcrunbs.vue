<template>
  <nav aria-label="Breadcrumb">
    <ol role="list" class="flex items-center space-x-1 text-sm text-gray-500">
      <li v-for="(page, index) in pages" :key="page.id" class="flex">
        <NuxtLink class="block transition-colors hover:text-gray-700" :to="page.link">{{ page.name }}</NuxtLink>
        <div v-show="pages.length - 1 !== index" class="flex">
          <SvgRightArrow />
        </div>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  props: ['pages'],
}
</script>
