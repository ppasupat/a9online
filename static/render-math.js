let RENDER_MATH = (function () {
  'use strict';
  var _RENDER_MATH = {};

  // Render LaTeX inside an HTML element
  _RENDER_MATH.render = function (element) {
    // Invoke KaTeX
    renderMathInElement(element, {
      delimiters: [
        {left: "\u0e5d", right: "\u0e5f", display: true},
        {left: "\u0e5c", right: "\u0e5e", display: false},
      ],
      throwOnError: false,
    });
  };

  return _RENDER_MATH;
})();
