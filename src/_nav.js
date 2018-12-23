export default {
  items: [
    {
      name: 'GsaX',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'primary',
        text: ''
      }
    },


    {
      title: true,
      name: 'Components',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: 'Registro',
      url: '/base',
      icon: 'fa fa-tasks',
      children: [


        {
          name: 'Forms',
          url: '/base/forms',
          icon: 'icon-puzzle'
        },

        {
          name: 'Estudiante',
          url: '/base/tables',
          icon: 'icon-people'
        },
        {
          name: 'Profesor',
          url: '/base/tabs',
          icon: 'fa fa-graduation-cap'
        },
        {
          name: 'Padres',
          url: '/base/tooltips',
          icon: 'icon-user-follow'
        }
      ]
    },

    {
      name: 'Docente',
      url: '/charts',
      icon: 'fa fa-graduation-cap'
    },
    {
      name: 'Administracion',
      url: '/icons',
      icon: 'fa fa-cogs',
      children: [
        {
          name: 'Inscripción',
          url: '/icons/coreui-icons',
          icon: 'icon-note',
          badge: {
            variant: 'info',
            text: 'NEW'
          }
        },
        {
          name: 'Nuevas Asignaturas',
          url: '/icons/flags',
          icon: 'icon-notebook',
          badge: {
            variant: 'primary',
            text: 'NEW'
          }
        },
        {
          name: 'Font Awesome',
          url: '/icons/font-awesome',
          icon: 'icon-star',
          badge: {
            variant: 'secondary',
            text: '4.7'
          }
        },
        {
          name: 'Simple Line Icons',
          url: '/icons/simple-line-icons',
          icon: 'icon-star'
        }
      ]
    }
    ,

    {
      name: 'Widgets',
      url: '/widgets',
      icon: 'icon-calculator',
      badge: {
        variant: 'primary',
        text: 'NEW'
      }
    },
    {
      divider: true
    },
    {
      title: true,
      name: 'Extras'
    },
    {
      name: 'Pages',
      url: '/pages',
      icon: 'icon-star',
      children: [
        {
          name: 'Login',
          url: '/pages/login',
          icon: 'icon-star'
        },
        {
          name: 'Register',
          url: '/pages/register',
          icon: 'icon-star'
        },
        {
          name: 'Error 404',
          url: '/pages/404',
          icon: 'icon-star'
        },
        {
          name: 'Error 500',
          url: '/pages/500',
          icon: 'icon-star'
        }
      ]
    },
    {
      name: 'Disabled',
      url: '/dashboard',
      icon: 'icon-ban',
      badge: {
        variant: 'secondary',
        text: 'NEW'
      },
      attributes: { disabled: true },
    },

  ]
}
