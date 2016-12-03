# webgl-minimal

This repository contains a minimalistic example of WebGL.
I wrote this because every time I want to start writing something in WebGL, it takes me a while to get things set up.

Goals:
- **pure JavaScript**: no jQuery or other libraries
- **shaders in separate files**: easier editing of shaders (incl. syntax highlighting),
  at the cost of increased complexity for loading the shader source (in particular,
  most browsers _won't allow this page to run from the local filesystem_ because the
  XMLHttpRequest gets denied for local files; use a minimal webserver like node.js' `http-server`
  for testing purposes)
- **animation**: at least one time-dependent aspect, to demonstrate the correct creation of
  a rendering loop
- **resize handling**: window-filling WebGL canvas with correct canvas resizing if the window's size
  changes

Non-goals:
- **3D graphics**: if you want to do 3D graphics, replace the shaders
- **support for older browsers**: fallbacks for older browsers are not a goal
