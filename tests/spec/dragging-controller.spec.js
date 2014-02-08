describe("Dragging Controller", function () {
    var draggingControllerTests = new WS.DraggingControllerTests();

    it("should trigger dragging event on img mouse down after 1 sec without moving",
        draggingControllerTests.mousedownHandlerTest);

    it("should trigger dragging event on mouse move if mousedown was triggered before",
        draggingControllerTests.mouseMoveHandlerTest);
});