import GooglePage from '../page_objects/google_po.js'
let googlePage = new GooglePage()

Given('I open Google page', () => {
    googlePage.visit()
})

When(`I search {string}`, (search) => {
    googlePage.clickGoogleSearchBar()
    googlePage.fillGoogleSearchBar(search)
    googlePage.pressEnterKeyBoard()
})

Then(`I see the results about my search`, () => {
    googlePage.searchResult()
})