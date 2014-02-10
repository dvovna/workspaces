describe("Switcher Controller", function () {
    var switcherControllerTests = new WS.SwitcherControllerTests();
    it("should trigger wsSwitch event with number of active workspace on switcher click",
        switcherControllerTests.onSwitcherClickTest);
});