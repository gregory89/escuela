<template>
  <div class="animated fadeIn">





      <b-row>
        <b-col md="12">
          <b-card>
            <div slot="header">
              <strong>Agregar Materia </strong>
            </div>
            <label > Codigo</label>
            <b-input-group class="mb-3">
              <b-input-group-prepend>
                <b-input-group-text><i class="fa fa-user"></i></b-input-group-text>
              </b-input-group-prepend>
              <b-form-input type="text" class="form-control" placeholder="Nombre" autocomplete="username"  />
            </b-input-group>

            <label > Descripcion</label>
            <b-input-group class="mb-3">

              <b-input-group-prepend>
                <b-input-group-text><i class="icon-user-follow"></i></b-input-group-text>
              </b-input-group-prepend>
              <b-form-input type="text" class="form-control" placeholder="Apellidos" autocomplete="username" />
            </b-input-group>






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
  name: 'flags'
}
</script>
