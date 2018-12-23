<template>
  <div class="animated fadeIn">



    <b-row>
      <b-col md="12">
        <b-card>
          <div slot="header">
            <strong>Formulario de Docente </strong>
          </div>
          <b-input-group class="mb-3">
            <b-input-group-prepend>
              <b-input-group-text><i class="fa fa-user"></i></b-input-group-text>
            </b-input-group-prepend>
            <b-form-input type="text"  class="form-control" placeholder="Nombre" autocomplete="username"  />
          </b-input-group>

          <b-input-group class="mb-3">
            <b-input-group-prepend>
              <b-input-group-text><i class="icon-user-follow"></i></b-input-group-text>
            </b-input-group-prepend>
            <b-form-input type="text" class="form-control" placeholder="Apellidos" autocomplete="username" />
          </b-input-group>

          <b-input-group class="mb-3">
            <b-input-group-prepend>
              <b-input-group-text><i class="fa fa-home"></i></b-input-group-text>
            </b-input-group-prepend>
            <b-form-input type="text" class="form-control" placeholder="Direccion" autocomplete="username" />
          </b-input-group>

          <b-input-group class="mb-3">
            <b-input-group-prepend>
              <b-input-group-text><i class="fa fa-envelope"></i></b-input-group-text>
            </b-input-group-prepend>
            <b-form-input type="text" class="form-control" placeholder="Email" autocomplete="username" />
          </b-input-group>

          <b-input-group class="mb-3">
            <b-input-group-prepend>
              <b-input-group-text><i class="fa fa-phone"></i></b-input-group-text>
            </b-input-group-prepend>
            <b-form-input type="text" class="form-control" placeholder="Telefono" autocomplete="username" />
          </b-input-group>


          <b-input-group class="mb-3">
            <b-input-group-prepend>
              <b-input-group-text><i class="icon-date">Fecha Nacimiento</i></b-input-group-text>
              <b-form-input type="date" id="date"> </b-form-input>

            </b-input-group-prepend>
          </b-input-group>





          <!--curso-->

          <b-input-group class="mb-3">
            <b-input-group-prepend>
              <b-input-group-text> <i class="icon-folder"> Curso </i></b-input-group-text>
              <b-form-select id="Seleccionar Curso"
                             label-for="basicSelectLg"
                             :label-cols="3"
                             :plain="true"
                             :options="['Seleccionar Curso ','Option 1', 'Option 2', 'Option 3']"
                             value="Seleccionar Curso">

              </b-form-select>
            </b-input-group-prepend>
          </b-input-group>

          <!--asignatura   -->
          <b-input-group class="mb-3">
            <b-input-group-prepend>
              <b-input-group-text> <i class="icon-folder">Asignatura</i></b-input-group-text>
              <b-form-select id="Seleccionar Asignatura<"
                             label-for="basicSelectLg"
                             :label-cols="3"
                             :plain="true"
                             :options="['Seleccionar Curso ','Option 1', 'Option 2', 'Option 3']"
                             value="Seleccionar Asignatura< ">

              </b-form-select>
            </b-input-group-prepend>
          </b-input-group>

            <!--Sexo-->
          <b-input-group-prepend>
            <b-form-group

              label="Sexo"
              label-for="basicCustomRadios1"
              :label-cols="3"
              :horizontal="true">
              <b-form-radio-group
                id="basicCustomRadios1"
                name="customRadioInline1">
                <div class="custom-control custom-radio custom-control-inline">
                  <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input" value="1">
                  <label class="custom-control-label" for="customRadioInline1">M</label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                  <input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input" value="2" checked>
                  <label class="custom-control-label" for="customRadioInline2"> F</label>
                </div>


              </b-form-radio-group>

            </b-form-group>

          </b-input-group-prepend>


          <!--fin de formulario  -->

          <!--botones guardar -->

            <div slot="footer">
              <b-button type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i> Guardar</b-button>
              <b-button type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Reset</b-button>
            </div>
          <!--fin de botones  -->

        </b-card>
        <b-card>






        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="12">
        <transition name="fade">





        </transition>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import BarExample from './charts/BarExample'
import LineExample from './charts/LineExample'
import DoughnutExample from './charts/DoughnutExample'
import RadarExample from './charts/RadarExample'
import PieExample from './charts/PieExample'
import PolarAreaExample from './charts/PolarAreaExample'

export default {
  name: 'charts',
  components: {
    BarExample,
    LineExample,
    DoughnutExample,
    RadarExample,
    PieExample,
    PolarAreaExample
  }
}
</script>
