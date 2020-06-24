
// G L O B A L E S

let data_json = [
    //Producto 1
    {
        "POLAR" : {
            "bs" : 600000,
            "dolar" : 3,
        },
        "YARACUY" : {
            "bs" : 400000,
            "dolar" : 2,
        },
        "LA_LUCHA" : {
            "bs" : 300000,
            "dolar" : 1.55,
        },
        "JUANA" : {
            "bs" : 500000,
            "dolar" : 2.5,
        }     
    },
    //Producto 2
    {
        "MARY" : {
            "bs" : 800000,
            "dolar" : 10,
        },
        "CRISTAL" : {
            "bs" : 900000,
            "dolar" : 10,
        },
        "SANTA_ANA" : {
            "bs" : 500000,
            "dolar" : 10,
        },
        "LA_LUCHA" : {
            "bs" : 400000,
            "dolar" : 10,
        },
    }
];

let total_bolivares = 0;
let total_dolares = 0;

const data = data_json;

let ini_1_1 = 0;
let ini_1_2 = 0;
let ini_1_3 = 0;
let ini_1_4 = 0;
let ini_2_1 = 0;
let ini_2_2 = 0;
let ini_2_3 = 0;
let ini_2_4 = 0;
let ini_3_1 = 0;
let ini_3_2 = 0;
let ini_3_3 = 0;
let ini_3_4 = 0;
let ini_4_1 = 0;
let ini_4_2 = 0;
let ini_4_3 = 0;
let ini_4_4 = 0;

// F U N C T I O N S

function conter(context){

    let operator = context;
    let span_result;
    let operation;

    switch (operator.textContent) {
        case '+':
            switch (operator.id) {
                case 'btn_add_1_1':
                    span_result = document.getElementById('conter_1_1');
                    operation = ini_1_1 + 1;
                        if(operation < 0){
                            span_result.innerHTML = ini_1_1;
                        }else{
                            span_result.innerHTML = operation;
                            ini_1_1++;
                        }
                    document.querySelector('#select_1_1').value = 'none';
                    document.getElementById('select_1_1').focus();
                break;
                //
                case 'btn_add_1_2':
                    span_result = document.getElementById('conter_1_2');
                    operation = ini_1_2 + 1;
                        if(operation < 0){
                            span_result.innerHTML = ini_1_2;
                        }else{
                            span_result.innerHTML = operation;
                            ini_1_2++;
                        }
                    document.querySelector('#select_1_2').value = 'none';
                    document.getElementById('select_1_2').focus();
                break;
                //
                case 'btn_add_1_3':
                    span_result = document.getElementById('conter_1_3');
                    operation = ini_1_3 + 1;
                        if(operation < 0){
                            span_result.innerHTML = ini_1_3;
                            
                        }else{
                            span_result.innerHTML = operation;
                            ini_1_3++;
                            
                        }
                        document.querySelector('#select_1_3').value = 'none';
                        document.getElementById('select_1_3').focus();
                break;
                //
                //----> Fila 2
                case 'btn_add_2_1':
                    span_result = document.getElementById('conter_2_1');
                    operation = ini_2_1 + 1;
                        if(operation < 0){
                            span_result.innerHTML = ini_2_1;
                            
                        }else{
                            span_result.innerHTML = operation;
                            ini_2_1++;
                            
                        }
                    document.querySelector('#select_2_1').value = 'none';
                break;
                //
                case 'btn_add_2_2':
                    span_result = document.getElementById('conter_2_2');
                    operation = ini_2_2 + 1;
                        if(operation < 0){
                            span_result.innerHTML = ini_2_2;
                            
                        }else{
                            span_result.innerHTML = operation;
                            ini_2_2++;
                            
                        }
                    document.querySelector('#select_2_2').value = 'none';
                break;
                //
                case 'btn_add_2_3':
                    span_result = document.getElementById('conter_2_3');
                    operation = ini_2_3 + 1;
                        if(operation < 0){
                            span_result.innerHTML = ini_2_3;
                            
                        }else{
                            span_result.innerHTML = operation;
                            ini_2_3++;
                            
                        }
                    document.querySelector('#select_2_3').value = 'none';
                break;
                //
                case 'btn_add_2_4':
                    span_result = document.getElementById('conter_2_4');
                    operation = ini_2_4 + 1;
                        if(operation < 0){
                            span_result.innerHTML = ini_2_4;
                            
                        }else{
                            span_result.innerHTML = operation;
                            ini_2_4++;
                            
                        }
                    document.querySelector('#select_2_4').value = 'none';
                break;
                //----> Fila 3
                case 'btn_add_3_1':
                    span_result = document.getElementById('conter_3_1');
                    operation = ini_3_1 + 1;
                        if(operation < 0){
                            span_result.innerHTML = ini_3_1;
                            
                        }else{
                            span_result.innerHTML = operation;
                            ini_3_1++;
                            
                        }
                    document.querySelector('#select_3_1').value = 'none';
                break;
                //
                case 'btn_add_3_2':
                    span_result = document.getElementById('conter_3_2');
                    operation = ini_3_2 + 1;
                        if(operation < 0){
                            span_result.innerHTML = ini_3_2;
                            
                        }else{
                            span_result.innerHTML = operation;
                            ini_3_2++;
                            
                        }
                    document.querySelector('#select_3_2').value = 'none';
                break;
                //
                case 'btn_add_3_3':
                    span_result = document.getElementById('conter_3_3');
                    operation = ini_3_3 + 1;
                        if(operation < 0){
                            span_result.innerHTML = ini_3_3;
                            
                        }else{
                            span_result.innerHTML = operation;
                            ini_3_3++;
                            
                        }
                    document.querySelector('#select_3_3').value = 'none';
                break;
                //
                case 'btn_add_3_4':
                    span_result = document.getElementById('conter_3_4');
                    operation = ini_3_4 + 1;
                        if(operation < 0){
                            span_result.innerHTML = ini_3_4;
                            
                        }else{
                            span_result.innerHTML = operation;
                            ini_3_4++;
                            
                        }
                    document.querySelector('#select_3_4').value = 'none';
                break;
                //----> Fila 4
                case 'btn_add_4_1':
                    span_result = document.getElementById('conter_4_1');
                    operation = ini_4_1 + 1;
                        if(operation < 0){
                            span_result.innerHTML = ini_4_1;
                            
                        }else{
                            span_result.innerHTML = operation;
                            ini_4_1++;
                            
                        }
                    document.querySelector('#select_4_1').value = 'none';
                break;
                //
                case 'btn_add_4_2':
                    span_result = document.getElementById('conter_4_2');
                    operation = ini_4_2 + 1;
                        if(operation < 0){
                            span_result.innerHTML = ini_4_2;
                            
                        }else{
                            span_result.innerHTML = operation;
                            ini_4_2++;
                            
                        }
                    document.querySelector('#select_4_2').value = 'none';
                    break;
                //
                case 'btn_add_4_3':
                    span_result = document.getElementById('conter_4_3');
                    operation = ini_4_3 + 1;
                        if(operation < 0){
                            span_result.innerHTML = ini_4_3;
                            
                        }else{
                            span_result.innerHTML = operation;
                            ini_4_3++;
                            
                        }
                    document.querySelector('#select_4_3').value = 'none';
                break;
                //
                case 'btn_add_4_4':
                    span_result = document.getElementById('conter_4_4');
                    operation = ini_4_4 + 1;
                        if(operation < 0){
                            span_result.innerHTML = ini_4_4;
                            
                        }else{
                            span_result.innerHTML = operation;
                            ini_4_4++;
                            
                        }
                    document.querySelector('#select_4_4').value = 'none';
                break;
                //FIN
                default:
                    console.log("errorConter+");
                    break;
            }
        //Fin de +
        break;
        /////////
        //Resta//
        /////////
        case '-':
            switch (operator.id){
                case 'btn_rest_1_1':
                        span_result = document.getElementById('conter_1_1');
                        operation = ini_1_1 - 1;
                            if(operation < 0){
                                span_result.innerHTML = ini_1_1;
                                
                            }else{
                                span_result.innerHTML = operation;
                                ini_1_1--;
                            }
                            document.querySelector('#select_1_1').value = 'none';
                            document.getElementById('select_1_1').focus();
                    break;
                    //
                    case 'btn_rest_1_2':
                        span_result = document.getElementById('conter_1_2');
                        operation = ini_1_2 - 1;
                            if(operation < 0){
                                span_result.innerHTML = ini_1_2;
                                
                            }else{
                                span_result.innerHTML = operation;
                                ini_1_2--;
                                
                            }
                            document.querySelector('#select_1_2').value = 'none';
                            document.getElementById('select_1_2').focus();
                    break;
                    //
                    case 'btn_rest_1_3':
                        span_result = document.getElementById('conter_1_3');
                        operation = ini_1_3 - 1;
                            if(operation < 0){
                                span_result.innerHTML = ini_1_3;
                                
                            }else{
                                span_result.innerHTML = operation;
                                ini_1_3--;
                                
                            }
                            document.querySelector('#select_1_3').value = 'none';
                            document.getElementById('select_1_3').focus();
                    break;
                    //
                    case 'btn_rest_1_4':
                        span_result = document.getElementById('conter_1_4');
                        operation = ini_1_4 - 1;
                            if(operation < 0){
                                span_result.innerHTML = ini_1_4;
                                
                            }else{
                                span_result.innerHTML = operation;
                                ini_1_4--;
                                
                            }
                    break;
                    //----> Fila 2
                    case 'btn_rest_2_1':
                        span_result = document.getElementById('conter_2_1');
                        operation = ini_2_1 - 1;
                            if(operation < 0){
                                span_result.innerHTML = ini_2_1;
                                
                            }else{
                                span_result.innerHTML = operation;
                                ini_2_1--;
                                
                            }
                    break;
                    //
                    case 'btn_rest_2_2':
                        span_result = document.getElementById('conter_2_2');
                        operation = ini_2_2 - 1;
                            if(operation < 0){
                                span_result.innerHTML = ini_2_2;
                                
                            }else{
                                span_result.innerHTML = operation;
                                ini_2_2--;
                                
                            }
                    break;
                    //
                    case 'btn_rest_2_3':
                        span_result = document.getElementById('conter_2_3');
                        operation = ini_2_3 - 1;
                            if(operation < 0){
                                span_result.innerHTML = ini_2_3;
                                
                            }else{
                                span_result.innerHTML = operation;
                                ini_2_3--;
                                
                            }
                    break;
                    //
                    case 'btn_rest_2_4':
                        span_result = document.getElementById('conter_2_4');
                        operation = ini_2_4 - 1;
                            if(operation < 0){
                                span_result.innerHTML = ini_2_4;
                                
                            }else{
                                span_result.innerHTML = operation;
                                ini_2_4--;
                                
                            }
                    break;
                    //----> Fila 3
                    case 'btn_rest_3_1':
                        span_result = document.getElementById('conter_3_1');
                        operation = ini_3_1 - 1;
                            if(operation < 0){
                                span_result.innerHTML = ini_3_1;
                                
                            }else{
                                span_result.innerHTML = operation;
                                ini_3_1--;
                                
                            }
                    break;
                    //
                    case 'btn_rest_3_2':
                        span_result = document.getElementById('conter_3_2');
                        operation = ini_3_2 - 1;
                            if(operation < 0){
                                span_result.innerHTML = ini_3_2;
                                
                            }else{
                                span_result.innerHTML = operation;
                                ini_3_2--;
                                
                            }
                    break;
                    //
                    case 'btn_rest_3_3':
                        span_result = document.getElementById('conter_3_3');
                        operation = ini_3_3 - 1;
                            if(operation < 0){
                                span_result.innerHTML = ini_3_3;
                                
                            }else{
                                span_result.innerHTML = operation;
                                ini_3_3--;
                                
                            }
                    break;
                    //
                    case 'btn_rest_3_4':
                        span_result = document.getElementById('conter_3_4');
                        operation = ini_3_4 - 1;
                            if(operation < 0){
                                span_result.innerHTML = ini_3_4;
                                
                            }else{
                                span_result.innerHTML = operation;
                                ini_3_4--;
                                
                            }
                    break;
                    //----> Fila 4
                    case 'btn_rest_4_1':
                        span_result = document.getElementById('conter_4_1');
                        operation = ini_4_1 - 1;
                            if(operation < 0){
                                span_result.innerHTML = ini_4_1;
                                
                            }else{
                                span_result.innerHTML = operation;
                                ini_4_1--;
                                
                            }
                    break;
                    //
                    case 'btn_rest_4_2':
                        span_result = document.getElementById('conter_4_2');
                        operation = ini_4_2 - 1;
                            if(operation < 0){
                                span_result.innerHTML = ini_4_2;
                                
                            }else{
                                span_result.innerHTML = operation;
                                ini_4_2--;
                                
                            }
                        break;
                    //
                    case 'btn_rest_4_3':
                        span_result = document.getElementById('conter_4_3');
                        operation = ini_4_3 - 1;
                            if(operation < 0){
                                span_result.innerHTML = ini_4_3;
                                
                            }else{
                                span_result.innerHTML = operation;
                                ini_4_3--;
                                
                            }
                    break;
                    //
                    case 'btn_rest_4_4':
                        span_result = document.getElementById('conter_4_4');
                        operation = ini_4_4 - 1;
                            if(operation < 0){
                                span_result.innerHTML = ini_4_4;
                                
                            }else{
                                span_result.innerHTML = operation;
                                ini_4_4--;
                                
                            }
                    break;
                    //FIN
                    default:
                        console.log("errorConter+");
                        break;
            }
        //Fin de -
        break;
        //DEFAULT
        default:
            console.log("conterError");
            break;
    }
}  

function product_selec(data, context){
    let selectOption = context.options[context.selectedIndex];
    //card 1
    switch (selectOption.value) {
        case 'one-1-1':
            //POLAR
			if(ini_1_1 == 0 || ini_1_1 == 1){
				var bs = document.getElementById("bs-1-1").innerHTML = formatJsonNumber(data[0]['POLAR']['bs'])+ "Bs";
				var dolar = document.getElementById("dolar-1-1").innerHTML = (data[0]['POLAR']['dolar']) + " $";
			}else{
				var bs = document.getElementById("bs-1-1").innerHTML = formatJsonNumber(data[0]['POLAR']['bs'] * ini_1_1)+ "Bs";
				var dolar = document.getElementById("dolar-1-1").innerHTML = (data[0]['POLAR']['dolar'] * ini_1_1) + " $";
			}
        break;
        /**/
        case 'two-1-1':
            //YARACUY
			if(ini_1_1 == 0 || ini_1_1 == 1){
				var bs = document.getElementById("bs-1-1").innerHTML = formatJsonNumber(data[0]['YARACUY']['bs'])+ "Bs";
				var dolar = document.getElementById("dolar-1-1").innerHTML = (data[0]['YARACUY']['dolar']) + " $";
			}else{
				var bs = document.getElementById("bs-1-1").innerHTML = formatJsonNumber(data[0]['YARACUY']['bs'] * ini_1_1)+ "Bs";
				var dolar = document.getElementById("dolar-1-1").innerHTML = (data[0]['YARACUY']['dolar'] * ini_1_1) + " $";
			}
        break;
        /**/
        case 'three-1-1':
            //LA_LUCHA
			if(ini_1_1 == 0 || ini_1_1 == 1){
				var bs = document.getElementById("bs-1-1").innerHTML = formatJsonNumber(data[0]['LA_LUCHA']['bs'])+ "Bs";
				var dolar = document.getElementById("dolar-1-1").innerHTML = (data[0]['LA_LUCHA']['dolar']) + " $";
			}else{
				var bs = document.getElementById("bs-1-1").innerHTML = formatJsonNumber(data[0]['LA_LUCHA']['bs'] * ini_1_1)+ "Bs";
				var dolar = document.getElementById("dolar-1-1").innerHTML = (data[0]['LA_LUCHA']['dolar'] * ini_1_1) + " $";
			}
        break;
        /**/
        case 'four-1-1':
            //JUANA
			if(ini_1_1 == 0 || ini_1_1 == 1){
				var bs = document.getElementById("bs-1-1").innerHTML = formatJsonNumber(data[0]['JUANA']['bs'])+ "Bs";
				var dolar = document.getElementById("dolar-1-1").innerHTML = (data[0]['JUANA']['dolar']) + " $";
			}else{
				var bs = document.getElementById("bs-1-1").innerHTML = formatJsonNumber(data[0]['JUANA']['bs'] * ini_1_1)+ "Bs";
				var dolar = document.getElementById("dolar-1-1").innerHTML = (data[0]['JUANA']['dolar'] * ini_1_1) + " $";
			}
        break;

        ///////////////////////
        //  C  A  R  D    2  //
        ///////////////////////

        case 'one-1-2':
            //MARY 
			if(ini_1_2 == 0 || ini_1_2 == 1){
				var bs = document.getElementById("bs-1-2").innerHTML = formatJsonNumber(data[1]['MARY']['bs'])+ "Bs";
				var dolar = document.getElementById("dolar-1-2").innerHTML = (data[1]['MARY']['dolar']) + " $";
			}else{
				var bs = document.getElementById("bs-1-2").innerHTML = formatJsonNumber(data[1]['MARY']['bs'] * ini_1_2)+ "Bs";
				var dolar = document.getElementById("dolar-1-2").innerHTML = (data[1]['MARY']['dolar'] * ini_1_2) + " $";
			}
        break;
        /**/
        case 'two-1-2':
            //CRISTAL
			if(ini_1_2 == 0 || ini_1_2 == 1){
				var bs = document.getElementById("bs-1-2").innerHTML = formatJsonNumber(data[1]['CRISTAL']['bs'])+ "Bs";
				var dolar = document.getElementById("dolar-1-2").innerHTML = (data[1]['CRISTAL']['dolar']) + " $";
			}else{
				var bs = document.getElementById("bs-1-2").innerHTML = formatJsonNumber(data[1]['CRISTAL']['bs'] * ini_1_2)+ "Bs";
				var dolar = document.getElementById("dolar-1-2").innerHTML = (data[1]['CRISTAL']['dolar'] * ini_1_2) + " $";
			}
        break;
        /**/
        case 'three-1-2':
            //SANTA_ANA
			if(ini_1_2 == 0 || ini_1_2 == 1){
				var bs = document.getElementById("bs-1-2").innerHTML = formatJsonNumber(data[1]['SANTA_ANA']['bs'])+ "Bs";
				var dolar = document.getElementById("dolar-1-2").innerHTML = (data[1]['SANTA_ANA']['dolar']) + " $";
			}else{
				var bs = document.getElementById("bs-1-2").innerHTML = formatJsonNumber(data[1]['SANTA_ANA']['bs'] * ini_1_2)+ "Bs";
				var dolar = document.getElementById("dolar-1-2").innerHTML = (data[1]['SANTA_ANA']['dolar'] * ini_1_2) + " $";
			}
        break;
        /**/
        case 'four-1-2':
            //LA_LUCHA
			if(ini_1_2 == 0 || ini_1_2 == 1){
				var bs = document.getElementById("bs-1-2").innerHTML = formatJsonNumber(data[1]['LA_LUCHA']['bs'])+ "Bs";
				var dolar = document.getElementById("dolar-1-2").innerHTML = (data[1][3]['dolar']) + " $";
			}else{
				var bs = document.getElementById("bs-1-2").innerHTML = formatJsonNumber(data[1]['LA_LUCHA']['bs'] * ini_1_2)+ "Bs";
				var dolar = document.getElementById("dolar-1-2").innerHTML = (data[1][4]['dolar'] * ini_1_2) + " $";
			}
        break;

        ///////////////////////
        //  C  A  R  D    3  //
        ///////////////////////

        case 'one-1-3':
            //POLAR
			if(ini_1_3 == 0 || ini_1_3 == 1){
				var bs = document.getElementById("bs-1-3").innerHTML = formatJsonNumber(data[0]['POLAR']['bs'])+ "Bs";
				var dolar = document.getElementById("dolar-1-3").innerHTML = (data[0]['POLAR']['dolar']) + " $";
			}else{
				var bs = document.getElementById("bs-1-3").innerHTML = formatJsonNumber(data[0]['POLAR']['bs'] * ini_1_3)+ "Bs";
				var dolar = document.getElementById("dolar-1-3").innerHTML = (data[0]['POLAR']['dolar'] * ini_1_3) + " $";
			}
        break;
        /**/
        case 'two-1-3':
            //YARACUY
			if(ini_1_3 == 0 || ini_1_3 == 1){
				var bs = document.getElementById("bs-1-3").innerHTML = formatJsonNumber(data[0]['YARACUY']['bs'])+ "Bs";
				var dolar = document.getElementById("dolar-1-3").innerHTML = (data[0]['YARACUY']['dolar']) + " $";
			}else{
				var bs = document.getElementById("bs-1-3").innerHTML = formatJsonNumber(data[0]['YARACUY']['bs'] * ini_1_3)+ "Bs";
				var dolar = document.getElementById("dolar-1-3").innerHTML = (data[0]['YARACUY']['dolar'] * ini_1_3) + " $";
			}
        break;
        /**/
        case 'three-1-3':
            //LA_LUCHA
			if(ini_1_3 == 0 || ini_1_3 == 1){
				var bs = document.getElementById("bs-1-3").innerHTML = formatJsonNumber(data[0]['LA_LUCHA']['bs'])+ "Bs";
				var dolar = document.getElementById("dolar-1-3").innerHTML = (data[0]['LA_LUCHA']['dolar']) + " $";
			}else{
				var bs = document.getElementById("bs-1-3").innerHTML = formatJsonNumber(data[0]['LA_LUCHA']['bs'] * ini_1_3)+ "Bs";
				var dolar = document.getElementById("dolar-1-3").innerHTML = (data[0]['LA_LUCHA']['dolar'] * ini_1_3) + " $";
			}
        break;
        /**/
        case 'four-1-3':
            //JUANA
			if(ini_1_3 == 0 || ini_1_3 == 1){
				var bs = document.getElementById("bs-1-3").innerHTML = formatJsonNumber(data[0]['JUANA']['bs'])+ "Bs";
				var dolar = document.getElementById("dolar-1-3").innerHTML = (data[0]['JUANA']['dolar']) + " $";
			}else{
				var bs = document.getElementById("bs-1-3").innerHTML = formatJsonNumber(data[0]['JUANA']['bs'] * ini_1_3)+ "Bs";
				var dolar = document.getElementById("dolar-1-3").innerHTML = (data[0]['JUANA']['dolar'] * ini_1_3) + " $";
			}
        break;

        case 'none':
            document.getElementById("bs-1-1").innerHTML = "Monto en Bs";
            document.getElementById("dolar-1-1").innerHTML = "Monto en $";
        break;
            
        default:
            document.getElementById("bs-1-1").innerHTML = "Monto en Bs";
            document.getElementById("dolar-1-1").innerHTML = "Monto en $";
        break;
    }
    //card 3
    
}

function add_Total(context){

    let send = context;
    let numbs;
    let numdolar;
    let resultbs;
    let resultdolar;

    switch (send.id) {
        case 'btn_1_1':
                var elementBs = document.querySelector('#bs-1-1');
                var elementDolar = document.querySelector('#dolar-1-1');
                if(elementBs.textContent == "Monto en Bs"){
                    total_car_buy(0,0);
                }else{
                    numbs = parseInt(formatWithoutPoint(elementBs.textContent));
                    numdolar = parseInt(elementDolar.textContent);
                    resultbs = numbs;
                    resultdolar = numdolar;;
                    total_car_buy(resultbs,resultdolar);
                }
                
            break;
        case 'btn_1_2':
                elementBs = document.querySelector('#bs-1-2');
                elementDolar = document.querySelector('#dolar-1-2');
                if(elementBs.textContent == "Monto en Bs"){
                    total_car_buy(0,0);
                }else{
                    numbs = parseInt(formatWithoutPoint(elementBs.textContent));
                    numdolar = parseInt(elementDolar.textContent);
                    resultbs = numbs;
                    resultdolar = numdolar;
                    total_car_buy(resultbs,resultdolar);
                }
            break;
        case 'btn_1_3':
                elementBs = document.querySelector('#bs-1-3');
                elementDolar = document.querySelector('#dolar-1-3');
                if(elementBs.textContent == "Monto en Bs"){
                    total_car_buy(0,0);
                }else{
                    numbs = parseInt(formatWithoutPoint(elementBs.textContent));
                    numdolar = parseInt(elementDolar.textContent);
                    resultbs = numbs;
                    resultdolar = numdolar;
                    total_car_buy(resultbs,resultdolar);
                }
            break;
    
        default:
            console.log("llego mal");
            break;
    }
}

function total_car_buy(bs, dolar){
    let bolivares = document.querySelector('#total_bs');
    let dolares = document.querySelector('#total_dolar');

    let bs_num = formatJsonNumber(total_bolivares + bs);
    let dol_num = (total_dolares + dolar);

    bolivares.innerHTML = "Compra en Bs: " + bs_num +"bs";
    dolares.innerHTML = "Compra en $: " + dol_num +"$";

    total_bolivares = parseInt(formatWithoutPoint(bs_num));
    total_dolares = parseInt(dol_num);

   
}

function void_car_buy(){
    let bolivares = document.querySelector('#total_bs');
    let dolares = document.querySelector('#total_dolar');

    bolivares.innerHTML = "Compra en Bs: " + 0 + "Bs";
    dolares.innerHTML = "Compra en $: " + 0 + "$";
}//Vaciar el carrito

function formatWithoutPoint(number){
    let num = number.toString().replace(/\./g,'');
    return num;
}

function formatJsonNumber(number){
    let num = number.toString().replace(/\./g,'');
    //console.log(num);
    if(!isNaN(num)){
        num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
        num = num.split('').reverse().join('').replace(/^[\.]/,'');
        return num;
    }
    
    else{
        return console.log("error formatJsonNumber");
    }
}//Parsea montos con puntos


window.onload = function(){
    (function total_car_buy_load(){
        let bolivares = document.querySelector('#total_bs');
        let dolares = document.querySelector('#total_dolar');
    
        bolivares.innerHTML = "Total en Bs: " + 0 + "Bs";
        dolares.innerHTML = "Total en $: " + 0 + "$";
    })();
}//Fin de Funcion auto invocada para tomar lo ultimo en total