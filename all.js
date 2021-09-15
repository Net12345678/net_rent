const GetId = (id)=> document.getElementById(id);
let btn = GetId('btn-return');

btn.addEventListener('click', (event)=>{
    event.preventDefault();
    let a = GetId('a').value;
    let b = GetId('b').value;
    let c = GetId('c').value;
    let d = GetId('d').value;
    let e = GetId('e').value;
    let rad = document.querySelector('input[name="exampleRadios"]:checked').value;
    

    let request1 = GetId('request1');
    let request2 = GetId('request2');
    let request3 = GetId('request3');
    let request4 = GetId('request4');
    let request5 = GetId('request5');



    let request_num1 = (b * (d / 100)) - ((rad * a) / 60) - (b * (e / 100)) - c;
    let request_num2 = ((b * (d / 100)) - (b * (e / 100)) - c);
    let request_num1_100 = Math.round(request_num1);
    let request_num2_100 = Math.round(request_num2);
    let request_num3 = request_num1 * 60;
    let request_num4 = request_num2 * 60;
    let request_num5 = request_num2 * 60 + request_num3;

    request1.textContent = request_num1_100;
    request2.textContent = request_num2_100;
    request3.textContent = request_num3;
    request4.textContent = request_num4;
    request5.textContent = request_num5;
});