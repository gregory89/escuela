<template>
  <AppHeaderDropdown right no-caret>
    <template slot="header">
      <img
        src=""
        class=""
        alt="" />
    </template>\
    <template slot="dropdown">




      <b-dropdown-header
        tag="div"
        class="text-center">
      </b-dropdown-header>




    </template>
  </AppHeaderDropdown>
</template>

<script>
import { HeaderDropdown as AppHeaderDropdown } from '@coreui/vue'
export default {
  name: 'DefaultHeaderDropdownAccnt',
  components: {
    AppHeaderDropdown
  },
  data: () => {
    return { itemsCount: 42 }
  }
}
</script>
