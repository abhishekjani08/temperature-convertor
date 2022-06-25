document.getElementById('convert').onclick = tempConvert;
    document.getElementById('clear').onclick = clearForm;
    
    function tempConvert() {
        
        var fahrenheit = document.getElementById("fahrenheit").value;
        var celsius = document.getElementById("celsius").value;
        var kelvin = document.getElementById("kelvin").value;

      if (fahrenheit != '') {
            celsius = (parseFloat(fahrenheit) - 32) / 1.8;
            kelvin = (parseFloat(celsius)+273.15);
        } 
        else if(celsius != '')
        {
            fahrenheit = (parseFloat(celsius) * 1.8) + 32;
            kelvin = (parseFloat(celsius)+273.15);
        }
        else 
        {
            celsius = (parseFloat(kelvin) - 273.15);
            fahrenheit = (parseFloat(celsius) * 1.8) + 32;
        }  

    document.getElementById('fahrenheit').value = parseFloat(fahrenheit).toFixed(1);
    document.getElementById('celsius').value = parseFloat(celsius).toFixed(1);
    document.getElementById('kelvin').value = parseFloat(kelvin).toFixed(1);

}


function clearForm() {
    document.getElementById('fahrenheit').value = '';
    document.getElementById('celsius').value = '';
    document.getElementById('kelvin').value = '';

} 


