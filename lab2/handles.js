
const notFound = require('./notFound.js')
const url = require('url')
const qs = require('querystring')

module.exports = {

        serverHandle: function (req, res) {

                const route = url.parse(req.url);
                const params = qs.parse(route.query);
                const path = route.pathname;

                if (path === '/') {
                        res.writeHead(200, { 'Content-Type': 'text/html' });
                        res.write('Home')
                        
                } else if (path === '/hello' && 'name' in params) {
                        res.writeHead(200, { 'Content-Type': 'text/html' });
                        if (params['name'] === 'teo') {
                                res.write('Teo is an ING4.')
                        } else {
                                res.write('hello ' + params['name'])
                        }
                } else if (path === '/about') {
                        res.writeHead(200, { 'Content-Type': 'application/json' })
                        const about = require('./content/about.json')
                        res.write(JSON.stringify(about));
                } else {
                        //res.writeHead(404, {'Content-Type': 'text/plain'})
                        //res.end('Page not found')	
                        res.writeHead(200, { 'Content-Type': 'text/html' });
                        res.write(notFound)
                }
                res.end()
        }
        
}
