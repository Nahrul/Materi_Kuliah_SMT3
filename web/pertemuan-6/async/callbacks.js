// callbacks
function fetchData(callback){
    // simulating an asynchronus operation
    setTimeout(function() {
        const data = 'Fetched data'
        callback(data)
    }, 1000)
}

// using a callback
fetchData(function(data) {
    console.log(data)
})

// callback hell (Pytamid od doom)
fetchData(function(data){
    process1(data, function(result1){
        process2(result1, function(result2){
            process3(result2, function(finalResult){
                console.log('Final Result:', finalResult)
            })
        })
    })
})