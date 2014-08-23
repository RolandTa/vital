var addressController = RouteController.extend({
  template: 'address'
});

Router.map(function () {
  this.route('addressRoute', {
    path :  '/address/:_id/view',
    controller :  addressController
  });
});
