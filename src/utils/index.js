export  function testMobile(mobile) {
    console.log(mobile);
    if(!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(mobile))){ 
        return false; 
    } 
    return true
}