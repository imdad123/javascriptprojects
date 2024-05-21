//this is scope{}
//var b =300;
if(true)
    {
        let a=300;
        const c=400;
        var b = 500;
    }
   // console.log(a);
    console.log(b);
    //console.log(c);

    function one(){
        const username="imdad"
        function two()
        {
            console.log(username);
            const website="abc.com"
        }
        //this cannot be  accesd out the fun two but can access parent variables console.log(website);
        two();
    }
    one()