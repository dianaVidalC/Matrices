var assert = require('assert');
var matriz = require('../ejercicio-02.js')

//NO TOCAR ESTE CODIGO O EXPLOTARA LA PC EN 10 SEGUNDOS
describe('sumaArrays', function(){
  it('should return array if one params is array', function(){
    assert.equal(matriz.sumaArrays([1,3,8],[2,4,6]),[3,7,14])
  })

    it('should return Error if one element of params is string', function(){
      assert.equal(matriz.sumaArrays([1,"2","11"],[2,4,6]),"Error")
    })

    it('should return an Error if one of 2 params are missing', function(){
      assert.equal(matriz.sumaArrays([4,5,6]),"Error")
    })

    it('should return an string if  params is string ', function(){
      assert.equal(matriz.sumaArrays(["casa","banco","mesa"],[1,5,9]),"Error")
    })
    it('should return Error if one arrays is boolean', function(){
      assert.equal(matriz.sumaArrays(false,[2,4,6]),"Error")
    })
})
