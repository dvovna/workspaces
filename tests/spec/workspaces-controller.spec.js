describe("Worspaces Controller", function () {
    var WSControllerTests = new WS.WorkspacesControllerTest();

    it("should init worspace with correct parameters", WSControllerTests.workspaceInitTest);
    it("should init topWorspaceModel with args", WSControllerTests.workspaceModelInitTest);
});
