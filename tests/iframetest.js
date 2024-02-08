import { Selector } from "testcafe";
const iframeName = Selector('iframe[id=mce_0_ifr]');
const textArea = Selector("body[class='mce-content-body ']");

fixture("Iframe Navigation")
.page("https://the-internet.herokuapp.com/iframe");

test("Iframe Test", async t => {
    await t
        .switchToIframe(iframeName)
        .click(textArea)
        .pressKey("ctrl+a delete")
        .typeText(textArea, "Change the text of an iframe")
        .expect(textArea.innerText).contains("Change")
        .switchToMainWindow();
});
