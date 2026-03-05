(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-browser-ext'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-browser-ext'.");
    }
    if (typeof kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-browser-ext'. Its dependency 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' was not found. Please, check whether 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' is loaded prior to 'kobweb-frontend-browser-ext'.");
    }
    globalThis['kobweb-frontend-browser-ext'] = factory(typeof globalThis['kobweb-frontend-browser-ext'] === 'undefined' ? {} : globalThis['kobweb-frontend-browser-ext'], globalThis['kotlin-kotlin-stdlib'], kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.c8;
  var initMetadataForClass = kotlin_kotlin.$_$.m7;
  var initMetadataForCompanion = kotlin_kotlin.$_$.n7;
  var IllegalArgumentException = kotlin_kotlin.$_$.ta;
  var charSequenceLength = kotlin_kotlin.$_$.b7;
  var toString = kotlin_kotlin.$_$.d8;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.b1;
  var Unit_instance = kotlin_kotlin.$_$.e2;
  var charCodeAt = kotlin_kotlin.$_$.z6;
  var isDigit = kotlin_kotlin.$_$.h9;
  var substring = kotlin_kotlin.$_$.ba;
  var CharSequence = kotlin_kotlin.$_$.na;
  var VOID = kotlin_kotlin.$_$.c;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.g;
  var objectCreate = kotlin_kotlin.$_$.b8;
  var getNumberHashCode = kotlin_kotlin.$_$.i7;
  var equals = kotlin_kotlin.$_$.f7;
  var hashCode = kotlin_kotlin.$_$.l7;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.n;
  var EventListener = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.c;
  var THROW_CCE = kotlin_kotlin.$_$.ya;
  var Enum = kotlin_kotlin.$_$.qa;
  var isBlank = kotlin_kotlin.$_$.g9;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.v;
  var charSequenceGet = kotlin_kotlin.$_$.a7;
  var isUpperCase = kotlin_kotlin.$_$.k9;
  var Char = kotlin_kotlin.$_$.oa;
  var get_lastIndex = kotlin_kotlin.$_$.m9;
  var isLowerCase = kotlin_kotlin.$_$.j9;
  var toString_0 = kotlin_kotlin.$_$.u1;
  var Companion_getInstance = kotlin_kotlin.$_$.c2;
  var DurationUnit_MILLISECONDS_getInstance = kotlin_kotlin.$_$.d;
  var toDuration = kotlin_kotlin.$_$.ma;
  var _Duration___get_inWholeMilliseconds__impl__msfiry = kotlin_kotlin.$_$.r1;
  var convertToInt = kotlin_kotlin.$_$.h6;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(ElementTarget$Companion$PreviousSibling$1);
  initMetadataForCompanion(Companion);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(CssIdent, 'CssIdent', VOID, VOID, [CharSequence]);
  initMetadataForCompanion(Companion_1);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(Size, 'Size');
  initMetadataForClass(Entry, 'Entry');
  initMetadataForClass(ResizeObserver_0, 'ResizeObserver');
  initMetadataForClass(EventListenerManager, 'EventListenerManager');
  initMetadataForClass(StorageKey, 'StorageKey');
  initMetadataForClass(EnumStorageKey, 'EnumStorageKey', VOID, StorageKey);
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(CancellableActionHandle, 'CancellableActionHandle');
  //endregion
  function ElementTarget$Companion$PreviousSibling$1() {
  }
  protoOf(ElementTarget$Companion$PreviousSibling$1).c2y = function (startingFrom) {
    var tmp = startingFrom.previousElementSibling;
    return tmp instanceof HTMLElement ? tmp : null;
  };
  function Companion() {
  }
  protoOf(Companion).d2y = function () {
    return new ElementTarget$Companion$PreviousSibling$1();
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    return Companion_instance;
  }
  function Companion_0() {
  }
  protoOf(Companion_0).e2y = function (identifier) {
    var tmp;
    try {
      tmp = new CssIdent(identifier);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  var Companion_instance_0;
  function Companion_getInstance_1() {
    return Companion_instance_0;
  }
  function CssIdent(asStr) {
    this.f2y_1 = asStr;
    var errorMsg = 'Invalid CSS identifier: "' + this.f2y_1 + '". See https://developer.mozilla.org/en-US/docs/Web/CSS/ident#syntax';
    // Inline function 'kotlin.text.isNotEmpty' call
    var this_0 = this.f2y_1;
    // Inline function 'kotlin.require' call
    if (!(charSequenceLength(this_0) > 0)) {
      var message = errorMsg;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!!isDigit(charCodeAt(this.f2y_1, 0))) {
      var message_0 = errorMsg;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    if (!CSS.supports('--' + this.f2y_1 + ':0')) {
      var message_1 = errorMsg;
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
  }
  protoOf(CssIdent).g2y = function (action) {
    return new CssIdent(action(this.f2y_1));
  };
  protoOf(CssIdent).b = function (index) {
    return charCodeAt(this.f2y_1, index);
  };
  protoOf(CssIdent).c = function (startIndex, endIndex) {
    return substring(this.f2y_1, startIndex, endIndex);
  };
  protoOf(CssIdent).a = function () {
    return this.f2y_1.length;
  };
  function Companion_1() {
  }
  protoOf(Companion_1).h2y = function (actualSize) {
    return new Size(actualSize.blockSize, actualSize.inlineSize);
  };
  var Companion_instance_1;
  function Companion_getInstance_2() {
    return Companion_instance_1;
  }
  function Companion_2() {
  }
  protoOf(Companion_2).i2y = function (actualEntry) {
    var tmp = actualEntry.target;
    // Inline function 'kotlin.collections.map' call
    var this_0 = actualEntry.borderBoxSize;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(this_0.length);
    var inductionVariable = 0;
    var last = this_0.length;
    while (inductionVariable < last) {
      var item = this_0[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp$ret$0 = Companion_instance_1.h2y(item);
      destination.h(tmp$ret$0);
    }
    var tmp_0 = destination;
    // Inline function 'kotlin.collections.map' call
    var this_1 = actualEntry.contentBoxSize;
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$(this_1.length);
    var inductionVariable_0 = 0;
    var last_0 = this_1.length;
    while (inductionVariable_0 < last_0) {
      var item_0 = this_1[inductionVariable_0];
      inductionVariable_0 = inductionVariable_0 + 1 | 0;
      var tmp$ret$3 = Companion_instance_1.h2y(item_0);
      destination_0.h(tmp$ret$3);
    }
    var tmp_1 = destination_0;
    var tmp_2 = actualEntry.contentRect;
    // Inline function 'kotlin.collections.map' call
    var this_2 = actualEntry.devicePixelContentBoxSize;
    // Inline function 'kotlin.collections.mapTo' call
    var destination_1 = ArrayList_init_$Create$(this_2.length);
    var inductionVariable_1 = 0;
    var last_1 = this_2.length;
    while (inductionVariable_1 < last_1) {
      var item_1 = this_2[inductionVariable_1];
      inductionVariable_1 = inductionVariable_1 + 1 | 0;
      var tmp$ret$6 = Companion_instance_1.h2y(item_1);
      destination_1.h(tmp$ret$6);
    }
    return new Entry(tmp, tmp_0, tmp_1, tmp_2, destination_1);
  };
  var Companion_instance_2;
  function Companion_getInstance_3() {
    return Companion_instance_2;
  }
  function ResizeObserver_init_$Init$(resized, $this) {
    ResizeObserver_0.call($this, ResizeObserver$_init_$lambda_4ha6n5(resized));
    return $this;
  }
  function ResizeObserver_init_$Create$(resized) {
    return ResizeObserver_init_$Init$(resized, objectCreate(protoOf(ResizeObserver_0)));
  }
  function Size(blockSize, inlineSize) {
    this.j2y_1 = blockSize;
    this.k2y_1 = inlineSize;
  }
  protoOf(Size).toString = function () {
    return 'Size(blockSize=' + this.j2y_1 + ', inlineSize=' + this.k2y_1 + ')';
  };
  protoOf(Size).hashCode = function () {
    var result = getNumberHashCode(this.j2y_1);
    result = imul(result, 31) + getNumberHashCode(this.k2y_1) | 0;
    return result;
  };
  protoOf(Size).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Size))
      return false;
    if (!equals(this.j2y_1, other.j2y_1))
      return false;
    if (!equals(this.k2y_1, other.k2y_1))
      return false;
    return true;
  };
  function Entry(target, borderBoxSize, contentBoxSize, contentRect, devicePixelContentBoxSize) {
    this.l2y_1 = target;
    this.m2y_1 = borderBoxSize;
    this.n2y_1 = contentBoxSize;
    this.o2y_1 = contentRect;
    this.p2y_1 = devicePixelContentBoxSize;
  }
  protoOf(Entry).toString = function () {
    return 'Entry(target=' + toString(this.l2y_1) + ', borderBoxSize=' + toString(this.m2y_1) + ', contentBoxSize=' + toString(this.n2y_1) + ', contentRect=' + toString(this.o2y_1) + ', devicePixelContentBoxSize=' + toString(this.p2y_1) + ')';
  };
  protoOf(Entry).hashCode = function () {
    var result = hashCode(this.l2y_1);
    result = imul(result, 31) + hashCode(this.m2y_1) | 0;
    result = imul(result, 31) + hashCode(this.n2y_1) | 0;
    result = imul(result, 31) + hashCode(this.o2y_1) | 0;
    result = imul(result, 31) + hashCode(this.p2y_1) | 0;
    return result;
  };
  protoOf(Entry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Entry))
      return false;
    if (!equals(this.l2y_1, other.l2y_1))
      return false;
    if (!equals(this.m2y_1, other.m2y_1))
      return false;
    if (!equals(this.n2y_1, other.n2y_1))
      return false;
    if (!equals(this.o2y_1, other.o2y_1))
      return false;
    if (!equals(this.p2y_1, other.p2y_1))
      return false;
    return true;
  };
  function ResizeObserver$_init_$lambda_4ha6n5($resized) {
    return function (entries, _unused_var__etf5q3) {
      $resized(entries);
      return Unit_instance;
    };
  }
  function ResizeObserver$_actualObserver$lambda($resized, this$0) {
    return function (actualEntries, _unused_var__etf5q3) {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(actualEntries.length);
      var inductionVariable = 0;
      var last = actualEntries.length;
      while (inductionVariable < last) {
        var item = actualEntries[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0 = Companion_instance_2.i2y(item);
        destination.h(tmp$ret$0);
      }
      $resized(destination, this$0);
      return Unit_instance;
    };
  }
  function ResizeObserver_0(resized) {
    var tmp = this;
    tmp.q2y_1 = new ResizeObserver(ResizeObserver$_actualObserver$lambda(resized, this));
  }
  protoOf(ResizeObserver_0).r2y = function (element) {
    return this.q2y_1.observe(element);
  };
  protoOf(ResizeObserver_0).s2y = function () {
    return this.q2y_1.disconnect();
  };
  function EventListenerManager(target) {
    this.t2y_1 = target;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.u2y_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(EventListenerManager).v2y = function (type, listener) {
    // Inline function 'kotlin.collections.set' call
    this.u2y_1.a2(type, listener);
    this.t2y_1.addEventListener(type, listener);
  };
  protoOf(EventListenerManager).w2y = function (type, listener) {
    this.v2y(type, EventListener(listener));
  };
  protoOf(EventListenerManager).x2y = function () {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this.u2y_1.z1().i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      // Inline function 'kotlin.collections.component1' call
      var type = element.s1();
      // Inline function 'kotlin.collections.component2' call
      var listener = element.t1();
      this.t2y_1.removeEventListener(type, listener);
    }
    this.u2y_1.d2();
  };
  function EnumStorageKey(name, entries, defaultValue) {
    defaultValue = defaultValue === VOID ? null : defaultValue;
    StorageKey.call(this, name, defaultValue);
    this.a2z_1 = entries;
  }
  protoOf(EnumStorageKey).b2z = function (value) {
    return value.k2_1;
  };
  protoOf(EnumStorageKey).c2z = function (value) {
    return this.b2z(value instanceof Enum ? value : THROW_CCE());
  };
  protoOf(EnumStorageKey).d2z = function (value) {
    var tmp0 = this.a2z_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.i();
      while (_iterator__ex2g4s.j()) {
        var element = _iterator__ex2g4s.k();
        if (element.k2_1 === value) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    return tmp$ret$1;
  };
  function getItem(_this__u8e3s4, key) {
    var tmp0_safe_receiver = _this__u8e3s4.getItem(key.e2z_1);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = key.d2z(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return key.f2z_1;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  }
  function setItem(_this__u8e3s4, key, value) {
    _this__u8e3s4.setItem(key.e2z_1, key.c2z(value));
  }
  function createStorageKey(_this__u8e3s4, name, defaultValue) {
    defaultValue = defaultValue === VOID ? null : defaultValue;
    return new EnumStorageKey(name, _this__u8e3s4, defaultValue);
  }
  function StorageKey(name, defaultValue) {
    defaultValue = defaultValue === VOID ? null : defaultValue;
    this.e2z_1 = name;
    this.f2z_1 = defaultValue;
  }
  function titleCamelCaseToKebabCase(_this__u8e3s4) {
    return camelCaseToKebabCase(_this__u8e3s4);
  }
  function camelCaseToKebabCase(_this__u8e3s4) {
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!!isBlank(_this__u8e3s4)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var lastIsUpper = false;
    var str = _this__u8e3s4;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.text.forEachIndexed' call
    var index = 0;
    var inductionVariable = 0;
    while (inductionVariable < charSequenceLength(str)) {
      var item = charSequenceGet(str, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      var isUpper = isUpperCase(item);
      var tmp;
      if (isUpper) {
        // Inline function 'kotlin.text.isNotEmpty' call
        if (charSequenceLength(this_0) > 0) {
          if (!lastIsUpper || (_unary__edvuaz < get_lastIndex(str) && isLowerCase(charCodeAt(str, _unary__edvuaz + 1 | 0)))) {
            this_0.m7('-');
          }
        }
        // Inline function 'kotlin.text.lowercase' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.unsafeCast' call
        tmp = toString_0(item).toLowerCase();
      } else {
        tmp = new Char(item);
      }
      var cFinal = tmp;
      this_0.l7(cFinal);
      lastIsUpper = isUpper;
    }
    return this_0.toString();
  }
  function Companion_3() {
    Companion_instance_3 = this;
    this.g2z_1 = new CancellableActionHandle(0);
  }
  var Companion_instance_3;
  function Companion_getInstance_4() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function CancellableActionHandle(id, isInterval) {
    Companion_getInstance_4();
    isInterval = isInterval === VOID ? false : isInterval;
    this.h2z_1 = isInterval;
    this.i2z_1 = id;
  }
  function invokeLater(_this__u8e3s4, block) {
    // Inline function 'kotlin.time.Companion.milliseconds' call
    Companion_getInstance();
    var tmp$ret$0 = toDuration(0, DurationUnit_MILLISECONDS_getInstance());
    return setTimeout(_this__u8e3s4, tmp$ret$0, block);
  }
  function setTimeout(_this__u8e3s4, timeout, block) {
    var id = _this__u8e3s4.setTimeout(block, convertToInt(_Duration___get_inWholeMilliseconds__impl__msfiry(timeout)));
    return new CancellableActionHandle(id);
  }
  //region block: init
  Companion_instance = new Companion();
  Companion_instance_0 = new Companion_0();
  Companion_instance_1 = new Companion_1();
  Companion_instance_2 = new Companion_2();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = CssIdent;
  _.$_$.b = EventListenerManager;
  _.$_$.c = createStorageKey;
  _.$_$.d = getItem;
  _.$_$.e = setItem;
  _.$_$.f = invokeLater;
  _.$_$.g = titleCamelCaseToKebabCase;
  _.$_$.h = ResizeObserver_init_$Create$;
  _.$_$.i = Companion_instance_0;
  _.$_$.j = Companion_instance;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-browser-ext.js.map
