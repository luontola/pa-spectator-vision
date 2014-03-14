// Copyright © 2014 Esko Luontola <www.orfjackal.net>
// This software is released under the Apache License 2.0.
// The license text is at http://www.apache.org/licenses/LICENSE-2.0

var spectatorVision = (function () {
    var self = {};

    // Named after solo modes in audio mixers:
    // http://erikhawkins.berkleemusicblogs.com/2009/06/27/when-to-solo/

    self.cancelingSolo = function (vision, index) {
        if (soleVisibleIndex(vision) === index) {
            return makeAllVisible(vision);
        } else {
            return makeOnlyVisible(vision, index);
        }
    };

    self.latchingSolo = function (vision, index) {
        return toggleVision(vision, index);
    };

    function makeAllVisible(vision) {
        vision = vision.slice();
        vision.forEach(function (_, i) {
            vision[i] = 1;
        });
        return vision;
    }

    function makeOnlyVisible(vision, index) {
        vision = vision.slice();
        vision.forEach(function (_, i) {
            vision[i] = 0;
        });
        vision[index] = 1;
        return vision;
    }

    function toggleVision(vision, index) {
        vision = vision.slice();
        vision[index] = (vision[index] ? 0 : 1);
        return vision;
    }

    function soleVisibleIndex(vision) {
        if (visibleCount(vision) === 1) {
            for (var i = 0; i < vision.length; i++) {
                if (vision[i]) {
                    return i;
                }
            }
        }
        return -1;
    }

    function visibleCount(vision) {
        var count = 0;
        for (var i = 0; i < vision.length; i++) {
            if (vision[i]) {
                count++;
            }
        }
        return count;
    }

    return self;
})();
