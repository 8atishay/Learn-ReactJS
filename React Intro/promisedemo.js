function promisedemo(location){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve(80);
            reject('city not found');
        },1000);
    })
}

promisedemo('pune').then(function(temp){
    console.log('Promise is success',temp);
},function(err){
    console.log('error found',err);
});

// promisedemo('pune').then(function(err){
//     console.log('error found',err);
// },function(temp){
//     console.log('Promise is success',temp);
// });