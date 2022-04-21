#about us
## 第一步: 安裝需要的套件

首先到 [這裡](https://github.com/Ololkao/BeiBei) 複製一份到本地端。  
然後用

```shell
npm i
```

或

```shell
yarn
```

安裝所需套件。

## 第二步: 將pug編譯成html

我們的pug檔位於 `./preprocessor/pug/about.pug` 。寫完pug後，使用

```
./node_modules/.bin/pug ./preprocessor/pug/about.pug -o ./dist/html/ -P
```

將pug編譯成位於 `./dist/html/about.html` 的html

## 第三步: 執行html

完成之後，就可以到 `./dist/html/about.html` 打開本地網頁或直接點[這裡](https://kc71486.github.io/BeiBei_aboutus/about.html)