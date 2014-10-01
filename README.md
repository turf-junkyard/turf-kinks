turf-kinks
=====
[![Build Status](https://travis-ci.org/Turfjs/turf-kinks.svg)](https://travis-ci.org/Turfjs/turf-kinks)

Takes a polygon and detects all self-intersections.

*Note: This module uses straight line intersections, so giant edges may not be computed correctly, since the curvature of the earth is not accounted for*

*Experimental:* attempts to correct the kinks with reasonable assumptions

##Install

```sh
npm install turf-kinks
```

##Parameters
name|description
---|---
polygon|polygon feature or geometry

##Usage

```js
kinks(poly)
```

###Example

```js
var kinks = require('turf-kinks')

var poly = {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -12.034835815429688,
              8.901183448260598
            ],
            [
              -12.060413360595701,
              8.899826693726117
            ],
            [
              -12.036380767822266,
              8.873199368734273
            ],
            [
              -12.059383392333983,
              8.871418491385919
            ],
            [
              -12.034835815429688,
              8.901183448260598
            ]
          ]
        ]
      }

  var result = kinks(poly)

  console.log(result)

  /*
  	{
  		intersections: {"type":"Feature","geometry":{"type":"Point","coordinates":[-12.047632938440815,8.885666404927512]},"properties":{}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-12.047632938440815,8.885666404927512]},"properties":{}}]
  	}
  */
```
