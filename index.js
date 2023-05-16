function superbowlWin(records) {
const foundWin = records.find(function(record) {
return record.result === `W`
}) 
if  (foundWin === undefined) {
    return undefined
}
else {
    return foundWin.year
}
}

