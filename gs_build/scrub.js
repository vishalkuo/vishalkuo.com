var gitscrub = require('gitscrub')
var secret = require('./secret')


gitscrub.authenticate(secret.username, secret.password, function(){
    gitscrub.setSortOptions({'custom': [
        'FuturesRevealed',
        'gitScrub',
        'pasteDump',
        'codeStats',
        'arduinoBrakelightBackpack',
        'Grumble',
        'Summon (A.K.A. Genie)',
        'dotDash',
        'dinnerBell',
        'StarRush']})
    gitscrub.scrubADubDub(secret.username, secret.password, null, function(result, err){
        gitscrub.customSort(result, function(done){
            console.log('data = ' + JSON.stringify(done,null, 1))
        })
    })
})
