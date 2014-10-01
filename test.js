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
  t.equal(hourglassKinks.features.length, 1)

  var triple = {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -44.384765625,
              1.0106897682409128
            ],
            [
              -53.4375,
              0.4833927027896987
            ],
            [
              -43.154296875,
              -6.402648405963884
            ],
            [
              -53.173828125,
              -6.708253968671543
            ],
            [
              -43.857421875,
              -13.752724664396975
            ],
            [
              -54.09667968749999,
              -14.944784875088372
            ],
            [
              -53.3935546875,
              -11.867350911459308
            ],
            [
              -44.384765625,
              1.0106897682409128
            ]
          ]
        ]
      }
    }

  var tripleKinks = kinks(triple)
  t.ok(tripleKinks, 'get self intersection from hourglass polygon')
  t.equal(tripleKinks.features.length, 3)
})