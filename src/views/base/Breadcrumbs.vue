<template>

    <div class="">



    </div>

</template>

<script>
export default {
  name: 'breadcrumbs',
  data () {
    return {
      items: [{
        text: 'Admin',
        href: '#'
      }, {
        text: 'Manage',
        href: '#'
      }, {
        text: 'Library',
        active: true
      }]
    }
  }
}
</script>
