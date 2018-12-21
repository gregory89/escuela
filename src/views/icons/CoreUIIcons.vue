<template>
  <div class="animated fadeIn">



    <b-row>
      <b-col md="6">
        <b-card>

          <div slot="header">
              <strong>Inscripcion. DAtos del Estudiante </strong>
            </div>
            <b-row>
              <b-col sm="4">
                <b-form-group >
                  <label >Periodo Escolar</label>
                  <b-form-select id="Periodo"
                                 :plain="true"
                                 :options="[1,2,3,4,5, ]">
                  </b-form-select>

                  <label >Seccion</label>
                  <b-form-select id="Seccion"
                                 :plain="true"
                                 :options="[1,2,3,4,5, ]">
                  </b-form-select>


                </b-form-group>
              </b-col>

              <b-col sm="4">
                <b-form-group>
                  <label >Nivel Esccolar</label>
                  <b-form-select id="Nivel"
                                 :plain="true"
                                 :options="[2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025]">
                  </b-form-select>

                </b-form-group>
              </b-col>
              <b-col sm="4">
                <b-form-group>
                  <label for=" ">Curso</label>
                  <b-form-select id="Curso"
                                  :plain="true"
                                  :options="[2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025]">


                </b-form-select>
                </b-form-group>


              </b-col>
            </b-row>
          <!--nombre-->
          <b-input-group class="mb-3">
            <b-input-group-prepend>
              <b-input-group-text><i class="fa fa-user"></i></b-input-group-text>
            </b-input-group-prepend>
            <b-form-input type="text" class="form-control" placeholder="Nombre" autocomplete="username"  />
            <b-input-group-text><i class="fa fa-user"></i></b-input-group-text>
            <b-form-input type="text" class="form-control" placeholder="Apellidos" autocomplete="username"  />
          </b-input-group>

          <!--direccion-->
          <b-input-group class="mb-3">
            <b-input-group-prepend>
              <b-input-group-text><i class="fa fa-home"></i></b-input-group-text>
            </b-input-group-prepend>
            <b-form-input type="text" class="form-control" placeholder="Direccion" autocomplete="username" />
          </b-input-group>

          <!--fecha n-->
          <b-input-group class="mb-3">
            <b-input-group-prepend>
              <b-input-group-text><i class="icon-date">Fecha Nacimiento</i></b-input-group-text>
              <b-form-input type="date" id="date"> </b-form-input>

            </b-input-group-prepend>
          </b-input-group>
          <!--fin fecha N-->

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

          <!--Fin Sexo-->









        </b-card>

      </b-col>





      <!--formulario del los padres-->


      <b-col sm="6">
        <b-card>
          <div slot="header">


            <strong>Datos de los Padres</strong>
          </div>
          <label >Datos del Padre</label>
          <b-input-group class="mb-3">
            <b-input-group-prepend>
              <b-input-group-text><i class="fa fa-user"></i></b-input-group-text>
            </b-input-group-prepend>
            <b-form-input type="text" class="form-control" placeholder=" Padre" autocomplete="username"  />
            <b-input-group-text><i class="fa fa-user"></i></b-input-group-text>
            <b-form-input type="text" class="form-control" placeholder="Madre" autocomplete="username"  />

          </b-input-group>

          <b-input-group class="mb-3">
            <b-input-group-prepend>
              <b-input-group-text><i class="fa fa-phone"></i></b-input-group-text>
            </b-input-group-prepend>
            <b-form-input type="text" class="form-control" placeholder="Telefono" autocomplete="username" />

            <b-input-group-text><i class="fa fa-phone"></i></b-input-group-text>
            <b-form-input type="text" class="form-control" placeholder="Telefono" autocomplete="username" />
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






















          <!--curso-->


          <!--Sexo-->



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
export default {
  name: 'CoreUIIcons'
}
</script>
