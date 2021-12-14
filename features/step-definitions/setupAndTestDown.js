var {After ,Before} =require('cucumber');
After(async function (stepResult){
await browser.execute("sauce:job-name=" + (stepResult.pickle.name));
await browser.execute("sauce:job-result=" + (stepResult.pickle.status));
await browser.execute("sauce:job-build=" + (process.env.JENKINS_BUILD_NUMBER));
const scenarioTags = stepResult.pickle.tags;
if(scenarioTags.length > 0){
    const tag = await stepResult.pickle.tags[0].name;
    const tagValue = await tag.replace('@','');
    await browser.execute("sauce:job-tags=" + (tagValue));
}
});