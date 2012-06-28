// Generated by CoffeeScript 1.3.3

/*
mouseScroll - jQuery Plugin

About this plugin, visit github project page.
https://github.com/bugcloud/mouse-scroll
*/


(function() {
  var $;

  $ = jQuery;

  $.fn.mouseScroll = function(opt) {
    var $_scroll, $_that, $_win, default_options, obj, options;
    default_options = {
      offsetTop: 0,
      animationSpeed: 100,
      easingFunction: "linear",
      scrollCallback: function() {}
    };
    options = $.extend({}, default_options, opt);
    obj = {};
    $_that = $(this);
    $_scroll = $("html, body");
    $_win = $(window);
    obj.stopScrolling = false;
    obj.windowWidth = $_win.width();
    obj.windowHeight = $_win.height();
    obj.contentWidth = $_that.outerWidth();
    obj.contentHeight = $_that.outerHeight();
    /*
      windowWidth  : mouseX = contentWidth  : x
      windowHeight : mouseY = contentHeight : y
    */

    $_win.resize(function() {
      obj.windowWidth = $_win.width();
      return obj.windowHeight = $_win.height();
    });
    $("html").mousemove(function(e) {
      var props;
      if (!obj.stopScrolling) {
        $_scroll.stop(false, false);
        props = {
          scrollTop: "" + ((Math.floor(e.clientY - options.offsetTop)) * obj.contentHeight / obj.windowHeight) + "px",
          scrollLeft: "" + (Math.floor(e.clientX * obj.contentWidth / obj.windowWidth)) + "px"
        };
        return $_scroll.animate(props, options.animationSpeed, options.easingFunction, options.scrollCallback);
      }
    });
    this.stopScrolling = function() {
      return obj.stopScrolling = true;
    };
    this.restartScrolling = function() {
      return obj.stopScrolling = false;
    };
    return this;
  };

}).call(this);
