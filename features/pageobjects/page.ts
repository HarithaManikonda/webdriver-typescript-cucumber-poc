/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    public open(path: string): Promise<string> {
        console.log("SauceOnDemandSessionID=" + browser.sessionId + " job-name=The Internet Guinea Pig Website");
        return browser.url(`https://the-internet.herokuapp.com/${path}`)
    }
}
