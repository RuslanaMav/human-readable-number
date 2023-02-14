module.exports = function toReadable (number) {
    let obj={
                0: 'zero',
                1: 'one',
                2: 'two',
                3: 'three',
                4: 'four',
                5: 'five',
                6: 'six',
                7: 'seven',
                8: 'eight',
                9: 'nine',
                10: 'ten',
                11: 'eleven',
                12: 'twelve',
                13: 'thirteen',
                14: 'fourteen',
                15: 'fifteen',
                16: 'sixteen',
                17: 'seventeen',
                18: 'eighteen',
                19: 'nineteen',
                20:	'twenty',
                30: 'thirty',
                40:	'forty'	,
                50:	'fifty',
                60:	'sixty'	,
                70:	'seventy',	
                80:	'eighty',	
                90:	'ninety' }
    
    let arr=String(number).split('');
    if  (arr.length==3){
        if (number%100<20 && number%100>0) {arr.pop(); arr[1]=String(number%100)} 
        else {
            if (number%10==0) {arr.pop(); arr[1]=arr[1]+'0';
            if (number%100==0) arr.pop();}
            else arr[1]=arr[1]+'0';}
            for (let i=0; i<arr.length; i++)
                for (key in obj) if (key==Number(arr[i])) arr[i]=obj[key];
           arr[0]=arr[0]+' hundred';
           return arr.join(' ');
        }
        
    else {
            if (number%100<20 || arr[1]==0) 
            for (key in obj) { if (key==number) return obj[key];}
            else { 
                arr[0]=arr[0]+'0';
                for (let i=0; i<arr.length; i++)
                for (key in obj)
                    if (key==Number(arr[i])) arr[i]=obj[key];
             return arr.join(' ');}
        }
}
