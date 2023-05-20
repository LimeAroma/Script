let header = $request.headers;
let ck = header['cookie'] ? 'cookie' : 'Cookie';
header[ck] = header[ck].replace(/appver=\d\.\d\.\d\d/, 'appver=9999');
$done({headers:header});
