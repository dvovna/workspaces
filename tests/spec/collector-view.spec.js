describe("Collector View", function () {
    var collectorViewTests = new WS.CollectorViewTest();

    it("should init collector view", collectorViewTests.initCollectorTest);
    it("should show itself on draggingContr's dragging event", collectorViewTests.onDraggingEventTest);
    it("should trigger dropped event on item dropped", collectorViewTests.onDropppedEventTest);
});