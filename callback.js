function getUserDetails(id,getUsersubjects){
    console.log("getting user details by id:",id);
    getUsersubjects({userroll:"678"})
};
function getUsersubjects(userroll,getUserMarks){
    console.log("getting user subjects by rollnumber:",userroll);
    getUserMarks({subid:"en-1"})
};
function getUserMarks(usersubid){
    console.log("getting user marks by subid:",usersubid);
   
};
getUserDetails("123",function(userroll){
    getUsersubjects(userroll,function(usersubid){
        getUserMarks(usersubid)
    })
});