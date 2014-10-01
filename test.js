var test = require('tape')
var kinks = require('./')

test('kinks', function(t){
  var hourglass = {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -45.703125,
              -3.381823735328289
            ],
            [
              -54.9755859375,
              -3.9519408561575946
            ],
            [
              -47.9443359375,
              -13.539200668930802
            ],
            [
              -54.58007812499999,
              -13.752724664396975
            ],
            [
              -45.703125,
              -3.381823735328289
            ]
          ]
        ]
      }

  var hourglassKinks = kinks(hourglass)
  t.ok(hourglassKinks, 'get self intersection from hourglass polygon')
  t.equal(hourglass.features.length, 1)
})