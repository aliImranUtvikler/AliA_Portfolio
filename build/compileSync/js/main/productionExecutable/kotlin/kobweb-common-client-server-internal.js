(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-common-client-server-internal'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-common-client-server-internal'.");
    }
    globalThis['kobweb-common-client-server-internal'] = factory(typeof globalThis['kobweb-common-client-server-internal'] === 'undefined' ? {} : globalThis['kobweb-common-client-server-internal'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.e2;
  var Enum = kotlin_kotlin.$_$.qa;
  var protoOf = kotlin_kotlin.$_$.c8;
  var initMetadataForClass = kotlin_kotlin.$_$.m7;
  var VOID = kotlin_kotlin.$_$.c;
  var listOf = kotlin_kotlin.$_$.f4;
  var removeSurrounding = kotlin_kotlin.$_$.q9;
  var removeSuffix = kotlin_kotlin.$_$.p9;
  var endsWith = kotlin_kotlin.$_$.e9;
  var removePrefix = kotlin_kotlin.$_$.o9;
  var startsWith = kotlin_kotlin.$_$.u9;
  var initMetadataForCompanion = kotlin_kotlin.$_$.n7;
  var getStringHashCode = kotlin_kotlin.$_$.k7;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.h;
  var toString = kotlin_kotlin.$_$.d8;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.f1;
  var first = kotlin_kotlin.$_$.t3;
  var drop = kotlin_kotlin.$_$.m3;
  var to = kotlin_kotlin.$_$.nb;
  var joinToString = kotlin_kotlin.$_$.x3;
  var emptyList = kotlin_kotlin.$_$.n3;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.hb;
  var plus = kotlin_kotlin.$_$.p4;
  var charSequenceLength = kotlin_kotlin.$_$.b7;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.t1;
  var charArrayOf = kotlin_kotlin.$_$.y6;
  var split = kotlin_kotlin.$_$.s9;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.b1;
  var startsWith_0 = kotlin_kotlin.$_$.v9;
  var toMutableList = kotlin_kotlin.$_$.b5;
  var removeFirst = kotlin_kotlin.$_$.s4;
  var endsWith_0 = kotlin_kotlin.$_$.d9;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(AcceptResult, 'AcceptResult', VOID, Enum);
  initMetadataForCompanion(Companion);
  initMetadataForClass(Info, 'Info');
  initMetadataForClass(Match, 'Match', VOID, Enum);
  initMetadataForClass(Node, 'Node');
  initMetadataForClass(RootNode, 'RootNode', RootNode, Node);
  initMetadataForClass(ChildNode, 'ChildNode', VOID, Node);
  initMetadataForClass(StaticNode, 'StaticNode', VOID, ChildNode);
  initMetadataForClass(DynamicNode, 'DynamicNode', VOID, ChildNode);
  initMetadataForClass(ResolvedEntry, 'ResolvedEntry');
  initMetadataForClass(RouteTree, 'RouteTree', RouteTree);
  //endregion
  var AcceptResult_NONE_instance;
  var AcceptResult_SINGLE_instance;
  var AcceptResult_ALL_instance;
  var AcceptResult_entriesInitialized;
  function AcceptResult_initEntries() {
    if (AcceptResult_entriesInitialized)
      return Unit_instance;
    AcceptResult_entriesInitialized = true;
    AcceptResult_NONE_instance = new AcceptResult('NONE', 0);
    AcceptResult_SINGLE_instance = new AcceptResult('SINGLE', 1);
    AcceptResult_ALL_instance = new AcceptResult('ALL', 2);
  }
  function AcceptResult(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function resolve$createResolvedEntry(this$0, consumedPart) {
    return listOf(new ResolvedEntry(this$0, consumedPart));
  }
  function AcceptResult_NONE_getInstance() {
    AcceptResult_initEntries();
    return AcceptResult_NONE_instance;
  }
  function AcceptResult_SINGLE_getInstance() {
    AcceptResult_initEntries();
    return AcceptResult_SINGLE_instance;
  }
  function AcceptResult_ALL_getInstance() {
    AcceptResult_initEntries();
    return AcceptResult_ALL_instance;
  }
  function Companion() {
  }
  protoOf(Companion).g36 = function (routeSegment) {
    if (!isDynamicSegment(routeSegment))
      return null;
    var name = routeSegment;
    name = removeSurrounding(name, '{', '}');
    var tmp;
    if (startsWith(name, '...')) {
      name = removePrefix(name, '...');
      var tmp_0;
      if (endsWith(name, '?')) {
        name = removeSuffix(name, '?');
        tmp_0 = Match_REST_OPTIONAL_getInstance();
      } else {
        tmp_0 = Match_REST_getInstance();
      }
      tmp = tmp_0;
    } else {
      var tmp_1;
      if (endsWith(name, '?')) {
        name = removeSuffix(name, '?');
        tmp_1 = Match_SINGLE_OPTIONAL_getInstance();
      } else {
        tmp_1 = Match_SINGLE_getInstance();
      }
      tmp = tmp_1;
    }
    var match = tmp;
    return new Info(name, match);
  };
  var Companion_instance;
  function Companion_getInstance() {
    return Companion_instance;
  }
  var Match_SINGLE_instance;
  var Match_SINGLE_OPTIONAL_instance;
  var Match_REST_instance;
  var Match_REST_OPTIONAL_instance;
  var Match_entriesInitialized;
  function Match_initEntries() {
    if (Match_entriesInitialized)
      return Unit_instance;
    Match_entriesInitialized = true;
    Match_SINGLE_instance = new Match('SINGLE', 0);
    Match_SINGLE_OPTIONAL_instance = new Match('SINGLE_OPTIONAL', 1);
    Match_REST_instance = new Match('REST', 2);
    Match_REST_OPTIONAL_instance = new Match('REST_OPTIONAL', 3);
  }
  function Info(name, match) {
    this.h36_1 = name;
    this.i36_1 = match;
  }
  protoOf(Info).toString = function () {
    return 'Info(name=' + this.h36_1 + ', match=' + this.i36_1.toString() + ')';
  };
  protoOf(Info).hashCode = function () {
    var result = getStringHashCode(this.h36_1);
    result = imul(result, 31) + this.i36_1.hashCode() | 0;
    return result;
  };
  protoOf(Info).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Info))
      return false;
    if (!(this.h36_1 === other.h36_1))
      return false;
    if (!this.i36_1.equals(other.i36_1))
      return false;
    return true;
  };
  function Match(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Match_SINGLE_getInstance() {
    Match_initEntries();
    return Match_SINGLE_instance;
  }
  function Match_SINGLE_OPTIONAL_getInstance() {
    Match_initEntries();
    return Match_SINGLE_OPTIONAL_instance;
  }
  function Match_REST_getInstance() {
    Match_initEntries();
    return Match_REST_instance;
  }
  function Match_REST_OPTIONAL_getInstance() {
    Match_initEntries();
    return Match_REST_OPTIONAL_instance;
  }
  function Node(parent, sourceRouteSegment) {
    parent = parent === VOID ? null : parent;
    this.j36_1 = parent;
    this.k36_1 = sourceRouteSegment;
    this.l36_1 = null;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.m36_1 = ArrayList_init_$Create$();
    this.n36_1 = null;
    this.o36_1 = this.k36_1;
    this.p36_1 = false;
  }
  protoOf(Node).q36 = function () {
    return this.l36_1;
  };
  protoOf(Node).wq = function () {
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$();
    this_0.r(this.m36_1);
    var tmp0_safe_receiver = this.n36_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this_0.h(tmp0_safe_receiver);
    }
    return this_0.s4();
  };
  protoOf(Node).q2d = function () {
    return this.o36_1;
  };
  protoOf(Node).r36 = function () {
    return this.p36_1;
  };
  protoOf(Node).u36 = function (routeSegment) {
    var tmp0 = this.wq();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.i();
      while (_iterator__ex2g4s.j()) {
        var element = _iterator__ex2g4s.k();
        if (element.t36(routeSegment)) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    return tmp$ret$1;
  };
  protoOf(Node).v36 = function (routeSegment) {
    // Inline function 'kotlin.check' call
    if (!(this.u36(routeSegment) == null)) {
      var message = 'Node.createChild called unexpectedly. Please report this issue.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    if (!!this.r36()) {
      var message_0 = 'User attempted to register an invalid route. "' + this.k36_1 + '" must be the last segment of the route, but it was followed by "' + routeSegment + '".';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    var tmp;
    if (isDynamicSegment(routeSegment)) {
      // Inline function 'kotlin.also' call
      var this_0 = new DynamicNode(this, routeSegment);
      this.n36_1 = this_0;
      tmp = this_0;
    } else {
      // Inline function 'kotlin.also' call
      var this_1 = new StaticNode(this, routeSegment);
      this.m36_1.h(this_1);
      tmp = this_1;
    }
    return tmp;
  };
  protoOf(Node).w36 = function (routeSegments) {
    var consumeResult = this.s36(routeSegments);
    var tmp;
    switch (consumeResult.l2_1) {
      case 0:
        return null;
      case 1:
        tmp = to(first(routeSegments), drop(routeSegments, 1));
        break;
      case 2:
        tmp = to(joinToString(routeSegments, '/'), emptyList());
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    var _destruct__k2r9zo = tmp;
    var consumedPart = _destruct__k2r9zo.me();
    var remainingSegments = _destruct__k2r9zo.ne();
    if (remainingSegments.l() && this.q36() == null)
      return null;
    if (remainingSegments.l())
      return resolve$createResolvedEntry(this, consumedPart);
    var tmp0 = this.wq();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstNotNullOfOrNull' call
      var _iterator__ex2g4s = tmp0.i();
      while (_iterator__ex2g4s.j()) {
        var element = _iterator__ex2g4s.k();
        var result = element.w36(remainingSegments);
        if (!(result == null)) {
          tmp$ret$1 = result;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp1_safe_receiver = tmp$ret$1;
    var tmp_0;
    if (tmp1_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_0 = plus(resolve$createResolvedEntry(this, consumedPart), tmp1_safe_receiver);
    }
    return tmp_0;
  };
  function RootNode() {
    Node.call(this, null, '');
  }
  protoOf(RootNode).t36 = function (routeSegment) {
    // Inline function 'kotlin.text.isEmpty' call
    return charSequenceLength(routeSegment) === 0;
  };
  protoOf(RootNode).s36 = function (routeSegments) {
    // Inline function 'kotlin.check' call
    if (!(first(routeSegments) === '')) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    return AcceptResult_SINGLE_getInstance();
  };
  function ChildNode(parent, sourceRouteSegment) {
    Node.call(this, parent, sourceRouteSegment);
  }
  function StaticNode(parent, sourceRouteSegment) {
    ChildNode.call(this, parent, sourceRouteSegment);
  }
  protoOf(StaticNode).t36 = function (routeSegment) {
    return routeSegment === this.k36_1;
  };
  protoOf(StaticNode).s36 = function (routeSegments) {
    if (this.t36(first(routeSegments)))
      return AcceptResult_SINGLE_getInstance();
    return AcceptResult_NONE_getInstance();
  };
  function DynamicNode(parent, sourceRouteSegment) {
    ChildNode.call(this, parent, sourceRouteSegment);
    var tmp = this;
    var tmp0_elvis_lhs = Companion_instance.g36(sourceRouteSegment);
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      var message = 'Expected a dynamic route segment here, but got "' + sourceRouteSegment + '"';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    tmp.s37_1 = tmp_0;
    this.t37_1 = this.s37_1.h36_1;
    this.u37_1 = !this.s37_1.i36_1.equals(Match_SINGLE_getInstance());
  }
  protoOf(DynamicNode).q2d = function () {
    return this.t37_1;
  };
  protoOf(DynamicNode).r36 = function () {
    return this.u37_1;
  };
  protoOf(DynamicNode).t36 = function (routeSegment) {
    var tmp0_safe_receiver = Companion_instance.g36(routeSegment);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      if (!this.s37_1.equals(tmp0_safe_receiver)) {
        // Inline function 'kotlin.error' call
        var message = 'User is attempting to register a dynamic route that conflicts with another dynamic route already set up. "' + routeSegment + '" is being registered but "' + this.k36_1 + '" already exists.';
        throw IllegalStateException_init_$Create$(toString(message));
      }
      return true;
    }
    return false;
  };
  protoOf(DynamicNode).s36 = function (routeSegments) {
    var tmp;
    switch (this.s37_1.i36_1.l2_1) {
      case 0:
        tmp = !(first(routeSegments) === '') ? AcceptResult_SINGLE_getInstance() : AcceptResult_NONE_getInstance();
        break;
      case 1:
        tmp = AcceptResult_SINGLE_getInstance();
        break;
      case 2:
        tmp = !(first(routeSegments) === '') ? AcceptResult_ALL_getInstance() : AcceptResult_NONE_getInstance();
        break;
      case 3:
        tmp = AcceptResult_ALL_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  function ResolvedEntry(node, capturedRouteSegment) {
    this.v37_1 = node;
    this.w37_1 = capturedRouteSegment;
  }
  function resolveWithoutRedirects($this, route) {
    return $this.x37_1.w36(split(route, charArrayOf([_Char___init__impl__6a9atx(47)])));
  }
  function resolveAllowingRedirects($this, route) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = route;
    var _iterator__ex2g4s = $this.y37_1.i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      var route_0 = accumulator;
      var tmp0_elvis_lhs = element.b38(route_0);
      accumulator = tmp0_elvis_lhs == null ? route_0 : tmp0_elvis_lhs;
    }
    var redirectedRoute = accumulator;
    return resolveWithoutRedirects($this, redirectedRoute);
  }
  function checkRoute($this, route) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.require' call
    if (!!$this.x37_1.wq().l()) {
      var message = "No routes were ever registered. This is unexpected and probably means no `@Page` was defined (or pages were defined in the wrong place where Kobweb couldn't discover them).";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!startsWith_0(route, _Char___init__impl__6a9atx(47))) {
      var message_0 = 'When checking a route, it must begin with a slash. Got: "' + route + '"';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var tmp0_elvis_lhs = resolveAllowingRedirects($this, route);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var resolvedNodes = tmp;
    return toRouteString(resolvedNodes);
  }
  function RouteTree() {
    this.x37_1 = new RootNode();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.y37_1 = ArrayList_init_$Create$();
  }
  protoOf(RouteTree).c38 = function (route, allowRedirects) {
    return allowRedirects ? resolveAllowingRedirects(this, route) : resolveWithoutRedirects(this, route);
  };
  protoOf(RouteTree).d38 = function (route) {
    return !(checkRoute(this, route) == null);
  };
  protoOf(RouteTree).e38 = function (route, data) {
    var routeSegments = toMutableList(split(route, charArrayOf([_Char___init__impl__6a9atx(47)])));
    var currNode = this.x37_1;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!this.x37_1.t36(removeFirst(routeSegments))) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    $l$loop: while (true) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!!routeSegments.l()) {
        break $l$loop;
      }
      var nextRouteSegment = removeFirst(routeSegments);
      var tmp0_elvis_lhs = currNode.u36(nextRouteSegment);
      currNode = tmp0_elvis_lhs == null ? currNode.v36(nextRouteSegment) : tmp0_elvis_lhs;
    }
    if (!(currNode.q36() == null))
      return false;
    currNode.l36_1 = data;
    return true;
  };
  function toRouteString(_this__u8e3s4) {
    return joinToString(_this__u8e3s4, '/', VOID, VOID, VOID, VOID, toRouteString$lambda);
  }
  function isDynamicSegment(_this__u8e3s4) {
    return startsWith_0(_this__u8e3s4, _Char___init__impl__6a9atx(123)) && endsWith_0(_this__u8e3s4, _Char___init__impl__6a9atx(125));
  }
  function toRouteString$lambda(it) {
    return it.w37_1;
  }
  //region block: init
  Companion_instance = new Companion();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = DynamicNode;
  _.$_$.b = RouteTree;
  _.$_$.c = toRouteString;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-common-client-server-internal.js.map
