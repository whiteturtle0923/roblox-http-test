const http = require('http');

const server = http.createServer((request, response) => {
  if (request.method === 'POST') {
    let data = '';
    request.on('data', chunk => {
      console.log(chunk)
      data += chunk.toString();
    });
    request.on('end', () => {
      /*const options = {
        hostname: 'discord.com',
        path: '/api/webhooks/1170849711272513666/IzpaIDF9b1Y2_0nVd1DUdnaO8FcEJ2zJVSOytvMUK7YVPVSbsvCM0NPkXxGDaX5SrIMp',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(data),
        },
      };
      const request = http.request(options, (res) => {
        console.log(`STATUS: ${res.statusCode}`);
        console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
        console.log(res.headers);
        console.log(`Retry after: ${res.headers["retry-after"]} seconds`)
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
          console.log(`BODY: ${chunk}`);
        });
        res.on('end', () => {
          console.log('No more data in response.');
        });
      });
      request.on('error', (e) => {
        console.error(`problem with request: ${e.message}`);
      });

      // Write data to request body
      //request.write(data);
      //request.end();*/
      console.log('POST data:', data);
      response.end(data);
    });
  } else {
    response.end('Send a POST request to this endpoint');
  }
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});

const test = {"date":"Tue, 27 Aug 2024 19:25:25 GMT","content-type":"text/plain; charset=UTF-8","content-length":"16","connection":"close","retry-after":"18629","x-frame-options":"SAMEORIGIN","referrer-policy":"same-origin","cache-control":"private, max-age=0, no-store, no-cache, must-revalidate, post-check=0, pre-check=0","expires":"Thu, 01 Jan 1970 00:00:01 GMT","report-to":"{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v4?s=ykcj5ySMK%2FJzh3MJP2gUrgYkMxhfzSHzmYxe5GNuvbBMW%2BWmufmfF6Zd3qu1UZhScPqG7zWYP2%2BywdVuMK20YXknDgzBTNnMQdYfTL8bVoz942b56vV9ZKwS6GGr\"}],\"group\":\"cf-nel\",\"max_age\":604800}","nel":"{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}","x-content-type-options":"nosniff","content-security-policy":"frame-ancestors 'none'; default-src 'none'","set-cookie":["_cfuvid=4_qZic8DJQa_czVk_MFb5clmlLCIlhP.Qb.L2T6kPh0-1724786725012-0.0.1.1-604800000; path=/; domain=.discord.com; HttpOnly"],"server":"cloudflare","cf-ray":"8b9e7287385f0610-IAD","alt-svc":"h3=\":443\"; ma=86400"};

console.log(`Retry after: ${test["retry-after"]} seconds`);
