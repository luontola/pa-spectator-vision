// Copyright © 2014 Esko Luontola <www.orfjackal.net>
// This software is released under the Apache License 2.0.
// The license text is at http://www.apache.org/licenses/LICENSE-2.0

(function () {
    var self = model;

    self.visionSelect = function (index, event) {
        if (event.shiftKey) {
            setVision(observerVision.latchingSolo(getVision(), index));
        } else {
            setVision(observerVision.cancelingSolo(getVision(), index));
        }
    };

    function getVision() {
        return self.playerVisionFlags();
    }

    function setVision(flags) {
        self.playerVisionFlags(flags);
        self.send_message('change_vision_flags', { 'vision_flags': flags });
        engine.call('game.updateObservableArmySet', flags);
    }

    var element = document.getElementsByClassName('div_player_data_wrapper')[0];
    element.innerHTML = element.innerHTML.replace(
        'click: function () { $parent.visionSelect($index()); }',
        'click: function (data, event) { $parent.visionSelect($index(), event); }')
})();
