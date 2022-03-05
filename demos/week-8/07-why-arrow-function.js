const outer = function() {
    console.log( 'outer =', this );
    // window.addEventListener( 'click', function() {

    // })

    let innerOld = function() {
        console.log( 'innerOld =', this );
    };
    
    // use an arrow function, when you want to use the context of the enclosing scope
    let innerNew = () => {
        console.log( 'innerNew =', this );
    };

    innerOld();
    innerNew();
};

outer.call( { x : 1 } );