<template>
  <div class="animated fadeIn">



    <b-row>
      <b-col md="6">
        <b-card>
          <div slot="header">
            <strong>Formulario de Docente </strong>
          </div>
          <b-input-group class="mb-3">
            <b-input-group-prepend>
              <b-input-group-text><i class="fa fa-user"></i></b-input-group-text>
            </b-input-group-prepend>
            <b-form-input type="text" class="form-control" placeholder="Nombre" autocomplete="username" />
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


          <b-input-group class="mb-3">
            <b-input-group-prepend>
              <b-input-group-text><i class="icon"> Sexo</i></b-input-group-text>
          <b-form-checkbox-group id="basicInlineCheckboxes" name="InlineCheckboxes" :plain="true" :checked="[1,3]">
            <b-form-checkbox :plain="true" value="1">M</b-form-checkbox>
            <b-form-checkbox :plain="true" value="2">F</b-form-checkbox>
          </b-form-checkbox-group>
            </b-input-group-prepend>
          </b-input-group>




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
            <b-form-group
              label="Select large"
              label-for="basicSelectLg"
              :label-cols="3"
              :horizontal="true">
              <b-form-select id="Seleccionar Curso"
                             size="lg"
                             :plain="true"
                             :options="['Seleccionar Curso','Option 1', 'Option 2', 'Option 3']"
                             value="Seleccionar Curso">
              </b-form-select>
            </b-form-group>

                        <b-form-group
              label="Checkboxes"
              label-for="basicCheckboxes"
              :label-cols="3"
              horizontal>
              <b-form-checkbox-group stacked id="basicCheckboxes" name="Checkboxes" :plain="true" :checked="[2,3]">
                <b-form-checkbox value="1">Option 1</b-form-checkbox>
                <b-form-checkbox value="2">Option 2</b-form-checkbox>
                <b-form-checkbox value="3">Option 3</b-form-checkbox>
              </b-form-checkbox-group>
            </b-form-group>
            <b-form-group
              label="Inline checkboxes"
              label-for="basicInlineCheckboxes"
              :label-cols="3"
              :horizontal="true">
              <b-form-checkbox-group id="basicInlineCheckboxes" name="InlineCheckboxes" :plain="true" :checked="[1,3]">
                <b-form-checkbox :plain="true" value="1">Option 1</b-form-checkbox>
                <b-form-checkbox :plain="true" value="2">Option 2</b-form-checkbox>
                <b-form-checkbox :plain="true" value="3">Option 3</b-form-checkbox>
              </b-form-checkbox-group>
            </b-form-group>
            <!--custom controls - radios/checkboxes - temporary fix-->
            <b-form-group
              label="Radios - custom"
              label-for="basicRadiosCustom"
              :label-cols="3"
              :horizontal="true">
              <b-form-radio-group
                id="basicRadiosCustom"
                value="1"
                stacked>
                <div class="custom-control custom-radio">
                  <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input" value="1">
                  <label class="custom-control-label" for="customRadio1">Option 1</label>
                </div>
                <div class="custom-control custom-radio">
                  <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input" value="2" checked>
                  <label class="custom-control-label" for="customRadio2">Option 2</label>
                </div>
                <div class="custom-control custom-radio">
                  <input type="radio" id="customRadio3" name="customRadio" class="custom-control-input" value="3">
                  <label class="custom-control-label" for="customRadio3">Option 3</label>
                </div>
              </b-form-radio-group>
            </b-form-group>
            <b-form-group
              label="Inline radios - custom"
              label-for="basicCustomRadios1"
              :label-cols="3"
              :horizontal="true">
              <b-form-radio-group
                id="basicCustomRadios1"
                name="customRadioInline1">
                <div class="custom-control custom-radio custom-control-inline">
                  <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input" value="1">
                  <label class="custom-control-label" for="customRadioInline1">Option 1</label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                  <input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input" value="2" checked>
                  <label class="custom-control-label" for="customRadioInline2">Option 2</label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                  <input type="radio" id="customRadioInline3" name="customRadioInline1" class="custom-control-input" value="3">
                  <label class="custom-control-label" for="customRadioInline3">Option 3</label>
                </div>
              </b-form-radio-group>
            </b-form-group>
            <b-form-group
              label="Checkboxes - custom"
              label-for="basicCustomCheckboxes"
              :label-cols="3"
              :horizontal="true">
              <b-form-checkbox-group stacked id="basicCustomCheckboxes">
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="customChk1" value="1" checked>
                  <label class="custom-control-label" for="customChk1">Option 1</label>
                </div>
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="customChk2" value="2">
                  <label class="custom-control-label" for="customChk2">Option 2</label>
                </div>
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="customChk3" value="3">
                  <label class="custom-control-label" for="customChk3">Option 3</label>
                </div>
              </b-form-checkbox-group>
            </b-form-group>
            <b-form-group
              label="Inline checkboxes - custom"
              label-for="basicInlineCustomCheckboxes"
              :label-cols="3"
              :horizontal="true">
              <b-form-checkbox-group id="basicInlineCustomCheckboxes">
                <div class="custom-control custom-checkbox custom-control-inline">
                  <input type="checkbox" class="custom-control-input" id="customInChk1" value="1">
                  <label class="custom-control-label" for="customInChk1">Option 1</label>
                </div>
                <div class="custom-control custom-checkbox custom-control-inline">
                  <input type="checkbox" class="custom-control-input" id="customInChk2" value="2" checked>
                  <label class="custom-control-label" for="customInChk2">Option 2</label>
                </div>
                <div class="custom-control custom-checkbox custom-control-inline">
                  <input type="checkbox" class="custom-control-input" id="customInChk3" value="3">
                  <label class="custom-control-label" for="customInChk3">Option 3</label>
                </div>
              </b-form-checkbox-group>
            </b-form-group>
            <b-form-group
              label="File input"
              label-for="fileInput"
              :label-cols="3"
              :horizontal="true">
              <b-form-file id="fileInput" :plain="true"></b-form-file>
            </b-form-group>
            <b-form-group
              label="Multiple file input"
              label-for="fileInputMulti"
              :label-cols="3"
              :horizontal="true">
              <b-form-file id="fileInputMulti" :plain="true" :multiple="true"></b-form-file>
            </b-form-group>
            <div slot="footer">
              <b-button type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i> Submit</b-button>
              <b-button type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Reset</b-button>
            </div>

        </b-card>
        <b-card>

          <div slot="header">
            Input Grid for small devices! <small> <code>.col-*</code></small>
          </div>
          <b-row class="form-group">
            <b-col cols="4">
              <b-form-input type="text" placeholder=".col-4"></b-form-input>
            </b-col>
            <b-col cols="8">
              <b-form-input type="text" placeholder=".col-8"></b-form-input>
            </b-col>
          </b-row>
          <b-row class="form-group">
            <b-col cols="5">
              <b-form-input type="text" placeholder=".col-5"></b-form-input>
            </b-col>
            <b-col cols="7">
              <b-form-input type="text" placeholder=".col-7"></b-form-input>
            </b-col>
          </b-row>
          <b-row class="form-group">
            <b-col cols="6">
              <b-form-input type="text" placeholder=".col-6"></b-form-input>
            </b-col>
            <b-col cols="6">
              <b-form-input type="text" placeholder=".col-6"></b-form-input>
            </b-col>
          </b-row>
          <b-row class="form-group">
            <b-col cols="7">
              <b-form-input type="text" placeholder=".col-5"></b-form-input>
            </b-col>
            <b-col cols="5">
              <b-form-input type="text" placeholder=".col-5"></b-form-input>
            </b-col>
          </b-row>
          <b-row class="form-group">
            <b-col cols="8">
              <b-form-input type="text" placeholder=".col-8"></b-form-input>
            </b-col>
            <b-col cols="4">
              <b-form-input type="text" placeholder=".col-4"></b-form-input>
            </b-col>
          </b-row>
          <div slot="footer">
            <b-button type="submit" size="sm" variant="primary">Action</b-button>
            <b-button type="button" size="sm" variant="danger">Action</b-button>
            <b-button type="button" class="btn btn-sm btn-warning">Action</b-button>
            <b-button type="button" class="btn btn-sm btn-info">Action</b-button>
            <b-button type="button" size="sm" variant="success">Action</b-button>
          </div>

          <div slot="header">
            Example Form
          </div>
          <b-form>
            <b-form-group>
              <b-input-group>
                <b-input-group-prepend>
                  <b-input-group-text><i class="fa fa-user"></i></b-input-group-text>
                </b-input-group-prepend>
                <b-form-input type="text" placeholder="Username"></b-form-input>
              </b-input-group>
            </b-form-group>
            <b-form-group>
              <b-input-group>
                <b-input-group-prepend>
                  <b-input-group-text><i class="fa fa-envelope"></i></b-input-group-text>
                </b-input-group-prepend>
                <b-form-input type="email" placeholder="Email" autocomplete="email"></b-form-input>
              </b-input-group>
            </b-form-group>
            <b-form-group>
              <b-input-group>
                <b-input-group-prepend>
                  <b-input-group-text><i class="fa fa-asterisk"></i></b-input-group-text>
                </b-input-group-prepend>
                <b-form-input type="password" placeholder="Password" autocomplete="current-password"></b-form-input>
              </b-input-group>
            </b-form-group>
            <div class="form-group form-actions">
              <b-button type="submit" size="sm" variant="success">Submit</b-button>
            </div>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="12">
        <transition name="fade">
          <b-card no-body v-if="show">
            <div slot="header">
              <i class="fa fa-edit"></i> Form Elements
              <div class="card-header-actions">
                <b-link href="#" class="card-header-action btn-setting">
                  <i class="icon-settings"></i>
                </b-link>
                <b-link class="card-header-action btn-minimize" v-b-toggle.collapse1>
                  <i class="icon-arrow-up"></i>
                </b-link>
                <b-link href="#" class="card-header-action btn-close" v-on:click="show = !show">
                  <i class="icon-close"></i>
                </b-link>
              </div>
            </div>
            <b-collapse id="collapse1" visible>
              <b-card-body>
                <b-form-group label="Prepended text" label-for="elementsEmail" description="Here's some help text">
                  <b-input-group>
                    <b-input-group-prepend>
                      <b-input-group-text>@</b-input-group-text>
                    </b-input-group-prepend>
                    <b-form-input id="elementsEmail" type="email" autocomplete="email"></b-form-input>
                  </b-input-group>
                </b-form-group>
                <b-form-group label="Appended text" label-for="elementsAppend" description="Here's some help text">
                  <b-input-group>
                    <b-form-input id="elementsAppend" type="text"></b-form-input>
                    <b-input-group-append><b-input-group-text>.00</b-input-group-text></b-input-group-append>
                  </b-input-group>
                </b-form-group>
                <b-form-group label="Append and prepend" label-for="elementsPrependAppend" description="Here's some help text">
                  <b-input-group>
                    <b-input-group-prepend>
                      <b-input-group-text>$</b-input-group-text>
                    </b-input-group-prepend>
                    <b-form-input id="elementsPrependAppend" type="text"></b-form-input>
                    <b-input-group-append><b-input-group-text>.00</b-input-group-text></b-input-group-append>
                  </b-input-group>
                </b-form-group>
                <b-form-group label="Append with button" label-for="elementsAppendButton" description="Here's some help text">
                  <b-input-group>
                    <b-form-input id="elementsAppendButton" type="text"></b-form-input>
                    <b-input-group-append>
                      <b-button variant="primary">Go!</b-button>
                    </b-input-group-append>
                  </b-input-group>
                </b-form-group>
                <b-form-group label="Two-buttons append" label-for="elementsTwoButtons">
                  <b-input-group>
                    <b-form-input id="elementsTwoButtons" type="text"></b-form-input>
                    <b-input-group-append>
                      <b-button variant="primary">Search</b-button>
                      <b-button variant="danger">Options</b-button>
                    </b-input-group-append>
                  </b-input-group>
                </b-form-group>
                <div class="form-actions">
                  <b-button type="submit" variant="primary">Save changes</b-button>
                  <b-button type="button" variant="secondary">Cancel</b-button>
                </div>
              </b-card-body>
            </b-collapse>
          </b-card>
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
