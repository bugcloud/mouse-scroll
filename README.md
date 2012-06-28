# mouseScroll - jQuery Plugin

マウスの動きに合わせてwindowをスクロールさせるするgistでいいやつです。

## How to use
HTMLでscriptを読み込みます。easingプラグインを使えます。
```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js"></script>
<script src="js/jquery.easing.1.3.js"></script>
<script src="js/jquery.mouseScroll.js"></script>
```

$("#content").mouseScroll()で#contentの幅・高さとwindowの幅・高さとの比を計算し、
マウスの動きに合わせてwindowがスクロールするようになります。
```javascript
$(function() {
  $("#content").mouseScroll({
    animationSpeed: 800,
    easingFunction: "easeOutBack",
    scrollCallback: function() {
      console.log(":>");
    }
  })
})
```

## Options

*animationSpeed*
スクロールするスピードを数値で指定します。デフォルト値は
**100**
です。

*easingFunction*
スクロールのイージングを文字列で指定します。デフォルト値は
**linear**
です。

*scrollCallback*
スクロールが終わったときにコールされる関数を指定します。

## Sample
http://bugcloud.github.com/mouse-scroll/

## License
MIT
