import { Selector } from "testcafe";
const devName = Selector("#developer-name");
const macOs = Selector("#macos");
const submitBtn = Selector("#submit-button");
fixture('first fixture')
    .page('http://devexpress.github.io/testcafe/example');

test('First test', async t => {
    await t
        .typeText(devName, "Andmont")
        .click(macOs)
        .click(submitBtn);
});

test('Navigate test', async t => {
    await t
        .navigateTo("http://google.com")
});