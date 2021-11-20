const request = require('request');
const cheerio = require('cheerio');
const getGoogleSports = async () => {
    return new Promise((resolve, reject) => {
        request('https://news.google.com/topics/CAAqKggKIiRDQkFTRlFvSUwyMHZNRFp1ZEdvU0JXVnVMVWRDR2dKSlRpZ0FQAQ?hl=en-IN&gl=IN&ceid=IN%3Aen', (error, response, html) => {
            if (error)
                reject(error)
            if (!error && response.statusCode == '200') {
                const $ = cheerio.load(html)
                let result = [];
                $('.ipQwMb').each((i, el) => {
                    const title = $(el).text();
                    const link = $(el).find('a').attr('href')
                    let json = {
                        title: title,
                        link: `https://news.google.com${link.substring(1)}`
                    }
                    result.push(json);
                })
                resolve(result);
            }
        })
        
    })

};

module.exports = {
    getGoogleSports
};