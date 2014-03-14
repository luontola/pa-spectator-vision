// Copyright © 2014 Esko Luontola <www.orfjackal.net>
// This software is released under the Apache License 2.0.
// The license text is at http://www.apache.org/licenses/LICENSE-2.0

describe("Observer vision", function () {

    describe("When all are visible", function () {
        var vision = [1, 1, 1];

        it("clicking a player makes only him visible", function () {
            expect(observerVision.cancelingSolo(vision, 0)).toEqual([1, 0, 0]);
        });
        it("shift-clicking a player makes him hidden", function () {
            expect(observerVision.latchingSolo(vision, 0)).toEqual([0, 1, 1]);
        });
    });

    describe("When only one is visible", function () {
        var vision = [0, 0, 1];

        it("clicking that player makes all visible", function () {
            expect(observerVision.cancelingSolo(vision, 2)).toEqual([1, 1, 1]);
        });
        it("shift-clicking that player makes him hidden", function () {
            expect(observerVision.latchingSolo(vision, 2)).toEqual([0, 0, 0]);
        });

        it("clicking another player makes only him visible", function () {
            expect(observerVision.cancelingSolo(vision, 0)).toEqual([1, 0, 0]);
        });
        it("shift-clicking another player them both visible", function () {
            expect(observerVision.latchingSolo(vision, 0)).toEqual([1, 0, 1]);
        });
    });

    describe("When nobody is visible", function () {
        var vision = [0, 0, 0];

        it("clicking a player makes him visible", function () {
            expect(observerVision.cancelingSolo(vision, 0)).toEqual([1, 0, 0]);
        });
        it("shift-clicking a player makes him visible", function () {
            expect(observerVision.latchingSolo(vision, 0)).toEqual([1, 0, 0]);
        });
    });
});
