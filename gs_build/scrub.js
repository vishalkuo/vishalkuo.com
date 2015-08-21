var gitscrub = require('gitscrub')
var secret = require('./secret')


gitscrub.authenticate(secret.username, secret.password, function(){
    gitscrub.selectRepos(
        [
            'FuturesRevealed',
            'gitScrub',
            'pasteDump',
            'codeStats',
            'arduinoBrakelightBackpack',
            'Grumble',
            'summon',
            'dotDash',
            'dinnerBell',
            'starRush'], null, function(){
            gitscrub.setSortOptions({'custom': [
                'FuturesRevealed',
                'gitScrub',
                'pasteDump',
                'codeStats',
                'arduinoBrakelightBackpack',
                'Grumble',
                'summon',
                'dotDash',
                'dinnerBell',
                'StarRush']})
            gitscrub.scrubADubDub(secret.username, secret.password, ['select'], function(result, err){
                gitscrub.customSort(result, function(done){
                    console.log(JSON.stringify(done,null, 1))
                })
            })
        })


})
