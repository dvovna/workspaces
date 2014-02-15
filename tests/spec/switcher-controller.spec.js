describe("Switcher Controller", function () {
    var switcherControllerTests = new WS.SwitcherControllerTests();
    it("should trigger swithcing event with true switcher click",
        switcherControllerTests.onSwitcherClickTest);

    it("should trigger switching event with false on body click",
        switcherControllerTests.onBodyClickTest);
});