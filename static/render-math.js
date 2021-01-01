let RENDER_MATH = (function () {
  'use strict';
  var _RENDER_MATH = {};

  // Render LaTeX inside an HTML element
  _RENDER_MATH.render = function (element) {
    // Invoke KaTeX
    renderMathInElement(element, {
      delimiters: [
        {left: "$$", right: "$$", display: true},
        {left: "$", right: "$", display: false},
      ],
      throwOnError: false,
    });
  };

  return _RENDER_MATH;
})();
