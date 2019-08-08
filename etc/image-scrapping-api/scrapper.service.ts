import * as cheerio from 'cheerio';
import puppeteer from 'puppeteer';

const SEARCH_URL = 'https://www.google.com/search?tbm=isch&q=';

export function searchImages(keyword: string): Promise<string[]> {
    return loadPage(getFinalURL(keyword)).then(parseHTML);
}

function loadPage(url: string): Promise<string> {
    return puppeteer.launch()
        .then(browser => browser.newPage())
        .then(page => page.goto(url).then(() => page.content()))
        .then(html => html);
}

function getFinalURL(keyword: string): string {
    return SEARCH_URL + keyword;
}

function parseHTML(htmlContent: string): string[] {
    const $ = cheerio.load(htmlContent);
    const imageElements = $('.rg_meta.notranslate');
    return getImages(imageElements);
}

function getImages(imageElements: Cheerio): string[] {
    const result: string[] = [];
    for (let i = 0; i < imageElements.length; i++) {
        const imageURL = JSON.parse(imageElements.get(i).children[0].data).ou;
        result.push(imageURL);
    }
    return result;
}
