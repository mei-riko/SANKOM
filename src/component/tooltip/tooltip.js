import $ from 'jquery'
import '../../../node_modules/popper.js/dist/umd/popper';
import '../../../node_modules/bootstrap/js/dist/util';
import '../../../node_modules/bootstrap/js/dist/tooltip';

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})