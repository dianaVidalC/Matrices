function sumaArrays(array1,array2){
  var suma=[];
  if(typeof array1 =="array" || typeof array2 == "array"){
      for(var i=0; i<array1.length;i++){
            suma.push(parseInt(array1[i]) + parseInt(array2[i]));
          }
            return suma;
          }else{
            return "Error";
          }
}
if(typeof exports !== 'undefined') {
    exports.sumaArrays = sumaArrays;
}
