data = [
 {
  "title": "FuturesRevealed",
  "headers": [
   {
    "header": "About",
    "text": "Futures Revealed is a Canadian organization created to help high school students handle the transition from graduation to their post-secondary path. This projet involved the creation of the offical application on both Android and iOS platforms to help the organization better connect and inform the students it's trying to help. The official applications are set to be released September 2015. ",
    "jotNotes": []
   },
   {
    "header": "Technologies",
    "text": "",
    "jotNotes": [
     "Objective-C",
     "Java",
     "MySQL",
     "PHP",
     "AngularJS (for administration)"
    ]
   },
   {
    "header": "Dates",
    "text": "February 2015 - August 2015",
    "jotNotes": []
   },
   {
    "header": "Links",
    "text": "",
    "jotNotes": [
     "http://www.futuresrevealed.ca ",
     "https://play.google.com/store/apps/details?id=vishalkuo.com.futuresrevealed",
     "https://itunes.apple.com/us/app/futures-revealed/id1016694641?mt=8"
    ]
   }
  ]
 },
 {
  "title": "gitScrub",
  "headers": [
   {
    "header": "Status",
    "text": "[![Build Status](https://travis-ci.org/vishalkuo/gitScrub.svg?branch=master)](https://travis-ci.org/vishalkuo/gitScrub)[![Coverage Status](https://coveralls.io/repos/vishalkuo/gitScrub/badge.svg?branch=master&service=github)](https://coveralls.io/github/vishalkuo/gitScrub?branch=master)[![Dependencies](https://david-dm.org/vishalkuo/gitscrub.svg)](https://david-dm.org/vishalkuo/gitscrub.svg)",
    "jotNotes": []
   },
   {
    "header": "Installation",
    "text": "### .gitignore ###```gitignore#Other file namessecret.js #Or whatever you named your username/password file```### secret.js ###```Javascript   secret = module.exports;  secret.username = YOUR_GITHUB_USERNAME  secret.password = YOUR_GITHUB_PASSWORD```",
    "jotNotes": [
     "In your project directory: ```npm install --save-dev gitscrub```",
     "In your project: ```var gs = require('gitscrub')```",
     "To save Github username and password, first add a filename to your .gitignore. I called mine secret.js. Open this up in project root by typing ```nano .gitignore```"
    ]
   },
   {
    "header": "Usage",
    "text": "```Javascriptvar gs = require('gitscrub')var secret = require('./path_to_secret.js')//Options is a WIPvar options = null//This is the most basic configurationgitscrub.scrubadubdub(secret.username, secret.password, options, function(data){  for (i = 0; i < data.length; i++){    console.log(data[i].title )    console.log(data[i].headers)  }})```",
    "jotNotes": []
   },
   {
    "header": "GitScrub Format",
    "text": "```[{title: 'repo title',  headers:[      {        header: 'header title',        text: 'body text',        jotNotes: [jotNote1, jotNote2, ...],      }      //Rest of your headers...    ]  }//Rest of your repos...]```",
    "jotNotes": [
     "Always start headers with ```##``` with a space following afterwards ",
     "Title will always start with ```#``` with a space following afterwards",
     "Jot notes will be parsed into their own array inside of each header object. Be prepared for that",
     "Headers ```###``` or longer will simply be included in the most recent header object.",
     "Code blocks are not formatted yet. This is a feature that welcomes a PR. ",
     "Output format is structured as follows: ",
     "Check out the raw version of this readme for what a formatted read me will end up looking like and checkout ```tests/scrubadubub.json``` for what your readmes will parse to"
    ]
   },
   {
    "header": "Options",
    "text": "### Selecting & Custom Sorting Repos```Javascriptvar gitscrub = require('gitscrub')var secret = require('./secret')//List your repos exact titles belowgitscrub.setSortOptions({'custom': [    'FuturesRevealed',    'gitScrub',    'pasteDump',    'codeStats',    'arduinoBrakelightBackpack',    'Grumble',    'Summon (A.K.A. Genie)',    'dotDash',    'dinnerBell',    'StarRush']})gitscrub.scrubADubDub(secret.username, secret.password, null, function(result, err){    gitscrub.customSort(result, function(done){        //Data is outputted like this to easily be loaded into an HTML page and rendered using Angular        console.log('data = ' + JSON.stringify(done,null, 1))    })})```### Selecting files other than README```Javascriptvar gitscrub = require('gitscrub')var secret = require('./secret')//List your repos exact titles below//This will select all files named license.md and parse them just like the readme isgitscrub.setOptions({customFile: 'license'})gitscrub.scrubADubDub(secret.username, secret.password, null, function(result, err){    console.log('data = ' + JSON.stringify(done,null, 1))})```More info/beta stuff in the examples and tests folders",
    "jotNotes": []
   },
   {
    "header": "About",
    "text": "gitScrub was created with the intention of keeping personal websites up to date without having to manually enter new projects into them every time. The idea is that this npm module might run nightly, weekly, or monthly to produce a json object which will get included on the front-end of a website. Using a framework such as angular, the object can quickly be iterated through to produce a formatted list of all your projects to date.",
    "jotNotes": []
   },
   {
    "header": "Dates",
    "text": "July 2015 - Present  ",
    "jotNotes": []
   },
   {
    "header": "Links",
    "text": "",
    "jotNotes": [
     "https://www.npmjs.com/package/gitscrub"
    ]
   },
   {
    "header": "Technologies",
    "text": "",
    "jotNotes": [
     "nodeJS",
     "Github API",
     "RSVPromise",
     "Restler"
    ]
   },
   {
    "header": "Notes",
    "text": "gitscrub can be heavy to run (as much as two seconds to grab 15 repos due to the inability to batch requests) so it is reccomended this be run in a development enviroment then have the output deployed to production as a static json file. I use a gulpfile, alternatives are cronjobs or bash scripts. Go crazy.",
    "jotNotes": []
   },
   {
    "header": "Contributors",
    "text": "",
    "jotNotes": [
     "[Jerry Wang](https://github.com/yisenjerrywang)",
     "[Chris Grandoit](https://twitter.com/cgrandoit) (for inspiration)",
     "Vishal Kuo"
    ]
   },
   {
    "header": "Milestones",
    "text": "",
    "jotNotes": [
     "960 Downloads: Sep 13, 2015"
    ]
   }
  ]
 },
 {
  "title": "pasteDump",
  "headers": [
   {
    "header": "About",
    "text": "Paste Dump was inspired during my first co-op term when I was conducting device compatibility testing for my company's software. A big issue I ran into during testing was that I would need links, or access tokens, that would have to be painfully typed in by hand on each device. Furthermore, some of the devices could not even sign into an email client due to some security settings previously applied. I decided to create pasteDump for iOS and Android which would allow for fast link sharing between devices on various platforms using either a simple authentication system or a more popular Facebook single sign-on system. ",
    "jotNotes": []
   },
   {
    "header": "Technologies",
    "text": " ",
    "jotNotes": [
     "Objective-C",
     "Java",
     "MySQL",
     "PHP"
    ]
   },
   {
    "header": "Dates",
    "text": "May 2015 - July 2015",
    "jotNotes": []
   },
   {
    "header": "Links",
    "text": "",
    "jotNotes": [
     "https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewSoftware?id=998402366&mt=8",
     "https://play.google.com/store/apps/details?id=pastedump.vishalkuo.com.pastedump"
    ]
   }
  ]
 },
 {
  "title": "codeStats",
  "headers": [
   {
    "header": "About",
    "text": "codeStats is a simply python application meant to grab and compile statistics about your code into interesting and, hopefully, meaningful data. Currently, it creates a cumulative percentage breakdown of all the languages you've used in your projects. Suggestions to stats you'd like to see are always welcome!",
    "jotNotes": []
   },
   {
    "header": "Dates",
    "text": "September 2015",
    "jotNotes": []
   },
   {
    "header": "Usage",
    "text": "1. ```git clone https://github.com/vishalkuo/codeStats.git```2. ```cd codeStats```3. ```pip install -r requirements.txt```4. ```python main.py```5. ```[FAV_TEXT_EDITOR] report.txt```",
    "jotNotes": []
   }
  ]
 },
 {
  "title": "arduinoBrakelightBackpack",
  "headers": [
   {
    "header": "About",
    "text": "The BrakeLight backpack is a wearable project intended to make biking a safer and more enjoyable experience. Essentially, the wearer can indicate the direction he wishes to turn by pushing a button on his bike handle. The backpack will then light up with the corresponding arrow to let traffic behind him know. Additionally, the built in accelerometer will detect when the user is slowing down and will have the entire backpack light up. This project was created using arduino and flora microcontrollers along with Adafruit parts.",
    "jotNotes": []
   },
   {
    "header": "Dates",
    "text": "August 2014 - September 2014",
    "jotNotes": []
   }
  ]
 },
 {
  "title": "Grumble",
  "headers": [
   {
    "header": "About",
    "text": "Grumble is a node.js application designed to elegantly organize and display the meals being served at various cafeterias around the University of Waterloo. This application was my first attempt at server side javascript, it was built using node.js, jade, and the Express framework. Current expansion involves adding an upvote feature using mongoDB.",
    "jotNotes": []
   },
   {
    "header": "Dates",
    "text": "February 2015 - March 2015",
    "jotNotes": []
   },
   {
    "header": "Technologies",
    "text": "",
    "jotNotes": [
     "express.JS",
     "Jade",
     "jQuery"
    ]
   },
   {
    "header": "Links",
    "text": "",
    "jotNotes": [
     "www.grumblevkuo.herokuapp.com"
    ]
   },
   {
    "header": "Installation",
    "text": "Originally, the project could have been run by cloning and running the app in your browser, ```localhost:3000```. Unfortunately,since the provisioning and use of a Postgres database through heroku, this is no longer possible.",
    "jotNotes": []
   },
   {
    "header": "Notes",
    "text": "In ```node_modules/ignoreModule```, there are no modules visible. This is an ignored file as it contains a Waterloo API token as seen in ```index.js``````javascript var apiToken = ignore.ignoreModule();``` If you wish to request a token, it can be done so [here](https://api.uwaterloo.ca/).",
    "jotNotes": []
   }
  ]
 },
 {
  "title": "Summon (A.K.A. Genie)",
  "headers": [
   {
    "header": "About",
    "text": "Summon is a realtime service app that allows customers at restaurants to connect to the restaurant's server hub when they scan a QR code with an Android device. The customers will maintain a session with that hub as long as they remain on the restaurant's Wi-Fi. During that time, they can use the Summon app to quickly refills, their check, or type in their own custom request. Since this project was created for the toast hack-a-thon, it also has the capability to query the toast database to download the latest menu from the restaurant so that a customer can quick order from this app without having to wait for a server to come over. The server, connected through a simple live webpage, will receive updates indicating which table is requesting what and how many requests that customer has made. ",
    "jotNotes": []
   },
   {
    "header": "Dates",
    "text": "July 4th, 2015",
    "jotNotes": []
   },
   {
    "header": "Technologies",
    "text": "",
    "jotNotes": [
     "Postgres",
     "express.js",
     "socket.io",
     "Java",
     "Objective-C",
     "Jade",
     "jQuery"
    ]
   }
  ]
 },
 {
  "title": "dotDash",
  "headers": [
   {
    "header": "About",
    "text": "dotDash is a minimal Text to Morse and Morse to Text translator created as my introduction to Android development. The project exists on the <a href =https://play.google.com/store/apps/details?id=com.vishalkuo.dotDash&hl=e />Google Play Store</a>n and currently has updates rolling out. ",
    "jotNotes": []
   },
   {
    "header": "Technologies",
    "text": "",
    "jotNotes": [
     "Java"
    ]
   },
   {
    "header": "Links",
    "text": "",
    "jotNotes": [
     "Android App: https://play.google.com/store/apps/details?id=com.vishalkuo.dotDash&hl=e"
    ]
   },
   {
    "header": "Notes",
    "text": "Currently underway is an attempt to improve the UI including a neater layout and styled buttons. There are certain blocks of commented code in the MainActivity such as   ```Java  Context context = this;        PackageManager pm = context.getPackageManager();        if (!pm.hasSystemFeature(PackageManager.FEATURE_CAMERA))        {            Log.e(\"ERR\", \"NO CAMERA\");            Toast.makeText(getApplicationContext(), \"Your device doesn't have a camera!\",                    Toast.LENGTH_SHORT).show();            return;        }  ```  This code is intended to create a camera flash functionality to represent the Morse Code. I was initially unable to implement this because I lacked an Android device to test with. However, I have aquired a device since and attempting to include this feature in the next relase. ##EDITThe flash functionality is now working, to an extent. Two problems are still apparent:There is no way to asynchronously countrol the flash as the camera object requires the UI thread (main context) to preview/not preview.I have had some issues with the camera not being released properly. This only happened during testing and installation; however, it could very well crop up in daily use. I am working on this.Camera timer achieved through the following:```Java for (int i = 0; i < intVals.length; i++){            int handlerInt = (intVals[i] == 0)? _DOT : _DASH;            cam.startPreview();            try {                Thread.sleep(handlerInt);            } catch (InterruptedException e) {                e.printStackTrace();            }            cam.stopPreview();            try {                Thread.sleep(400);            } catch (InterruptedException e) {                e.printStackTrace();            }        }``` For now, thread.sleep must be used until I can determine if it is at all possible to implement a varying interal task using handlers. For now, more research is required.        ",
    "jotNotes": []
   }
  ]
 },
 {
  "title": "dinnerBell",
  "headers": [
   {
    "header": "About",
    "text": "Dinner bell is a one page webpage application designed to allow students living on residence to vote on a common dinner time to ensure everyone can eat together. This application was designed using HTML, CSS, PHP, and mySQL as my first attempt at backend development.",
    "jotNotes": []
   },
   {
    "header": "Technologies",
    "text": "",
    "jotNotes": [
     "MySQL",
     "jQuery",
     "HTML",
     "CSS",
     "php"
    ]
   },
   {
    "header": "Links",
    "text": " ",
    "jotNotes": [
     "www.dinnerbell.vishalkuo.com"
    ]
   },
   {
    "header": "Notes:",
    "text": "Note that many of the php files contain```php<?  $username = \"root\";  $password = \"root\";  $database = \"time\";```These are dummy variables to access a local MySQL server. They will not help in accessing my public server. I am currently working on connecting the AJAX and PHP more elegantly. Code such as```javascript  if (times[1][\"time\"] !== \"\")  {    $(\"#t1\").text(times[1][\"time\"] + \" = \" + times[1][\"Votes\"] + \" vote(s)\");  }```is a temporary workaround to checking if the MySQL query is empty. Future releases will involve more structured queries and more structure in the PHP code.",
    "jotNotes": []
   }
  ]
 },
 {
  "title": "StarRush",
  "headers": [
   {
    "header": "About",
    "text": "Star Rush is an arcade style shooter developed for iOS versions 7 and up. This was my culminating project for my grade 12 Computer Engineering Class.",
    "jotNotes": []
   },
   {
    "header": "Dates",
    "text": "February 2014 - August 2014",
    "jotNotes": []
   },
   {
    "header": "Links",
    "text": "",
    "jotNotes": [
     "https://itunes.apple.com/us/app/star-rush-prologue/id888866305?mt=8"
    ]
   }
  ]
 }
]
