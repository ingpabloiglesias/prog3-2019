var assert = require('assert');
var helpers = require('./../helpers');
const sinon = require('sinon');

describe('Helpers', function() {

  describe('#getNombreApellido()', function() {

    it('should return LautaroNavarro when camel_case', function() {
      assert.equal(
        helpers.getNombreApellido('lautaro', 'navarro', helpers.formatos.camel_case), 'LautaroNavarro');
    });

    it('should return NavarroLautaro when camel_case_inverso', function() {
      assert.equal(
        helpers.getNombreApellido('lautaro', 'navarro', helpers.formatos.camel_case_inverso), 'NavarroLautaro');
    });

    it('should return Navarro, Lautaro when comma_separated', function() {
      assert.equal(
        helpers.getNombreApellido('lautaro', 'navarro', helpers.formatos.comma_separated), 'Navarro, Lautaro');
    });

    it('should return lautaro-navarro when kebab_case', function() {
      assert.equal(
        helpers.getNombreApellido('lautaro', 'navarro', helpers.formatos.kebab_case), 'lautaro-navarro');
    });

  });

  describe('#getEdad()', function() {

    sinon.useFakeTimers(new Date('2019-6-20').getTime());

    it('should return 20 when date is 1998-6-21', function() {
      assert.equal(
        helpers.getEdad('1998-6-21'), 20);
    });

    it('should return 21 when date is 1998-6-20', function() {
      assert.equal(
        helpers.getEdad('1998-6-20'), 21);
    });

  });

});