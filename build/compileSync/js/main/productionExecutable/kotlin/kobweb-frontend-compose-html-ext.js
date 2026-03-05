(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './html-html-core.js', './kobweb-frontend-browser-ext.js', './androidx-compose-runtime-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./html-html-core.js'), require('./kobweb-frontend-browser-ext.js'), require('./androidx-compose-runtime-runtime.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-compose-html-ext'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-compose-html-ext'.");
    }
    if (typeof globalThis['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-compose-html-ext'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-compose-html-ext'.");
    }
    if (typeof globalThis['kobweb-frontend-browser-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-compose-html-ext'. Its dependency 'kobweb-frontend-browser-ext' was not found. Please, check whether 'kobweb-frontend-browser-ext' is loaded prior to 'kobweb-frontend-compose-html-ext'.");
    }
    if (typeof globalThis['androidx-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-compose-html-ext'. Its dependency 'androidx-compose-runtime-runtime' was not found. Please, check whether 'androidx-compose-runtime-runtime' is loaded prior to 'kobweb-frontend-compose-html-ext'.");
    }
    globalThis['kobweb-frontend-compose-html-ext'] = factory(typeof globalThis['kobweb-frontend-compose-html-ext'] === 'undefined' ? {} : globalThis['kobweb-frontend-compose-html-ext'], globalThis['kotlin-kotlin-stdlib'], globalThis['html-html-core'], globalThis['kobweb-frontend-browser-ext'], globalThis['androidx-compose-runtime-runtime']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_browser_ext, kotlin_androidx_compose_runtime_runtime) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.c8;
  var objectCreate = kotlin_kotlin.$_$.b8;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.n;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.o;
  var Unit_instance = kotlin_kotlin.$_$.e2;
  var equals = kotlin_kotlin.$_$.f7;
  var hashCode = kotlin_kotlin.$_$.l7;
  var classes = kotlin_org_jetbrains_compose_html_html_core.$_$.n;
  var tabIndex = kotlin_org_jetbrains_compose_html_html_core.$_$.o;
  var onClick = kotlin_org_jetbrains_compose_html_html_core.$_$.q;
  var AttrsScope = kotlin_org_jetbrains_compose_html_html_core.$_$.p;
  var initMetadataForClass = kotlin_kotlin.$_$.m7;
  var VOID = kotlin_kotlin.$_$.c;
  var initMetadataForCompanion = kotlin_kotlin.$_$.n7;
  var Color_instance = kotlin_org_jetbrains_compose_html_html_core.$_$.h;
  var Color = kotlin_org_jetbrains_compose_html_html_core.$_$.a1;
  var toString = kotlin_kotlin.$_$.d8;
  var CSSBorder = kotlin_org_jetbrains_compose_html_html_core.$_$.s;
  var width = kotlin_org_jetbrains_compose_html_html_core.$_$.h3;
  var style = kotlin_org_jetbrains_compose_html_html_core.$_$.b3;
  var color = kotlin_org_jetbrains_compose_html_html_core.$_$.o1;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.v;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.t1;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.y2;
  var joinToString = kotlin_kotlin.$_$.y3;
  var boxSizing = kotlin_org_jetbrains_compose_html_html_core.$_$.n1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.h;
  var property = kotlin_org_jetbrains_compose_html_html_core.$_$.b1;
  var property_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.c1;
  var variable = kotlin_org_jetbrains_compose_html_html_core.$_$.d1;
  var StyleScope = kotlin_org_jetbrains_compose_html_html_core.$_$.f1;
  var getStringHashCode = kotlin_kotlin.$_$.k7;
  var copyToArray = kotlin_kotlin.$_$.k3;
  var gridTemplateColumns = kotlin_org_jetbrains_compose_html_html_core.$_$.f2;
  var lastOrNull = kotlin_kotlin.$_$.c4;
  var get_lastIndex = kotlin_kotlin.$_$.b4;
  var joinToString_0 = kotlin_kotlin.$_$.x3;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.hb;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.b1;
  var listOf = kotlin_kotlin.$_$.f4;
  var emptyList = kotlin_kotlin.$_$.n3;
  var addAll = kotlin_kotlin.$_$.y2;
  var ensureNotNull = kotlin_kotlin.$_$.fb;
  var gridTemplateRows = kotlin_org_jetbrains_compose_html_html_core.$_$.g2;
  var Companion_instance = kotlin_org_jetbrains_compose_html_html_core.$_$.i;
  var display = kotlin_org_jetbrains_compose_html_html_core.$_$.s1;
  var gridAutoColumns = kotlin_org_jetbrains_compose_html_html_core.$_$.c2;
  var gridAutoRows = kotlin_org_jetbrains_compose_html_html_core.$_$.d2;
  var StyleSheet_init_$Create$ = kotlin_org_jetbrains_compose_html_html_core.$_$.c;
  var CSSGroupingRuleDeclaration = kotlin_org_jetbrains_compose_html_html_core.$_$.t;
  var listOfNotNull = kotlin_kotlin.$_$.e4;
  var initMetadataForInterface = kotlin_kotlin.$_$.p7;
  var THROW_CCE = kotlin_kotlin.$_$.ya;
  var isNumber = kotlin_kotlin.$_$.v7;
  var getKClassFromExpression = kotlin_kotlin.$_$.k8;
  var titleCamelCaseToKebabCase = kotlin_com_varabyte_kobweb_browser_ext.$_$.g;
  var removeSuffix = kotlin_kotlin.$_$.p9;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.e3;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.g;
  var charSequenceLength = kotlin_kotlin.$_$.b7;
  var charSequenceGet = kotlin_kotlin.$_$.a7;
  var isWhitespace = kotlin_kotlin.$_$.l9;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.u;
  var initMetadataForObject = kotlin_kotlin.$_$.r7;
  var toList = kotlin_kotlin.$_$.a5;
  var Companion_getInstance = kotlin_androidx_compose_runtime_runtime.$_$.f1;
  var DisposableEffect = kotlin_androidx_compose_runtime_runtime.$_$.g;
  var ElementBuilder = kotlin_org_jetbrains_compose_html_html_core.$_$.m3;
  var isInterface = kotlin_kotlin.$_$.u7;
  var TagElement = kotlin_org_jetbrains_compose_html_html_core.$_$.q3;
  var to = kotlin_kotlin.$_$.nb;
  var KProperty1 = kotlin_kotlin.$_$.p8;
  var getPropertyCallableRef = kotlin_kotlin.$_$.j7;
  var lazy = kotlin_kotlin.$_$.gb;
  var updateChangedFlags = kotlin_androidx_compose_runtime_runtime.$_$.z;
  var asList = kotlin_kotlin.$_$.pb;
  var Enum = kotlin_kotlin.$_$.qa;
  var charCodeAt = kotlin_kotlin.$_$.z6;
  var toString_0 = kotlin_kotlin.$_$.u1;
  var substring = kotlin_kotlin.$_$.aa;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(ComparableAttrsScope, 'ComparableAttrsScope', ComparableAttrsScope_init_$Create$, VOID, [AttrsScope]);
  initMetadataForClass(DummyAttrsScope, 'DummyAttrsScope', DummyAttrsScope, VOID, [AttrsScope]);
  initMetadataForClass(SyntheticEventListener, 'SyntheticEventListener');
  initMetadataForClass(TransitionEventListener, 'TransitionEventListener', VOID, SyntheticEventListener);
  initMetadataForCompanion(Companion);
  initMetadataForCompanion(Companion_0);
  initMetadataForCompanion(Companion_1);
  initMetadataForCompanion(Companion_2);
  initMetadataForCompanion(Companion_3);
  initMetadataForCompanion(Companion_4);
  initMetadataForCompanion(Companion_5);
  initMetadataForCompanion(Companion_6);
  initMetadataForClass(ComparableStyleScope, 'ComparableStyleScope', ComparableStyleScope, VOID, [StyleScope]);
  initMetadataForClass(CssPropertyDeclaration, 'CssPropertyDeclaration');
  initMetadataForCompanion(Companion_7);
  initMetadataForCompanion(Companion_8);
  initMetadataForCompanion(Companion_9);
  initMetadataForClass(GridTrackBuilderInRepeat, 'GridTrackBuilderInRepeat');
  initMetadataForClass(GridTrackBuilder, 'GridTrackBuilder', GridTrackBuilder, GridTrackBuilderInRepeat);
  initMetadataForClass(GridEntry, 'GridEntry');
  initMetadataForClass(TrackSize, 'TrackSize', VOID, GridEntry);
  initMetadataForClass(FitContent, 'FitContent', VOID, TrackSize);
  initMetadataForClass(MinMax, 'MinMax', VOID, TrackSize);
  initMetadataForClass(Flex, 'Flex', VOID, TrackSize);
  initMetadataForClass(Inflexible, 'Inflexible', VOID, TrackSize);
  initMetadataForClass(Keyword, 'Keyword', VOID, Inflexible);
  initMetadataForClass(Fixed, 'Fixed', VOID, Inflexible);
  initMetadataForCompanion(Companion_10);
  initMetadataForClass(Repeat, 'Repeat', VOID, GridEntry);
  initMetadataForClass(Track, 'Track', VOID, Repeat);
  initMetadataForClass(Auto, 'Auto', VOID, Repeat);
  initMetadataForClass(LineNames, 'LineNames', VOID, GridEntry);
  initMetadataForCompanion(Companion_11);
  initMetadataForClass(GridBuilderInAuto, 'GridBuilderInAuto');
  initMetadataForClass(GridBuilder, 'GridBuilder', GridBuilder, GridBuilderInAuto);
  initMetadataForClass(CSSLayerRuleDeclaration, 'CSSLayerRuleDeclaration', VOID, VOID, [CSSGroupingRuleDeclaration]);
  initMetadataForCompanion(Companion_12);
  initMetadataForCompanion(Companion_13);
  initMetadataForCompanion(Companion_14);
  initMetadataForCompanion(Companion_15);
  initMetadataForCompanion(Companion_16);
  initMetadataForCompanion(Companion_17);
  function get_Visible() {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'visible';
  }
  function get_Hidden() {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'hidden';
  }
  function get_Auto() {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'auto';
  }
  initMetadataForInterface(CssOverflowModeValues, 'CssOverflowModeValues');
  initMetadataForCompanion(Companion_18, VOID, [CssOverflowModeValues]);
  initMetadataForCompanion(Companion_19);
  initMetadataForClass(CSSScopeRuleDeclaration, 'CSSScopeRuleDeclaration', VOID, VOID, [CSSGroupingRuleDeclaration]);
  initMetadataForCompanion(Companion_20);
  initMetadataForClass(StyleVariable, 'StyleVariable');
  initMetadataForClass(PropertyValue, 'PropertyValue', VOID, StyleVariable);
  initMetadataForClass(NumberValue, 'NumberValue', VOID, StyleVariable);
  initMetadataForClass(StyleVariablePropertyProvider, 'StyleVariablePropertyProvider');
  initMetadataForClass(StyleVariableNumberProvider, 'StyleVariableNumberProvider');
  initMetadataForCompanion(Companion_21);
  initMetadataForCompanion(Companion_22);
  initMetadataForCompanion(Companion_23);
  initMetadataForCompanion(Companion_24);
  initMetadataForCompanion(Companion_25);
  initMetadataForCompanion(Companion_26);
  function unaryMinus(_this__u8e3s4) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'calc(-1 * ' + toString(_this__u8e3s4) + ')';
  }
  initMetadataForInterface(CalcScope, 'CalcScope');
  initMetadataForObject(CalcScopeInstance, 'CalcScopeInstance', VOID, VOID, [CalcScope]);
  initMetadataForClass(RefCallback, 'RefCallback');
  initMetadataForClass(Disposable, 'Disposable', VOID, RefCallback);
  initMetadataForClass(KeysToEffect, 'KeysToEffect');
  initMetadataForClass(Builder, 'Builder', Builder);
  initMetadataForClass(ElementRefScope, 'ElementRefScope');
  initMetadataForCompanion(Companion_27);
  initMetadataForClass(GenericNamespacedElementBuilder, 'GenericNamespacedElementBuilder', VOID, VOID, [ElementBuilder]);
  initMetadataForCompanion(Companion_28);
  initMetadataForClass(GenericElementBuilder, 'GenericElementBuilder', VOID, VOID, [ElementBuilder]);
  initMetadataForCompanion(Companion_29);
  initMetadataForClass(ViewBox, 'ViewBox');
  initMetadataForCompanion(Companion_30);
  initMetadataForClass(SVGElementAttrsScope, 'SVGElementAttrsScope', VOID, VOID, [AttrsScope]);
  function stroke(value) {
    this.y30('stroke', value.toString());
  }
  function strokeLineCap(value) {
    this.y30('stroke-linecap', value.toString());
  }
  function strokeLineJoin(value) {
    this.y30('stroke-linejoin', value.toString());
  }
  function strokeMiterLimit(value) {
    this.y30('stroke-miterlimit', toString(value));
  }
  function strokeWidth(value) {
    this.y30('stroke-width', toString(value));
  }
  function fill(value) {
    this.y30('fill', value.toString());
  }
  initMetadataForInterface(SvgPresentationAttrs, 'SvgPresentationAttrs', VOID, VOID, [AttrsScope]);
  initMetadataForClass(SVGGraphicalElementAttrsScope, 'SVGGraphicalElementAttrsScope', VOID, SVGElementAttrsScope, [SVGElementAttrsScope, SvgPresentationAttrs]);
  initMetadataForClass(SVGContainerElementAttrsScope, 'SVGContainerElementAttrsScope', VOID, SVGGraphicalElementAttrsScope);
  function width_0(value) {
    this.y30('width', toString(value));
  }
  initMetadataForInterface(SvgLengthAttrs, 'SvgLengthAttrs', VOID, VOID, [AttrsScope]);
  function viewBox(x, y, width, height) {
    this.y30('viewBox', toString(x) + ' ' + toString(y) + ' ' + toString(width) + ' ' + toString(height));
  }
  initMetadataForInterface(SvgViewBoxAttrs, 'SvgViewBoxAttrs', VOID, VOID, [AttrsScope]);
  initMetadataForClass(SVGSvgAttrsScope, 'SVGSvgAttrsScope', VOID, SVGContainerElementAttrsScope, [SVGContainerElementAttrsScope, AttrsScope, SvgLengthAttrs, SvgViewBoxAttrs]);
  initMetadataForCompanion(Companion_31);
  initMetadataForClass(SVGPathAttrsScope, 'SVGPathAttrsScope', VOID, SVGGraphicalElementAttrsScope);
  initMetadataForClass(SVGPathDataScope, 'SVGPathDataScope');
  initMetadataForCompanion(Companion_32);
  function cx(value) {
    this.y30('cx', toString(value));
  }
  function cy(value) {
    this.y30('cy', toString(value));
  }
  initMetadataForInterface(SvgCenterCoordinateAttrs, 'SvgCenterCoordinateAttrs', VOID, VOID, [AttrsScope]);
  initMetadataForClass(SVGCircleAttrsScope, 'SVGCircleAttrsScope', VOID, SVGGraphicalElementAttrsScope, [SVGGraphicalElementAttrsScope, SvgCenterCoordinateAttrs]);
  initMetadataForCompanion(Companion_33);
  initMetadataForClass(SVGGroupAttrsScope, 'SVGGroupAttrsScope', VOID, SVGContainerElementAttrsScope);
  initMetadataForClass(SVGStrokeLineJoin, 'SVGStrokeLineJoin', VOID, Enum);
  initMetadataForClass(SVGStrokeLineCap, 'SVGStrokeLineCap', VOID, Enum);
  initMetadataForClass(SVGFillType, 'SVGFillType', VOID, Enum);
  initMetadataForClass(SVGStrokeType, 'SVGStrokeType', VOID, Enum);
  initMetadataForClass(SyntheticEvent, 'SyntheticEvent');
  initMetadataForClass(SyntheticTransitionEvent, 'SyntheticTransitionEvent', VOID, SyntheticEvent);
  //endregion
  var com_varabyte_kobweb_compose_attributes_ComparableAttrsScope$stable;
  function ComparableAttrsScope_init_$Init$($this) {
    ComparableAttrsScope.call($this, new DummyAttrsScope());
    return $this;
  }
  function ComparableAttrsScope_init_$Create$() {
    return ComparableAttrsScope_init_$Init$(objectCreate(protoOf(ComparableAttrsScope)));
  }
  function ComparableAttrsScope(wrapped) {
    this.f38_1 = wrapped;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.g38_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_0.h38_1 = LinkedHashSet_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_1.i38_1 = LinkedHashSet_init_$Create$();
    this.j38_1 = null;
  }
  protoOf(ComparableAttrsScope).y30 = function (attr, value) {
    // Inline function 'kotlin.collections.set' call
    this.g38_1.a2(attr, value);
    this.f38_1.y30(attr, value);
    return this;
  };
  protoOf(ComparableAttrsScope).a31 = function (classes) {
    this.h38_1.r(classes);
  };
  protoOf(ComparableAttrsScope).e31 = function (listener) {
    this.i38_1.h(listener);
    this.f38_1.e31(listener);
  };
  protoOf(ComparableAttrsScope).z30 = function (builder) {
    var tmp0_elvis_lhs = this.j38_1;
    var style = tmp0_elvis_lhs == null ? new ComparableStyleScope() : tmp0_elvis_lhs;
    builder(style);
    this.j38_1 = style;
    this.f38_1.z30(builder);
  };
  protoOf(ComparableAttrsScope).k38 = function (effect) {
    this.f38_1.d31(effect);
  };
  protoOf(ComparableAttrsScope).d31 = function (effect) {
    return this.k38(effect);
  };
  protoOf(ComparableAttrsScope).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof ComparableAttrsScope) {
      tmp_2 = equals(other.g38_1, this.g38_1);
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = equals(other.h38_1, this.h38_1);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = equals(other.i38_1, this.i38_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(other.j38_1, this.j38_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComparableAttrsScope).hashCode = function () {
    var result = hashCode(this.g38_1);
    result = imul(31, result) + hashCode(this.h38_1) | 0;
    result = imul(31, result) + hashCode(this.i38_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.j38_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  function DummyAttrsScope() {
  }
  protoOf(DummyAttrsScope).y30 = function (attr, value) {
    return this;
  };
  protoOf(DummyAttrsScope).a31 = function (classes) {
    return Unit_instance;
  };
  protoOf(DummyAttrsScope).e31 = function (listener) {
    return Unit_instance;
  };
  protoOf(DummyAttrsScope).z30 = function (builder) {
    return Unit_instance;
  };
  protoOf(DummyAttrsScope).k38 = function (effect) {
    return Unit_instance;
  };
  protoOf(DummyAttrsScope).d31 = function (effect) {
    return this.k38(effect);
  };
  var com_varabyte_kobweb_compose_attributes_SyntheticEventListener$stable;
  var com_varabyte_kobweb_compose_attributes_TransitionEventListener$stable;
  function TransitionEventListener(event, listener) {
    SyntheticEventListener.call(this, event, listener);
  }
  protoOf(TransitionEventListener).so = function (event) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this.p38_1(new SyntheticTransitionEvent(event, event));
  };
  protoOf(TransitionEventListener).handleEvent = function (event) {
    return this.so(event);
  };
  function SyntheticEventListener(event, listener) {
    this.o38_1 = event;
    this.p38_1 = listener;
    this.q38_1 = this.o38_1;
  }
  protoOf(SyntheticEventListener).q2d = function () {
    return this.q38_1;
  };
  protoOf(SyntheticEventListener).so = function (event) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = new SyntheticEvent(event);
    this.p38_1(tmp$ret$1);
  };
  protoOf(SyntheticEventListener).handleEvent = function (event) {
    return this.so(event);
  };
  function onTransitionEnd(_this__u8e3s4, listener) {
    var evtListener = new TransitionEventListener('transitionend', listener);
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.e31(evtListener);
  }
  function ariaHidden(_this__u8e3s4, value) {
    value = value === VOID ? true : value;
    _this__u8e3s4.y30('aria-hidden', value.toString());
  }
  function ariaDisabled(_this__u8e3s4, value) {
    value = value === VOID ? true : value;
    _this__u8e3s4.y30('aria-disabled', value.toString());
  }
  function alignItems(_this__u8e3s4, alignItems) {
    _this__u8e3s4.o32('align-items', alignItems);
  }
  function Companion() {
  }
  protoOf(Companion).r38 = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'center';
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    return Companion_instance_0;
  }
  function justifyContent(_this__u8e3s4, justifyContent) {
    _this__u8e3s4.o32('justify-content', justifyContent);
  }
  function Companion_0() {
  }
  protoOf(Companion_0).r38 = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'center';
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    return Companion_instance_1;
  }
  function justifyItems(_this__u8e3s4, justifyItems) {
    _this__u8e3s4.o32('justify-items', justifyItems);
  }
  function Companion_1() {
  }
  protoOf(Companion_1).r38 = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'center';
  };
  protoOf(Companion_1).s38 = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'start';
  };
  protoOf(Companion_1).t38 = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'end';
  };
  var Companion_instance_2;
  function Companion_getInstance_2() {
    return Companion_instance_2;
  }
  function justifySelf(_this__u8e3s4, justifySelf) {
    _this__u8e3s4.o32('justify-self', justifySelf);
  }
  function Companion_2() {
  }
  protoOf(Companion_2).r38 = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'center';
  };
  protoOf(Companion_2).s38 = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'start';
  };
  protoOf(Companion_2).t38 = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'end';
  };
  var Companion_instance_3;
  function Companion_getInstance_3() {
    return Companion_instance_3;
  }
  var com_varabyte_kobweb_compose_css_BorderImageNumericBuilder$stable;
  var com_varabyte_kobweb_compose_css_BorderImageSlice_Builder$stable;
  var com_varabyte_kobweb_compose_css_BorderImageWidth_Builder$stable;
  var com_varabyte_kobweb_compose_css_BorderImageOutset_Builder$stable;
  function borderBottom(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    borderBottom_0(_this__u8e3s4, borderBottom$lambda(width, style, color));
  }
  function borderLeft(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    borderLeft_0(_this__u8e3s4, borderLeft$lambda(width, style, color));
  }
  function borderColor(_this__u8e3s4, color) {
    _this__u8e3s4.o32('border-color', color);
  }
  function borderColor_0(_this__u8e3s4, top, right, bottom, left) {
    var tmp;
    if (top === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Color.currentColor' call
      tmp = Color('currentColor');
    } else {
      tmp = top;
    }
    top = tmp;
    var tmp_0;
    if (right === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Color.currentColor' call
      tmp_0 = Color('currentColor');
    } else {
      tmp_0 = right;
    }
    right = tmp_0;
    var tmp_1;
    if (bottom === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Color.currentColor' call
      tmp_1 = Color('currentColor');
    } else {
      tmp_1 = bottom;
    }
    bottom = tmp_1;
    var tmp_2;
    if (left === VOID) {
      // Inline function 'org.jetbrains.compose.web.css.Color.currentColor' call
      tmp_2 = Color('currentColor');
    } else {
      tmp_2 = left;
    }
    left = tmp_2;
    _this__u8e3s4.q32('border-color', toString(top) + ' ' + toString(right) + ' ' + toString(bottom) + ' ' + toString(left));
  }
  function borderStyle(_this__u8e3s4, lineStyle) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.q32('border-style', lineStyle);
  }
  function borderWidth(_this__u8e3s4, width) {
    _this__u8e3s4.o32('border-width', width);
  }
  function borderTop(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    borderTop_0(_this__u8e3s4, borderTop$lambda(width, style, color));
  }
  function borderBottom_0(_this__u8e3s4, borderBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = new CSSBorder();
    borderBuild(this_0);
    _this__u8e3s4.o32('border-bottom', this_0);
  }
  function borderLeft_0(_this__u8e3s4, borderBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = new CSSBorder();
    borderBuild(this_0);
    _this__u8e3s4.o32('border-left', this_0);
  }
  function borderTop_0(_this__u8e3s4, borderBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = new CSSBorder();
    borderBuild(this_0);
    _this__u8e3s4.o32('border-top', this_0);
  }
  function borderBottom$lambda($width, $style, $color) {
    return function ($this$borderBottom) {
      var tmp0_safe_receiver = $width;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        width($this$borderBottom, tmp0_safe_receiver);
      }
      var tmp1_safe_receiver = $style;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        style($this$borderBottom, tmp1_safe_receiver);
      }
      var tmp2_safe_receiver = $color;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        color($this$borderBottom, tmp2_safe_receiver);
      }
      return Unit_instance;
    };
  }
  function borderLeft$lambda($width, $style, $color) {
    return function ($this$borderLeft) {
      var tmp0_safe_receiver = $width;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        width($this$borderLeft, tmp0_safe_receiver);
      }
      var tmp1_safe_receiver = $style;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        style($this$borderLeft, tmp1_safe_receiver);
      }
      var tmp2_safe_receiver = $color;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        color($this$borderLeft, tmp2_safe_receiver);
      }
      return Unit_instance;
    };
  }
  function borderTop$lambda($width, $style, $color) {
    return function ($this$borderTop) {
      var tmp0_safe_receiver = $width;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        width($this$borderTop, tmp0_safe_receiver);
      }
      var tmp1_safe_receiver = $style;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        style($this$borderTop, tmp1_safe_receiver);
      }
      var tmp2_safe_receiver = $color;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        color($this$borderTop, tmp2_safe_receiver);
      }
      return Unit_instance;
    };
  }
  function Companion_3() {
  }
  protoOf(Companion_3).u38 = function (offsetX, offsetY, blurRadius, spreadRadius, color, inset) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    if (inset) {
      this_0.m7('inset');
      this_0.n7(_Char___init__impl__6a9atx(32));
    }
    this_0.l7(offsetX);
    this_0.n7(_Char___init__impl__6a9atx(32));
    this_0.l7(offsetY);
    if (!(blurRadius == null)) {
      this_0.n7(_Char___init__impl__6a9atx(32));
      this_0.l7(blurRadius);
    }
    if (!(spreadRadius == null)) {
      if (blurRadius == null) {
        this_0.n7(_Char___init__impl__6a9atx(32));
        this_0.n7(_Char___init__impl__6a9atx(48));
      }
      this_0.n7(_Char___init__impl__6a9atx(32));
      this_0.l7(spreadRadius);
    }
    if (!(color == null)) {
      this_0.n7(_Char___init__impl__6a9atx(32));
      this_0.l7(color);
    }
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this_0.toString();
  };
  protoOf(Companion_3).v38 = function (offsetX, offsetY, blurRadius, spreadRadius, color, inset, $super) {
    offsetX = offsetX === VOID ? get_px(0) : offsetX;
    offsetY = offsetY === VOID ? get_px(0) : offsetY;
    blurRadius = blurRadius === VOID ? null : blurRadius;
    spreadRadius = spreadRadius === VOID ? null : spreadRadius;
    color = color === VOID ? null : color;
    inset = inset === VOID ? false : inset;
    return $super === VOID ? this.u38(offsetX, offsetY, blurRadius, spreadRadius, color, inset) : $super.u38.call(this, offsetX, offsetY, blurRadius, spreadRadius, color, inset);
  };
  protoOf(Companion_3).w38 = function (shadows) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return joinToString(shadows);
  };
  var Companion_instance_4;
  function Companion_getInstance_4() {
    return Companion_instance_4;
  }
  function Companion_4() {
  }
  protoOf(Companion_4).x38 = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'content-box';
  };
  var Companion_instance_5;
  function Companion_getInstance_5() {
    return Companion_instance_5;
  }
  function boxShadow(_this__u8e3s4, boxShadow) {
    boxShadow_0(_this__u8e3s4, toString(boxShadow));
  }
  function boxSizing_0(_this__u8e3s4, boxSizing_0) {
    boxSizing(_this__u8e3s4, toString(boxSizing_0));
  }
  function boxShadow_0(_this__u8e3s4, value) {
    _this__u8e3s4.q32('box-shadow', value);
  }
  var com_varabyte_kobweb_compose_css_Edge$stable;
  var com_varabyte_kobweb_compose_css_EdgeXOrCenter$stable;
  var com_varabyte_kobweb_compose_css_EdgeX$stable;
  var com_varabyte_kobweb_compose_css_CenterX$stable;
  var com_varabyte_kobweb_compose_css_EdgeXOffset$stable;
  var com_varabyte_kobweb_compose_css_EdgeYOrCenter$stable;
  var com_varabyte_kobweb_compose_css_EdgeY$stable;
  var com_varabyte_kobweb_compose_css_CenterY$stable;
  var com_varabyte_kobweb_compose_css_EdgeYOffset$stable;
  var com_varabyte_kobweb_compose_css_CSSPosition$stable;
  var com_varabyte_kobweb_compose_css_HueInterpolationMethod$stable;
  var com_varabyte_kobweb_compose_css_ColorInterpolationMethod_PolarColorSpace$stable;
  var com_varabyte_kobweb_compose_css_ColorInterpolationMethod$stable;
  function Companion_5() {
  }
  protoOf(Companion_5).y38 = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'light';
  };
  protoOf(Companion_5).z38 = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'dark';
  };
  var Companion_instance_6;
  function Companion_getInstance_6() {
    return Companion_instance_6;
  }
  function opacity(_this__u8e3s4, value) {
    _this__u8e3s4.o32('opacity', value);
  }
  function Companion_6() {
  }
  protoOf(Companion_6).a39 = function (value) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return value;
  };
  var Companion_instance_7;
  function Companion_getInstance_7() {
    return Companion_instance_7;
  }
  function colorScheme(_this__u8e3s4, colorScheme) {
    _this__u8e3s4.o32('color-scheme', colorScheme);
  }
  var com_varabyte_kobweb_compose_css_CssPropertyDeclaration$stable;
  var com_varabyte_kobweb_compose_css_ComparableStyleScope$stable;
  function com_varabyte_kobweb_compose_css_ComparableStyleScope$stableprop_getter() {
    return com_varabyte_kobweb_compose_css_ComparableStyleScope$stable;
  }
  function ComparableStyleScope() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.b39_1 = ArrayList_init_$Create$();
    this.c39_1 = this.b39_1;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.d39_1 = ArrayList_init_$Create$();
    this.e39_1 = this.d39_1;
  }
  protoOf(ComparableStyleScope).o32 = function (propertyName, value) {
    this.b39_1.h(new CssPropertyDeclaration(propertyName, toString(value)));
  };
  protoOf(ComparableStyleScope).s32 = function (variableName, value) {
    this.d39_1.h(new CssPropertyDeclaration(variableName, toString(value)));
  };
  protoOf(ComparableStyleScope).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof ComparableStyleScope) {
      tmp_0 = equals(this.c39_1, other.c39_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.e39_1, other.e39_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComparableStyleScope).hashCode = function () {
    var result = hashCode(this.c39_1);
    result = imul(31, result) + hashCode(this.e39_1) | 0;
    return result;
  };
  function CssPropertyDeclaration(name, value) {
    this.f39_1 = name;
    this.g39_1 = value;
  }
  protoOf(CssPropertyDeclaration).toString = function () {
    return 'CssPropertyDeclaration(name=' + this.f39_1 + ', value=' + this.g39_1 + ')';
  };
  protoOf(CssPropertyDeclaration).hashCode = function () {
    var result = getStringHashCode(this.f39_1);
    result = imul(result, 31) + getStringHashCode(this.g39_1) | 0;
    return result;
  };
  protoOf(CssPropertyDeclaration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CssPropertyDeclaration))
      return false;
    if (!(this.f39_1 === other.f39_1))
      return false;
    if (!(this.g39_1 === other.g39_1))
      return false;
    return true;
  };
  function isNotEmpty(_this__u8e3s4) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!_this__u8e3s4.c39_1.l()) {
      tmp = true;
    } else {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp = !_this__u8e3s4.e39_1.l();
    }
    return tmp;
  }
  function Companion_7() {
  }
  protoOf(Companion_7).h39 = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'pointer';
  };
  protoOf(Companion_7).i39 = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'not-allowed';
  };
  var Companion_instance_8;
  function Companion_getInstance_8() {
    return Companion_instance_8;
  }
  function cursor(_this__u8e3s4, cursor) {
    _this__u8e3s4.o32('cursor', cursor);
  }
  function Companion_8() {
  }
  protoOf(Companion_8).j39 = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'none';
  };
  var Companion_instance_9;
  function Companion_getInstance_9() {
    return Companion_instance_9;
  }
  function appearance(_this__u8e3s4, appearance) {
    _this__u8e3s4.o32('appearance', appearance);
  }
  function Companion_9() {
  }
  protoOf(Companion_9).k39 = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return '500';
  };
  protoOf(Companion_9).l39 = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return '600';
  };
  protoOf(Companion_9).m39 = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'bold';
  };
  protoOf(Companion_9).n39 = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'bolder';
  };
  var Companion_instance_10;
  function Companion_getInstance_10() {
    return Companion_instance_10;
  }
  function fontWeight(_this__u8e3s4, weight) {
    _this__u8e3s4.o32('font-weight', weight);
  }
  var com_varabyte_kobweb_compose_css_GridEntry_TrackSize_FitContent$stable;
  var com_varabyte_kobweb_compose_css_GridEntry_TrackSize_MinMax$stable;
  var com_varabyte_kobweb_compose_css_GridEntry_TrackSize_Flex$stable;
  var com_varabyte_kobweb_compose_css_GridEntry_TrackSize_Inflexible$stable;
  var com_varabyte_kobweb_compose_css_GridEntry_TrackSize_Keyword$stable;
  var com_varabyte_kobweb_compose_css_GridEntry_TrackSize_Fixed$stable;
  var com_varabyte_kobweb_compose_css_GridEntry_TrackSize$stable;
  var com_varabyte_kobweb_compose_css_GridEntry_Repeat_Track$stable;
  var com_varabyte_kobweb_compose_css_GridEntry_Repeat_Auto$stable;
  var com_varabyte_kobweb_compose_css_GridEntry_Repeat$stable;
  var com_varabyte_kobweb_compose_css_GridEntry_LineNames$stable;
  var com_varabyte_kobweb_compose_css_GridEntry$stable;
  var com_varabyte_kobweb_compose_css_GridTrackBuilderInRepeat$stable;
  var com_varabyte_kobweb_compose_css_GridTrackBuilder$stable;
  var com_varabyte_kobweb_compose_css_GridTemplate_SubgridBuilder$stable;
  var com_varabyte_kobweb_compose_css_GridBuilderInAuto$stable;
  var com_varabyte_kobweb_compose_css_GridBuilder$stable;
  function GridTrackBuilder() {
    GridTrackBuilderInRepeat.call(this);
  }
  protoOf(GridTrackBuilder).p39 = function (count, block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    block(this_0);
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = this_0.q39_1;
    var repeatTracks = copyToArray(this_1);
    this.q39_1.h(Companion_instance_12.r39(count, repeatTracks.slice()));
  };
  function GridTrackBuilderInRepeat() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.q39_1 = ArrayList_init_$Create$();
  }
  protoOf(GridTrackBuilderInRepeat).s39 = function () {
    return Companion_instance_11.x39();
  };
  protoOf(GridTrackBuilderInRepeat).t39 = function (track) {
    this.q39_1.h(track);
  };
  protoOf(GridTrackBuilderInRepeat).u39 = function (value) {
    return this.t39(Companion_instance_11.y39(value));
  };
  protoOf(GridTrackBuilderInRepeat).v39 = function (min, max) {
    return this.t39(Companion_instance_11.z39(min, max));
  };
  protoOf(GridTrackBuilderInRepeat).w39 = function (min, max) {
    return this.v39(Companion_instance_11.a3a(min), Companion_instance_11.y39(max));
  };
  function gridTemplateColumns_0(_this__u8e3s4, block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    block(this_0);
    gridTemplateColumns(_this__u8e3s4, toTrackListString(this_0.q39_1));
  }
  function FitContent() {
  }
  function MinMax(min, max) {
    TrackSize.call(this, 'minmax(' + min.toString() + ', ' + max.toString() + ')');
    this.c3a_1 = min;
    this.d3a_1 = max;
  }
  function Flex(value) {
    TrackSize.call(this, toString(value));
  }
  function Inflexible(value) {
    TrackSize.call(this, value);
  }
  function Keyword(value) {
    Inflexible.call(this, value);
  }
  function Fixed(value) {
    Inflexible.call(this, toString(value));
  }
  function Companion_10() {
  }
  protoOf(Companion_10).x39 = function () {
    return new Keyword('min-content');
  };
  protoOf(Companion_10).a3a = function (value) {
    return new Fixed(value);
  };
  protoOf(Companion_10).y39 = function (value) {
    return new Flex(value);
  };
  protoOf(Companion_10).z39 = function (min, max) {
    return new MinMax(min, max);
  };
  var Companion_instance_11;
  function Companion_getInstance_11() {
    return Companion_instance_11;
  }
  function Track(count, entries) {
    Repeat.call(this, count, entries);
  }
  function Auto() {
  }
  function TrackSize(value) {
    GridEntry.call(this, value);
  }
  function Repeat(value, entries) {
    GridEntry.call(this, 'repeat(' + toString(value) + ', ' + toTrackListString_0(entries) + ')');
    this.f3a_1 = entries;
  }
  function LineNames(names) {
    GridEntry.call(this, joinToString(names, ' ', '[', ']'));
    this.h3a_1 = names;
  }
  function Companion_11() {
  }
  protoOf(Companion_11).r39 = function (count, entries) {
    return new Track(count, entries.slice());
  };
  var Companion_instance_12;
  function Companion_getInstance_12() {
    return Companion_instance_12;
  }
  function GridEntry(value) {
    this.i3a_1 = value;
  }
  protoOf(GridEntry).toString = function () {
    return this.i3a_1;
  };
  function toTrackListString(_this__u8e3s4) {
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$0 = copyToArray(_this__u8e3s4);
    return toTrackListString_0(tmp$ret$0);
  }
  function toTrackListString_0(_this__u8e3s4) {
    validate(_this__u8e3s4);
    // Inline function 'kotlin.collections.mutableListOf' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = ArrayList_init_$Create$();
    var inductionVariable = 0;
    var last = _this__u8e3s4.length;
    while (inductionVariable < last) {
      var element = _this__u8e3s4[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var acc = accumulator;
      var prev = lastOrNull(acc);
      var tmp;
      if (prev instanceof LineNames) {
        tmp = element instanceof LineNames;
      } else {
        tmp = false;
      }
      if (tmp) {
        var tmp_0 = get_lastIndex(acc);
        var tmp0 = prev.h3a_1;
        // Inline function 'kotlin.collections.plus' call
        var elements = element.h3a_1;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$2 = tmp0.concat(elements);
        acc.g2(tmp_0, new LineNames(tmp$ret$2.slice()));
      } else {
        acc.h(element);
      }
      accumulator = acc;
    }
    var tmp$ret$4 = accumulator;
    return joinToString_0(tmp$ret$4, ' ');
  }
  function validate(_this__u8e3s4) {
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = ArrayList_init_$Create$();
    var inductionVariable = 0;
    var last = _this__u8e3s4.length;
    while (inductionVariable < last) {
      var element = _this__u8e3s4[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp;
      if (element instanceof LineNames) {
        tmp = emptyList();
      } else {
        if (element instanceof TrackSize) {
          tmp = listOf(element);
        } else {
          if (element instanceof Repeat) {
            // Inline function 'kotlin.collections.filterIsInstance' call
            var tmp0 = element.f3a_1;
            // Inline function 'kotlin.collections.filterIsInstanceTo' call
            var destination_0 = ArrayList_init_$Create$();
            var inductionVariable_0 = 0;
            var last_0 = tmp0.length;
            while (inductionVariable_0 < last_0) {
              var element_0 = tmp0[inductionVariable_0];
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              if (element_0 instanceof TrackSize) {
                destination_0.h(element_0);
              }
            }
            // Inline function 'kotlin.also' call
            // Inline function 'kotlin.collections.isNotEmpty' call
            // Inline function 'kotlin.require' call
            if (!!destination_0.l()) {
              var message = 'repeat() must contain at least one track size';
              throw IllegalArgumentException_init_$Create$(toString(message));
            }
            tmp = destination_0;
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
      var list = tmp;
      addAll(destination, list);
    }
    var trackSizes = destination;
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.require' call
    if (!!trackSizes.l()) {
      var message_0 = 'You must specify at least one track size';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.collections.count' call
    var count = 0;
    var inductionVariable_1 = 0;
    var last_1 = _this__u8e3s4.length;
    while (inductionVariable_1 < last_1) {
      var element_1 = _this__u8e3s4[inductionVariable_1];
      inductionVariable_1 = inductionVariable_1 + 1 | 0;
      if (element_1 instanceof Auto) {
        count = count + 1 | 0;
      }
    }
    var autoRepeatCount = count;
    if (autoRepeatCount === 0)
      return Unit_instance;
    // Inline function 'kotlin.require' call
    if (!(autoRepeatCount === 1)) {
      var message_1 = 'Only one auto-repeat call is allowed per track list';
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = trackSizes.i();
    while (_iterator__ex2g4s.j()) {
      var element_2 = _iterator__ex2g4s.k();
      var tmp_0;
      if (element_2 instanceof Fixed) {
        tmp_0 = null;
      } else {
        if (element_2 instanceof FitContent) {
          tmp_0 = 'Cannot use fit-content with auto-repeat';
        } else {
          if (element_2 instanceof Flex) {
            tmp_0 = 'Cannot use flex values with auto-repeat';
          } else {
            if (element_2 instanceof Keyword) {
              tmp_0 = 'Cannot use keywords with auto-repeat';
            } else {
              if (element_2 instanceof MinMax) {
                var tmp_1;
                var tmp_2;
                var tmp_3 = element_2.c3a_1;
                if (!(tmp_3 instanceof Fixed)) {
                  var tmp_4 = element_2.d3a_1;
                  tmp_2 = !(tmp_4 instanceof Fixed);
                } else {
                  tmp_2 = false;
                }
                if (tmp_2) {
                  tmp_1 = 'Cannot use minmax with auto-repeat unless at least one of the values is a fixed value (a length or percentage)';
                } else {
                  tmp_1 = null;
                }
                tmp_0 = tmp_1;
              } else {
                noWhenBranchMatchedException();
              }
            }
          }
        }
      }
      var errorMessage = tmp_0;
      // Inline function 'kotlin.require' call
      if (!(errorMessage == null)) {
        var message_2 = ensureNotNull(errorMessage);
        throw IllegalArgumentException_init_$Create$(toString(message_2));
      }
    }
  }
  function gridTemplateRows_0(_this__u8e3s4, block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    block(this_0);
    gridTemplateRows(_this__u8e3s4, toTrackListString(this_0.q39_1));
  }
  function grid(_this__u8e3s4, block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new GridBuilder();
    block(this_0);
    this_0.m3a(_this__u8e3s4);
  }
  function GridBuilder() {
    GridBuilderInAuto.call(this);
  }
  function GridBuilderInAuto() {
    this.j3a_1 = null;
    this.k3a_1 = null;
    this.l3a_1 = null;
  }
  protoOf(GridBuilderInAuto).n3a = function (block) {
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    block(this_0);
    tmp.j3a_1 = this_0.q39_1;
  };
  protoOf(GridBuilderInAuto).o3a = function (block) {
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new GridTrackBuilder();
    block(this_0);
    tmp.k3a_1 = this_0.q39_1;
  };
  protoOf(GridBuilderInAuto).m3a = function (scope) {
    // Inline function 'org.jetbrains.compose.web.css.Companion.Grid' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display(scope, 'grid');
    var tmp0_safe_receiver = this.j3a_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      gridTemplateColumns(scope, toTrackListString(tmp0_safe_receiver));
    }
    var tmp1_safe_receiver = this.k3a_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      gridTemplateRows(scope, toTrackListString(tmp1_safe_receiver));
    }
    var tmp2_safe_receiver = this.l3a_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp0_safe_receiver_0 = tmp2_safe_receiver.j3a_1;
      if (tmp0_safe_receiver_0 == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        gridAutoColumns(scope, toTrackListString(tmp0_safe_receiver_0));
      }
      var tmp1_safe_receiver_0 = tmp2_safe_receiver.k3a_1;
      var tmp;
      if (tmp1_safe_receiver_0 == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        gridAutoRows(scope, toTrackListString(tmp1_safe_receiver_0));
        tmp = Unit_instance;
      }
    }
  };
  var com_varabyte_kobweb_compose_css_CSSLayerRuleDeclaration$stable;
  function layer(_this__u8e3s4, name, rulesBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = StyleSheet_init_$Create$();
    rulesBuild(this_0);
    var rules = this_0.j33();
    _this__u8e3s4.f32(new CSSLayerRuleDeclaration(name, rules));
  }
  function CSSLayerRuleDeclaration(name, rules) {
    this.p3a_1 = name;
    this.q3a_1 = rules;
  }
  protoOf(CSSLayerRuleDeclaration).i32 = function () {
    return this.q3a_1;
  };
  protoOf(CSSLayerRuleDeclaration).y31 = function () {
    return '@layer ' + this.p3a_1;
  };
  protoOf(CSSLayerRuleDeclaration).equals = function (other) {
    var tmp;
    if (other instanceof CSSLayerRuleDeclaration) {
      tmp = (this.p3a_1 === other.p3a_1 && equals(this.q3a_1, other.q3a_1));
    } else {
      tmp = false;
    }
    return tmp;
  };
  function Companion_12() {
  }
  protoOf(Companion_12).r3a = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'middle';
  };
  var Companion_instance_13;
  function Companion_getInstance_13() {
    return Companion_instance_13;
  }
  function marginBlock(_this__u8e3s4, both) {
    _this__u8e3s4.o32('margin-block', both);
  }
  function marginBlockStart(_this__u8e3s4, value) {
    _this__u8e3s4.o32('margin-block-start', value);
  }
  function marginBlockEnd(_this__u8e3s4, value) {
    _this__u8e3s4.o32('margin-block-end', value);
  }
  function verticalAlign(_this__u8e3s4, verticalAlign) {
    _this__u8e3s4.o32('vertical-align', verticalAlign);
  }
  function paddingInline(_this__u8e3s4, start, end) {
    start = start === VOID ? get_px(0) : start;
    end = end === VOID ? get_px(0) : end;
    _this__u8e3s4.q32('padding-inline', toString(start) + ' ' + toString(end));
  }
  function zIndex(_this__u8e3s4, value) {
    _this__u8e3s4.r32('z-index', value);
  }
  function Companion_13() {
  }
  protoOf(Companion_13).j39 = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'none';
  };
  var Companion_instance_14;
  function Companion_getInstance_14() {
    return Companion_instance_14;
  }
  function listStyle(_this__u8e3s4, listStyle) {
    _this__u8e3s4.o32('list-style', listStyle);
  }
  function ListStyle$Companion$of$lambda(it) {
    return toString(it);
  }
  function Companion_14() {
  }
  protoOf(Companion_14).s3a = function (type, position, image) {
    var tmp = listOfNotNull([type, position, image]);
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return joinToString_0(tmp, ' ', VOID, VOID, VOID, VOID, ListStyle$Companion$of$lambda);
  };
  var Companion_instance_15;
  function Companion_getInstance_15() {
    return Companion_instance_15;
  }
  var com_varabyte_kobweb_compose_css_CSSMargin$stable;
  function Companion_15() {
  }
  protoOf(Companion_15).t3a = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'cover';
  };
  protoOf(Companion_15).u3a = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'scale-down';
  };
  var Companion_instance_16;
  function Companion_getInstance_16() {
    return Companion_instance_16;
  }
  function objectFit(_this__u8e3s4, objectFit) {
    _this__u8e3s4.o32('object-fit', objectFit);
  }
  function outline(_this__u8e3s4, outline) {
    _this__u8e3s4.o32('outline', outline);
  }
  function Companion_16() {
  }
  protoOf(Companion_16).v3a = function (outlineWidth, outlineStyle, outlineColor) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return joinToString_0(listOfNotNull([outlineWidth, outlineStyle, outlineColor]), ' ');
  };
  var Companion_instance_17;
  function Companion_getInstance_17() {
    return Companion_instance_17;
  }
  function Companion_17() {
  }
  protoOf(Companion_17).w3a = function (value) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toString(value);
  };
  var Companion_instance_18;
  function Companion_getInstance_18() {
    return Companion_instance_18;
  }
  function Companion_18() {
  }
  var Companion_instance_19;
  function Companion_getInstance_19() {
    return Companion_instance_19;
  }
  function overflowX(_this__u8e3s4, overflowX) {
    _this__u8e3s4.o32('overflow-x', overflowX);
  }
  function overflowY(_this__u8e3s4, overflowY) {
    _this__u8e3s4.o32('overflow-y', overflowY);
  }
  function overflow(_this__u8e3s4, overflow) {
    _this__u8e3s4.o32('overflow', overflow);
  }
  function CssOverflowModeValues() {
  }
  function Companion_19() {
  }
  protoOf(Companion_19).a3b = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'break-word';
  };
  var Companion_instance_20;
  function Companion_getInstance_20() {
    return Companion_instance_20;
  }
  function overflowWrap(_this__u8e3s4, overflowWrap) {
    _this__u8e3s4.o32('overflow-wrap', overflowWrap);
  }
  var com_varabyte_kobweb_compose_css_CSSScopeRuleDeclaration$stable;
  function scope(_this__u8e3s4, start, end, rulesBuild) {
    start = start === VOID ? null : start;
    end = end === VOID ? null : end;
    // Inline function 'kotlin.apply' call
    var this_0 = StyleSheet_init_$Create$();
    rulesBuild(this_0);
    var rules = this_0.j33();
    _this__u8e3s4.f32(new CSSScopeRuleDeclaration(start, end, rules));
  }
  function CSSScopeRuleDeclaration(start, end, rules) {
    this.b3b_1 = start;
    this.c3b_1 = end;
    this.d3b_1 = rules;
  }
  protoOf(CSSScopeRuleDeclaration).i32 = function () {
    return this.d3b_1;
  };
  protoOf(CSSScopeRuleDeclaration).y31 = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    this_0.m7('@scope');
    if (!(this.b3b_1 == null)) {
      this_0.m7(' (' + this.b3b_1 + ')');
    }
    if (!(this.c3b_1 == null)) {
      this_0.m7(' to (' + this.c3b_1 + ')');
    }
    return this_0.toString();
  };
  protoOf(CSSScopeRuleDeclaration).equals = function (other) {
    var tmp;
    if (other instanceof CSSScopeRuleDeclaration) {
      tmp = (this.b3b_1 == other.b3b_1 && this.c3b_1 == other.c3b_1 && equals(this.d3b_1, other.d3b_1));
    } else {
      tmp = false;
    }
    return tmp;
  };
  function Companion_20() {
  }
  protoOf(Companion_20).e3b = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'smooth';
  };
  var Companion_instance_21;
  function Companion_getInstance_21() {
    return Companion_instance_21;
  }
  function scrollBehavior(_this__u8e3s4, scrollBehavior) {
    _this__u8e3s4.o32('scroll-behavior', scrollBehavior);
  }
  var com_varabyte_kobweb_compose_css_StyleVariable_PropertyValue$stable;
  var com_varabyte_kobweb_compose_css_StyleVariable_NumberValue$stable;
  var com_varabyte_kobweb_compose_css_StyleVariable_StringValue$stable;
  var com_varabyte_kobweb_compose_css_StyleVariable$stable;
  var com_varabyte_kobweb_compose_css_StyleVariablePropertyProvider$stable;
  var com_varabyte_kobweb_compose_css_StyleVariableNumberProvider$stable;
  var com_varabyte_kobweb_compose_css_StyleVariableStringProvider$stable;
  function PropertyValue(name, defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    StyleVariable.call(this, name, defaultFallback, prefix);
  }
  protoOf(PropertyValue).h3b = function (fallback) {
    return this.k3b(fallback);
  };
  protoOf(PropertyValue).l3b = function (fallback) {
    return this.h3b((fallback == null ? true : !(fallback == null)) ? fallback : THROW_CCE());
  };
  function NumberValue(name, defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    var tmp;
    if (defaultFallback == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = defaultFallback;
    }
    StyleVariable.call(this, name, tmp, prefix);
  }
  protoOf(NumberValue).p3b = function (fallback) {
    var tmp;
    if (fallback == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = fallback;
    }
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.k3b(tmp);
  };
  protoOf(NumberValue).l3b = function (fallback) {
    return this.p3b((fallback == null ? true : isNumber(fallback)) ? fallback : THROW_CCE());
  };
  function StyleVariable(name, defaultFallback, prefix) {
    this.i3b_1 = defaultFallback;
    var tmp = this;
    var tmp_0;
    if (prefix == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_0 = prefix + '-' + name;
    }
    var tmp1_elvis_lhs = tmp_0;
    tmp.j3b_1 = tmp1_elvis_lhs == null ? name : tmp1_elvis_lhs;
  }
  protoOf(StyleVariable).m3b = function (fallback, $super) {
    fallback = fallback === VOID ? null : fallback;
    return $super === VOID ? this.l3b(fallback) : $super.l3b.call(this, fallback);
  };
  protoOf(StyleVariable).k3b = function (fallback) {
    var tmp1_safe_receiver = fallback == null ? this.i3b_1 : fallback;
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = ', ' + toString(tmp1_safe_receiver);
    }
    var tmp2_elvis_lhs = tmp;
    // Inline function 'org.jetbrains.compose.web.css.CSSVariableValue' call
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'org.jetbrains.compose.web.css.CSSVariableValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'var(--' + this.j3b_1 + (tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs) + ')';
  };
  function StyleVariablePropertyProvider(defaultFallback, prefix) {
    this.q3b_1 = defaultFallback;
    this.r3b_1 = prefix;
  }
  protoOf(StyleVariablePropertyProvider).s3b = function (thisRef, property) {
    return new PropertyValue(provideVariableName(thisRef, property), this.q3b_1, this.r3b_1);
  };
  function StyleVariable_0(defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    return new StyleVariablePropertyProvider(defaultFallback, prefix);
  }
  function StyleVariable_1(prefix) {
    prefix = prefix === VOID ? null : prefix;
    return new StyleVariablePropertyProvider(null, prefix);
  }
  function StyleVariable_2(defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    return new StyleVariablePropertyProvider(defaultFallback, prefix);
  }
  function StyleVariableNumberProvider(defaultFallback, prefix) {
    this.t3b_1 = defaultFallback;
    this.u3b_1 = prefix;
  }
  protoOf(StyleVariableNumberProvider).s3b = function (thisRef, property) {
    return new NumberValue(provideVariableName(thisRef, property), this.t3b_1, this.u3b_1);
  };
  function StyleVariable_3(defaultFallback, prefix) {
    defaultFallback = defaultFallback === VOID ? null : defaultFallback;
    prefix = prefix === VOID ? null : prefix;
    return new StyleVariableNumberProvider(defaultFallback, prefix);
  }
  function setVariable(_this__u8e3s4, variable, value) {
    _this__u8e3s4.o32('--' + variable.j3b_1, value);
  }
  function provideVariableName(groupObject, property) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    if (!(groupObject == null)) {
      this_0.m7(removeSuffix(removeSuffix(titleCamelCaseToKebabCase(ensureNotNull(getKClassFromExpression(groupObject).t9())), '-vars'), '-variables'));
      this_0.n7(_Char___init__impl__6a9atx(45));
    }
    this_0.m7(removeSuffix(removeSuffix(titleCamelCaseToKebabCase(property.callableName), '-var'), '-variable'));
    return this_0.toString();
  }
  function Companion_21() {
  }
  protoOf(Companion_21).s38 = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'start';
  };
  var Companion_instance_22;
  function Companion_getInstance_22() {
    return Companion_instance_22;
  }
  function Companion_22() {
  }
  protoOf(Companion_22).v3b = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'underline';
  };
  protoOf(Companion_22).j39 = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'none';
  };
  var Companion_instance_23;
  function Companion_getInstance_23() {
    return Companion_instance_23;
  }
  function Companion_23() {
  }
  protoOf(Companion_23).j39 = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'none';
  };
  var Companion_instance_24;
  function Companion_getInstance_24() {
    return Companion_instance_24;
  }
  function Companion_24() {
  }
  protoOf(Companion_24).w3b = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'nowrap';
  };
  protoOf(Companion_24).x3b = function () {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'pre-wrap';
  };
  var Companion_instance_25;
  function Companion_getInstance_25() {
    return Companion_instance_25;
  }
  function userSelect(_this__u8e3s4, userSelect) {
    _this__u8e3s4.o32('user-select', userSelect);
  }
  function textAlign(_this__u8e3s4, textAlign) {
    _this__u8e3s4.o32('text-align', textAlign);
  }
  function textDecorationLine(_this__u8e3s4, textDecorationLines) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(textDecorationLines.length === 0)) {
      _this__u8e3s4.q32('text-decoration-line', joinToString(textDecorationLines, ' '));
    }
  }
  function whiteSpace(_this__u8e3s4, whiteSpace) {
    _this__u8e3s4.o32('white-space', whiteSpace);
  }
  function translateX(_this__u8e3s4, tx) {
    translate(_this__u8e3s4, tx);
  }
  function translate(_this__u8e3s4, tx) {
    _this__u8e3s4.o32('translate', tx);
  }
  function scale(_this__u8e3s4, s) {
    _this__u8e3s4.r32('scale', s);
  }
  function Companion_25() {
  }
  protoOf(Companion_25).y3b = function (property, duration, timingFunction, delay, behavior) {
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$();
    this_0.h(toString(property));
    if (duration == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this_0.h(toString(duration));
    }
    if (timingFunction == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this_0.h(toString(timingFunction));
    }
    if (!(delay == null)) {
      if (duration == null) {
        this_0.h('0s');
      }
      this_0.h(toString(delay));
    }
    if (behavior == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this_0.h(toString(behavior));
    }
    var tmp$ret$9 = this_0.s4();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return joinToString_0(tmp$ret$9, ' ');
  };
  protoOf(Companion_25).z3b = function (property, duration, timingFunction, delay, behavior) {
    return this.y3b(Companion_instance_27.a3c(property), duration, timingFunction, delay, behavior);
  };
  protoOf(Companion_25).b3c = function (property, duration, timingFunction, delay, behavior, $super) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    behavior = behavior === VOID ? null : behavior;
    return $super === VOID ? this.z3b(property, duration, timingFunction, delay, behavior) : $super.z3b.call(this, property, duration, timingFunction, delay, behavior);
  };
  protoOf(Companion_25).c3c = function (transitions) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return joinToString(transitions);
  };
  protoOf(Companion_25).d3c = function (properties, duration, timingFunction, delay, behavior) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(properties, 10));
    var _iterator__ex2g4s = properties.i();
    while (_iterator__ex2g4s.j()) {
      var item = _iterator__ex2g4s.k();
      var tmp$ret$0 = Companion_instance_26.z3b(item, duration, timingFunction, delay, behavior);
      destination.h(tmp$ret$0);
    }
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return joinToString_0(destination);
  };
  protoOf(Companion_25).e3c = function (properties, duration, timingFunction, delay, behavior, $super) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    behavior = behavior === VOID ? null : behavior;
    return $super === VOID ? this.d3c(properties, duration, timingFunction, delay, behavior) : $super.d3c.call(this, properties, duration, timingFunction, delay, behavior);
  };
  var Companion_instance_26;
  function Companion_getInstance_26() {
    return Companion_instance_26;
  }
  function transition(_this__u8e3s4, transition) {
    _this__u8e3s4.o32('transition', transition);
  }
  function Companion_26() {
  }
  protoOf(Companion_26).a3c = function (customValue) {
    var tmp;
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(customValue) > 0) {
      var tmp_0;
      var tmp$ret$2;
      $l$block: {
        // Inline function 'kotlin.text.none' call
        var inductionVariable = 0;
        while (inductionVariable < charSequenceLength(customValue)) {
          var element = charSequenceGet(customValue, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          if (isWhitespace(element)) {
            tmp$ret$2 = false;
            break $l$block;
          }
        }
        tmp$ret$2 = true;
      }
      if (tmp$ret$2) {
        tmp_0 = true;
      } else {
        // Inline function 'kotlin.text.contains' call
        tmp_0 = Regex_init_$Create$('\\(.+\\)').pb(customValue);
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    // Inline function 'kotlin.require' call
    if (!tmp) {
      var message = 'Invalid transition property name. A property shouldn\'t contain any spaces, but got "' + customValue + '".';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return customValue;
  };
  var Companion_instance_27;
  function Companion_getInstance_27() {
    return Companion_instance_27;
  }
  var com_varabyte_kobweb_compose_css_functions_CalcScope_CalcNum$stable;
  function calc(action) {
    // Inline function 'kotlin.with' call
    return action(CalcScopeInstance_instance);
  }
  function CalcScope() {
  }
  function CalcScopeInstance() {
  }
  var CalcScopeInstance_instance;
  function CalcScopeInstance_getInstance() {
    return CalcScopeInstance_instance;
  }
  var com_varabyte_kobweb_compose_css_functions_CSSFilter$stable;
  var com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder_Entry_Color_Simple$stable;
  var com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder_Entry_Color_Stop$stable;
  var com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder_Entry_Color_StopRange$stable;
  var com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder_Entry_Color$stable;
  var com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder_Entry_Hint$stable;
  var com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder_Entry$stable;
  var com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder$stable;
  var com_varabyte_kobweb_compose_css_functions_RepeatingGradient$stable;
  var com_varabyte_kobweb_compose_css_functions_LinearGradient_Base$stable;
  var com_varabyte_kobweb_compose_css_functions_LinearGradient_ByDirection$stable;
  var com_varabyte_kobweb_compose_css_functions_LinearGradient_ByAngle$stable;
  var com_varabyte_kobweb_compose_css_functions_LinearGradient$stable;
  var com_varabyte_kobweb_compose_css_functions_RadialGradient_Shape_Circle$stable;
  var com_varabyte_kobweb_compose_css_functions_RadialGradient_Shape_Ellipse$stable;
  var com_varabyte_kobweb_compose_css_functions_RadialGradient_Shape$stable;
  var com_varabyte_kobweb_compose_css_functions_RadialGradient$stable;
  var com_varabyte_kobweb_compose_css_functions_ConicGradient$stable;
  var com_varabyte_kobweb_compose_css_functions_CSSClamp$stable;
  var com_varabyte_kobweb_compose_css_functions_CSSMin$stable;
  var com_varabyte_kobweb_compose_css_functions_CSSMax$stable;
  var com_varabyte_kobweb_compose_css_functions_CSSUrl$stable;
  var com_varabyte_kobweb_compose_dom_ElementRefScope_RefCallback_Simple$stable;
  var com_varabyte_kobweb_compose_dom_ElementRefScope_RefCallback_Disposable$stable;
  var com_varabyte_kobweb_compose_dom_ElementRefScope_RefCallback$stable;
  var com_varabyte_kobweb_compose_dom_ElementRefScope_KeysToEffect$stable;
  var com_varabyte_kobweb_compose_dom_ElementRefScope_Builder$stable;
  var com_varabyte_kobweb_compose_dom_ElementRefScope$stable;
  function Disposable(effect) {
    RefCallback.call(this);
    this.g3c_1 = effect;
  }
  protoOf(Disposable).h3c = function (scope, element) {
    return this.g3c_1(scope, element);
  };
  protoOf(Disposable).toString = function () {
    return 'Disposable(effect=' + toString(this.g3c_1) + ')';
  };
  protoOf(Disposable).hashCode = function () {
    return hashCode(this.g3c_1);
  };
  protoOf(Disposable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Disposable))
      return false;
    if (!equals(this.g3c_1, other.g3c_1))
      return false;
    return true;
  };
  function RefCallback() {
  }
  function KeysToEffect(keys, refCallback) {
    this.i3c_1 = keys;
    this.j3c_1 = refCallback;
  }
  protoOf(KeysToEffect).toString = function () {
    return 'KeysToEffect(keys=' + toString(this.i3c_1) + ', refCallback=' + toString(this.j3c_1) + ')';
  };
  protoOf(KeysToEffect).hashCode = function () {
    var result = hashCode(this.i3c_1);
    result = imul(result, 31) + hashCode(this.j3c_1) | 0;
    return result;
  };
  protoOf(KeysToEffect).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof KeysToEffect))
      return false;
    if (!equals(this.i3c_1, other.i3c_1))
      return false;
    if (!equals(this.j3c_1, other.j3c_1))
      return false;
    return true;
  };
  function Builder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.k3c_1 = ArrayList_init_$Create$();
  }
  protoOf(Builder).l3c = function (keys, effect) {
    this.k3c_1.h(new KeysToEffect(toList(keys), new Disposable(effect)));
  };
  protoOf(Builder).m3c = function (other) {
    if (!(other == null)) {
      this.k3c_1.r(other.n3c_1);
    }
  };
  protoOf(Builder).o3c = function () {
    return new ElementRefScope(this.k3c_1);
  };
  function ElementRefScope(keyedCallbacks) {
    this.n3c_1 = keyedCallbacks;
  }
  protoOf(ElementRefScope).toString = function () {
    return 'ElementRefScope(keyedCallbacks=' + toString(this.n3c_1) + ')';
  };
  protoOf(ElementRefScope).hashCode = function () {
    return hashCode(this.n3c_1);
  };
  protoOf(ElementRefScope).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ElementRefScope))
      return false;
    if (!equals(this.n3c_1, other.n3c_1))
      return false;
    return true;
  };
  function com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter() {
    return com_varabyte_kobweb_compose_dom_ElementRefScope$stable;
  }
  function registerRefScope(_this__u8e3s4, scope, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.p1h();
    var tmp;
    if (false || it === Companion_getInstance().r1g_1) {
      var value = registerRefScope$lambda;
      $composer_0.q1h(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    registerRefScope_0(_this__u8e3s4, scope, tmp$ret$3, $composer_0, 384 | 14 & $changed | 112 & $changed);
  }
  function registerRefScope_0(_this__u8e3s4, scope, transform, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.y1g(1100234072);
    if (scope == null) {
      $composer_0.z1g();
      return Unit_instance;
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = scope.n3c_1.i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      // Inline function 'kotlin.collections.toTypedArray' call
      var this_0 = element.i3c_1;
      var tmp = copyToArray(this_0).slice();
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(!!($composer_0.u1h(element) | (($changed & 896 ^ 384) > 256 && $composer_0.r1h(transform) || ($changed & 384) === 256)) | $composer_0.u1h(_this__u8e3s4));
      // Inline function 'kotlin.let' call
      var it = $composer_0.p1h();
      var tmp_0;
      if (invalid || it === Companion_getInstance().r1g_1) {
        var value = registerRefScope$lambda_0(element, transform, _this__u8e3s4);
        $composer_0.q1h(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp$ret$4 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      DisposableEffect(tmp, tmp$ret$4, $composer_0, 0);
    }
    $composer_0.z1g();
  }
  function disposableRef(keys, effect) {
    return refScope(disposableRef$lambda(keys, effect));
  }
  function refScope(init) {
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.apply' call
    var this_0 = new Builder();
    init(this_0);
    return this_0.o3c();
  }
  function registerRefScope$lambda(it) {
    return it;
  }
  function registerRefScope$lambda_0($keyedCallback, $transform, $this_registerRefScope) {
    return function ($this$DisposableEffect) {
      return $keyedCallback.j3c_1.h3c($this$DisposableEffect, $transform($this_registerRefScope.u30($this$DisposableEffect)));
    };
  }
  function disposableRef$lambda($keys, $effect) {
    return function ($this$refScope) {
      $this$refScope.l3c($keys.slice(), $effect);
      return Unit_instance;
    };
  }
  var com_varabyte_kobweb_compose_dom_GenericElementBuilder$stable;
  var com_varabyte_kobweb_compose_dom_GenericNamespacedElementBuilder$stable;
  function GenericTag(name, namespace, attrs, content, $composer, $changed, $default) {
    var namespace_0 = {_v: namespace};
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.e1h(1162580906);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.r1h(name) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.r1h(namespace_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.u1h(attrs_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.u1h(content_0._v) ? 2048 : 1024);
    if ($composer_0.w1h(!(($dirty & 1171) === 1170), $dirty & 1)) {
      if (!(($default & 2) === 0)) {
        namespace_0._v = null;
      }
      if (!(($default & 4) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        content_0._v = null;
      }
      var tmp0_safe_receiver = namespace_0._v;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp = Companion_getInstance_28().q3c(tmp0_safe_receiver, name);
      }
      var tmp1_elvis_lhs = tmp;
      var tmp_0 = tmp1_elvis_lhs == null ? Companion_getInstance_29().s3c(name) : tmp1_elvis_lhs;
      TagElement(isInterface(tmp_0, ElementBuilder) ? tmp_0 : THROW_CCE(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty >> 3 | 896 & $dirty >> 3);
    } else {
      $composer_0.j1h();
    }
    var tmp0_safe_receiver_0 = $composer_0.f1h();
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      tmp0_safe_receiver_0.y21(GenericTag$lambda(name, namespace_0, attrs_0, content_0, $changed, $default));
    }
  }
  function Companion_27() {
    Companion_instance_28 = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.p3c_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(Companion_27).q3c = function (namespace, qualifiedName) {
    var tmp0 = this.p3c_1;
    // Inline function 'kotlin.collections.getOrPut' call
    var key = to(namespace, qualifiedName);
    var value = tmp0.w1(key);
    var tmp;
    if (value == null) {
      var answer = new GenericNamespacedElementBuilder(namespace, qualifiedName);
      tmp0.a2(key, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    return tmp;
  };
  var Companion_instance_28;
  function Companion_getInstance_28() {
    if (Companion_instance_28 == null)
      new Companion_27();
    return Companion_instance_28;
  }
  function _get_element__z0t21h($this) {
    var tmp0 = $this.v3c_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('element', 1, tmp, GenericNamespacedElementBuilder$_get_element_$ref_eof03j(), null);
    return tmp0.t1();
  }
  function GenericNamespacedElementBuilder$element$delegate$lambda(this$0) {
    return function () {
      return document.createElementNS(this$0.t3c_1, this$0.u3c_1);
    };
  }
  function GenericNamespacedElementBuilder$_get_element_$ref_eof03j() {
    return function (p0) {
      return _get_element__z0t21h(p0);
    };
  }
  function GenericNamespacedElementBuilder(namespace, qualifiedName) {
    Companion_getInstance_28();
    this.t3c_1 = namespace;
    this.u3c_1 = qualifiedName;
    var tmp = this;
    tmp.v3c_1 = lazy(GenericNamespacedElementBuilder$element$delegate$lambda(this));
  }
  protoOf(GenericNamespacedElementBuilder).d2b = function () {
    var tmp = _get_element__z0t21h(this).cloneNode();
    return tmp instanceof Element ? tmp : THROW_CCE();
  };
  function Companion_28() {
    Companion_instance_29 = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.r3c_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(Companion_28).s3c = function (name) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.r3c_1;
    var value = this_0.w1(name);
    var tmp;
    if (value == null) {
      var answer = new GenericElementBuilder(name);
      this_0.a2(name, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    return tmp;
  };
  var Companion_instance_29;
  function Companion_getInstance_29() {
    if (Companion_instance_29 == null)
      new Companion_28();
    return Companion_instance_29;
  }
  function _get_element__z0t21h_0($this) {
    var tmp0 = $this.x3c_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('element', 1, tmp, GenericElementBuilder$_get_element_$ref_4jw5ti(), null);
    return tmp0.t1();
  }
  function GenericElementBuilder$element$delegate$lambda(this$0) {
    return function () {
      return document.createElement(this$0.w3c_1);
    };
  }
  function GenericElementBuilder$_get_element_$ref_4jw5ti() {
    return function (p0) {
      return _get_element__z0t21h_0(p0);
    };
  }
  function GenericElementBuilder(name) {
    Companion_getInstance_29();
    this.w3c_1 = name;
    var tmp = this;
    tmp.x3c_1 = lazy(GenericElementBuilder$element$delegate$lambda(this));
  }
  protoOf(GenericElementBuilder).d2b = function () {
    var tmp = _get_element__z0t21h_0(this).cloneNode();
    return tmp instanceof Element ? tmp : THROW_CCE();
  };
  function GenericTag_0(name, attrsStr, content, $composer, $changed, $default) {
    var attrsStr_0 = {_v: attrsStr};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.e1h(-1150610595);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.r1h(name) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.r1h(attrsStr_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.u1h(content_0._v) ? 256 : 128);
    if ($composer_0.w1h(!(($dirty & 147) === 146), $dirty & 1)) {
      if (!(($default & 2) === 0)) {
        attrsStr_0._v = null;
      }
      if (!(($default & 4) === 0)) {
        content_0._v = null;
      }
      var tmp;
      if (attrsStr_0._v == null) {
        $composer_0.y1g(293955015);
        $composer_0.z1g();
        tmp = null;
      } else {
        $composer_0.y1g(293955016);
        // Inline function 'kotlin.let' call
        var tmp0 = $composer_0;
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = !!(($dirty & 14) === 4 | ($dirty & 112) === 32);
        // Inline function 'kotlin.let' call
        var it = tmp0.p1h();
        var tmp_0;
        if (invalid || it === Companion_getInstance().r1g_1) {
          var value = GenericTag$lambda_0(name, attrsStr_0);
          tmp0.q1h(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp1_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.z1g();
        tmp = tmp1_group;
      }
      var attrs = tmp;
      GenericTag(name, null, attrs, content_0._v, $composer_0, 48 | 14 & $dirty | 7168 & $dirty << 3, 0);
    } else {
      $composer_0.j1h();
    }
    var tmp2_safe_receiver = $composer_0.f1h();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.y21(GenericTag$lambda_1(name, attrsStr_0, content_0, $changed, $default));
    }
  }
  function GenericTag$lambda($name, $namespace, $attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      GenericTag($name, $namespace._v, $attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function GenericTag$lambda_0($name, $attrsStr) {
    return function ($this$let) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var template = document.createElement('template');
      template.innerHTML = '<' + $name + ' ' + $attrsStr._v + '><\/' + $name + '>';
      var el = ensureNotNull(template.content.firstElementChild);
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = asList(el.attributes).i();
      while (_iterator__ex2g4s.j()) {
        var element = _iterator__ex2g4s.k();
        $this$let.y30(element.name, element.value);
      }
      return Unit_instance;
    };
  }
  function GenericTag$lambda_1($name, $attrsStr, $content, $$changed, $$default) {
    return function ($composer, $force) {
      GenericTag_0($name, $attrsStr._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var com_varabyte_kobweb_compose_dom_svg_SVGTransformScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGElementAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_ViewBox$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGGraphicalElementAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGContainerElementAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGSvgAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGDefsAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGGradientAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGLinearGradientAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGRadialGradientAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGStopAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGPatternAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGSymbolAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGUseAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGCircleAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGEllipseAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGGroupAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGImageAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGLineAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGPathDataScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGPathAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGPolygonAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGPolylineAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGRectAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGTextAttrsScope$stable;
  function Companion_29() {
  }
  protoOf(Companion_29).y3c = function (width, height) {
    return new ViewBox(0, 0, width, height);
  };
  protoOf(Companion_29).z3c = function (width, height, $super) {
    height = height === VOID ? width : height;
    return $super === VOID ? this.y3c(width, height) : $super.y3c.call(this, width, height);
  };
  var Companion_instance_30;
  function Companion_getInstance_30() {
    return Companion_instance_30;
  }
  function ViewBox(x, y, width, height) {
    this.a3d_1 = x;
    this.b3d_1 = y;
    this.c3d_1 = width;
    this.d3d_1 = height;
  }
  function SVGSvgAttrsScope$Companion$invoke$lambda($attrs) {
    return function (_this__u8e3s4) {
      if (!($attrs == null))
        $attrs(new SVGSvgAttrsScope(_this__u8e3s4));
      return Unit_instance;
    };
  }
  function Companion_30() {
  }
  protoOf(Companion_30).e3d = function (attrs) {
    return SVGSvgAttrsScope$Companion$invoke$lambda(attrs);
  };
  var Companion_instance_31;
  function Companion_getInstance_31() {
    return Companion_instance_31;
  }
  function SVGSvgAttrsScope(attrs) {
    SVGContainerElementAttrsScope.call(this, attrs);
  }
  function com_varabyte_kobweb_compose_dom_svg_ViewBox$stableprop_getter() {
    return com_varabyte_kobweb_compose_dom_svg_ViewBox$stable;
  }
  function Path(_this__u8e3s4, attrs, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.e1h(275418487);
    var $dirty = $changed;
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.u1h(attrs) ? 32 : 16);
    if ($composer_0.w1h(!(($dirty & 17) === 16), $dirty & 1)) {
      var tmp = Companion_instance_32.l3d(attrs);
      GenericTag('path', 'http://www.w3.org/2000/svg', tmp, null, $composer_0, 54, 8);
    } else {
      $composer_0.j1h();
    }
    var tmp0_safe_receiver = $composer_0.f1h();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y21(Path$lambda(_this__u8e3s4, attrs, $changed));
    }
  }
  function SVGPathAttrsScope$Companion$invoke$lambda($attrs) {
    return function (_this__u8e3s4) {
      $attrs(new SVGPathAttrsScope(_this__u8e3s4));
      return Unit_instance;
    };
  }
  function Companion_31() {
  }
  protoOf(Companion_31).l3d = function (attrs) {
    return SVGPathAttrsScope$Companion$invoke$lambda(attrs);
  };
  var Companion_instance_32;
  function Companion_getInstance_32() {
    return Companion_instance_32;
  }
  function SVGPathAttrsScope(attrs) {
    SVGGraphicalElementAttrsScope.call(this, attrs);
  }
  protoOf(SVGPathAttrsScope).n3d = function (pathDataScope) {
    // Inline function 'kotlin.apply' call
    var this_0 = new SVGPathDataScope();
    pathDataScope(this_0);
    this.y30('d', joinToString_0(this_0.o3d_1, ' '));
  };
  protoOf(SVGPathAttrsScope).p3d = function (value) {
    this.y30('d', value);
  };
  function SVGPathDataScope() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.o3d_1 = ArrayList_init_$Create$();
  }
  protoOf(SVGPathDataScope).r3d = function (x, y) {
    this.o3d_1.h('M ' + toString(x) + ' ' + toString(y));
  };
  protoOf(SVGPathDataScope).s3d = function (x, y, isRelative) {
    var command = isRelative ? 'l' : 'L';
    this.o3d_1.h(command + ' ' + toString(x) + ' ' + toString(y));
  };
  protoOf(SVGPathDataScope).t3d = function (x, isRelative) {
    var command = isRelative ? 'v' : 'V';
    this.o3d_1.h(command + ' ' + toString(x));
  };
  protoOf(SVGPathDataScope).u3d = function (x, isRelative) {
    var command = isRelative ? 'h' : 'H';
    this.o3d_1.h(command + ' ' + toString(x));
  };
  protoOf(SVGPathDataScope).v3d = function (rx, ry, rotate, largeArcFlag, sweepFlag, x, y, isRelative) {
    var command = isRelative ? 'a' : 'A';
    this.o3d_1.h(command + ' ' + toString(rx) + ' ' + toString(ry) + ' ' + toString(rotate) + ' ' + toString(largeArcFlag) + ' ' + toString(sweepFlag) + ' ' + toString(x) + ' ' + toString(y));
  };
  protoOf(SVGPathDataScope).w3d = function (rx, ry, rotate, largeArcFlag, sweepFlag, x, y, isRelative, $super) {
    isRelative = isRelative === VOID ? false : isRelative;
    var tmp;
    if ($super === VOID) {
      this.v3d(rx, ry, rotate, largeArcFlag, sweepFlag, x, y, isRelative);
      tmp = Unit_instance;
    } else {
      tmp = $super.v3d.call(this, rx, ry, rotate, largeArcFlag, sweepFlag, x, y, isRelative);
    }
    return tmp;
  };
  protoOf(SVGPathDataScope).x3d = function () {
    this.o3d_1.h('Z');
  };
  function Circle(_this__u8e3s4, attrs, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.e1h(-2079059220);
    var $dirty = $changed;
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.u1h(attrs) ? 32 : 16);
    if ($composer_0.w1h(!(($dirty & 17) === 16), $dirty & 1)) {
      var tmp = Companion_instance_33.y3d(attrs);
      GenericTag('circle', 'http://www.w3.org/2000/svg', tmp, null, $composer_0, 54, 8);
    } else {
      $composer_0.j1h();
    }
    var tmp0_safe_receiver = $composer_0.f1h();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y21(Circle$lambda(_this__u8e3s4, attrs, $changed));
    }
  }
  function SVGCircleAttrsScope$Companion$invoke$lambda($attrs) {
    return function (_this__u8e3s4) {
      $attrs(new SVGCircleAttrsScope(_this__u8e3s4));
      return Unit_instance;
    };
  }
  function Companion_32() {
  }
  protoOf(Companion_32).y3d = function (attrs) {
    return SVGCircleAttrsScope$Companion$invoke$lambda(attrs);
  };
  var Companion_instance_33;
  function Companion_getInstance_33() {
    return Companion_instance_33;
  }
  function SVGCircleAttrsScope(attrs) {
    SVGGraphicalElementAttrsScope.call(this, attrs);
  }
  protoOf(SVGCircleAttrsScope).a3e = function (value) {
    this.y30('r', toString(value));
  };
  function Group(_this__u8e3s4, attrs, content, $composer, $changed, $default) {
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.e1h(-1637165523);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.u1h(attrs_0._v) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.u1h(content) ? 256 : 128);
    if ($composer_0.w1h(!(($dirty & 145) === 144), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      var tmp0_safe_receiver = attrs_0._v;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp = Companion_instance_34.e3e(tmp0_safe_receiver);
      }
      GenericTag('g', 'http://www.w3.org/2000/svg', tmp, content, $composer_0, 54 | 7168 & $dirty << 3, 0);
    } else {
      $composer_0.j1h();
    }
    var tmp0_safe_receiver_0 = $composer_0.f1h();
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      tmp0_safe_receiver_0.y21(Group$lambda(_this__u8e3s4, attrs_0, content, $changed, $default));
    }
  }
  function SVGGroupAttrsScope$Companion$invoke$lambda($attrs) {
    return function (_this__u8e3s4) {
      $attrs(new SVGGroupAttrsScope(_this__u8e3s4));
      return Unit_instance;
    };
  }
  function Companion_33() {
  }
  protoOf(Companion_33).e3e = function (attrs) {
    return SVGGroupAttrsScope$Companion$invoke$lambda(attrs);
  };
  var Companion_instance_34;
  function Companion_getInstance_34() {
    return Companion_instance_34;
  }
  function SVGGroupAttrsScope(attrs) {
    SVGContainerElementAttrsScope.call(this, attrs);
  }
  var SVGStrokeLineJoin_Miter_instance;
  var SVGStrokeLineJoin_Round_instance;
  var SVGStrokeLineJoin_Bevel_instance;
  var SVGStrokeLineJoin_entriesInitialized;
  function SVGStrokeLineJoin_initEntries() {
    if (SVGStrokeLineJoin_entriesInitialized)
      return Unit_instance;
    SVGStrokeLineJoin_entriesInitialized = true;
    SVGStrokeLineJoin_Miter_instance = new SVGStrokeLineJoin('Miter', 0);
    SVGStrokeLineJoin_Round_instance = new SVGStrokeLineJoin('Round', 1);
    SVGStrokeLineJoin_Bevel_instance = new SVGStrokeLineJoin('Bevel', 2);
  }
  function SVGStrokeLineJoin(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(SVGStrokeLineJoin).toString = function () {
    return toSvgValue(this);
  };
  var SVGStrokeLineCap_Butt_instance;
  var SVGStrokeLineCap_Round_instance;
  var SVGStrokeLineCap_Square_instance;
  var SVGStrokeLineCap_entriesInitialized;
  function SVGStrokeLineCap_initEntries() {
    if (SVGStrokeLineCap_entriesInitialized)
      return Unit_instance;
    SVGStrokeLineCap_entriesInitialized = true;
    SVGStrokeLineCap_Butt_instance = new SVGStrokeLineCap('Butt', 0);
    SVGStrokeLineCap_Round_instance = new SVGStrokeLineCap('Round', 1);
    SVGStrokeLineCap_Square_instance = new SVGStrokeLineCap('Square', 2);
  }
  function SVGStrokeLineCap(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(SVGStrokeLineCap).toString = function () {
    return toSvgValue(this);
  };
  function Svg(attrs, content, $composer, $changed, $default) {
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.e1h(-1507789010);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.u1h(attrs_0._v) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.u1h(content) ? 32 : 16);
    if ($composer_0.w1h(!(($dirty & 19) === 18), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      GenericTag('svg', 'http://www.w3.org/2000/svg', Companion_instance_31.e3d(attrs_0._v), content, $composer_0, 54 | 7168 & $dirty << 6, 0);
    } else {
      $composer_0.j1h();
    }
    var tmp0_safe_receiver = $composer_0.f1h();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y21(Svg$lambda(attrs_0, content, $changed, $default));
    }
  }
  var SVGFillType_None_instance;
  var SVGFillType_CurrentColor_instance;
  var SVGFillType_entriesInitialized;
  function SVGFillType_initEntries() {
    if (SVGFillType_entriesInitialized)
      return Unit_instance;
    SVGFillType_entriesInitialized = true;
    SVGFillType_None_instance = new SVGFillType('None', 0);
    SVGFillType_CurrentColor_instance = new SVGFillType('CurrentColor', 1);
  }
  function SVGFillType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(SVGFillType).toString = function () {
    return toSvgValue(this);
  };
  var SVGStrokeType_None_instance;
  var SVGStrokeType_CurrentColor_instance;
  var SVGStrokeType_entriesInitialized;
  function SVGStrokeType_initEntries() {
    if (SVGStrokeType_entriesInitialized)
      return Unit_instance;
    SVGStrokeType_entriesInitialized = true;
    SVGStrokeType_None_instance = new SVGStrokeType('None', 0);
    SVGStrokeType_CurrentColor_instance = new SVGStrokeType('CurrentColor', 1);
  }
  function SVGStrokeType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(SVGStrokeType).toString = function () {
    return toSvgValue(this);
  };
  function SVGContainerElementAttrsScope(attrs) {
    SVGGraphicalElementAttrsScope.call(this, attrs);
  }
  function SvgLengthAttrs() {
  }
  function SvgViewBoxAttrs() {
  }
  function SVGGraphicalElementAttrsScope(attrs) {
    SVGElementAttrsScope.call(this, attrs);
  }
  function SvgCenterCoordinateAttrs() {
  }
  function toSvgValue(_this__u8e3s4) {
    // Inline function 'kotlin.text.replaceFirstChar' call
    var this_0 = _this__u8e3s4.k2_1;
    var tmp;
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(this_0) > 0) {
      // Inline function 'kotlin.text.lowercase' call
      var this_1 = charCodeAt(this_0, 0);
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$4 = toString_0(this_1).toLowerCase();
      tmp = toString(tmp$ret$4) + substring(this_0, 1);
    } else {
      tmp = this_0;
    }
    return tmp;
  }
  function SVGElementAttrsScope(attrs) {
    this.f3d_1 = attrs;
  }
  protoOf(SVGElementAttrsScope).z30 = function (builder) {
    this.f3d_1.z30(builder);
  };
  protoOf(SVGElementAttrsScope).a31 = function (classes) {
    this.f3d_1.a31(classes);
  };
  protoOf(SVGElementAttrsScope).b31 = function (classes) {
    this.f3d_1.b31(classes);
  };
  protoOf(SVGElementAttrsScope).c31 = function (value) {
    return this.f3d_1.c31(value);
  };
  protoOf(SVGElementAttrsScope).k38 = function (effect) {
    this.f3d_1.d31(effect);
  };
  protoOf(SVGElementAttrsScope).d31 = function (effect) {
    return this.k38(effect);
  };
  protoOf(SVGElementAttrsScope).y30 = function (attr, value) {
    return this.f3d_1.y30(attr, value);
  };
  protoOf(SVGElementAttrsScope).e31 = function (listener) {
    this.f3d_1.e31(listener);
  };
  protoOf(SVGElementAttrsScope).f31 = function (listener) {
    this.f3d_1.f31(listener);
  };
  function SvgPresentationAttrs() {
  }
  function Path$lambda($this_Path, $attrs, $$changed) {
    return function ($composer, $force) {
      Path($this_Path, $attrs, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function Circle$lambda($this_Circle, $attrs, $$changed) {
    return function ($composer, $force) {
      Circle($this_Circle, $attrs, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function Group$lambda($this_Group, $attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Group($this_Group, $attrs._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Svg$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Svg($attrs._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function SVGStrokeLineJoin_Round_getInstance() {
    SVGStrokeLineJoin_initEntries();
    return SVGStrokeLineJoin_Round_instance;
  }
  function SVGStrokeLineCap_Round_getInstance() {
    SVGStrokeLineCap_initEntries();
    return SVGStrokeLineCap_Round_instance;
  }
  function SVGFillType_None_getInstance() {
    SVGFillType_initEntries();
    return SVGFillType_None_instance;
  }
  function SVGFillType_CurrentColor_getInstance() {
    SVGFillType_initEntries();
    return SVGFillType_CurrentColor_instance;
  }
  function SVGStrokeType_None_getInstance() {
    SVGStrokeType_initEntries();
    return SVGStrokeType_None_instance;
  }
  function SVGStrokeType_CurrentColor_getInstance() {
    SVGStrokeType_initEntries();
    return SVGStrokeType_CurrentColor_instance;
  }
  var com_varabyte_kobweb_compose_dom_svg_SVGFilterElementAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFilterElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFilterAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEBlendElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEBlendAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEColorMatrixElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEColorMatrixAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFECompositeElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFECompositeAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEConvolveMatrixElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEConvolveMatrixAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEDiffuseLightingElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEDiffuseLightingAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEDistantLightElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEDistantLightAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEPointLightElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEPointLightAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFESpotLightElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFESpotLightAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEDisplacementMapElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEDisplacementMapAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEDropShadowElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEDropShadowAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEFloodElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEFloodAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEGaussianBlurElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEGaussianBlurAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEImageElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEImageAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEMergeElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEMergeAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEMergeNodeElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEMergeNodeAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEComponentTransferElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEComponentTransferAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGComponentTransferFunctionElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEFuncAElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEFuncRElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEFuncGElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEFuncBElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGComponentTransferFunctionAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEMorphologyElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEMorphologyAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEOffsetElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFEOffsetAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFESpecularLightingElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFESpecularLightingAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFETileElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFETileAttrsScope$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFETurbulenceElement$stable;
  var com_varabyte_kobweb_compose_dom_svg_SVGFETurbulenceAttrsScope$stable;
  var com_varabyte_kobweb_compose_events_SyntheticEvent$stable;
  var com_varabyte_kobweb_compose_events_SyntheticTransitionEvent$stable;
  function SyntheticTransitionEvent(nativeEvent, transitionEventDetails) {
    SyntheticEvent.call(this, nativeEvent);
    this.r3e_1 = transitionEventDetails.propertyName;
    this.s3e_1 = transitionEventDetails.elapsedTime;
    this.t3e_1 = transitionEventDetails.pseudoElement;
  }
  function SyntheticEvent(nativeEvent) {
    this.u3e_1 = nativeEvent;
    var tmp = this;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.v3e_1 = this.u3e_1.target;
    this.w3e_1 = this.u3e_1.bubbles;
    this.x3e_1 = this.u3e_1.cancelable;
    this.y3e_1 = this.u3e_1.composed;
    this.z3e_1 = this.u3e_1.currentTarget;
    this.a3f_1 = this.u3e_1.eventPhase;
    this.b3f_1 = this.u3e_1.defaultPrevented;
    this.c3f_1 = this.u3e_1.timeStamp;
    this.d3f_1 = this.u3e_1.type;
    this.e3f_1 = this.u3e_1.isTrusted;
  }
  //region block: post-declaration
  protoOf(ComparableAttrsScope).b31 = classes;
  protoOf(ComparableAttrsScope).c31 = tabIndex;
  protoOf(ComparableAttrsScope).f31 = onClick;
  protoOf(DummyAttrsScope).b31 = classes;
  protoOf(DummyAttrsScope).c31 = tabIndex;
  protoOf(DummyAttrsScope).f31 = onClick;
  protoOf(ComparableStyleScope).q32 = property;
  protoOf(ComparableStyleScope).r32 = property_0;
  protoOf(ComparableStyleScope).t32 = variable;
  protoOf(Companion_18).x3a = get_Visible;
  protoOf(Companion_18).y3a = get_Hidden;
  protoOf(Companion_18).z3a = get_Auto;
  protoOf(CalcScopeInstance).f3c = unaryMinus;
  protoOf(SVGGraphicalElementAttrsScope).g3d = stroke;
  protoOf(SVGGraphicalElementAttrsScope).q3d = strokeLineCap;
  protoOf(SVGGraphicalElementAttrsScope).f3e = strokeLineJoin;
  protoOf(SVGGraphicalElementAttrsScope).b3e = strokeMiterLimit;
  protoOf(SVGGraphicalElementAttrsScope).h3d = strokeWidth;
  protoOf(SVGGraphicalElementAttrsScope).i3d = fill;
  protoOf(SVGSvgAttrsScope).j3d = width_0;
  protoOf(SVGSvgAttrsScope).k3d = viewBox;
  protoOf(SVGCircleAttrsScope).c3e = cx;
  protoOf(SVGCircleAttrsScope).d3e = cy;
  //endregion
  //region block: init
  com_varabyte_kobweb_compose_attributes_ComparableAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_attributes_SyntheticEventListener$stable = 0;
  com_varabyte_kobweb_compose_attributes_TransitionEventListener$stable = 0;
  Companion_instance_0 = new Companion();
  Companion_instance_1 = new Companion_0();
  Companion_instance_2 = new Companion_1();
  Companion_instance_3 = new Companion_2();
  com_varabyte_kobweb_compose_css_BorderImageNumericBuilder$stable = 8;
  com_varabyte_kobweb_compose_css_BorderImageSlice_Builder$stable = 8;
  com_varabyte_kobweb_compose_css_BorderImageWidth_Builder$stable = 8;
  com_varabyte_kobweb_compose_css_BorderImageOutset_Builder$stable = 8;
  Companion_instance_4 = new Companion_3();
  Companion_instance_5 = new Companion_4();
  com_varabyte_kobweb_compose_css_Edge$stable = 0;
  com_varabyte_kobweb_compose_css_EdgeXOrCenter$stable = 0;
  com_varabyte_kobweb_compose_css_EdgeX$stable = 0;
  com_varabyte_kobweb_compose_css_CenterX$stable = 0;
  com_varabyte_kobweb_compose_css_EdgeXOffset$stable = 8;
  com_varabyte_kobweb_compose_css_EdgeYOrCenter$stable = 0;
  com_varabyte_kobweb_compose_css_EdgeY$stable = 0;
  com_varabyte_kobweb_compose_css_CenterY$stable = 0;
  com_varabyte_kobweb_compose_css_EdgeYOffset$stable = 8;
  com_varabyte_kobweb_compose_css_CSSPosition$stable = 0;
  com_varabyte_kobweb_compose_css_HueInterpolationMethod$stable = 0;
  com_varabyte_kobweb_compose_css_ColorInterpolationMethod_PolarColorSpace$stable = 0;
  com_varabyte_kobweb_compose_css_ColorInterpolationMethod$stable = 0;
  Companion_instance_6 = new Companion_5();
  Companion_instance_7 = new Companion_6();
  com_varabyte_kobweb_compose_css_CssPropertyDeclaration$stable = 0;
  com_varabyte_kobweb_compose_css_ComparableStyleScope$stable = 8;
  Companion_instance_8 = new Companion_7();
  Companion_instance_9 = new Companion_8();
  Companion_instance_10 = new Companion_9();
  com_varabyte_kobweb_compose_css_GridEntry_TrackSize_FitContent$stable = 0;
  com_varabyte_kobweb_compose_css_GridEntry_TrackSize_MinMax$stable = 0;
  com_varabyte_kobweb_compose_css_GridEntry_TrackSize_Flex$stable = 0;
  com_varabyte_kobweb_compose_css_GridEntry_TrackSize_Inflexible$stable = 0;
  com_varabyte_kobweb_compose_css_GridEntry_TrackSize_Keyword$stable = 0;
  com_varabyte_kobweb_compose_css_GridEntry_TrackSize_Fixed$stable = 0;
  com_varabyte_kobweb_compose_css_GridEntry_TrackSize$stable = 0;
  com_varabyte_kobweb_compose_css_GridEntry_Repeat_Track$stable = 8;
  com_varabyte_kobweb_compose_css_GridEntry_Repeat_Auto$stable = 8;
  com_varabyte_kobweb_compose_css_GridEntry_Repeat$stable = 8;
  com_varabyte_kobweb_compose_css_GridEntry_LineNames$stable = 8;
  com_varabyte_kobweb_compose_css_GridEntry$stable = 0;
  com_varabyte_kobweb_compose_css_GridTrackBuilderInRepeat$stable = 8;
  com_varabyte_kobweb_compose_css_GridTrackBuilder$stable = 8;
  com_varabyte_kobweb_compose_css_GridTemplate_SubgridBuilder$stable = 8;
  com_varabyte_kobweb_compose_css_GridBuilderInAuto$stable = 8;
  com_varabyte_kobweb_compose_css_GridBuilder$stable = 8;
  Companion_instance_11 = new Companion_10();
  Companion_instance_12 = new Companion_11();
  com_varabyte_kobweb_compose_css_CSSLayerRuleDeclaration$stable = 8;
  Companion_instance_13 = new Companion_12();
  Companion_instance_14 = new Companion_13();
  Companion_instance_15 = new Companion_14();
  com_varabyte_kobweb_compose_css_CSSMargin$stable = 8;
  Companion_instance_16 = new Companion_15();
  Companion_instance_17 = new Companion_16();
  Companion_instance_18 = new Companion_17();
  Companion_instance_19 = new Companion_18();
  Companion_instance_20 = new Companion_19();
  com_varabyte_kobweb_compose_css_CSSScopeRuleDeclaration$stable = 8;
  Companion_instance_21 = new Companion_20();
  com_varabyte_kobweb_compose_css_StyleVariable_PropertyValue$stable = 8;
  com_varabyte_kobweb_compose_css_StyleVariable_NumberValue$stable = 8;
  com_varabyte_kobweb_compose_css_StyleVariable_StringValue$stable = 8;
  com_varabyte_kobweb_compose_css_StyleVariable$stable = 0;
  com_varabyte_kobweb_compose_css_StyleVariablePropertyProvider$stable = 0;
  com_varabyte_kobweb_compose_css_StyleVariableNumberProvider$stable = 0;
  com_varabyte_kobweb_compose_css_StyleVariableStringProvider$stable = 0;
  Companion_instance_22 = new Companion_21();
  Companion_instance_23 = new Companion_22();
  Companion_instance_24 = new Companion_23();
  Companion_instance_25 = new Companion_24();
  Companion_instance_26 = new Companion_25();
  Companion_instance_27 = new Companion_26();
  com_varabyte_kobweb_compose_css_functions_CalcScope_CalcNum$stable = 8;
  CalcScopeInstance_instance = new CalcScopeInstance();
  com_varabyte_kobweb_compose_css_functions_CSSFilter$stable = 0;
  com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder_Entry_Color_Simple$stable = 0;
  com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder_Entry_Color_Stop$stable = 0;
  com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder_Entry_Color_StopRange$stable = 0;
  com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder_Entry_Color$stable = 0;
  com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder_Entry_Hint$stable = 0;
  com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder_Entry$stable = 0;
  com_varabyte_kobweb_compose_css_functions_Gradient_ColorStopsBuilder$stable = 8;
  com_varabyte_kobweb_compose_css_functions_RepeatingGradient$stable = 0;
  com_varabyte_kobweb_compose_css_functions_LinearGradient_Base$stable = 0;
  com_varabyte_kobweb_compose_css_functions_LinearGradient_ByDirection$stable = 0;
  com_varabyte_kobweb_compose_css_functions_LinearGradient_ByAngle$stable = 0;
  com_varabyte_kobweb_compose_css_functions_LinearGradient$stable = 0;
  com_varabyte_kobweb_compose_css_functions_RadialGradient_Shape_Circle$stable = 0;
  com_varabyte_kobweb_compose_css_functions_RadialGradient_Shape_Ellipse$stable = 0;
  com_varabyte_kobweb_compose_css_functions_RadialGradient_Shape$stable = 0;
  com_varabyte_kobweb_compose_css_functions_RadialGradient$stable = 0;
  com_varabyte_kobweb_compose_css_functions_ConicGradient$stable = 0;
  com_varabyte_kobweb_compose_css_functions_CSSClamp$stable = 8;
  com_varabyte_kobweb_compose_css_functions_CSSMin$stable = 8;
  com_varabyte_kobweb_compose_css_functions_CSSMax$stable = 8;
  com_varabyte_kobweb_compose_css_functions_CSSUrl$stable = 0;
  com_varabyte_kobweb_compose_dom_ElementRefScope_RefCallback_Simple$stable = 0;
  com_varabyte_kobweb_compose_dom_ElementRefScope_RefCallback_Disposable$stable = 0;
  com_varabyte_kobweb_compose_dom_ElementRefScope_RefCallback$stable = 0;
  com_varabyte_kobweb_compose_dom_ElementRefScope_KeysToEffect$stable = 8;
  com_varabyte_kobweb_compose_dom_ElementRefScope_Builder$stable = 8;
  com_varabyte_kobweb_compose_dom_ElementRefScope$stable = 8;
  com_varabyte_kobweb_compose_dom_GenericElementBuilder$stable = 8;
  com_varabyte_kobweb_compose_dom_GenericNamespacedElementBuilder$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGTransformScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGElementAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_ViewBox$stable = 0;
  com_varabyte_kobweb_compose_dom_svg_SVGGraphicalElementAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGContainerElementAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGSvgAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGDefsAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGGradientAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGLinearGradientAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGRadialGradientAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGStopAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGPatternAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGSymbolAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGUseAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGCircleAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGEllipseAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGGroupAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGImageAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGLineAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGPathDataScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGPathAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGPolygonAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGPolylineAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGRectAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGTextAttrsScope$stable = 8;
  Companion_instance_30 = new Companion_29();
  Companion_instance_31 = new Companion_30();
  Companion_instance_32 = new Companion_31();
  Companion_instance_33 = new Companion_32();
  Companion_instance_34 = new Companion_33();
  com_varabyte_kobweb_compose_dom_svg_SVGFilterElementAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFilterElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFilterAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEBlendElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEBlendAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEColorMatrixElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEColorMatrixAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFECompositeElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFECompositeAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEConvolveMatrixElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEConvolveMatrixAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEDiffuseLightingElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEDiffuseLightingAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEDistantLightElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEDistantLightAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEPointLightElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEPointLightAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFESpotLightElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFESpotLightAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEDisplacementMapElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEDisplacementMapAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEDropShadowElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEDropShadowAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEFloodElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEFloodAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEGaussianBlurElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEGaussianBlurAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEImageElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEImageAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEMergeElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEMergeAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEMergeNodeElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEMergeNodeAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEComponentTransferElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEComponentTransferAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGComponentTransferFunctionElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEFuncAElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEFuncRElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEFuncGElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEFuncBElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGComponentTransferFunctionAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEMorphologyElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEMorphologyAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEOffsetElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFEOffsetAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFESpecularLightingElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFESpecularLightingAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFETileElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFETileAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFETurbulenceElement$stable = 8;
  com_varabyte_kobweb_compose_dom_svg_SVGFETurbulenceAttrsScope$stable = 8;
  com_varabyte_kobweb_compose_events_SyntheticEvent$stable = 8;
  com_varabyte_kobweb_compose_events_SyntheticTransitionEvent$stable = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = onTransitionEnd;
  _.$_$.b = calc;
  _.$_$.c = ComparableStyleScope;
  _.$_$.d = NumberValue;
  _.$_$.e = StyleVariable_3;
  _.$_$.f = StyleVariable_2;
  _.$_$.g = StyleVariable_1;
  _.$_$.h = StyleVariable_0;
  _.$_$.i = alignItems;
  _.$_$.j = appearance;
  _.$_$.k = ariaDisabled;
  _.$_$.l = ariaHidden;
  _.$_$.m = borderBottom;
  _.$_$.n = borderColor;
  _.$_$.o = borderColor_0;
  _.$_$.p = borderLeft;
  _.$_$.q = borderStyle;
  _.$_$.r = borderTop;
  _.$_$.s = borderWidth;
  _.$_$.t = boxShadow;
  _.$_$.u = boxSizing_0;
  _.$_$.v = colorScheme;
  _.$_$.w = com_varabyte_kobweb_compose_css_ComparableStyleScope$stableprop_getter;
  _.$_$.x = cursor;
  _.$_$.y = fontWeight;
  _.$_$.z = gridTemplateColumns_0;
  _.$_$.a1 = gridTemplateRows_0;
  _.$_$.b1 = grid;
  _.$_$.c1 = isNotEmpty;
  _.$_$.d1 = justifyContent;
  _.$_$.e1 = justifyItems;
  _.$_$.f1 = justifySelf;
  _.$_$.g1 = layer;
  _.$_$.h1 = listStyle;
  _.$_$.i1 = marginBlockEnd;
  _.$_$.j1 = marginBlockStart;
  _.$_$.k1 = marginBlock;
  _.$_$.l1 = objectFit;
  _.$_$.m1 = opacity;
  _.$_$.n1 = outline;
  _.$_$.o1 = overflowWrap;
  _.$_$.p1 = overflowX;
  _.$_$.q1 = overflowY;
  _.$_$.r1 = overflow;
  _.$_$.s1 = paddingInline;
  _.$_$.t1 = scale;
  _.$_$.u1 = scope;
  _.$_$.v1 = scrollBehavior;
  _.$_$.w1 = setVariable;
  _.$_$.x1 = textAlign;
  _.$_$.y1 = textDecorationLine;
  _.$_$.z1 = transition;
  _.$_$.a2 = translateX;
  _.$_$.b2 = userSelect;
  _.$_$.c2 = verticalAlign;
  _.$_$.d2 = whiteSpace;
  _.$_$.e2 = zIndex;
  _.$_$.f2 = Circle;
  _.$_$.g2 = Group;
  _.$_$.h2 = Path;
  _.$_$.i2 = Svg;
  _.$_$.j2 = com_varabyte_kobweb_compose_dom_svg_ViewBox$stableprop_getter;
  _.$_$.k2 = GenericTag_0;
  _.$_$.l2 = GenericTag;
  _.$_$.m2 = com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter;
  _.$_$.n2 = disposableRef;
  _.$_$.o2 = refScope;
  _.$_$.p2 = registerRefScope_0;
  _.$_$.q2 = registerRefScope;
  _.$_$.r2 = SVGFillType_CurrentColor_getInstance;
  _.$_$.s2 = SVGFillType_None_getInstance;
  _.$_$.t2 = SVGStrokeLineCap_Round_getInstance;
  _.$_$.u2 = SVGStrokeLineJoin_Round_getInstance;
  _.$_$.v2 = SVGStrokeType_CurrentColor_getInstance;
  _.$_$.w2 = SVGStrokeType_None_getInstance;
  _.$_$.x2 = ComparableAttrsScope_init_$Create$;
  _.$_$.y2 = Companion_instance_0;
  _.$_$.z2 = Companion_instance_9;
  _.$_$.a3 = Companion_instance_4;
  _.$_$.b3 = Companion_instance_5;
  _.$_$.c3 = Companion_instance_6;
  _.$_$.d3 = Companion_instance_8;
  _.$_$.e3 = Companion_instance_10;
  _.$_$.f3 = Companion_instance_1;
  _.$_$.g3 = Companion_instance_2;
  _.$_$.h3 = Companion_instance_3;
  _.$_$.i3 = Companion_instance_15;
  _.$_$.j3 = Companion_instance_14;
  _.$_$.k3 = Companion_instance_16;
  _.$_$.l3 = Companion_instance_7;
  _.$_$.m3 = Companion_instance_17;
  _.$_$.n3 = Companion_instance_18;
  _.$_$.o3 = Companion_instance_19;
  _.$_$.p3 = Companion_instance_20;
  _.$_$.q3 = Companion_instance_21;
  _.$_$.r3 = Companion_instance_22;
  _.$_$.s3 = Companion_instance_23;
  _.$_$.t3 = Companion_instance_26;
  _.$_$.u3 = Companion_instance_24;
  _.$_$.v3 = Companion_instance_13;
  _.$_$.w3 = Companion_instance_25;
  _.$_$.x3 = Companion_instance_30;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-compose-html-ext.js.map
