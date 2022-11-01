const GetId = (id)=> document.getElementById(id);
let btn = GetId('btn-return');

let isNumber =(val) => {
    return !isNaN(Number(val));
}

// let domlist = {    
//     a:{
//         name: '坪數',
//         value: 150
//     },
//     b:{
//         name: '業績',
//         value: 200
//     },
//     c:{
//         name: '租金',
//         value: 20
//     },
//     d:{
//         name: '毛利(%)',
//         value: 52.5
//     },
//     e:{
//         name: '費用(%)',
//         value: 16
//     },
// };

// let domlistLen = Object.keys(domlist).length;

btn.addEventListener('click', (event)=>{
    event.preventDefault();
    // for(let i = 0; i < domlistLen; i++){        
    //     domlist[Object.keys(domlist)[i]].value = GetId(Object.keys(domlist)[i]).value;
    // }
    // console.log(domlist);
    let a = Number(GetId('a').value);   //坪數
    let b = Number(GetId('b').value);   //業績
    let c = Number(GetId('c').value);   //租金
    let d = Number(GetId('d').value);   //毛利(%)
    let e = Number(GetId('e').value);   //費用(%)
    let f = Number(GetId('f').value);   //攤提(萬)
    let g = Number(GetId('g').value);   //租期(年)
    let h = Number(GetId('h').value);   //租期(月)

    let request1 = GetId('request1');
    let request2 = GetId('request2');
    let request3 = GetId('request3');

    let request_num1 = ((b * (d / 100)) - (b * (e / 100)) - c);
    let request_num1_100 = Math.round(request_num1);
    let month = g * 12 + h;
    let request_num2 = Math.round(request_num1 * month);
    let request_num3 = Math.round(((f * a) / request_num1)* 10)/10;

    request1.textContent = request_num1_100;
    request2.textContent = request_num2;
    request3.textContent = request_num3;
});