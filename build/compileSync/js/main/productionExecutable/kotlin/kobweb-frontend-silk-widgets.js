(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kobweb-frontend-compose-html-ext.js', './html-html-core.js', './kotlin-kotlin-stdlib.js', './kobweb-frontend-kobweb-compose.js', './kobweb-frontend-silk-foundation.js', './androidx-compose-runtime-runtime.js', './kotlinx-coroutines-core.js', './kobweb-frontend-browser-ext.js', './kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kobweb-frontend-compose-html-ext.js'), require('./html-html-core.js'), require('./kotlin-kotlin-stdlib.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./kobweb-frontend-silk-foundation.js'), require('./androidx-compose-runtime-runtime.js'), require('./kotlinx-coroutines-core.js'), require('./kobweb-frontend-browser-ext.js'), require('./kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'));
  else {
    if (typeof globalThis['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof globalThis['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof globalThis['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof globalThis['kobweb-frontend-silk-foundation'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kobweb-frontend-silk-foundation' was not found. Please, check whether 'kobweb-frontend-silk-foundation' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof globalThis['androidx-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'androidx-compose-runtime-runtime' was not found. Please, check whether 'androidx-compose-runtime-runtime' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof globalThis['kobweb-frontend-browser-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kobweb-frontend-browser-ext' was not found. Please, check whether 'kobweb-frontend-browser-ext' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' was not found. Please, check whether 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    globalThis['kobweb-frontend-silk-widgets'] = factory(typeof globalThis['kobweb-frontend-silk-widgets'] === 'undefined' ? {} : globalThis['kobweb-frontend-silk-widgets'], globalThis['kobweb-frontend-compose-html-ext'], globalThis['html-html-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['kobweb-frontend-kobweb-compose'], globalThis['kobweb-frontend-silk-foundation'], globalThis['androidx-compose-runtime-runtime'], globalThis['kotlinx-coroutines-core'], globalThis['kobweb-frontend-browser-ext'], kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat);
  }
}(function (_, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_org_jetbrains_compose_html_html_core, kotlin_kotlin, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_com_varabyte_kobweb_silk_foundation, kotlin_androidx_compose_runtime_runtime, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_com_varabyte_kobweb_browser_ext, kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat) {
  'use strict';
  //region block: imports
  var StyleVariable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g;
  var StyleVariable_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.y2;
  var StyleVariable_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f;
  var KProperty1 = kotlin_kotlin.$_$.p8;
  var getPropertyCallableRef = kotlin_kotlin.$_$.j7;
  var protoOf = kotlin_kotlin.$_$.c8;
  var initMetadataForObject = kotlin_kotlin.$_$.r7;
  var Unit_instance = kotlin_kotlin.$_$.e2;
  var Companion_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v3;
  var fillMaxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d1;
  var Companion_instance_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.l;
  var borderBottom = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n;
  var tabIndex = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v2;
  var get_ariaDisabled = kotlin_com_varabyte_kobweb_silk_foundation.$_$.i;
  var get_hover = kotlin_com_varabyte_kobweb_silk_foundation.$_$.n;
  var not = kotlin_com_varabyte_kobweb_silk_foundation.$_$.p;
  var get_active = kotlin_com_varabyte_kobweb_silk_foundation.$_$.h;
  var Companion_instance_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d3;
  var cursor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a1;
  var Companion_instance_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.t3;
  var listOf = kotlin_kotlin.$_$.g4;
  var transition = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a3;
  var backgroundColor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m;
  var color = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z;
  var Companion_instance_3 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.u3;
  var userSelect = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c3;
  var get_cssRem = kotlin_org_jetbrains_compose_html_html_core.$_$.r1;
  var padding = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m2;
  var calc = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b;
  var VOID = kotlin_kotlin.$_$.c;
  var margin = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y1;
  var flexGrow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e1;
  var overflow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j2;
  var Companion_instance_4 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.o3;
  var CssStyle = kotlin_com_varabyte_kobweb_silk_foundation.$_$.u;
  var Companion_instance_5 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.g2;
  var base = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a1;
  var CssStyle_0 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.v;
  var StyleVariable_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e;
  var toPalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.n1;
  var objectCreate = kotlin_kotlin.$_$.b8;
  var initMetadataForCompanion = kotlin_kotlin.$_$.n7;
  var setVariable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t2;
  var Base = kotlin_com_varabyte_kobweb_silk_foundation.$_$.s;
  var initMetadataForClass = kotlin_kotlin.$_$.m7;
  var composableLambdaInstance = kotlin_androidx_compose_runtime_runtime.$_$.a;
  var Companion_instance_6 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.r3;
  var textAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w2;
  var get_em = kotlin_org_jetbrains_compose_html_html_core.$_$.t1;
  var marginBlock = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t1;
  var Companion_instance_7 = kotlin_org_jetbrains_compose_html_html_core.$_$.i;
  var display = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b1;
  var Companion_instance_8 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.y2;
  var alignItems = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i;
  var Companion_instance_9 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e3;
  var fontWeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h1;
  var fontSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g1;
  var gap = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j1;
  var lineHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q1;
  var borderLeft = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o;
  var padding_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o2;
  var margin_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w1;
  var borderRadius = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p;
  var Companion_instance_10 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.a3;
  var Colors_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r3;
  var boxShadow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v;
  var border = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r;
  var descendants = kotlin_com_varabyte_kobweb_silk_foundation.$_$.k;
  var marginBlock_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s1;
  var addVariant = kotlin_com_varabyte_kobweb_silk_foundation.$_$.x;
  var com_varabyte_kobweb_silk_style_CssStyle_Restricted_Base$stableprop_getter = kotlin_com_varabyte_kobweb_silk_foundation.$_$.d1;
  var com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter = kotlin_com_varabyte_kobweb_silk_foundation.$_$.c1;
  var ButtonType_Button_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.a;
  var com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b1;
  var toModifier = kotlin_com_varabyte_kobweb_silk_foundation.$_$.g1;
  var toModifier_0 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.h1;
  var thenIf = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l3;
  var toModifier_1 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.f1;
  var Companion_instance_11 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.h2;
  var get_isBright = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g;
  var ColorMode_DARK_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b2;
  var ColorMode_LIGHT_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.c2;
  var Companion_getInstance = kotlin_androidx_compose_runtime_runtime.$_$.f1;
  var THROW_CCE = kotlin_kotlin.$_$.ya;
  var onClick = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d2;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m3;
  var rememberComposableLambda = kotlin_androidx_compose_runtime_runtime.$_$.b;
  var sourceInformationMarkerStart = kotlin_androidx_compose_runtime_runtime.$_$.u;
  var sourceInformationMarkerEnd = kotlin_androidx_compose_runtime_runtime.$_$.t;
  var Button = kotlin_org_jetbrains_compose_html_html_core.$_$.k3;
  var Base_init_$Init$ = kotlin_com_varabyte_kobweb_silk_foundation.$_$.d2;
  var get_focusVisible = kotlin_com_varabyte_kobweb_silk_foundation.$_$.m;
  var height = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n1;
  var minWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b2;
  var Companion_instance_12 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.w3;
  var whiteSpace = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e3;
  var Companion_instance_13 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.v3;
  var verticalAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d3;
  var border_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s;
  var transition_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z2;
  var outline = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h2;
  var boxShadow_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u;
  var type = kotlin_org_jetbrains_compose_html_html_core.$_$.r;
  var com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.m2;
  var registerRefScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.q2;
  var Center_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p3;
  var CenterVertically_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t3;
  var com_varabyte_kobweb_compose_foundation_layout_Arrangement_Center$stableprop_getter = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e;
  var com_varabyte_kobweb_compose_ui_Alignment_CenterVertically$stableprop_getter = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j3;
  var Row = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c;
  var updateChangedFlags = kotlin_androidx_compose_runtime_runtime.$_$.z;
  var Companion_instance_14 = kotlin_org_jetbrains_compose_html_html_core.$_$.m;
  var position = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p2;
  var opacity = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g2;
  var size = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u2;
  var rowClasses = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f;
  var Keyframes = kotlin_com_varabyte_kobweb_silk_foundation.$_$.f;
  var addVariantBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.w;
  var paddingInline = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l2;
  var get_placeholder = kotlin_com_varabyte_kobweb_silk_foundation.$_$.q;
  var Companion_instance_15 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.z2;
  var appearance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j;
  var get_ariaInvalid = kotlin_com_varabyte_kobweb_silk_foundation.$_$.j;
  var get_disabled = kotlin_com_varabyte_kobweb_silk_foundation.$_$.l;
  var margin_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v1;
  var RectF_init_$Create$ = kotlin_com_varabyte_kobweb_silk_foundation.$_$.e2;
  var clip = kotlin_com_varabyte_kobweb_silk_foundation.$_$.v1;
  var overflow_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k2;
  var width = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f3;
  var minHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a2;
  var Companion_instance_16 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b3;
  var boxSizing = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w;
  var translateX = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b3;
  var ariaHidden = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l;
  var Companion_instance_17 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.x3;
  var com_varabyte_kobweb_compose_dom_svg_ViewBox$stableprop_getter = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.j2;
  var Path = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h2;
  var Circle = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f2;
  var SVGStrokeLineCap_Round_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.t2;
  var Group = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g2;
  var SVGStrokeLineJoin_Round_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.u2;
  var Svg = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.i2;
  var overflow_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.r1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.hb;
  var SVGStrokeType_CurrentColor_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.v2;
  var SVGFillType_None_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.s2;
  var SVGFillType_CurrentColor_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.r2;
  var SVGStrokeType_None_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.w2;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.w2;
  var borderTop = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q;
  var get_fr = kotlin_org_jetbrains_compose_html_html_core.$_$.z1;
  var gridTemplateColumns = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l1;
  var get_entries = kotlin_com_varabyte_kobweb_silk_foundation.$_$.g;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.e3;
  var mapCapacity = kotlin_kotlin.$_$.h4;
  var coerceAtLeast = kotlin_kotlin.$_$.f8;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.m;
  var NumberValue = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d;
  var get_cssClass = kotlin_com_varabyte_kobweb_silk_foundation.$_$.p1;
  var classNames = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x;
  var mutableStateOf = kotlin_androidx_compose_runtime_runtime.$_$.s;
  var Div = kotlin_org_jetbrains_compose_html_html_core.$_$.l3;
  var Companion_getInstance_0 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.f2;
  var get_useScope = kotlin_com_varabyte_kobweb_silk_foundation.$_$.i1;
  var androidx_compose_runtime_ProvidedValue$stableprop_getter = kotlin_androidx_compose_runtime_runtime.$_$.m;
  var CompositionLocalProvider = kotlin_androidx_compose_runtime_runtime.$_$.d;
  var KMutableProperty0 = kotlin_kotlin.$_$.m8;
  var getLocalDelegateReference = kotlin_kotlin.$_$.h7;
  var CoroutineImpl = kotlin_kotlin.$_$.w5;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var isInterface = kotlin_kotlin.$_$.u7;
  var asList = kotlin_kotlin.$_$.pb;
  var CssIdent = kotlin_com_varabyte_kobweb_browser_ext.$_$.a;
  var suffixedWith = kotlin_com_varabyte_kobweb_silk_foundation.$_$.t1;
  var isSuffixedWith = kotlin_com_varabyte_kobweb_silk_foundation.$_$.q1;
  var get_SilkTheme = kotlin_com_varabyte_kobweb_silk_foundation.$_$.w1;
  var withColorModeSuffixRemoved = kotlin_com_varabyte_kobweb_silk_foundation.$_$.u1;
  var initMetadataForLambda = kotlin_kotlin.$_$.q7;
  var LaunchedEffect = kotlin_androidx_compose_runtime_runtime.$_$.k;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var asStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var EventListenerManager = kotlin_com_varabyte_kobweb_browser_ext.$_$.b;
  var ensureNotNull = kotlin_kotlin.$_$.fb;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.g;
  var merge = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var onEach = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var asCoroutineDispatcher = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var launchIn = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var Enum = kotlin_kotlin.$_$.qa;
  var disposableRef = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.n2;
  var Box = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a;
  var Deferred = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b;
  var KMutableProperty1 = kotlin_kotlin.$_$.n8;
  var toDouble = kotlin_kotlin.$_$.ca;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.f1;
  var toString = kotlin_kotlin.$_$.d8;
  var initMetadataForInterface = kotlin_kotlin.$_$.p7;
  var top = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y2;
  var left = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o1;
  var IllegalStateException = kotlin_kotlin.$_$.ua;
  var onTransitionEnd = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e2;
  var refScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.o2;
  var EventListener = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.c;
  var ResizeObserver_init_$Create$ = kotlin_com_varabyte_kobweb_browser_ext.$_$.h;
  var numberToDouble = kotlin_kotlin.$_$.z7;
  var unaryMinus = kotlin_org_jetbrains_compose_html_html_core.$_$.d3;
  var margin_2 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u1;
  var right = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q2;
  var bottom = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t;
  var split = kotlin_kotlin.$_$.t9;
  var charSequenceLength = kotlin_kotlin.$_$.b7;
  var Br = kotlin_org_jetbrains_compose_html_html_core.$_$.j3;
  var SpanText = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a;
  var Column = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b;
  var Blue_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.i2;
  var Gray_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.j2;
  var Red_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.k2;
  var lightened = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h;
  var get_entries_0 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.o1;
  var registerStyleBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.e;
  var Companion_instance_18 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.c3;
  var colorScheme = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y;
  var KProperty0 = kotlin_kotlin.$_$.o8;
  var ariaDisabled = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k;
  var base_0 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.y;
  var base_1 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.z;
  var get_ms = kotlin_org_jetbrains_compose_html_html_core.$_$.s2;
  var ColorGroup = kotlin_com_varabyte_kobweb_silk_foundation.$_$.j1;
  var MutablePalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.k1;
  var com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup$stableprop_getter = kotlin_com_varabyte_kobweb_silk_foundation.$_$.l1;
  var com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter = kotlin_com_varabyte_kobweb_silk_foundation.$_$.m1;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(TabVars, 'TabVars');
  initMetadataForObject(CalloutVars, 'CalloutVars');
  initMetadataForCompanion(Companion);
  initMetadataForClass(CalloutType, 'CalloutType', VOID, Base);
  initMetadataForObject(ComposableSingletons$CalloutKt, 'ComposableSingletons$CalloutKt');
  initMetadataForObject(ButtonVars, 'ButtonVars');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(ButtonSize, 'ButtonSize', VOID, Base);
  initMetadataForObject(CheckboxVars, 'CheckboxVars');
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(CheckboxSize, 'CheckboxSize', VOID, Base);
  initMetadataForObject(InputVars, 'InputVars');
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(InputSize, 'InputSize', VOID, Base);
  initMetadataForObject(SwitchVars, 'SwitchVars');
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(SwitchSize, 'SwitchSize', VOID, Base);
  initMetadataForObject(ComposableSingletons$ExclaimIconKt, 'ComposableSingletons$ExclaimIconKt');
  initMetadataForObject(ComposableSingletons$InfoIconKt, 'ComposableSingletons$InfoIconKt');
  initMetadataForObject(ComposableSingletons$LightbulbIconKt, 'ComposableSingletons$LightbulbIconKt');
  initMetadataForObject(ComposableSingletons$MoonIconKt, 'ComposableSingletons$MoonIconKt');
  initMetadataForObject(ComposableSingletons$QuestionIconKt, 'ComposableSingletons$QuestionIconKt');
  initMetadataForObject(ComposableSingletons$QuoteIconKt, 'ComposableSingletons$QuoteIconKt');
  initMetadataForObject(ComposableSingletons$StopIconKt, 'ComposableSingletons$StopIconKt');
  initMetadataForObject(ComposableSingletons$SunIconKt, 'ComposableSingletons$SunIconKt');
  initMetadataForObject(ComposableSingletons$WarningIconKt, 'ComposableSingletons$WarningIconKt');
  initMetadataForClass(Fill, 'Fill', Fill);
  initMetadataForClass(Stroke, 'Stroke', Stroke);
  initMetadataForObject(DividerVars, 'DividerVars');
  initMetadataForObject(SurfaceVars, 'SurfaceVars');
  initMetadataForClass(Surface$$inlined$cache$2$2$1);
  initMetadataForLambda(Surface$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(KeepPopupOpenStrategy, 'KeepPopupOpenStrategy');
  initMetadataForClass(never$1, VOID, VOID, KeepPopupOpenStrategy);
  initMetadataForClass(onHover$1, VOID, VOID, KeepPopupOpenStrategy);
  initMetadataForClass(onFocus$1, VOID, VOID, KeepPopupOpenStrategy);
  initMetadataForLambda(combine$o$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(combine$1, VOID, VOID, KeepPopupOpenStrategy);
  initMetadataForCompanion(Companion_5);
  initMetadataForClass(OpenClosePopupStrategy, 'OpenClosePopupStrategy');
  initMetadataForClass(OpenClose, 'OpenClose', VOID, Enum);
  initMetadataForClass(onHover$1_0, VOID, VOID, OpenClosePopupStrategy);
  initMetadataForClass(onFocus$1_0, VOID, VOID, OpenClosePopupStrategy);
  initMetadataForLambda(combine$o$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForClass(combine$1_0, VOID, VOID, OpenClosePopupStrategy);
  initMetadataForObject(OverlayVars, 'OverlayVars');
  initMetadataForClass(PopoverShowHideSettings, 'PopoverShowHideSettings');
  initMetadataForLambda(PopoverStateController$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(PopoverStateController$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForClass(PopoverStateController, 'PopoverStateController');
  initMetadataForClass(PopoverElements, 'PopoverElements');
  initMetadataForObject(Uninitialized, 'Uninitialized');
  initMetadataForInterface(Initialized, 'Initialized');
  initMetadataForClass(FoundElements, 'FoundElements', VOID, VOID, [Initialized]);
  initMetadataForInterface(Visible, 'Visible', VOID, VOID, [Initialized]);
  initMetadataForClass(Calculating, 'Calculating', VOID, VOID, [Visible]);
  initMetadataForClass(Shown, 'Shown', VOID, VOID, [Visible]);
  initMetadataForClass(Hiding, 'Hiding', VOID, VOID, [Visible]);
  initMetadataForClass(AdvancedPopover$$inlined$cache$2$2);
  initMetadataForClass(AdvancedPopover$$inlined$run$2$4$2$1);
  initMetadataForObject(PopupVars, 'PopupVars');
  initMetadataForClass(PopupPlacement, 'PopupPlacement', VOID, Enum);
  initMetadataForClass(PopupPlacementStrategy, 'PopupPlacementStrategy');
  initMetadataForClass(PopupPlacementStrategy$Companion$of$1, VOID, VOID, PopupPlacementStrategy);
  initMetadataForClass(Position, 'Position');
  initMetadataForClass(PositionAndPlacement, 'PositionAndPlacement');
  initMetadataForCompanion(Companion_6);
  initMetadataForClass(PopupScope, 'PopupScope');
  initMetadataForObject(TooltipVars, 'TooltipVars');
  initMetadataForObject(TransitionDurationVars, 'TransitionDurationVars');
  initMetadataForObject(FontSizeVars, 'FontSizeVars');
  initMetadataForObject(BorderRadiusVars, 'BorderRadiusVars');
  initMetadataForClass(MutableButton, 'MutableButton', VOID, ColorGroup);
  initMetadataForClass(MutableCallout, 'MutableCallout', VOID, ColorGroup);
  initMetadataForClass(MutableCheckbox, 'MutableCheckbox', VOID, ColorGroup);
  initMetadataForClass(MutableInput, 'MutableInput', VOID, ColorGroup);
  initMetadataForClass(MutableSwitch, 'MutableSwitch', VOID, ColorGroup);
  initMetadataForClass(MutableTab, 'MutableTab', VOID, ColorGroup);
  initMetadataForClass(MutableTooltip, 'MutableTooltip', VOID, ColorGroup);
  //endregion
  function get_TabsStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsStyle;
  }
  var TabsStyle;
  function get_TabsTabRowStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsTabRowStyle;
  }
  var TabsTabRowStyle;
  function get_TabsTabStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsTabStyle;
  }
  var TabsTabStyle;
  function get_TabsPanelStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsPanelStyle;
  }
  var TabsPanelStyle;
  var com_varabyte_kobweb_silk_components_disclosure_TabVars$stable;
  var com_varabyte_kobweb_silk_components_disclosure_TabData$stable;
  var com_varabyte_kobweb_silk_components_disclosure_PanelData$stable;
  var com_varabyte_kobweb_silk_components_disclosure_TabPanelData$stable;
  var com_varabyte_kobweb_silk_components_disclosure_TabPanelScope$stable;
  var com_varabyte_kobweb_silk_components_disclosure_TabsScope$stable;
  function TabVars$_get_Color_$ref_chk8zq() {
    return function (p0) {
      return p0.w3u();
    };
  }
  function TabVars$_get_BorderColor_$ref_tz611i() {
    return function (p0) {
      return p0.x3u();
    };
  }
  function TabVars$_get_BackgroundColor_$ref_b468g8() {
    return function (p0) {
      return p0.y3u();
    };
  }
  function TabVars$_get_DisabledBackgroundColor_$ref_r6n4kk() {
    return function (p0) {
      return p0.z3u();
    };
  }
  function TabVars$_get_HoverBackgroundColor_$ref_y2gnb8() {
    return function (p0) {
      return p0.a3v();
    };
  }
  function TabVars$_get_PressedBackgroundColor_$ref_yty52() {
    return function (p0) {
      return p0.b3v();
    };
  }
  function TabVars$_get_BorderThickness_$ref_94q7qj() {
    return function (p0) {
      return p0.c3v();
    };
  }
  function TabVars$_get_ColorTransitionDuration_$ref_2jc6z3() {
    return function (p0) {
      return p0.d3v();
    };
  }
  function TabVars() {
    TabVars_instance = this;
    this.o3u_1 = StyleVariable('silk');
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().m3b();
    tmp.p3u_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    this.q3u_1 = StyleVariable('silk');
    this.r3u_1 = StyleVariable('silk');
    this.s3u_1 = StyleVariable('silk');
    this.t3u_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_px(2);
    tmp_0.u3u_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = TransitionDurationVars_getInstance().m3v().m3b();
    tmp_1.v3u_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
  }
  protoOf(TabVars).w3u = function () {
    var tmp = KProperty1;
    return this.o3u_1.s3b(this, getPropertyCallableRef('Color', 1, tmp, TabVars$_get_Color_$ref_chk8zq(), null));
  };
  protoOf(TabVars).x3u = function () {
    var tmp = KProperty1;
    return this.p3u_1.s3b(this, getPropertyCallableRef('BorderColor', 1, tmp, TabVars$_get_BorderColor_$ref_tz611i(), null));
  };
  protoOf(TabVars).y3u = function () {
    var tmp = KProperty1;
    return this.q3u_1.s3b(this, getPropertyCallableRef('BackgroundColor', 1, tmp, TabVars$_get_BackgroundColor_$ref_b468g8(), null));
  };
  protoOf(TabVars).z3u = function () {
    var tmp = KProperty1;
    return this.r3u_1.s3b(this, getPropertyCallableRef('DisabledBackgroundColor', 1, tmp, TabVars$_get_DisabledBackgroundColor_$ref_r6n4kk(), null));
  };
  protoOf(TabVars).a3v = function () {
    var tmp = KProperty1;
    return this.s3u_1.s3b(this, getPropertyCallableRef('HoverBackgroundColor', 1, tmp, TabVars$_get_HoverBackgroundColor_$ref_y2gnb8(), null));
  };
  protoOf(TabVars).b3v = function () {
    var tmp = KProperty1;
    return this.t3u_1.s3b(this, getPropertyCallableRef('PressedBackgroundColor', 1, tmp, TabVars$_get_PressedBackgroundColor_$ref_yty52(), null));
  };
  protoOf(TabVars).c3v = function () {
    var tmp = KProperty1;
    return this.u3u_1.s3b(this, getPropertyCallableRef('BorderThickness', 1, tmp, TabVars$_get_BorderThickness_$ref_94q7qj(), null));
  };
  protoOf(TabVars).d3v = function () {
    var tmp = KProperty1;
    return this.v3u_1.s3b(this, getPropertyCallableRef('ColorTransitionDuration', 1, tmp, TabVars$_get_ColorTransitionDuration_$ref_2jc6z3(), null));
  };
  var TabVars_instance;
  function TabVars_getInstance() {
    if (TabVars_instance == null)
      new TabVars();
    return TabVars_instance;
  }
  function TabsStyle$lambda($this$CssStyle) {
    _init_properties_Tabs_kt__myintq();
    return Unit_instance;
  }
  function TabsTabRowStyle$lambda($this$base) {
    _init_properties_Tabs_kt__myintq();
    var tmp = fillMaxWidth(Companion_instance);
    var tmp_0 = TabVars_getInstance().c3v().m3b();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return borderBottom(tmp, tmp_0, 'solid', TabVars_getInstance().x3u().m3b());
  }
  function TabsTabStyle$lambda($composer, $changed) {
    _init_properties_Tabs_kt__myintq();
    var $composer_0 = $composer;
    $composer_0.y1g(2044107546);
    var tmp0 = tabIndex(Companion_instance, 0);
    $composer_0.z1g();
    return tmp0;
  }
  function TabsTabStyle$lambda_0($this$CssStyle) {
    _init_properties_Tabs_kt__myintq();
    $this$CssStyle.b3o(TabsTabStyle$lambda$lambda);
    var tmp = get_ariaDisabled($this$CssStyle);
    $this$CssStyle.e3q(tmp, TabsTabStyle$lambda$lambda_0);
    var tmp_0 = get_hover($this$CssStyle).a3p(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    $this$CssStyle.e3q(tmp_0, TabsTabStyle$lambda$lambda_1);
    var tmp_1 = get_active($this$CssStyle).a3p(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    $this$CssStyle.e3q(tmp_1, TabsTabStyle$lambda$lambda_2);
    return Unit_instance;
  }
  function TabsTabStyle$lambda$lambda() {
    _init_properties_Tabs_kt__myintq();
    var tmp = padding(userSelect(color(backgroundColor(transition(cursor(Companion_instance, Companion_instance_1.h39()), Companion_instance_2.e3c(listOf(['background-color', 'color', 'border-color']), TabVars_getInstance().d3v().m3b())), TabVars_getInstance().y3u().m3b()), TabVars_getInstance().w3u().m3b()), Companion_instance_3.j39()), get_cssRem(0.5));
    var tmp_0 = margin(tmp, VOID, VOID, calc(TabsTabStyle$lambda$lambda$lambda));
    var tmp_1 = TabVars_getInstance().c3v().m3b();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return borderBottom(tmp_0, tmp_1, 'solid', TabVars_getInstance().x3u().m3b());
  }
  function TabsTabStyle$lambda$lambda$lambda($this$calc) {
    _init_properties_Tabs_kt__myintq();
    return $this$calc.f3c(TabVars_getInstance().c3v().m3b());
  }
  function TabsTabStyle$lambda$lambda_0() {
    _init_properties_Tabs_kt__myintq();
    return cursor(backgroundColor(Companion_instance, TabVars_getInstance().z3u().m3b()), Companion_instance_1.i39());
  }
  function TabsTabStyle$lambda$lambda_1() {
    _init_properties_Tabs_kt__myintq();
    return backgroundColor(Companion_instance, TabVars_getInstance().a3v().m3b());
  }
  function TabsTabStyle$lambda$lambda_2() {
    _init_properties_Tabs_kt__myintq();
    return backgroundColor(Companion_instance, TabVars_getInstance().b3v().m3b());
  }
  function TabsPanelStyle$lambda($this$base) {
    _init_properties_Tabs_kt__myintq();
    var tmp = flexGrow(fillMaxWidth(padding(Companion_instance, get_cssRem(1))), 1);
    return overflow(tmp, TabsPanelStyle$lambda$lambda);
  }
  function TabsPanelStyle$lambda$lambda($this$overflow) {
    _init_properties_Tabs_kt__myintq();
    $this$overflow.o3l(Companion_instance_4.z3a());
    return Unit_instance;
  }
  var properties_initialized_Tabs_kt_moodfk;
  function _init_properties_Tabs_kt__myintq() {
    if (!properties_initialized_Tabs_kt_moodfk) {
      properties_initialized_Tabs_kt_moodfk = true;
      TabsStyle = CssStyle(VOID, TabsStyle$lambda);
      var tmp = Companion_instance_5;
      TabsTabRowStyle = base(tmp, VOID, TabsTabRowStyle$lambda);
      var tmp_0 = TabsTabStyle$lambda;
      TabsTabStyle = CssStyle_0(tmp_0, TabsTabStyle$lambda_0);
      var tmp_1 = Companion_instance_5;
      TabsPanelStyle = base(tmp_1, VOID, TabsPanelStyle$lambda);
      com_varabyte_kobweb_silk_components_disclosure_TabVars$stable = 8;
      com_varabyte_kobweb_silk_components_disclosure_TabData$stable = 0;
      com_varabyte_kobweb_silk_components_disclosure_PanelData$stable = 0;
      com_varabyte_kobweb_silk_components_disclosure_TabPanelData$stable = 0;
      com_varabyte_kobweb_silk_components_disclosure_TabPanelScope$stable = 8;
      com_varabyte_kobweb_silk_components_disclosure_TabsScope$stable = 8;
    }
  }
  function get_CalloutStyle() {
    _init_properties_Callout_kt__ksu682();
    return CalloutStyle;
  }
  var CalloutStyle;
  function get_LeftBorderedCalloutVariant() {
    _init_properties_Callout_kt__ksu682();
    return LeftBorderedCalloutVariant;
  }
  var LeftBorderedCalloutVariant;
  function get_LeftBorderedFilledCalloutVariant() {
    _init_properties_Callout_kt__ksu682();
    return LeftBorderedFilledCalloutVariant;
  }
  var LeftBorderedFilledCalloutVariant;
  function get_OutlinedCalloutVariant() {
    _init_properties_Callout_kt__ksu682();
    return OutlinedCalloutVariant;
  }
  var OutlinedCalloutVariant;
  function get_OutlinedFilledCalloutVariant() {
    _init_properties_Callout_kt__ksu682();
    return OutlinedFilledCalloutVariant;
  }
  var OutlinedFilledCalloutVariant;
  function get_MatchingLinkCalloutVariant() {
    _init_properties_Callout_kt__ksu682();
    return MatchingLinkCalloutVariant;
  }
  var MatchingLinkCalloutVariant;
  var com_varabyte_kobweb_silk_components_display_CalloutVars$stable;
  var com_varabyte_kobweb_silk_components_display_CalloutType$stable;
  var com_varabyte_kobweb_silk_components_display_CalloutDefaults$stable;
  function CalloutVars$_get_Color_$ref_c79x0r() {
    return function (p0) {
      return p0.w3u();
    };
  }
  function CalloutVars$_get_BackgroundColor_$ref_6qzwbh() {
    return function (p0) {
      return p0.y3u();
    };
  }
  function CalloutVars$_get_TitleFontSize_$ref_d27e7k() {
    return function (p0) {
      return p0.s3v();
    };
  }
  function CalloutVars$_get_TitleGap_$ref_ygrq2s() {
    return function (p0) {
      return p0.t3v();
    };
  }
  function CalloutVars$_get_TitleLineHeight_$ref_1mexdx() {
    return function (p0) {
      return p0.u3v();
    };
  }
  function CalloutVars() {
    CalloutVars_instance = this;
    this.n3v_1 = StyleVariable('silk');
    this.o3v_1 = StyleVariable('silk');
    this.p3v_1 = StyleVariable('silk');
    var tmp = this;
    var tmp0_defaultFallback = get_cssRem(0.5);
    tmp.q3v_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    this.r3v_1 = StyleVariable_2(1, 'silk');
  }
  protoOf(CalloutVars).w3u = function () {
    var tmp = KProperty1;
    return this.n3v_1.s3b(this, getPropertyCallableRef('Color', 1, tmp, CalloutVars$_get_Color_$ref_c79x0r(), null));
  };
  protoOf(CalloutVars).y3u = function () {
    var tmp = KProperty1;
    return this.o3v_1.s3b(this, getPropertyCallableRef('BackgroundColor', 1, tmp, CalloutVars$_get_BackgroundColor_$ref_6qzwbh(), null));
  };
  protoOf(CalloutVars).s3v = function () {
    var tmp = KProperty1;
    return this.p3v_1.s3b(this, getPropertyCallableRef('TitleFontSize', 1, tmp, CalloutVars$_get_TitleFontSize_$ref_d27e7k(), null));
  };
  protoOf(CalloutVars).t3v = function () {
    var tmp = KProperty1;
    return this.q3v_1.s3b(this, getPropertyCallableRef('TitleGap', 1, tmp, CalloutVars$_get_TitleGap_$ref_ygrq2s(), null));
  };
  protoOf(CalloutVars).u3v = function () {
    var tmp = KProperty1;
    return this.r3v_1.s3b(this, getPropertyCallableRef('TitleLineHeight', 1, tmp, CalloutVars$_get_TitleLineHeight_$ref_1mexdx(), null));
  };
  var CalloutVars_instance;
  function CalloutVars_getInstance() {
    if (CalloutVars_instance == null)
      new CalloutVars();
    return CalloutVars_instance;
  }
  function removeEdgeParagraphSpacing(_this__u8e3s4) {
    _init_properties_Callout_kt__ksu682();
    _this__u8e3s4.d3o(' > .callout-body > p:first-child', removeEdgeParagraphSpacing$lambda);
    _this__u8e3s4.d3o(' > .callout-body > p:last-child', removeEdgeParagraphSpacing$lambda_0);
  }
  function CalloutType$Companion$CAUTION$lambda(it) {
    return get_callout_0(toPalette(it)).v3v();
  }
  function CalloutType$Companion$IMPORTANT$lambda(it) {
    return get_callout_0(toPalette(it)).w3v();
  }
  function CalloutType$Companion$NOTE$lambda(it) {
    return get_callout_0(toPalette(it)).x3v();
  }
  function CalloutType$Companion$QUESTION$lambda(it) {
    return get_callout_0(toPalette(it)).y3v();
  }
  function CalloutType$Companion$QUOTE$lambda(it) {
    return get_callout_0(toPalette(it)).z3v();
  }
  function CalloutType$Companion$TIP$lambda(it) {
    return get_callout_0(toPalette(it)).a3w();
  }
  function CalloutType$Companion$WARNING$lambda(it) {
    return get_callout_0(toPalette(it)).b3w();
  }
  function CalloutType_init_$Init$(icon, label, provideColor, $this) {
    var tmp = CalloutType$_init_$lambda_4upqpt_0(provideColor);
    CalloutType.call($this, icon, label, tmp, CalloutType$_init_$lambda_4upqpt_1(provideColor));
    return $this;
  }
  function CalloutType_init_$Create$(icon, label, provideColor) {
    return CalloutType_init_$Init$(icon, label, provideColor, objectCreate(protoOf(CalloutType)));
  }
  function Companion() {
    Companion_instance_19 = this;
    var tmp = this;
    var tmp_0 = ComposableSingletons$CalloutKt_getInstance().c3w_1;
    tmp.j3w_1 = CalloutType_init_$Create$(tmp_0, 'Caution', CalloutType$Companion$CAUTION$lambda);
    var tmp_1 = this;
    var tmp_2 = ComposableSingletons$CalloutKt_getInstance().d3w_1;
    tmp_1.k3w_1 = CalloutType_init_$Create$(tmp_2, 'Important', CalloutType$Companion$IMPORTANT$lambda);
    var tmp_3 = this;
    var tmp_4 = ComposableSingletons$CalloutKt_getInstance().e3w_1;
    tmp_3.l3w_1 = CalloutType_init_$Create$(tmp_4, 'Note', CalloutType$Companion$NOTE$lambda);
    var tmp_5 = this;
    var tmp_6 = ComposableSingletons$CalloutKt_getInstance().f3w_1;
    tmp_5.m3w_1 = CalloutType_init_$Create$(tmp_6, 'Question', CalloutType$Companion$QUESTION$lambda);
    var tmp_7 = this;
    var tmp_8 = ComposableSingletons$CalloutKt_getInstance().g3w_1;
    tmp_7.n3w_1 = CalloutType_init_$Create$(tmp_8, 'Quote', CalloutType$Companion$QUOTE$lambda);
    var tmp_9 = this;
    var tmp_10 = ComposableSingletons$CalloutKt_getInstance().h3w_1;
    tmp_9.o3w_1 = CalloutType_init_$Create$(tmp_10, 'Tip', CalloutType$Companion$TIP$lambda);
    var tmp_11 = this;
    var tmp_12 = ComposableSingletons$CalloutKt_getInstance().i3w_1;
    tmp_11.p3w_1 = CalloutType_init_$Create$(tmp_12, 'Warning', CalloutType$Companion$WARNING$lambda);
  }
  var Companion_instance_19;
  function Companion_getInstance_1() {
    if (Companion_instance_19 == null)
      new Companion();
    return Companion_instance_19;
  }
  function CalloutType$_init_$lambda_4upqpt($provideColor, $provideBackgroundColor) {
    return function (_this__u8e3s4) {
      return setVariable(setVariable(Companion_instance, CalloutVars_getInstance().w3u(), $provideColor(_this__u8e3s4.c3q_1)), CalloutVars_getInstance().y3u(), $provideBackgroundColor(_this__u8e3s4.c3q_1));
    };
  }
  function CalloutType$_init_$lambda_4upqpt_0($provideColor) {
    return function (it) {
      return $provideColor(it);
    };
  }
  function CalloutType$_init_$lambda_4upqpt_1($provideColor) {
    return function (it) {
      return $provideColor(it).u3j().s3j(VOID, VOID, VOID, it.w3r() ? 0.15 : 0.2);
    };
  }
  function CalloutType(icon, label, provideColor, provideBackgroundColor) {
    Companion_getInstance_1();
    Base.call(this, CalloutType$_init_$lambda_4upqpt(provideColor, provideBackgroundColor));
    this.s3w_1 = icon;
    this.t3w_1 = label;
  }
  function ComposableLambda$invoke$ref(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.u1v(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function ComposableSingletons$CalloutKt$lambda$1105541261$lambda($composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.w1h(!(($changed & 3) === 2), $changed & 1)) {
      StopIcon(null, $composer_0, 0, 1);
    } else {
      $composer_0.j1h();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_0(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.u1v(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function ComposableSingletons$CalloutKt$lambda$_700737724$lambda_78p56o($composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.w1h(!(($changed & 3) === 2), $changed & 1)) {
      ExclaimIcon(null, $composer_0, 0, 1);
    } else {
      $composer_0.j1h();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_1(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.u1v(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function ComposableSingletons$CalloutKt$lambda$_1510536654$lambda_g5bhof($composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.w1h(!(($changed & 3) === 2), $changed & 1)) {
      InfoIcon(null, $composer_0, 0, 1);
    } else {
      $composer_0.j1h();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_2(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.u1v(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function ComposableSingletons$CalloutKt$lambda$_2086387290$lambda_cn27wu($composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.w1h(!(($changed & 3) === 2), $changed & 1)) {
      QuestionIcon(null, $composer_0, 0, 1);
    } else {
      $composer_0.j1h();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_3(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.u1v(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function ComposableSingletons$CalloutKt$lambda$1974337438$lambda($composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.w1h(!(($changed & 3) === 2), $changed & 1)) {
      QuoteIcon(null, $composer_0, 0, 1);
    } else {
      $composer_0.j1h();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_4(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.u1v(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function ComposableSingletons$CalloutKt$lambda$_613517763$lambda_5n9r8($composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.w1h(!(($changed & 3) === 2), $changed & 1)) {
      LightbulbIcon(null, $composer_0, 0, 1);
    } else {
      $composer_0.j1h();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_5(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.u1v(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function ComposableSingletons$CalloutKt$lambda$2087814270$lambda($composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.w1h(!(($changed & 3) === 2), $changed & 1)) {
      WarningIcon(null, $composer_0, 0, 1);
    } else {
      $composer_0.j1h();
    }
    return Unit_instance;
  }
  function ComposableSingletons$CalloutKt() {
    ComposableSingletons$CalloutKt_instance = this;
    var tmp = this;
    tmp.c3w_1 = ComposableLambda$invoke$ref(composableLambdaInstance(1105541261, false, ComposableSingletons$CalloutKt$lambda$1105541261$lambda));
    var tmp_0 = this;
    tmp_0.d3w_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(-700737724, false, ComposableSingletons$CalloutKt$lambda$_700737724$lambda_78p56o));
    var tmp_1 = this;
    tmp_1.e3w_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(-1510536654, false, ComposableSingletons$CalloutKt$lambda$_1510536654$lambda_g5bhof));
    var tmp_2 = this;
    tmp_2.f3w_1 = ComposableLambda$invoke$ref_2(composableLambdaInstance(-2086387290, false, ComposableSingletons$CalloutKt$lambda$_2086387290$lambda_cn27wu));
    var tmp_3 = this;
    tmp_3.g3w_1 = ComposableLambda$invoke$ref_3(composableLambdaInstance(1974337438, false, ComposableSingletons$CalloutKt$lambda$1974337438$lambda));
    var tmp_4 = this;
    tmp_4.h3w_1 = ComposableLambda$invoke$ref_4(composableLambdaInstance(-613517763, false, ComposableSingletons$CalloutKt$lambda$_613517763$lambda_5n9r8));
    var tmp_5 = this;
    tmp_5.i3w_1 = ComposableLambda$invoke$ref_5(composableLambdaInstance(2087814270, false, ComposableSingletons$CalloutKt$lambda$2087814270$lambda));
  }
  var ComposableSingletons$CalloutKt_instance;
  function ComposableSingletons$CalloutKt_getInstance() {
    if (ComposableSingletons$CalloutKt_instance == null)
      new ComposableSingletons$CalloutKt();
    return ComposableSingletons$CalloutKt_instance;
  }
  function CalloutStyle$lambda($this$CssStyle) {
    _init_properties_Callout_kt__ksu682();
    $this$CssStyle.b3o(CalloutStyle$lambda$lambda);
    $this$CssStyle.d3o(' >.callout-title', CalloutStyle$lambda$lambda_0);
    return Unit_instance;
  }
  function CalloutStyle$lambda$lambda() {
    _init_properties_Callout_kt__ksu682();
    return marginBlock(textAlign(Companion_instance, Companion_instance_6.s38()), get_em(1));
  }
  function CalloutStyle$lambda$lambda_0() {
    _init_properties_Callout_kt__ksu682();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return lineHeight(gap(fontSize(fontWeight(alignItems(display(tmp, 'flex'), Companion_instance_8.r38()), Companion_instance_9.k39()), CalloutVars_getInstance().s3v().m3b()), CalloutVars_getInstance().t3v().m3b()), CalloutVars_getInstance().u3v().m3b());
  }
  function LeftBorderedCalloutVariant$lambda($this$addVariant) {
    _init_properties_Callout_kt__ksu682();
    $this$addVariant.b3o(LeftBorderedCalloutVariant$lambda$lambda);
    $this$addVariant.d3o(' >.callout-title', LeftBorderedCalloutVariant$lambda$lambda_0);
    removeEdgeParagraphSpacing($this$addVariant);
    return Unit_instance;
  }
  function LeftBorderedCalloutVariant$lambda$lambda() {
    _init_properties_Callout_kt__ksu682();
    var tmp = Companion_instance;
    var tmp_0 = get_em(0.25);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return padding_0(borderLeft(tmp, tmp_0, 'solid', CalloutVars_getInstance().w3u().m3b()), get_cssRem(0.5), get_cssRem(1));
  }
  function LeftBorderedCalloutVariant$lambda$lambda_0() {
    _init_properties_Callout_kt__ksu682();
    var tmp = color(Companion_instance, CalloutVars_getInstance().w3u().m3b());
    return margin_0(tmp, LeftBorderedCalloutVariant$lambda$lambda$lambda);
  }
  function LeftBorderedCalloutVariant$lambda$lambda$lambda($this$margin) {
    _init_properties_Callout_kt__ksu682();
    $this$margin.i3l(get_cssRem(1));
    return Unit_instance;
  }
  function LeftBorderedFilledCalloutVariant$lambda($this$addVariant) {
    _init_properties_Callout_kt__ksu682();
    $this$addVariant.b3o(LeftBorderedFilledCalloutVariant$lambda$lambda);
    $this$addVariant.d3o(' >.callout-title', LeftBorderedFilledCalloutVariant$lambda$lambda_0);
    removeEdgeParagraphSpacing($this$addVariant);
    return Unit_instance;
  }
  function LeftBorderedFilledCalloutVariant$lambda$lambda() {
    _init_properties_Callout_kt__ksu682();
    var tmp = Companion_instance;
    var tmp_0 = get_em(0.25);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return boxShadow(padding_0(borderRadius(backgroundColor(borderLeft(tmp, tmp_0, 'solid', CalloutVars_getInstance().w3u().m3b()), CalloutVars_getInstance().y3u().m3b()), get_px(4)), get_cssRem(0.75), get_cssRem(1)), [Companion_instance_10.v38(get_px(0), get_px(1), get_px(2), VOID, Colors_instance.g3k().s3j(VOID, VOID, VOID, 0.12)), Companion_instance_10.v38(get_px(0), get_px(3), get_px(10), VOID, Colors_instance.g3k().s3j(VOID, VOID, VOID, 0.08))]);
  }
  function LeftBorderedFilledCalloutVariant$lambda$lambda_0() {
    _init_properties_Callout_kt__ksu682();
    var tmp = color(Companion_instance, CalloutVars_getInstance().w3u().m3b());
    return margin_0(tmp, LeftBorderedFilledCalloutVariant$lambda$lambda$lambda);
  }
  function LeftBorderedFilledCalloutVariant$lambda$lambda$lambda($this$margin) {
    _init_properties_Callout_kt__ksu682();
    $this$margin.i3l(get_cssRem(0.75));
    return Unit_instance;
  }
  function OutlinedCalloutVariant$lambda($this$addVariant) {
    _init_properties_Callout_kt__ksu682();
    $this$addVariant.b3o(OutlinedCalloutVariant$lambda$lambda);
    $this$addVariant.d3o(' >.callout-title', OutlinedCalloutVariant$lambda$lambda_0);
    $this$addVariant.d3o(' .callout-icon', OutlinedCalloutVariant$lambda$lambda_1);
    $this$addVariant.d3o(' >.callout-body', OutlinedCalloutVariant$lambda$lambda_2);
    removeEdgeParagraphSpacing($this$addVariant);
    return Unit_instance;
  }
  function OutlinedCalloutVariant$lambda$lambda() {
    _init_properties_Callout_kt__ksu682();
    var tmp = Companion_instance;
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return borderRadius(border(tmp, tmp_0, 'solid', CalloutVars_getInstance().w3u().m3b()), get_cssRem(0.2));
  }
  function OutlinedCalloutVariant$lambda$lambda_0() {
    _init_properties_Callout_kt__ksu682();
    return padding_0(backgroundColor(Companion_instance, CalloutVars_getInstance().y3u().m3b()), get_cssRem(0.75), get_cssRem(0.75));
  }
  function OutlinedCalloutVariant$lambda$lambda_1() {
    _init_properties_Callout_kt__ksu682();
    return color(Companion_instance, CalloutVars_getInstance().w3u().m3b());
  }
  function OutlinedCalloutVariant$lambda$lambda_2() {
    _init_properties_Callout_kt__ksu682();
    return padding_0(Companion_instance, get_cssRem(0.75), get_cssRem(0.75));
  }
  function OutlinedFilledCalloutVariant$lambda($this$addVariant) {
    _init_properties_Callout_kt__ksu682();
    $this$addVariant.b3o(OutlinedFilledCalloutVariant$lambda$lambda);
    $this$addVariant.d3o(' >.callout-title', OutlinedFilledCalloutVariant$lambda$lambda_0);
    removeEdgeParagraphSpacing($this$addVariant);
    return Unit_instance;
  }
  function OutlinedFilledCalloutVariant$lambda$lambda() {
    _init_properties_Callout_kt__ksu682();
    var tmp = Companion_instance;
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return padding(borderRadius(backgroundColor(border(tmp, tmp_0, 'solid', CalloutVars_getInstance().w3u().m3b()), CalloutVars_getInstance().y3u().m3b()), get_px(4)), get_cssRem(0.75));
  }
  function OutlinedFilledCalloutVariant$lambda$lambda_0() {
    _init_properties_Callout_kt__ksu682();
    var tmp = color(Companion_instance, CalloutVars_getInstance().w3u().m3b());
    return margin_0(tmp, OutlinedFilledCalloutVariant$lambda$lambda$lambda);
  }
  function OutlinedFilledCalloutVariant$lambda$lambda$lambda($this$margin) {
    _init_properties_Callout_kt__ksu682();
    $this$margin.i3l(get_cssRem(0.75));
    return Unit_instance;
  }
  function MatchingLinkCalloutVariant$lambda($this$addVariant) {
    _init_properties_Callout_kt__ksu682();
    descendants($this$addVariant, [':any-link'], MatchingLinkCalloutVariant$lambda$lambda);
    return Unit_instance;
  }
  function MatchingLinkCalloutVariant$lambda$lambda() {
    _init_properties_Callout_kt__ksu682();
    return color(Companion_instance, CalloutVars_getInstance().w3u().m3b());
  }
  function removeEdgeParagraphSpacing$lambda() {
    _init_properties_Callout_kt__ksu682();
    var tmp = Companion_instance;
    return marginBlock_0(tmp, removeEdgeParagraphSpacing$lambda$lambda);
  }
  function removeEdgeParagraphSpacing$lambda$lambda($this$marginBlock) {
    _init_properties_Callout_kt__ksu682();
    $this$marginBlock.k3l(get_px(0));
    return Unit_instance;
  }
  function removeEdgeParagraphSpacing$lambda_0() {
    _init_properties_Callout_kt__ksu682();
    var tmp = Companion_instance;
    return marginBlock_0(tmp, removeEdgeParagraphSpacing$lambda$lambda_0);
  }
  function removeEdgeParagraphSpacing$lambda$lambda_0($this$marginBlock) {
    _init_properties_Callout_kt__ksu682();
    $this$marginBlock.l3l(get_px(0));
    return Unit_instance;
  }
  var properties_initialized_Callout_kt_nor0bk;
  function _init_properties_Callout_kt__ksu682() {
    if (!properties_initialized_Callout_kt_nor0bk) {
      properties_initialized_Callout_kt_nor0bk = true;
      CalloutStyle = CssStyle(VOID, CalloutStyle$lambda);
      var tmp = get_CalloutStyle();
      LeftBorderedCalloutVariant = addVariant(tmp, VOID, LeftBorderedCalloutVariant$lambda);
      var tmp_0 = get_CalloutStyle();
      LeftBorderedFilledCalloutVariant = addVariant(tmp_0, VOID, LeftBorderedFilledCalloutVariant$lambda);
      var tmp_1 = get_CalloutStyle();
      OutlinedCalloutVariant = addVariant(tmp_1, VOID, OutlinedCalloutVariant$lambda);
      var tmp_2 = get_CalloutStyle();
      OutlinedFilledCalloutVariant = addVariant(tmp_2, VOID, OutlinedFilledCalloutVariant$lambda);
      var tmp_3 = get_CalloutStyle();
      MatchingLinkCalloutVariant = addVariant(tmp_3, VOID, MatchingLinkCalloutVariant$lambda);
      com_varabyte_kobweb_silk_components_display_CalloutVars$stable = 8;
      com_varabyte_kobweb_silk_components_display_CalloutType$stable = com_varabyte_kobweb_silk_style_CssStyle_Restricted_Base$stableprop_getter();
      com_varabyte_kobweb_silk_components_display_CalloutDefaults$stable = com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter();
    }
  }
  function get_ButtonStyle() {
    _init_properties_Button_kt__2845m6();
    return ButtonStyle;
  }
  var ButtonStyle;
  var com_varabyte_kobweb_silk_components_forms_ButtonVars$stable;
  var com_varabyte_kobweb_silk_components_forms_ButtonSize$stable;
  function ButtonVars$_get_BackgroundDefaultColor_$ref_p4munk() {
    return function (p0) {
      return p0.d3x();
    };
  }
  function ButtonVars$_get_BackgroundFocusColor_$ref_4ogjpj() {
    return function (p0) {
      return p0.e3x();
    };
  }
  function ButtonVars$_get_BackgroundHoverColor_$ref_sxwca3() {
    return function (p0) {
      return p0.f3x();
    };
  }
  function ButtonVars$_get_BackgroundPressedColor_$ref_ig9prj() {
    return function (p0) {
      return p0.g3x();
    };
  }
  function ButtonVars$_get_Color_$ref_90hsrb() {
    return function (p0) {
      return p0.w3u();
    };
  }
  function ButtonVars$_get_ColorTransitionDuration_$ref_7uf2ku() {
    return function (p0) {
      return p0.d3v();
    };
  }
  function ButtonVars$_get_FontSize_$ref_o5ikts() {
    return function (p0) {
      return p0.h3x();
    };
  }
  function ButtonVars$_get_Height_$ref_re4w87() {
    return function (p0) {
      return p0.i3x();
    };
  }
  function ButtonVars$_get_PaddingHorizontal_$ref_uqasd7() {
    return function (p0) {
      return p0.j3x();
    };
  }
  function ButtonVars() {
    ButtonVars_instance = this;
    this.u3w_1 = StyleVariable('silk');
    var tmp = this;
    var tmp0_defaultFallback = get_FocusOutlineColorVar().m3b();
    tmp.v3w_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    this.w3w_1 = StyleVariable('silk');
    this.x3w_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_ColorVar().m3b();
    tmp_0.y3w_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = TransitionDurationVars_getInstance().m3v().m3b();
    tmp_1.z3w_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
    this.a3x_1 = StyleVariable('silk');
    this.b3x_1 = StyleVariable('silk');
    this.c3x_1 = StyleVariable('silk');
  }
  protoOf(ButtonVars).d3x = function () {
    var tmp = KProperty1;
    return this.u3w_1.s3b(this, getPropertyCallableRef('BackgroundDefaultColor', 1, tmp, ButtonVars$_get_BackgroundDefaultColor_$ref_p4munk(), null));
  };
  protoOf(ButtonVars).e3x = function () {
    var tmp = KProperty1;
    return this.v3w_1.s3b(this, getPropertyCallableRef('BackgroundFocusColor', 1, tmp, ButtonVars$_get_BackgroundFocusColor_$ref_4ogjpj(), null));
  };
  protoOf(ButtonVars).f3x = function () {
    var tmp = KProperty1;
    return this.w3w_1.s3b(this, getPropertyCallableRef('BackgroundHoverColor', 1, tmp, ButtonVars$_get_BackgroundHoverColor_$ref_sxwca3(), null));
  };
  protoOf(ButtonVars).g3x = function () {
    var tmp = KProperty1;
    return this.x3w_1.s3b(this, getPropertyCallableRef('BackgroundPressedColor', 1, tmp, ButtonVars$_get_BackgroundPressedColor_$ref_ig9prj(), null));
  };
  protoOf(ButtonVars).w3u = function () {
    var tmp = KProperty1;
    return this.y3w_1.s3b(this, getPropertyCallableRef('Color', 1, tmp, ButtonVars$_get_Color_$ref_90hsrb(), null));
  };
  protoOf(ButtonVars).d3v = function () {
    var tmp = KProperty1;
    return this.z3w_1.s3b(this, getPropertyCallableRef('ColorTransitionDuration', 1, tmp, ButtonVars$_get_ColorTransitionDuration_$ref_7uf2ku(), null));
  };
  protoOf(ButtonVars).h3x = function () {
    var tmp = KProperty1;
    return this.a3x_1.s3b(this, getPropertyCallableRef('FontSize', 1, tmp, ButtonVars$_get_FontSize_$ref_o5ikts(), null));
  };
  protoOf(ButtonVars).i3x = function () {
    var tmp = KProperty1;
    return this.b3x_1.s3b(this, getPropertyCallableRef('Height', 1, tmp, ButtonVars$_get_Height_$ref_re4w87(), null));
  };
  protoOf(ButtonVars).j3x = function () {
    var tmp = KProperty1;
    return this.c3x_1.s3b(this, getPropertyCallableRef('PaddingHorizontal', 1, tmp, ButtonVars$_get_PaddingHorizontal_$ref_uqasd7(), null));
  };
  var ButtonVars_instance;
  function ButtonVars_getInstance() {
    if (ButtonVars_instance == null)
      new ButtonVars();
    return ButtonVars_instance;
  }
  function Button_0(onClick_0, modifier, variant, type, enabled, size, colorPalette, focusBorderColor, ref, content, $composer, $changed, $default) {
    _init_properties_Button_kt__2845m6();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var type_0 = {_v: type};
    var enabled_0 = {_v: enabled};
    var size_0 = {_v: size};
    var colorPalette_0 = {_v: colorPalette};
    var focusBorderColor_0 = {_v: focusBorderColor};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.e1h(366060417);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.u1h(onClick_0) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.r1h(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ((($changed & 512) === 0 ? $composer_0.r1h(variant_0._v) : $composer_0.u1h(variant_0._v)) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0) {
      var tmp;
      var tmp_0 = $composer_0;
      var tmpEnum = type_0._v;
      if (tmp_0.t1h(tmpEnum == null ? -1 : tmpEnum.l2_1)) {
        tmp = 2048;
      } else {
        tmp = 1024;
      }
      $dirty = $dirty | tmp;
    }
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.s1h(enabled_0._v) ? 16384 : 8192);
    if (($changed & 196608) === 0)
      $dirty = $dirty | (($default & 32) === 0 && (($changed & 262144) === 0 ? $composer_0.r1h(size_0._v) : $composer_0.u1h(size_0._v)) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.u1h(colorPalette_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.u1h(focusBorderColor_0._v) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 100663296) === 0)
      $dirty = $dirty | ((($changed & 134217728) === 0 ? $composer_0.r1h(ref_0._v) : $composer_0.u1h(ref_0._v)) ? 67108864 : 33554432);
    if (($changed & 805306368) === 0)
      $dirty = $dirty | ($composer_0.u1h(content) ? 536870912 : 268435456);
    if ($composer_0.w1h(!(($dirty & 306783379) === 306783378), $dirty & 1)) {
      $composer_0.c1h();
      if (($changed & 1) === 0 || $composer_0.u1g()) {
        if (!(($default & 2) === 0)) {
          modifier_0._v = Companion_instance;
        }
        if (!(($default & 4) === 0)) {
          variant_0._v = null;
        }
        if (!(($default & 8) === 0)) {
          type_0._v = ButtonType_Button_getInstance();
        }
        if (!(($default & 16) === 0)) {
          enabled_0._v = true;
        }
        if (!(($default & 32) === 0)) {
          size_0._v = Companion_getInstance_2().m3x_1;
          $dirty = $dirty & -458753;
        }
        if (!(($default & 64) === 0)) {
          colorPalette_0._v = null;
        }
        if (!(($default & 128) === 0)) {
          focusBorderColor_0._v = null;
        }
        if (!(($default & 256) === 0)) {
          ref_0._v = null;
        }
      } else {
        $composer_0.j1h();
        if (!(($default & 32) === 0))
          $dirty = $dirty & -458753;
      }
      $composer_0.d1h();
      $composer_0.y1g(-403209624);
      $composer_0.y1g(-403237190);
      var tmp0 = thenIf(toModifier(get_ButtonStyle(), [variant_0._v], $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter() | com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() << 3), !enabled_0._v, toModifier_0(get_DisabledStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter())).t3i(toModifier_1(size_0._v, $composer_0, com_varabyte_kobweb_silk_style_CssStyle_Restricted_Base$stableprop_getter() | 14 & $dirty >> 15));
      // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
      var tmp_1;
      if (!(colorPalette_0._v == null)) {
        var isDark = Companion_instance_11.p3l($composer_0, 6).x3r();
        var isBrightColor = get_isBright(isDark ? colorPalette_0._v.j3s() : colorPalette_0._v.m3s());
        tmp_1 = setVariable(setVariable(setVariable(setVariable(Companion_instance, ButtonVars_getInstance().w3u(), get_color_0(toPalette(isBrightColor ? ColorMode_LIGHT_getInstance() : ColorMode_DARK_getInstance()))), ButtonVars_getInstance().d3x(), isDark ? colorPalette_0._v.j3s() : colorPalette_0._v.m3s()), ButtonVars_getInstance().f3x(), isDark ? colorPalette_0._v.k3s() : colorPalette_0._v.n3s()), ButtonVars_getInstance().g3x(), isDark ? colorPalette_0._v.l3s() : colorPalette_0._v.o3s());
      } else {
        tmp_1 = Companion_instance;
      }
      var tmp0_group = tmp0.t3i(tmp_1);
      $composer_0.z1g();
      var tmp0_0 = setVariable(tmp0_group, ButtonVars_getInstance().e3x(), focusBorderColor_0._v).t3i(modifier_0._v);
      // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
      var tmp_2;
      if (enabled_0._v) {
        var tmp_3 = Companion_instance;
        var tmp0_1 = $composer_0;
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = ($dirty & 14) === 4;
        // Inline function 'kotlin.let' call
        var it = tmp0_1.p1h();
        var tmp_4;
        if (invalid || it === Companion_getInstance().r1g_1) {
          var value = Button$lambda(onClick_0);
          tmp0_1.q1h(value);
          tmp_4 = value;
        } else {
          tmp_4 = it;
        }
        var tmp_5 = tmp_4;
        var tmp$ret$5 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        tmp_2 = onClick(tmp_3, tmp$ret$5);
      } else {
        tmp_2 = Companion_instance;
      }
      var tmp1_group = tmp0_0.t3i(tmp_2);
      $composer_0.z1g();
      var tmp0_2 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = ($dirty & 7168) === 2048;
      // Inline function 'kotlin.let' call
      var it_0 = tmp0_2.p1h();
      var tmp_6;
      if (invalid_0 || it_0 === Companion_getInstance().r1g_1) {
        var value_0 = Button$lambda_0(type_0);
        tmp0_2.q1h(value_0);
        tmp_6 = value_0;
      } else {
        tmp_6 = it_0;
      }
      var tmp_7 = tmp_6;
      var tmp$ret$11 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
      var tmp_8 = toAttrs(tmp1_group, tmp$ret$11);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(934841147, true, Button$lambda_1(ref_0, content), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = $composer_1.r1h(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_1 = $composer_1.p1h();
      var tmp_9;
      if (invalid_1 || it_1 === Companion_getInstance().r1g_1) {
        var value_1 = ComposableLambda$invoke$ref_6(dispatchReceiver);
        $composer_1.q1h(value_1);
        tmp_9 = value_1;
      } else {
        tmp_9 = it_1;
      }
      var tmp_10 = tmp_9;
      var tmp0_3 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Button(tmp_8, tmp0_3, $composer_0, 48, 0);
    } else {
      $composer_0.j1h();
    }
    var tmp2_safe_receiver = $composer_0.f1h();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.y21(Button$lambda_2(onClick_0, modifier_0, variant_0, type_0, enabled_0, size_0, colorPalette_0, focusBorderColor_0, ref_0, content, $changed, $default));
    }
  }
  function Companion_0() {
    Companion_instance_20 = this;
    this.k3x_1 = new ButtonSize(FontSizeVars_getInstance().s3x().m3b(), get_cssRem(1.5), get_cssRem(0.5));
    this.l3x_1 = new ButtonSize(FontSizeVars_getInstance().t3x().m3b(), get_cssRem(2), get_cssRem(0.75));
    this.m3x_1 = new ButtonSize(FontSizeVars_getInstance().u3x().m3b(), get_cssRem(2.5), get_cssRem(1));
    this.n3x_1 = new ButtonSize(FontSizeVars_getInstance().v3x().m3b(), get_cssRem(3), get_cssRem(1.5));
  }
  var Companion_instance_20;
  function Companion_getInstance_2() {
    if (Companion_instance_20 == null)
      new Companion_0();
    return Companion_instance_20;
  }
  function ButtonSize(fontSize, height, horizontalPadding) {
    Companion_getInstance_2();
    Base_init_$Init$(setVariable(setVariable(setVariable(Companion_instance, ButtonVars_getInstance().h3x(), fontSize), ButtonVars_getInstance().i3x(), height), ButtonVars_getInstance().j3x(), horizontalPadding), VOID, this);
  }
  function ButtonStyle$lambda($this$CssStyle) {
    _init_properties_Button_kt__2845m6();
    $this$CssStyle.b3o(ButtonStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle).a3p(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    $this$CssStyle.e3q(tmp, ButtonStyle$lambda$lambda_0);
    var tmp_0 = get_focusVisible($this$CssStyle).a3p(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    $this$CssStyle.e3q(tmp_0, ButtonStyle$lambda$lambda_1);
    var tmp_1 = get_active($this$CssStyle).a3p(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    $this$CssStyle.e3q(tmp_1, ButtonStyle$lambda$lambda_2);
    return Unit_instance;
  }
  function ButtonStyle$lambda$lambda() {
    _init_properties_Button_kt__2845m6();
    var tmp = borderRadius(verticalAlign(padding_0(whiteSpace(fontWeight(fontSize(minWidth(height(lineHeight(backgroundColor(color(Companion_instance, ButtonVars_getInstance().w3u().m3b()), ButtonVars_getInstance().d3x().m3b()), 1.2), ButtonVars_getInstance().i3x().m3b()), ButtonVars_getInstance().i3x().m3b()), ButtonVars_getInstance().h3x().m3b()), Companion_instance_9.l39()), Companion_instance_12.w3b()), VOID, ButtonVars_getInstance().j3x().m3b()), Companion_instance_13.r3a()), get_cssRem(0.375));
    return transition_0(userSelect(border_0(tmp, ButtonStyle$lambda$lambda$lambda), Companion_instance_3.j39()), [Companion_instance_2.b3c('background-color', ButtonVars_getInstance().d3v().m3b())]);
  }
  function ButtonStyle$lambda$lambda$lambda($this$border) {
    _init_properties_Button_kt__2845m6();
    $this$border.g3l(get_px(0));
    return Unit_instance;
  }
  function ButtonStyle$lambda$lambda_0() {
    _init_properties_Button_kt__2845m6();
    return cursor(backgroundColor(Companion_instance, ButtonVars_getInstance().f3x().m3b()), Companion_instance_1.h39());
  }
  function ButtonStyle$lambda$lambda_1() {
    _init_properties_Button_kt__2845m6();
    var tmp = Companion_instance;
    var tmp_0 = get_px(2);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return boxShadow_0(outline(tmp, tmp_0, 'solid', Colors_instance.e3k()), VOID, VOID, VOID, get_cssRem(0.1875), ButtonVars_getInstance().e3x().m3b());
  }
  function ButtonStyle$lambda$lambda_2() {
    _init_properties_Button_kt__2845m6();
    return backgroundColor(Companion_instance, ButtonVars_getInstance().g3x().m3b());
  }
  function Button$lambda($onClick) {
    return function (evt) {
      $onClick(evt);
      evt.z34();
      return Unit_instance;
    };
  }
  function Button$lambda_0($type) {
    return function ($this$toAttrs) {
      type($this$toAttrs, $type._v);
      return Unit_instance;
    };
  }
  function Button$lambda_1($ref, $content) {
    return function ($this$JbButton, $composer, $changed) {
      var $composer_0 = $composer;
      registerRefScope($this$JbButton, $ref._v, $composer_0, 14 & $changed | com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter() << 3);
      var tmp = Center_instance;
      var tmp_0 = CenterVertically_instance;
      Row(null, tmp, tmp_0, null, $content, $composer_0, com_varabyte_kobweb_compose_foundation_layout_Arrangement_Center$stableprop_getter() << 3 | com_varabyte_kobweb_compose_ui_Alignment_CenterVertically$stableprop_getter() << 6, 9);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_6(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.x2n(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function Button$lambda_2($onClick, $modifier, $variant, $type, $enabled, $size, $colorPalette, $focusBorderColor, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Button_0($onClick, $modifier._v, $variant._v, $type._v, $enabled._v, $size._v, $colorPalette._v, $focusBorderColor._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var properties_initialized_Button_kt_yov184;
  function _init_properties_Button_kt__2845m6() {
    if (!properties_initialized_Button_kt_yov184) {
      properties_initialized_Button_kt_yov184 = true;
      ButtonStyle = CssStyle(VOID, ButtonStyle$lambda);
      com_varabyte_kobweb_silk_components_forms_ButtonVars$stable = 8;
      com_varabyte_kobweb_silk_components_forms_ButtonSize$stable = com_varabyte_kobweb_silk_style_CssStyle_Restricted_Base$stableprop_getter();
    }
  }
  function get_CheckboxStyle() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxStyle;
  }
  var CheckboxStyle;
  function get_CheckboxEnabledAnim() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxEnabledAnim;
  }
  var CheckboxEnabledAnim;
  function get_CheckboxIconContainerStyle() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxIconContainerStyle;
  }
  var CheckboxIconContainerStyle;
  function get_UncheckedCheckboxIconContainerVariant() {
    _init_properties_Checkbox_kt__x46qhp();
    return UncheckedCheckboxIconContainerVariant;
  }
  var UncheckedCheckboxIconContainerVariant;
  function get_CheckedCheckboxIconContainerVariant() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckedCheckboxIconContainerVariant;
  }
  var CheckedCheckboxIconContainerVariant;
  function get_CheckboxIconStyle() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxIconStyle;
  }
  var CheckboxIconStyle;
  function get_CheckboxInputVariant() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxInputVariant;
  }
  var CheckboxInputVariant;
  var com_varabyte_kobweb_silk_components_forms_CheckboxDefaults$stable;
  var com_varabyte_kobweb_silk_components_forms_CheckboxVars$stable;
  var com_varabyte_kobweb_silk_components_forms_CheckboxSize$stable;
  var com_varabyte_kobweb_silk_components_forms_CheckboxIconScope$stable;
  function CheckboxVars$_get_BorderColor_$ref_a3dxo() {
    return function (p0) {
      return p0.x3u();
    };
  }
  function CheckboxVars$_get_BorderRadius_$ref_auagi9() {
    return function (p0) {
      return p0.k3y();
    };
  }
  function CheckboxVars$_get_BorderWidth_$ref_n68vn5() {
    return function (p0) {
      return p0.l3y();
    };
  }
  function CheckboxVars$_get_Size_$ref_kbhccu() {
    return function (p0) {
      return p0.m3y();
    };
  }
  function CheckboxVars$_get_Spacing_$ref_o74arc() {
    return function (p0) {
      return p0.n3y();
    };
  }
  function CheckboxVars$_get_FontSize_$ref_zfsngh() {
    return function (p0) {
      return p0.h3x();
    };
  }
  function CheckboxVars$_get_IconSize_$ref_estx9n() {
    return function (p0) {
      return p0.o3y();
    };
  }
  function CheckboxVars$_get_FocusOutlineColor_$ref_rvq14e() {
    return function (p0) {
      return p0.p3y();
    };
  }
  function CheckboxVars$_get_FocusOutlineSpread_$ref_i3390y() {
    return function (p0) {
      return p0.q3y();
    };
  }
  function CheckboxVars$_get_UncheckedBackgroundColor_$ref_6v46fc() {
    return function (p0) {
      return p0.r3y();
    };
  }
  function CheckboxVars$_get_IconColor_$ref_yfe0ch() {
    return function (p0) {
      return p0.s3y();
    };
  }
  function CheckboxVars$_get_IconBackgroundColor_$ref_eer9lb() {
    return function (p0) {
      return p0.t3y();
    };
  }
  function CheckboxVars$_get_IconBackgroundHoverColor_$ref_olfszl() {
    return function (p0) {
      return p0.u3y();
    };
  }
  function CheckboxVars$_get_TransitionDuration_$ref_mdqjzu() {
    return function (p0) {
      return p0.v3y();
    };
  }
  function CheckboxVars() {
    CheckboxVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().m3b();
    tmp.w3x_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_cssRem(0.125);
    tmp_0.x3x_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = get_cssRem(0.125);
    tmp_1.y3x_1 = StyleVariable_0(tmp0_defaultFallback_1, 'silk');
    this.z3x_1 = StyleVariable('silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_cssRem(0.5);
    tmp_2.a3y_1 = StyleVariable_0(tmp0_defaultFallback_2, 'silk');
    this.b3y_1 = StyleVariable('silk');
    this.c3y_1 = StyleVariable('silk');
    var tmp_3 = this;
    var tmp0_defaultFallback_3 = get_FocusOutlineColorVar().m3b();
    tmp_3.d3y_1 = StyleVariable_0(tmp0_defaultFallback_3, 'silk');
    var tmp_4 = this;
    var tmp0_defaultFallback_4 = get_cssRem(0.1875);
    tmp_4.e3y_1 = StyleVariable_0(tmp0_defaultFallback_4, 'silk');
    this.f3y_1 = StyleVariable('silk');
    this.g3y_1 = StyleVariable('silk');
    this.h3y_1 = StyleVariable('silk');
    this.i3y_1 = StyleVariable('silk');
    var tmp_5 = this;
    var tmp0_defaultFallback_5 = TransitionDurationVars_getInstance().w3y().m3b();
    tmp_5.j3y_1 = StyleVariable_1(tmp0_defaultFallback_5, 'silk');
  }
  protoOf(CheckboxVars).x3u = function () {
    var tmp = KProperty1;
    return this.w3x_1.s3b(this, getPropertyCallableRef('BorderColor', 1, tmp, CheckboxVars$_get_BorderColor_$ref_a3dxo(), null));
  };
  protoOf(CheckboxVars).k3y = function () {
    var tmp = KProperty1;
    return this.x3x_1.s3b(this, getPropertyCallableRef('BorderRadius', 1, tmp, CheckboxVars$_get_BorderRadius_$ref_auagi9(), null));
  };
  protoOf(CheckboxVars).l3y = function () {
    var tmp = KProperty1;
    return this.y3x_1.s3b(this, getPropertyCallableRef('BorderWidth', 1, tmp, CheckboxVars$_get_BorderWidth_$ref_n68vn5(), null));
  };
  protoOf(CheckboxVars).m3y = function () {
    var tmp = KProperty1;
    return this.z3x_1.s3b(this, getPropertyCallableRef('Size', 1, tmp, CheckboxVars$_get_Size_$ref_kbhccu(), null));
  };
  protoOf(CheckboxVars).n3y = function () {
    var tmp = KProperty1;
    return this.a3y_1.s3b(this, getPropertyCallableRef('Spacing', 1, tmp, CheckboxVars$_get_Spacing_$ref_o74arc(), null));
  };
  protoOf(CheckboxVars).h3x = function () {
    var tmp = KProperty1;
    return this.b3y_1.s3b(this, getPropertyCallableRef('FontSize', 1, tmp, CheckboxVars$_get_FontSize_$ref_zfsngh(), null));
  };
  protoOf(CheckboxVars).o3y = function () {
    var tmp = KProperty1;
    return this.c3y_1.s3b(this, getPropertyCallableRef('IconSize', 1, tmp, CheckboxVars$_get_IconSize_$ref_estx9n(), null));
  };
  protoOf(CheckboxVars).p3y = function () {
    var tmp = KProperty1;
    return this.d3y_1.s3b(this, getPropertyCallableRef('FocusOutlineColor', 1, tmp, CheckboxVars$_get_FocusOutlineColor_$ref_rvq14e(), null));
  };
  protoOf(CheckboxVars).q3y = function () {
    var tmp = KProperty1;
    return this.e3y_1.s3b(this, getPropertyCallableRef('FocusOutlineSpread', 1, tmp, CheckboxVars$_get_FocusOutlineSpread_$ref_i3390y(), null));
  };
  protoOf(CheckboxVars).r3y = function () {
    var tmp = KProperty1;
    return this.f3y_1.s3b(this, getPropertyCallableRef('UncheckedBackgroundColor', 1, tmp, CheckboxVars$_get_UncheckedBackgroundColor_$ref_6v46fc(), null));
  };
  protoOf(CheckboxVars).s3y = function () {
    var tmp = KProperty1;
    return this.g3y_1.s3b(this, getPropertyCallableRef('IconColor', 1, tmp, CheckboxVars$_get_IconColor_$ref_yfe0ch(), null));
  };
  protoOf(CheckboxVars).t3y = function () {
    var tmp = KProperty1;
    return this.h3y_1.s3b(this, getPropertyCallableRef('IconBackgroundColor', 1, tmp, CheckboxVars$_get_IconBackgroundColor_$ref_eer9lb(), null));
  };
  protoOf(CheckboxVars).u3y = function () {
    var tmp = KProperty1;
    return this.i3y_1.s3b(this, getPropertyCallableRef('IconBackgroundHoverColor', 1, tmp, CheckboxVars$_get_IconBackgroundHoverColor_$ref_olfszl(), null));
  };
  protoOf(CheckboxVars).v3y = function () {
    var tmp = KProperty1;
    return this.j3y_1.s3b(this, getPropertyCallableRef('TransitionDuration', 1, tmp, CheckboxVars$_get_TransitionDuration_$ref_mdqjzu(), null));
  };
  var CheckboxVars_instance;
  function CheckboxVars_getInstance() {
    if (CheckboxVars_instance == null)
      new CheckboxVars();
    return CheckboxVars_instance;
  }
  function Companion_1() {
    Companion_instance_21 = this;
    this.x3y_1 = new CheckboxSize(get_cssRem(0.875), get_cssRem(0.45), FontSizeVars_getInstance().t3x().m3b());
    this.y3y_1 = new CheckboxSize(get_cssRem(1), get_cssRem(0.625), FontSizeVars_getInstance().u3x().m3b());
    this.z3y_1 = new CheckboxSize(get_cssRem(1.25), get_cssRem(0.8), FontSizeVars_getInstance().v3x().m3b());
  }
  var Companion_instance_21;
  function Companion_getInstance_3() {
    if (Companion_instance_21 == null)
      new Companion_1();
    return Companion_instance_21;
  }
  function CheckboxSize(boxSize, iconSize, fontSize) {
    Companion_getInstance_3();
    Base_init_$Init$(setVariable(setVariable(setVariable(Companion_instance, CheckboxVars_getInstance().m3y(), boxSize), CheckboxVars_getInstance().o3y(), iconSize), CheckboxVars_getInstance().h3x(), fontSize), VOID, this);
  }
  function CheckboxStyle$lambda($this$CssStyle) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$CssStyle.b3o(CheckboxStyle$lambda$lambda);
    return Unit_instance;
  }
  function CheckboxStyle$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    var tmp = cursor(fontSize(userSelect(gap(Companion_instance, CheckboxVars_getInstance().n3y().m3b()), Companion_instance_3.j39()), CheckboxVars_getInstance().h3x().m3b()), Companion_instance_1.h39());
    // Inline function 'org.jetbrains.compose.web.css.Companion.Relative' call
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'relative';
    return position(tmp, tmp$ret$3);
  }
  function CheckboxEnabledAnim$lambda($this$Keyframes) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$Keyframes.s3q(CheckboxEnabledAnim$lambda$lambda);
    $this$Keyframes.t3q(CheckboxEnabledAnim$lambda$lambda_0);
    return Unit_instance;
  }
  function CheckboxEnabledAnim$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    return opacity(Companion_instance, 0);
  }
  function CheckboxEnabledAnim$lambda$lambda_0() {
    _init_properties_Checkbox_kt__x46qhp();
    return opacity(Companion_instance, 1);
  }
  function CheckboxIconContainerStyle$lambda($this$CssStyle) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$CssStyle.b3o(CheckboxIconContainerStyle$lambda$lambda);
    return Unit_instance;
  }
  function CheckboxIconContainerStyle$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    var tmp = size(fontSize(Companion_instance, CheckboxVars_getInstance().o3y().m3b()), CheckboxVars_getInstance().m3y().m3b());
    var tmp_0 = CheckboxVars_getInstance().l3y().m3b();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return transition(borderRadius(border(tmp, tmp_0, 'solid', CheckboxVars_getInstance().x3u().m3b()), CheckboxVars_getInstance().k3y().m3b()), Companion_instance_2.e3c(listOf(['background-color', 'border-color']), CheckboxVars_getInstance().v3y().m3b()));
  }
  function UncheckedCheckboxIconContainerVariant$lambda($this$addVariantBase) {
    _init_properties_Checkbox_kt__x46qhp();
    return backgroundColor(Companion_instance, CheckboxVars_getInstance().r3y().m3b());
  }
  function CheckedCheckboxIconContainerVariant$lambda($this$addVariant) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$addVariant.b3o(CheckedCheckboxIconContainerVariant$lambda$lambda);
    return Unit_instance;
  }
  function CheckedCheckboxIconContainerVariant$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    var tmp = backgroundColor(Companion_instance, CheckboxVars_getInstance().t3y().m3b());
    return border_0(tmp, CheckedCheckboxIconContainerVariant$lambda$lambda$lambda);
  }
  function CheckedCheckboxIconContainerVariant$lambda$lambda$lambda($this$border) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$border.c3l(CheckboxVars_getInstance().t3y().m3b());
    return Unit_instance;
  }
  function CheckboxIconStyle$lambda($this$base) {
    _init_properties_Checkbox_kt__x46qhp();
    return color(size(Companion_instance, CheckboxVars_getInstance().m3y().m3b()), CheckboxVars_getInstance().s3y().m3b());
  }
  function CheckboxInputVariant$lambda($this$addVariant) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$addVariant.b3o(CheckboxInputVariant$lambda$lambda);
    $this$addVariant.d3o(':focus-visible + *', CheckboxInputVariant$lambda$lambda_0);
    $this$addVariant.d3o(':not([aria-disabled]):hover + *', CheckboxInputVariant$lambda$lambda_1);
    return Unit_instance;
  }
  function CheckboxInputVariant$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    return get_HiddenInputModifier();
  }
  function CheckboxInputVariant$lambda$lambda_0() {
    _init_properties_Checkbox_kt__x46qhp();
    return boxShadow_0(Companion_instance, VOID, VOID, VOID, CheckboxVars_getInstance().q3y().m3b(), CheckboxVars_getInstance().p3y().m3b());
  }
  function CheckboxInputVariant$lambda$lambda_1() {
    _init_properties_Checkbox_kt__x46qhp();
    return setVariable(Companion_instance, CheckboxVars_getInstance().t3y(), CheckboxVars_getInstance().u3y().m3b());
  }
  var properties_initialized_Checkbox_kt_pem0wr;
  function _init_properties_Checkbox_kt__x46qhp() {
    if (!properties_initialized_Checkbox_kt_pem0wr) {
      properties_initialized_Checkbox_kt_pem0wr = true;
      var tmp = rowClasses(Companion_instance, VOID, CenterVertically_instance);
      CheckboxStyle = CssStyle(tmp, CheckboxStyle$lambda);
      CheckboxEnabledAnim = new Keyframes(CheckboxEnabledAnim$lambda);
      CheckboxIconContainerStyle = CssStyle(VOID, CheckboxIconContainerStyle$lambda);
      var tmp_0 = get_CheckboxIconContainerStyle();
      UncheckedCheckboxIconContainerVariant = addVariantBase(tmp_0, VOID, UncheckedCheckboxIconContainerVariant$lambda);
      var tmp_1 = get_CheckboxIconContainerStyle();
      CheckedCheckboxIconContainerVariant = addVariant(tmp_1, VOID, CheckedCheckboxIconContainerVariant$lambda);
      var tmp_2 = Companion_instance_5;
      CheckboxIconStyle = base(tmp_2, VOID, CheckboxIconStyle$lambda);
      var tmp_3 = get_InputStyle();
      CheckboxInputVariant = addVariant(tmp_3, VOID, CheckboxInputVariant$lambda);
      com_varabyte_kobweb_silk_components_forms_CheckboxDefaults$stable = com_varabyte_kobweb_silk_style_CssStyle_Restricted_Base$stableprop_getter();
      com_varabyte_kobweb_silk_components_forms_CheckboxVars$stable = 8;
      com_varabyte_kobweb_silk_components_forms_CheckboxSize$stable = com_varabyte_kobweb_silk_style_CssStyle_Restricted_Base$stableprop_getter();
      com_varabyte_kobweb_silk_components_forms_CheckboxIconScope$stable = 0;
    }
  }
  function get_HiddenInputModifier() {
    _init_properties_Input_kt__b04mg8();
    return HiddenInputModifier;
  }
  var HiddenInputModifier;
  function get_InputGroupStyle() {
    _init_properties_Input_kt__b04mg8();
    return InputGroupStyle;
  }
  var InputGroupStyle;
  function get_InputStyle() {
    _init_properties_Input_kt__b04mg8();
    return InputStyle;
  }
  var InputStyle;
  function get_OutlinedInputVariant() {
    _init_properties_Input_kt__b04mg8();
    return OutlinedInputVariant;
  }
  var OutlinedInputVariant;
  function get_FilledInputVariant() {
    _init_properties_Input_kt__b04mg8();
    return FilledInputVariant;
  }
  var FilledInputVariant;
  function get_FlushedInputVariant() {
    _init_properties_Input_kt__b04mg8();
    return FlushedInputVariant;
  }
  var FlushedInputVariant;
  function get_UnstyledInputVariant() {
    _init_properties_Input_kt__b04mg8();
    return UnstyledInputVariant;
  }
  var UnstyledInputVariant;
  var com_varabyte_kobweb_silk_components_forms_InputDefaults$stable;
  var com_varabyte_kobweb_silk_components_forms_InputVars$stable;
  var com_varabyte_kobweb_silk_components_forms_InputParams$stable;
  var com_varabyte_kobweb_silk_components_forms_InputGroupScope$stable;
  var com_varabyte_kobweb_silk_components_forms_InputSize$stable;
  function InputVars$_get_BorderColor_$ref_2lp9kr() {
    return function (p0) {
      return p0.x3u();
    };
  }
  function InputVars$_get_BorderRadius_$ref_t6une2() {
    return function (p0) {
      return p0.k3y();
    };
  }
  function InputVars$_get_BorderFocusColor_$ref_h84gjz() {
    return function (p0) {
      return p0.q3z();
    };
  }
  function InputVars$_get_BorderHoverColor_$ref_71bc0l() {
    return function (p0) {
      return p0.r3z();
    };
  }
  function InputVars$_get_BorderInvalidColor_$ref_nnzjrk() {
    return function (p0) {
      return p0.s3z();
    };
  }
  function InputVars$_get_ColorTransitionDuration_$ref_bo92hm() {
    return function (p0) {
      return p0.d3v();
    };
  }
  function InputVars$_get_FilledColor_$ref_xjpdgx() {
    return function (p0) {
      return p0.t3z();
    };
  }
  function InputVars$_get_FilledHoverColor_$ref_ae4fhd() {
    return function (p0) {
      return p0.u3z();
    };
  }
  function InputVars$_get_FilledFocusColor_$ref_ynk81x() {
    return function (p0) {
      return p0.v3z();
    };
  }
  function InputVars$_get_FontSize_$ref_4vtdgo() {
    return function (p0) {
      return p0.h3x();
    };
  }
  function InputVars$_get_Height_$ref_qojn9d() {
    return function (p0) {
      return p0.i3x();
    };
  }
  function InputVars$_get_Padding_$ref_z3xou9() {
    return function (p0) {
      return p0.w3z();
    };
  }
  function InputVars$_get_PlaceholderOpacity_$ref_a9qjzk() {
    return function (p0) {
      return p0.x3z();
    };
  }
  function InputVars$_get_PlaceholderColor_$ref_7qanko() {
    return function (p0) {
      return p0.y3z();
    };
  }
  function InputVars() {
    InputVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().m3b();
    tmp.a3z_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    this.b3z_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_FocusOutlineColorVar().m3b();
    tmp_0.c3z_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    this.d3z_1 = StyleVariable('silk');
    this.e3z_1 = StyleVariable('silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = TransitionDurationVars_getInstance().m3v().m3b();
    tmp_1.f3z_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
    this.g3z_1 = StyleVariable('silk');
    this.h3z_1 = StyleVariable('silk');
    this.i3z_1 = StyleVariable('silk');
    this.j3z_1 = StyleVariable('silk');
    this.k3z_1 = StyleVariable('silk');
    this.l3z_1 = StyleVariable('silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_PlaceholderOpacityVar().m3b();
    tmp_2.m3z_1 = StyleVariable_2(tmp0_defaultFallback_2, 'silk');
    var tmp_3 = this;
    var tmp0_defaultFallback_3 = get_PlaceholderColorVar().m3b();
    tmp_3.n3z_1 = StyleVariable_0(tmp0_defaultFallback_3, 'silk');
    var tmp_4 = this;
    var tmp0_defaultFallback_4 = get_cssRem(2.25);
    tmp_4.o3z_1 = StyleVariable_0(tmp0_defaultFallback_4, 'silk');
    var tmp_5 = this;
    var tmp0_defaultFallback_5 = get_cssRem(2.25);
    tmp_5.p3z_1 = StyleVariable_0(tmp0_defaultFallback_5, 'silk');
  }
  protoOf(InputVars).x3u = function () {
    var tmp = KProperty1;
    return this.a3z_1.s3b(this, getPropertyCallableRef('BorderColor', 1, tmp, InputVars$_get_BorderColor_$ref_2lp9kr(), null));
  };
  protoOf(InputVars).k3y = function () {
    var tmp = KProperty1;
    return this.b3z_1.s3b(this, getPropertyCallableRef('BorderRadius', 1, tmp, InputVars$_get_BorderRadius_$ref_t6une2(), null));
  };
  protoOf(InputVars).q3z = function () {
    var tmp = KProperty1;
    return this.c3z_1.s3b(this, getPropertyCallableRef('BorderFocusColor', 1, tmp, InputVars$_get_BorderFocusColor_$ref_h84gjz(), null));
  };
  protoOf(InputVars).r3z = function () {
    var tmp = KProperty1;
    return this.d3z_1.s3b(this, getPropertyCallableRef('BorderHoverColor', 1, tmp, InputVars$_get_BorderHoverColor_$ref_71bc0l(), null));
  };
  protoOf(InputVars).s3z = function () {
    var tmp = KProperty1;
    return this.e3z_1.s3b(this, getPropertyCallableRef('BorderInvalidColor', 1, tmp, InputVars$_get_BorderInvalidColor_$ref_nnzjrk(), null));
  };
  protoOf(InputVars).d3v = function () {
    var tmp = KProperty1;
    return this.f3z_1.s3b(this, getPropertyCallableRef('ColorTransitionDuration', 1, tmp, InputVars$_get_ColorTransitionDuration_$ref_bo92hm(), null));
  };
  protoOf(InputVars).t3z = function () {
    var tmp = KProperty1;
    return this.g3z_1.s3b(this, getPropertyCallableRef('FilledColor', 1, tmp, InputVars$_get_FilledColor_$ref_xjpdgx(), null));
  };
  protoOf(InputVars).u3z = function () {
    var tmp = KProperty1;
    return this.h3z_1.s3b(this, getPropertyCallableRef('FilledHoverColor', 1, tmp, InputVars$_get_FilledHoverColor_$ref_ae4fhd(), null));
  };
  protoOf(InputVars).v3z = function () {
    var tmp = KProperty1;
    return this.i3z_1.s3b(this, getPropertyCallableRef('FilledFocusColor', 1, tmp, InputVars$_get_FilledFocusColor_$ref_ynk81x(), null));
  };
  protoOf(InputVars).h3x = function () {
    var tmp = KProperty1;
    return this.j3z_1.s3b(this, getPropertyCallableRef('FontSize', 1, tmp, InputVars$_get_FontSize_$ref_4vtdgo(), null));
  };
  protoOf(InputVars).i3x = function () {
    var tmp = KProperty1;
    return this.k3z_1.s3b(this, getPropertyCallableRef('Height', 1, tmp, InputVars$_get_Height_$ref_qojn9d(), null));
  };
  protoOf(InputVars).w3z = function () {
    var tmp = KProperty1;
    return this.l3z_1.s3b(this, getPropertyCallableRef('Padding', 1, tmp, InputVars$_get_Padding_$ref_z3xou9(), null));
  };
  protoOf(InputVars).x3z = function () {
    var tmp = KProperty1;
    return this.m3z_1.s3b(this, getPropertyCallableRef('PlaceholderOpacity', 1, tmp, InputVars$_get_PlaceholderOpacity_$ref_a9qjzk(), null));
  };
  protoOf(InputVars).y3z = function () {
    var tmp = KProperty1;
    return this.n3z_1.s3b(this, getPropertyCallableRef('PlaceholderColor', 1, tmp, InputVars$_get_PlaceholderColor_$ref_7qanko(), null));
  };
  var InputVars_instance;
  function InputVars_getInstance() {
    if (InputVars_instance == null)
      new InputVars();
    return InputVars_instance;
  }
  function inputPadding(_this__u8e3s4) {
    _init_properties_Input_kt__b04mg8();
    var padding = InputVars_getInstance().w3z().m3b();
    return paddingInline(_this__u8e3s4, padding, padding);
  }
  function Companion_2() {
    Companion_instance_22 = this;
    this.z3z_1 = new InputSize(FontSizeVars_getInstance().s3x().m3b(), get_cssRem(1.25), get_cssRem(0.375), BorderRadiusVars_getInstance().s3x().m3b());
    this.a40_1 = new InputSize(FontSizeVars_getInstance().t3x().m3b(), get_cssRem(1.75), get_cssRem(0.5), BorderRadiusVars_getInstance().t3x().m3b());
    this.b40_1 = new InputSize(FontSizeVars_getInstance().u3x().m3b(), get_cssRem(2.25), get_cssRem(0.625), BorderRadiusVars_getInstance().u3x().m3b());
    this.c40_1 = new InputSize(FontSizeVars_getInstance().v3x().m3b(), get_cssRem(2.5), get_cssRem(0.75), BorderRadiusVars_getInstance().u3x().m3b());
  }
  var Companion_instance_22;
  function Companion_getInstance_4() {
    if (Companion_instance_22 == null)
      new Companion_2();
    return Companion_instance_22;
  }
  function InputSize(fontSize, height, padding, borderRadius) {
    Companion_getInstance_4();
    Base_init_$Init$(setVariable(setVariable(setVariable(setVariable(Companion_instance, InputVars_getInstance().h3x(), fontSize), InputVars_getInstance().i3x(), height), InputVars_getInstance().w3z(), padding), InputVars_getInstance().k3y(), borderRadius), VOID, this);
  }
  function InputGroupStyle$lambda($this$base) {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_instance;
    var tmp_0 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = outline(tmp, tmp_0, 'solid', Colors_instance.e3k());
    var tmp_2 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return fontSize(borderRadius(border(tmp_1, tmp_2, 'solid', Colors_instance.e3k()), InputVars_getInstance().k3y().m3b()), InputVars_getInstance().h3x().m3b());
  }
  function InputStyle$lambda($this$CssStyle) {
    _init_properties_Input_kt__b04mg8();
    $this$CssStyle.b3o(InputStyle$lambda$lambda);
    var tmp = get_placeholder($this$CssStyle);
    $this$CssStyle.e3q(tmp, InputStyle$lambda$lambda_0);
    return Unit_instance;
  }
  function InputStyle$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = backgroundColor(fontSize(height(color(appearance(Companion_instance, Companion_instance_15.j39()), get_ColorVar().m3b()), InputVars_getInstance().i3x().m3b()), InputVars_getInstance().h3x().m3b()), Colors_instance.e3k());
    var tmp_0 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = outline(tmp, tmp_0, 'solid', Colors_instance.e3k());
    var tmp_2 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return transition(border(tmp_1, tmp_2, 'solid', Colors_instance.e3k()), Companion_instance_2.e3c(listOf(['border-color', 'box-shadow', 'background-color']), InputVars_getInstance().d3v().m3b()));
  }
  function InputStyle$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return color(opacity(Companion_instance, InputVars_getInstance().x3z().m3b()), InputVars_getInstance().y3z().m3b());
  }
  function OutlinedInputVariant$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    $this$addVariant.b3o(OutlinedInputVariant$lambda$lambda);
    var tmp = get_ariaInvalid($this$addVariant);
    $this$addVariant.e3q(tmp, OutlinedInputVariant$lambda$lambda_0);
    var tmp_0 = get_hover($this$addVariant).a3p(not($this$addVariant, [get_disabled($this$addVariant)]));
    $this$addVariant.e3q(tmp_0, OutlinedInputVariant$lambda$lambda_1);
    var tmp_1 = get_focusVisible($this$addVariant).a3p(not($this$addVariant, [get_disabled($this$addVariant)]));
    $this$addVariant.e3q(tmp_1, OutlinedInputVariant$lambda$lambda_2);
    return Unit_instance;
  }
  function invoke$bordered(_this__u8e3s4, color) {
    var tmp = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return boxShadow_0(border(_this__u8e3s4, tmp, 'solid', color), VOID, VOID, VOID, get_px(1), color);
  }
  function OutlinedInputVariant$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = borderRadius(inputPadding(Companion_instance), InputVars_getInstance().k3y().m3b());
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return border(tmp, tmp_0, 'solid', InputVars_getInstance().x3u().m3b());
  }
  function OutlinedInputVariant$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered(Companion_instance, InputVars_getInstance().s3z().m3b());
  }
  function OutlinedInputVariant$lambda$lambda_1() {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_instance;
    return border_0(tmp, OutlinedInputVariant$lambda$lambda$lambda);
  }
  function OutlinedInputVariant$lambda$lambda$lambda($this$border) {
    _init_properties_Input_kt__b04mg8();
    $this$border.c3l(InputVars_getInstance().r3z().m3b());
    return Unit_instance;
  }
  function OutlinedInputVariant$lambda$lambda_2() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered(Companion_instance, InputVars_getInstance().q3z().m3b());
  }
  function FilledInputVariant$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    $this$addVariant.b3o(FilledInputVariant$lambda$lambda);
    var tmp = get_hover($this$addVariant).a3p(not($this$addVariant, [get_disabled($this$addVariant)]));
    $this$addVariant.e3q(tmp, FilledInputVariant$lambda$lambda_0);
    var tmp_0 = get_ariaInvalid($this$addVariant);
    $this$addVariant.e3q(tmp_0, FilledInputVariant$lambda$lambda_1);
    var tmp_1 = get_focusVisible($this$addVariant).a3p(not($this$addVariant, [get_disabled($this$addVariant)]));
    $this$addVariant.e3q(tmp_1, FilledInputVariant$lambda$lambda_2);
    return Unit_instance;
  }
  function FilledInputVariant$lambda$bordered$lambda($color) {
    return function ($this$border) {
      $this$border.c3l($color);
      return Unit_instance;
    };
  }
  function invoke$bordered_0(_this__u8e3s4, color) {
    return boxShadow_0(border_0(_this__u8e3s4, FilledInputVariant$lambda$bordered$lambda(color)), VOID, VOID, VOID, get_px(1), color);
  }
  function FilledInputVariant$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = borderRadius(backgroundColor(inputPadding(Companion_instance), InputVars_getInstance().t3z().m3b()), InputVars_getInstance().k3y().m3b());
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return border(tmp, tmp_0, 'solid', Colors_instance.e3k());
  }
  function FilledInputVariant$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return backgroundColor(Companion_instance, InputVars_getInstance().u3z().m3b());
  }
  function FilledInputVariant$lambda$lambda_1() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_0(Companion_instance, InputVars_getInstance().s3z().m3b());
  }
  function FilledInputVariant$lambda$lambda_2() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_0(backgroundColor(Companion_instance, InputVars_getInstance().v3z().m3b()), InputVars_getInstance().q3z().m3b());
  }
  function FlushedInputVariant$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    $this$addVariant.b3o(FlushedInputVariant$lambda$lambda);
    var tmp = get_ariaInvalid($this$addVariant);
    $this$addVariant.e3q(tmp, FlushedInputVariant$lambda$lambda_0);
    var tmp_0 = get_hover($this$addVariant).a3p(not($this$addVariant, [get_disabled($this$addVariant)]));
    $this$addVariant.e3q(tmp_0, FlushedInputVariant$lambda$lambda_1);
    var tmp_1 = get_focusVisible($this$addVariant).a3p(not($this$addVariant, [get_disabled($this$addVariant)]));
    $this$addVariant.e3q(tmp_1, FlushedInputVariant$lambda$lambda_2);
    return Unit_instance;
  }
  function FlushedInputVariant$lambda$bordered$lambda($color) {
    return function ($this$border) {
      $this$border.c3l($color);
      return Unit_instance;
    };
  }
  function invoke$bordered_1(_this__u8e3s4, color) {
    return boxShadow_0(border_0(_this__u8e3s4, FlushedInputVariant$lambda$bordered$lambda(color)), VOID, get_px(1), VOID, VOID, color);
  }
  function FlushedInputVariant$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_instance;
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return borderBottom(tmp, tmp_0, 'solid', InputVars_getInstance().x3u().m3b());
  }
  function FlushedInputVariant$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_1(Companion_instance, InputVars_getInstance().s3z().m3b());
  }
  function FlushedInputVariant$lambda$lambda_1() {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_instance;
    return border_0(tmp, FlushedInputVariant$lambda$lambda$lambda);
  }
  function FlushedInputVariant$lambda$lambda$lambda($this$border) {
    _init_properties_Input_kt__b04mg8();
    $this$border.c3l(InputVars_getInstance().r3z().m3b());
    return Unit_instance;
  }
  function FlushedInputVariant$lambda$lambda_2() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_1(Companion_instance, InputVars_getInstance().q3z().m3b());
  }
  function UnstyledInputVariant$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    return Unit_instance;
  }
  var properties_initialized_Input_kt_tklayu;
  function _init_properties_Input_kt__b04mg8() {
    if (!properties_initialized_Input_kt_tklayu) {
      properties_initialized_Input_kt_tklayu = true;
      var tmp = whiteSpace(overflow_0(clip(padding(margin_1(size(border(Companion_instance, get_px(0)), get_px(1)), get_px(-1)), get_px(0)), RectF_init_$Create$(50.0)), Companion_instance_4.y3a()), Companion_instance_12.w3b());
      // Inline function 'org.jetbrains.compose.web.css.Companion.Absolute' call
      // Inline function 'org.jetbrains.compose.web.css.Position' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$3 = 'absolute';
      HiddenInputModifier = position(tmp, tmp$ret$3);
      var tmp_0 = Companion_instance_5;
      InputGroupStyle = base(tmp_0, VOID, InputGroupStyle$lambda);
      InputStyle = CssStyle(VOID, InputStyle$lambda);
      var tmp_1 = get_InputStyle();
      OutlinedInputVariant = addVariant(tmp_1, VOID, OutlinedInputVariant$lambda);
      var tmp_2 = get_InputStyle();
      FilledInputVariant = addVariant(tmp_2, VOID, FilledInputVariant$lambda);
      var tmp_3 = get_InputStyle();
      FlushedInputVariant = addVariant(tmp_3, VOID, FlushedInputVariant$lambda);
      var tmp_4 = get_InputStyle();
      UnstyledInputVariant = addVariant(tmp_4, VOID, UnstyledInputVariant$lambda);
      com_varabyte_kobweb_silk_components_forms_InputDefaults$stable = com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() | com_varabyte_kobweb_silk_style_CssStyle_Restricted_Base$stableprop_getter();
      com_varabyte_kobweb_silk_components_forms_InputVars$stable = 8;
      com_varabyte_kobweb_silk_components_forms_InputParams$stable = 8;
      com_varabyte_kobweb_silk_components_forms_InputGroupScope$stable = 8;
      com_varabyte_kobweb_silk_components_forms_InputSize$stable = com_varabyte_kobweb_silk_style_CssStyle_Restricted_Base$stableprop_getter();
    }
  }
  function get_SwitchStyle() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchStyle;
  }
  var SwitchStyle;
  function get_SwitchTrackStyle() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchTrackStyle;
  }
  var SwitchTrackStyle;
  function get_SwitchInputVariant() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchInputVariant;
  }
  var SwitchInputVariant;
  function get_SwitchThumbStyle() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchThumbStyle;
  }
  var SwitchThumbStyle;
  var com_varabyte_kobweb_silk_components_forms_SwitchVars$stable;
  var com_varabyte_kobweb_silk_components_forms_SwitchSize$stable;
  function SwitchVars$_get_BorderRadius_$ref_6ja2gw() {
    return function (p0) {
      return p0.k3y();
    };
  }
  function SwitchVars$_get_TrackWidth_$ref_ivpddp() {
    return function (p0) {
      return p0.q40();
    };
  }
  function SwitchVars$_get_TrackHeight_$ref_eiptze() {
    return function (p0) {
      return p0.r40();
    };
  }
  function SwitchVars$_get_TrackPadding_$ref_d8tr4o() {
    return function (p0) {
      return p0.s40();
    };
  }
  function SwitchVars$_get_TrackBackgroundColor_$ref_jnuze4() {
    return function (p0) {
      return p0.t40();
    };
  }
  function SwitchVars$_get_FocusColor_$ref_72ulnx() {
    return function (p0) {
      return p0.u40();
    };
  }
  function SwitchVars$_get_ThumbOffset_$ref_5e86z1() {
    return function (p0) {
      return p0.v40();
    };
  }
  function SwitchVars$_get_ThumbColor_$ref_jy53rl() {
    return function (p0) {
      return p0.w40();
    };
  }
  function SwitchVars$_get_TransitionDuration_$ref_o1aprp() {
    return function (p0) {
      return p0.v3y();
    };
  }
  function SwitchVars() {
    SwitchVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_px(9999);
    tmp.h40_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    this.i40_1 = StyleVariable('silk');
    this.j40_1 = StyleVariable('silk');
    this.k40_1 = StyleVariable('silk');
    this.l40_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_FocusOutlineColorVar().m3b();
    tmp_0.m40_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    this.n40_1 = StyleVariable('silk');
    this.o40_1 = StyleVariable('silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = TransitionDurationVars_getInstance().x40().m3b();
    tmp_1.p40_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
  }
  protoOf(SwitchVars).k3y = function () {
    var tmp = KProperty1;
    return this.h40_1.s3b(this, getPropertyCallableRef('BorderRadius', 1, tmp, SwitchVars$_get_BorderRadius_$ref_6ja2gw(), null));
  };
  protoOf(SwitchVars).q40 = function () {
    var tmp = KProperty1;
    return this.i40_1.s3b(this, getPropertyCallableRef('TrackWidth', 1, tmp, SwitchVars$_get_TrackWidth_$ref_ivpddp(), null));
  };
  protoOf(SwitchVars).r40 = function () {
    var tmp = KProperty1;
    return this.j40_1.s3b(this, getPropertyCallableRef('TrackHeight', 1, tmp, SwitchVars$_get_TrackHeight_$ref_eiptze(), null));
  };
  protoOf(SwitchVars).s40 = function () {
    var tmp = KProperty1;
    return this.k40_1.s3b(this, getPropertyCallableRef('TrackPadding', 1, tmp, SwitchVars$_get_TrackPadding_$ref_d8tr4o(), null));
  };
  protoOf(SwitchVars).t40 = function () {
    var tmp = KProperty1;
    return this.l40_1.s3b(this, getPropertyCallableRef('TrackBackgroundColor', 1, tmp, SwitchVars$_get_TrackBackgroundColor_$ref_jnuze4(), null));
  };
  protoOf(SwitchVars).u40 = function () {
    var tmp = KProperty1;
    return this.m40_1.s3b(this, getPropertyCallableRef('FocusColor', 1, tmp, SwitchVars$_get_FocusColor_$ref_72ulnx(), null));
  };
  protoOf(SwitchVars).v40 = function () {
    var tmp = KProperty1;
    return this.n40_1.s3b(this, getPropertyCallableRef('ThumbOffset', 1, tmp, SwitchVars$_get_ThumbOffset_$ref_5e86z1(), null));
  };
  protoOf(SwitchVars).w40 = function () {
    var tmp = KProperty1;
    return this.o40_1.s3b(this, getPropertyCallableRef('ThumbColor', 1, tmp, SwitchVars$_get_ThumbColor_$ref_jy53rl(), null));
  };
  protoOf(SwitchVars).v3y = function () {
    var tmp = KProperty1;
    return this.p40_1.s3b(this, getPropertyCallableRef('TransitionDuration', 1, tmp, SwitchVars$_get_TransitionDuration_$ref_o1aprp(), null));
  };
  var SwitchVars_instance;
  function SwitchVars_getInstance() {
    if (SwitchVars_instance == null)
      new SwitchVars();
    return SwitchVars_instance;
  }
  function Companion_3() {
    Companion_instance_23 = this;
    this.y40_1 = new SwitchSize(get_cssRem(1.375), get_cssRem(0.75));
    this.z40_1 = new SwitchSize(get_cssRem(1.875), get_cssRem(1));
    this.a41_1 = new SwitchSize(get_cssRem(2.875), get_cssRem(1.5));
  }
  var Companion_instance_23;
  function Companion_getInstance_5() {
    if (Companion_instance_23 == null)
      new Companion_3();
    return Companion_instance_23;
  }
  function SwitchSize(width, height, padding) {
    Companion_getInstance_5();
    padding = padding === VOID ? get_cssRem(0.188) : padding;
    Base_init_$Init$(setVariable(setVariable(setVariable(Companion_instance, SwitchVars_getInstance().q40(), width), SwitchVars_getInstance().r40(), height), SwitchVars_getInstance().s40(), padding), VOID, this);
  }
  function SwitchStyle$lambda($this$base) {
    _init_properties_Switch_kt__dwcqr0();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Relative' call
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'relative';
    return position(tmp, tmp$ret$3);
  }
  function SwitchTrackStyle$lambda($this$CssStyle) {
    _init_properties_Switch_kt__dwcqr0();
    $this$CssStyle.b3o(SwitchTrackStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle).a3p(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    $this$CssStyle.e3q(tmp, SwitchTrackStyle$lambda$lambda_0);
    return Unit_instance;
  }
  function SwitchTrackStyle$lambda$lambda() {
    _init_properties_Switch_kt__dwcqr0();
    return boxSizing(transition_0(backgroundColor(borderRadius(padding(minHeight(height(minWidth(width(Companion_instance, SwitchVars_getInstance().q40().m3b()), SwitchVars_getInstance().q40().m3b()), SwitchVars_getInstance().r40().m3b()), SwitchVars_getInstance().r40().m3b()), SwitchVars_getInstance().s40().m3b()), SwitchVars_getInstance().k3y().m3b()), SwitchVars_getInstance().t40().m3b()), [Companion_instance_2.b3c('background-color', SwitchVars_getInstance().v3y().m3b())]), Companion_instance_16.x38());
  }
  function SwitchTrackStyle$lambda$lambda_0() {
    _init_properties_Switch_kt__dwcqr0();
    return cursor(Companion_instance, Companion_instance_1.h39());
  }
  function SwitchInputVariant$lambda($this$addVariant) {
    _init_properties_Switch_kt__dwcqr0();
    $this$addVariant.b3o(SwitchInputVariant$lambda$lambda);
    $this$addVariant.d3o(':focus-visible + *', SwitchInputVariant$lambda$lambda_0);
    return Unit_instance;
  }
  function SwitchInputVariant$lambda$lambda() {
    _init_properties_Switch_kt__dwcqr0();
    return get_HiddenInputModifier();
  }
  function SwitchInputVariant$lambda$lambda_0() {
    _init_properties_Switch_kt__dwcqr0();
    return boxShadow_0(Companion_instance, VOID, VOID, VOID, get_cssRem(0.1875), SwitchVars_getInstance().u40().m3b());
  }
  function SwitchThumbStyle$lambda($this$base) {
    _init_properties_Switch_kt__dwcqr0();
    return transition_0(translateX(backgroundColor(borderRadius(size(Companion_instance, SwitchVars_getInstance().r40().m3b()), SwitchVars_getInstance().k3y().m3b()), SwitchVars_getInstance().w40().m3b()), SwitchVars_getInstance().v40().m3b()), [Companion_instance_2.b3c('translate', SwitchVars_getInstance().v3y().m3b())]);
  }
  var properties_initialized_Switch_kt_7kkg8m;
  function _init_properties_Switch_kt__dwcqr0() {
    if (!properties_initialized_Switch_kt_7kkg8m) {
      properties_initialized_Switch_kt_7kkg8m = true;
      var tmp = Companion_instance_5;
      SwitchStyle = base(tmp, VOID, SwitchStyle$lambda);
      var tmp_0 = ariaHidden(tabIndex(Companion_instance, -1));
      SwitchTrackStyle = CssStyle(tmp_0, SwitchTrackStyle$lambda);
      var tmp_1 = get_InputStyle();
      SwitchInputVariant = addVariant(tmp_1, VOID, SwitchInputVariant$lambda);
      var tmp_2 = Companion_instance_5;
      SwitchThumbStyle = base(tmp_2, VOID, SwitchThumbStyle$lambda);
      com_varabyte_kobweb_silk_components_forms_SwitchVars$stable = 8;
      com_varabyte_kobweb_silk_components_forms_SwitchSize$stable = com_varabyte_kobweb_silk_style_CssStyle_Restricted_Base$stableprop_getter();
    }
  }
  function get_CanvasStyle() {
    _init_properties_Canvas_kt__g1lz20();
    return CanvasStyle;
  }
  var CanvasStyle;
  var com_varabyte_kobweb_silk_components_graphics_RenderScope$stable;
  var com_varabyte_kobweb_silk_components_graphics_CanvasRepainter$stable;
  function CanvasStyle$lambda($this$CssStyle) {
    _init_properties_Canvas_kt__g1lz20();
    return Unit_instance;
  }
  var properties_initialized_Canvas_kt_i28dei;
  function _init_properties_Canvas_kt__g1lz20() {
    if (!properties_initialized_Canvas_kt_i28dei) {
      properties_initialized_Canvas_kt_i28dei = true;
      CanvasStyle = CssStyle(VOID, CanvasStyle$lambda);
      com_varabyte_kobweb_silk_components_graphics_RenderScope$stable = 0;
      com_varabyte_kobweb_silk_components_graphics_CanvasRepainter$stable = 8;
    }
  }
  function ExclaimIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.e1h(1482883947);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.r1h(modifier_0._v) ? 4 : 2);
    if ($composer_0.w1h(!(($dirty & 3) === 2), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      var tmp = Companion_instance_17.z3c(16);
      createIcon(tmp, null, new Fill(), toAttrs(modifier_0._v), ComposableSingletons$ExclaimIconKt_getInstance().b41_1, $composer_0, 24576 | com_varabyte_kobweb_compose_dom_svg_ViewBox$stableprop_getter(), 2);
    } else {
      $composer_0.j1h();
    }
    var tmp0_safe_receiver = $composer_0.f1h();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y21(ExclaimIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_7(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.x2n(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$ExclaimIconKt$lambda$_675482057$lambda_ieignf($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.p1h();
    var tmp;
    if (false || it === Companion_getInstance().r1g_1) {
      var value = ComposableSingletons$ExclaimIconKt$lambda$_675482057$lambda$lambda_6t7l8g;
      $composer_0.q1h(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    Path($this$createIcon, tmp$ret$3, $composer_0, 48 | 14 & $changed);
    return Unit_instance;
  }
  function ComposableSingletons$ExclaimIconKt$lambda$_675482057$lambda$lambda_6t7l8g($this$Path) {
    $this$Path.p3d('M 0 1.75 C 0 0.784 0.784 0 1.75 0 h 12.5 C 15.216 0 16 0.784 16 1.75 v 9.5 A 1.75 1.75 0 0 1 14.25 13 H 8.06 l -2.573 2.573 A 1.458 1.458 0 0 1 3 14.543 V 13 H 1.75 A 1.75 1.75 0 0 1 0 11.25 Z m 1.75 -0.25 a 0.25 0.25 0 0 0 -0.25 0.25 v 9.5 c 0 0.138 0.112 0.25 0.25 0.25 h 2 a 0.75 0.75 0 0 1 0.75 0.75 v 2.19 l 2.72 -2.72 a 0.749 0.749 0 0 1 0.53 -0.22 h 6.5 a 0.25 0.25 0 0 0 0.25 -0.25 v -9.5 a 0.25 0.25 0 0 0 -0.25 -0.25 Z m 7 2.25 v 2.5 a 0.75 0.75 0 0 1 -1.5 0 v -2.5 a 0.75 0.75 0 0 1 1.5 0 Z M 9 9 a 1 1 0 1 1 -2 0 a 1 1 0 0 1 2 0 Z');
    return Unit_instance;
  }
  function ComposableSingletons$ExclaimIconKt() {
    ComposableSingletons$ExclaimIconKt_instance = this;
    var tmp = this;
    tmp.b41_1 = ComposableLambda$invoke$ref_7(composableLambdaInstance(-675482057, false, ComposableSingletons$ExclaimIconKt$lambda$_675482057$lambda_ieignf));
  }
  var ComposableSingletons$ExclaimIconKt_instance;
  function ComposableSingletons$ExclaimIconKt_getInstance() {
    if (ComposableSingletons$ExclaimIconKt_instance == null)
      new ComposableSingletons$ExclaimIconKt();
    return ComposableSingletons$ExclaimIconKt_instance;
  }
  function ExclaimIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      ExclaimIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function InfoIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.e1h(197779673);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.r1h(modifier_0._v) ? 4 : 2);
    if ($composer_0.w1h(!(($dirty & 3) === 2), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      var tmp = Companion_instance_17.z3c(16);
      createIcon(tmp, null, new Fill(), toAttrs(modifier_0._v), ComposableSingletons$InfoIconKt_getInstance().c41_1, $composer_0, 24576 | com_varabyte_kobweb_compose_dom_svg_ViewBox$stableprop_getter(), 2);
    } else {
      $composer_0.j1h();
    }
    var tmp0_safe_receiver = $composer_0.f1h();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y21(InfoIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_8(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.x2n(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$InfoIconKt$lambda$_954934107$lambda_jf0t4a($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.p1h();
    var tmp;
    if (false || it === Companion_getInstance().r1g_1) {
      var value = ComposableSingletons$InfoIconKt$lambda$_954934107$lambda$lambda_hfr7b3;
      $composer_0.q1h(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    Path($this$createIcon, tmp$ret$3, $composer_0, 48 | 14 & $changed);
    return Unit_instance;
  }
  function ComposableSingletons$InfoIconKt$lambda$_954934107$lambda$lambda_hfr7b3($this$Path) {
    $this$Path.p3d('M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z');
    return Unit_instance;
  }
  function ComposableSingletons$InfoIconKt() {
    ComposableSingletons$InfoIconKt_instance = this;
    var tmp = this;
    tmp.c41_1 = ComposableLambda$invoke$ref_8(composableLambdaInstance(-954934107, false, ComposableSingletons$InfoIconKt$lambda$_954934107$lambda_jf0t4a));
  }
  var ComposableSingletons$InfoIconKt_instance;
  function ComposableSingletons$InfoIconKt_getInstance() {
    if (ComposableSingletons$InfoIconKt_instance == null)
      new ComposableSingletons$InfoIconKt();
    return ComposableSingletons$InfoIconKt_instance;
  }
  function InfoIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      InfoIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function LightbulbIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.e1h(-1309236181);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.r1h(modifier_0._v) ? 4 : 2);
    if ($composer_0.w1h(!(($dirty & 3) === 2), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      var tmp = Companion_instance_17.z3c(16);
      createIcon(tmp, null, new Fill(), toAttrs(modifier_0._v), ComposableSingletons$LightbulbIconKt_getInstance().d41_1, $composer_0, 24576 | com_varabyte_kobweb_compose_dom_svg_ViewBox$stableprop_getter(), 2);
    } else {
      $composer_0.j1h();
    }
    var tmp0_safe_receiver = $composer_0.f1h();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y21(LightbulbIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_9(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.x2n(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$LightbulbIconKt$lambda$977424631$lambda($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.p1h();
    var tmp;
    if (false || it === Companion_getInstance().r1g_1) {
      var value = ComposableSingletons$LightbulbIconKt$lambda$977424631$lambda$lambda;
      $composer_0.q1h(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    Path($this$createIcon, tmp$ret$3, $composer_0, 48 | 14 & $changed);
    return Unit_instance;
  }
  function ComposableSingletons$LightbulbIconKt$lambda$977424631$lambda$lambda($this$Path) {
    $this$Path.p3d('M 8 1.5 c -2.363 0 -4 1.69 -4 3.75 c 0 0.984 0.424 1.625 0.984 2.304 l 0.214 0.253 c 0.223 0.264 0.47 0.556 0.673 0.848 c 0.284 0.411 0.537 0.896 0.621 1.49 a 0.75 0.75 0 0 1 -1.484 0.211 c -0.04 -0.282 -0.163 -0.547 -0.37 -0.847 a 8.456 8.456 0 0 0 -0.542 -0.68 c -0.084 -0.1 -0.173 -0.205 -0.268 -0.32 C 3.201 7.75 2.5 6.766 2.5 5.25 C 2.5 2.31 4.863 0 8 0 s 5.5 2.31 5.5 5.25 c 0 1.516 -0.701 2.5 -1.328 3.259 c -0.095 0.115 -0.184 0.22 -0.268 0.319 c -0.207 0.245 -0.383 0.453 -0.541 0.681 c -0.208 0.3 -0.33 0.565 -0.37 0.847 a 0.751 0.751 0 0 1 -1.485 -0.212 c 0.084 -0.593 0.337 -1.078 0.621 -1.489 c 0.203 -0.292 0.45 -0.584 0.673 -0.848 c 0.075 -0.088 0.147 -0.173 0.213 -0.253 c 0.561 -0.679 0.985 -1.32 0.985 -2.304 c 0 -2.06 -1.637 -3.75 -4 -3.75 Z M 5.75 12 h 4.5 a 0.75 0.75 0 0 1 0 1.5 h -4.5 a 0.75 0.75 0 0 1 0 -1.5 Z M 6 15.25 a 0.75 0.75 0 0 1 0.75 -0.75 h 2.5 a 0.75 0.75 0 0 1 0 1.5 h -2.5 a 0.75 0.75 0 0 1 -0.75 -0.75 Z');
    return Unit_instance;
  }
  function ComposableSingletons$LightbulbIconKt() {
    ComposableSingletons$LightbulbIconKt_instance = this;
    var tmp = this;
    tmp.d41_1 = ComposableLambda$invoke$ref_9(composableLambdaInstance(977424631, false, ComposableSingletons$LightbulbIconKt$lambda$977424631$lambda));
  }
  var ComposableSingletons$LightbulbIconKt_instance;
  function ComposableSingletons$LightbulbIconKt_getInstance() {
    if (ComposableSingletons$LightbulbIconKt_instance == null)
      new ComposableSingletons$LightbulbIconKt();
    return ComposableSingletons$LightbulbIconKt_instance;
  }
  function LightbulbIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      LightbulbIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function MoonIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.e1h(-24696525);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.r1h(modifier_0._v) ? 4 : 2);
    if ($composer_0.w1h(!(($dirty & 3) === 2), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      var tmp = Companion_instance_17.z3c(200);
      createIcon(tmp, null, new Stroke(20), toAttrs(modifier_0._v), ComposableSingletons$MoonIconKt_getInstance().e41_1, $composer_0, 24576 | com_varabyte_kobweb_compose_dom_svg_ViewBox$stableprop_getter(), 2);
    } else {
      $composer_0.j1h();
    }
    var tmp0_safe_receiver = $composer_0.f1h();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y21(MoonIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_10(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.x2n(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$MoonIconKt$lambda$_1177410305$lambda_hkyo1o($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.p1h();
    var tmp;
    if (false || it === Companion_getInstance().r1g_1) {
      var value = ComposableSingletons$MoonIconKt$lambda$_1177410305$lambda$lambda_3ur1k7;
      $composer_0.q1h(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    Path($this$createIcon, tmp$ret$3, $composer_0, 48 | 14 & $changed);
    return Unit_instance;
  }
  function ComposableSingletons$MoonIconKt$lambda$_1177410305$lambda$lambda_3ur1k7($this$Path) {
    $this$Path.n3d(ComposableSingletons$MoonIconKt$lambda$_1177410305$lambda$lambda$lambda_22jt5w);
    return Unit_instance;
  }
  function ComposableSingletons$MoonIconKt$lambda$_1177410305$lambda$lambda$lambda_22jt5w($this$d) {
    $this$d.r3d(175, 106.583);
    $this$d.w3d(75, 75, 0, 1, 1, 93.417, 25);
    $this$d.w3d(58.333, 58.333, 0, 0, 0, 175, 106.583);
    $this$d.x3d();
    return Unit_instance;
  }
  function ComposableSingletons$MoonIconKt() {
    ComposableSingletons$MoonIconKt_instance = this;
    var tmp = this;
    tmp.e41_1 = ComposableLambda$invoke$ref_10(composableLambdaInstance(-1177410305, false, ComposableSingletons$MoonIconKt$lambda$_1177410305$lambda_hkyo1o));
  }
  var ComposableSingletons$MoonIconKt_instance;
  function ComposableSingletons$MoonIconKt_getInstance() {
    if (ComposableSingletons$MoonIconKt_instance == null)
      new ComposableSingletons$MoonIconKt();
    return ComposableSingletons$MoonIconKt_instance;
  }
  function MoonIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      MoonIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function QuestionIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.e1h(-1830362903);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.r1h(modifier_0._v) ? 4 : 2);
    if ($composer_0.w1h(!(($dirty & 3) === 2), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      createIcon(null, null, new Stroke(2), toAttrs(modifier_0._v), ComposableSingletons$QuestionIconKt_getInstance().f41_1, $composer_0, 24576, 3);
    } else {
      $composer_0.j1h();
    }
    var tmp0_safe_receiver = $composer_0.f1h();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y21(QuestionIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_11(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.x2n(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$QuestionIconKt$lambda$_1550888779$lambda_b59ksy($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.p1h();
    var tmp;
    if (false || it === Companion_getInstance().r1g_1) {
      var value = ComposableSingletons$QuestionIconKt$lambda$_1550888779$lambda$lambda_qvstoj;
      $composer_0.q1h(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    Path($this$createIcon, tmp$ret$3, $composer_0, 48 | 14 & $changed);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it_0 = $composer_0.p1h();
    var tmp_1;
    if (false || it_0 === Companion_getInstance().r1g_1) {
      var value_0 = ComposableSingletons$QuestionIconKt$lambda$_1550888779$lambda$lambda_qvstoj_0;
      $composer_0.q1h(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp$ret$7 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    Path($this$createIcon, tmp$ret$7, $composer_0, 48 | 14 & $changed);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it_1 = $composer_0.p1h();
    var tmp_3;
    if (false || it_1 === Companion_getInstance().r1g_1) {
      var value_1 = ComposableSingletons$QuestionIconKt$lambda$_1550888779$lambda$lambda_qvstoj_1;
      $composer_0.q1h(value_1);
      tmp_3 = value_1;
    } else {
      tmp_3 = it_1;
    }
    var tmp_4 = tmp_3;
    var tmp$ret$11 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
    Circle($this$createIcon, tmp$ret$11, $composer_0, 48 | 14 & $changed);
    return Unit_instance;
  }
  function ComposableSingletons$QuestionIconKt$lambda$_1550888779$lambda$lambda_qvstoj($this$Path) {
    $this$Path.q3d(SVGStrokeLineCap_Round_getInstance());
    $this$Path.p3d('M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25');
    return Unit_instance;
  }
  function ComposableSingletons$QuestionIconKt$lambda$_1550888779$lambda$lambda_qvstoj_0($this$Path) {
    $this$Path.q3d(SVGStrokeLineCap_Round_getInstance());
    $this$Path.p3d('M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0');
    return Unit_instance;
  }
  function ComposableSingletons$QuestionIconKt$lambda$_1550888779$lambda$lambda_qvstoj_1($this$Circle) {
    $this$Circle.b3e(10);
    $this$Circle.c3e(12);
    $this$Circle.d3e(12);
    $this$Circle.a3e(11.25);
    return Unit_instance;
  }
  function ComposableSingletons$QuestionIconKt() {
    ComposableSingletons$QuestionIconKt_instance = this;
    var tmp = this;
    tmp.f41_1 = ComposableLambda$invoke$ref_11(composableLambdaInstance(-1550888779, false, ComposableSingletons$QuestionIconKt$lambda$_1550888779$lambda_b59ksy));
  }
  var ComposableSingletons$QuestionIconKt_instance;
  function ComposableSingletons$QuestionIconKt_getInstance() {
    if (ComposableSingletons$QuestionIconKt_instance == null)
      new ComposableSingletons$QuestionIconKt();
    return ComposableSingletons$QuestionIconKt_instance;
  }
  function QuestionIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      QuestionIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function QuoteIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.e1h(-1516926133);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.r1h(modifier_0._v) ? 4 : 2);
    if ($composer_0.w1h(!(($dirty & 3) === 2), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      var tmp = Companion_instance_17.z3c(300);
      createIcon(tmp, null, new Fill(), toAttrs(modifier_0._v), ComposableSingletons$QuoteIconKt_getInstance().g41_1, $composer_0, 24576 | com_varabyte_kobweb_compose_dom_svg_ViewBox$stableprop_getter(), 2);
    } else {
      $composer_0.j1h();
    }
    var tmp0_safe_receiver = $composer_0.f1h();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y21(QuoteIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_12(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.x2n(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$QuoteIconKt$lambda$_1173306345$lambda_5akkrz($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.p1h();
    var tmp;
    if (false || it === Companion_getInstance().r1g_1) {
      var value = ComposableSingletons$QuoteIconKt$lambda$_1173306345$lambda$lambda_1v3ns4;
      $composer_0.q1h(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    Path($this$createIcon, tmp$ret$3, $composer_0, 48 | 14 & $changed);
    return Unit_instance;
  }
  function ComposableSingletons$QuoteIconKt$lambda$_1173306345$lambda$lambda_1v3ns4($this$Path) {
    $this$Path.p3d('m175.6 204.73 22.19 46.49C258.61 223.15 278 189.49 278 151.18V48.78H175.6v102.4h51.2c0 15.64-12.42 35.66-51.2 53.55zm-153.6 0 22.19 46.49c60.83-28.07 80.21-61.73 80.21-100.04V48.78H22v102.4h51.2c0 15.64-12.42 35.66-51.2 53.55z');
    return Unit_instance;
  }
  function ComposableSingletons$QuoteIconKt() {
    ComposableSingletons$QuoteIconKt_instance = this;
    var tmp = this;
    tmp.g41_1 = ComposableLambda$invoke$ref_12(composableLambdaInstance(-1173306345, false, ComposableSingletons$QuoteIconKt$lambda$_1173306345$lambda_5akkrz));
  }
  var ComposableSingletons$QuoteIconKt_instance;
  function ComposableSingletons$QuoteIconKt_getInstance() {
    if (ComposableSingletons$QuoteIconKt_instance == null)
      new ComposableSingletons$QuoteIconKt();
    return ComposableSingletons$QuoteIconKt_instance;
  }
  function QuoteIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      QuoteIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function StopIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.e1h(637478449);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.r1h(modifier_0._v) ? 4 : 2);
    if ($composer_0.w1h(!(($dirty & 3) === 2), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      var tmp = Companion_instance_17.z3c(16);
      createIcon(tmp, null, new Fill(), toAttrs(modifier_0._v), ComposableSingletons$StopIconKt_getInstance().h41_1, $composer_0, 24576 | com_varabyte_kobweb_compose_dom_svg_ViewBox$stableprop_getter(), 2);
    } else {
      $composer_0.j1h();
    }
    var tmp0_safe_receiver = $composer_0.f1h();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y21(StopIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_13(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.x2n(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$StopIconKt$lambda$_515235331$lambda_6se70q($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.p1h();
    var tmp;
    if (false || it === Companion_getInstance().r1g_1) {
      var value = ComposableSingletons$StopIconKt$lambda$_515235331$lambda$lambda_u1w1jf;
      $composer_0.q1h(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    Path($this$createIcon, tmp$ret$3, $composer_0, 48 | 14 & $changed);
    return Unit_instance;
  }
  function ComposableSingletons$StopIconKt$lambda$_515235331$lambda$lambda_u1w1jf($this$Path) {
    $this$Path.p3d('M 4.47 0.22 A 0.749 0.749 0 0 1 5 0 h 6 c 0.199 0 0.389 0.079 0.53 0.22 l 4.25 4.25 c 0.141 0.14 0.22 0.331 0.22 0.53 v 6 a 0.749 0.749 0 0 1 -0.22 0.53 l -4.25 4.25 A 0.749 0.749 0 0 1 11 16 H 5 a 0.749 0.749 0 0 1 -0.53 -0.22 L 0.22 11.53 A 0.749 0.749 0 0 1 0 11 V 5 c 0 -0.199 0.079 -0.389 0.22 -0.53 Z m 0.84 1.28 L 1.5 5.31 v 5.38 l 3.81 3.81 h 5.38 l 3.81 -3.81 V 5.31 L 10.69 1.5 Z M 8 4 a 0.75 0.75 0 0 1 0.75 0.75 v 3.5 a 0.75 0.75 0 0 1 -1.5 0 v -3.5 A 0.75 0.75 0 0 1 8 4 Z m 0 8 a 1 1 0 1 1 0 -2 a 1 1 0 0 1 0 2 Z');
    return Unit_instance;
  }
  function ComposableSingletons$StopIconKt() {
    ComposableSingletons$StopIconKt_instance = this;
    var tmp = this;
    tmp.h41_1 = ComposableLambda$invoke$ref_13(composableLambdaInstance(-515235331, false, ComposableSingletons$StopIconKt$lambda$_515235331$lambda_6se70q));
  }
  var ComposableSingletons$StopIconKt_instance;
  function ComposableSingletons$StopIconKt_getInstance() {
    if (ComposableSingletons$StopIconKt_instance == null)
      new ComposableSingletons$StopIconKt();
    return ComposableSingletons$StopIconKt_instance;
  }
  function StopIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      StopIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function SunIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.e1h(-1078008821);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.r1h(modifier_0._v) ? 4 : 2);
    if ($composer_0.w1h(!(($dirty & 3) === 2), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      createIcon(null, null, new Stroke(2), toAttrs(modifier_0._v), ComposableSingletons$SunIconKt_getInstance().j41_1, $composer_0, 24576, 3);
    } else {
      $composer_0.j1h();
    }
    var tmp0_safe_receiver = $composer_0.f1h();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y21(SunIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_14(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.x2n(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$SunIconKt$lambda$214795082$lambda($this$Group, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.p1h();
    var tmp;
    if (false || it === Companion_getInstance().r1g_1) {
      var value = ComposableSingletons$SunIconKt$lambda$214795082$lambda$lambda;
      $composer_0.q1h(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    Circle($this$Group, tmp$ret$3, $composer_0, 48 | 14 & $changed);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it_0 = $composer_0.p1h();
    var tmp_1;
    if (false || it_0 === Companion_getInstance().r1g_1) {
      var value_0 = ComposableSingletons$SunIconKt$lambda$214795082$lambda$lambda_0;
      $composer_0.q1h(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp$ret$7 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    Path($this$Group, tmp$ret$7, $composer_0, 48 | 14 & $changed);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it_1 = $composer_0.p1h();
    var tmp_3;
    if (false || it_1 === Companion_getInstance().r1g_1) {
      var value_1 = ComposableSingletons$SunIconKt$lambda$214795082$lambda$lambda_1;
      $composer_0.q1h(value_1);
      tmp_3 = value_1;
    } else {
      tmp_3 = it_1;
    }
    var tmp_4 = tmp_3;
    var tmp$ret$11 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
    Path($this$Group, tmp$ret$11, $composer_0, 48 | 14 & $changed);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it_2 = $composer_0.p1h();
    var tmp_5;
    if (false || it_2 === Companion_getInstance().r1g_1) {
      var value_2 = ComposableSingletons$SunIconKt$lambda$214795082$lambda$lambda_2;
      $composer_0.q1h(value_2);
      tmp_5 = value_2;
    } else {
      tmp_5 = it_2;
    }
    var tmp_6 = tmp_5;
    var tmp$ret$15 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
    Path($this$Group, tmp$ret$15, $composer_0, 48 | 14 & $changed);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it_3 = $composer_0.p1h();
    var tmp_7;
    if (false || it_3 === Companion_getInstance().r1g_1) {
      var value_3 = ComposableSingletons$SunIconKt$lambda$214795082$lambda$lambda_3;
      $composer_0.q1h(value_3);
      tmp_7 = value_3;
    } else {
      tmp_7 = it_3;
    }
    var tmp_8 = tmp_7;
    var tmp$ret$19 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
    Path($this$Group, tmp$ret$19, $composer_0, 48 | 14 & $changed);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it_4 = $composer_0.p1h();
    var tmp_9;
    if (false || it_4 === Companion_getInstance().r1g_1) {
      var value_4 = ComposableSingletons$SunIconKt$lambda$214795082$lambda$lambda_4;
      $composer_0.q1h(value_4);
      tmp_9 = value_4;
    } else {
      tmp_9 = it_4;
    }
    var tmp_10 = tmp_9;
    var tmp$ret$23 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
    Path($this$Group, tmp$ret$23, $composer_0, 48 | 14 & $changed);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it_5 = $composer_0.p1h();
    var tmp_11;
    if (false || it_5 === Companion_getInstance().r1g_1) {
      var value_5 = ComposableSingletons$SunIconKt$lambda$214795082$lambda$lambda_5;
      $composer_0.q1h(value_5);
      tmp_11 = value_5;
    } else {
      tmp_11 = it_5;
    }
    var tmp_12 = tmp_11;
    var tmp$ret$27 = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
    Path($this$Group, tmp$ret$27, $composer_0, 48 | 14 & $changed);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it_6 = $composer_0.p1h();
    var tmp_13;
    if (false || it_6 === Companion_getInstance().r1g_1) {
      var value_6 = ComposableSingletons$SunIconKt$lambda$214795082$lambda$lambda_6;
      $composer_0.q1h(value_6);
      tmp_13 = value_6;
    } else {
      tmp_13 = it_6;
    }
    var tmp_14 = tmp_13;
    var tmp$ret$31 = (tmp_14 == null ? true : !(tmp_14 == null)) ? tmp_14 : THROW_CCE();
    Path($this$Group, tmp$ret$31, $composer_0, 48 | 14 & $changed);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it_7 = $composer_0.p1h();
    var tmp_15;
    if (false || it_7 === Companion_getInstance().r1g_1) {
      var value_7 = ComposableSingletons$SunIconKt$lambda$214795082$lambda$lambda_7;
      $composer_0.q1h(value_7);
      tmp_15 = value_7;
    } else {
      tmp_15 = it_7;
    }
    var tmp_16 = tmp_15;
    var tmp$ret$35 = (tmp_16 == null ? true : !(tmp_16 == null)) ? tmp_16 : THROW_CCE();
    Path($this$Group, tmp$ret$35, $composer_0, 48 | 14 & $changed);
    return Unit_instance;
  }
  function ComposableSingletons$SunIconKt$lambda$214795082$lambda$lambda($this$Circle) {
    $this$Circle.c3e(12);
    $this$Circle.d3e(12);
    $this$Circle.a3e(5);
    return Unit_instance;
  }
  function ComposableSingletons$SunIconKt$lambda$214795082$lambda$lambda_0($this$Path) {
    $this$Path.n3d(ComposableSingletons$SunIconKt$lambda$214795082$lambda$lambda$lambda);
    return Unit_instance;
  }
  function ComposableSingletons$SunIconKt$lambda$214795082$lambda$lambda$lambda($this$d) {
    $this$d.r3d(12, 1);
    $this$d.t3d(2, true);
    return Unit_instance;
  }
  function ComposableSingletons$SunIconKt$lambda$214795082$lambda$lambda_1($this$Path) {
    $this$Path.n3d(ComposableSingletons$SunIconKt$lambda$214795082$lambda$lambda$lambda_0);
    return Unit_instance;
  }
  function ComposableSingletons$SunIconKt$lambda$214795082$lambda$lambda$lambda_0($this$d) {
    $this$d.r3d(12, 21);
    $this$d.t3d(2, true);
    return Unit_instance;
  }
  function ComposableSingletons$SunIconKt$lambda$214795082$lambda$lambda_2($this$Path) {
    $this$Path.n3d(ComposableSingletons$SunIconKt$lambda$214795082$lambda$lambda$lambda_1);
    return Unit_instance;
  }
  function ComposableSingletons$SunIconKt$lambda$214795082$lambda$lambda$lambda_1($this$d) {
    $this$d.r3d(4.22, 4.22);
    $this$d.s3d(1.42, 1.42, true);
    return Unit_instance;
  }
  function ComposableSingletons$SunIconKt$lambda$214795082$lambda$lambda_3($this$Path) {
    $this$Path.n3d(ComposableSingletons$SunIconKt$lambda$214795082$lambda$lambda$lambda_2);
    return Unit_instance;
  }
  function ComposableSingletons$SunIconKt$lambda$214795082$lambda$lambda$lambda_2($this$d) {
    $this$d.r3d(18.36, 18.36);
    $this$d.s3d(1.42, 1.42, true);
    return Unit_instance;
  }
  function ComposableSingletons$SunIconKt$lambda$214795082$lambda$lambda_4($this$Path) {
    $this$Path.n3d(ComposableSingletons$SunIconKt$lambda$214795082$lambda$lambda$lambda_3);
    return Unit_instance;
  }
  function ComposableSingletons$SunIconKt$lambda$214795082$lambda$lambda$lambda_3($this$d) {
    $this$d.r3d(1, 12);
    $this$d.u3d(2, true);
    return Unit_instance;
  }
  function ComposableSingletons$SunIconKt$lambda$214795082$lambda$lambda_5($this$Path) {
    $this$Path.n3d(ComposableSingletons$SunIconKt$lambda$214795082$lambda$lambda$lambda_4);
    return Unit_instance;
  }
  function ComposableSingletons$SunIconKt$lambda$214795082$lambda$lambda$lambda_4($this$d) {
    $this$d.r3d(21, 12);
    $this$d.u3d(2, true);
    return Unit_instance;
  }
  function ComposableSingletons$SunIconKt$lambda$214795082$lambda$lambda_6($this$Path) {
    $this$Path.n3d(ComposableSingletons$SunIconKt$lambda$214795082$lambda$lambda$lambda_5);
    return Unit_instance;
  }
  function ComposableSingletons$SunIconKt$lambda$214795082$lambda$lambda$lambda_5($this$d) {
    $this$d.r3d(4.22, 19.78);
    $this$d.s3d(1.42, -1.42, true);
    return Unit_instance;
  }
  function ComposableSingletons$SunIconKt$lambda$214795082$lambda$lambda_7($this$Path) {
    $this$Path.n3d(ComposableSingletons$SunIconKt$lambda$214795082$lambda$lambda$lambda_6);
    return Unit_instance;
  }
  function ComposableSingletons$SunIconKt$lambda$214795082$lambda$lambda$lambda_6($this$d) {
    $this$d.r3d(18.36, 5.64);
    $this$d.s3d(1.42, -1.42, true);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_15(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.x2n(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$SunIconKt$lambda$149840599$lambda($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.p1h();
    var tmp;
    if (false || it === Companion_getInstance().r1g_1) {
      var value = ComposableSingletons$SunIconKt$lambda$149840599$lambda$lambda;
      $composer_0.q1h(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    Group($this$createIcon, tmp$ret$3, ComposableSingletons$SunIconKt_getInstance().i41_1, $composer_0, 432 | 14 & $changed, 0);
    return Unit_instance;
  }
  function ComposableSingletons$SunIconKt$lambda$149840599$lambda$lambda($this$Group) {
    $this$Group.f3e(SVGStrokeLineJoin_Round_getInstance());
    $this$Group.q3d(SVGStrokeLineCap_Round_getInstance());
    return Unit_instance;
  }
  function ComposableSingletons$SunIconKt() {
    ComposableSingletons$SunIconKt_instance = this;
    var tmp = this;
    tmp.i41_1 = ComposableLambda$invoke$ref_14(composableLambdaInstance(214795082, false, ComposableSingletons$SunIconKt$lambda$214795082$lambda));
    var tmp_0 = this;
    tmp_0.j41_1 = ComposableLambda$invoke$ref_15(composableLambdaInstance(149840599, false, ComposableSingletons$SunIconKt$lambda$149840599$lambda));
  }
  var ComposableSingletons$SunIconKt_instance;
  function ComposableSingletons$SunIconKt_getInstance() {
    if (ComposableSingletons$SunIconKt_instance == null)
      new ComposableSingletons$SunIconKt();
    return ComposableSingletons$SunIconKt_instance;
  }
  function SunIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      SunIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function WarningIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.e1h(1461404811);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.r1h(modifier_0._v) ? 4 : 2);
    if ($composer_0.w1h(!(($dirty & 3) === 2), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      var tmp = Companion_instance_17.z3c(16);
      createIcon(tmp, null, new Fill(), toAttrs(modifier_0._v), ComposableSingletons$WarningIconKt_getInstance().k41_1, $composer_0, 24576 | com_varabyte_kobweb_compose_dom_svg_ViewBox$stableprop_getter(), 2);
    } else {
      $composer_0.j1h();
    }
    var tmp0_safe_receiver = $composer_0.f1h();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y21(WarningIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_16(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.x2n(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$WarningIconKt$lambda$_696961193$lambda_qp68sm($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.p1h();
    var tmp;
    if (false || it === Companion_getInstance().r1g_1) {
      var value = ComposableSingletons$WarningIconKt$lambda$_696961193$lambda$lambda_cg9gpn;
      $composer_0.q1h(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    Path($this$createIcon, tmp$ret$3, $composer_0, 48 | 14 & $changed);
    return Unit_instance;
  }
  function ComposableSingletons$WarningIconKt$lambda$_696961193$lambda$lambda_cg9gpn($this$Path) {
    $this$Path.p3d('M 6.457 1.047 c 0.659 -1.234 2.427 -1.234 3.086 0 l 6.082 11.378 A 1.75 1.75 0 0 1 14.082 15 H 1.918 a 1.75 1.75 0 0 1 -1.543 -2.575 Z m 1.763 0.707 a 0.25 0.25 0 0 0 -0.44 0 L 1.698 13.132 a 0.25 0.25 0 0 0 0.22 0.368 h 12.164 a 0.25 0.25 0 0 0 0.22 -0.368 Z m 0.53 3.996 v 2.5 a 0.75 0.75 0 0 1 -1.5 0 v -2.5 a 0.75 0.75 0 0 1 1.5 0 Z M 9 11 a 1 1 0 1 1 -2 0 a 1 1 0 0 1 2 0 Z');
    return Unit_instance;
  }
  function ComposableSingletons$WarningIconKt() {
    ComposableSingletons$WarningIconKt_instance = this;
    var tmp = this;
    tmp.k41_1 = ComposableLambda$invoke$ref_16(composableLambdaInstance(-696961193, false, ComposableSingletons$WarningIconKt$lambda$_696961193$lambda_qp68sm));
  }
  var ComposableSingletons$WarningIconKt_instance;
  function ComposableSingletons$WarningIconKt_getInstance() {
    if (ComposableSingletons$WarningIconKt_instance == null)
      new ComposableSingletons$WarningIconKt();
    return ComposableSingletons$WarningIconKt_instance;
  }
  function WarningIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      WarningIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var com_varabyte_kobweb_silk_components_icons_IconRenderStyle_Fill$stable;
  var com_varabyte_kobweb_silk_components_icons_IconRenderStyle_Stroke$stable;
  function createIcon(viewBox, width, renderStyle, attrs, content, $composer, $changed, $default) {
    var viewBox_0 = {_v: viewBox};
    var width_0 = {_v: width};
    var renderStyle_0 = {_v: renderStyle};
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.e1h(-1506534634);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | (($default & 1) === 0 && (($changed & 8) === 0 ? $composer_0.r1h(viewBox_0._v) : $composer_0.u1h(viewBox_0._v)) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | (($default & 2) === 0 && $composer_0.u1h(width_0._v) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | (($default & 4) === 0 && (($changed & 512) === 0 ? $composer_0.r1h(renderStyle_0._v) : $composer_0.u1h(renderStyle_0._v)) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.u1h(attrs_0._v) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.u1h(content) ? 16384 : 8192);
    if ($composer_0.w1h(!(($dirty & 9363) === 9362), $dirty & 1)) {
      $composer_0.c1h();
      if (($changed & 1) === 0 || $composer_0.u1g()) {
        if (!(($default & 1) === 0)) {
          viewBox_0._v = Companion_instance_17.z3c(24);
          $dirty = $dirty & -15;
        }
        if (!(($default & 2) === 0)) {
          width_0._v = get_em(1);
          $dirty = $dirty & -113;
        }
        if (!(($default & 4) === 0)) {
          renderStyle_0._v = new Stroke();
          $dirty = $dirty & -897;
        }
        if (!(($default & 8) === 0)) {
          attrs_0._v = null;
        }
      } else {
        $composer_0.j1h();
        if (!(($default & 1) === 0))
          $dirty = $dirty & -15;
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
      }
      $composer_0.d1h();
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(!!(!!($composer_0.u1h(width_0._v) | (($dirty & 14 ^ 6) > 4 && $composer_0.u1h(viewBox_0._v) || ($dirty & 6) === 4)) | (($dirty & 896 ^ 384) > 256 && $composer_0.u1h(renderStyle_0._v) || ($dirty & 384) === 256)) | ($dirty & 7168) === 2048);
      // Inline function 'kotlin.let' call
      var it = tmp0.p1h();
      var tmp;
      if (invalid || it === Companion_getInstance().r1g_1) {
        var value = createIcon$lambda(width_0, viewBox_0, renderStyle_0, attrs_0);
        tmp0.q1h(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      Svg(tmp$ret$3, content, $composer_0, 112 & $dirty >> 9, 0);
    } else {
      $composer_0.j1h();
    }
    var tmp0_safe_receiver = $composer_0.f1h();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y21(createIcon$lambda_0(viewBox_0, width_0, renderStyle_0, attrs_0, content, $changed, $default));
    }
  }
  function Fill() {
  }
  function Stroke(strokeWidth) {
    strokeWidth = strokeWidth === VOID ? null : strokeWidth;
    this.l41_1 = strokeWidth;
  }
  function createIcon$lambda$lambda($this$style) {
    overflow_1($this$style, Companion_instance_4.x3a());
    return Unit_instance;
  }
  function createIcon$lambda($width, $viewBox, $renderStyle, $attrs) {
    return function ($this$Svg) {
      var tmp0_safe_receiver = $width._v;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        $this$Svg.j3d(tmp0_safe_receiver);
      }
      var tmp1_safe_receiver = $viewBox._v;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        $this$Svg.k3d(tmp1_safe_receiver.a3d_1, tmp1_safe_receiver.b3d_1, tmp1_safe_receiver.c3d_1, tmp1_safe_receiver.d3d_1);
      }
      var tmp2_safe_receiver = $renderStyle._v;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        var tmp;
        if (tmp2_safe_receiver instanceof Fill) {
          $this$Svg.i3d(SVGFillType_CurrentColor_getInstance());
          $this$Svg.g3d(SVGStrokeType_None_getInstance());
          tmp = Unit_instance;
        } else {
          if (tmp2_safe_receiver instanceof Stroke) {
            $this$Svg.g3d(SVGStrokeType_CurrentColor_getInstance());
            $this$Svg.i3d(SVGFillType_None_getInstance());
            var tmp1_safe_receiver_0 = tmp2_safe_receiver.l41_1;
            var tmp_0;
            if (tmp1_safe_receiver_0 == null) {
              tmp_0 = null;
            } else {
              // Inline function 'kotlin.let' call
              $this$Svg.h3d(tmp1_safe_receiver_0);
              tmp_0 = Unit_instance;
            }
            tmp = tmp_0;
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
      $this$Svg.z30(createIcon$lambda$lambda);
      var tmp3_safe_receiver = $attrs._v;
      if (tmp3_safe_receiver == null)
        null;
      else
        tmp3_safe_receiver($this$Svg);
      return Unit_instance;
    };
  }
  function createIcon$lambda_0($viewBox, $width, $renderStyle, $attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      createIcon($viewBox._v, $width._v, $renderStyle._v, $attrs._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function get_HorizontalDividerStyle() {
    _init_properties_Divider_kt__8b5dnr();
    return HorizontalDividerStyle;
  }
  var HorizontalDividerStyle;
  function get_VerticalDividerStyle() {
    _init_properties_Divider_kt__8b5dnr();
    return VerticalDividerStyle;
  }
  var VerticalDividerStyle;
  var com_varabyte_kobweb_silk_components_layout_DividerVars$stable;
  function DividerVars$_get_Color_$ref_qjroxu() {
    return function (p0) {
      return p0.w3u();
    };
  }
  function DividerVars$_get_Length_$ref_k75zgt() {
    return function (p0) {
      return p0.o41();
    };
  }
  function DividerVars() {
    DividerVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().m3b();
    tmp.m41_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_percent(90);
    tmp_0.n41_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
  }
  protoOf(DividerVars).w3u = function () {
    var tmp = KProperty1;
    return this.m41_1.s3b(this, getPropertyCallableRef('Color', 1, tmp, DividerVars$_get_Color_$ref_qjroxu(), null));
  };
  protoOf(DividerVars).o41 = function () {
    var tmp = KProperty1;
    return this.n41_1.s3b(this, getPropertyCallableRef('Length', 1, tmp, DividerVars$_get_Length_$ref_k75zgt(), null));
  };
  var DividerVars_instance;
  function DividerVars_getInstance() {
    if (DividerVars_instance == null)
      new DividerVars();
    return DividerVars_instance;
  }
  function HorizontalDividerStyle$lambda($this$base) {
    _init_properties_Divider_kt__8b5dnr();
    var tmp = border(Companion_instance, get_px(0));
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return width(borderTop(tmp, tmp_0, 'solid', DividerVars_getInstance().w3u().m3b()), DividerVars_getInstance().o41().m3b());
  }
  function VerticalDividerStyle$lambda($this$base) {
    _init_properties_Divider_kt__8b5dnr();
    var tmp = border(Companion_instance, get_px(0));
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return height(borderLeft(tmp, tmp_0, 'solid', DividerVars_getInstance().w3u().m3b()), DividerVars_getInstance().o41().m3b());
  }
  var properties_initialized_Divider_kt_k1kxcn;
  function _init_properties_Divider_kt__8b5dnr() {
    if (!properties_initialized_Divider_kt_k1kxcn) {
      properties_initialized_Divider_kt_k1kxcn = true;
      var tmp = Companion_instance_5;
      HorizontalDividerStyle = base(tmp, VOID, HorizontalDividerStyle$lambda);
      var tmp_0 = Companion_instance_5;
      VerticalDividerStyle = base(tmp_0, VOID, VerticalDividerStyle$lambda);
      com_varabyte_kobweb_silk_components_layout_DividerVars$stable = 8;
    }
  }
  function get_columnVariables() {
    _init_properties_SimpleGrid_kt__tvipdk();
    return columnVariables;
  }
  var columnVariables;
  function get_SimpleGridStyle() {
    _init_properties_SimpleGrid_kt__tvipdk();
    return SimpleGridStyle;
  }
  var SimpleGridStyle;
  function SimpleGridStyle$lambda($this$CssStyle) {
    _init_properties_SimpleGrid_kt__tvipdk();
    $this$CssStyle.b3o(SimpleGridStyle$lambda$lambda);
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = get_columnVariables().z1().i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      // Inline function 'kotlin.collections.component1' call
      var breakpoint = element.s1();
      // Inline function 'kotlin.collections.component2' call
      var variable = element.t1();
      $this$CssStyle.d3q(breakpoint, SimpleGridStyle$lambda$lambda_0(variable));
    }
    return Unit_instance;
  }
  function SimpleGridStyle$lambda$lambda() {
    _init_properties_SimpleGrid_kt__tvipdk();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Grid' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'grid');
  }
  function SimpleGridStyle$lambda$lambda$lambda$lambda($this$repeat) {
    _init_properties_SimpleGrid_kt__tvipdk();
    $this$repeat.u39(get_fr(1));
    return Unit_instance;
  }
  function SimpleGridStyle$lambda$lambda$lambda($variable) {
    return function ($this$gridTemplateColumns) {
      var tmp = $variable.m3b();
      $this$gridTemplateColumns.p39(tmp, SimpleGridStyle$lambda$lambda$lambda$lambda);
      return Unit_instance;
    };
  }
  function SimpleGridStyle$lambda$lambda_0($variable) {
    return function () {
      var tmp = Companion_instance;
      return gridTemplateColumns(tmp, SimpleGridStyle$lambda$lambda$lambda($variable));
    };
  }
  var properties_initialized_SimpleGrid_kt_fum19i;
  function _init_properties_SimpleGrid_kt__tvipdk() {
    if (!properties_initialized_SimpleGrid_kt_fum19i) {
      properties_initialized_SimpleGrid_kt_fum19i = true;
      // Inline function 'kotlin.collections.associateWith' call
      var this_0 = get_entries();
      var result = LinkedHashMap_init_$Create$(coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16));
      // Inline function 'kotlin.collections.associateWithTo' call
      var _iterator__ex2g4s = this_0.i();
      while (_iterator__ex2g4s.j()) {
        var element = _iterator__ex2g4s.k();
        // Inline function 'kotlin.text.lowercase' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = element.k2_1.toLowerCase();
        var tmp$ret$2 = new NumberValue('simple-grid-col-count-' + tmp$ret$1, VOID, 'silk');
        result.a2(element, tmp$ret$2);
      }
      columnVariables = result;
      SimpleGridStyle = CssStyle(VOID, SimpleGridStyle$lambda);
    }
  }
  function get_SurfaceStyle() {
    _init_properties_Surface_kt__8o7unv();
    return SurfaceStyle;
  }
  var SurfaceStyle;
  var com_varabyte_kobweb_silk_components_layout_SurfaceVars$stable;
  function SurfaceVars$_get_BackgroundColor_$ref_ysiqw0() {
    return function (p0) {
      return p0.y3u();
    };
  }
  function SurfaceVars$_get_Color_$ref_yzfonm() {
    return function (p0) {
      return p0.w3u();
    };
  }
  function SurfaceVars() {
    SurfaceVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BackgroundColorVar().m3b();
    tmp.p41_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_ColorVar().m3b();
    tmp_0.q41_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
  }
  protoOf(SurfaceVars).y3u = function () {
    var tmp = KProperty1;
    return this.p41_1.s3b(this, getPropertyCallableRef('BackgroundColor', 1, tmp, SurfaceVars$_get_BackgroundColor_$ref_ysiqw0(), null));
  };
  protoOf(SurfaceVars).w3u = function () {
    var tmp = KProperty1;
    return this.q41_1.s3b(this, getPropertyCallableRef('Color', 1, tmp, SurfaceVars$_get_Color_$ref_yzfonm(), null));
  };
  var SurfaceVars_instance;
  function SurfaceVars_getInstance() {
    if (SurfaceVars_instance == null)
      new SurfaceVars();
    return SurfaceVars_instance;
  }
  function Surface(modifier, variant, colorModeOverride, ref, content, $composer, $changed, $default) {
    _init_properties_Surface_kt__8o7unv();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var colorModeOverride_0 = {_v: colorModeOverride};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.e1h(-2017137850);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.r1h(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ((($changed & 64) === 0 ? $composer_0.r1h(variant_0._v) : $composer_0.u1h(variant_0._v)) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0) {
      var tmp;
      var tmp_0 = $composer_0;
      var tmpEnum = colorModeOverride_0._v;
      if (tmp_0.t1h(tmpEnum == null ? -1 : tmpEnum.l2_1)) {
        tmp = 256;
      } else {
        tmp = 128;
      }
      $dirty = $dirty | tmp;
    }
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ((($changed & 4096) === 0 ? $composer_0.r1h(ref_0._v) : $composer_0.u1h(ref_0._v)) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.u1h(content) ? 16384 : 8192);
    if ($composer_0.w1h(!(($dirty & 9363) === 9362), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 2) === 0)) {
        variant_0._v = null;
      }
      if (!(($default & 4) === 0)) {
        colorModeOverride_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        ref_0._v = null;
      }
      var tmp0 = toModifier(get_SurfaceStyle(), [variant_0._v], $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter() | com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() << 3).t3i(modifier_0._v);
      // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
      var tmp_1;
      if (!(colorModeOverride_0._v == null)) {
        tmp_1 = classNames(Companion_instance, [get_cssClass(colorModeOverride_0._v)]);
      } else {
        tmp_1 = Companion_instance;
      }
      var surfaceModifier = tmp0.t3i(tmp_1);
      if (colorModeOverride_0._v == null || get_useScope(Companion_getInstance_0().v3n_1)) {
        $composer_0.y1g(-1665744441);
        var tmp_2 = toAttrs(surfaceModifier);
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(555341228, true, Surface$lambda(ref_0, colorModeOverride_0, content), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.r1h(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.p1h();
        var tmp_3;
        if (invalid || it === Companion_getInstance().r1g_1) {
          var value = ComposableLambda$invoke$ref_18(dispatchReceiver);
          $composer_1.q1h(value);
          tmp_3 = value;
        } else {
          tmp_3 = it;
        }
        var tmp_4 = tmp_3;
        var tmp0_0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Div(tmp_2, tmp0_0, $composer_0, 48, 0);
        $composer_0.z1g();
      } else {
        $composer_0.y1g(-1665336667);
        // Inline function 'androidx.compose.runtime.cache' call
        var this_0 = $composer_0;
        // Inline function 'kotlin.let' call
        var it_0 = this_0.p1h();
        var tmp_5;
        if (false || it_0 === Companion_getInstance().r1g_1) {
          var value_0 = mutableStateOf(null);
          this_0.q1h(value_0);
          tmp_5 = value_0;
        } else {
          tmp_5 = it_0;
        }
        var tmp_6 = tmp_5;
        var surfaceElement$delegate = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        // Inline function 'androidx.compose.runtime.cache' call
        var this_1 = $composer_0;
        // Inline function 'kotlin.let' call
        var it_1 = this_1.p1h();
        var tmp_7;
        if (false || it_1 === Companion_getInstance().r1g_1) {
          var value_1 = Surface$lambda_2(surfaceElement$delegate);
          this_1.q1h(value_1);
          tmp_7 = value_1;
        } else {
          tmp_7 = it_1;
        }
        var tmp_8 = tmp_7;
        var tmp$ret$16 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
        var tmp_9 = toAttrs(surfaceModifier, tmp$ret$16);
        // Inline function 'kotlin.run' call
        var dispatchReceiver_0 = rememberComposableLambda(-189574461, true, Surface$lambda_3(ref_0, colorModeOverride_0, surfaceElement$delegate, content), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.r1h(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        var it_2 = $composer_2.p1h();
        var tmp_10;
        if (invalid_0 || it_2 === Companion_getInstance().r1g_1) {
          var value_2 = ComposableLambda$invoke$ref_20(dispatchReceiver_0);
          $composer_2.q1h(value_2);
          tmp_10 = value_2;
        } else {
          tmp_10 = it_2;
        }
        var tmp_11 = tmp_10;
        var tmp0_1 = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
        sourceInformationMarkerEnd($composer_2);
        Div(tmp_9, tmp0_1, $composer_0, 48, 0);
        $composer_0.z1g();
      }
    } else {
      $composer_0.j1h();
    }
    var tmp0_safe_receiver = $composer_0.f1h();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y21(Surface$lambda_4(modifier_0, variant_0, colorModeOverride_0, ref_0, content, $changed, $default));
    }
  }
  function SurfaceStyle$lambda($this$CssStyle) {
    _init_properties_Surface_kt__8o7unv();
    $this$CssStyle.b3o(SurfaceStyle$lambda$lambda);
    return Unit_instance;
  }
  function SurfaceStyle$lambda$lambda() {
    _init_properties_Surface_kt__8o7unv();
    return color(backgroundColor(Companion_instance, SurfaceVars_getInstance().y3u().m3b()), SurfaceVars_getInstance().w3u().m3b());
  }
  function Surface$lambda$lambda($content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.w1h(!(($changed & 3) === 2), $changed & 1)) {
        tmp = $content($composer_0, 0);
      } else {
        $composer_0.j1h();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_17(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.u1v(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function Surface$lambda($ref, $colorModeOverride, $content) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      registerRefScope($this$Div, $ref._v, $composer_0, 14 & $changed | com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter() << 3);
      var tmp;
      if (!($colorModeOverride._v == null)) {
        $composer_0.y1g(-43418289);
        var tmp_0 = $colorModeOverride._v.y3r();
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-152149391, true, Surface$lambda$lambda($content), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.r1h(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.p1h();
        var tmp_1;
        if (invalid || it === Companion_getInstance().r1g_1) {
          var value = ComposableLambda$invoke$ref_17(dispatchReceiver);
          $composer_1.q1h(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        CompositionLocalProvider(tmp_0, tmp0, $composer_0, 48 | androidx_compose_runtime_ProvidedValue$stableprop_getter());
        $composer_0.z1g();
        tmp = Unit_instance;
      } else {
        $composer_0.y1g(-43281331);
        $content($composer_0, 0);
        $composer_0.z1g();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_18(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.x2n(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function Surface$lambda_0($surfaceElement$delegate) {
    _init_properties_Surface_kt__8o7unv();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('surfaceElement', KMutableProperty0, true);
    return $surfaceElement$delegate.t1();
  }
  function Surface$lambda_1($surfaceElement$delegate, _set____db54di) {
    _init_properties_Surface_kt__8o7unv();
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('surfaceElement', KMutableProperty0, true);
    $surfaceElement$delegate.b17(_set____db54di);
    return Unit_instance;
  }
  function Surface$$inlined$cache$2$2$1() {
  }
  protoOf(Surface$$inlined$cache$2$2$1).kt = function () {
  };
  function Surface$lambda$lambda_0($surfaceElement$delegate) {
    return function ($this$ref, it) {
      Surface$lambda_1($surfaceElement$delegate, it);
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new Surface$$inlined$cache$2$2$1();
    };
  }
  function Surface$lambda_2($surfaceElement$delegate) {
    return function ($this$toAttrs) {
      $this$toAttrs.d31(Surface$lambda$lambda_0($surfaceElement$delegate));
      return Unit_instance;
    };
  }
  function Surface$lambda$slambda($surfaceElement, $colorModeOverride, resultContinuation) {
    this.z41_1 = $surfaceElement;
    this.a42_1 = $colorModeOverride;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Surface$lambda$slambda).d19 = function ($this$LaunchedEffect, $completion) {
    var tmp = this.e19($this$LaunchedEffect, $completion);
    tmp.h8_1 = Unit_instance;
    tmp.i8_1 = null;
    return tmp.n8();
  };
  protoOf(Surface$lambda$slambda).z8 = function (p1, $completion) {
    return this.d19((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Surface$lambda$slambda).n8 = function () {
    var suspendResult = this.h8_1;
    $sm: do
      try {
        var tmp = this.f8_1;
        if (tmp === 0) {
          this.g8_1 = 1;
          var _iterator__ex2g4s = asList(this.z41_1.classList).i();
          while (_iterator__ex2g4s.j()) {
            var element = _iterator__ex2g4s.k();
            var ident = new CssIdent(element);
            if (isSuffixedWith(ident, this.a42_1._v.s3l()) && get_SilkTheme().t3r(withColorModeSuffixRemoved(ident).f2y_1)) {
              this.z41_1.classList.replace(element, suffixedWith(ident, this.a42_1._v).f2y_1);
            }
          }
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.i8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(Surface$lambda$slambda).e19 = function ($this$LaunchedEffect, completion) {
    var i = new Surface$lambda$slambda(this.z41_1, this.a42_1, completion);
    i.b42_1 = $this$LaunchedEffect;
    return i;
  };
  function Surface$lambda$slambda_0($surfaceElement, $colorModeOverride, resultContinuation) {
    var i = new Surface$lambda$slambda($surfaceElement, $colorModeOverride, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.d19($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Surface$lambda$lambda_1($content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.w1h(!(($changed & 3) === 2), $changed & 1)) {
        tmp = $content($composer_0, 0);
      } else {
        $composer_0.j1h();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_19(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.u1v(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function Surface$lambda_3($ref, $colorModeOverride, $surfaceElement$delegate, $content) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      registerRefScope($this$Div, $ref._v, $composer_0, 14 & $changed | com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter() << 3);
      var tmp0_safe_receiver = Surface$lambda_0($surfaceElement$delegate);
      if (tmp0_safe_receiver == null) {
        $composer_0.y1g(269355054);
        $composer_0.z1g();
      } else {
        $composer_0.y1g(269355055);
        // Inline function 'kotlin.let' call
        var parentColorMode = Companion_instance_11.p3l($composer_0, 6);
        var tmp = $colorModeOverride._v;
        var tmp_0 = $composer_0.u1h(tmp0_safe_receiver);
        var tmp_1 = $composer_0;
        var tmpEnum = $colorModeOverride._v;
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = !!(tmp_0 | tmp_1.t1h(tmpEnum == null ? -1 : tmpEnum.l2_1));
        // Inline function 'kotlin.let' call
        var it = $composer_0.p1h();
        var tmp_2;
        if (invalid || it === Companion_getInstance().r1g_1) {
          var value = Surface$lambda$slambda_0(tmp0_safe_receiver, $colorModeOverride, null);
          $composer_0.q1h(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp$ret$3 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        LaunchedEffect(parentColorMode, tmp, tmp$ret$3, $composer_0, 0);
        var tmp_4 = $colorModeOverride._v.y3r();
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-1144900937, true, Surface$lambda$lambda_1($content), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_1.r1h(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it_0 = $composer_1.p1h();
        var tmp_5;
        if (invalid_0 || it_0 === Companion_getInstance().r1g_1) {
          var value_0 = ComposableLambda$invoke$ref_19(dispatchReceiver);
          $composer_1.q1h(value_0);
          tmp_5 = value_0;
        } else {
          tmp_5 = it_0;
        }
        var tmp_6 = tmp_5;
        var tmp0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        CompositionLocalProvider(tmp_4, tmp0, $composer_0, 48 | androidx_compose_runtime_ProvidedValue$stableprop_getter());
        $composer_0.z1g();
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_20(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.x2n(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function Surface$lambda_4($modifier, $variant, $colorModeOverride, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Surface($modifier._v, $variant._v, $colorModeOverride._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var properties_initialized_Surface_kt_k203pf;
  function _init_properties_Surface_kt__8o7unv() {
    if (!properties_initialized_Surface_kt_k203pf) {
      properties_initialized_Surface_kt_k203pf = true;
      SurfaceStyle = CssStyle(VOID, SurfaceStyle$lambda);
      com_varabyte_kobweb_silk_components_layout_SurfaceVars$stable = 8;
    }
  }
  var com_varabyte_kobweb_silk_components_overlay_KeepPopupOpenStrategy$stable;
  var com_varabyte_kobweb_silk_components_overlay_ManualKeepPopupOpenStrategy$stable;
  function Companion_4() {
  }
  var Companion_instance_24;
  function Companion_getInstance_6() {
    return Companion_instance_24;
  }
  function KeepPopupOpenStrategy(defaultValue) {
    defaultValue = defaultValue === VOID ? false : defaultValue;
    this.c42_1 = defaultValue;
    this.d42_1 = MutableStateFlow(this.c42_1);
    this.e42_1 = false;
    this.f42_1 = asStateFlow(this.d42_1);
  }
  protoOf(KeepPopupOpenStrategy).g42 = function (popupElement) {
    this.d42_1.b17(this.c42_1);
    this.h42(popupElement);
    this.e42_1 = true;
  };
  protoOf(KeepPopupOpenStrategy).h42 = function (popupElement) {
    return Unit_instance;
  };
  protoOf(KeepPopupOpenStrategy).i42 = function (shouldKeepOpen) {
    if (this.e42_1) {
      this.d42_1.b17(shouldKeepOpen);
    }
  };
  protoOf(KeepPopupOpenStrategy).d29 = function () {
    this.e42_1 = false;
    this.j42();
    this.d42_1.b17(this.c42_1);
  };
  protoOf(KeepPopupOpenStrategy).j42 = function () {
    return Unit_instance;
  };
  function never(_this__u8e3s4) {
    return new never$1();
  }
  function plus(_this__u8e3s4, other) {
    return combine(Companion_instance_24, [_this__u8e3s4, other]);
  }
  function onHover(_this__u8e3s4) {
    return new onHover$1();
  }
  function onFocus(_this__u8e3s4) {
    return new onFocus$1();
  }
  function get_shouldKeepOpen(_this__u8e3s4) {
    return _this__u8e3s4.f42_1.t1();
  }
  function combine(_this__u8e3s4, strategies) {
    return new combine$1(strategies);
  }
  function never$1() {
    KeepPopupOpenStrategy.call(this);
  }
  function onHover$o$onInit$lambda(this$0) {
    return function (it) {
      this$0.i42(true);
      return Unit_instance;
    };
  }
  function onHover$o$onInit$lambda_0(this$0) {
    return function (it) {
      this$0.i42(false);
      return Unit_instance;
    };
  }
  function onHover$1() {
    KeepPopupOpenStrategy.call(this);
    this.o42_1 = null;
  }
  protoOf(onHover$1).h42 = function (popupElement) {
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new EventListenerManager(popupElement);
    this_0.w2y('mouseenter', onHover$o$onInit$lambda(this));
    this_0.w2y('mouseleave', onHover$o$onInit$lambda_0(this));
    tmp.o42_1 = this_0;
  };
  protoOf(onHover$1).j42 = function () {
    ensureNotNull(this.o42_1).x2y();
    this.o42_1 = null;
  };
  function onFocus$o$onInit$lambda(this$0) {
    return function (it) {
      this$0.i42(true);
      return Unit_instance;
    };
  }
  function onFocus$o$onInit$lambda_0(this$0, $popupElement) {
    return function (evt) {
      var focusEvent = evt instanceof FocusEvent ? evt : THROW_CCE();
      var tmp = focusEvent.relatedTarget;
      var newFocus = tmp instanceof Node ? tmp : null;
      this$0.i42(!(newFocus == null) ? $popupElement.contains(newFocus) : false);
      return Unit_instance;
    };
  }
  function onFocus$1() {
    KeepPopupOpenStrategy.call(this);
    this.t42_1 = null;
  }
  protoOf(onFocus$1).h42 = function (popupElement) {
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new EventListenerManager(popupElement);
    this_0.w2y('focusin', onFocus$o$onInit$lambda(this));
    this_0.w2y('focusout', onFocus$o$onInit$lambda_0(this, popupElement));
    tmp.t42_1 = this_0;
  };
  protoOf(onFocus$1).j42 = function () {
    ensureNotNull(this.t42_1).x2y();
    this.t42_1 = null;
  };
  function combine$o$slambda($strategies, this$0, resultContinuation) {
    this.c43_1 = $strategies;
    this.d43_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(combine$o$slambda).f43 = function (it, $completion) {
    var tmp = this.g43(it, $completion);
    tmp.h8_1 = Unit_instance;
    tmp.i8_1 = null;
    return tmp.n8();
  };
  protoOf(combine$o$slambda).z8 = function (p1, $completion) {
    return this.f43((!(p1 == null) ? typeof p1 === 'boolean' : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(combine$o$slambda).n8 = function () {
    var suspendResult = this.h8_1;
    $sm: do
      try {
        var tmp = this.f8_1;
        if (tmp === 0) {
          this.g8_1 = 1;
          var tmp0 = this.c43_1;
          var tmp$ret$0;
          l$ret$1: do {
            var inductionVariable = 0;
            var last = tmp0.length;
            while (inductionVariable < last) {
              var element = tmp0[inductionVariable];
              inductionVariable = inductionVariable + 1 | 0;
              if (get_shouldKeepOpen(element)) {
                tmp$ret$0 = true;
                break l$ret$1;
              }
            }
            tmp$ret$0 = false;
          }
           while (false);
          var anyKeepOpen = tmp$ret$0;
          if (!(anyKeepOpen === this.d43_1.f42_1.t1())) {
            this.d43_1.i42(anyKeepOpen);
          }
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.i8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(combine$o$slambda).g43 = function (it, completion) {
    var i = new combine$o$slambda(this.c43_1, this.d43_1, completion);
    i.e43_1 = it;
    return i;
  };
  function combine$o$slambda_0($strategies, this$0, resultContinuation) {
    var i = new combine$o$slambda($strategies, this$0, resultContinuation);
    var l = function (it, $completion) {
      return i.f43(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function combine$1($strategies) {
    this.l43_1 = $strategies;
    KeepPopupOpenStrategy.call(this);
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$($strategies.length);
    var inductionVariable = 0;
    var last = $strategies.length;
    while (inductionVariable < last) {
      var item = $strategies[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp$ret$0 = item.f42_1;
      destination.h(tmp$ret$0);
    }
    var tmp = merge(destination);
    launchIn(onEach(tmp, combine$o$slambda_0($strategies, this, null)), CoroutineScope_0(asCoroutineDispatcher(window)));
  }
  protoOf(combine$1).h42 = function (popupElement) {
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = this.l43_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      element.g42(popupElement);
    }
  };
  protoOf(combine$1).j42 = function () {
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = this.l43_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      element.d29();
    }
  };
  var com_varabyte_kobweb_silk_components_overlay_OpenClosePopupStrategy$stable;
  var com_varabyte_kobweb_silk_components_overlay_ManualOpenClosePopupStrategy$stable;
  var com_varabyte_kobweb_silk_components_overlay_TimedOpenClosePopupStrategy$stable;
  function Companion_5() {
  }
  var Companion_instance_25;
  function Companion_getInstance_7() {
    return Companion_instance_25;
  }
  function OpenClosePopupStrategy() {
    this.m43_1 = MutableStateFlow(OpenClose_CLOSE_getInstance());
    this.n43_1 = asStateFlow(this.m43_1);
  }
  protoOf(OpenClosePopupStrategy).g42 = function (targetElement) {
    return Unit_instance;
  };
  protoOf(OpenClosePopupStrategy).d29 = function () {
    return Unit_instance;
  };
  protoOf(OpenClosePopupStrategy).o43 = function (request) {
    this.m43_1.d17(request);
  };
  var OpenClose_OPEN_instance;
  var OpenClose_CLOSE_instance;
  var OpenClose_entriesInitialized;
  function OpenClose_initEntries() {
    if (OpenClose_entriesInitialized)
      return Unit_instance;
    OpenClose_entriesInitialized = true;
    OpenClose_OPEN_instance = new OpenClose('OPEN', 0);
    OpenClose_CLOSE_instance = new OpenClose('CLOSE', 1);
  }
  function OpenClose(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function plus_0(_this__u8e3s4, other) {
    return combine_0(Companion_instance_25, [_this__u8e3s4, other]);
  }
  function onHover_0(_this__u8e3s4) {
    return new onHover$1_0();
  }
  function onFocus_0(_this__u8e3s4) {
    return new onFocus$1_0();
  }
  function combine_0(_this__u8e3s4, strategies) {
    return new combine$1_0(strategies);
  }
  function onHover$o$init$lambda(this$0) {
    return function (it) {
      this$0.o43(OpenClose_OPEN_getInstance());
      return Unit_instance;
    };
  }
  function onHover$o$init$lambda_0(this$0) {
    return function (it) {
      this$0.o43(OpenClose_CLOSE_getInstance());
      return Unit_instance;
    };
  }
  function onHover$1_0() {
    OpenClosePopupStrategy.call(this);
    this.r43_1 = null;
  }
  protoOf(onHover$1_0).g42 = function (targetElement) {
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new EventListenerManager(targetElement);
    this_0.w2y('mouseenter', onHover$o$init$lambda(this));
    this_0.w2y('mouseleave', onHover$o$init$lambda_0(this));
    if (targetElement.matches(':hover')) {
      this.o43(OpenClose_OPEN_getInstance());
    }
    tmp.r43_1 = this_0;
  };
  protoOf(onHover$1_0).d29 = function () {
    ensureNotNull(this.r43_1).x2y();
    this.r43_1 = null;
  };
  function onFocus$o$init$lambda(this$0) {
    return function (it) {
      this$0.o43(OpenClose_OPEN_getInstance());
      return Unit_instance;
    };
  }
  function onFocus$o$init$lambda_0(this$0) {
    return function (it) {
      var tmp;
      if (document.hasFocus()) {
        this$0.o43(OpenClose_CLOSE_getInstance());
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function onFocus$1_0() {
    OpenClosePopupStrategy.call(this);
    this.u43_1 = null;
  }
  protoOf(onFocus$1_0).g42 = function (targetElement) {
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new EventListenerManager(targetElement);
    this_0.w2y('focusin', onFocus$o$init$lambda(this));
    this_0.w2y('focusout', onFocus$o$init$lambda_0(this));
    if (targetElement.contains(document.activeElement)) {
      this.o43(OpenClose_OPEN_getInstance());
    }
    tmp.u43_1 = this_0;
  };
  protoOf(onFocus$1_0).d29 = function () {
    ensureNotNull(this.u43_1).x2y();
    this.u43_1 = null;
  };
  function combine$o$slambda_1(this$0, resultContinuation) {
    this.d44_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(combine$o$slambda_1).f44 = function (it, $completion) {
    var tmp = this.g44(it, $completion);
    tmp.h8_1 = Unit_instance;
    tmp.i8_1 = null;
    return tmp.n8();
  };
  protoOf(combine$o$slambda_1).z8 = function (p1, $completion) {
    return this.f44(p1 instanceof OpenClose ? p1 : THROW_CCE(), $completion);
  };
  protoOf(combine$o$slambda_1).n8 = function () {
    var suspendResult = this.h8_1;
    $sm: do
      try {
        var tmp = this.f8_1;
        if (tmp === 0) {
          this.g8_1 = 1;
          this.d44_1.o43(this.e44_1);
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.i8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(combine$o$slambda_1).g44 = function (it, completion) {
    var i = new combine$o$slambda_1(this.d44_1, completion);
    i.e44_1 = it;
    return i;
  };
  function combine$o$slambda_2(this$0, resultContinuation) {
    var i = new combine$o$slambda_1(this$0, resultContinuation);
    var l = function (it, $completion) {
      return i.f44(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function combine$1_0($strategies) {
    this.j44_1 = $strategies;
    OpenClosePopupStrategy.call(this);
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$($strategies.length);
    var inductionVariable = 0;
    var last = $strategies.length;
    while (inductionVariable < last) {
      var item = $strategies[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp$ret$0 = item.n43_1;
      destination.h(tmp$ret$0);
    }
    var tmp = merge(destination);
    launchIn(onEach(tmp, combine$o$slambda_2(this, null)), CoroutineScope_0(asCoroutineDispatcher(window)));
  }
  protoOf(combine$1_0).g42 = function (targetElement) {
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = this.j44_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      element.g42(targetElement);
    }
  };
  protoOf(combine$1_0).d29 = function () {
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = this.j44_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      element.d29();
    }
  };
  function OpenClose_OPEN_getInstance() {
    OpenClose_initEntries();
    return OpenClose_OPEN_instance;
  }
  function OpenClose_CLOSE_getInstance() {
    OpenClose_initEntries();
    return OpenClose_CLOSE_instance;
  }
  function get_OverlayStyle() {
    _init_properties_Overlay_kt__p5agwu();
    return OverlayStyle;
  }
  var OverlayStyle;
  var com_varabyte_kobweb_silk_components_overlay_OverlayVars$stable;
  function OverlayVars$_get_BackgroundColor_$ref_jn4iwz() {
    return function (p0) {
      return p0.y3u();
    };
  }
  function OverlayVars() {
    OverlayVars_instance = this;
    this.k44_1 = StyleVariable('silk');
  }
  protoOf(OverlayVars).y3u = function () {
    var tmp = KProperty1;
    return this.k44_1.s3b(this, getPropertyCallableRef('BackgroundColor', 1, tmp, OverlayVars$_get_BackgroundColor_$ref_jn4iwz(), null));
  };
  var OverlayVars_instance;
  function OverlayVars_getInstance() {
    if (OverlayVars_instance == null)
      new OverlayVars();
    return OverlayVars_instance;
  }
  function OverlayStyle$lambda($this$base) {
    _init_properties_Overlay_kt__p5agwu();
    return backgroundColor(Companion_instance, OverlayVars_getInstance().y3u().m3b());
  }
  var properties_initialized_Overlay_kt_mvmds0;
  function _init_properties_Overlay_kt__p5agwu() {
    if (!properties_initialized_Overlay_kt_mvmds0) {
      properties_initialized_Overlay_kt_mvmds0 = true;
      var tmp = Companion_instance_5;
      OverlayStyle = base(tmp, VOID, OverlayStyle$lambda);
      com_varabyte_kobweb_silk_components_overlay_OverlayVars$stable = 8;
    }
  }
  var com_varabyte_kobweb_silk_components_overlay_PopoverState_Uninitialized$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopoverState_FoundElements$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopoverState_Calculating$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopoverState_Shown$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopoverState_Hiding$stable;
  function AdvancedPopover(target, modifier, hiddenModifier, variant, showDelayMs, hideDelayMs, openCloseStrategy, placementTarget, placementStrategy, keepOpenStrategy, ref, content, $composer, $changed, $changed1, $default) {
    var modifier_0 = {_v: modifier};
    var hiddenModifier_0 = {_v: hiddenModifier};
    var variant_0 = {_v: variant};
    var showDelayMs_0 = {_v: showDelayMs};
    var hideDelayMs_0 = {_v: hideDelayMs};
    var openCloseStrategy_0 = {_v: openCloseStrategy};
    var placementTarget_0 = {_v: placementTarget};
    var placementStrategy_0 = {_v: placementStrategy};
    var keepOpenStrategy_0 = {_v: keepOpenStrategy};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.e1h(-1021473669);
    var $dirty = $changed;
    var $dirty1 = $changed1;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.u1h(target) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.r1h(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.r1h(hiddenModifier_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ((($changed & 4096) === 0 ? $composer_0.r1h(variant_0._v) : $composer_0.u1h(variant_0._v)) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.t1h(showDelayMs_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.t1h(hideDelayMs_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.u1h(openCloseStrategy_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.u1h(placementTarget_0._v) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 100663296) === 0)
      $dirty = $dirty | ($composer_0.r1h(placementStrategy_0._v) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 805306368) === 0)
      $dirty = $dirty | ($composer_0.u1h(keepOpenStrategy_0._v) ? 536870912 : 268435456);
    if (!(($default & 1024) === 0))
      $dirty1 = $dirty1 | 6;
    else if (($changed1 & 6) === 0)
      $dirty1 = $dirty1 | ((($changed1 & 8) === 0 ? $composer_0.r1h(ref_0._v) : $composer_0.u1h(ref_0._v)) ? 4 : 2);
    if (($changed1 & 48) === 0)
      $dirty1 = $dirty1 | ($composer_0.u1h(content) ? 32 : 16);
    if ($composer_0.w1h(!(($dirty & 306783379) === 306783378) || !(($dirty1 & 19) === 18), $dirty & 1)) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 4) === 0)) {
        hiddenModifier_0._v = Companion_instance;
      }
      if (!(($default & 8) === 0)) {
        variant_0._v = null;
      }
      if (!(($default & 16) === 0)) {
        showDelayMs_0._v = 0;
      }
      if (!(($default & 32) === 0)) {
        hideDelayMs_0._v = 0;
      }
      if (!(($default & 64) === 0)) {
        openCloseStrategy_0._v = null;
      }
      if (!(($default & 128) === 0)) {
        placementTarget_0._v = null;
      }
      if (!(($default & 256) === 0)) {
        placementStrategy_0._v = null;
      }
      if (!(($default & 512) === 0)) {
        keepOpenStrategy_0._v = null;
      }
      if (!(($default & 1024) === 0)) {
        ref_0._v = null;
      }
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.r1h(openCloseStrategy_0._v);
      // Inline function 'kotlin.let' call
      var it = tmp0.p1h();
      var tmp;
      if (invalid || it === Companion_getInstance().r1g_1) {
        var tmp0_elvis_lhs = openCloseStrategy_0._v;
        var value = tmp0_elvis_lhs == null ? plus_0(onHover_0(Companion_instance_25), onFocus_0(Companion_instance_25)) : tmp0_elvis_lhs;
        tmp0.q1h(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var openCloseStrategy_1 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      var tmp0_0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = !!(!!(($dirty & 896) === 256 | ($dirty & 57344) === 16384) | ($dirty & 458752) === 131072);
      // Inline function 'kotlin.let' call
      var it_0 = tmp0_0.p1h();
      var tmp_1;
      if (invalid_0 || it_0 === Companion_getInstance().r1g_1) {
        var value_0 = new PopoverShowHideSettings(hiddenModifier_0._v, showDelayMs_0._v, hideDelayMs_0._v);
        tmp0_0.q1h(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var showHideSettings = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      var tmp0_1 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = ($dirty & 234881024) === 67108864;
      // Inline function 'kotlin.let' call
      var it_1 = tmp0_1.p1h();
      var tmp_3;
      if (invalid_1 || it_1 === Companion_getInstance().r1g_1) {
        var tmp0_elvis_lhs_0 = placementStrategy_0._v;
        var value_1 = tmp0_elvis_lhs_0 == null ? Companion_instance_26.l44(PopupPlacement_Bottom_getInstance()) : tmp0_elvis_lhs_0;
        tmp0_1.q1h(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var placementStrategy_1 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      var tmp0_2 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_2 = $composer_0.r1h(keepOpenStrategy_0._v);
      // Inline function 'kotlin.let' call
      var it_2 = tmp0_2.p1h();
      var tmp_5;
      if (invalid_2 || it_2 === Companion_getInstance().r1g_1) {
        var tmp0_elvis_lhs_1 = keepOpenStrategy_0._v;
        var value_2 = tmp0_elvis_lhs_1 == null ? plus(onHover(Companion_instance_24), onFocus(Companion_instance_24)) : tmp0_elvis_lhs_1;
        tmp0_2.q1h(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var keepOpenStrategy_1 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      var tmp0_3 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_3 = !!(!!(!!($composer_0.r1h(openCloseStrategy_1) | $composer_0.r1h(showHideSettings)) | $composer_0.r1h(placementStrategy_1)) | $composer_0.r1h(keepOpenStrategy_1));
      // Inline function 'kotlin.let' call
      var it_3 = tmp0_3.p1h();
      var tmp_7;
      if (invalid_3 || it_3 === Companion_getInstance().r1g_1) {
        var value_3 = new PopoverStateController(openCloseStrategy_1, showHideSettings, placementStrategy_1, keepOpenStrategy_1);
        tmp0_3.q1h(value_3);
        tmp_7 = value_3;
      } else {
        tmp_7 = it_3;
      }
      var tmp_8 = tmp_7;
      var popoverStateController = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      var tmp_9 = Companion_instance;
      // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
      // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_10 = display(tmp_9, 'none');
      var tmp_11 = [popoverStateController, target, placementTarget_0._v];
      var tmp0_4 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_4 = !!(!!(!!($composer_0.u1h(target) | $composer_0.u1h(placementTarget_0._v)) | $composer_0.u1h(popoverStateController)) | $composer_0.u1h(openCloseStrategy_1));
      // Inline function 'kotlin.let' call
      var it_4 = tmp0_4.p1h();
      var tmp_12;
      if (invalid_4 || it_4 === Companion_getInstance().r1g_1) {
        var value_4 = AdvancedPopover$lambda(target, placementTarget_0, popoverStateController, openCloseStrategy_1);
        tmp0_4.q1h(value_4);
        tmp_12 = value_4;
      } else {
        tmp_12 = it_4;
      }
      var tmp_13 = tmp_12;
      var tmp$ret$27 = (tmp_13 == null ? true : !(tmp_13 == null)) ? tmp_13 : THROW_CCE();
      var tmp_14 = disposableRef(tmp_11, tmp$ret$27);
      Box(tmp_10, null, tmp_14, null, $composer_0, com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter() << 6, 10);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-617048177, true, AdvancedPopover$lambda_0(popoverStateController, variant_0, modifier_0, placementStrategy_1, ref_0, content), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_5 = $composer_1.r1h(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_5 = $composer_1.p1h();
      var tmp_15;
      if (invalid_5 || it_5 === Companion_getInstance().r1g_1) {
        var value_5 = ComposableLambda$invoke$ref_22(dispatchReceiver);
        $composer_1.q1h(value_5);
        tmp_15 = value_5;
      } else {
        tmp_15 = it_5;
      }
      var tmp_16 = tmp_15;
      var tmp0_5 = (tmp_16 == null ? true : !(tmp_16 == null)) ? tmp_16 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Deferred(tmp0_5, $composer_0, 6);
    } else {
      $composer_0.j1h();
    }
    var tmp0_safe_receiver = $composer_0.f1h();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y21(AdvancedPopover$lambda_1(target, modifier_0, hiddenModifier_0, variant_0, showDelayMs_0, hideDelayMs_0, openCloseStrategy_0, placementTarget_0, placementStrategy_0, keepOpenStrategy_0, ref_0, content, $changed, $changed1, $default));
    }
  }
  function PopoverShowHideSettings(hiddenModifier, showDelayMs, hideDelayMs) {
    this.m44_1 = coerceAtLeast(showDelayMs, 0);
    this.n44_1 = coerceAtLeast(hideDelayMs, 0);
    this.o44_1 = opacity(hiddenModifier, 0);
  }
  function _set__state__4o0y7v($this, _set____db54di) {
    var tmp0 = $this.s44_1;
    var tmp = KMutableProperty1;
    var tmp_0 = PopoverStateController$_get__state_$ref_b835hg_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('_state', 1, tmp, tmp_0, PopoverStateController$_set__state_$ref_qabqmo_0());
    tmp0.b17(_set____db54di);
    return Unit_instance;
  }
  function _get__state__37adl3($this) {
    var tmp0 = $this.s44_1;
    var tmp = KMutableProperty1;
    var tmp_0 = PopoverStateController$_get__state_$ref_b835hg();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('_state', 1, tmp, tmp_0, PopoverStateController$_set__state_$ref_qabqmo());
    return tmp0.t1();
  }
  function resetTimers($this) {
    window.clearTimeout($this.t44_1);
    window.clearTimeout($this.u44_1);
  }
  function PopoverStateController$_get__state_$ref_b835hg() {
    return function (p0) {
      return _get__state__37adl3(p0);
    };
  }
  function PopoverStateController$_set__state_$ref_qabqmo() {
    return function (p0, p1) {
      _set__state__4o0y7v(p0, p1);
      return Unit_instance;
    };
  }
  function PopoverStateController$_get__state_$ref_b835hg_0() {
    return function (p0) {
      return _get__state__37adl3(p0);
    };
  }
  function PopoverStateController$_set__state_$ref_qabqmo_0() {
    return function (p0, p1) {
      _set__state__4o0y7v(p0, p1);
      return Unit_instance;
    };
  }
  function PopoverStateController$requestShowPopup$lambda(this$0, $state) {
    return function () {
      _set__state__4o0y7v(this$0, new Calculating($state.v44(), this$0.p44_1));
      var tmp0_safe_receiver = $state.v44().y44_1;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.takeIf' call
        var tmp_0;
        // Inline function 'kotlin.let' call
        var rect = tmp0_safe_receiver.getBoundingClientRect();
        if (rect.width * rect.height > 0) {
          tmp_0 = tmp0_safe_receiver;
        } else {
          tmp_0 = null;
        }
        tmp = tmp_0;
      }
      var tmp_1;
      if (tmp == null) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.let' call
        this$0.z44();
        tmp_1 = Unit_instance;
      }
      return tmp_1;
    };
  }
  function PopoverStateController$requestHidePopup$lambda(this$0, $state) {
    return function () {
      var tmp;
      if (!get_shouldKeepOpen(this$0.r44_1)) {
        var tmp0_safe_receiver = $state.v44().y44_1;
        var tmp_0;
        if (tmp0_safe_receiver == null) {
          tmp_0 = null;
        } else {
          // Inline function 'kotlin.let' call
          tmp_0 = toDouble(window.getComputedStyle(tmp0_safe_receiver).getPropertyValue('opacity'));
        }
        var currentOpacity = tmp_0;
        _set__state__4o0y7v(this$0, new Hiding($state.v44(), this$0.q44_1, this$0.p44_1, $state.a45()));
        var tmp_1;
        if (currentOpacity == null || currentOpacity === 0.0) {
          this$0.b45($state.v44());
          tmp_1 = Unit_instance;
        }
        tmp = tmp_1;
      }
      return Unit_instance;
    };
  }
  function PopoverStateController$slambda(this$0, resultContinuation) {
    this.k45_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(PopoverStateController$slambda).f43 = function (keepOpen, $completion) {
    var tmp = this.g43(keepOpen, $completion);
    tmp.h8_1 = Unit_instance;
    tmp.i8_1 = null;
    return tmp.n8();
  };
  protoOf(PopoverStateController$slambda).z8 = function (p1, $completion) {
    return this.f43((!(p1 == null) ? typeof p1 === 'boolean' : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(PopoverStateController$slambda).n8 = function () {
    var suspendResult = this.h8_1;
    $sm: do
      try {
        var tmp = this.f8_1;
        if (tmp === 0) {
          this.g8_1 = 1;
          if (!this.l45_1) {
            this.k45_1.m45();
          }
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.i8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(PopoverStateController$slambda).g43 = function (keepOpen, completion) {
    var i = new PopoverStateController$slambda(this.k45_1, completion);
    i.l45_1 = keepOpen;
    return i;
  };
  function PopoverStateController$slambda_0(this$0, resultContinuation) {
    var i = new PopoverStateController$slambda(this$0, resultContinuation);
    var l = function (keepOpen, $completion) {
      return i.f43(keepOpen, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function PopoverStateController$slambda_1(this$0, resultContinuation) {
    this.v45_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(PopoverStateController$slambda_1).f44 = function (request, $completion) {
    var tmp = this.g44(request, $completion);
    tmp.h8_1 = Unit_instance;
    tmp.i8_1 = null;
    return tmp.n8();
  };
  protoOf(PopoverStateController$slambda_1).z8 = function (p1, $completion) {
    return this.f44(p1 instanceof OpenClose ? p1 : THROW_CCE(), $completion);
  };
  protoOf(PopoverStateController$slambda_1).n8 = function () {
    var suspendResult = this.h8_1;
    $sm: do
      try {
        var tmp = this.f8_1;
        if (tmp === 0) {
          this.g8_1 = 1;
          switch (this.w45_1.l2_1) {
            case 0:
              this.v45_1.x45();
              break;
            case 1:
              this.v45_1.m45();
              break;
            default:
              noWhenBranchMatchedException();
              break;
          }
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.i8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(PopoverStateController$slambda_1).g44 = function (request, completion) {
    var i = new PopoverStateController$slambda_1(this.v45_1, completion);
    i.w45_1 = request;
    return i;
  };
  function PopoverStateController$slambda_2(this$0, resultContinuation) {
    var i = new PopoverStateController$slambda_1(this$0, resultContinuation);
    var l = function (request, $completion) {
      return i.f44(request, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function PopoverStateController(openCloseStrategy, showHideSettings, placementStrategy, keepOpenStrategy) {
    this.p44_1 = showHideSettings;
    this.q44_1 = placementStrategy;
    this.r44_1 = keepOpenStrategy;
    this.s44_1 = mutableStateOf(Uninitialized_instance);
    this.t44_1 = -1;
    this.u44_1 = -1;
    var scope = CoroutineScope_0(asCoroutineDispatcher(window));
    launchIn(onEach(this.r44_1.f42_1, PopoverStateController$slambda_0(this, null)), scope);
    launchIn(onEach(openCloseStrategy.n43_1, PopoverStateController$slambda_2(this, null)), scope);
  }
  protoOf(PopoverStateController).y45 = function () {
    return _get__state__37adl3(this);
  };
  protoOf(PopoverStateController).z45 = function () {
    var state = _get__state__37adl3(this);
    // Inline function 'kotlin.check' call
    if (!isInterface(state, Initialized)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    resetTimers(this);
    _set__state__4o0y7v(this, new FoundElements(state.v44()));
  };
  protoOf(PopoverStateController).a46 = function (elements) {
    var state = _get__state__37adl3(this);
    if (isInterface(state, Initialized)) {
      state.b46(elements);
    } else {
      _set__state__4o0y7v(this, new FoundElements(elements));
    }
  };
  protoOf(PopoverStateController).x45 = function () {
    var state = _get__state__37adl3(this);
    if (!isInterface(state, Initialized))
      return Unit_instance;
    resetTimers(this);
    var tmp = this;
    var tmp_0 = window;
    tmp.t44_1 = tmp_0.setTimeout(PopoverStateController$requestShowPopup$lambda(this, state), this.p44_1.m44_1);
  };
  protoOf(PopoverStateController).c46 = function (popupElement) {
    var state = _get__state__37adl3(this);
    // Inline function 'kotlin.check' call
    if (!isInterface(state, Initialized)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    this.r44_1.g42(popupElement);
    state.v44().y44_1 = popupElement;
  };
  protoOf(PopoverStateController).d46 = function () {
    var state = _get__state__37adl3(this);
    // Inline function 'kotlin.check' call
    if (!isInterface(state, Initialized)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    this.r44_1.d29();
    state.v44().y44_1 = null;
  };
  protoOf(PopoverStateController).z44 = function () {
    var state = _get__state__37adl3(this);
    if (!(state instanceof Calculating))
      return Unit_instance;
    var popupElement = state.e46_1.y44_1;
    // Inline function 'kotlin.check' call
    if (!!(popupElement == null)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    _set__state__4o0y7v(this, new Shown(state.e46_1, this.q44_1));
  };
  protoOf(PopoverStateController).m45 = function () {
    var state = _get__state__37adl3(this);
    if (state instanceof FoundElements) {
      resetTimers(this);
      return Unit_instance;
    }
    // Inline function 'kotlin.check' call
    if (!isInterface(state, Visible)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    resetTimers(this);
    var tmp = this;
    var tmp_0 = window;
    tmp.u44_1 = tmp_0.setTimeout(PopoverStateController$requestHidePopup$lambda(this, state), this.p44_1.n44_1);
  };
  protoOf(PopoverStateController).b45 = function (elements) {
    var state = _get__state__37adl3(this);
    if (!(state instanceof Hiding))
      return Unit_instance;
    _set__state__4o0y7v(this, new FoundElements(elements));
    resetTimers(this);
  };
  function resolve($this, _this__u8e3s4, targetFinder) {
    if (_this__u8e3s4 == null || targetFinder == null)
      return _this__u8e3s4;
    return targetFinder.c2y(_this__u8e3s4);
  }
  function PopoverElements(srcElement, popupTarget, placementTarget) {
    var tmp = this;
    var tmp0_elvis_lhs = resolve(this, srcElement, popupTarget);
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      var message = 'Target element finder returned null';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    tmp.w44_1 = tmp_0;
    var tmp_1 = this;
    var tmp_2;
    if (placementTarget == null) {
      tmp_2 = this.w44_1;
    } else {
      var tmp0_elvis_lhs_0 = resolve(this, srcElement, placementTarget);
      var tmp_3;
      if (tmp0_elvis_lhs_0 == null) {
        var message_0 = 'Placement element finder returned null';
        throw IllegalStateException_init_$Create$(toString(message_0));
      } else {
        tmp_3 = tmp0_elvis_lhs_0;
      }
      tmp_2 = tmp_3;
    }
    tmp_1.x44_1 = tmp_2;
    this.y44_1 = null;
  }
  function Uninitialized() {
  }
  var Uninitialized_instance;
  function Uninitialized_getInstance() {
    return Uninitialized_instance;
  }
  function Initialized() {
  }
  function FoundElements(elements) {
    this.h46_1 = elements;
  }
  protoOf(FoundElements).b46 = function (_set____db54di) {
    this.h46_1 = _set____db54di;
  };
  protoOf(FoundElements).v44 = function () {
    return this.h46_1;
  };
  function Visible() {
  }
  function Calculating(elements, showHideSettings) {
    this.e46_1 = elements;
    this.f46_1 = left(top(showHideSettings.o44_1, get_percent(-100)), get_percent(-100));
    this.g46_1 = null;
  }
  protoOf(Calculating).b46 = function (_set____db54di) {
    this.e46_1 = _set____db54di;
  };
  protoOf(Calculating).v44 = function () {
    return this.e46_1;
  };
  protoOf(Calculating).i46 = function () {
    return this.f46_1;
  };
  protoOf(Calculating).a45 = function () {
    return this.g46_1;
  };
  function Shown(elements, placementStrategy) {
    this.j46_1 = elements;
    this.k46_1 = placementStrategy.n46();
    this.l46_1 = Companion_instance.t3i(toModifier_2(this.k46_1.o46_1));
    this.m46_1 = this.k46_1.p46_1;
  }
  protoOf(Shown).b46 = function (_set____db54di) {
    this.j46_1 = _set____db54di;
  };
  protoOf(Shown).v44 = function () {
    return this.j46_1;
  };
  protoOf(Shown).i46 = function () {
    return this.l46_1;
  };
  protoOf(Shown).a45 = function () {
    return this.m46_1;
  };
  function Hiding(elements, placementStrategy, showHideSettings, placement) {
    this.q46_1 = elements;
    this.r46_1 = placement;
    var tmp = this;
    var tmp0 = showHideSettings.o44_1;
    // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
    var tmp_0;
    if (!(this.q46_1.y44_1 == null)) {
      tmp_0 = toModifier_2(placementStrategy.n46().o46_1);
    } else {
      tmp_0 = Companion_instance;
    }
    tmp.s46_1 = tmp0.t3i(tmp_0);
  }
  protoOf(Hiding).b46 = function (_set____db54di) {
    this.q46_1 = _set____db54di;
  };
  protoOf(Hiding).v44 = function () {
    return this.q46_1;
  };
  protoOf(Hiding).a45 = function () {
    return this.r46_1;
  };
  protoOf(Hiding).i46 = function () {
    return this.s46_1;
  };
  function toModifier_2(_this__u8e3s4) {
    return left(top(Companion_instance, _this__u8e3s4.t46_1), _this__u8e3s4.u46_1);
  }
  function AdvancedPopover$$inlined$cache$2$2($openCloseStrategy) {
    this.v46_1 = $openCloseStrategy;
  }
  protoOf(AdvancedPopover$$inlined$cache$2$2).kt = function () {
    this.v46_1.d29();
  };
  function AdvancedPopover$lambda($target, $placementTarget, $popoverStateController, $openCloseStrategy) {
    return function ($this$disposableRef, element) {
      var tmp;
      try {
        // Inline function 'kotlin.apply' call
        var this_0 = new PopoverElements(element, $target, $placementTarget._v);
        var tmp_0 = this_0;
        var tmp_1 = $popoverStateController.y45();
        var tmp0_safe_receiver = isInterface(tmp_1, Initialized) ? tmp_1 : null;
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v44();
        tmp_0.y44_1 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.y44_1;
        var popoverElements = this_0;
        // Inline function 'kotlin.apply' call
        var this_1 = popoverElements.w44_1;
        $openCloseStrategy.g42(this_1);
        $popoverStateController.a46(popoverElements);
        tmp = Unit_instance;
      } catch ($p) {
        var tmp_2;
        if ($p instanceof IllegalStateException) {
          var _unused_var__etf5q3 = $p;
          tmp_2 = Unit_instance;
        } else {
          throw $p;
        }
        tmp = tmp_2;
      }
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new AdvancedPopover$$inlined$cache$2$2($openCloseStrategy);
    };
  }
  function AdvancedPopover$lambda$lambda($popoverStateController) {
    return function (evt) {
      var state = $popoverStateController.y45();
      var tmp;
      var tmp_0;
      if (evt.r3e_1 === 'opacity') {
        tmp_0 = state instanceof Hiding;
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        $popoverStateController.b45(state.q46_1);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function AdvancedPopover$$inlined$run$2$4$2$1($popoverStateController, $placementStrategy) {
    this.w46_1 = $popoverStateController;
    this.x46_1 = $placementStrategy;
  }
  protoOf(AdvancedPopover$$inlined$run$2$4$2$1).kt = function () {
    this.w46_1.d46();
    this.w46_1.z45();
    this.x46_1.d29();
  };
  function AdvancedPopover$lambda$lambda$lambda($placementStrategy, $visiblePopoverState, $popoverStateController) {
    return function ($this$disposableRef, popupElement) {
      $placementStrategy.y46($visiblePopoverState.v44().x44_1, popupElement);
      $popoverStateController.c46(popupElement);
      $popoverStateController.z44();
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new AdvancedPopover$$inlined$run$2$4$2$1($popoverStateController, $placementStrategy);
    };
  }
  function AdvancedPopover$lambda$lambda_0($ref, $placementStrategy, $visiblePopoverState, $popoverStateController) {
    return function ($this$refScope) {
      $this$refScope.l3c([], AdvancedPopover$lambda$lambda$lambda($placementStrategy, $visiblePopoverState, $popoverStateController));
      $this$refScope.m3c($ref._v);
      return Unit_instance;
    };
  }
  function AdvancedPopover$lambda$lambda_1($content, $visiblePopoverState) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.w1h(!(($changed & 17) === 16), $changed & 1)) {
        tmp = $content(new PopupScope($visiblePopoverState.a45()), $composer_0, 0);
      } else {
        $composer_0.j1h();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_21(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.x2n(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function AdvancedPopover$lambda_0($popoverStateController, $variant, $modifier, $placementStrategy, $ref, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.w1h(!(($changed & 3) === 2), $changed & 1)) {
        var tmp_0 = $popoverStateController.y45();
        var tmp0_elvis_lhs = isInterface(tmp_0, Visible) ? tmp_0 : null;
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          return Unit_instance;
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        var visiblePopoverState = tmp_1;
        var tmp_2 = toModifier(get_PopupStyle(), [$variant._v], $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter() | com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() << 3);
        // Inline function 'org.jetbrains.compose.web.css.Companion.Fixed' call
        // Inline function 'org.jetbrains.compose.web.css.Position' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_3 = position(tmp_2, 'fixed').t3i(visiblePopoverState.i46()).t3i($modifier._v);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_0.u1h($popoverStateController);
        // Inline function 'kotlin.let' call
        var it = $composer_0.p1h();
        var tmp_4;
        if (invalid || it === Companion_getInstance().r1g_1) {
          var value = AdvancedPopover$lambda$lambda($popoverStateController);
          $composer_0.q1h(value);
          tmp_4 = value;
        } else {
          tmp_4 = it;
        }
        var tmp_5 = tmp_4;
        var tmp$ret$7 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        var tmp_6 = onTransitionEnd(tmp_3, tmp$ret$7);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = !!(!!(!!($composer_0.r1h($placementStrategy) | $composer_0.u1h(visiblePopoverState)) | $composer_0.u1h($popoverStateController)) | $composer_0.u1h($ref._v));
        // Inline function 'kotlin.let' call
        var it_0 = $composer_0.p1h();
        var tmp_7;
        if (invalid_0 || it_0 === Companion_getInstance().r1g_1) {
          var value_0 = AdvancedPopover$lambda$lambda_0($ref, $placementStrategy, visiblePopoverState, $popoverStateController);
          $composer_0.q1h(value_0);
          tmp_7 = value_0;
        } else {
          tmp_7 = it_0;
        }
        var tmp_8 = tmp_7;
        var tmp$ret$11 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
        var tmp_9 = refScope(tmp$ret$11);
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(770335689, true, AdvancedPopover$lambda$lambda_1($content, visiblePopoverState), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_1 = $composer_1.r1h(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it_1 = $composer_1.p1h();
        var tmp_10;
        if (invalid_1 || it_1 === Companion_getInstance().r1g_1) {
          var value_1 = ComposableLambda$invoke$ref_21(dispatchReceiver);
          $composer_1.q1h(value_1);
          tmp_10 = value_1;
        } else {
          tmp_10 = it_1;
        }
        var tmp_11 = tmp_10;
        var tmp0 = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Box(tmp_6, null, tmp_9, tmp0, $composer_0, 3072 | com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter() << 6, 2);
        tmp = Unit_instance;
      } else {
        $composer_0.j1h();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_22(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.u1v(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function AdvancedPopover$lambda_1($target, $modifier, $hiddenModifier, $variant, $showDelayMs, $hideDelayMs, $openCloseStrategy, $placementTarget, $placementStrategy, $keepOpenStrategy, $ref, $content, $$changed, $$changed1, $$default) {
    return function ($composer, $force) {
      AdvancedPopover($target, $modifier._v, $hiddenModifier._v, $variant._v, $showDelayMs._v, $hideDelayMs._v, $openCloseStrategy._v, $placementTarget._v, $placementStrategy._v, $keepOpenStrategy._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), updateChangedFlags($$changed1), $$default);
      return Unit_instance;
    };
  }
  function get_PopupStyle() {
    _init_properties_Popup_kt__lluomy();
    return PopupStyle;
  }
  var PopupStyle;
  var com_varabyte_kobweb_silk_components_overlay_PopupVars$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopupScope$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopupPlacementStrategy_Position$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopupPlacementStrategy_PositionAndPlacement$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopupPlacementStrategy$stable;
  function PopupVars$_get_TransitionDuration_$ref_94payl() {
    return function (p0) {
      return p0.v3y();
    };
  }
  function PopupVars() {
    PopupVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = TransitionDurationVars_getInstance().x40().m3b();
    tmp.z46_1 = StyleVariable_1(tmp0_defaultFallback, 'silk');
  }
  protoOf(PopupVars).v3y = function () {
    var tmp = KProperty1;
    return this.z46_1.s3b(this, getPropertyCallableRef('TransitionDuration', 1, tmp, PopupVars$_get_TransitionDuration_$ref_94payl(), null));
  };
  var PopupVars_instance;
  function PopupVars_getInstance() {
    if (PopupVars_instance == null)
      new PopupVars();
    return PopupVars_instance;
  }
  var PopupPlacement_TopLeft_instance;
  var PopupPlacement_Top_instance;
  var PopupPlacement_TopRight_instance;
  var PopupPlacement_LeftTop_instance;
  var PopupPlacement_RightTop_instance;
  var PopupPlacement_Left_instance;
  var PopupPlacement_Right_instance;
  var PopupPlacement_LeftBottom_instance;
  var PopupPlacement_RightBottom_instance;
  var PopupPlacement_BottomLeft_instance;
  var PopupPlacement_Bottom_instance;
  var PopupPlacement_BottomRight_instance;
  var PopupPlacement_entriesInitialized;
  function PopupPlacement_initEntries() {
    if (PopupPlacement_entriesInitialized)
      return Unit_instance;
    PopupPlacement_entriesInitialized = true;
    PopupPlacement_TopLeft_instance = new PopupPlacement('TopLeft', 0);
    PopupPlacement_Top_instance = new PopupPlacement('Top', 1);
    PopupPlacement_TopRight_instance = new PopupPlacement('TopRight', 2);
    PopupPlacement_LeftTop_instance = new PopupPlacement('LeftTop', 3);
    PopupPlacement_RightTop_instance = new PopupPlacement('RightTop', 4);
    PopupPlacement_Left_instance = new PopupPlacement('Left', 5);
    PopupPlacement_Right_instance = new PopupPlacement('Right', 6);
    PopupPlacement_LeftBottom_instance = new PopupPlacement('LeftBottom', 7);
    PopupPlacement_RightBottom_instance = new PopupPlacement('RightBottom', 8);
    PopupPlacement_BottomLeft_instance = new PopupPlacement('BottomLeft', 9);
    PopupPlacement_Bottom_instance = new PopupPlacement('Bottom', 10);
    PopupPlacement_BottomRight_instance = new PopupPlacement('BottomRight', 11);
  }
  function PopupPlacement(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function updatePopupPosition($this) {
    updatePosition(ensureNotNull($this.b47_1), $this.n46().o46_1);
  }
  function PopupPlacementStrategy$Companion$of$o$updatePopupPositionListener$lambda(this$0) {
    return function (it) {
      updatePopupPosition(this$0);
      return Unit_instance;
    };
  }
  function PopupPlacementStrategy$Companion$of$o$init$lambda(this$0) {
    return function (_unused_var__etf5q3) {
      updatePopupPosition(this$0);
      return Unit_instance;
    };
  }
  function PopupPlacementStrategy$Companion$of$o$init$lambda_0(this$0) {
    return function (_unused_var__etf5q3, _unused_var__etf5q3_0) {
      updatePopupPosition(this$0);
      return Unit_instance;
    };
  }
  function PopupPlacementStrategy$Companion$of$1($placement, $offsetPixels) {
    this.f47_1 = $placement;
    this.g47_1 = $offsetPixels;
    PopupPlacementStrategy.call(this);
    this.a47_1 = null;
    this.b47_1 = null;
    this.c47_1 = null;
    this.d47_1 = null;
    var tmp = this;
    tmp.e47_1 = EventListener(PopupPlacementStrategy$Companion$of$o$updatePopupPositionListener$lambda(this));
  }
  protoOf(PopupPlacementStrategy$Companion$of$1).y46 = function (placementElement, popupElement) {
    this.a47_1 = placementElement;
    this.b47_1 = popupElement;
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = ResizeObserver_init_$Create$(PopupPlacementStrategy$Companion$of$o$init$lambda(this));
    this_0.r2y(popupElement);
    this_0.r2y(placementElement);
    tmp.c47_1 = this_0;
    var tmp_0 = this;
    // Inline function 'kotlin.apply' call
    var this_1 = new MutationObserver(PopupPlacementStrategy$Companion$of$o$init$lambda_0(this));
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp7 = ['style'];
    // Inline function 'org.w3c.dom.MutationObserverInit' call
    var characterData = undefined;
    var attributeOldValue = undefined;
    var characterDataOldValue = undefined;
    var o = {};
    o['childList'] = false;
    o['attributes'] = true;
    o['characterData'] = characterData;
    o['subtree'] = false;
    o['attributeOldValue'] = attributeOldValue;
    o['characterDataOldValue'] = characterDataOldValue;
    o['attributeFilter'] = tmp7;
    this_1.observe(placementElement, o);
    tmp_0.d47_1 = this_1;
    window.addEventListener('scroll', this.e47_1);
    window.addEventListener('resize', this.e47_1);
  };
  protoOf(PopupPlacementStrategy$Companion$of$1).n46 = function () {
    var placementBounds = ensureNotNull(this.a47_1).getBoundingClientRect();
    var popupBounds = ensureNotNull(this.b47_1).getBoundingClientRect();
    var popupWidth = popupBounds.width;
    var popupHeight = popupBounds.height;
    return new PositionAndPlacement(this.h47(this.f47_1, popupWidth, popupHeight, placementBounds, this.g47_1), this.f47_1);
  };
  protoOf(PopupPlacementStrategy$Companion$of$1).d29 = function () {
    this.a47_1 = null;
    this.b47_1 = null;
    ensureNotNull(this.c47_1).s2y();
    this.c47_1 = null;
    ensureNotNull(this.d47_1).disconnect();
    this.d47_1 = null;
    window.removeEventListener('scroll', this.e47_1);
    window.removeEventListener('resize', this.e47_1);
  };
  function Position(top, left) {
    this.t46_1 = top;
    this.u46_1 = left;
  }
  function PositionAndPlacement(position, placement) {
    placement = placement === VOID ? null : placement;
    this.o46_1 = position;
    this.p46_1 = placement;
  }
  function Companion_6() {
  }
  protoOf(Companion_6).i47 = function (placement, offsetPixels) {
    return new PopupPlacementStrategy$Companion$of$1(placement, offsetPixels);
  };
  protoOf(Companion_6).l44 = function (placement, offsetPixels, $super) {
    offsetPixels = offsetPixels === VOID ? 15 : offsetPixels;
    return $super === VOID ? this.i47(placement, offsetPixels) : $super.i47.call(this, placement, offsetPixels);
  };
  var Companion_instance_26;
  function Companion_getInstance_8() {
    return Companion_instance_26;
  }
  function PopupPlacementStrategy() {
  }
  protoOf(PopupPlacementStrategy).h47 = function (placement, popupWidth, popupHeight, placementBounds, offsetPixels) {
    var offsetPixels_0 = numberToDouble(offsetPixels);
    var tmp;
    switch (placement.l2_1) {
      case 0:
        tmp = new Position(get_px(placementBounds.top - offsetPixels_0 - popupHeight), get_px(placementBounds.left));
        break;
      case 1:
        tmp = new Position(get_px(placementBounds.top - offsetPixels_0 - popupHeight), get_px(placementBounds.left - (popupWidth - placementBounds.width) / 2));
        break;
      case 2:
        tmp = new Position(get_px(placementBounds.top - offsetPixels_0 - popupHeight), get_px(placementBounds.left + (placementBounds.width - popupWidth)));
        break;
      case 3:
        tmp = new Position(get_px(placementBounds.top), get_px(placementBounds.left - offsetPixels_0 - popupWidth));
        break;
      case 4:
        tmp = new Position(get_px(placementBounds.top), get_px(placementBounds.right + offsetPixels_0));
        break;
      case 5:
        tmp = new Position(get_px(placementBounds.top - (popupHeight - placementBounds.height) / 2), get_px(placementBounds.left - offsetPixels_0 - popupWidth));
        break;
      case 6:
        tmp = new Position(get_px(placementBounds.top - (popupHeight - placementBounds.height) / 2), get_px(placementBounds.right + offsetPixels_0));
        break;
      case 7:
        tmp = new Position(get_px(placementBounds.top + (placementBounds.height - popupHeight)), get_px(placementBounds.left - offsetPixels_0 - popupWidth));
        break;
      case 8:
        tmp = new Position(get_px(placementBounds.top + (placementBounds.height - popupHeight)), get_px(placementBounds.right + offsetPixels_0));
        break;
      case 9:
        tmp = new Position(get_px(placementBounds.bottom + offsetPixels_0), get_px(placementBounds.left));
        break;
      case 10:
        tmp = new Position(get_px(placementBounds.bottom + offsetPixels_0), get_px(placementBounds.left - (popupWidth - placementBounds.width) / 2));
        break;
      case 11:
        tmp = new Position(get_px(placementBounds.bottom + offsetPixels_0), get_px(placementBounds.left + (placementBounds.width - popupWidth)));
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  function PopupScope(placement) {
    this.j47_1 = placement;
  }
  function updatePosition(_this__u8e3s4, position) {
    _init_properties_Popup_kt__lluomy();
    _this__u8e3s4.style.top = toString(position.t46_1);
    _this__u8e3s4.style.left = toString(position.u46_1);
  }
  function PopupStyle$lambda($this$base) {
    _init_properties_Popup_kt__lluomy();
    return transition_0(Companion_instance, [Companion_instance_2.b3c('opacity', PopupVars_getInstance().v3y().m3b())]);
  }
  function PopupPlacement_Bottom_getInstance() {
    PopupPlacement_initEntries();
    return PopupPlacement_Bottom_instance;
  }
  function PopupPlacement_BottomRight_getInstance() {
    PopupPlacement_initEntries();
    return PopupPlacement_BottomRight_instance;
  }
  var properties_initialized_Popup_kt_wwy6qs;
  function _init_properties_Popup_kt__lluomy() {
    if (!properties_initialized_Popup_kt_wwy6qs) {
      properties_initialized_Popup_kt_wwy6qs = true;
      var tmp = Companion_instance_5;
      PopupStyle = base(tmp, VOID, PopupStyle$lambda);
      com_varabyte_kobweb_silk_components_overlay_PopupVars$stable = 8;
      com_varabyte_kobweb_silk_components_overlay_PopupScope$stable = 0;
      com_varabyte_kobweb_silk_components_overlay_PopupPlacementStrategy_Position$stable = 8;
      com_varabyte_kobweb_silk_components_overlay_PopupPlacementStrategy_PositionAndPlacement$stable = 8;
      com_varabyte_kobweb_silk_components_overlay_PopupPlacementStrategy$stable = 0;
    }
  }
  function get_TRIANGLE_WIDTH() {
    _init_properties_Tooltip_kt__palx2n();
    return TRIANGLE_WIDTH;
  }
  var TRIANGLE_WIDTH;
  function get_TRIANGLE_WIDTH_2X() {
    _init_properties_Tooltip_kt__palx2n();
    return TRIANGLE_WIDTH_2X;
  }
  var TRIANGLE_WIDTH_2X;
  function get_TooltipStyle() {
    _init_properties_Tooltip_kt__palx2n();
    return TooltipStyle;
  }
  var TooltipStyle;
  function get_TooltipArrowStyle() {
    _init_properties_Tooltip_kt__palx2n();
    return TooltipArrowStyle;
  }
  var TooltipArrowStyle;
  function get_TopLeftTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return TopLeftTooltipArrowVariant;
  }
  var TopLeftTooltipArrowVariant;
  function get_TopTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return TopTooltipArrowVariant;
  }
  var TopTooltipArrowVariant;
  function get_TopRightTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return TopRightTooltipArrowVariant;
  }
  var TopRightTooltipArrowVariant;
  function get_LeftTopTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return LeftTopTooltipArrowVariant;
  }
  var LeftTopTooltipArrowVariant;
  function get_LeftTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return LeftTooltipArrowVariant;
  }
  var LeftTooltipArrowVariant;
  function get_LeftBottomTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return LeftBottomTooltipArrowVariant;
  }
  var LeftBottomTooltipArrowVariant;
  function get_RightTopTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return RightTopTooltipArrowVariant;
  }
  var RightTopTooltipArrowVariant;
  function get_RightTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return RightTooltipArrowVariant;
  }
  var RightTooltipArrowVariant;
  function get_RightBottomTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return RightBottomTooltipArrowVariant;
  }
  var RightBottomTooltipArrowVariant;
  function get_BottomLeftTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return BottomLeftTooltipArrowVariant;
  }
  var BottomLeftTooltipArrowVariant;
  function get_BottomTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return BottomTooltipArrowVariant;
  }
  var BottomTooltipArrowVariant;
  function get_BottomRightTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return BottomRightTooltipArrowVariant;
  }
  var BottomRightTooltipArrowVariant;
  function get_TooltipTextContainerStyle() {
    _init_properties_Tooltip_kt__palx2n();
    return TooltipTextContainerStyle;
  }
  var TooltipTextContainerStyle;
  var com_varabyte_kobweb_silk_components_overlay_TooltipVars$stable;
  function TooltipVars$_get_BackgroundColor_$ref_y3bglm() {
    return function (p0) {
      return p0.y3u();
    };
  }
  function TooltipVars$_get_Color_$ref_gf06w8() {
    return function (p0) {
      return p0.w3u();
    };
  }
  function TooltipVars() {
    TooltipVars_instance = this;
    this.k47_1 = StyleVariable('silk');
    this.l47_1 = StyleVariable('silk');
  }
  protoOf(TooltipVars).y3u = function () {
    var tmp = KProperty1;
    return this.k47_1.s3b(this, getPropertyCallableRef('BackgroundColor', 1, tmp, TooltipVars$_get_BackgroundColor_$ref_y3bglm(), null));
  };
  protoOf(TooltipVars).w3u = function () {
    var tmp = KProperty1;
    return this.l47_1.s3b(this, getPropertyCallableRef('Color', 1, tmp, TooltipVars$_get_Color_$ref_gf06w8(), null));
  };
  var TooltipVars_instance;
  function TooltipVars_getInstance() {
    if (TooltipVars_instance == null)
      new TooltipVars();
    return TooltipVars_instance;
  }
  function triangleDown(_this__u8e3s4, color) {
    _init_properties_Tooltip_kt__palx2n();
    return border_0(_this__u8e3s4, triangleDown$lambda(color));
  }
  function triangleLeft(_this__u8e3s4, color) {
    _init_properties_Tooltip_kt__palx2n();
    return border_0(_this__u8e3s4, triangleLeft$lambda(color));
  }
  function triangleRight(_this__u8e3s4, color) {
    _init_properties_Tooltip_kt__palx2n();
    return border_0(_this__u8e3s4, triangleRight$lambda(color));
  }
  function triangleUp(_this__u8e3s4, color) {
    _init_properties_Tooltip_kt__palx2n();
    return border_0(_this__u8e3s4, triangleUp$lambda(color));
  }
  function Tooltip(target, text, modifier, variant, placement, hasArrow, offsetPixels, placementTarget, showDelayMs, hideDelayMs, keepOpenStrategy, ref, $composer, $changed, $changed1, $default) {
    _init_properties_Tooltip_kt__palx2n();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var placement_0 = {_v: placement};
    var hasArrow_0 = {_v: hasArrow};
    var offsetPixels_0 = {_v: offsetPixels};
    var placementTarget_0 = {_v: placementTarget};
    var showDelayMs_0 = {_v: showDelayMs};
    var hideDelayMs_0 = {_v: hideDelayMs};
    var keepOpenStrategy_0 = {_v: keepOpenStrategy};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.e1h(-303561348);
    var $dirty = $changed;
    var $dirty1 = $changed1;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.u1h(target) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.r1h(text) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.r1h(modifier_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ((($changed & 4096) === 0 ? $composer_0.r1h(variant_0._v) : $composer_0.u1h(variant_0._v)) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0) {
      var tmp;
      var tmp_0 = $composer_0;
      var tmpEnum = placement_0._v;
      if (tmp_0.t1h(tmpEnum == null ? -1 : tmpEnum.l2_1)) {
        tmp = 16384;
      } else {
        tmp = 8192;
      }
      $dirty = $dirty | tmp;
    }
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.s1h(hasArrow_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.u1h(offsetPixels_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.u1h(placementTarget_0._v) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 100663296) === 0)
      $dirty = $dirty | ($composer_0.t1h(showDelayMs_0._v) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 805306368) === 0)
      $dirty = $dirty | ($composer_0.t1h(hideDelayMs_0._v) ? 536870912 : 268435456);
    if (!(($default & 1024) === 0))
      $dirty1 = $dirty1 | 6;
    else if (($changed1 & 6) === 0)
      $dirty1 = $dirty1 | ($composer_0.u1h(keepOpenStrategy_0._v) ? 4 : 2);
    if (!(($default & 2048) === 0))
      $dirty1 = $dirty1 | 48;
    else if (($changed1 & 48) === 0)
      $dirty1 = $dirty1 | ((($changed1 & 64) === 0 ? $composer_0.r1h(ref_0._v) : $composer_0.u1h(ref_0._v)) ? 32 : 16);
    if ($composer_0.w1h(!(($dirty & 306783379) === 306783378) || !(($dirty1 & 19) === 18), $dirty & 1)) {
      if (!(($default & 4) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 8) === 0)) {
        variant_0._v = null;
      }
      if (!(($default & 16) === 0)) {
        placement_0._v = PopupPlacement_Bottom_getInstance();
      }
      if (!(($default & 32) === 0)) {
        hasArrow_0._v = true;
      }
      if (!(($default & 64) === 0)) {
        offsetPixels_0._v = 15;
      }
      if (!(($default & 128) === 0)) {
        placementTarget_0._v = null;
      }
      if (!(($default & 256) === 0)) {
        showDelayMs_0._v = 0;
      }
      if (!(($default & 512) === 0)) {
        hideDelayMs_0._v = 0;
      }
      if (!(($default & 1024) === 0)) {
        keepOpenStrategy_0._v = null;
      }
      if (!(($default & 2048) === 0)) {
        ref_0._v = null;
      }
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = ($dirty & 57344) === 16384;
      // Inline function 'kotlin.let' call
      var it = tmp0.p1h();
      var tmp_1;
      if (invalid || it === Companion_getInstance().r1g_1) {
        var value = Companion_instance_26.i47(placement_0._v, offsetPixels_0._v);
        tmp0.q1h(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var placementStrategy = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      AdvancedTooltip(target, text, modifier_0._v, Companion_instance, variant_0._v, hasArrow_0._v, showDelayMs_0._v, hideDelayMs_0._v, null, placementTarget_0._v, placementStrategy, keepOpenStrategy_0._v, ref_0._v, $composer_0, 100666368 | 14 & $dirty | 112 & $dirty | 896 & $dirty | com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() << 12 | 57344 & $dirty << 3 | 458752 & $dirty | 3670016 & $dirty >> 6 | 29360128 & $dirty >> 6 | 1879048192 & $dirty << 6, 112 & $dirty1 << 3 | com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter() << 6 | 896 & $dirty1 << 3, 0);
    } else {
      $composer_0.j1h();
    }
    var tmp0_safe_receiver = $composer_0.f1h();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y21(Tooltip$lambda(target, text, modifier_0, variant_0, placement_0, hasArrow_0, offsetPixels_0, placementTarget_0, showDelayMs_0, hideDelayMs_0, keepOpenStrategy_0, ref_0, $changed, $changed1, $default));
    }
  }
  function AdvancedTooltip(target, text, modifier, hiddenModifier, variant, hasArrow, showDelayMs, hideDelayMs, openCloseStrategy, placementTarget, placementStrategy, keepOpenStrategy, ref, $composer, $changed, $changed1, $default) {
    _init_properties_Tooltip_kt__palx2n();
    var modifier_0 = {_v: modifier};
    var hiddenModifier_0 = {_v: hiddenModifier};
    var variant_0 = {_v: variant};
    var hasArrow_0 = {_v: hasArrow};
    var showDelayMs_0 = {_v: showDelayMs};
    var hideDelayMs_0 = {_v: hideDelayMs};
    var openCloseStrategy_0 = {_v: openCloseStrategy};
    var placementTarget_0 = {_v: placementTarget};
    var placementStrategy_0 = {_v: placementStrategy};
    var keepOpenStrategy_0 = {_v: keepOpenStrategy};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.e1h(1508280598);
    var $dirty = $changed;
    var $dirty1 = $changed1;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.u1h(target) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.r1h(text) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.r1h(modifier_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.r1h(hiddenModifier_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ((($changed & 32768) === 0 ? $composer_0.r1h(variant_0._v) : $composer_0.u1h(variant_0._v)) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.s1h(hasArrow_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.t1h(showDelayMs_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.t1h(hideDelayMs_0._v) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 100663296) === 0)
      $dirty = $dirty | ($composer_0.u1h(openCloseStrategy_0._v) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 805306368) === 0)
      $dirty = $dirty | ($composer_0.u1h(placementTarget_0._v) ? 536870912 : 268435456);
    if (!(($default & 1024) === 0))
      $dirty1 = $dirty1 | 6;
    else if (($changed1 & 6) === 0)
      $dirty1 = $dirty1 | ($composer_0.r1h(placementStrategy_0._v) ? 4 : 2);
    if (!(($default & 2048) === 0))
      $dirty1 = $dirty1 | 48;
    else if (($changed1 & 48) === 0)
      $dirty1 = $dirty1 | ($composer_0.u1h(keepOpenStrategy_0._v) ? 32 : 16);
    if (!(($default & 4096) === 0))
      $dirty1 = $dirty1 | 384;
    else if (($changed1 & 384) === 0)
      $dirty1 = $dirty1 | ((($changed1 & 512) === 0 ? $composer_0.r1h(ref_0._v) : $composer_0.u1h(ref_0._v)) ? 256 : 128);
    if ($composer_0.w1h(!(($dirty & 306783379) === 306783378) || !(($dirty1 & 147) === 146), $dirty & 1)) {
      if (!(($default & 4) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 8) === 0)) {
        hiddenModifier_0._v = Companion_instance;
      }
      if (!(($default & 16) === 0)) {
        variant_0._v = null;
      }
      if (!(($default & 32) === 0)) {
        hasArrow_0._v = true;
      }
      if (!(($default & 64) === 0)) {
        showDelayMs_0._v = 0;
      }
      if (!(($default & 128) === 0)) {
        hideDelayMs_0._v = 0;
      }
      if (!(($default & 256) === 0)) {
        openCloseStrategy_0._v = null;
      }
      if (!(($default & 512) === 0)) {
        placementTarget_0._v = null;
      }
      if (!(($default & 1024) === 0)) {
        placementStrategy_0._v = null;
      }
      if (!(($default & 2048) === 0)) {
        keepOpenStrategy_0._v = null;
      }
      if (!(($default & 4096) === 0)) {
        ref_0._v = null;
      }
      var tmp = modifier_0._v;
      var tmp_0 = hiddenModifier_0._v;
      var tmp_1 = variant_0._v;
      var tmp_2 = hasArrow_0._v;
      var tmp_3 = showDelayMs_0._v;
      var tmp_4 = hideDelayMs_0._v;
      var tmp_5 = openCloseStrategy_0._v;
      var tmp_6 = placementTarget_0._v;
      var tmp_7 = placementStrategy_0._v;
      var tmp_8 = keepOpenStrategy_0._v;
      var tmp_9 = ref_0._v;
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(791805449, true, AdvancedTooltip$lambda(text), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.r1h(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.p1h();
      var tmp_10;
      if (invalid || it === Companion_getInstance().r1g_1) {
        var value = ComposableLambda$invoke$ref_24(dispatchReceiver);
        $composer_1.q1h(value);
        tmp_10 = value;
      } else {
        tmp_10 = it;
      }
      var tmp_11 = tmp_10;
      var tmp0 = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      AdvancedTooltip_0(target, tmp, tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp_9, tmp0, $composer_0, 14 & $dirty | 112 & $dirty >> 3 | 896 & $dirty >> 3 | com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() << 9 | 7168 & $dirty >> 3 | 57344 & $dirty >> 3 | 458752 & $dirty >> 3 | 3670016 & $dirty >> 3 | 29360128 & $dirty >> 3 | 234881024 & $dirty >> 3 | 1879048192 & $dirty1 << 27, 384 | 14 & $dirty1 >> 3 | com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter() << 3 | 112 & $dirty1 >> 3, 0);
    } else {
      $composer_0.j1h();
    }
    var tmp0_safe_receiver = $composer_0.f1h();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y21(AdvancedTooltip$lambda_0(target, text, modifier_0, hiddenModifier_0, variant_0, hasArrow_0, showDelayMs_0, hideDelayMs_0, openCloseStrategy_0, placementTarget_0, placementStrategy_0, keepOpenStrategy_0, ref_0, $changed, $changed1, $default));
    }
  }
  function AdvancedTooltip_0(target, modifier, hiddenModifier, variant, hasArrow, showDelayMs, hideDelayMs, openCloseStrategy, placementTarget, placementStrategy, keepOpenStrategy, ref, content, $composer, $changed, $changed1, $default) {
    _init_properties_Tooltip_kt__palx2n();
    var modifier_0 = {_v: modifier};
    var hiddenModifier_0 = {_v: hiddenModifier};
    var variant_0 = {_v: variant};
    var hasArrow_0 = {_v: hasArrow};
    var showDelayMs_0 = {_v: showDelayMs};
    var hideDelayMs_0 = {_v: hideDelayMs};
    var openCloseStrategy_0 = {_v: openCloseStrategy};
    var placementTarget_0 = {_v: placementTarget};
    var placementStrategy_0 = {_v: placementStrategy};
    var keepOpenStrategy_0 = {_v: keepOpenStrategy};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.e1h(1632743267);
    var $dirty = $changed;
    var $dirty1 = $changed1;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.u1h(target) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.r1h(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.r1h(hiddenModifier_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ((($changed & 4096) === 0 ? $composer_0.r1h(variant_0._v) : $composer_0.u1h(variant_0._v)) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.s1h(hasArrow_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.t1h(showDelayMs_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.t1h(hideDelayMs_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.u1h(openCloseStrategy_0._v) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 100663296) === 0)
      $dirty = $dirty | ($composer_0.u1h(placementTarget_0._v) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 805306368) === 0)
      $dirty = $dirty | ($composer_0.r1h(placementStrategy_0._v) ? 536870912 : 268435456);
    if (!(($default & 1024) === 0))
      $dirty1 = $dirty1 | 6;
    else if (($changed1 & 6) === 0)
      $dirty1 = $dirty1 | ($composer_0.u1h(keepOpenStrategy_0._v) ? 4 : 2);
    if (!(($default & 2048) === 0))
      $dirty1 = $dirty1 | 48;
    else if (($changed1 & 48) === 0)
      $dirty1 = $dirty1 | ((($changed1 & 64) === 0 ? $composer_0.r1h(ref_0._v) : $composer_0.u1h(ref_0._v)) ? 32 : 16);
    if (($changed1 & 384) === 0)
      $dirty1 = $dirty1 | ($composer_0.u1h(content) ? 256 : 128);
    if ($composer_0.w1h(!(($dirty & 306783379) === 306783378) || !(($dirty1 & 147) === 146), $dirty & 1)) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 4) === 0)) {
        hiddenModifier_0._v = Companion_instance;
      }
      if (!(($default & 8) === 0)) {
        variant_0._v = null;
      }
      if (!(($default & 16) === 0)) {
        hasArrow_0._v = true;
      }
      if (!(($default & 32) === 0)) {
        showDelayMs_0._v = 0;
      }
      if (!(($default & 64) === 0)) {
        hideDelayMs_0._v = 0;
      }
      if (!(($default & 128) === 0)) {
        openCloseStrategy_0._v = null;
      }
      if (!(($default & 256) === 0)) {
        placementTarget_0._v = null;
      }
      if (!(($default & 512) === 0)) {
        placementStrategy_0._v = null;
      }
      if (!(($default & 1024) === 0)) {
        keepOpenStrategy_0._v = null;
      }
      if (!(($default & 2048) === 0)) {
        ref_0._v = null;
      }
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.r1h(keepOpenStrategy_0._v);
      // Inline function 'kotlin.let' call
      var it = tmp0.p1h();
      var tmp;
      if (invalid || it === Companion_getInstance().r1g_1) {
        var tmp0_elvis_lhs = keepOpenStrategy_0._v;
        var value = tmp0_elvis_lhs == null ? never(Companion_instance_24) : tmp0_elvis_lhs;
        tmp0.q1h(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var keepOpenStrategy_1 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      var tmp_1 = toModifier(get_TooltipStyle(), [variant_0._v], $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter() | com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() << 3).t3i(modifier_0._v);
      var tmp_2 = hiddenModifier_0._v;
      var tmp_3 = showDelayMs_0._v;
      var tmp_4 = hideDelayMs_0._v;
      var tmp_5 = openCloseStrategy_0._v;
      var tmp_6 = placementTarget_0._v;
      var tmp_7 = placementStrategy_0._v;
      var tmp_8 = ref_0._v;
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(299746029, true, AdvancedTooltip$lambda_1(content, hasArrow_0), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.r1h(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.p1h();
      var tmp_9;
      if (invalid_0 || it_0 === Companion_getInstance().r1g_1) {
        var value_0 = ComposableLambda$invoke$ref_25(dispatchReceiver);
        $composer_1.q1h(value_0);
        tmp_9 = value_0;
      } else {
        tmp_9 = it_0;
      }
      var tmp_10 = tmp_9;
      var tmp0_0 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      AdvancedPopover(target, tmp_1, tmp_2, null, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, keepOpenStrategy_1, tmp_8, tmp0_0, $composer_0, 3072 | 14 & $dirty | 896 & $dirty | 57344 & $dirty >> 3 | 458752 & $dirty >> 3 | 3670016 & $dirty >> 3 | 29360128 & $dirty >> 3 | 234881024 & $dirty >> 3, 48 | com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter() | 14 & $dirty1 >> 3, 0);
    } else {
      $composer_0.j1h();
    }
    var tmp0_safe_receiver = $composer_0.f1h();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y21(AdvancedTooltip$lambda_2(target, modifier_0, hiddenModifier_0, variant_0, hasArrow_0, showDelayMs_0, hideDelayMs_0, openCloseStrategy_0, placementTarget_0, placementStrategy_0, keepOpenStrategy_0, ref_0, content, $changed, $changed1, $default));
    }
  }
  function TooltipStyle$lambda($this$base) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Relative' call
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'relative';
    return borderRadius(color(backgroundColor(position(tmp, tmp$ret$3), TooltipVars_getInstance().y3u().m3b()), TooltipVars_getInstance().w3u().m3b()), get_px(6));
  }
  function TooltipArrowStyle$lambda($this$base) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Absolute' call
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'absolute';
    var tmp_0 = position(tmp, tmp$ret$3);
    return border_0(tmp_0, TooltipArrowStyle$lambda$lambda);
  }
  function TooltipArrowStyle$lambda$lambda($this$border) {
    _init_properties_Tooltip_kt__palx2n();
    $this$border.g3l(get_TRIANGLE_WIDTH());
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    $this$border.f3l('solid');
    return Unit_instance;
  }
  function TopLeftTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_left = get_TRIANGLE_WIDTH_2X();
    var tmp2_top = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleDown(top(margin_2(Companion_instance, tmp2_top, VOID, VOID, tmp1_left), get_px(0)), TooltipVars_getInstance().y3u().m3b());
  }
  function TopTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_left = unaryMinus(get_TRIANGLE_WIDTH());
    var tmp2_top = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleDown(top(left(margin_2(Companion_instance, tmp2_top, VOID, VOID, tmp1_left), get_percent(50)), get_px(0)), TooltipVars_getInstance().y3u().m3b());
  }
  function TopRightTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_right = get_TRIANGLE_WIDTH_2X();
    var tmp2_top = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleDown(top(right(margin_2(Companion_instance, tmp2_top, tmp1_right), get_px(0)), get_px(0)), TooltipVars_getInstance().y3u().m3b());
  }
  function LeftTopTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleLeft(top(left(margin_2(Companion_instance, get_TRIANGLE_WIDTH_2X(), VOID, VOID, unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().y3u().m3b());
  }
  function LeftTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleLeft(top(left(margin_2(Companion_instance, unaryMinus(get_TRIANGLE_WIDTH()), VOID, VOID, unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_percent(50)), TooltipVars_getInstance().y3u().m3b());
  }
  function LeftBottomTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleLeft(bottom(left(margin_2(Companion_instance, VOID, VOID, get_TRIANGLE_WIDTH_2X(), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().y3u().m3b());
  }
  function RightTopTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleRight(top(right(margin_2(Companion_instance, get_TRIANGLE_WIDTH_2X(), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().y3u().m3b());
  }
  function RightTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleRight(top(right(margin_2(Companion_instance, unaryMinus(get_TRIANGLE_WIDTH()), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_percent(50)), TooltipVars_getInstance().y3u().m3b());
  }
  function RightBottomTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_bottom = get_TRIANGLE_WIDTH_2X();
    var tmp2_right = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleRight(bottom(right(margin_2(Companion_instance, VOID, tmp2_right, tmp1_bottom), get_px(0)), get_px(0)), TooltipVars_getInstance().y3u().m3b());
  }
  function BottomLeftTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_left = get_TRIANGLE_WIDTH_2X();
    var tmp2_bottom = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleUp(bottom(left(margin_2(Companion_instance, VOID, VOID, tmp2_bottom, tmp1_left), get_px(0)), get_px(0)), TooltipVars_getInstance().y3u().m3b());
  }
  function BottomTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_left = unaryMinus(get_TRIANGLE_WIDTH());
    var tmp2_bottom = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleUp(bottom(left(margin_2(Companion_instance, VOID, VOID, tmp2_bottom, tmp1_left), get_percent(50)), get_px(0)), TooltipVars_getInstance().y3u().m3b());
  }
  function BottomRightTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleUp(bottom(right(margin_2(Companion_instance, VOID, get_TRIANGLE_WIDTH_2X(), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().y3u().m3b());
  }
  function TooltipTextContainerStyle$lambda($this$base) {
    _init_properties_Tooltip_kt__palx2n();
    return padding(Companion_instance, get_px(5));
  }
  function triangleDown$lambda($color) {
    return function ($this$border) {
      $this$border.e3l(Colors_instance.e3k(), Colors_instance.e3k(), $color, Colors_instance.e3k());
      return Unit_instance;
    };
  }
  function triangleLeft$lambda($color) {
    return function ($this$border) {
      $this$border.e3l(Colors_instance.e3k(), $color, Colors_instance.e3k(), Colors_instance.e3k());
      return Unit_instance;
    };
  }
  function triangleRight$lambda($color) {
    return function ($this$border) {
      $this$border.e3l(Colors_instance.e3k(), Colors_instance.e3k(), Colors_instance.e3k(), $color);
      return Unit_instance;
    };
  }
  function triangleUp$lambda($color) {
    return function ($this$border) {
      $this$border.e3l($color, Colors_instance.e3k(), Colors_instance.e3k(), Colors_instance.e3k());
      return Unit_instance;
    };
  }
  function Tooltip$lambda($target, $text, $modifier, $variant, $placement, $hasArrow, $offsetPixels, $placementTarget, $showDelayMs, $hideDelayMs, $keepOpenStrategy, $ref, $$changed, $$changed1, $$default) {
    return function ($composer, $force) {
      Tooltip($target, $text, $modifier._v, $variant._v, $placement._v, $hasArrow._v, $offsetPixels._v, $placementTarget._v, $showDelayMs._v, $hideDelayMs._v, $keepOpenStrategy._v, $ref._v, $composer, updateChangedFlags($$changed | 1), updateChangedFlags($$changed1), $$default);
      return Unit_instance;
    };
  }
  function AdvancedTooltip$lambda$lambda($text) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.w1h(!(($changed & 17) === 16), $changed & 1)) {
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s = split($text, ['\n']).i();
        while (_iterator__ex2g4s.j()) {
          var element = _iterator__ex2g4s.k();
          // Inline function 'kotlin.text.isNotEmpty' call
          if (charSequenceLength(element) > 0) {
            $composer_0.y1g(255119632);
            SpanText(element, null, null, null, $composer_0, 0, 14);
            $composer_0.z1g();
          } else {
            $composer_0.y1g(255120262);
            Br(null, $composer_0, 0, 1);
            $composer_0.z1g();
          }
        }
        tmp = Unit_instance;
      } else {
        $composer_0.j1h();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_23(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.x2n(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function AdvancedTooltip$lambda($text) {
    return function ($this$AdvancedTooltip, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.w1h(!(($changed & 17) === 16), $changed & 1)) {
        var tmp_0 = toModifier(get_TooltipTextContainerStyle(), [], $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter());
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-465460302, true, AdvancedTooltip$lambda$lambda($text), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.r1h(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.p1h();
        var tmp_1;
        if (invalid || it === Companion_getInstance().r1g_1) {
          var value = ComposableLambda$invoke$ref_23(dispatchReceiver);
          $composer_1.q1h(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Column(tmp_0, null, null, null, tmp0, $composer_0, 24576, 14);
        tmp = Unit_instance;
      } else {
        $composer_0.j1h();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_24(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.x2n(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function AdvancedTooltip$lambda_0($target, $text, $modifier, $hiddenModifier, $variant, $hasArrow, $showDelayMs, $hideDelayMs, $openCloseStrategy, $placementTarget, $placementStrategy, $keepOpenStrategy, $ref, $$changed, $$changed1, $$default) {
    return function ($composer, $force) {
      AdvancedTooltip($target, $text, $modifier._v, $hiddenModifier._v, $variant._v, $hasArrow._v, $showDelayMs._v, $hideDelayMs._v, $openCloseStrategy._v, $placementTarget._v, $placementStrategy._v, $keepOpenStrategy._v, $ref._v, $composer, updateChangedFlags($$changed | 1), updateChangedFlags($$changed1), $$default);
      return Unit_instance;
    };
  }
  function AdvancedTooltip$lambda_1($content, $hasArrow) {
    return function ($this$AdvancedPopover, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 6) === 0) {
        $dirty = $dirty | ($composer_0.r1h($this$AdvancedPopover) ? 4 : 2);
        tmp = Unit_instance;
      }
      var tmp_0;
      if ($composer_0.w1h(!(($dirty & 19) === 18), $dirty & 1)) {
        $content($this$AdvancedPopover, $composer_0, 14 & $dirty);
        var placement = $this$AdvancedPopover.j47_1;
        var tmp_1;
        if ($hasArrow._v && !(placement == null)) {
          $composer_0.y1g(497074206);
          var tmp_2 = get_TooltipArrowStyle();
          var tmp_3;
          switch (placement.l2_1) {
            case 0:
              tmp_3 = get_BottomLeftTooltipArrowVariant();
              break;
            case 1:
              tmp_3 = get_BottomTooltipArrowVariant();
              break;
            case 2:
              tmp_3 = get_BottomRightTooltipArrowVariant();
              break;
            case 3:
              tmp_3 = get_RightTopTooltipArrowVariant();
              break;
            case 5:
              tmp_3 = get_RightTooltipArrowVariant();
              break;
            case 7:
              tmp_3 = get_RightBottomTooltipArrowVariant();
              break;
            case 4:
              tmp_3 = get_LeftTopTooltipArrowVariant();
              break;
            case 6:
              tmp_3 = get_LeftTooltipArrowVariant();
              break;
            case 8:
              tmp_3 = get_LeftBottomTooltipArrowVariant();
              break;
            case 9:
              tmp_3 = get_TopLeftTooltipArrowVariant();
              break;
            case 10:
              tmp_3 = get_TopTooltipArrowVariant();
              break;
            case 11:
              tmp_3 = get_TopRightTooltipArrowVariant();
              break;
            default:
              noWhenBranchMatchedException();
              break;
          }
          var tmp_4 = toModifier(tmp_2, [tmp_3], $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter() | com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() << 3);
          Box(tmp_4, null, null, null, $composer_0, 0, 14);
          $composer_0.z1g();
          tmp_1 = Unit_instance;
        } else {
          $composer_0.y1g(498203381);
          $composer_0.z1g();
          tmp_1 = Unit_instance;
        }
        tmp_0 = tmp_1;
      } else {
        $composer_0.j1h();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_25(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.x2n(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function AdvancedTooltip$lambda_2($target, $modifier, $hiddenModifier, $variant, $hasArrow, $showDelayMs, $hideDelayMs, $openCloseStrategy, $placementTarget, $placementStrategy, $keepOpenStrategy, $ref, $content, $$changed, $$changed1, $$default) {
    return function ($composer, $force) {
      AdvancedTooltip_0($target, $modifier._v, $hiddenModifier._v, $variant._v, $hasArrow._v, $showDelayMs._v, $hideDelayMs._v, $openCloseStrategy._v, $placementTarget._v, $placementStrategy._v, $keepOpenStrategy._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), updateChangedFlags($$changed1), $$default);
      return Unit_instance;
    };
  }
  var properties_initialized_Tooltip_kt_68t07n;
  function _init_properties_Tooltip_kt__palx2n() {
    if (!properties_initialized_Tooltip_kt_68t07n) {
      properties_initialized_Tooltip_kt_68t07n = true;
      TRIANGLE_WIDTH = get_px(5);
      TRIANGLE_WIDTH_2X = get_px(9);
      var tmp = Companion_instance_5;
      TooltipStyle = base(tmp, VOID, TooltipStyle$lambda);
      var tmp_0 = Companion_instance_5;
      TooltipArrowStyle = base(tmp_0, VOID, TooltipArrowStyle$lambda);
      var tmp_1 = get_TooltipArrowStyle();
      TopLeftTooltipArrowVariant = addVariantBase(tmp_1, VOID, TopLeftTooltipArrowVariant$lambda);
      var tmp_2 = get_TooltipArrowStyle();
      TopTooltipArrowVariant = addVariantBase(tmp_2, VOID, TopTooltipArrowVariant$lambda);
      var tmp_3 = get_TooltipArrowStyle();
      TopRightTooltipArrowVariant = addVariantBase(tmp_3, VOID, TopRightTooltipArrowVariant$lambda);
      var tmp_4 = get_TooltipArrowStyle();
      LeftTopTooltipArrowVariant = addVariantBase(tmp_4, VOID, LeftTopTooltipArrowVariant$lambda);
      var tmp_5 = get_TooltipArrowStyle();
      LeftTooltipArrowVariant = addVariantBase(tmp_5, VOID, LeftTooltipArrowVariant$lambda);
      var tmp_6 = get_TooltipArrowStyle();
      LeftBottomTooltipArrowVariant = addVariantBase(tmp_6, VOID, LeftBottomTooltipArrowVariant$lambda);
      var tmp_7 = get_TooltipArrowStyle();
      RightTopTooltipArrowVariant = addVariantBase(tmp_7, VOID, RightTopTooltipArrowVariant$lambda);
      var tmp_8 = get_TooltipArrowStyle();
      RightTooltipArrowVariant = addVariantBase(tmp_8, VOID, RightTooltipArrowVariant$lambda);
      var tmp_9 = get_TooltipArrowStyle();
      RightBottomTooltipArrowVariant = addVariantBase(tmp_9, VOID, RightBottomTooltipArrowVariant$lambda);
      var tmp_10 = get_TooltipArrowStyle();
      BottomLeftTooltipArrowVariant = addVariantBase(tmp_10, VOID, BottomLeftTooltipArrowVariant$lambda);
      var tmp_11 = get_TooltipArrowStyle();
      BottomTooltipArrowVariant = addVariantBase(tmp_11, VOID, BottomTooltipArrowVariant$lambda);
      var tmp_12 = get_TooltipArrowStyle();
      BottomRightTooltipArrowVariant = addVariantBase(tmp_12, VOID, BottomRightTooltipArrowVariant$lambda);
      var tmp_13 = Companion_instance_5;
      TooltipTextContainerStyle = base(tmp_13, VOID, TooltipTextContainerStyle$lambda);
      com_varabyte_kobweb_silk_components_overlay_TooltipVars$stable = 8;
    }
  }
  function initSilkWidgets(ctx) {
    var mutableTheme = ctx.m3m_1;
    // Inline function 'kotlin.apply' call
    var this_0 = ctx.m3m_1.d3n_1;
    var focusOutline = Blue_getInstance().u3s_1.u3j().s3j(VOID, VOID, VOID, 0.5);
    var placeholder = Gray_getInstance().e3t_1;
    // Inline function 'kotlin.run' call
    var color = Colors_instance.g3k();
    set_background(this_0.j3t_1, Colors_instance.z3k());
    set_color(this_0.j3t_1, color);
    set_border(this_0.j3t_1, color.s3j(VOID, VOID, VOID, 0.2));
    set_focusOutline(this_0.j3t_1, focusOutline);
    set_overlay(this_0.j3t_1, color.s3j(VOID, VOID, VOID, 0.5));
    set_placeholder(this_0.j3t_1, placeholder);
    var buttonBase = Colors_instance.z3k().t3j(0.2);
    get_button(this_0.j3t_1).s47(buttonBase, buttonBase.t3j(0.2), Colors_instance.i3k(), buttonBase.t3j(0.4));
    get_callout(this_0.j3t_1).c48(Colors_instance.j3k(), Colors_instance.n3k(), Colors_instance.p3k(), Colors_instance.x3k(), Colors_instance.q3k(), Colors_instance.t3k(), Colors_instance.m3k());
    get_checkbox(this_0.j3t_1).i48(Blue_getInstance().u3s_1, Blue_getInstance().v3s_1, Colors_instance.z3k());
    var inputFilled = Gray_getInstance().b3t_1;
    var tmp0_$this = get_input(this_0.j3t_1);
    var tmp1_filledFocus = Colors_instance.e3k();
    var tmp2_hoveredBorder = Gray_getInstance().e3t_1;
    var tmp3_invalidBorder = Red_getInstance().i3s_1;
    var tmp4_filledHover = inputFilled.t3j(0.1);
    tmp0_$this.q48(tmp2_hoveredBorder, tmp3_invalidBorder, inputFilled, tmp4_filledHover, tmp1_filledFocus);
    var tmp5_$this = get_switch(this_0.j3t_1);
    var tmp6_thumb = Colors_instance.z3k();
    var tmp7_backgroundOn = Colors_instance.p3k();
    var tmp8_backgroundOff = Colors_instance.r3k();
    tmp5_$this.i48(tmp7_backgroundOn, tmp8_backgroundOff, tmp6_thumb);
    get_tab(this_0.j3t_1).g49(Colors_instance.g3k(), Colors_instance.z3k(), Colors_instance.i3k(), VOID, VOID, Colors_instance.r3k(), Colors_instance.a3l(), Colors_instance.z3k());
    get_tooltip(this_0.j3t_1).l49(get_color(this_0.j3t_1), get_background(this_0.j3t_1));
    // Inline function 'kotlin.run' call
    var color_0 = Colors_instance.z3k();
    set_background(this_0.k3t_1, Colors_instance.g3k());
    set_color(this_0.k3t_1, color_0);
    set_border(this_0.k3t_1, color_0.s3j(VOID, VOID, VOID, 0.2));
    set_focusOutline(this_0.k3t_1, focusOutline);
    set_overlay(this_0.k3t_1, color_0.s3j(VOID, VOID, VOID, 0.5));
    set_placeholder(this_0.k3t_1, placeholder);
    var buttonBase_0 = lightened(Colors_instance.g3k(), 0.2);
    get_button(this_0.k3t_1).s47(buttonBase_0, lightened(buttonBase_0, 0.2), Colors_instance.s3k(), lightened(buttonBase_0, 0.4));
    get_callout(this_0.k3t_1).c48(Colors_instance.w3k(), get_callout(this_0.j3t_1).w3v(), get_callout(this_0.j3t_1).x3v(), Colors_instance.f3k(), get_callout(this_0.j3t_1).z3v(), get_callout(this_0.j3t_1).a3w(), Colors_instance.u3k());
    get_checkbox(this_0.k3t_1).i48(Blue_getInstance().r3s_1, Blue_getInstance().s3s_1, Colors_instance.g3k());
    var inputFilled_0 = Gray_getInstance().i3t_1;
    var tmp0_$this_0 = get_input(this_0.k3t_1);
    var tmp1_filledFocus_0 = Colors_instance.e3k();
    var tmp2_hoveredBorder_0 = Gray_getInstance().f3t_1;
    var tmp3_invalidBorder_0 = Red_getInstance().c3s_1;
    var tmp4_filledHover_0 = lightened(inputFilled_0, 0.1);
    tmp0_$this_0.q48(tmp2_hoveredBorder_0, tmp3_invalidBorder_0, inputFilled_0, tmp4_filledHover_0, tmp1_filledFocus_0);
    var tmp5_$this_0 = get_switch(this_0.k3t_1);
    var tmp6_thumb_0 = Colors_instance.z3k();
    var tmp7_backgroundOn_0 = Colors_instance.s3k();
    var tmp8_backgroundOff_0 = Colors_instance.l3k();
    tmp5_$this_0.i48(tmp7_backgroundOn_0, tmp8_backgroundOff_0, tmp6_thumb_0);
    get_tab(this_0.k3t_1).g49(Colors_instance.z3k(), Colors_instance.g3k(), Colors_instance.s3k(), VOID, VOID, Colors_instance.o3k(), Colors_instance.l3k(), Colors_instance.g3k());
    get_tooltip(this_0.k3t_1).l49(get_color(this_0.k3t_1), get_background(this_0.k3t_1));
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = get_entries_0().i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      var tmp = '.' + get_cssClass(element);
      registerStyleBase(ctx.l3m_1, tmp, initSilkWidgets$lambda(element));
    }
    mutableTheme.f3n('silk-input', get_InputStyle());
    mutableTheme.r3r('-outlined', get_OutlinedInputVariant());
    mutableTheme.r3r('-filled', get_FilledInputVariant());
    mutableTheme.r3r('-flushed', get_FlushedInputVariant());
    mutableTheme.r3r('-unstyled', get_UnstyledInputVariant());
    mutableTheme.f3n('silk-input-group', get_InputGroupStyle());
    mutableTheme.l3r('silk-disabled', get_DisabledStyle());
    mutableTheme.l3r('silk-smooth-color', get_SmoothColorStyle());
    mutableTheme.f3n('silk-button', get_ButtonStyle());
    mutableTheme.f3n('silk-canvas', get_CanvasStyle());
    mutableTheme.f3n('silk-callout', get_CalloutStyle());
    mutableTheme.r3r('-left-bordered', get_LeftBorderedCalloutVariant());
    mutableTheme.r3r('-left-bordered-filled', get_LeftBorderedFilledCalloutVariant());
    mutableTheme.r3r('-outlined', get_OutlinedCalloutVariant());
    mutableTheme.r3r('-outlined-filled', get_OutlinedFilledCalloutVariant());
    mutableTheme.r3r('-matching-link', get_MatchingLinkCalloutVariant());
    mutableTheme.f3n('silk-checkbox', get_CheckboxStyle());
    mutableTheme.r3r('-checkbox', get_CheckboxInputVariant());
    mutableTheme.f3n('silk-checkbox-icon-container', get_CheckboxIconContainerStyle());
    mutableTheme.f3n('silk-checkbox-icon', get_CheckboxIconStyle());
    mutableTheme.r3r('-checked', get_CheckedCheckboxIconContainerVariant());
    mutableTheme.r3r('-unchecked', get_UncheckedCheckboxIconContainerVariant());
    mutableTheme.f3n('silk-overlay', get_OverlayStyle());
    mutableTheme.f3n('silk-popup', get_PopupStyle());
    mutableTheme.f3n('silk-simple-grid', get_SimpleGridStyle());
    mutableTheme.f3n('silk-surface', get_SurfaceStyle());
    mutableTheme.f3n('silk-horizontal-divider', get_HorizontalDividerStyle());
    mutableTheme.f3n('silk-vertical-divider', get_VerticalDividerStyle());
    mutableTheme.f3n('silk-switch', get_SwitchStyle());
    mutableTheme.f3n('silk-switch-track', get_SwitchTrackStyle());
    mutableTheme.f3n('silk-switch-thumb', get_SwitchThumbStyle());
    mutableTheme.r3r('-switch', get_SwitchInputVariant());
    mutableTheme.f3n('silk-tabs', get_TabsStyle());
    mutableTheme.f3n('silk-tabs-tab-row', get_TabsTabRowStyle());
    mutableTheme.f3n('silk-tabs-tab', get_TabsTabStyle());
    mutableTheme.f3n('silk-tabs-panel', get_TabsPanelStyle());
    mutableTheme.f3n('silk-tooltip-arrow', get_TooltipArrowStyle());
    mutableTheme.r3r('-top-left', get_TopLeftTooltipArrowVariant());
    mutableTheme.r3r('-top', get_TopTooltipArrowVariant());
    mutableTheme.r3r('-top-right', get_TopRightTooltipArrowVariant());
    mutableTheme.r3r('-left-top', get_LeftTopTooltipArrowVariant());
    mutableTheme.r3r('-left', get_LeftTooltipArrowVariant());
    mutableTheme.r3r('-left-bottom', get_LeftBottomTooltipArrowVariant());
    mutableTheme.r3r('-right-top', get_RightTopTooltipArrowVariant());
    mutableTheme.r3r('-right', get_RightTooltipArrowVariant());
    mutableTheme.r3r('-right-bottom', get_RightBottomTooltipArrowVariant());
    mutableTheme.r3r('-bottom-left', get_BottomLeftTooltipArrowVariant());
    mutableTheme.r3r('-bottom', get_BottomTooltipArrowVariant());
    mutableTheme.r3r('-bottom-right', get_BottomRightTooltipArrowVariant());
    mutableTheme.f3n('silk-tooltip', get_TooltipStyle());
    mutableTheme.f3n('silk-tooltip-text', get_TooltipTextContainerStyle());
    mutableTheme.s3r('silk-checkbox-enabled', get_CheckboxEnabledAnim());
    mutableTheme.j3r('silk-button-size_xs', Companion_getInstance_2().k3x_1);
    mutableTheme.j3r('silk-button-size_sm', Companion_getInstance_2().l3x_1);
    mutableTheme.j3r('silk-button-size_md', Companion_getInstance_2().m3x_1);
    mutableTheme.j3r('silk-button-size_lg', Companion_getInstance_2().n3x_1);
    mutableTheme.j3r('silk-checkbox-size_sm', Companion_getInstance_3().x3y_1);
    mutableTheme.j3r('silk-checkbox-size_md', Companion_getInstance_3().y3y_1);
    mutableTheme.j3r('silk-checkbox-size_lg', Companion_getInstance_3().z3y_1);
    mutableTheme.j3r('silk-input-size_xs', Companion_getInstance_4().z3z_1);
    mutableTheme.j3r('silk-input-size_sm', Companion_getInstance_4().a40_1);
    mutableTheme.j3r('silk-input-size_md', Companion_getInstance_4().b40_1);
    mutableTheme.j3r('silk-input-size_lg', Companion_getInstance_4().c40_1);
    mutableTheme.j3r('silk-switch-size_sm', Companion_getInstance_5().y40_1);
    mutableTheme.j3r('silk-switch-size_md', Companion_getInstance_5().z40_1);
    mutableTheme.j3r('silk-switch-size_lg', Companion_getInstance_5().a41_1);
    mutableTheme.j3r('silk-callout-type_caution', Companion_getInstance_1().j3w_1);
    mutableTheme.j3r('silk-callout-type_important', Companion_getInstance_1().k3w_1);
    mutableTheme.j3r('silk-callout-type_note', Companion_getInstance_1().l3w_1);
    mutableTheme.j3r('silk-callout-type_question', Companion_getInstance_1().m3w_1);
    mutableTheme.j3r('silk-callout-type_quote', Companion_getInstance_1().n3w_1);
    mutableTheme.j3r('silk-callout-type_tip', Companion_getInstance_1().o3w_1);
    mutableTheme.j3r('silk-callout-type_warning', Companion_getInstance_1().p3w_1);
  }
  function silkColorsModifier(colorMode) {
    var palette = toPalette(colorMode);
    return setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(colorScheme(Companion_instance, colorMode.w3r() ? Companion_instance_18.y38() : Companion_instance_18.z38()), get_BackgroundColorVar(), get_background_0(palette)), get_ColorVar(), get_color_0(palette)), get_BorderColorVar(), get_border(palette)), get_FocusOutlineColorVar(), get_focusOutline(palette)), get_PlaceholderColorVar(), get_placeholder_0(palette)), ButtonVars_getInstance().d3x(), get_button_0(palette).m49()), ButtonVars_getInstance().f3x(), get_button_0(palette).p33()), ButtonVars_getInstance().g3x(), get_button_0(palette).n49()), CheckboxVars_getInstance().t3y(), get_checkbox_0(palette).o49()), CheckboxVars_getInstance().u3y(), get_checkbox_0(palette).p33()), CheckboxVars_getInstance().s3y(), get_checkbox_0(palette).p49()), InputVars_getInstance().r3z(), get_input_0(palette).q49()), InputVars_getInstance().s3z(), get_input_0(palette).r49()), InputVars_getInstance().t3z(), get_input_0(palette).s49()), InputVars_getInstance().u3z(), get_input_0(palette).t49()), InputVars_getInstance().v3z(), get_input_0(palette).u49()), OverlayVars_getInstance().y3u(), get_overlay(palette)), SwitchVars_getInstance().w40(), get_switch_0(palette).v49()), TabVars_getInstance().w3u(), get_tab_0(palette).p49()), TabVars_getInstance().y3u(), get_tab_0(palette).o49()), TabVars_getInstance().z3u(), get_tab_0(palette).w49()), TabVars_getInstance().a3v(), get_tab_0(palette).p33()), TabVars_getInstance().b3v(), get_tab_0(palette).n49()), TooltipVars_getInstance().y3u(), get_tooltip_0(palette).o49()), TooltipVars_getInstance().w3u(), get_tooltip_0(palette).p49());
  }
  function initSilkWidgets$lambda($colorMode) {
    return function () {
      return silkColorsModifier($colorMode);
    };
  }
  function get_DisabledStyle() {
    _init_properties_CommonStyles_kt__a7wisz();
    return DisabledStyle;
  }
  var DisabledStyle;
  function get_SmoothColorTransitionDurationVar() {
    _init_properties_CommonStyles_kt__a7wisz();
    var tmp = KProperty0;
    return SmoothColorTransitionDurationVar$delegate.s3b(null, getPropertyCallableRef('SmoothColorTransitionDurationVar', 0, tmp, _get_SmoothColorTransitionDurationVar_$ref_eamzbj(), null));
  }
  var SmoothColorTransitionDurationVar$delegate;
  function get_SmoothColorStyle() {
    _init_properties_CommonStyles_kt__a7wisz();
    return SmoothColorStyle;
  }
  var SmoothColorStyle;
  function DisabledStyle$lambda($composer, $changed) {
    _init_properties_CommonStyles_kt__a7wisz();
    var $composer_0 = $composer;
    $composer_0.y1g(812442038);
    var tmp0 = tabIndex(ariaDisabled(Companion_instance), -1);
    $composer_0.z1g();
    return tmp0;
  }
  function DisabledStyle$lambda_0($this$base) {
    _init_properties_CommonStyles_kt__a7wisz();
    return cursor(opacity(Companion_instance, 0.5), Companion_instance_1.i39());
  }
  function _get_SmoothColorTransitionDurationVar_$ref_eamzbj() {
    return function () {
      return get_SmoothColorTransitionDurationVar();
    };
  }
  function SmoothColorStyle$lambda($this$base) {
    _init_properties_CommonStyles_kt__a7wisz();
    return transition_0(Companion_instance, [Companion_instance_2.b3c('background-color', get_SmoothColorTransitionDurationVar().m3b())]);
  }
  var properties_initialized_CommonStyles_kt_zd2b1t;
  function _init_properties_CommonStyles_kt__a7wisz() {
    if (!properties_initialized_CommonStyles_kt_zd2b1t) {
      properties_initialized_CommonStyles_kt_zd2b1t = true;
      var tmp = Companion_instance_5;
      var tmp_0 = DisabledStyle$lambda;
      DisabledStyle = base_0(tmp, tmp_0, DisabledStyle$lambda_0);
      var tmp0_defaultFallback = TransitionDurationVars_getInstance().m3v().m3b();
      SmoothColorTransitionDurationVar$delegate = StyleVariable_1(tmp0_defaultFallback, 'silk');
      var tmp_1 = Companion_instance_5;
      SmoothColorStyle = base_1(tmp_1, VOID, SmoothColorStyle$lambda);
    }
  }
  var com_varabyte_kobweb_silk_style_common_PlaceholderColor$stable;
  var com_varabyte_kobweb_silk_style_vars_animation_TransitionDurationVars$stable;
  function TransitionDurationVars$_get_VeryFast_$ref_cu0uvd() {
    return function (p0) {
      return p0.w3y();
    };
  }
  function TransitionDurationVars$_get_Fast_$ref_vg87kd() {
    return function (p0) {
      return p0.x40();
    };
  }
  function TransitionDurationVars$_get_Normal_$ref_e4nae6() {
    return function (p0) {
      return p0.m3v();
    };
  }
  function TransitionDurationVars() {
    TransitionDurationVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_ms(0);
    tmp.e3v_1 = StyleVariable_1(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_ms(50);
    tmp_0.f3v_1 = StyleVariable_1(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = get_ms(100);
    tmp_1.g3v_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_ms(150);
    tmp_2.h3v_1 = StyleVariable_1(tmp0_defaultFallback_2, 'silk');
    var tmp_3 = this;
    var tmp0_defaultFallback_3 = get_ms(200);
    tmp_3.i3v_1 = StyleVariable_1(tmp0_defaultFallback_3, 'silk');
    var tmp_4 = this;
    var tmp0_defaultFallback_4 = get_ms(300);
    tmp_4.j3v_1 = StyleVariable_1(tmp0_defaultFallback_4, 'silk');
    var tmp_5 = this;
    var tmp0_defaultFallback_5 = get_ms(400);
    tmp_5.k3v_1 = StyleVariable_1(tmp0_defaultFallback_5, 'silk');
    var tmp_6 = this;
    var tmp0_defaultFallback_6 = get_ms(500);
    tmp_6.l3v_1 = StyleVariable_1(tmp0_defaultFallback_6, 'silk');
  }
  protoOf(TransitionDurationVars).w3y = function () {
    var tmp = KProperty1;
    return this.g3v_1.s3b(this, getPropertyCallableRef('VeryFast', 1, tmp, TransitionDurationVars$_get_VeryFast_$ref_cu0uvd(), null));
  };
  protoOf(TransitionDurationVars).x40 = function () {
    var tmp = KProperty1;
    return this.h3v_1.s3b(this, getPropertyCallableRef('Fast', 1, tmp, TransitionDurationVars$_get_Fast_$ref_vg87kd(), null));
  };
  protoOf(TransitionDurationVars).m3v = function () {
    var tmp = KProperty1;
    return this.i3v_1.s3b(this, getPropertyCallableRef('Normal', 1, tmp, TransitionDurationVars$_get_Normal_$ref_e4nae6(), null));
  };
  var TransitionDurationVars_instance;
  function TransitionDurationVars_getInstance() {
    if (TransitionDurationVars_instance == null)
      new TransitionDurationVars();
    return TransitionDurationVars_instance;
  }
  function get_BackgroundColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    var tmp = KProperty0;
    return BackgroundColorVar$delegate.s3b(null, getPropertyCallableRef('BackgroundColorVar', 0, tmp, _get_BackgroundColorVar_$ref_pnobug(), null));
  }
  var BackgroundColorVar$delegate;
  function get_ColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    var tmp = KProperty0;
    return ColorVar$delegate.s3b(null, getPropertyCallableRef('ColorVar', 0, tmp, _get_ColorVar_$ref_cclgba(), null));
  }
  var ColorVar$delegate;
  function get_BorderColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    var tmp = KProperty0;
    return BorderColorVar$delegate.s3b(null, getPropertyCallableRef('BorderColorVar', 0, tmp, _get_BorderColorVar_$ref_280m9i(), null));
  }
  var BorderColorVar$delegate;
  function get_FocusOutlineColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    var tmp = KProperty0;
    return FocusOutlineColorVar$delegate.s3b(null, getPropertyCallableRef('FocusOutlineColorVar', 0, tmp, _get_FocusOutlineColorVar_$ref_r81ezw(), null));
  }
  var FocusOutlineColorVar$delegate;
  function get_PlaceholderOpacityVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    var tmp = KProperty0;
    return PlaceholderOpacityVar$delegate.s3b(null, getPropertyCallableRef('PlaceholderOpacityVar', 0, tmp, _get_PlaceholderOpacityVar_$ref_6cr8i9(), null));
  }
  var PlaceholderOpacityVar$delegate;
  function get_PlaceholderColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    var tmp = KProperty0;
    return PlaceholderColorVar$delegate.s3b(null, getPropertyCallableRef('PlaceholderColorVar', 0, tmp, _get_PlaceholderColorVar_$ref_is1luf(), null));
  }
  var PlaceholderColorVar$delegate;
  function _get_BackgroundColorVar_$ref_pnobug() {
    return function () {
      return get_BackgroundColorVar();
    };
  }
  function _get_ColorVar_$ref_cclgba() {
    return function () {
      return get_ColorVar();
    };
  }
  function _get_BorderColorVar_$ref_280m9i() {
    return function () {
      return get_BorderColorVar();
    };
  }
  function _get_FocusOutlineColorVar_$ref_r81ezw() {
    return function () {
      return get_FocusOutlineColorVar();
    };
  }
  function _get_PlaceholderOpacityVar_$ref_6cr8i9() {
    return function () {
      return get_PlaceholderOpacityVar();
    };
  }
  function _get_PlaceholderColorVar_$ref_is1luf() {
    return function () {
      return get_PlaceholderColorVar();
    };
  }
  var properties_initialized_ColorVars_kt_3y5hvl;
  function _init_properties_ColorVars_kt__w8x7ib() {
    if (!properties_initialized_ColorVars_kt_3y5hvl) {
      properties_initialized_ColorVars_kt_3y5hvl = true;
      BackgroundColorVar$delegate = StyleVariable('silk');
      ColorVar$delegate = StyleVariable('silk');
      BorderColorVar$delegate = StyleVariable('silk');
      FocusOutlineColorVar$delegate = StyleVariable('silk');
      PlaceholderOpacityVar$delegate = StyleVariable_2(1.0, 'silk');
      PlaceholderColorVar$delegate = StyleVariable('silk');
    }
  }
  var com_varabyte_kobweb_silk_style_vars_size_BorderRadiusVars$stable;
  var com_varabyte_kobweb_silk_style_vars_size_FontSizeVars$stable;
  function FontSizeVars$_get_XS_$ref_g2g1y1() {
    return function (p0) {
      return p0.s3x();
    };
  }
  function FontSizeVars$_get_SM_$ref_l9l5g8() {
    return function (p0) {
      return p0.t3x();
    };
  }
  function FontSizeVars$_get_MD_$ref_sgunm3() {
    return function (p0) {
      return p0.u3x();
    };
  }
  function FontSizeVars$_get_LG_$ref_f7l8kn() {
    return function (p0) {
      return p0.v3x();
    };
  }
  function FontSizeVars() {
    FontSizeVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_cssRem(0.75);
    tmp.o3x_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_cssRem(0.875);
    tmp_0.p3x_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = get_cssRem(1);
    tmp_1.q3x_1 = StyleVariable_0(tmp0_defaultFallback_1, 'silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_cssRem(1.125);
    tmp_2.r3x_1 = StyleVariable_0(tmp0_defaultFallback_2, 'silk');
  }
  protoOf(FontSizeVars).s3x = function () {
    var tmp = KProperty1;
    return this.o3x_1.s3b(this, getPropertyCallableRef('XS', 1, tmp, FontSizeVars$_get_XS_$ref_g2g1y1(), null));
  };
  protoOf(FontSizeVars).t3x = function () {
    var tmp = KProperty1;
    return this.p3x_1.s3b(this, getPropertyCallableRef('SM', 1, tmp, FontSizeVars$_get_SM_$ref_l9l5g8(), null));
  };
  protoOf(FontSizeVars).u3x = function () {
    var tmp = KProperty1;
    return this.q3x_1.s3b(this, getPropertyCallableRef('MD', 1, tmp, FontSizeVars$_get_MD_$ref_sgunm3(), null));
  };
  protoOf(FontSizeVars).v3x = function () {
    var tmp = KProperty1;
    return this.r3x_1.s3b(this, getPropertyCallableRef('LG', 1, tmp, FontSizeVars$_get_LG_$ref_f7l8kn(), null));
  };
  var FontSizeVars_instance;
  function FontSizeVars_getInstance() {
    if (FontSizeVars_instance == null)
      new FontSizeVars();
    return FontSizeVars_instance;
  }
  function BorderRadiusVars$_get_XS_$ref_y88cg7() {
    return function (p0) {
      return p0.s3x();
    };
  }
  function BorderRadiusVars$_get_SM_$ref_vlqm0q() {
    return function (p0) {
      return p0.t3x();
    };
  }
  function BorderRadiusVars$_get_MD_$ref_ab2d3x() {
    return function (p0) {
      return p0.u3x();
    };
  }
  function BorderRadiusVars() {
    BorderRadiusVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_cssRem(0.125);
    tmp.d40_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_cssRem(0.25);
    tmp_0.e40_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = get_cssRem(0.375);
    tmp_1.f40_1 = StyleVariable_0(tmp0_defaultFallback_1, 'silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_cssRem(0.5);
    tmp_2.g40_1 = StyleVariable_0(tmp0_defaultFallback_2, 'silk');
  }
  protoOf(BorderRadiusVars).s3x = function () {
    var tmp = KProperty1;
    return this.d40_1.s3b(this, getPropertyCallableRef('XS', 1, tmp, BorderRadiusVars$_get_XS_$ref_y88cg7(), null));
  };
  protoOf(BorderRadiusVars).t3x = function () {
    var tmp = KProperty1;
    return this.e40_1.s3b(this, getPropertyCallableRef('SM', 1, tmp, BorderRadiusVars$_get_SM_$ref_vlqm0q(), null));
  };
  protoOf(BorderRadiusVars).u3x = function () {
    var tmp = KProperty1;
    return this.f40_1.s3b(this, getPropertyCallableRef('MD', 1, tmp, BorderRadiusVars$_get_MD_$ref_ab2d3x(), null));
  };
  var BorderRadiusVars_instance;
  function BorderRadiusVars_getInstance() {
    if (BorderRadiusVars_instance == null)
      new BorderRadiusVars();
    return BorderRadiusVars_instance;
  }
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableButton$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableCallout$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableCheckbox$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableInput$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableSwitch$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableTab$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableTooltip$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups$stable;
  function set_background(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.w3t('background', value);
  }
  function get_background(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.o3t('background');
  }
  function set_color(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.w3t('color', value);
  }
  function get_color(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.o3t('color');
  }
  function get_color_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.o3t('color');
  }
  function set_border(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.w3t('border', value);
  }
  function set_focusOutline(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.w3t('focusOutline', value);
  }
  function set_overlay(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.w3t('overlay', value);
  }
  function set_placeholder(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.w3t('placeholder', value);
  }
  function SilkWidgetColorGroups$MutableButton$_get_default_$ref_x7wg9f() {
    return function (p0) {
      return p0.m49();
    };
  }
  function SilkWidgetColorGroups$MutableButton$_set_default_$ref_7itfdt() {
    return function (p0, p1) {
      p0.x49(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableButton$_get_default_$ref_x7wg9f_0() {
    return function (p0) {
      return p0.m49();
    };
  }
  function SilkWidgetColorGroups$MutableButton$_set_default_$ref_7itfdt_0() {
    return function (p0, p1) {
      p0.x49(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableButton$_get_hover_$ref_p9ijma() {
    return function (p0) {
      return p0.p33();
    };
  }
  function SilkWidgetColorGroups$MutableButton$_set_hover_$ref_41bwsa() {
    return function (p0, p1) {
      p0.y49(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableButton$_get_hover_$ref_p9ijma_0() {
    return function (p0) {
      return p0.p33();
    };
  }
  function SilkWidgetColorGroups$MutableButton$_set_hover_$ref_41bwsa_0() {
    return function (p0, p1) {
      p0.y49(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableButton$_get_focus_$ref_3khuwm() {
    return function (p0) {
      return p0.z49();
    };
  }
  function SilkWidgetColorGroups$MutableButton$_set_focus_$ref_pqclhy() {
    return function (p0, p1) {
      p0.a4a(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableButton$_get_focus_$ref_3khuwm_0() {
    return function (p0) {
      return p0.z49();
    };
  }
  function SilkWidgetColorGroups$MutableButton$_set_focus_$ref_pqclhy_0() {
    return function (p0, p1) {
      p0.a4a(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableButton$_get_pressed_$ref_v8weqc() {
    return function (p0) {
      return p0.n49();
    };
  }
  function SilkWidgetColorGroups$MutableButton$_set_pressed_$ref_9htgww() {
    return function (p0, p1) {
      p0.b4a(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableButton$_get_pressed_$ref_v8weqc_0() {
    return function (p0) {
      return p0.n49();
    };
  }
  function SilkWidgetColorGroups$MutableButton$_set_pressed_$ref_9htgww_0() {
    return function (p0, p1) {
      p0.b4a(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_get_caution_$ref_3zdyrj() {
    return function (p0) {
      return p0.v3v();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_set_caution_$ref_y9s53f() {
    return function (p0, p1) {
      p0.c4a(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_get_caution_$ref_3zdyrj_0() {
    return function (p0) {
      return p0.v3v();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_set_caution_$ref_y9s53f_0() {
    return function (p0, p1) {
      p0.c4a(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_get_important_$ref_cm0sdm() {
    return function (p0) {
      return p0.w3v();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_set_important_$ref_rtsavy() {
    return function (p0, p1) {
      p0.d4a(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_get_important_$ref_cm0sdm_0() {
    return function (p0) {
      return p0.w3v();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_set_important_$ref_rtsavy_0() {
    return function (p0, p1) {
      p0.d4a(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_get_note_$ref_uw9g78() {
    return function (p0) {
      return p0.x3v();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_set_note_$ref_i3d4qg() {
    return function (p0, p1) {
      p0.e4a(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_get_note_$ref_uw9g78_0() {
    return function (p0) {
      return p0.x3v();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_set_note_$ref_i3d4qg_0() {
    return function (p0, p1) {
      p0.e4a(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_get_question_$ref_83wkaw() {
    return function (p0) {
      return p0.y3v();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_set_question_$ref_7fu698() {
    return function (p0, p1) {
      p0.f4a(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_get_question_$ref_83wkaw_0() {
    return function (p0) {
      return p0.y3v();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_set_question_$ref_7fu698_0() {
    return function (p0, p1) {
      p0.f4a(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_get_quote_$ref_dge3v4() {
    return function (p0) {
      return p0.z3v();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_set_quote_$ref_fugcjg() {
    return function (p0, p1) {
      p0.g4a(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_get_quote_$ref_dge3v4_0() {
    return function (p0) {
      return p0.z3v();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_set_quote_$ref_fugcjg_0() {
    return function (p0, p1) {
      p0.g4a(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_get_tip_$ref_3elcdr() {
    return function (p0) {
      return p0.a3w();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_set_tip_$ref_m7mxz9() {
    return function (p0, p1) {
      p0.h4a(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_get_tip_$ref_3elcdr_0() {
    return function (p0) {
      return p0.a3w();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_set_tip_$ref_m7mxz9_0() {
    return function (p0, p1) {
      p0.h4a(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_get_warning_$ref_39pxao() {
    return function (p0) {
      return p0.b3w();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_set_warning_$ref_xk43mk() {
    return function (p0, p1) {
      p0.i4a(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_get_warning_$ref_39pxao_0() {
    return function (p0) {
      return p0.b3w();
    };
  }
  function SilkWidgetColorGroups$MutableCallout$_set_warning_$ref_xk43mk_0() {
    return function (p0, p1) {
      p0.i4a(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableCheckbox$_get_background_$ref_zg40z7() {
    return function (p0) {
      return p0.o49();
    };
  }
  function SilkWidgetColorGroups$MutableCheckbox$_set_background_$ref_a1wkyh() {
    return function (p0, p1) {
      p0.j4a(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableCheckbox$_get_background_$ref_zg40z7_0() {
    return function (p0) {
      return p0.o49();
    };
  }
  function SilkWidgetColorGroups$MutableCheckbox$_set_background_$ref_a1wkyh_0() {
    return function (p0, p1) {
      p0.j4a(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableCheckbox$_get_hover_$ref_tjb1ib() {
    return function (p0) {
      return p0.p33();
    };
  }
  function SilkWidgetColorGroups$MutableCheckbox$_set_hover_$ref_8gl3r() {
    return function (p0, p1) {
      p0.y49(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableCheckbox$_get_hover_$ref_tjb1ib_0() {
    return function (p0) {
      return p0.p33();
    };
  }
  function SilkWidgetColorGroups$MutableCheckbox$_set_hover_$ref_8gl3r_0() {
    return function (p0, p1) {
      p0.y49(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableCheckbox$_get_color_$ref_omuyxw() {
    return function (p0) {
      return p0.p49();
    };
  }
  function SilkWidgetColorGroups$MutableCheckbox$_set_color_$ref_h3emmo() {
    return function (p0, p1) {
      p0.k4a(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableCheckbox$_get_color_$ref_omuyxw_0() {
    return function (p0) {
      return p0.p49();
    };
  }
  function SilkWidgetColorGroups$MutableCheckbox$_set_color_$ref_h3emmo_0() {
    return function (p0, p1) {
      p0.k4a(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableInput$_get_hoveredBorder_$ref_n2nfhb() {
    return function (p0) {
      return p0.q49();
    };
  }
  function SilkWidgetColorGroups$MutableInput$_set_hoveredBorder_$ref_q8nq7h() {
    return function (p0, p1) {
      p0.l4a(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableInput$_get_hoveredBorder_$ref_n2nfhb_0() {
    return function (p0) {
      return p0.q49();
    };
  }
  function SilkWidgetColorGroups$MutableInput$_set_hoveredBorder_$ref_q8nq7h_0() {
    return function (p0, p1) {
      p0.l4a(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableInput$_get_invalidBorder_$ref_dqky9p() {
    return function (p0) {
      return p0.r49();
    };
  }
  function SilkWidgetColorGroups$MutableInput$_set_invalidBorder_$ref_7z7y0n() {
    return function (p0, p1) {
      p0.m4a(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableInput$_get_invalidBorder_$ref_dqky9p_0() {
    return function (p0) {
      return p0.r49();
    };
  }
  function SilkWidgetColorGroups$MutableInput$_set_invalidBorder_$ref_7z7y0n_0() {
    return function (p0, p1) {
      p0.m4a(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableInput$_get_filled_$ref_4wf80e() {
    return function (p0) {
      return p0.s49();
    };
  }
  function SilkWidgetColorGroups$MutableInput$_set_filled_$ref_a5td4u() {
    return function (p0, p1) {
      p0.n4a(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableInput$_get_filled_$ref_4wf80e_0() {
    return function (p0) {
      return p0.s49();
    };
  }
  function SilkWidgetColorGroups$MutableInput$_set_filled_$ref_a5td4u_0() {
    return function (p0, p1) {
      p0.n4a(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableInput$_get_filledHover_$ref_3cfpp0() {
    return function (p0) {
      return p0.t49();
    };
  }
  function SilkWidgetColorGroups$MutableInput$_set_filledHover_$ref_dg5x7k() {
    return function (p0, p1) {
      p0.o4a(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableInput$_get_filledHover_$ref_3cfpp0_0() {
    return function (p0) {
      return p0.t49();
    };
  }
  function SilkWidgetColorGroups$MutableInput$_set_filledHover_$ref_dg5x7k_0() {
    return function (p0, p1) {
      p0.o4a(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableInput$_get_filledFocus_$ref_p1geeo() {
    return function (p0) {
      return p0.u49();
    };
  }
  function SilkWidgetColorGroups$MutableInput$_set_filledFocus_$ref_z56lx8() {
    return function (p0, p1) {
      p0.p4a(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableInput$_get_filledFocus_$ref_p1geeo_0() {
    return function (p0) {
      return p0.u49();
    };
  }
  function SilkWidgetColorGroups$MutableInput$_set_filledFocus_$ref_z56lx8_0() {
    return function (p0, p1) {
      p0.p4a(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableSwitch$_get_backgroundOn_$ref_y8hjxf() {
    return function (p0) {
      return p0.q4a();
    };
  }
  function SilkWidgetColorGroups$MutableSwitch$_set_backgroundOn_$ref_7pi8yx() {
    return function (p0, p1) {
      p0.r4a(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableSwitch$_get_backgroundOn_$ref_y8hjxf_0() {
    return function (p0) {
      return p0.q4a();
    };
  }
  function SilkWidgetColorGroups$MutableSwitch$_set_backgroundOn_$ref_7pi8yx_0() {
    return function (p0, p1) {
      p0.r4a(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableSwitch$_get_backgroundOff_$ref_mxrk1d() {
    return function (p0) {
      return p0.s4a();
    };
  }
  function SilkWidgetColorGroups$MutableSwitch$_set_backgroundOff_$ref_17ynr1() {
    return function (p0, p1) {
      p0.t4a(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableSwitch$_get_backgroundOff_$ref_mxrk1d_0() {
    return function (p0) {
      return p0.s4a();
    };
  }
  function SilkWidgetColorGroups$MutableSwitch$_set_backgroundOff_$ref_17ynr1_0() {
    return function (p0, p1) {
      p0.t4a(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableSwitch$_get_thumb_$ref_9g7urq() {
    return function (p0) {
      return p0.v49();
    };
  }
  function SilkWidgetColorGroups$MutableSwitch$_set_thumb_$ref_wa1qsu() {
    return function (p0, p1) {
      p0.u4a(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableSwitch$_get_thumb_$ref_9g7urq_0() {
    return function (p0) {
      return p0.v49();
    };
  }
  function SilkWidgetColorGroups$MutableSwitch$_set_thumb_$ref_wa1qsu_0() {
    return function (p0, p1) {
      p0.u4a(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableTab$_get_color_$ref_6u4y5q() {
    return function (p0) {
      return p0.p49();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_set_color_$ref_mgpi8u() {
    return function (p0, p1) {
      p0.k4a(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableTab$_get_color_$ref_6u4y5q_0() {
    return function (p0) {
      return p0.p49();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_set_color_$ref_mgpi8u_0() {
    return function (p0, p1) {
      p0.k4a(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableTab$_get_background_$ref_xpiv3v() {
    return function (p0) {
      return p0.o49();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_set_background_$ref_86ff2f() {
    return function (p0, p1) {
      p0.j4a(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableTab$_get_background_$ref_xpiv3v_0() {
    return function (p0) {
      return p0.o49();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_set_background_$ref_86ff2f_0() {
    return function (p0, p1) {
      p0.j4a(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableTab$_get_selectedColor_$ref_py1w5z() {
    return function (p0) {
      return p0.v4a();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_set_selectedColor_$ref_488zvn() {
    return function (p0, p1) {
      p0.w4a(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableTab$_get_selectedColor_$ref_py1w5z_0() {
    return function (p0) {
      return p0.v4a();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_set_selectedColor_$ref_488zvn_0() {
    return function (p0, p1) {
      p0.w4a(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableTab$_get_selectedBackground_$ref_mhfin4() {
    return function (p0) {
      return p0.x4a();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_set_selectedBackground_$ref_qal2wc() {
    return function (p0, p1) {
      p0.y4a(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableTab$_get_selectedBackground_$ref_mhfin4_0() {
    return function (p0) {
      return p0.x4a();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_set_selectedBackground_$ref_qal2wc_0() {
    return function (p0, p1) {
      p0.y4a(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableTab$_get_selectedBorder_$ref_g7y9r2() {
    return function (p0) {
      return p0.z4a();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_set_selectedBorder_$ref_hpx1da() {
    return function (p0, p1) {
      p0.a4b(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableTab$_get_selectedBorder_$ref_g7y9r2_0() {
    return function (p0) {
      return p0.z4a();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_set_selectedBorder_$ref_hpx1da_0() {
    return function (p0, p1) {
      p0.a4b(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableTab$_get_hover_$ref_a0t3d7() {
    return function (p0) {
      return p0.p33();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_set_hover_$ref_vpgi7d() {
    return function (p0, p1) {
      p0.y49(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableTab$_get_hover_$ref_a0t3d7_0() {
    return function (p0) {
      return p0.p33();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_set_hover_$ref_vpgi7d_0() {
    return function (p0, p1) {
      p0.y49(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableTab$_get_pressed_$ref_ay98jz() {
    return function (p0) {
      return p0.n49();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_set_pressed_$ref_jc4xrx() {
    return function (p0, p1) {
      p0.b4a(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableTab$_get_pressed_$ref_ay98jz_0() {
    return function (p0) {
      return p0.n49();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_set_pressed_$ref_jc4xrx_0() {
    return function (p0, p1) {
      p0.b4a(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableTab$_get_disabled_$ref_hfh8yb() {
    return function (p0) {
      return p0.w49();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_set_disabled_$ref_wz7zif() {
    return function (p0, p1) {
      p0.b4b(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableTab$_get_disabled_$ref_hfh8yb_0() {
    return function (p0) {
      return p0.w49();
    };
  }
  function SilkWidgetColorGroups$MutableTab$_set_disabled_$ref_wz7zif_0() {
    return function (p0, p1) {
      p0.b4b(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableTooltip$_get_background_$ref_qweez1() {
    return function (p0) {
      return p0.o49();
    };
  }
  function SilkWidgetColorGroups$MutableTooltip$_set_background_$ref_1dayxl() {
    return function (p0, p1) {
      p0.j4a(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableTooltip$_get_background_$ref_qweez1_0() {
    return function (p0) {
      return p0.o49();
    };
  }
  function SilkWidgetColorGroups$MutableTooltip$_set_background_$ref_1dayxl_0() {
    return function (p0, p1) {
      p0.j4a(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableTooltip$_get_color_$ref_bp380s() {
    return function (p0) {
      return p0.p49();
    };
  }
  function SilkWidgetColorGroups$MutableTooltip$_set_color_$ref_hlr8ds() {
    return function (p0, p1) {
      p0.k4a(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetColorGroups$MutableTooltip$_get_color_$ref_bp380s_0() {
    return function (p0) {
      return p0.p49();
    };
  }
  function SilkWidgetColorGroups$MutableTooltip$_set_color_$ref_hlr8ds_0() {
    return function (p0, p1) {
      p0.k4a(p1);
      return Unit_instance;
    };
  }
  function MutableButton(palette) {
    ColorGroup.call(this, palette, 'button');
    this.o47_1 = this.v3t();
    this.p47_1 = this.v3t();
    this.q47_1 = this.v3t();
    this.r47_1 = this.v3t();
  }
  protoOf(MutableButton).x49 = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableButton$_get_default_$ref_x7wg9f_0();
    return this.o47_1.s3t(this, getPropertyCallableRef('default', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableButton$_set_default_$ref_7itfdt_0()), _set____db54di);
  };
  protoOf(MutableButton).m49 = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableButton$_get_default_$ref_x7wg9f();
    return this.o47_1.s3b(this, getPropertyCallableRef('default', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableButton$_set_default_$ref_7itfdt()));
  };
  protoOf(MutableButton).y49 = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableButton$_get_hover_$ref_p9ijma_0();
    return this.p47_1.s3t(this, getPropertyCallableRef('hover', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableButton$_set_hover_$ref_41bwsa_0()), _set____db54di);
  };
  protoOf(MutableButton).p33 = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableButton$_get_hover_$ref_p9ijma();
    return this.p47_1.s3b(this, getPropertyCallableRef('hover', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableButton$_set_hover_$ref_41bwsa()));
  };
  protoOf(MutableButton).a4a = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableButton$_get_focus_$ref_3khuwm_0();
    return this.q47_1.s3t(this, getPropertyCallableRef('focus', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableButton$_set_focus_$ref_pqclhy_0()), _set____db54di);
  };
  protoOf(MutableButton).z49 = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableButton$_get_focus_$ref_3khuwm();
    return this.q47_1.s3b(this, getPropertyCallableRef('focus', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableButton$_set_focus_$ref_pqclhy()));
  };
  protoOf(MutableButton).b4a = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableButton$_get_pressed_$ref_v8weqc_0();
    return this.r47_1.s3t(this, getPropertyCallableRef('pressed', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableButton$_set_pressed_$ref_9htgww_0()), _set____db54di);
  };
  protoOf(MutableButton).n49 = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableButton$_get_pressed_$ref_v8weqc();
    return this.r47_1.s3b(this, getPropertyCallableRef('pressed', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableButton$_set_pressed_$ref_9htgww()));
  };
  protoOf(MutableButton).s47 = function (default_0, hover, focus, pressed) {
    this.x49(default_0);
    this.y49(hover);
    this.a4a(focus);
    this.b4a(pressed);
  };
  function MutableCallout(palette) {
    ColorGroup.call(this, palette, 'callout');
    this.v47_1 = this.v3t();
    this.w47_1 = this.v3t();
    this.x47_1 = this.v3t();
    this.y47_1 = this.v3t();
    this.z47_1 = this.v3t();
    this.a48_1 = this.v3t();
    this.b48_1 = this.v3t();
  }
  protoOf(MutableCallout).c4a = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCallout$_get_caution_$ref_3zdyrj_0();
    return this.v47_1.s3t(this, getPropertyCallableRef('caution', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCallout$_set_caution_$ref_y9s53f_0()), _set____db54di);
  };
  protoOf(MutableCallout).v3v = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCallout$_get_caution_$ref_3zdyrj();
    return this.v47_1.s3b(this, getPropertyCallableRef('caution', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCallout$_set_caution_$ref_y9s53f()));
  };
  protoOf(MutableCallout).d4a = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCallout$_get_important_$ref_cm0sdm_0();
    return this.w47_1.s3t(this, getPropertyCallableRef('important', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCallout$_set_important_$ref_rtsavy_0()), _set____db54di);
  };
  protoOf(MutableCallout).w3v = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCallout$_get_important_$ref_cm0sdm();
    return this.w47_1.s3b(this, getPropertyCallableRef('important', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCallout$_set_important_$ref_rtsavy()));
  };
  protoOf(MutableCallout).e4a = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCallout$_get_note_$ref_uw9g78_0();
    return this.x47_1.s3t(this, getPropertyCallableRef('note', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCallout$_set_note_$ref_i3d4qg_0()), _set____db54di);
  };
  protoOf(MutableCallout).x3v = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCallout$_get_note_$ref_uw9g78();
    return this.x47_1.s3b(this, getPropertyCallableRef('note', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCallout$_set_note_$ref_i3d4qg()));
  };
  protoOf(MutableCallout).f4a = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCallout$_get_question_$ref_83wkaw_0();
    return this.y47_1.s3t(this, getPropertyCallableRef('question', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCallout$_set_question_$ref_7fu698_0()), _set____db54di);
  };
  protoOf(MutableCallout).y3v = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCallout$_get_question_$ref_83wkaw();
    return this.y47_1.s3b(this, getPropertyCallableRef('question', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCallout$_set_question_$ref_7fu698()));
  };
  protoOf(MutableCallout).g4a = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCallout$_get_quote_$ref_dge3v4_0();
    return this.z47_1.s3t(this, getPropertyCallableRef('quote', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCallout$_set_quote_$ref_fugcjg_0()), _set____db54di);
  };
  protoOf(MutableCallout).z3v = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCallout$_get_quote_$ref_dge3v4();
    return this.z47_1.s3b(this, getPropertyCallableRef('quote', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCallout$_set_quote_$ref_fugcjg()));
  };
  protoOf(MutableCallout).h4a = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCallout$_get_tip_$ref_3elcdr_0();
    return this.a48_1.s3t(this, getPropertyCallableRef('tip', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCallout$_set_tip_$ref_m7mxz9_0()), _set____db54di);
  };
  protoOf(MutableCallout).a3w = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCallout$_get_tip_$ref_3elcdr();
    return this.a48_1.s3b(this, getPropertyCallableRef('tip', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCallout$_set_tip_$ref_m7mxz9()));
  };
  protoOf(MutableCallout).i4a = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCallout$_get_warning_$ref_39pxao_0();
    return this.b48_1.s3t(this, getPropertyCallableRef('warning', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCallout$_set_warning_$ref_xk43mk_0()), _set____db54di);
  };
  protoOf(MutableCallout).b3w = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCallout$_get_warning_$ref_39pxao();
    return this.b48_1.s3b(this, getPropertyCallableRef('warning', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCallout$_set_warning_$ref_xk43mk()));
  };
  protoOf(MutableCallout).c48 = function (caution, important, note, question, quote, tip, warning) {
    this.c4a(caution);
    this.d4a(important);
    this.e4a(note);
    this.f4a(question);
    this.g4a(quote);
    this.h4a(tip);
    this.i4a(warning);
  };
  function MutableCheckbox(palette) {
    ColorGroup.call(this, palette, 'checkbox');
    this.f48_1 = this.v3t();
    this.g48_1 = this.v3t();
    this.h48_1 = this.v3t();
  }
  protoOf(MutableCheckbox).j4a = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCheckbox$_get_background_$ref_zg40z7_0();
    return this.f48_1.s3t(this, getPropertyCallableRef('background', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCheckbox$_set_background_$ref_a1wkyh_0()), _set____db54di);
  };
  protoOf(MutableCheckbox).o49 = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCheckbox$_get_background_$ref_zg40z7();
    return this.f48_1.s3b(this, getPropertyCallableRef('background', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCheckbox$_set_background_$ref_a1wkyh()));
  };
  protoOf(MutableCheckbox).y49 = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCheckbox$_get_hover_$ref_tjb1ib_0();
    return this.g48_1.s3t(this, getPropertyCallableRef('hover', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCheckbox$_set_hover_$ref_8gl3r_0()), _set____db54di);
  };
  protoOf(MutableCheckbox).p33 = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCheckbox$_get_hover_$ref_tjb1ib();
    return this.g48_1.s3b(this, getPropertyCallableRef('hover', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCheckbox$_set_hover_$ref_8gl3r()));
  };
  protoOf(MutableCheckbox).k4a = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCheckbox$_get_color_$ref_omuyxw_0();
    return this.h48_1.s3t(this, getPropertyCallableRef('color', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCheckbox$_set_color_$ref_h3emmo_0()), _set____db54di);
  };
  protoOf(MutableCheckbox).p49 = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableCheckbox$_get_color_$ref_omuyxw();
    return this.h48_1.s3b(this, getPropertyCallableRef('color', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableCheckbox$_set_color_$ref_h3emmo()));
  };
  protoOf(MutableCheckbox).i48 = function (background, hover, color) {
    this.j4a(background);
    this.y49(hover);
    this.k4a(color);
  };
  function MutableInput(palette) {
    ColorGroup.call(this, palette, 'input');
    this.l48_1 = this.v3t();
    this.m48_1 = this.v3t();
    this.n48_1 = this.v3t();
    this.o48_1 = this.v3t();
    this.p48_1 = this.v3t();
  }
  protoOf(MutableInput).l4a = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableInput$_get_hoveredBorder_$ref_n2nfhb_0();
    return this.l48_1.s3t(this, getPropertyCallableRef('hoveredBorder', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableInput$_set_hoveredBorder_$ref_q8nq7h_0()), _set____db54di);
  };
  protoOf(MutableInput).q49 = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableInput$_get_hoveredBorder_$ref_n2nfhb();
    return this.l48_1.s3b(this, getPropertyCallableRef('hoveredBorder', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableInput$_set_hoveredBorder_$ref_q8nq7h()));
  };
  protoOf(MutableInput).m4a = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableInput$_get_invalidBorder_$ref_dqky9p_0();
    return this.m48_1.s3t(this, getPropertyCallableRef('invalidBorder', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableInput$_set_invalidBorder_$ref_7z7y0n_0()), _set____db54di);
  };
  protoOf(MutableInput).r49 = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableInput$_get_invalidBorder_$ref_dqky9p();
    return this.m48_1.s3b(this, getPropertyCallableRef('invalidBorder', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableInput$_set_invalidBorder_$ref_7z7y0n()));
  };
  protoOf(MutableInput).n4a = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableInput$_get_filled_$ref_4wf80e_0();
    return this.n48_1.s3t(this, getPropertyCallableRef('filled', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableInput$_set_filled_$ref_a5td4u_0()), _set____db54di);
  };
  protoOf(MutableInput).s49 = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableInput$_get_filled_$ref_4wf80e();
    return this.n48_1.s3b(this, getPropertyCallableRef('filled', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableInput$_set_filled_$ref_a5td4u()));
  };
  protoOf(MutableInput).o4a = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableInput$_get_filledHover_$ref_3cfpp0_0();
    return this.o48_1.s3t(this, getPropertyCallableRef('filledHover', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableInput$_set_filledHover_$ref_dg5x7k_0()), _set____db54di);
  };
  protoOf(MutableInput).t49 = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableInput$_get_filledHover_$ref_3cfpp0();
    return this.o48_1.s3b(this, getPropertyCallableRef('filledHover', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableInput$_set_filledHover_$ref_dg5x7k()));
  };
  protoOf(MutableInput).p4a = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableInput$_get_filledFocus_$ref_p1geeo_0();
    return this.p48_1.s3t(this, getPropertyCallableRef('filledFocus', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableInput$_set_filledFocus_$ref_z56lx8_0()), _set____db54di);
  };
  protoOf(MutableInput).u49 = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableInput$_get_filledFocus_$ref_p1geeo();
    return this.p48_1.s3b(this, getPropertyCallableRef('filledFocus', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableInput$_set_filledFocus_$ref_z56lx8()));
  };
  protoOf(MutableInput).q48 = function (hoveredBorder, invalidBorder, filled, filledHover, filledFocus) {
    this.l4a(hoveredBorder);
    this.m4a(invalidBorder);
    this.n4a(filled);
    this.o4a(filledHover);
    this.p4a(filledFocus);
  };
  function MutableSwitch(palette) {
    ColorGroup.call(this, palette, 'switch');
    this.t48_1 = this.v3t();
    this.u48_1 = this.v3t();
    this.v48_1 = this.v3t();
  }
  protoOf(MutableSwitch).r4a = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableSwitch$_get_backgroundOn_$ref_y8hjxf_0();
    return this.t48_1.s3t(this, getPropertyCallableRef('backgroundOn', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableSwitch$_set_backgroundOn_$ref_7pi8yx_0()), _set____db54di);
  };
  protoOf(MutableSwitch).q4a = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableSwitch$_get_backgroundOn_$ref_y8hjxf();
    return this.t48_1.s3b(this, getPropertyCallableRef('backgroundOn', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableSwitch$_set_backgroundOn_$ref_7pi8yx()));
  };
  protoOf(MutableSwitch).t4a = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableSwitch$_get_backgroundOff_$ref_mxrk1d_0();
    return this.u48_1.s3t(this, getPropertyCallableRef('backgroundOff', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableSwitch$_set_backgroundOff_$ref_17ynr1_0()), _set____db54di);
  };
  protoOf(MutableSwitch).s4a = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableSwitch$_get_backgroundOff_$ref_mxrk1d();
    return this.u48_1.s3b(this, getPropertyCallableRef('backgroundOff', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableSwitch$_set_backgroundOff_$ref_17ynr1()));
  };
  protoOf(MutableSwitch).u4a = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableSwitch$_get_thumb_$ref_9g7urq_0();
    return this.v48_1.s3t(this, getPropertyCallableRef('thumb', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableSwitch$_set_thumb_$ref_wa1qsu_0()), _set____db54di);
  };
  protoOf(MutableSwitch).v49 = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableSwitch$_get_thumb_$ref_9g7urq();
    return this.v48_1.s3b(this, getPropertyCallableRef('thumb', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableSwitch$_set_thumb_$ref_wa1qsu()));
  };
  protoOf(MutableSwitch).i48 = function (backgroundOn, backgroundOff, thumb) {
    this.r4a(backgroundOn);
    this.t4a(backgroundOff);
    this.u4a(thumb);
  };
  function MutableTab(palette) {
    ColorGroup.call(this, palette, 'tab');
    this.y48_1 = this.v3t();
    this.z48_1 = this.v3t();
    this.a49_1 = this.v3t();
    this.b49_1 = this.v3t();
    this.c49_1 = this.v3t();
    this.d49_1 = this.v3t();
    this.e49_1 = this.v3t();
    this.f49_1 = this.v3t();
  }
  protoOf(MutableTab).k4a = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTab$_get_color_$ref_6u4y5q_0();
    return this.y48_1.s3t(this, getPropertyCallableRef('color', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTab$_set_color_$ref_mgpi8u_0()), _set____db54di);
  };
  protoOf(MutableTab).p49 = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTab$_get_color_$ref_6u4y5q();
    return this.y48_1.s3b(this, getPropertyCallableRef('color', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTab$_set_color_$ref_mgpi8u()));
  };
  protoOf(MutableTab).j4a = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTab$_get_background_$ref_xpiv3v_0();
    return this.z48_1.s3t(this, getPropertyCallableRef('background', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTab$_set_background_$ref_86ff2f_0()), _set____db54di);
  };
  protoOf(MutableTab).o49 = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTab$_get_background_$ref_xpiv3v();
    return this.z48_1.s3b(this, getPropertyCallableRef('background', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTab$_set_background_$ref_86ff2f()));
  };
  protoOf(MutableTab).w4a = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTab$_get_selectedColor_$ref_py1w5z_0();
    return this.a49_1.s3t(this, getPropertyCallableRef('selectedColor', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTab$_set_selectedColor_$ref_488zvn_0()), _set____db54di);
  };
  protoOf(MutableTab).v4a = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTab$_get_selectedColor_$ref_py1w5z();
    return this.a49_1.s3b(this, getPropertyCallableRef('selectedColor', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTab$_set_selectedColor_$ref_488zvn()));
  };
  protoOf(MutableTab).y4a = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTab$_get_selectedBackground_$ref_mhfin4_0();
    return this.b49_1.s3t(this, getPropertyCallableRef('selectedBackground', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTab$_set_selectedBackground_$ref_qal2wc_0()), _set____db54di);
  };
  protoOf(MutableTab).x4a = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTab$_get_selectedBackground_$ref_mhfin4();
    return this.b49_1.s3b(this, getPropertyCallableRef('selectedBackground', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTab$_set_selectedBackground_$ref_qal2wc()));
  };
  protoOf(MutableTab).a4b = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTab$_get_selectedBorder_$ref_g7y9r2_0();
    return this.c49_1.s3t(this, getPropertyCallableRef('selectedBorder', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTab$_set_selectedBorder_$ref_hpx1da_0()), _set____db54di);
  };
  protoOf(MutableTab).z4a = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTab$_get_selectedBorder_$ref_g7y9r2();
    return this.c49_1.s3b(this, getPropertyCallableRef('selectedBorder', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTab$_set_selectedBorder_$ref_hpx1da()));
  };
  protoOf(MutableTab).y49 = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTab$_get_hover_$ref_a0t3d7_0();
    return this.d49_1.s3t(this, getPropertyCallableRef('hover', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTab$_set_hover_$ref_vpgi7d_0()), _set____db54di);
  };
  protoOf(MutableTab).p33 = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTab$_get_hover_$ref_a0t3d7();
    return this.d49_1.s3b(this, getPropertyCallableRef('hover', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTab$_set_hover_$ref_vpgi7d()));
  };
  protoOf(MutableTab).b4a = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTab$_get_pressed_$ref_ay98jz_0();
    return this.e49_1.s3t(this, getPropertyCallableRef('pressed', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTab$_set_pressed_$ref_jc4xrx_0()), _set____db54di);
  };
  protoOf(MutableTab).n49 = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTab$_get_pressed_$ref_ay98jz();
    return this.e49_1.s3b(this, getPropertyCallableRef('pressed', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTab$_set_pressed_$ref_jc4xrx()));
  };
  protoOf(MutableTab).b4b = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTab$_get_disabled_$ref_hfh8yb_0();
    return this.f49_1.s3t(this, getPropertyCallableRef('disabled', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTab$_set_disabled_$ref_wz7zif_0()), _set____db54di);
  };
  protoOf(MutableTab).w49 = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTab$_get_disabled_$ref_hfh8yb();
    return this.f49_1.s3b(this, getPropertyCallableRef('disabled', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTab$_set_disabled_$ref_wz7zif()));
  };
  protoOf(MutableTab).c4b = function (color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled) {
    this.k4a(color);
    this.j4a(background);
    this.w4a(selectedColor);
    this.y4a(selectedBackground);
    this.a4b(selectedBorder);
    this.y49(hover);
    this.b4a(pressed);
    this.b4b(disabled);
  };
  protoOf(MutableTab).g49 = function (color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled, $super) {
    selectedBackground = selectedBackground === VOID ? background : selectedBackground;
    selectedBorder = selectedBorder === VOID ? selectedColor : selectedBorder;
    var tmp;
    if ($super === VOID) {
      this.c4b(color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled);
      tmp = Unit_instance;
    } else {
      tmp = $super.c4b.call(this, color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled);
    }
    return tmp;
  };
  function MutableTooltip(palette) {
    ColorGroup.call(this, palette, 'tooltip');
    this.j49_1 = this.v3t();
    this.k49_1 = this.v3t();
  }
  protoOf(MutableTooltip).j4a = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTooltip$_get_background_$ref_qweez1_0();
    return this.j49_1.s3t(this, getPropertyCallableRef('background', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTooltip$_set_background_$ref_1dayxl_0()), _set____db54di);
  };
  protoOf(MutableTooltip).o49 = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTooltip$_get_background_$ref_qweez1();
    return this.j49_1.s3b(this, getPropertyCallableRef('background', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTooltip$_set_background_$ref_1dayxl()));
  };
  protoOf(MutableTooltip).k4a = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTooltip$_get_color_$ref_bp380s_0();
    return this.k49_1.s3t(this, getPropertyCallableRef('color', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTooltip$_set_color_$ref_hlr8ds_0()), _set____db54di);
  };
  protoOf(MutableTooltip).p49 = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetColorGroups$MutableTooltip$_get_color_$ref_bp380s();
    return this.k49_1.s3b(this, getPropertyCallableRef('color', 1, tmp, tmp_0, SilkWidgetColorGroups$MutableTooltip$_set_color_$ref_hlr8ds()));
  };
  protoOf(MutableTooltip).l49 = function (background, color) {
    this.j4a(background);
    this.k4a(color);
  };
  function get_button(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return new MutableButton(_this__u8e3s4);
  }
  function get_callout(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return new MutableCallout(_this__u8e3s4);
  }
  function get_checkbox(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return new MutableCheckbox(_this__u8e3s4);
  }
  function get_input(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return new MutableInput(_this__u8e3s4);
  }
  function get_switch(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return new MutableSwitch(_this__u8e3s4);
  }
  function get_tab(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return new MutableTab(_this__u8e3s4);
  }
  function get_tooltip(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return new MutableTooltip(_this__u8e3s4);
  }
  function get_background_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.o3t('background');
  }
  function get_border(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.o3t('border');
  }
  function get_focusOutline(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.o3t('focusOutline');
  }
  function get_placeholder_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.o3t('placeholder');
  }
  function get_button_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return get_button(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_checkbox_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return get_checkbox(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_input_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return get_input(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_overlay(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.o3t('overlay');
  }
  function get_switch_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return get_switch(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_tab_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return get_tab(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_tooltip_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return get_tooltip(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_callout_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return get_callout(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  var properties_initialized_SilkWidgetColorGroups_kt_1mdo2;
  function _init_properties_SilkWidgetColorGroups_kt__mh2tbg() {
    if (!properties_initialized_SilkWidgetColorGroups_kt_1mdo2) {
      properties_initialized_SilkWidgetColorGroups_kt_1mdo2 = true;
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableButton$stable = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableCallout$stable = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableCheckbox$stable = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableInput$stable = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableSwitch$stable = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableTab$stable = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableTooltip$stable = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups$stable = 0;
    }
  }
  //region block: init
  com_varabyte_kobweb_silk_components_icons_IconRenderStyle_Fill$stable = 0;
  com_varabyte_kobweb_silk_components_icons_IconRenderStyle_Stroke$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_KeepPopupOpenStrategy$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_ManualKeepPopupOpenStrategy$stable = 8;
  Companion_instance_24 = new Companion_4();
  com_varabyte_kobweb_silk_components_overlay_OpenClosePopupStrategy$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_ManualOpenClosePopupStrategy$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_TimedOpenClosePopupStrategy$stable = 8;
  Companion_instance_25 = new Companion_5();
  com_varabyte_kobweb_silk_components_overlay_PopoverState_Uninitialized$stable = 0;
  com_varabyte_kobweb_silk_components_overlay_PopoverState_FoundElements$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_PopoverState_Calculating$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_PopoverState_Shown$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_PopoverState_Hiding$stable = 8;
  Uninitialized_instance = new Uninitialized();
  Companion_instance_26 = new Companion_6();
  com_varabyte_kobweb_silk_style_common_PlaceholderColor$stable = 8;
  com_varabyte_kobweb_silk_style_vars_animation_TransitionDurationVars$stable = 8;
  com_varabyte_kobweb_silk_style_vars_size_BorderRadiusVars$stable = 8;
  com_varabyte_kobweb_silk_style_vars_size_FontSizeVars$stable = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_ButtonStyle;
  _.$_$.b = Button_0;
  _.$_$.c = MoonIcon;
  _.$_$.d = SunIcon;
  _.$_$.e = get_HorizontalDividerStyle;
  _.$_$.f = Surface;
  _.$_$.g = Tooltip;
  _.$_$.h = initSilkWidgets;
  _.$_$.i = get_SmoothColorStyle;
  _.$_$.j = get_BorderColorVar;
  _.$_$.k = get_ColorVar;
  _.$_$.l = set_background;
  _.$_$.m = get_color_0;
  _.$_$.n = set_color;
  _.$_$.o = PopupPlacement_BottomRight_getInstance;
  _.$_$.p = ButtonVars_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-silk-widgets.js.map
