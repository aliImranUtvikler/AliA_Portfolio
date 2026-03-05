(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-common-kobwebx-frontmatter'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-common-kobwebx-frontmatter'.");
    }
    globalThis['kobweb-common-kobwebx-frontmatter'] = factory(typeof globalThis['kobweb-common-kobwebx-frontmatter'] === 'undefined' ? {} : globalThis['kobweb-common-kobwebx-frontmatter'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var initMetadataForClass = kotlin_kotlin.$_$.m7;
  var VOID = kotlin_kotlin.$_$.c;
  var protoOf = kotlin_kotlin.$_$.c8;
  var listOf = kotlin_kotlin.$_$.f4;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.h;
  var Unit_instance = kotlin_kotlin.$_$.e2;
  var emptyList = kotlin_kotlin.$_$.n3;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(FrontMatterElement, 'FrontMatterElement');
  initMetadataForClass(Scalar, 'Scalar', VOID, FrontMatterElement);
  initMetadataForClass(ValueList, 'ValueList', VOID, FrontMatterElement);
  //endregion
  function Scalar() {
  }
  function ValueList() {
  }
  function FrontMatterElement() {
  }
  protoOf(FrontMatterElement).fc = function (path) {
    var result = this.i3u(path);
    var tmp;
    if (result instanceof Scalar) {
      tmp = listOf(result.j3u_1);
    } else {
      if (result instanceof ValueList) {
        tmp = result.h3u();
      } else {
        tmp = null;
      }
    }
    return tmp;
  };
  protoOf(FrontMatterElement).k3u = function () {
    var tmp0_safe_receiver = this instanceof Scalar ? this : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j3u_1;
  };
  protoOf(FrontMatterElement).h3u = function () {
    var tmp0_safe_receiver = this instanceof ValueList ? this : null;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l3u_1;
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.mapNotNull' call
      // Inline function 'kotlin.collections.mapNotNullTo' call
      var destination = ArrayList_init_$Create$();
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = tmp1_safe_receiver.i();
      while (_iterator__ex2g4s.j()) {
        var element = _iterator__ex2g4s.k();
        var tmp0_safe_receiver_0 = element.k3u();
        if (tmp0_safe_receiver_0 == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          destination.h(tmp0_safe_receiver_0);
        }
      }
      tmp = destination;
    }
    var tmp2_elvis_lhs = tmp;
    return tmp2_elvis_lhs == null ? emptyList() : tmp2_elvis_lhs;
  };
  return _;
}));

//# sourceMappingURL=kobweb-common-kobwebx-frontmatter.js.map
