<template>
  <div class="animated fadeIn">

    <b-row>

      <b-col md="12">
        <b-card>


          <div slot="header">

            <i class="fa fa-edit"></i> Estudiante

          </div>
          <b-row>
            <b-col sm="4">
              <b-form-group >
                <b-input-group-text><i class="fa fa-product-hunt"> Periodo Escolar</i></b-input-group-text>

                <b-form-select id="Periodo"

                               :plain="true"
                               :options="[1,2,3,4,5, ]">
                </b-form-select>

                <b-input-group-text><i class="fa fa-user" > Seccion</i></b-input-group-text>
                <b-form-select id="Seccion"
                               :plain="true"
                               :options="[1,2,3,4,5, ]">
                </b-form-select>


              </b-form-group>
            </b-col>

            <b-col sm="4">
              <b-form-group>

                <b-input-group-text><i class="fa fa-line-chart"> Nivel Escolar</i></b-input-group-text>
                <b-form-select id="Nivel"
                               :plain="true"
                               :options="[2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025]">
                </b-form-select>

              </b-form-group>
            </b-col>
            <b-col sm="4">
              <b-form-group>
                <b-input-group-text><i class="fa fa-object-group"> Curso</i></b-input-group-text>
                <b-form-select id="Curso"
                               :plain="true"
                               :options="[2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025]">


                </b-form-select>
              </b-form-group>


            </b-col>
          </b-row>
          <!--nombre-->
          <b-input-group class="mb-2">
            <b-input-group-prepend>
              <b-button variant="primary">Buscar</b-button>
            </b-input-group-prepend>
            <b-form-input type="text" class="form-control" placeholder="Nombre" autocomplete="username"  />
            <b-row>
              <b-col sm="12">
                <c-table :table-data="itemsArray" :per-page=10 hover striped bordered small fixed caption=""></c-table>
              </b-col>
            </b-row>



          </b-input-group>




        </b-card>



      </b-col>
    </b-row>






  </div>

</template>

<script>
import { shuffleArray } from '@/shared/utils'
import cTable from './Table'

const someData = () => shuffleArray([
  {Codigo: 'Samppa Nori', Estudiante: '2012/01/01', role: 'Member', status: 'Active', _rowVariant: 'success'},

])

export default {
  name: 'base',
  components: {cTable},
  data: () => {
    return {
      items: someData,
      itemsArray: someData(),
      fields: [
        {key: 'username', label: 'User', sortable: true},
        {key: 'registered'},
        {key: 'role'},
        {key: 'status', sortable: true}
      ],
    }
  }
}
</script>
