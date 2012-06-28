###
mouseScroll - jQuery Plugin

About this plugin, visit github project page.
https://github.com/bugcloud/mouse-scroll
###
$ = jQuery

$.fn.mouseScroll = (opt) ->
  default_options =
    animationSpeed: 100
    easingFunction: "linear"
    scrollCallback: () ->

  options = $.extend {}, default_options, opt
  obj = {}
  $_that = $(this)
  $_scroll = $("html, body")
  $_win = $(window)
  obj.stopScrolling = false
  obj.windowWidth = $_win.width()
  obj.windowHeight = $_win.height()

  obj.contentWidth = $_that.outerWidth()
  obj.contentHeight = $_that.outerHeight()
  ###
  windowWidth  : mouseX = contentWidth  : x
  windowHeight : mouseY = contentHeight : y
  ###

  $_win.resize () ->
    obj.windowWidth = $_win.width()
    obj.windowHeight = $_win.height()

  $("html").mousemove (e) ->
    unless obj.stopScrolling
      $_scroll.stop(false, false)
      props =
        scrollTop: "#{Math.floor e.clientY * obj.contentHeight / obj.windowHeight}px"
        scrollLeft: "#{Math.floor e.clientX * obj.contentWidth / obj.windowWidth}px"
      $_scroll.animate props, options.animationSpeed, options.easingFunction, options.scrollCallback

  this.stopScrolling = () ->
    obj.stopScrolling = true

  this.restartScrolling = () ->
    obj.stopScrolling = false

  return this
