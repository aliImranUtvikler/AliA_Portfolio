(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './html-html-core.js', './androidx-compose-runtime-runtime.js', './kobweb-frontend-compose-html-ext.js', './kobweb-common-client-server-internal.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./html-html-core.js'), require('./androidx-compose-runtime-runtime.js'), require('./kobweb-frontend-compose-html-ext.js'), require('./kobweb-common-client-server-internal.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-kobweb-core'.");
    }
    if (typeof globalThis['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-core'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-kobweb-core'.");
    }
    if (typeof globalThis['androidx-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-core'. Its dependency 'androidx-compose-runtime-runtime' was not found. Please, check whether 'androidx-compose-runtime-runtime' is loaded prior to 'kobweb-frontend-kobweb-core'.");
    }
    if (typeof globalThis['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-core'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'kobweb-frontend-kobweb-core'.");
    }
    if (typeof globalThis['kobweb-common-client-server-internal'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-core'. Its dependency 'kobweb-common-client-server-internal' was not found. Please, check whether 'kobweb-common-client-server-internal' is loaded prior to 'kobweb-frontend-kobweb-core'.");
    }
    globalThis['kobweb-frontend-kobweb-core'] = factory(typeof globalThis['kobweb-frontend-kobweb-core'] === 'undefined' ? {} : globalThis['kobweb-frontend-kobweb-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['html-html-core'], globalThis['androidx-compose-runtime-runtime'], globalThis['kobweb-frontend-compose-html-ext'], globalThis['kobweb-common-client-server-internal']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_html_html_core, kotlin_androidx_compose_runtime_runtime, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_com_varabyte_kobweb_client_server_internal) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.e2;
  var org_jetbrains_compose_web_css_StyleSheet$stableprop_getter = kotlin_org_jetbrains_compose_html_html_core.$_$.u2;
  var sourceInformationMarkerStart = kotlin_androidx_compose_runtime_runtime.$_$.u;
  var Style = kotlin_org_jetbrains_compose_html_html_core.$_$.p3;
  var sourceInformationMarkerEnd = kotlin_androidx_compose_runtime_runtime.$_$.t;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.y2;
  var padding = kotlin_org_jetbrains_compose_html_html_core.$_$.v2;
  var margin = kotlin_org_jetbrains_compose_html_html_core.$_$.n2;
  var boxSizing = kotlin_org_jetbrains_compose_html_html_core.$_$.n1;
  var StyleSheet = kotlin_org_jetbrains_compose_html_html_core.$_$.g1;
  var VOID = kotlin_kotlin.$_$.c;
  var StyleSheet_init_$Init$ = kotlin_org_jetbrains_compose_html_html_core.$_$.b;
  var layer = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g1;
  var protoOf = kotlin_kotlin.$_$.c8;
  var initMetadataForObject = kotlin_kotlin.$_$.r7;
  var updateChangedFlags = kotlin_androidx_compose_runtime_runtime.$_$.z;
  var toString = kotlin_kotlin.$_$.d8;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.f1;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.z5;
  var initMetadataForCompanion = kotlin_kotlin.$_$.n7;
  var mutableStateOf = kotlin_androidx_compose_runtime_runtime.$_$.s;
  var initMetadataForClass = kotlin_kotlin.$_$.m7;
  var mapCapacity = kotlin_kotlin.$_$.h4;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.m;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.t1;
  var substringAfterLast = kotlin_kotlin.$_$.w9;
  var plus = kotlin_kotlin.$_$.n4;
  var equals = kotlin_kotlin.$_$.f7;
  var getStringHashCode = kotlin_kotlin.$_$.k7;
  var hashCode = kotlin_kotlin.$_$.l7;
  var staticCompositionLocalOf = kotlin_androidx_compose_runtime_runtime.$_$.w;
  var mutableStateMapOf = kotlin_androidx_compose_runtime_runtime.$_$.r;
  var ensureNotNull = kotlin_kotlin.$_$.fb;
  var Companion_getInstance = kotlin_androidx_compose_runtime_runtime.$_$.f1;
  var THROW_CCE = kotlin_kotlin.$_$.ya;
  var A = kotlin_org_jetbrains_compose_html_html_core.$_$.i3;
  var isBlank = kotlin_kotlin.$_$.g9;
  var startsWith = kotlin_kotlin.$_$.v9;
  var endsWith = kotlin_kotlin.$_$.d9;
  var startsWith_0 = kotlin_kotlin.$_$.u9;
  var dropLast = kotlin_kotlin.$_$.a9;
  var charSequenceLength = kotlin_kotlin.$_$.b7;
  var removePrefix = kotlin_kotlin.$_$.o9;
  var Enum = kotlin_kotlin.$_$.qa;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.hb;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.v;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.g;
  var joinToString = kotlin_kotlin.$_$.x3;
  var objectCreate = kotlin_kotlin.$_$.b8;
  var substringBefore = kotlin_kotlin.$_$.z9;
  var to = kotlin_kotlin.$_$.nb;
  var charArrayOf = kotlin_kotlin.$_$.y6;
  var trimStart = kotlin_kotlin.$_$.ja;
  var substringAfter = kotlin_kotlin.$_$.y9;
  var split = kotlin_kotlin.$_$.t9;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.u;
  var drop = kotlin_kotlin.$_$.b9;
  var first = kotlin_kotlin.$_$.f9;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.n;
  var split_0 = kotlin_kotlin.$_$.s9;
  var getOrNull = kotlin_kotlin.$_$.u3;
  var Exception = kotlin_kotlin.$_$.sa;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.z;
  var captureStack = kotlin_kotlin.$_$.x6;
  var emptyMap = kotlin_kotlin.$_$.o3;
  var last = kotlin_kotlin.$_$.d4;
  var DynamicNode = kotlin_com_varabyte_kobweb_client_server_internal.$_$.a;
  var toRouteString = kotlin_com_varabyte_kobweb_client_server_internal.$_$.c;
  var KMutableProperty1 = kotlin_kotlin.$_$.n8;
  var getPropertyCallableRef = kotlin_kotlin.$_$.j7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.h;
  var KtMap = kotlin_kotlin.$_$.r2;
  var isInterface = kotlin_kotlin.$_$.u7;
  var contains = kotlin_kotlin.$_$.y8;
  var DisposableEffect = kotlin_androidx_compose_runtime_runtime.$_$.i;
  var rememberComposableLambda = kotlin_androidx_compose_runtime_runtime.$_$.b;
  var asReversed = kotlin_kotlin.$_$.b3;
  var substringAfter_0 = kotlin_kotlin.$_$.x9;
  var RouteTree = kotlin_com_varabyte_kobweb_client_server_internal.$_$.b;
  var androidx_compose_runtime_ProvidedValue$stableprop_getter = kotlin_androidx_compose_runtime_runtime.$_$.m;
  var CompositionLocalProvider = kotlin_androidx_compose_runtime_runtime.$_$.d;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.b1;
  var removeSuffix = kotlin_kotlin.$_$.p9;
  var contains_0 = kotlin_kotlin.$_$.z8;
  var Text = kotlin_org_jetbrains_compose_html_html_core.$_$.r3;
  var composableLambdaInstance = kotlin_androidx_compose_runtime_runtime.$_$.a;
  var toMutableMap = kotlin_kotlin.$_$.c5;
  var Div = kotlin_org_jetbrains_compose_html_html_core.$_$.l3;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.w2;
  var width = kotlin_org_jetbrains_compose_html_html_core.$_$.g3;
  var get_vh = kotlin_org_jetbrains_compose_html_html_core.$_$.e3;
  var height = kotlin_org_jetbrains_compose_html_html_core.$_$.h2;
  var Companion_instance = kotlin_org_jetbrains_compose_html_html_core.$_$.i;
  var display = kotlin_org_jetbrains_compose_html_html_core.$_$.s1;
  var Companion_instance_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.y2;
  var alignItems = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.i;
  var Companion_instance_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f3;
  var justifyContent = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d1;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(DefaultStyleSheet, 'DefaultStyleSheet', VOID, StyleSheet);
  initMetadataForObject(AppGlobals, 'AppGlobals');
  initMetadataForCompanion(Companion);
  initMetadataForClass(PageContext, 'PageContext');
  initMetadataForClass(RouteInfo, 'RouteInfo');
  initMetadataForClass(MutableData, 'MutableData', MutableData);
  initMetadataForClass(InitKobwebContext, 'InitKobwebContext');
  initMetadataForClass(InitRouteContext, 'InitRouteContext');
  initMetadataForClass(MutableKobwebConfig, 'MutableKobwebConfig', MutableKobwebConfig);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(MutableOpenLinkStrategies, 'MutableOpenLinkStrategies', MutableOpenLinkStrategies);
  initMetadataForCompanion(Companion_1);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(BasePathImpl, 'BasePathImpl');
  initMetadataForClass(OpenLinkStrategy, 'OpenLinkStrategy', VOID, Enum);
  initMetadataForClass(PageData, 'PageData');
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(Route, 'Route');
  initMetadataForClass(RouteException, 'RouteException', VOID, Exception);
  initMetadataForClass(Router$renderActivePage$$inlined$run$2$2$2$1);
  initMetadataForClass(Router, 'Router', Router);
  initMetadataForObject(ComposableSingletons$RouterKt, 'ComposableSingletons$RouterKt');
  initMetadataForClass(RouteInterceptorScope, 'RouteInterceptorScope');
  initMetadataForClass(UpdateHistoryMode, 'UpdateHistoryMode', VOID, Enum);
  //endregion
  var com_varabyte_kobweb_core_DefaultStyleSheet$stable;
  function KobwebApp(content, $composer, $changed) {
    _init_properties_App_kt__fk8usv();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.e1h(1293008755);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.u1h(content) ? 4 : 2);
    if ($composer_0.w1h(!(($dirty & 3) === 2), $dirty & 1)) {
      var tmp0 = DefaultStyleSheet_getInstance();
      var tmp2 = $composer_0;
      // Inline function 'org.jetbrains.compose.web.css.Style' call
      org_jetbrains_compose_web_css_StyleSheet$stableprop_getter();
      var $composer_1 = tmp2;
      sourceInformationMarkerStart($composer_1, -1196466140, 'CC(Style)166@5403L37:StyleSheet.kt#97hrcb');
      Style(null, tmp0.j33(), $composer_1, 0, 1);
      sourceInformationMarkerEnd($composer_1);
      content($composer_0, 14 & $dirty);
    } else {
      $composer_0.j1h();
    }
    var tmp0_safe_receiver = $composer_0.f1h();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y21(KobwebApp$lambda(content, $changed));
    }
  }
  function DefaultStyleSheet$lambda($this$layer) {
    $this$layer.n33('html, body', DefaultStyleSheet$lambda$lambda);
    $this$layer.n33('*', DefaultStyleSheet$lambda$lambda_0);
    return Unit_instance;
  }
  function DefaultStyleSheet$lambda$lambda($this$style) {
    padding($this$style, [get_px(0)]);
    margin($this$style, [get_px(0)]);
    return Unit_instance;
  }
  function DefaultStyleSheet$lambda$lambda_0($this$style) {
    boxSizing($this$style, 'border-box');
    return Unit_instance;
  }
  function DefaultStyleSheet() {
    DefaultStyleSheet_instance = this;
    StyleSheet_init_$Init$(VOID, VOID, this);
    layer(this, 'reset', DefaultStyleSheet$lambda);
  }
  protoOf(DefaultStyleSheet).m33 = function (selector, cssRule) {
    return this.l33(selector, cssRule);
  };
  var DefaultStyleSheet_instance;
  function DefaultStyleSheet_getInstance() {
    if (DefaultStyleSheet_instance == null)
      new DefaultStyleSheet();
    return DefaultStyleSheet_instance;
  }
  function KobwebApp$lambda($content, $$changed) {
    return function ($composer, $force) {
      KobwebApp($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var properties_initialized_App_kt_kalemn;
  function _init_properties_App_kt__fk8usv() {
    if (!properties_initialized_App_kt_kalemn) {
      properties_initialized_App_kt_kalemn = true;
      com_varabyte_kobweb_core_DefaultStyleSheet$stable = org_jetbrains_compose_web_css_StyleSheet$stableprop_getter();
    }
  }
  var com_varabyte_kobweb_core_AppGlobals$stable;
  function AppGlobals() {
  }
  protoOf(AppGlobals).k3f = function (values) {
    // Inline function 'kotlin.check' call
    if (!!!(this.j3f_1 == null)) {
      var message = 'Cannot initialize AppGlobals more than once';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.j3f_1 = values;
  };
  var AppGlobals_instance;
  function AppGlobals_getInstance() {
    return AppGlobals_instance;
  }
  function get_PageContextLocal() {
    _init_properties_PageContext_kt__u2hiem();
    return PageContextLocal;
  }
  var PageContextLocal;
  var com_varabyte_kobweb_core_RouteInfo$stable;
  var com_varabyte_kobweb_core_PageContext$stable;
  function Companion() {
  }
  protoOf(Companion).m3f = function () {
    var tmp = this.l3f_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('instance');
    }
  };
  protoOf(Companion).n3f = function (router, data) {
    this.l3f_1 = new PageContext(router, data);
  };
  var Companion_instance_2;
  function Companion_getInstance_0() {
    return Companion_instance_2;
  }
  function PageContext(router, data) {
    this.o3f_1 = router;
    this.p3f_1 = data;
    this.q3f_1 = mutableStateOf(null);
  }
  protoOf(PageContext).r3f = function (value) {
    this.q3f_1.b17(value);
  };
  protoOf(PageContext).s3f = function () {
    var tmp0_elvis_lhs = this.q3f_1.t1();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'PageContext route info is only valid within a @Page composable';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  function RouteInfo(route, dynamicParams) {
    this.t3f_1 = route;
    var tmp = this;
    // Inline function 'kotlin.collections.mapValues' call
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination = LinkedHashMap_init_$Create$(mapCapacity(dynamicParams.n()));
    // Inline function 'kotlin.collections.associateByTo' call
    var _iterator__ex2g4s = dynamicParams.z1().i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      var tmp_0 = element.s1();
      // Inline function 'kotlin.collections.component2' call
      var value = element.t1();
      var tmp$ret$2 = decodeURIComponent(value);
      destination.a2(tmp_0, tmp$ret$2);
    }
    tmp.u3f_1 = destination;
    this.v3f_1 = substringAfterLast(this.t3f_1.c3g_1, _Char___init__impl__6a9atx(47));
    this.w3f_1 = this.t3f_1.c3g_1;
    this.x3f_1 = plus(this.t3f_1.d3g_1, dynamicParams);
    this.y3f_1 = this.t3f_1.d3g_1;
    this.z3f_1 = this.t3f_1.e3g_1;
  }
  protoOf(RouteInfo).f3g = function () {
    return this.t3f_1.toString();
  };
  protoOf(RouteInfo).toString = function () {
    return this.f3g();
  };
  protoOf(RouteInfo).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    if (other instanceof RouteInfo) {
      tmp_1 = other.w3f_1 === this.w3f_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = equals(other.x3f_1, this.x3f_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = other.z3f_1 == this.z3f_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(RouteInfo).hashCode = function () {
    var result = getStringHashCode(this.w3f_1);
    result = imul(31, result) + hashCode(this.x3f_1) | 0;
    var tmp = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.z3f_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(RouteInfo).g3g = function (path, queryParams, fragment, dynamicParams) {
    return new RouteInfo(Route_init_$Create$(path, queryParams, fragment), dynamicParams);
  };
  protoOf(RouteInfo).h3g = function (path, queryParams, fragment, dynamicParams, $super) {
    path = path === VOID ? this.t3f_1.c3g_1 : path;
    queryParams = queryParams === VOID ? this.t3f_1.d3g_1 : queryParams;
    fragment = fragment === VOID ? this.t3f_1.e3g_1 : fragment;
    dynamicParams = dynamicParams === VOID ? this.u3f_1 : dynamicParams;
    return $super === VOID ? this.g3g(path, queryParams, fragment, dynamicParams) : $super.g3g.call(this, path, queryParams, fragment, dynamicParams);
  };
  function com_varabyte_kobweb_core_PageContext$stableprop_getter() {
    return com_varabyte_kobweb_core_PageContext$stable;
  }
  function rememberPageContext($composer, $changed) {
    _init_properties_PageContext_kt__u2hiem();
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_PageContextLocal();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC(<get-current>):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.x1h(this_0);
    sourceInformationMarkerEnd($composer_1);
    var tmp;
    if (tmp0 == null) {
      var message = 'PageContext is only valid within a @Page composable';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0;
    }
    return tmp;
  }
  function PageContextLocal$lambda() {
    _init_properties_PageContext_kt__u2hiem();
    return null;
  }
  var properties_initialized_PageContext_kt_8ruj8w;
  function _init_properties_PageContext_kt__u2hiem() {
    if (!properties_initialized_PageContext_kt_8ruj8w) {
      properties_initialized_PageContext_kt_8ruj8w = true;
      PageContextLocal = staticCompositionLocalOf(PageContextLocal$lambda);
      com_varabyte_kobweb_core_RouteInfo$stable = 8;
      com_varabyte_kobweb_core_PageContext$stable = 8;
    }
  }
  var com_varabyte_kobweb_core_data_MutableData$stable;
  function MutableData() {
    this.i3g_1 = mutableStateMapOf();
  }
  protoOf(MutableData).j3g = function (key, value) {
    // Inline function 'kotlin.collections.set' call
    this.i3g_1.a2(key, value);
  };
  protoOf(MutableData).k3g = function (key) {
    var tmp = this.i3g_1.w1(key);
    return !(tmp == null) ? tmp : null;
  };
  protoOf(MutableData).d2 = function () {
    this.i3g_1.d2();
  };
  function getValue(_this__u8e3s4, key) {
    return ensureNotNull(_this__u8e3s4.k3g(key));
  }
  var com_varabyte_kobweb_core_init_InitKobwebContext$stable;
  function initKobweb(router, init) {
    var config = new MutableKobwebConfig();
    init(new InitKobwebContext(config, router));
    set_MutableKobwebConfigInstance(config);
  }
  function InitKobwebContext(config, router) {
    this.l3g_1 = config;
    this.m3g_1 = router;
  }
  var com_varabyte_kobweb_core_init_InitRouteContext$stable;
  function InitRouteContext(route, data) {
    this.n3g_1 = route;
    this.o3g_1 = data;
  }
  function set_MutableKobwebConfigInstance(_set____db54di) {
    _init_properties_KobwebConfig_kt__rz30d4();
    MutableKobwebConfigInstance = _set____db54di;
  }
  function get_MutableKobwebConfigInstance() {
    _init_properties_KobwebConfig_kt__rz30d4();
    return MutableKobwebConfigInstance;
  }
  var MutableKobwebConfigInstance;
  var com_varabyte_kobweb_core_init_MutableOpenLinkStrategies$stable;
  var com_varabyte_kobweb_core_init_MutableKobwebConfig$stable;
  function MutableKobwebConfig() {
    this.p3g_1 = new MutableOpenLinkStrategies();
  }
  protoOf(MutableKobwebConfig).q3g = function () {
    return this.p3g_1;
  };
  function Companion_0() {
  }
  protoOf(Companion_0).r3g = function () {
    return get_MutableKobwebConfigInstance();
  };
  var Companion_instance_3;
  function Companion_getInstance_1() {
    return Companion_instance_3;
  }
  function MutableOpenLinkStrategies(internal, external) {
    internal = internal === VOID ? OpenLinkStrategy_IN_PLACE_getInstance() : internal;
    external = external === VOID ? OpenLinkStrategy_IN_NEW_TAB_getInstance() : external;
    this.s3g_1 = internal;
    this.t3g_1 = external;
  }
  protoOf(MutableOpenLinkStrategies).u3g = function () {
    return this.s3g_1;
  };
  protoOf(MutableOpenLinkStrategies).v3g = function () {
    return this.t3g_1;
  };
  var properties_initialized_KobwebConfig_kt_yaxikm;
  function _init_properties_KobwebConfig_kt__rz30d4() {
    if (!properties_initialized_KobwebConfig_kt_yaxikm) {
      properties_initialized_KobwebConfig_kt_yaxikm = true;
      MutableKobwebConfigInstance = new MutableKobwebConfig();
      com_varabyte_kobweb_core_init_MutableOpenLinkStrategies$stable = 8;
      com_varabyte_kobweb_core_init_MutableKobwebConfig$stable = 8;
    }
  }
  function Anchor(href, attrs, openInternalLinksStrategy, openExternalLinksStrategy, updateHistoryMode, content, $composer, $changed, $default) {
    var attrs_0 = {_v: attrs};
    var openInternalLinksStrategy_0 = {_v: openInternalLinksStrategy};
    var openExternalLinksStrategy_0 = {_v: openExternalLinksStrategy};
    var updateHistoryMode_0 = {_v: updateHistoryMode};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.e1h(1682374411);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.r1h(href) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.u1h(attrs_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0) {
      var tmp;
      var tmp_0 = $composer_0;
      var tmpEnum = openInternalLinksStrategy_0._v;
      if (tmp_0.t1h(tmpEnum == null ? -1 : tmpEnum.l2_1)) {
        tmp = 256;
      } else {
        tmp = 128;
      }
      $dirty = $dirty | tmp;
    }
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0) {
      var tmp_1;
      var tmp_2 = $composer_0;
      var tmpEnum_0 = openExternalLinksStrategy_0._v;
      if (tmp_2.t1h(tmpEnum_0 == null ? -1 : tmpEnum_0.l2_1)) {
        tmp_1 = 2048;
      } else {
        tmp_1 = 1024;
      }
      $dirty = $dirty | tmp_1;
    }
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0) {
      var tmp_3;
      var tmp_4 = $composer_0;
      var tmpEnum_1 = updateHistoryMode_0._v;
      if (tmp_4.t1h(tmpEnum_1 == null ? -1 : tmpEnum_1.l2_1)) {
        tmp_3 = 16384;
      } else {
        tmp_3 = 8192;
      }
      $dirty = $dirty | tmp_3;
    }
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.u1h(content_0._v) ? 131072 : 65536);
    if ($composer_0.w1h(!(($dirty & 74899) === 74898), $dirty & 1)) {
      if (!(($default & 2) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 4) === 0)) {
        openInternalLinksStrategy_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        openExternalLinksStrategy_0._v = null;
      }
      if (!(($default & 16) === 0)) {
        updateHistoryMode_0._v = null;
      }
      if (!(($default & 32) === 0)) {
        content_0._v = null;
      }
      var ctx = rememberPageContext($composer_0, 0);
      var tmp_5 = Companion_instance_4.w3g(href);
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(!!(!!(!!(!!(($dirty & 112) === 32 | ($dirty & 896) === 256) | ($dirty & 7168) === 2048) | $composer_0.u1h(ctx)) | ($dirty & 14) === 4) | ($dirty & 57344) === 16384);
      // Inline function 'kotlin.let' call
      var it = tmp0.p1h();
      var tmp_6;
      if (invalid || it === Companion_getInstance().r1g_1) {
        var value = Anchor$lambda(attrs_0, openInternalLinksStrategy_0, openExternalLinksStrategy_0, ctx, href, updateHistoryMode_0);
        tmp0.q1h(value);
        tmp_6 = value;
      } else {
        tmp_6 = it;
      }
      var tmp_7 = tmp_6;
      var tmp$ret$3 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
      A(tmp_5, tmp$ret$3, content_0._v, $composer_0, 896 & $dirty >> 9, 0);
    } else {
      $composer_0.j1h();
    }
    var tmp0_safe_receiver = $composer_0.f1h();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y21(Anchor$lambda_0(href, attrs_0, openInternalLinksStrategy_0, openExternalLinksStrategy_0, updateHistoryMode_0, content_0, $changed, $default));
    }
  }
  function Anchor$lambda$lambda($openInternalLinksStrategy, $openExternalLinksStrategy, $ctx, $href, $updateHistoryMode) {
    return function (evt) {
      var tmp0_elvis_lhs = $openInternalLinksStrategy._v;
      var openInternalLinksStrategy = tmp0_elvis_lhs == null ? toOpenLinkStrategy(evt, Companion_instance_3.r3g().q3g().u3g()) : tmp0_elvis_lhs;
      var tmp1_elvis_lhs = $openExternalLinksStrategy._v;
      var openExternalLinksStrategy = tmp1_elvis_lhs == null ? toOpenLinkStrategy(evt, Companion_instance_3.r3g().q3g().v3g()) : tmp1_elvis_lhs;
      var tmp2_elvis_lhs = $updateHistoryMode._v;
      $ctx.o3f_1.i3h($href, tmp2_elvis_lhs == null ? UpdateHistoryMode_PUSH_getInstance() : tmp2_elvis_lhs, openInternalLinksStrategy, openExternalLinksStrategy);
      evt.y34();
      evt.z34();
      return Unit_instance;
    };
  }
  function Anchor$lambda($attrs, $openInternalLinksStrategy, $openExternalLinksStrategy, $ctx, $href, $updateHistoryMode) {
    return function ($this$A) {
      var tmp;
      if (!($attrs._v == null)) {
        tmp = $attrs._v($this$A);
      }
      $this$A.f31(Anchor$lambda$lambda($openInternalLinksStrategy, $openExternalLinksStrategy, $ctx, $href, $updateHistoryMode));
      return Unit_instance;
    };
  }
  function Anchor$lambda_0($href, $attrs, $openInternalLinksStrategy, $openExternalLinksStrategy, $updateHistoryMode, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Anchor($href, $attrs._v, $openInternalLinksStrategy._v, $openExternalLinksStrategy._v, $updateHistoryMode._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var com_varabyte_kobweb_navigation_BasePathImpl$stable;
  function Companion_1() {
  }
  protoOf(Companion_1).j3h = function (value) {
    Companion_instance_5.l3h(new BasePathImpl(value));
  };
  protoOf(Companion_1).t1 = function () {
    return Companion_instance_5.n3h().m3h_1;
  };
  protoOf(Companion_1).w3g = function (path) {
    return Companion_instance_5.n3h().w3g(path);
  };
  var Companion_instance_4;
  function Companion_getInstance_2() {
    return Companion_instance_4;
  }
  function Companion_2() {
    this.k3h_1 = null;
  }
  protoOf(Companion_2).l3h = function (value) {
    // Inline function 'kotlin.check' call
    if (!(this.k3h_1 == null)) {
      var message = 'Cannot overwrite base path once set';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.k3h_1 = value;
  };
  protoOf(Companion_2).o3h = function () {
    if (this.k3h_1 == null) {
      this.k3h_1 = new BasePathImpl('');
    }
    return this.k3h_1;
  };
  protoOf(Companion_2).n3h = function () {
    return ensureNotNull(this.o3h());
  };
  var Companion_instance_5;
  function Companion_getInstance_3() {
    return Companion_instance_5;
  }
  function BasePathImpl(value) {
    var tmp = this;
    // Inline function 'kotlin.takeIf' call
    var tmp_0;
    // Inline function 'kotlin.text.isNotBlank' call
    if (!isBlank(value)) {
      tmp_0 = value;
    } else {
      tmp_0 = null;
    }
    var tmp0_safe_receiver = tmp_0;
    var tmp_1;
    if (tmp0_safe_receiver == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_1 = startsWith(tmp0_safe_receiver, _Char___init__impl__6a9atx(47)) ? tmp0_safe_receiver : '/' + tmp0_safe_receiver;
    }
    var tmp1_safe_receiver = tmp_1;
    var tmp_2;
    if (tmp1_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_2 = endsWith(tmp1_safe_receiver, _Char___init__impl__6a9atx(47)) ? tmp1_safe_receiver : tmp1_safe_receiver + '/';
    }
    var tmp2_elvis_lhs = tmp_2;
    tmp.m3h_1 = tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
  }
  protoOf(BasePathImpl).w3g = function (path) {
    if (isBlank(this.m3h_1))
      return path;
    if (!startsWith_0(path, '/'))
      return path;
    return dropLast(this.m3h_1, 1) + path;
  };
  protoOf(BasePathImpl).toString = function () {
    return this.m3h_1;
  };
  function remove(_this__u8e3s4, path) {
    var tmp;
    // Inline function 'kotlin.text.isNotEmpty' call
    var this_0 = _this__u8e3s4.t1();
    if (charSequenceLength(this_0) > 0) {
      tmp = removePrefix(path, dropLast(_this__u8e3s4.t1(), 1));
    } else {
      tmp = path;
    }
    return tmp;
  }
  function prependIf(_this__u8e3s4, condition, path) {
    return condition ? _this__u8e3s4.w3g(path) : path;
  }
  var OpenLinkStrategy_IN_PLACE_instance;
  var OpenLinkStrategy_IN_NEW_TAB_instance;
  var OpenLinkStrategy_entriesInitialized;
  function OpenLinkStrategy_initEntries() {
    if (OpenLinkStrategy_entriesInitialized)
      return Unit_instance;
    OpenLinkStrategy_entriesInitialized = true;
    OpenLinkStrategy_IN_PLACE_instance = new OpenLinkStrategy('IN_PLACE', 0);
    OpenLinkStrategy_IN_NEW_TAB_instance = new OpenLinkStrategy('IN_NEW_TAB', 1);
  }
  function OpenLinkStrategy(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function open(_this__u8e3s4, href, strategy) {
    switch (strategy.l2_1) {
      case 0:
        _this__u8e3s4.open(href, '_self');
        break;
      case 1:
        _this__u8e3s4.open(href, '_blank');
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
  }
  function toOpenLinkStrategy(_this__u8e3s4, default_0) {
    default_0 = default_0 === VOID ? OpenLinkStrategy_IN_PLACE_getInstance() : default_0;
    return _this__u8e3s4.r35_1 || _this__u8e3s4.d36_1 ? OpenLinkStrategy_IN_NEW_TAB_getInstance() : default_0;
  }
  function OpenLinkStrategy_IN_PLACE_getInstance() {
    OpenLinkStrategy_initEntries();
    return OpenLinkStrategy_IN_PLACE_instance;
  }
  function OpenLinkStrategy_IN_NEW_TAB_getInstance() {
    OpenLinkStrategy_initEntries();
    return OpenLinkStrategy_IN_NEW_TAB_instance;
  }
  var com_varabyte_kobweb_navigation_PageData$stable;
  function PageData(pageMethod, routeInfo) {
    this.p3h_1 = pageMethod;
    this.q3h_1 = routeInfo;
  }
  var com_varabyte_kobweb_navigation_RouteException$stable;
  var com_varabyte_kobweb_navigation_Route$stable;
  function Route_init_$Init$(path, queryParams, fragment, $this) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    this_0.m7(path);
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!queryParams.l()) {
      this_0.n7(_Char___init__impl__6a9atx(63));
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(queryParams.n());
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = queryParams.z1().i();
      while (_iterator__ex2g4s.j()) {
        var item = _iterator__ex2g4s.k();
        // Inline function 'kotlin.collections.component1' call
        var key = item.s1();
        // Inline function 'kotlin.collections.component2' call
        var value = item.t1();
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.apply' call
        var this_1 = StringBuilder_init_$Create$();
        this_1.m7(key);
        // Inline function 'kotlin.text.isNotEmpty' call
        if (charSequenceLength(value) > 0) {
          this_1.n7(_Char___init__impl__6a9atx(61));
          this_1.m7(value);
        }
        var tmp$ret$8 = this_1.toString();
        destination.h(tmp$ret$8);
      }
      this_0.m7(joinToString(destination, '&'));
    }
    if (!(fragment == null)) {
      this_0.n7(_Char___init__impl__6a9atx(35));
      this_0.m7(fragment);
    }
    var tmp$ret$13 = this_0.toString();
    Route.call($this, tmp$ret$13);
    return $this;
  }
  function Route_init_$Create$(path, queryParams, fragment) {
    return Route_init_$Init$(path, queryParams, fragment, objectCreate(protoOf(Route)));
  }
  function Companion_3() {
  }
  protoOf(Companion_3).r3h = function (pathQueryAndFragment) {
    var pathPart = substringBefore(substringBefore(pathQueryAndFragment, _Char___init__impl__6a9atx(63)), _Char___init__impl__6a9atx(35));
    return to(pathPart, removePrefix(pathQueryAndFragment, pathPart));
  };
  protoOf(Companion_3).s3h = function (url) {
    var tmp;
    if (!startsWith_0(url, '//')) {
      // Inline function 'kotlin.let' call
      var splitResult = split(url, ['://'], VOID, 2);
      tmp = splitResult.n() === 1 ? to('', splitResult.m(0)) : to(splitResult.m(0) + '://', trimStart(splitResult.m(1), charArrayOf([_Char___init__impl__6a9atx(47)])));
    } else {
      var withoutLeadingSlashes = trimStart(url, charArrayOf([_Char___init__impl__6a9atx(47)]));
      var domain = substringBefore(withoutLeadingSlashes, _Char___init__impl__6a9atx(47));
      tmp = to('//' + domain, substringAfter(withoutLeadingSlashes, domain));
    }
    var _destruct__k2r9zo = tmp;
    var prefix = _destruct__k2r9zo.me();
    var rest = _destruct__k2r9zo.ne();
    var _destruct__k2r9zo_0 = this.r3h(rest);
    var path = _destruct__k2r9zo_0.me();
    var queryAndFragment = _destruct__k2r9zo_0.ne();
    // Inline function 'kotlin.text.replace' call
    return prefix + Regex_init_$Create$('//+').ub(path, '/') + queryAndFragment;
  };
  protoOf(Companion_3).t3h = function (path) {
    return !(this.e2y(path) == null);
  };
  protoOf(Companion_3).e2y = function (path) {
    var tmp;
    try {
      tmp = new Route(path);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof RouteException) {
        var _unused_var__etf5q3 = $p;
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(Companion_3).u3h = function (url) {
    var tmp0_elvis_lhs = this.e2y(removePrefix(url.href, url.origin));
    return tmp0_elvis_lhs == null ? new Route('') : tmp0_elvis_lhs;
  };
  var Companion_instance_6;
  function Companion_getInstance_4() {
    return Companion_instance_6;
  }
  function Route(pathQueryAndFragment) {
    var pathQueryAndFragment_0 = !startsWith_0(pathQueryAndFragment, '//') ? pathQueryAndFragment : 'https:' + pathQueryAndFragment;
    var tmp;
    try {
      new URL(pathQueryAndFragment_0);
      tmp = false;
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var _unused_var__etf5q3 = $p;
        tmp_0 = true;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var isValidRoute = tmp;
    if (!isValidRoute) {
      throw new RouteException(pathQueryAndFragment_0);
    }
    this.a3g_1 = Companion_instance_6.s3h(pathQueryAndFragment);
    this.b3g_1 = new URL(this.a3g_1, 'http://unused.com');
    var isAbsolute = startsWith_0(this.a3g_1, '/');
    var tmp_1 = this;
    var tmp_2;
    if (isAbsolute) {
      tmp_2 = this.b3g_1.pathname;
    } else {
      // Inline function 'kotlin.also' call
      var this_0 = drop(this.b3g_1.pathname, 1);
      // Inline function 'kotlin.check' call
      if (!(first(this.b3g_1.pathname) === _Char___init__impl__6a9atx(47))) {
        throw IllegalStateException_init_$Create$('Check failed.');
      }
      tmp_2 = this_0;
    }
    tmp_1.c3g_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.apply' call
    var this_1 = LinkedHashMap_init_$Create$_0();
    $l$block: {
      // Inline function 'kotlin.text.isEmpty' call
      var this_2 = this.b3g_1.search;
      if (charSequenceLength(this_2) === 0) {
        break $l$block;
      }
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = split_0(removePrefix(this.b3g_1.search, '?'), charArrayOf([_Char___init__impl__6a9atx(38)])).i();
      while (_iterator__ex2g4s.j()) {
        var element = _iterator__ex2g4s.k();
        var keyValue = split_0(element, charArrayOf([_Char___init__impl__6a9atx(61)]), VOID, 2);
        var key = keyValue.m(0);
        // Inline function 'kotlin.collections.elementAtOrNull' call
        var tmp0_safe_receiver = getOrNull(keyValue, 1);
        var tmp_4;
        if (tmp0_safe_receiver == null) {
          tmp_4 = null;
        } else {
          // Inline function 'kotlin.let' call
          tmp_4 = decodeURIComponent(tmp0_safe_receiver);
        }
        var tmp1_elvis_lhs = tmp_4;
        // Inline function 'kotlin.collections.set' call
        var value = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
        this_1.a2(key, value);
      }
    }
    tmp_3.d3g_1 = this_1;
    var tmp_5 = this;
    // Inline function 'kotlin.takeIf' call
    var this_3 = this.b3g_1.hash;
    var tmp_6;
    if (startsWith_0(this_3, '#')) {
      tmp_6 = this_3;
    } else {
      tmp_6 = null;
    }
    var tmp0_safe_receiver_0 = tmp_6;
    var tmp1_safe_receiver = tmp0_safe_receiver_0 == null ? null : removePrefix(tmp0_safe_receiver_0, '#');
    var tmp_7;
    if (tmp1_safe_receiver == null) {
      tmp_7 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_7 = decodeURIComponent(tmp1_safe_receiver);
    }
    tmp_5.e3g_1 = tmp_7;
  }
  protoOf(Route).v3h = function (path, queryParams, fragment) {
    return Route_init_$Create$(path, queryParams, fragment);
  };
  protoOf(Route).w3h = function (path, queryParams, fragment, $super) {
    path = path === VOID ? this.c3g_1 : path;
    queryParams = queryParams === VOID ? this.d3g_1 : queryParams;
    fragment = fragment === VOID ? this.e3g_1 : fragment;
    return $super === VOID ? this.v3h(path, queryParams, fragment) : $super.v3h.call(this, path, queryParams, fragment);
  };
  protoOf(Route).toString = function () {
    return this.c3g_1 + this.b3g_1.search + this.b3g_1.hash;
  };
  function RouteException(value) {
    Exception_init_$Init$('Failed to create a route. Routes should be valid URLs without a leading domain. Got: ' + value, this);
    captureStack(this, RouteException);
  }
  function createPageData(_this__u8e3s4, route, errorPageMethod) {
    var self_0 = _this__u8e3s4;
    var tmp0_elvis_lhs = self_0.c38(route.c3g_1, true);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return new PageData(errorPageMethod, new RouteInfo(route, emptyMap()));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var resolved = tmp;
    var tmp1_elvis_lhs = last(resolved).v37_1.q36();
    var pageMethod = tmp1_elvis_lhs == null ? errorPageMethod : tmp1_elvis_lhs;
    // Inline function 'kotlin.collections.mutableMapOf' call
    var dynamicParams = LinkedHashMap_init_$Create$_0();
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = resolved.i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      var tmp_0 = element.v37_1;
      if (tmp_0 instanceof DynamicNode) {
        var tmp2 = element.v37_1.q2d();
        // Inline function 'kotlin.collections.set' call
        var value = element.w37_1;
        dynamicParams.a2(tmp2, value);
      }
    }
    return new PageData(pageMethod, new RouteInfo(route.w3h(toRouteString(resolved)), dynamicParams));
  }
  var com_varabyte_kobweb_navigation_RouteInterceptorScope$stable;
  var com_varabyte_kobweb_navigation_Router_RouteEntry$stable;
  var com_varabyte_kobweb_navigation_Router$stable;
  function _set_activePageMethod__f6z3vj($this, _set____db54di) {
    var tmp0 = $this.e3h_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Router$_get_activePageMethod_$ref_kzrggv_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('activePageMethod', 1, tmp, tmp_0, Router$_set_activePageMethod_$ref_yxu4h7_0());
    tmp0.b17(_set____db54di);
    return Unit_instance;
  }
  function _get_activePageMethod__dw5579($this) {
    var tmp0 = $this.e3h_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Router$_get_activePageMethod_$ref_kzrggv();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('activePageMethod', 1, tmp, tmp_0, Router$_set_activePageMethod_$ref_yxu4h7());
    return tmp0.t1();
  }
  function _set_scrollRequest__vmu5bx($this, _set____db54di) {
    var tmp0 = $this.h3h_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Router$_get_scrollRequest_$ref_4bly9p_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('scrollRequest', 1, tmp, tmp_0, Router$_set_scrollRequest_$ref_he6y0n_0());
    tmp0.b17(_set____db54di);
    return Unit_instance;
  }
  function _get_scrollRequest__o6ie4v($this) {
    var tmp0 = $this.h3h_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Router$_get_scrollRequest_$ref_4bly9p();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('scrollRequest', 1, tmp, tmp_0, Router$_set_scrollRequest_$ref_he6y0n());
    return tmp0.t1();
  }
  function updatePageContext($this, _this__u8e3s4, pathQueryAndFragment) {
    if (startsWith_0(pathQueryAndFragment, '#')) {
      var routeInfo = _this__u8e3s4.q3f_1.t1();
      if (!(routeInfo == null)) {
        _this__u8e3s4.q3f_1.b17(routeInfo.h3g(VOID, VOID, removePrefix(pathQueryAndFragment, '#')));
        return true;
      } else {
        return false;
      }
    }
    var route = Companion_instance_6.e2y(pathQueryAndFragment);
    var tmp;
    if (!(route == null)) {
      var data = createPageData($this.f3h_1, route, $this.x3g_1);
      var tmp0_safe_receiver = _this__u8e3s4.q3f_1.t1();
      var previousRoutePath = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.w3f_1;
      _set_activePageMethod__f6z3vj($this, data.p3h_1);
      _this__u8e3s4.r3f(data.q3h_1);
      if (!(previousRoutePath === route.c3g_1)) {
        // Inline function 'kotlin.collections.mutableListOf' call
        var initRouteMethods = ArrayList_init_$Create$_0();
        var tmp0 = $this.c3h_1;
        // Inline function 'kotlin.collections.get' call
        var key = _get_activePageMethod__dw5579($this);
        var tmp1_safe_receiver = (isInterface(tmp0, KtMap) ? tmp0 : THROW_CCE()).w1(key);
        if (tmp1_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          initRouteMethods.h(tmp1_safe_receiver);
        }
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s = $this.x3h(data.p3h_1).i();
        while (_iterator__ex2g4s.j()) {
          var element = _iterator__ex2g4s.k();
          var tmp0_safe_receiver_0 = $this.d3h_1.w1(element);
          if (tmp0_safe_receiver_0 == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            initRouteMethods.h(tmp0_safe_receiver_0);
          }
        }
        $this.y3g_1.d2();
        var ctx = new InitRouteContext(data.q3h_1, $this.y3g_1);
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s_0 = initRouteMethods.i();
        while (_iterator__ex2g4s_0.j()) {
          var element_0 = _iterator__ex2g4s_0.k();
          element_0(ctx);
        }
      }
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function normalize($this, _this__u8e3s4) {
    // Inline function 'kotlin.check' call
    if (!Companion_instance_6.t3h(_this__u8e3s4)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    var hrefResolved = Companion_instance_6.u3h(new URL(Companion_instance_6.s3h(_this__u8e3s4), window.location.href)).toString();
    // Inline function 'kotlin.takeIf' call
    var this_0 = remove(Companion_instance_4, hrefResolved);
    var tmp;
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(this_0) > 0) {
      tmp = this_0;
    } else {
      tmp = null;
    }
    var tmp0_elvis_lhs = tmp;
    var withoutPrefix = tmp0_elvis_lhs == null ? '/' : tmp0_elvis_lhs;
    var hadPrefix = !(withoutPrefix === hrefResolved);
    var tmp_0 = Companion_instance_4;
    var tmp0 = $this.g3h_1;
    // Inline function 'kotlin.collections.fold' call
    var accumulator = (new Route(withoutPrefix)).toString();
    var _iterator__ex2g4s = tmp0.i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      var acc = accumulator;
      var interceptor = new RouteInterceptorScope(acc);
      element(interceptor);
      accumulator = Companion_instance_6.s3h(interceptor.f3g());
    }
    var tmp$ret$5 = accumulator;
    return prependIf(tmp_0, hadPrefix, tmp$ret$5);
  }
  function includesHost($this, _this__u8e3s4) {
    return contains(_this__u8e3s4, '://') || startsWith_0(_this__u8e3s4, '//');
  }
  function resolvesToSameOrigin($this, _this__u8e3s4) {
    var resolvedUrl = new URL(_this__u8e3s4, window.location.href);
    return resolvedUrl.origin === window.location.origin;
  }
  function Router$_get_activePageMethod_$ref_kzrggv() {
    return function (p0) {
      return _get_activePageMethod__dw5579(p0);
    };
  }
  function Router$_set_activePageMethod_$ref_yxu4h7() {
    return function (p0, p1) {
      _set_activePageMethod__f6z3vj(p0, p1);
      return Unit_instance;
    };
  }
  function Router$_get_activePageMethod_$ref_kzrggv_0() {
    return function (p0) {
      return _get_activePageMethod__dw5579(p0);
    };
  }
  function Router$_set_activePageMethod_$ref_yxu4h7_0() {
    return function (p0, p1) {
      _set_activePageMethod__f6z3vj(p0, p1);
      return Unit_instance;
    };
  }
  function Router$_get_scrollRequest_$ref_4bly9p() {
    return function (p0) {
      return _get_scrollRequest__o6ie4v(p0);
    };
  }
  function Router$_set_scrollRequest_$ref_he6y0n() {
    return function (p0, p1) {
      _set_scrollRequest__vmu5bx(p0, p1);
      return Unit_instance;
    };
  }
  function Router$_get_scrollRequest_$ref_4bly9p_0() {
    return function (p0) {
      return _get_scrollRequest__o6ie4v(p0);
    };
  }
  function Router$_set_scrollRequest_$ref_he6y0n_0() {
    return function (p0, p1) {
      _set_scrollRequest__vmu5bx(p0, p1);
      return Unit_instance;
    };
  }
  function Router$lambda(this$0) {
    return function (it) {
      var tmp = Companion_instance_2.m3f();
      // Inline function 'kotlin.let' call
      var it_0 = ensureNotNull(document.location);
      var tmp$ret$1 = removePrefix(it_0.href, it_0.origin);
      return updatePageContext(this$0, tmp, tmp$ret$1);
    };
  }
  function Router$renderActivePage$$inlined$run$2$2$2$1() {
  }
  protoOf(Router$renderActivePage$$inlined$run$2$2$2$1).kt = function () {
  };
  function Router$renderActivePage$lambda$lambda$lambda(this$0) {
    return function ($this$DisposableEffect) {
      var tmp0_safe_receiver = _get_scrollRequest__o6ie4v(this$0);
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver();
      _set_scrollRequest__vmu5bx(this$0, null);
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new Router$renderActivePage$$inlined$run$2$2$2$1();
    };
  }
  function Router$renderActivePage$lambda$lambda$lambda_0($pageMethod) {
    return function (ctx, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.a1h(850244467, Companion_instance_2.m3f().s3f().w3f_1);
      $pageMethod(ctx, $composer_0, 14 & $changed);
      $composer_0.b1h();
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.x2n(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function Router$renderActivePage$lambda$lambda$lambda_1($layout, $accum) {
    return function (ctx, $composer, $changed) {
      var $composer_0 = $composer;
      $layout(ctx, $accum, $composer_0, 14 & $changed);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_0(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.x2n(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function Router$renderActivePage$lambda$lambda(this$0, $pageMethod) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.w1h(!(($changed & 3) === 2), $changed & 1)) {
        var tmp_0 = _get_scrollRequest__o6ie4v(this$0);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_0.u1h(this$0);
        // Inline function 'kotlin.let' call
        var it = $composer_0.p1h();
        var tmp_1;
        if (invalid || it === Companion_getInstance().r1g_1) {
          var value = Router$renderActivePage$lambda$lambda$lambda(this$0);
          $composer_0.q1h(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp$ret$3 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        DisposableEffect(tmp_0, tmp$ret$3, $composer_0, 0);
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-973415845, true, Router$renderActivePage$lambda$lambda$lambda_0($pageMethod), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_1.r1h(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it_0 = $composer_1.p1h();
        var tmp_3;
        if (invalid_0 || it_0 === Companion_getInstance().r1g_1) {
          var value_0 = ComposableLambda$invoke$ref(dispatchReceiver);
          $composer_1.q1h(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        var keyedPageMethod = tmp0;
        $composer_0.y1g(1960057240);
        // Inline function 'kotlin.collections.foldRight' call
        var this_0 = asReversed(this$0.x3h($pageMethod));
        var accumulator = keyedPageMethod;
        if (!this_0.l()) {
          var iterator = this_0.s(this_0.n());
          while (iterator.u3()) {
            var tmp0_0 = iterator.w3();
            var accum = accumulator;
            // Inline function 'kotlin.run' call
            var dispatchReceiver_0 = rememberComposableLambda(1052452521, true, Router$renderActivePage$lambda$lambda$lambda_1(tmp0_0, accum), $composer_0, 54);
            // Inline function 'androidx.compose.runtime.remember' call
            var $composer_2 = $composer_0;
            sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
            // Inline function 'androidx.compose.runtime.cache' call
            var invalid_1 = $composer_2.r1h(dispatchReceiver_0);
            // Inline function 'kotlin.let' call
            var it_1 = $composer_2.p1h();
            var tmp_5;
            if (invalid_1 || it_1 === Companion_getInstance().r1g_1) {
              var value_1 = ComposableLambda$invoke$ref_0(dispatchReceiver_0);
              $composer_2.q1h(value_1);
              tmp_5 = value_1;
            } else {
              tmp_5 = it_1;
            }
            var tmp_6 = tmp_5;
            var tmp0_1 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
            sourceInformationMarkerEnd($composer_2);
            accumulator = tmp0_1;
          }
        }
        var tmp0_group = accumulator;
        $composer_0.z1g();
        tmp = tmp0_group(Companion_instance_2.m3f(), $composer_0, 0);
      } else {
        $composer_0.j1h();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_1(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.u1v(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function Router$renderActivePage$lambda($pageWrapper, this$0, $pageMethod) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.w1h(!(($changed & 3) === 2), $changed & 1)) {
        var tmp_0 = $pageWrapper._v;
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-1343210329, true, Router$renderActivePage$lambda$lambda(this$0, $pageMethod), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.r1h(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.p1h();
        var tmp_1;
        if (invalid || it === Companion_getInstance().r1g_1) {
          var value = ComposableLambda$invoke$ref_1(dispatchReceiver);
          $composer_1.q1h(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        tmp = tmp_0(tmp0, $composer_0, 6);
      } else {
        $composer_0.j1h();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_2(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.u1v(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function Router$renderActivePage$lambda_0($tmp0_rcvr, $pageWrapper, $$changed, $$default) {
    return function ($composer, $force) {
      $tmp0_rcvr.c3i($pageWrapper._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Router$tryRoutingTo$lambda() {
    var tmp = window;
    // Inline function 'org.w3c.dom.INSTANT' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'org.w3c.dom.ScrollToOptions' call
    var o = {};
    o['left'] = 0.0;
    o['top'] = 0.0;
    o['behavior'] = 'instant';
    tmp.scroll(o);
    return Unit_instance;
  }
  function Router$tryRoutingTo$lambda_0($url) {
    return function () {
      var tmp0_safe_receiver = document.getElementById(substringAfter_0($url, _Char___init__impl__6a9atx(35)));
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.scrollIntoView();
      }
      return Unit_instance;
    };
  }
  function Router() {
    this.x3g_1 = ComposableSingletons$RouterKt_getInstance().e3i_1;
    this.y3g_1 = new MutableData();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.apply' call
    var this_0 = LinkedHashMap_init_$Create$_0();
    var tmp2 = 'com.varabyte.kobweb.core.layout.NoLayout';
    // Inline function 'kotlin.collections.set' call
    var value = ComposableSingletons$RouterKt_getInstance().f3i_1;
    this_0.a2(tmp2, value);
    tmp.z3g_1 = this_0;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.apply' call
    var this_1 = LinkedHashMap_init_$Create$_0();
    var tmp2_0 = this.x3g_1;
    // Inline function 'kotlin.collections.set' call
    var value_0 = 'com.varabyte.kobweb.core.layout.NoLayout';
    this_1.a2(tmp2_0, value_0);
    tmp_0.a3h_1 = this_1;
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_1.b3h_1 = LinkedHashMap_init_$Create$_0();
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_2.c3h_1 = LinkedHashMap_init_$Create$_0();
    var tmp_3 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_3.d3h_1 = LinkedHashMap_init_$Create$_0();
    this.e3h_1 = mutableStateOf(null);
    this.f3h_1 = new RouteTree();
    var tmp_4 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_4.g3h_1 = ArrayList_init_$Create$_0();
    this.h3h_1 = mutableStateOf(null);
    Companion_instance_2.n3f(this, this.y3g_1);
    var tmp_5 = window;
    tmp_5.onpopstate = Router$lambda(this);
  }
  protoOf(Router).x3h = function (_this__u8e3s4) {
    var tmp0_safe_receiver = this.a3h_1.w1(_this__u8e3s4);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = this.z3g_1.w1(tmp0_safe_receiver);
    }
    var layoutMethod = tmp;
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$_0();
    while (!(layoutMethod == null)) {
      this_0.h(layoutMethod);
      var tmp0_safe_receiver_0 = this.b3h_1.w1(layoutMethod);
      var tmp_0;
      if (tmp0_safe_receiver_0 == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp_0 = this.z3g_1.w1(tmp0_safe_receiver_0);
      }
      layoutMethod = tmp_0;
    }
    return this_0.s4();
  };
  protoOf(Router).c3i = function (pageWrapper, $composer, $changed, $default) {
    var pageWrapper_0 = {_v: pageWrapper};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.e1h(137063404);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.u1h(pageWrapper_0._v) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.u1h(this) ? 32 : 16);
    if ($composer_0.w1h(!(($dirty & 19) === 18), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        pageWrapper_0._v = ComposableSingletons$RouterKt_getInstance().g3i_1;
      }
      var tmp0_elvis_lhs = _get_activePageMethod__dw5579(this);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        var message = "Make sure you have visited a page (via `navigateTo` or `tryRoutingTo`) at least once before calling 'renderActivePage'";
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var pageMethod = tmp;
      var tmp_0 = get_PageContextLocal().t21(Companion_instance_2.m3f());
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(248233772, true, Router$renderActivePage$lambda(pageWrapper_0, this, pageMethod), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.r1h(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.p1h();
      var tmp_1;
      if (invalid || it === Companion_getInstance().r1g_1) {
        var value = ComposableLambda$invoke$ref_2(dispatchReceiver);
        $composer_1.q1h(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      CompositionLocalProvider(tmp_0, tmp0, $composer_0, 48 | androidx_compose_runtime_ProvidedValue$stableprop_getter());
    } else {
      $composer_0.j1h();
    }
    var tmp1_safe_receiver = $composer_0.f1h();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.y21(Router$renderActivePage$lambda_0(this, pageWrapper_0, $changed, $default));
    }
  };
  protoOf(Router).h3i = function (layoutId, parentLayoutId, initRouteMethod, layoutMethod) {
    // Inline function 'kotlin.collections.set' call
    this.z3g_1.a2(layoutId, layoutMethod);
    if (parentLayoutId == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.collections.set' call
      this.b3h_1.a2(layoutMethod, parentLayoutId);
    }
    if (initRouteMethod == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.collections.set' call
      this.d3h_1.a2(layoutMethod, initRouteMethod);
    }
  };
  protoOf(Router).i3i = function (layoutId, parentLayoutId, initRouteMethod, layoutMethod, $super) {
    parentLayoutId = parentLayoutId === VOID ? null : parentLayoutId;
    initRouteMethod = initRouteMethod === VOID ? null : initRouteMethod;
    var tmp;
    if ($super === VOID) {
      this.h3i(layoutId, parentLayoutId, initRouteMethod, layoutMethod);
      tmp = Unit_instance;
    } else {
      tmp = $super.h3i.call(this, layoutId, parentLayoutId, initRouteMethod, layoutMethod);
    }
    return tmp;
  };
  protoOf(Router).j3i = function (route, layoutId, initRouteMethod, pageMethod) {
    // Inline function 'kotlin.require' call
    if (!(Companion_instance_6.t3h(route) && startsWith(route, _Char___init__impl__6a9atx(47)))) {
      var message = 'Registration only allowed for internal, rooted routes, e.g. /example/path. Got: ' + route;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!this.f3h_1.e38(Companion_instance_4.w3g(route), pageMethod)) {
      var message_0 = 'Registration failure. Path is already registered: ' + route;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    if (layoutId == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.collections.set' call
      this.a3h_1.a2(pageMethod, layoutId);
    }
    if (initRouteMethod == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.collections.set' call
      this.c3h_1.a2(pageMethod, initRouteMethod);
    }
  };
  protoOf(Router).k3i = function (interceptor) {
    this.g3h_1.h(interceptor);
  };
  protoOf(Router).l3i = function (pathQueryAndFragment, updateHistoryMode, openLinkStrategy, routeToErrorPageOnFail) {
    if (includesHost(this, pathQueryAndFragment))
      return false;
    var pathQueryAndFragment_0 = Companion_instance_4.w3g(pathQueryAndFragment);
    if (Companion_instance_6.t3h(pathQueryAndFragment_0)) {
      pathQueryAndFragment_0 = normalize(this, pathQueryAndFragment_0);
      // Inline function 'kotlin.run' call
      var _destruct__k2r9zo = Companion_instance_6.r3h(pathQueryAndFragment_0);
      var pathPart = _destruct__k2r9zo.me();
      var queryAndFragmentPart = _destruct__k2r9zo.ne();
      if (!(pathPart === '/')) {
        if (!this.f3h_1.d38(pathPart)) {
          if (endsWith(pathPart, _Char___init__impl__6a9atx(47))) {
            var withoutSlash = removeSuffix(pathPart, '/');
            if (this.f3h_1.d38(withoutSlash)) {
              pathQueryAndFragment_0 = withoutSlash + queryAndFragmentPart;
            }
          } else {
            var withSlash = pathPart + '/';
            if (this.f3h_1.d38(withSlash)) {
              pathQueryAndFragment_0 = withSlash + queryAndFragmentPart;
            }
          }
        }
      }
      if (!routeToErrorPageOnFail) {
        var pathPart_0 = Companion_instance_6.r3h(pathQueryAndFragment_0).me();
        if (!this.f3h_1.d38(pathPart_0)) {
          return false;
        }
      }
    }
    if (!openLinkStrategy.equals(OpenLinkStrategy_IN_PLACE_getInstance())) {
      open(window, pathQueryAndFragment_0, openLinkStrategy);
      return true;
    }
    var tmp;
    if (updatePageContext(this, Companion_instance_2.m3f(), pathQueryAndFragment_0)) {
      pathQueryAndFragment_0 = Companion_instance_2.m3f().s3f().w3f_1 + Companion_instance_6.r3h(pathQueryAndFragment_0).le_1;
      // Inline function 'kotlin.let' call
      var url = window.location.origin + pathQueryAndFragment_0;
      var onNewPage = !(window.location.pathname === Companion_instance_6.u3h(new URL(url)).c3g_1);
      if (!(window.location.href === url)) {
        switch (updateHistoryMode.l2_1) {
          case 0:
            window.history.pushState(window.history.state, '', url);
            break;
          case 1:
            window.history.replaceState(window.history.state, '', url);
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        if (onNewPage) {
          _set_scrollRequest__vmu5bx(this, Router$tryRoutingTo$lambda);
        }
      }
      if (contains_0(url, _Char___init__impl__6a9atx(35))) {
        _set_scrollRequest__vmu5bx(this, Router$tryRoutingTo$lambda_0(url));
      }
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Router).m3i = function (pathQueryAndFragment, updateHistoryMode, openLinkStrategy, routeToErrorPageOnFail, $super) {
    updateHistoryMode = updateHistoryMode === VOID ? UpdateHistoryMode_PUSH_getInstance() : updateHistoryMode;
    openLinkStrategy = openLinkStrategy === VOID ? OpenLinkStrategy_IN_PLACE_getInstance() : openLinkStrategy;
    routeToErrorPageOnFail = routeToErrorPageOnFail === VOID ? true : routeToErrorPageOnFail;
    return $super === VOID ? this.l3i(pathQueryAndFragment, updateHistoryMode, openLinkStrategy, routeToErrorPageOnFail) : $super.l3i.call(this, pathQueryAndFragment, updateHistoryMode, openLinkStrategy, routeToErrorPageOnFail);
  };
  protoOf(Router).i3h = function (pathQueryAndFragment, updateHistoryMode, openInternalLinksStrategy, openExternalLinksStrategy) {
    if (!this.l3i(pathQueryAndFragment, updateHistoryMode, openInternalLinksStrategy, false)) {
      var tmp = window;
      var tmp_0 = Companion_instance_6.s3h(pathQueryAndFragment);
      var tmp_1;
      if (resolvesToSameOrigin(this, pathQueryAndFragment)) {
        tmp_1 = openInternalLinksStrategy;
      } else {
        tmp_1 = openExternalLinksStrategy;
      }
      open(tmp, tmp_0, tmp_1);
    }
  };
  function ComposableLambda$invoke$ref_3(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.x2n(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$RouterKt$lambda$215212537$lambda($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Page Not Found', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_4(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.x2n(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$RouterKt$lambda$_1582477545$lambda_kdntrc(ctx, $composer, $changed) {
    var $composer_0 = $composer;
    DefaultErrorPage($composer_0, 0);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_5(p0) {
    return function (_this__u8e3s4, p0_0, p1, p2) {
      p0.y2n(_this__u8e3s4, p0_0, p1, p2);
      return Unit_instance;
    };
  }
  function ComposableSingletons$RouterKt$lambda$_1070949088$lambda_malff6(ctx, content, $composer, $changed) {
    var $composer_0 = $composer;
    content(ctx, $composer_0, 14 & $changed | 112 & $changed);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_6(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.x2n(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$RouterKt$lambda$_149473399$lambda_vw12th(it, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.u1h(it) ? 4 : 2);
    if ($composer_0.w1h(!(($dirty & 19) === 18), $dirty & 1)) {
      it($composer_0, 14 & $dirty);
    } else {
      $composer_0.j1h();
    }
    return Unit_instance;
  }
  function ComposableSingletons$RouterKt() {
    ComposableSingletons$RouterKt_instance = this;
    var tmp = this;
    tmp.d3i_1 = ComposableLambda$invoke$ref_3(composableLambdaInstance(215212537, false, ComposableSingletons$RouterKt$lambda$215212537$lambda));
    var tmp_0 = this;
    tmp_0.e3i_1 = ComposableLambda$invoke$ref_4(composableLambdaInstance(-1582477545, false, ComposableSingletons$RouterKt$lambda$_1582477545$lambda_kdntrc));
    var tmp_1 = this;
    tmp_1.f3i_1 = ComposableLambda$invoke$ref_5(composableLambdaInstance(-1070949088, false, ComposableSingletons$RouterKt$lambda$_1070949088$lambda_malff6));
    var tmp_2 = this;
    tmp_2.g3i_1 = ComposableLambda$invoke$ref_6(composableLambdaInstance(-149473399, false, ComposableSingletons$RouterKt$lambda$_149473399$lambda_vw12th));
  }
  var ComposableSingletons$RouterKt_instance;
  function ComposableSingletons$RouterKt_getInstance() {
    if (ComposableSingletons$RouterKt_instance == null)
      new ComposableSingletons$RouterKt();
    return ComposableSingletons$RouterKt_instance;
  }
  function RouteInterceptorScope(pathQueryAndFragment) {
    this.y3h_1 = new Route(pathQueryAndFragment);
    this.z3h_1 = this.y3h_1.c3g_1;
    this.a3i_1 = toMutableMap(this.y3h_1.d3g_1);
    this.b3i_1 = this.y3h_1.e3g_1;
  }
  protoOf(RouteInterceptorScope).n3i = function (value) {
    this.z3h_1 = startsWith(value, _Char___init__impl__6a9atx(47)) ? value : '/' + value;
  };
  protoOf(RouteInterceptorScope).f3g = function () {
    return Route_init_$Create$(this.z3h_1, this.a3i_1, this.b3i_1).toString();
  };
  var UpdateHistoryMode_PUSH_instance;
  var UpdateHistoryMode_REPLACE_instance;
  var UpdateHistoryMode_entriesInitialized;
  function UpdateHistoryMode_initEntries() {
    if (UpdateHistoryMode_entriesInitialized)
      return Unit_instance;
    UpdateHistoryMode_entriesInitialized = true;
    UpdateHistoryMode_PUSH_instance = new UpdateHistoryMode('PUSH', 0);
    UpdateHistoryMode_REPLACE_instance = new UpdateHistoryMode('REPLACE', 1);
  }
  function UpdateHistoryMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function DefaultErrorPage($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.e1h(1831390232);
    if ($composer_0.w1h(!($changed === 0), $changed & 1)) {
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      var it = this_0.p1h();
      var tmp;
      if (false || it === Companion_getInstance().r1g_1) {
        var value = DefaultErrorPage$lambda;
        this_0.q1h(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      Div(tmp$ret$3, ComposableSingletons$RouterKt_getInstance().d3i_1, $composer_0, 54, 0);
    } else {
      $composer_0.j1h();
    }
    var tmp0_safe_receiver = $composer_0.f1h();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y21(DefaultErrorPage$lambda_0($changed));
    }
  }
  function com_varabyte_kobweb_navigation_Router$stableprop_getter() {
    return com_varabyte_kobweb_navigation_Router$stable;
  }
  function DefaultErrorPage$lambda($this$Div) {
    $this$Div.z30(DefaultErrorPage$lambda$lambda);
    return Unit_instance;
  }
  function DefaultErrorPage$lambda$lambda($this$style) {
    width($this$style, get_percent(100));
    height($this$style, get_vh(100));
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    display($this$style, 'flex');
    alignItems($this$style, Companion_instance_0.r38());
    justifyContent($this$style, Companion_instance_1.r38());
    return Unit_instance;
  }
  function DefaultErrorPage$lambda_0($$changed) {
    return function ($composer, $force) {
      DefaultErrorPage($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function UpdateHistoryMode_PUSH_getInstance() {
    UpdateHistoryMode_initEntries();
    return UpdateHistoryMode_PUSH_instance;
  }
  function UpdateHistoryMode_REPLACE_getInstance() {
    UpdateHistoryMode_initEntries();
    return UpdateHistoryMode_REPLACE_instance;
  }
  var com_varabyte_kobweb_streams_ApiStreamListener_ConnectedContext$stable;
  var com_varabyte_kobweb_streams_ApiStreamListener_TextReceivedContext$stable;
  var com_varabyte_kobweb_streams_ApiStreamListener_DisconnectedContext$stable;
  var com_varabyte_kobweb_streams_ApiStream_WebSocketChannel$stable;
  var com_varabyte_kobweb_streams_ApiStream$stable;
  //region block: init
  com_varabyte_kobweb_core_AppGlobals$stable = 8;
  AppGlobals_instance = new AppGlobals();
  Companion_instance_2 = new Companion();
  com_varabyte_kobweb_core_data_MutableData$stable = 0;
  com_varabyte_kobweb_core_init_InitKobwebContext$stable = 8;
  com_varabyte_kobweb_core_init_InitRouteContext$stable = 8;
  Companion_instance_3 = new Companion_0();
  com_varabyte_kobweb_navigation_BasePathImpl$stable = 0;
  Companion_instance_4 = new Companion_1();
  Companion_instance_5 = new Companion_2();
  com_varabyte_kobweb_navigation_PageData$stable = 8;
  com_varabyte_kobweb_navigation_RouteException$stable = 8;
  com_varabyte_kobweb_navigation_Route$stable = 8;
  Companion_instance_6 = new Companion_3();
  com_varabyte_kobweb_navigation_RouteInterceptorScope$stable = 8;
  com_varabyte_kobweb_navigation_Router_RouteEntry$stable = 0;
  com_varabyte_kobweb_navigation_Router$stable = 8;
  com_varabyte_kobweb_streams_ApiStreamListener_ConnectedContext$stable = 8;
  com_varabyte_kobweb_streams_ApiStreamListener_TextReceivedContext$stable = 8;
  com_varabyte_kobweb_streams_ApiStreamListener_DisconnectedContext$stable = 8;
  com_varabyte_kobweb_streams_ApiStream_WebSocketChannel$stable = 8;
  com_varabyte_kobweb_streams_ApiStream$stable = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = getValue;
  _.$_$.b = initKobweb;
  _.$_$.c = KobwebApp;
  _.$_$.d = com_varabyte_kobweb_core_PageContext$stableprop_getter;
  _.$_$.e = rememberPageContext;
  _.$_$.f = Anchor;
  _.$_$.g = Router;
  _.$_$.h = com_varabyte_kobweb_navigation_Router$stableprop_getter;
  _.$_$.i = remove;
  _.$_$.j = UpdateHistoryMode_REPLACE_getInstance;
  _.$_$.k = AppGlobals_instance;
  _.$_$.l = Companion_instance_4;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-kobweb-core.js.map
