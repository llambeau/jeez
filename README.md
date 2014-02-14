jeez
====

jeez helps you generating JSON documents from the command line. 

jeez is the perfect companion for [unix2ws]("https://github.com/llambeau/Unix2WS.js"): generate easily (basic) JSON documents and pipe them to another process... Unix in all it's glory.

## Installation

<pre>
  npm install -g jeez
</pre>

## Usage

<pre>
# prints {"name":"McIlroy"}
jeez --name McIlroy

# prints {"name":"McIlroy","firstname":"Douglas"}
jeez --name McIlroy --firstname Douglas

# Support for arrays, Douglast McIlroy has actually two firstnames
# {"name":"McIlroy","firstname":["Douglas","Malcolm"]}
jeez --name McIlroy --firstname Douglas --firstname Malcolm

# Support for numbers
# {"born":1932,"pi":3.14}
jeez --born 1932 --pi 3.14

# ... and booleans
# {"happy":true}
jeez --happy
</pre>

## Limitation

You can only generate flat documents, nested documents are not supported (yet)

## Credits

Well, I was using [unix2ws]("https://github.com/llambeau/Unix2WS.js") a lot today... Echo'ing JSON strings quickly started to be annoying, so I thought of a tool like this...

4 lines of code later only, thanks to [minimist](https://github.com/substack/minimist) and @substack