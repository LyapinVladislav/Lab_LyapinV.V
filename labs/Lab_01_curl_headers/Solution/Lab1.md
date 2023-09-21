# HTTP HTTPS � �� ��������� 
___________________________________________________
## ������������ ������ �1
***����� �.� [���-3-036]***
### ���� ������
������������� � ���������� HTTP � ���������� HTTPS, � ��� �� ������������� ������������ ���������� ����� ���������� � �����������.
___________________________________________________
���� ������������ ����� ����� ���:

`-I` - ��������� ��������� ������ ��������� HTTP-������ �������, ��� ���� ������.  
`-v` - ������ ��������� ����� ���������� � �������.  
`-L` - ��������� ��������� ���������������� ��� �������, ���� ������ ���������� ��� (301 ��� 302).  
`-k` - ��������� �������� SSL-�����������.

#### �����
������: 
`curl rgups.ru -I -v -L -k`

�����:
```shell
> HEAD / HTTP/1.1 - ��� ������ ������� ��������� �� ��� ������� (HEAD) � ������ ��������� (HTTP/1.1)
> Host: rgups.ru - ��� Host, ������� ��������� �� ��� �������.
> User-Agent: curl/8.2.1 - ��� ������ ������� ��������� �� ��������� � �������� ��������� ������
> Accept: */* - ������ ����������� �� ��� ������������ �������� 
> 
< HTTP/1.1 200 OK - ��� ������ ������ �������. ��������, ��� ������ ������� ��������� ������
< Server: nginx/1.19.1 - ������ ��������� �� ��������� �� � ��� ������
< Date: Thu, 21 Sep 2023 16:00:42 GMT - ������ ��������� ���� � ����� ����� ��� ������� ����� �� �������
< Content-Type: text/html; charset=utf-8 - ������ ��������� �� ��� �����������.
< Content-Length: 169 - ��������� ������ ������������� ���������� ���� ������� � ������
< Connection: keep-alive - ��� ������ ���������, ��� ���������� ����� �������� � �������� ������ ���� ��������������
< X-Powered-By: ProcessWire CMS - ������ �������� ���������� � ��, ������� ������������ �� �������
< Set-Cookie: wire=86eadf3cc378a58f2dff124ae9cf6aef; path=/; HttpOnly; SameSite=Lax - ������ ��������� �� ��������� ���� (cookie) �� ������� �������. 
���� ������������ ����� ������, ������� ������ ���������� ��������, 
� ��� ����� �������������� ��� ������������ ��������� ������ ��� ������ �������������� �����.
< Expires: Thu, 19 Nov 1981 08:52:00 GMT - ������ ��������� �� ���� � ����� ��������� ����� �������� ������.
���� ������� � �������, ��� ��� ����� �� ������ ������������
< Cache-Control: no-store, no-cache, must-revalidate - ������ ���������� ���������� ��� ����������� ������.
� ����� ������ �������, ��� ����� �� ������ ����������� � ���� � ������ ���� �������� ����� ��������������
< Pragma: no-cache - ������ ���������, ��� ����� �� ������ ������������ � ������ ���� ������ ������������� � �������.
```
#### GitHub

������:
`curl github.com -I -v -L -k`

�����: 

```shell
> HEAD / HTTP/1.1
> Host: github.com
> User-Agent: curl/8.2.1
> Accept: */*
>
< HTTP/1.1 200 OK
< Server: GitHub.com
< Date: Thu, 21 Sep 2023 16:25:27 GMT
< Content-Type: text/html; charset=utf-8
< Vary: X-PJAX, X-PJAX-Container, Turbo-Visit, Turbo-Frame, Accept-Language, Accept-Encoding, Accept, X-Requested-With -  ���� ��������� ��������� �� �������, 
������� ����� ������ �� ����������� ������ �� ������� ������� ��� ������-�������. 
< content-language: en-US - ���� ��������� ��������� �� ���� ��������, ������� ������������ � ������.
< ETag: W/"aa79b40beb07f510ff7a2bb5f2081380" - ���� ��������� ������������ ����� �����, ������� �������������� ���������� ������ �������. 
�� ������������ ��� ���������� ������������ �� ������� �������. 
���� ������ ����������, ETag ����������, � ������ ����� ������������ ��� ��� �����������, ����� �� ��� �������� ����������� ������ �������.
< Cache-Control: max-age=0, private, must-revalidate
< Strict-Transport-Security: max-age=31536000; includeSubdomains; preload -  ���� ��������� ��������� � ������������. 
�� ���������, ��� ������ ������ ������������ ������� ������ ������������� ������ (HTTPS) � ������� 31536000 ������ � �������� ��������� 
< X-Frame-Options: deny - ��� ���� ������������, ������� ����� ������ ������������� �����.
< X-Content-Type-Options: nosniff - ���� ��������� ������������� ������� �� ������������� ����������� ��� ����-��, ��������� �� ���������� � Content-Type.
< X-XSS-Protection: 0 - ���� ��������� ��������� �� ��, ��� ������� �� ������ ������������ �������� ������ �� ������������ ����������� ���������� (XSS)
< Referrer-Policy: origin-when-cross-origin, strict-origin-when-cross-origin - ���� ��������� ��������� ���, ����� ����������� � ���������� �������� ������� ������� ��� �������� �� ������.
< Set-Cookie: logged_in=no; Path=/; Domain=github.com; Expires=Wed, 21 Sep 2024 16:25:36 GMT; HttpOnly; Secure; SameSite=Lax 
< Accept-Ranges: bytes - ���� ��������� ���������, ��� ������ ������������ ��������� �������� ��� ������� �������.
< X-GitHub-Request-Id: 2E8B:15B8:5BC1C76:5D0480A:64FF2779 - ���� ��������� �������� ������������� �������, ������� ����� ���� ������� ��� ������������ ������� �� ������� �������.
```
#### ���

�������:
`curl rzd.ru -I -v -L -k --User-agent "Yandex"`

`--User-agent "Yandex"` - ��� ������, ������� ������  ���������� �� ������, 
����� �������, ����� ����������� ����������� ��� ����������
���������� ������.  

�����:

```shell
> HEAD / HTTP/1.1
> Host: www.rzd.ru
> User-Agent: Yandex
> Accept: */*
>
< HTTP/1.1 200
< Content-Type: text/html;charset=utf-8
< Content-Length: 210102 -  ���� ��������� ��������� �� ����� (������) ����������� ������ � ������ (210102 �����).
< Connection: keep-alive
< Date: Mon, 21 Sep 2023 16:34:51 GMT
< Vary: Accept-Encoding
< X-UCM-Pod-Name: inex-ucm-776d97f9d-4mqxf - ���� ��������� ������ � �������������� ���������� �����������.
< Strict-Transport-Security: max-age=15724800; includeSubDomains
< Via: nginx3 - ���� ��������� ��������� �� ������-������, ����� ������� ������ ������.
< X-Frame-Options: sameorigin
< Set-Cookie: session-cookie=1783e109d75ab07a7230195f18991a243b5b5e67db63b1a4c0cd0129b3473d2627ead013828923624e868b9cc3b51475; Max-Age=86400; Path=/; secure
< X-XSS-Protection: 1; mode=block - ���� ��������� ������� �������� � ���������� ������ �� XSS � ��������� ��� ����������� �������, 
������� ����� ������������ ������ ������������. 
```
#### Yandex

������:
`curl yandex.ru -I -v -L -k`

�����:

```shell
> HEAD /?yredirect=true HTTP/1.1 - ���� ������ ����� ��������� �� ������ � ��������� ���� / � ��������� ������� yredirect=true, � ������ ������ �������� ������ ����������� �������, ��� �������� ������������ �����������.
> Host: dzen.ru
> User-Agent: curl/8.2.1
> Accept: */*
>
< HTTP/1.1 200 Ok
< Cache-Control: no-cache, no-store, max-age=0, must-revalidate
< Content-Type: text/html; charset=utf-8
< Set-Cookie: _yasc=lEL1OdfoCCl7jklQgIf8S+Optkf45jvhWHzi3fU4FfbSajUWSDPA9wu8Y7Vyrzr74Q==; domain=.dzen.ru; path=/; expires=Thu, 18 Sep 2033 16:40:23 GMT; secure
< X-Content-Type-Options: nosniff
< X-Frame-Options: deny
< X-Requestid: 379459519.223.1694446417520.59980 -  ���� ��������� �������� ������������� �������, ������� ����� ���� ������� ��� ������������ ������� �� ������� �������.
< X-XSS-Protection: 1; mode=block
< X-Yandex-Req-Id: 1694446417486451-151878967925589959100109-production-app-host-sas-zen-518 - ��������� ������������ ����� ���������� ������������� �������, ������� ������� ��� ������������ ������� �� ������� ������� Yandex ��� �������, ������� ������������ �������.
```
#### Python

������:
`curl python.org -I -v -L -k`

�����:

```shell
> HEAD / HTTP/1.1
> Host: www.python.org
> User-Agent: curl/8.2.1
> Accept: */*
>
< HTTP/1.1 200 OK
< Connection: keep-alive
< Content-Length: 50265
< Server: nginx
< Content-Type: text/html; charset=utf-8
< X-Frame-Options: SAMEORIGIN
< Via: 1.1 vegur, 1.1 varnish, 1.1 varnish
< Accept-Ranges: bytes
< Date: Thu, 21 Sep 2023 16:41:41 GMT
< Age: 227 - ���� ��������� ��������� �� ����� � ��������, ��������� � ������� ����������� ������ �� ������� ��� ������.
< X-Served-By: cache-iad-kiad7000025-IAD, cache-bma1622-BMA - ���� ��������� ��������� �� ������� � ������, ������� ����������� ������.
< X-Cache: HIT, HIT - ���� ��������� ���������, ��� ����� ��� ������� �� ���� ��� ������� ������.
< X-Cache-Hits: 8, 4 - ���� ��������� ��������� �� ���������� "���������" � ��� ��� ������� �������
< X-Timer: S1695314502.860310,VS0,VE0 - ���� ��������� �������� ���������� � �������, ����������� �� ��������� ������� �� �������.
< Vary: Cookie
< Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

#### Git

������:
`curl git-scm.com -I -v -L -k`

�����: 

```shell
> HEAD / HTTP/1.1
> Host: git-scm.com
> User-Agent: curl/8.2.1
> Accept: */*
>
< HTTP/1.1 200 OK
< Date: Thu, 21 Sep 2023 16:44:38 GMT
< Content-Type: text/html; charset=utf-8
< Connection: keep-alive
< X-Frame-Options: SAMEORIGIN
< X-Xss-Protection: 1; mode=block
< X-Content-Type-Options: nosniff
< X-Download-Options: noopen - ���� ��������� ���������, ��� ����� �� ������ ����������� ������������� ����� ��������.
< X-Permitted-Cross-Domain-Policies: none - ���� ��������� ���������, ��� ��������, ��������� � �����-��������� ���������, �����������.
< Referrer-Policy: strict-origin-when-cross-origin
< Cache-Control: public, max-age=14400
< Etag: W/"db69273d9410cbf4536e9d4b3a59685d"
< X-Request-Id: 476d2e08-474c-4f3d-8503-d83ed21ae45f
< X-Runtime: 0.015343 - ���� ��������� ��������� �� �����, ����������� �� ���������� ������� �� ������� �������
< Via: 1.1 vegur
< CF-Cache-Status: HIT
< Age: 7029
< Server: cloudflare
< CF-RAY: 80a3c627abbf1678-DME - ���� ��������� ����� ��������� ���������� � ������� � ��������� �� ������� Cloudflare.
```

#### JetBrains

������:
`curl jetbrains.com -I -v -L -k`

�����: 

```shell
> HEAD / HTTP/1.1
> Host: www.jetbrains.com
> User-Agent: curl/8.2.1
> Accept: */*
>
< HTTP/1.1 200 OK
< Content-Type: text/html; charset=utf-8
< Content-Length: 47213
< Connection: keep-alive
< Date: Thu, 21 Sep 2023 16:48:45 GMT
< Server: nginx
< X-Content-Type-Options: nosniff
< Referrer-Policy: same-origin
< Expires: Thu, 21 Sep 2023 16:45:44 GMT - ���� ��������� ��������� �� ���� � ����� ��������� ����� �������� ������ � ����.
< Cache-Control: max-age=0
< Pragma: no-cache
< X-Frame-Options: DENY
< X-Content-Type-Options: nosniff
< X-Xss-Protection: 1; mode=block
< Strict-Transport-Security: max-age=31536000;
< Vary: Accept-Encoding
< Via: 1.1 c26999728b9b80253ea8308df470deba.cloudfront.net (CloudFront)
< Age: 204
< Set-Cookie: cf_country-region=RU-MOW; Domain=jetbrains.com; Path=/; Secure
< X-Cache: Hit from cloudfront
< X-Amz-Cf-Pop: HEL50-C1 - ���� ��������� �������� ���������� � Point of Presence CloudFront, ����� ������� ������ ������.
< X-Amz-Cf-Id: 74A2gtcFml-8R_dDZU1utWu5n0yhake1_ZZHAYBjP8GXBBdh-3VpfA== - ���� ��������� ����� ��������� ������������� ������� � ��������� �� ������� CloudFront.
```

#### VSC

������:
`curl code.visualstudio.com -I -v -L -k`

�����: 
```shell
> HEAD / HTTP/1.1
> Host: code.visualstudio.com
> User-Agent: curl/8.2.1
> Accept: */*
>
< HTTP/1.1 200 OK
< Content-Length: 50213
< Content-Type: text/html; charset=utf-8
< Accept-Ranges: bytes
< ETag: W/"c425-XBxswsHoV0dlJCAKuBbwZ9s5rjQ"
< Strict-Transport-Security: max-age=31536000; includeSubDomains
< Content-Security-Policy: frame-ancestors 'self' -  ���� ��������� ���������� �������� ������������ �������� � ��������� ����������� �������� ������ � �������� ������.
< X-Frame-Options: SAMEORIGIN
< X-XSS-Protection: 1; mode=block
< X-Content-Type-Options: nosniff
< X-Powered-By: ASP.NET
< x-azure-ref: 0jXQMZQAAAAANusv29yi/TZWZhOm/Gq20U1RPRURHRTEzMTMAYmU4N2RjNmQtNDBmOS00NWIwLTg4MTAtOTkxMDg3ZWY4YjI5
< X-Cache: CONFIG_NOCACHE
< Date: Thu, 21 Sep 2023 16:51:24 GMT
```