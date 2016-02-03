require('./out/runtime/package');
System.import('sample/Main').catch(function(e){
    console.error(e.stack);
});