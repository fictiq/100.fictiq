import clipboard from 'clipboardy';
import S from 'string'

var dex = 0;
var item;
var past 

var action = () =>{
    
    var now = clipboard.readSync();
    var check;

    if ( now.includes('.') == true ){
        check = now.split('.')[1]
        //dex = Number(  now.split('.')[0] )

        //if (isNaN(dex) ) dex = 0;
    } else  check = now

    console.log( now + ' ::: ' + check )
    
    if ( past == check ) return 

    dex += 1;
    const count = String(dex).padStart(2, "0");

    
    past = check

    item = S(check).slugify().s
    var out = count + '.' + item
    clipboard.writeSync( out );

    console.log('running... ' + out )

}

setInterval( action, 1111 )