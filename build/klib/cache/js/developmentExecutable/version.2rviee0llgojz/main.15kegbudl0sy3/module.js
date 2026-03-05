(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './androidx-compose-runtime-runtime.js', './kotlin-kotlin-stdlib.js', './kobweb-frontend-kobweb-core.js', './kobweb-frontend-silk-foundation.js', './html-internal-html-core-runtime.js', './kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js', './kobweb-frontend-silk-widgets.js', './kobweb-frontend-silk-widgets-kobweb.js', './kobweb-frontend-kobweb-silk.js', './kobweb-frontend-kobweb-compose.js', './kobweb-frontend-compose-html-ext.js', './kotlinx-coroutines-core.js', './html-html-core.js', './kobweb-frontend-kobwebx-markdown.js', './kobweb-frontend-browser-ext.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./androidx-compose-runtime-runtime.js'), require('./kotlin-kotlin-stdlib.js'), require('./kobweb-frontend-kobweb-core.js'), require('./kobweb-frontend-silk-foundation.js'), require('./html-internal-html-core-runtime.js'), require('./kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'), require('./kobweb-frontend-silk-widgets.js'), require('./kobweb-frontend-silk-widgets-kobweb.js'), require('./kobweb-frontend-kobweb-silk.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./kobweb-frontend-compose-html-ext.js'), require('./kotlinx-coroutines-core.js'), require('./html-html-core.js'), require('./kobweb-frontend-kobwebx-markdown.js'), require('./kobweb-frontend-browser-ext.js'));
  else {
    if (typeof globalThis['androidx-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'org.alia.portfolio:portfolio'. Its dependency 'androidx-compose-runtime-runtime' was not found. Please, check whether 'androidx-compose-runtime-runtime' is loaded prior to 'org.alia.portfolio:portfolio'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'org.alia.portfolio:portfolio'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'org.alia.portfolio:portfolio'.");
    }
    if (typeof globalThis['kobweb-frontend-kobweb-core'] === 'undefined') {
      throw new Error("Error loading module 'org.alia.portfolio:portfolio'. Its dependency 'kobweb-frontend-kobweb-core' was not found. Please, check whether 'kobweb-frontend-kobweb-core' is loaded prior to 'org.alia.portfolio:portfolio'.");
    }
    if (typeof globalThis['kobweb-frontend-silk-foundation'] === 'undefined') {
      throw new Error("Error loading module 'org.alia.portfolio:portfolio'. Its dependency 'kobweb-frontend-silk-foundation' was not found. Please, check whether 'kobweb-frontend-silk-foundation' is loaded prior to 'org.alia.portfolio:portfolio'.");
    }
    if (typeof globalThis['html-internal-html-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'org.alia.portfolio:portfolio'. Its dependency 'html-internal-html-core-runtime' was not found. Please, check whether 'html-internal-html-core-runtime' is loaded prior to 'org.alia.portfolio:portfolio'.");
    }
    if (typeof kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat === 'undefined') {
      throw new Error("Error loading module 'org.alia.portfolio:portfolio'. Its dependency 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' was not found. Please, check whether 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' is loaded prior to 'org.alia.portfolio:portfolio'.");
    }
    if (typeof globalThis['kobweb-frontend-silk-widgets'] === 'undefined') {
      throw new Error("Error loading module 'org.alia.portfolio:portfolio'. Its dependency 'kobweb-frontend-silk-widgets' was not found. Please, check whether 'kobweb-frontend-silk-widgets' is loaded prior to 'org.alia.portfolio:portfolio'.");
    }
    if (typeof globalThis['kobweb-frontend-silk-widgets-kobweb'] === 'undefined') {
      throw new Error("Error loading module 'org.alia.portfolio:portfolio'. Its dependency 'kobweb-frontend-silk-widgets-kobweb' was not found. Please, check whether 'kobweb-frontend-silk-widgets-kobweb' is loaded prior to 'org.alia.portfolio:portfolio'.");
    }
    if (typeof globalThis['kobweb-frontend-kobweb-silk'] === 'undefined') {
      throw new Error("Error loading module 'org.alia.portfolio:portfolio'. Its dependency 'kobweb-frontend-kobweb-silk' was not found. Please, check whether 'kobweb-frontend-kobweb-silk' is loaded prior to 'org.alia.portfolio:portfolio'.");
    }
    if (typeof globalThis['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'org.alia.portfolio:portfolio'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'org.alia.portfolio:portfolio'.");
    }
    if (typeof globalThis['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'org.alia.portfolio:portfolio'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'org.alia.portfolio:portfolio'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'org.alia.portfolio:portfolio'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'org.alia.portfolio:portfolio'.");
    }
    if (typeof globalThis['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'org.alia.portfolio:portfolio'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'org.alia.portfolio:portfolio'.");
    }
    if (typeof globalThis['kobweb-frontend-kobwebx-markdown'] === 'undefined') {
      throw new Error("Error loading module 'org.alia.portfolio:portfolio'. Its dependency 'kobweb-frontend-kobwebx-markdown' was not found. Please, check whether 'kobweb-frontend-kobwebx-markdown' is loaded prior to 'org.alia.portfolio:portfolio'.");
    }
    if (typeof globalThis['kobweb-frontend-browser-ext'] === 'undefined') {
      throw new Error("Error loading module 'org.alia.portfolio:portfolio'. Its dependency 'kobweb-frontend-browser-ext' was not found. Please, check whether 'kobweb-frontend-browser-ext' is loaded prior to 'org.alia.portfolio:portfolio'.");
    }
    globalThis['org.alia.portfolio:portfolio'] = factory(typeof globalThis['org.alia.portfolio:portfolio'] === 'undefined' ? {} : globalThis['org.alia.portfolio:portfolio'], globalThis['androidx-compose-runtime-runtime'], globalThis['kotlin-kotlin-stdlib'], globalThis['kobweb-frontend-kobweb-core'], globalThis['kobweb-frontend-silk-foundation'], globalThis['html-internal-html-core-runtime'], kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat, globalThis['kobweb-frontend-silk-widgets'], globalThis['kobweb-frontend-silk-widgets-kobweb'], globalThis['kobweb-frontend-kobweb-silk'], globalThis['kobweb-frontend-kobweb-compose'], globalThis['kobweb-frontend-compose-html-ext'], globalThis['kotlinx-coroutines-core'], globalThis['html-html-core'], globalThis['kobweb-frontend-kobwebx-markdown'], globalThis['kobweb-frontend-browser-ext']);
  }
}(function (_, kotlin_androidx_compose_runtime_runtime, kotlin_kotlin, kotlin_com_varabyte_kobweb_kobweb_core, kotlin_com_varabyte_kobweb_silk_foundation, kotlin_org_jetbrains_compose_html_internal_html_core_runtime, kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat, kotlin_com_varabyte_kobweb_silk_widgets, kotlin_com_varabyte_kobweb_silk_widgets_kobweb, kotlin_com_varabyte_kobweb_kobweb_silk, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobwebx_kobwebx_markdown, kotlin_com_varabyte_kobweb_browser_ext) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var sourceInformationMarkerStart = kotlin_androidx_compose_runtime_runtime.$_$.z;
  var sourceInformationMarkerEnd = kotlin_androidx_compose_runtime_runtime.$_$.y;
  var toString = kotlin_kotlin.$_$.od;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.r1;
  var androidx_compose_runtime_ProvidedValue$stableprop_getter = kotlin_androidx_compose_runtime_runtime.$_$.r;
  var CompositionLocalProvider = kotlin_androidx_compose_runtime_runtime.$_$.d;
  var ensureNotNull = kotlin_kotlin.$_$.wh;
  var get_api = kotlin_com_varabyte_kobweb_kobweb_core.$_$.a;
  var AppGlobals_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.l;
  var to = kotlin_kotlin.$_$.gi;
  var mapOf = kotlin_kotlin.$_$.e8;
  var Companion_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.m;
  var Router = kotlin_com_varabyte_kobweb_kobweb_core.$_$.h;
  var initKobweb = kotlin_com_varabyte_kobweb_kobweb_core.$_$.c;
  var set_additionalSilkInitialization = kotlin_com_varabyte_kobweb_silk_foundation.$_$.d;
  var removePrefix = kotlin_kotlin.$_$.jf;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.h2;
  var charArrayOf = kotlin_kotlin.$_$.vb;
  var trimStart = kotlin_kotlin.$_$.ig;
  var remove = kotlin_com_varabyte_kobweb_kobweb_core.$_$.j;
  var UpdateHistoryMode_REPLACE_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.k;
  var composableLambdaInstance = kotlin_androidx_compose_runtime_runtime.$_$.a;
  var renderComposable = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.e;
  var Unit_getInstance = kotlin_kotlin.$_$.p4;
  var rememberComposableLambda = kotlin_androidx_compose_runtime_runtime.$_$.b;
  var Companion_getInstance_0 = kotlin_androidx_compose_runtime_runtime.$_$.k1;
  var THROW_CCE = kotlin_kotlin.$_$.eh;
  var com_varabyte_kobweb_core_PageContext$stableprop_getter = kotlin_com_varabyte_kobweb_kobweb_core.$_$.e;
  var DeferringHost = kotlin_com_varabyte_kobweb_silk_foundation.$_$.c;
  var protoOf = kotlin_kotlin.$_$.md;
  var initMetadataForObject = kotlin_kotlin.$_$.pc;
  var updateChangedFlags = kotlin_androidx_compose_runtime_runtime.$_$.e1;
  var removeClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.d;
  var hasClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.c;
  var toString_0 = kotlin_kotlin.$_$.fi;
  var toInt = kotlin_kotlin.$_$.cg;
  var charSequenceLength = kotlin_kotlin.$_$.zb;
  var toBoolean = kotlin_kotlin.$_$.zf;
  var isBlank = kotlin_kotlin.$_$.bf;
  var VOID = kotlin_kotlin.$_$.d;
  var removeSuffix = kotlin_kotlin.$_$.kf;
  var initSilkWidgets = kotlin_com_varabyte_kobweb_silk_widgets.$_$.h;
  var initSilkWidgetsKobweb = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.g;
  var com_varabyte_kobweb_navigation_Router$stableprop_getter = kotlin_com_varabyte_kobweb_kobweb_core.$_$.i;
  var compositionLocalOf = kotlin_androidx_compose_runtime_runtime.$_$.s;
  var Companion_getInstance_1 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.i2;
  var loadFromLocalStorage = kotlin_com_varabyte_kobweb_silk_foundation.$_$.s1;
  var ColorMode_DARK_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.c2;
  var registerStyleBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.e;
  var SilkApp = kotlin_com_varabyte_kobweb_kobweb_silk.$_$.a;
  var Companion_getInstance_2 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x3;
  var Companion_getInstance_3 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.j4;
  var scrollBehavior = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u2;
  var CoroutineImpl = kotlin_kotlin.$_$.oa;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t;
  var isInterface = kotlin_kotlin.$_$.yc;
  var saveToLocalStorage = kotlin_com_varabyte_kobweb_silk_foundation.$_$.t1;
  var initMetadataForLambda = kotlin_kotlin.$_$.oc;
  var LaunchedEffect = kotlin_androidx_compose_runtime_runtime.$_$.k;
  var get_SmoothColorStyle = kotlin_com_varabyte_kobweb_silk_widgets.$_$.i;
  var com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter = kotlin_com_varabyte_kobweb_silk_foundation.$_$.c1;
  var toModifier = kotlin_com_varabyte_kobweb_silk_foundation.$_$.i1;
  var get_vh = kotlin_org_jetbrains_compose_html_html_core.$_$.v5;
  var minHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c2;
  var Surface = kotlin_com_varabyte_kobweb_silk_widgets.$_$.f;
  var SuspendFunction1 = kotlin_kotlin.$_$.pa;
  var get_HorizontalDividerStyle = kotlin_com_varabyte_kobweb_silk_widgets.$_$.e;
  var modifyStyleBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.y1;
  var get_cssRem = kotlin_org_jetbrains_compose_html_html_core.$_$.f4;
  var fontSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i1;
  var fontWeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k1;
  var letterSpacing = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r1;
  var Companion_getInstance_4 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.k4;
  var textAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y2;
  var lineHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s1;
  var Colors_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t3;
  var color = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b1;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.p5;
  var padding = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o2;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.n5;
  var borderRadius = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r;
  var ButtonVars_getInstance = kotlin_com_varabyte_kobweb_silk_widgets.$_$.p;
  var setVariable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v2;
  var MediaFeature = kotlin_org_jetbrains_compose_html_html_core.$_$.s2;
  var fontFamily = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h1;
  var fillMaxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f1;
  var Companion_getInstance_5 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.h2;
  var base = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a1;
  var get_ButtonStyle = kotlin_com_varabyte_kobweb_silk_widgets.$_$.a;
  var addVariantBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.x;
  var initMetadataForClass = kotlin_kotlin.$_$.kc;
  var Companion_getInstance_6 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s3;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.zh;
  var set_background = kotlin_com_varabyte_kobweb_silk_widgets.$_$.l;
  var set_color = kotlin_com_varabyte_kobweb_silk_widgets.$_$.n;
  var get_markdown = kotlin_com_varabyte_kobwebx_kobwebx_markdown.$_$.a;
  var singleOrNull = kotlin_kotlin.$_$.w8;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.m1;
  var getKClass = kotlin_kotlin.$_$.yd;
  var toAttrs = kotlin_com_varabyte_kobweb_silk_foundation.$_$.f1;
  var Div = kotlin_org_jetbrains_compose_html_html_core.$_$.c6;
  var fillMaxSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e1;
  var margin = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a2;
  var margin_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z1;
  var Companion_getInstance_7 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.x3;
  var fontWeight_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j1;
  var Companion_getInstance_8 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.i4;
  var overflowWrap = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k2;
  var toPalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.o1;
  var get_color = kotlin_com_varabyte_kobweb_silk_widgets.$_$.m;
  var Companion_getInstance_9 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h4;
  var Companion_getInstance_10 = kotlin_org_jetbrains_compose_html_html_core.$_$.i;
  var display = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d1;
  var backgroundColor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o;
  var Companion_getInstance_11 = kotlin_org_jetbrains_compose_html_html_core.$_$.l;
  var border = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t;
  var overflow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l2;
  var CssStyle = kotlin_com_varabyte_kobweb_silk_foundation.$_$.u;
  var getValue = kotlin_com_varabyte_kobweb_kobweb_core.$_$.b;
  var gridTemplateRows = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o1;
  var Center_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w3;
  var com_varabyte_kobweb_compose_ui_Alignment_Center$stableprop_getter = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j3;
  var Box = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c;
  var Breakpoint_MD_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b2;
  var padding_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p2;
  var maxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b2;
  var get_fr = kotlin_org_jetbrains_compose_html_html_core.$_$.n4;
  var gridRow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m1;
  var CenterHorizontally_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u3;
  var com_varabyte_kobweb_compose_ui_Alignment_CenterHorizontally$stableprop_getter = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k3;
  var Column = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d;
  var SpanText = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a;
  var styleModifier = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m3;
  var gap = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l1;
  var toAttrs_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o3;
  var listOf = kotlin_kotlin.$_$.c8;
  var get_UndecoratedLinkVariant = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.f;
  var get_UncoloredLinkVariant = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.e;
  var com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter = kotlin_com_varabyte_kobweb_silk_foundation.$_$.d1;
  var Link = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.c;
  var Row = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e;
  var opacity = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h2;
  var padding_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q2;
  var height = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p1;
  var Companion_getInstance_12 = kotlin_org_jetbrains_compose_html_html_core.$_$.m;
  var position = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r2;
  var top = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a3;
  var left = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q1;
  var get_vw = kotlin_org_jetbrains_compose_html_html_core.$_$.w5;
  var width = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h3;
  var zIndex = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i3;
  var DisposableEffectResult = kotlin_androidx_compose_runtime_runtime.$_$.g;
  var Video = kotlin_org_jetbrains_compose_html_html_core.$_$.j6;
  var Companion_getInstance_13 = kotlin_com_varabyte_kobweb_browser_ext.$_$.l;
  var PopupPlacement_BottomRight_getInstance = kotlin_com_varabyte_kobweb_silk_widgets.$_$.o;
  var Tooltip = kotlin_com_varabyte_kobweb_silk_widgets.$_$.g;
  var CenterVertically_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v3;
  var com_varabyte_kobweb_compose_ui_Alignment_CenterVertically$stableprop_getter = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l3;
  var Link_0 = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.d;
  var Spacer = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f;
  var KMutableProperty0 = kotlin_kotlin.$_$.ae;
  var getLocalDelegateReference = kotlin_kotlin.$_$.fc;
  var SunIcon = kotlin_com_varabyte_kobweb_silk_widgets.$_$.d;
  var MoonIcon = kotlin_com_varabyte_kobweb_silk_widgets.$_$.c;
  var get_hover = kotlin_com_varabyte_kobweb_silk_foundation.$_$.n;
  var Companion_getInstance_14 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.w3;
  var cursor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c1;
  var scale = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t2;
  var Text = kotlin_org_jetbrains_compose_html_html_core.$_$.i6;
  var Companion_getInstance_15 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d4;
  var objectFit = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e2;
  var Image = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.b;
  var get_em = kotlin_org_jetbrains_compose_html_html_core.$_$.h4;
  var Button = kotlin_com_varabyte_kobweb_silk_widgets.$_$.b;
  var emptyList = kotlin_kotlin.$_$.e7;
  var getStringHashCode = kotlin_kotlin.$_$.ic;
  var hashCode = kotlin_kotlin.$_$.jc;
  var equals = kotlin_kotlin.$_$.dc;
  var rememberPageContext = kotlin_com_varabyte_kobweb_kobweb_core.$_$.f;
  var Image_0 = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.a;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(ComposableSingletons$MainKt, 'ComposableSingletons$MainKt');
  initMetadataForLambda(AppEntry$lambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(SitePalette, 'SitePalette');
  initMetadataForObject(SitePalettes, 'SitePalettes');
  initMetadataForClass(PageLayoutData, 'PageLayoutData');
  initMetadataForLambda(PageLayout$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForObject(ComposableSingletons$BodyOfWorkSectionKt, 'ComposableSingletons$BodyOfWorkSectionKt');
  initMetadataForObject(ComposableSingletons$FooterKt, 'ComposableSingletons$FooterKt');
  initMetadataForObject(ComposableSingletons$HeroSectionKt, 'ComposableSingletons$HeroSectionKt');
  initMetadataForClass(HeroSection$$inlined$run$2$2$2$2$1, VOID, VOID, VOID, [DisposableEffectResult]);
  initMetadataForObject(ComposableSingletons$NavHeaderKt, 'ComposableSingletons$NavHeaderKt');
  initMetadataForClass(Project, 'Project');
  initMetadataForObject(ComposableSingletons$IndexKt, 'ComposableSingletons$IndexKt');
  initMetadataForObject(ComposableSingletons$IndexKt_0, 'ComposableSingletons$IndexKt');
  //endregion
  function get_LayoutScopeLocal() {
    _init_properties_main_kt__ykjpl3();
    return LayoutScopeLocal;
  }
  var LayoutScopeLocal;
  function currentLayoutScope($composer, $changed) {
    _init_properties_main_kt__ykjpl3();
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LayoutScopeLocal();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC(<get-current>):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.consume_ebzcrh_k$(this_0);
    sourceInformationMarkerEnd($composer_1);
    var tmp = tmp0;
    var tmp0_elvis_lhs = !(tmp == null) ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      var message = 'Unexpected between Page/Layout scope and the parent Layout which it is providing it. Please report this issue to the Kobweb developers.';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    return tmp_0;
  }
  function provideLayoutScope(layoutScope, content, $composer, $changed) {
    _init_properties_main_kt__ykjpl3();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-268603817);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.changed_ga7h3f_k$(layoutScope) : $composer_0.changedInstance_s1wkiy_k$(layoutScope)) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 32 : 16);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 19) === 18), $dirty & 1)) {
      CompositionLocalProvider(get_LayoutScopeLocal().provides_3agxel_k$(layoutScope), content, $composer_0, androidx_compose_runtime_ProvidedValue$stableprop_getter() | 112 & $dirty);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(provideLayoutScope$lambda(layoutScope, content, $changed));
    }
  }
  function forceReloadNow() {
    _init_properties_main_kt__ykjpl3();
    window.stop();
    window.location.reload();
  }
  function handleServerStatusEvents() {
    _init_properties_main_kt__ykjpl3();
    var status = ensureNotNull(document.getElementById('status'));
    var lastVersion = {_v: null};
    var shouldReload = {_v: false};
    // Inline function 'org.w3c.dom.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = status.children[0];
    var warningIcon = ensureNotNull(tmp$ret$1);
    // Inline function 'org.w3c.dom.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = status.children[1];
    var spinnerIcon = ensureNotNull(tmp$ret$3);
    // Inline function 'org.w3c.dom.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$5 = status.children[2];
    var statusText = ensureNotNull(tmp$ret$5);
    status.addEventListener('transitionend', handleServerStatusEvents$lambda(status, shouldReload));
    // Inline function 'org.w3c.dom.EventSourceInit' call
    var o = {};
    o['withCredentials'] = true;
    var eventSource = new EventSource('/api/kobweb-status', o);
    eventSource.addEventListener('version', handleServerStatusEvents$lambda_0(lastVersion, status, shouldReload));
    eventSource.addEventListener('status', handleServerStatusEvents$lambda_1(warningIcon, spinnerIcon, statusText, status));
    eventSource.onerror = handleServerStatusEvents$lambda_2(eventSource);
  }
  function main() {
    _init_properties_main_kt__ykjpl3();
    handleServerStatusEvents();
    get_api(window).set_logOnError_wi584t_k$(true);
    AppGlobals_getInstance().initialize_8ufbf0_k$(mapOf(to('title', '${projectTitle}')));
    Companion_getInstance().set_wjk6wo_k$('');
    var router = new Router();
    initKobweb(router, main$lambda);
    router.addRouteInterceptor_kgq7h7_k$(main$lambda_0);
    set_additionalSilkInitialization(main$lambda_1);
    router.tryRoutingTo$default_6oxk8k_k$(remove(Companion_getInstance(), '/' + trimStart(removePrefix(window.location.href, window.origin), charArrayOf([_Char___init__impl__6a9atx(47)]))), UpdateHistoryMode_REPLACE_getInstance());
    var root = ensureNotNull(document.getElementById('_kobweb-root'));
    while (!(root.firstChild == null)) {
      root.removeChild(ensureNotNull(root.firstChild));
    }
    renderComposable('_kobweb-root', ComposableLambda$invoke$ref_8(composableLambdaInstance(1108811911, true, main$lambda_2(router))));
  }
  function ComposableLambda$invoke$ref(p0) {
    return function (_this__u8e3s4, p0_0, p1, p2) {
      p0.invoke_gk4tfu_k$(_this__u8e3s4, p0_0, p1, p2);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$MainKt$lambda$1498945258$lambda(pageCtx, pageMethod, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.changed_ga7h3f_k$(pageCtx) : $composer_0.changedInstance_s1wkiy_k$(pageCtx)) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(pageMethod) ? 32 : 16);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 147) === 146), $dirty & 1)) {
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-1761814108, true, ComposableSingletons$MainKt$lambda$1498945258$lambda$lambda(pageMethod, pageCtx), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_0(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      MarkdownLayout(tmp0, $composer_0, 6);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$MainKt$lambda$1498945258$lambda$lambda($pageMethod, $pageCtx) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
        tmp = $pageMethod($pageCtx, $composer_0, com_varabyte_kobweb_core_PageContext$stableprop_getter());
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_0(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_1(p0) {
    return function (_this__u8e3s4, p0_0, p1, p2) {
      p0.invoke_gk4tfu_k$(_this__u8e3s4, p0_0, p1, p2);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$MainKt$lambda$_1396482527$lambda_75hsrn(pageCtx, pageMethod, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.changed_ga7h3f_k$(pageCtx) : $composer_0.changedInstance_s1wkiy_k$(pageCtx)) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(pageMethod) ? 32 : 16);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 147) === 146), $dirty & 1)) {
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(605933002, true, ComposableSingletons$MainKt$lambda$_1396482527$lambda$lambda_v3zxsi(pageMethod, pageCtx), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_3(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      PageLayout(pageCtx, tmp0, $composer_0, 48 | com_varabyte_kobweb_core_PageContext$stableprop_getter() | 14 & $dirty);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$MainKt$lambda$_1396482527$lambda$lambda$lambda_6ermrn($pageMethod, $pageCtx) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
        tmp = $pageMethod($pageCtx, $composer_0, com_varabyte_kobweb_core_PageContext$stableprop_getter());
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_2(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$MainKt$lambda$_1396482527$lambda$lambda_v3zxsi($pageMethod, $pageCtx) {
    return function ($this$_org_alia_portfolio_components_layouts_PageLayout, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 6) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this$_org_alia_portfolio_components_layouts_PageLayout) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 19) === 18), $dirty & 1)) {
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-1470159405, true, ComposableSingletons$MainKt$lambda$_1396482527$lambda$lambda$lambda_6ermrn($pageMethod, $pageCtx), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = ComposableLambda$invoke$ref_2(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        provideLayoutScope($this$_org_alia_portfolio_components_layouts_PageLayout, tmp0, $composer_0, 48 | 14 & $dirty);
        tmp_0 = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_3(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_4(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$MainKt$lambda$_521244896$lambda_jdp3wp(pageCtx, $composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
      HomePage($composer_0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_5(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$MainKt$lambda$_1474002729$lambda_4qld8c(pageCtx, $composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
      ProjectPage($composer_0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_6(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$MainKt$lambda$854823496$lambda(it, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(it) ? 4 : 2);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 19) === 18), $dirty & 1)) {
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-440954647, true, ComposableSingletons$MainKt$lambda$854823496$lambda$lambda(it), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_7(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it_0;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      DeferringHost(tmp0, $composer_0, 6);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$MainKt$lambda$854823496$lambda$lambda($it) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
        tmp = $it($composer_0, 0);
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_7(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$MainKt() {
    ComposableSingletons$MainKt_instance = this;
    var tmp = this;
    tmp.lambda$1498945258__1 = ComposableLambda$invoke$ref(composableLambdaInstance(1498945258, false, ComposableSingletons$MainKt$lambda$1498945258$lambda));
    var tmp_0 = this;
    tmp_0.lambda$_1396482527_ixh6ed_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(-1396482527, false, ComposableSingletons$MainKt$lambda$_1396482527$lambda_75hsrn));
    var tmp_1 = this;
    tmp_1.lambda$_521244896_pfstq1__1 = ComposableLambda$invoke$ref_4(composableLambdaInstance(-521244896, false, ComposableSingletons$MainKt$lambda$_521244896$lambda_jdp3wp));
    var tmp_2 = this;
    tmp_2.lambda$_1474002729_480lcs_1 = ComposableLambda$invoke$ref_5(composableLambdaInstance(-1474002729, false, ComposableSingletons$MainKt$lambda$_1474002729$lambda_4qld8c));
    var tmp_3 = this;
    tmp_3.lambda$854823496__1 = ComposableLambda$invoke$ref_6(composableLambdaInstance(854823496, false, ComposableSingletons$MainKt$lambda$854823496$lambda));
  }
  protoOf(ComposableSingletons$MainKt).get_lambda$1498945258_yoen6z_k$ = function () {
    return this.lambda$1498945258__1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda$_1396482527_ybuma0_k$ = function () {
    return this.lambda$_1396482527_ixh6ed_1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda$_521244896_1t4ds2_k$ = function () {
    return this.lambda$_521244896_pfstq1__1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda$_1474002729_ww7rxz_k$ = function () {
    return this.lambda$_1474002729_480lcs_1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda$854823496_3na75_k$ = function () {
    return this.lambda$854823496__1;
  };
  var ComposableSingletons$MainKt_instance;
  function ComposableSingletons$MainKt_getInstance() {
    if (ComposableSingletons$MainKt_instance == null)
      new ComposableSingletons$MainKt();
    return ComposableSingletons$MainKt_instance;
  }
  function LayoutScopeLocal$lambda() {
    _init_properties_main_kt__ykjpl3();
    return null;
  }
  function provideLayoutScope$lambda($layoutScope, $content, $$changed) {
    return function ($composer, $force) {
      provideLayoutScope($layoutScope, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function handleServerStatusEvents$lambda($status, $shouldReload) {
    return function (it) {
      var tmp;
      if (hasClass($status, 'fade-out')) {
        removeClass($status, ['fade-out']);
        var tmp_0;
        if ($shouldReload._v) {
          forceReloadNow();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      }
      return Unit_getInstance();
    };
  }
  function handleServerStatusEvents$lambda_0($lastVersion, $status, $shouldReload) {
    return function (evt) {
      var version = toInt(toString_0((evt instanceof MessageEvent ? evt : THROW_CCE()).data));
      var tmp;
      if ($lastVersion._v == null) {
        $lastVersion._v = version;
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!($lastVersion._v === version)) {
        $lastVersion._v = version;
        var tmp_1;
        // Inline function 'kotlin.js.asDynamic' call
        if (document.hidden) {
          forceReloadNow();
          tmp_1 = Unit_getInstance();
        } else {
          // Inline function 'kotlin.text.isNotEmpty' call
          var this_0 = $status.className;
          if (charSequenceLength(this_0) > 0) {
            $shouldReload._v = true;
            tmp_1 = Unit_getInstance();
          } else {
            forceReloadNow();
            tmp_1 = Unit_getInstance();
          }
        }
        tmp_0 = tmp_1;
      }
      return Unit_getInstance();
    };
  }
  function handleServerStatusEvents$lambda_1($warningIcon, $spinnerIcon, $statusText, $status) {
    return function (evt) {
      var tmp = JSON;
      var values = tmp.parse(toString_0((evt instanceof MessageEvent ? evt : THROW_CCE()).data));
      var tmp_0 = values.text;
      var text = (!(tmp_0 == null) ? typeof tmp_0 === 'string' : false) ? tmp_0 : THROW_CCE();
      var tmp_1 = values.isError;
      var isError = toBoolean((!(tmp_1 == null) ? typeof tmp_1 === 'string' : false) ? tmp_1 : THROW_CCE());
      var tmp_2;
      // Inline function 'kotlin.text.isNotBlank' call
      if (!isBlank(text)) {
        $warningIcon.className = isError ? 'visible' : 'hidden';
        $spinnerIcon.className = isError ? 'hidden' : 'visible';
        $statusText.innerHTML = '<i>' + text + '<\/i>';
        $status.className = 'fade-in';
        tmp_2 = Unit_getInstance();
      } else {
        var tmp_3;
        if ($status.className === 'fade-in') {
          $status.className = 'fade-out';
          tmp_3 = Unit_getInstance();
        }
        tmp_2 = tmp_3;
      }
      return Unit_getInstance();
    };
  }
  function handleServerStatusEvents$lambda_2($eventSource) {
    return function (it) {
      $eventSource.close();
      return Unit_getInstance();
    };
  }
  function main$lambda(ctx) {
    _init_properties_main_kt__ykjpl3();
    var tmp = ctx.get_router_j3zccy_k$();
    tmp.registerLayout_p67cby_k$('org.alia.portfolio.components.layouts.MarkdownLayout', 'org.alia.portfolio.components.layouts.PageLayout', main$lambda$lambda, ComposableSingletons$MainKt_getInstance().lambda$1498945258__1);
    ctx.get_router_j3zccy_k$().registerLayout$default_45q2ls_k$('org.alia.portfolio.components.layouts.PageLayout', VOID, VOID, ComposableSingletons$MainKt_getInstance().lambda$_1396482527_ixh6ed_1);
    var tmp_0 = ctx.get_router_j3zccy_k$();
    tmp_0.register_7fiee8_k$('/', 'org.alia.portfolio.components.layouts.PageLayout', main$lambda$lambda_0, ComposableSingletons$MainKt_getInstance().lambda$_521244896_pfstq1__1);
    var tmp_1 = ctx.get_router_j3zccy_k$();
    tmp_1.register_7fiee8_k$('/project/', 'org.alia.portfolio.components.layouts.PageLayout', main$lambda$lambda_1, ComposableSingletons$MainKt_getInstance().lambda$_1474002729_480lcs_1);
    return Unit_getInstance();
  }
  function main$lambda$lambda(ctx) {
    _init_properties_main_kt__ykjpl3();
    initMarkdownLayout(ctx);
    return Unit_getInstance();
  }
  function main$lambda$lambda_0(ctx) {
    _init_properties_main_kt__ykjpl3();
    initHomePage(ctx);
    return Unit_getInstance();
  }
  function main$lambda$lambda_1(ctx) {
    _init_properties_main_kt__ykjpl3();
    initProjectPage(ctx);
    return Unit_getInstance();
  }
  function main$lambda_0($this$addRouteInterceptor) {
    _init_properties_main_kt__ykjpl3();
    $this$addRouteInterceptor.set_path_tgrnnc_k$(removeSuffix(removeSuffix($this$addRouteInterceptor.get_path_wos8ry_k$(), '.html'), '.htm'));
    return Unit_getInstance();
  }
  function main$lambda_1(ctx) {
    _init_properties_main_kt__ykjpl3();
    initSilkWidgets(ctx);
    initSilkWidgetsKobweb(ctx);
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('headline-text', get_HeadlineTextStyle());
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('subheadline-text', get_SubheadlineTextStyle());
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('footer', get_FooterStyle());
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('hero-background', get_HeroBackgroundStyle());
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('nav-header', get_NavHeaderStyle());
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('project-card', get_ProjectCardStyle());
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('body-of-work-grid', get_BodyOfWorkGridStyle());
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('markdown', get_MarkdownStyle());
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('page-content', get_PageContentStyle());
    ctx.get_theme_iz24rk_k$().registerVariant$default_k7o5vi_k$('-circle', get_CircleButtonVariant());
    ctx.get_theme_iz24rk_k$().registerVariant$default_k7o5vi_k$('-uncolored', get_UncoloredButtonVariant());
    initSiteStyles(ctx);
    initColorMode(ctx);
    initStyles(ctx);
    initTheme(ctx);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_8(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function main$lambda$lambda_2($router) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
        $router.renderActivePage_fc13h0_k$(ComposableSingletons$MainKt_getInstance().lambda$854823496__1, $composer_0, 6 | com_varabyte_kobweb_navigation_Router$stableprop_getter() << 3, 0);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_9(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
      return Unit_getInstance();
    };
  }
  function main$lambda_2($router) {
    return function ($this$renderComposable, $composer, $changed) {
      var $composer_0 = $composer;
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-1190994075, true, main$lambda$lambda_2($router), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_9(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      AppEntry(tmp0, $composer_0, 6);
      return Unit_getInstance();
    };
  }
  var properties_initialized_main_kt_ask6ij;
  function _init_properties_main_kt__ykjpl3() {
    if (!properties_initialized_main_kt_ask6ij) {
      properties_initialized_main_kt_ask6ij = true;
      LayoutScopeLocal = compositionLocalOf(VOID, LayoutScopeLocal$lambda);
    }
  }
  function mainWrapper() {
    main();
  }
  function get_COLOR_MODE_KEY() {
    return COLOR_MODE_KEY;
  }
  var COLOR_MODE_KEY;
  function initColorMode(ctx) {
    var tmp = ctx.get_config_c0698r_k$();
    var tmp0_elvis_lhs = loadFromLocalStorage(Companion_getInstance_1(), 'alia_portfolio:colorMode');
    tmp.set_initialColorMode_lmyh2d_k$(tmp0_elvis_lhs == null ? ColorMode_DARK_getInstance() : tmp0_elvis_lhs);
  }
  function initStyles(ctx) {
    // Inline function 'kotlin.apply' call
    var this_0 = ctx.get_stylesheet_hk204p_k$();
    registerStyleBase(this_0, 'body', initStyles$lambda);
  }
  function AppEntry(content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1557705896);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 4 : 2);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 3) === 2), $dirty & 1)) {
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(1327786489, true, AppEntry$lambda(content), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_11(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      SilkApp(tmp0, $composer_0, 6);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(AppEntry$lambda_0(content, $changed));
    }
  }
  function initStyles$lambda() {
    return scrollBehavior(Companion_getInstance_2(), Companion_getInstance_3().get_Smooth_4edjo7_k$());
  }
  function AppEntry$lambda$slambda($colorMode, resultContinuation) {
    this.$colorMode_1 = $colorMode;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AppEntry$lambda$slambda).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(AppEntry$lambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AppEntry$lambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          saveToLocalStorage(this.$colorMode_1, 'alia_portfolio:colorMode');
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(AppEntry$lambda$slambda).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new AppEntry$lambda$slambda(this.$colorMode_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(AppEntry$lambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function AppEntry$lambda$slambda_0($colorMode, resultContinuation) {
    var i = new AppEntry$lambda$slambda($colorMode, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AppEntry$lambda$lambda($content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
        tmp = $content($composer_0, 0);
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_10(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
      return Unit_getInstance();
    };
  }
  function AppEntry$lambda($content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
        var colorMode = Companion_getInstance_1().get_current_2iudd5_k$($composer_0, 6);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_0.changed_kpusro_k$(colorMode.get_ordinal_ip24qg_k$());
        // Inline function 'kotlin.let' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = AppEntry$lambda$slambda_0(colorMode, null);
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp$ret$3 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        LaunchedEffect(colorMode, tmp$ret$3, $composer_0, 0);
        var tmp_2 = minHeight(toModifier(get_SmoothColorStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter()), get_vh(100));
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(1675904059, true, AppEntry$lambda$lambda($content), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it_0 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value_0 = ComposableLambda$invoke$ref_10(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Surface(tmp_2, null, null, null, tmp0, $composer_0, 24576, 14);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_11(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
      return Unit_getInstance();
    };
  }
  function AppEntry$lambda_0($content, $$changed) {
    return function ($composer, $force) {
      AppEntry($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function get_HeadlineTextStyle() {
    _init_properties_AppStyles_kt__9fg0zz();
    return HeadlineTextStyle;
  }
  var HeadlineTextStyle;
  function get_SubheadlineTextStyle() {
    _init_properties_AppStyles_kt__9fg0zz();
    return SubheadlineTextStyle;
  }
  var SubheadlineTextStyle;
  function get_CircleButtonVariant() {
    _init_properties_AppStyles_kt__9fg0zz();
    return CircleButtonVariant;
  }
  var CircleButtonVariant;
  function get_UncoloredButtonVariant() {
    _init_properties_AppStyles_kt__9fg0zz();
    return UncoloredButtonVariant;
  }
  var UncoloredButtonVariant;
  function initSiteStyles(ctx) {
    _init_properties_AppStyles_kt__9fg0zz();
    var tmp = ctx.get_stylesheet_hk204p_k$();
    tmp.registerStyle_79mtge_k$('html', initSiteStyles$lambda);
    var tmp_0 = ctx.get_stylesheet_hk204p_k$();
    registerStyleBase(tmp_0, 'body', initSiteStyles$lambda_0);
    var tmp_1 = ctx.get_theme_iz24rk_k$();
    var tmp_2 = get_HorizontalDividerStyle();
    modifyStyleBase(tmp_1, tmp_2, VOID, initSiteStyles$lambda_1);
  }
  function HeadlineTextStyle$lambda($this$base) {
    _init_properties_AppStyles_kt__9fg0zz();
    return lineHeight(textAlign(letterSpacing(fontWeight(fontSize(Companion_getInstance_2(), get_cssRem(2.5)), 700), get_cssRem(-0.02)), Companion_getInstance_4().get_Start_ih4i6x_k$()), 1.1);
  }
  function SubheadlineTextStyle$lambda($this$base) {
    _init_properties_AppStyles_kt__9fg0zz();
    return color(textAlign(fontWeight(fontSize(Companion_getInstance_2(), get_cssRem(1.1)), 300), Companion_getInstance_4().get_Start_ih4i6x_k$()), Colors_getInstance().get_Gray_wo2eh8_k$());
  }
  function CircleButtonVariant$lambda($this$addVariantBase) {
    _init_properties_AppStyles_kt__9fg0zz();
    return borderRadius(padding(Companion_getInstance_2(), get_px(0)), get_percent(50));
  }
  function UncoloredButtonVariant$lambda($this$addVariantBase) {
    _init_properties_AppStyles_kt__9fg0zz();
    return setVariable(Companion_getInstance_2(), ButtonVars_getInstance().get_BackgroundDefaultColor_so3bvr_k$(), Colors_getInstance().get_Transparent_cxh4g9_k$());
  }
  function initSiteStyles$lambda($this$registerStyle) {
    _init_properties_AppStyles_kt__9fg0zz();
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = 'no-preference';
    var tmp = new MediaFeature('prefers-reduced-motion', tmp$ret$2);
    $this$registerStyle.cssRule_7fzdgd_k$(tmp, initSiteStyles$lambda$lambda);
    return Unit_getInstance();
  }
  function initSiteStyles$lambda$lambda() {
    _init_properties_AppStyles_kt__9fg0zz();
    return scrollBehavior(Companion_getInstance_2(), Companion_getInstance_3().get_Smooth_4edjo7_k$());
  }
  function initSiteStyles$lambda_0() {
    _init_properties_AppStyles_kt__9fg0zz();
    return fontWeight(letterSpacing(lineHeight(fontSize(fontFamily(Companion_getInstance_2(), ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif']), get_px(16)), 1.6), get_cssRem(0.02)), 400);
  }
  function initSiteStyles$lambda_1($this$modifyStyleBase) {
    _init_properties_AppStyles_kt__9fg0zz();
    return color(fillMaxWidth(Companion_getInstance_2()), Colors_getInstance().get_DarkGray_1y3y8u_k$());
  }
  var properties_initialized_AppStyles_kt_kq2bkd;
  function _init_properties_AppStyles_kt__9fg0zz() {
    if (!properties_initialized_AppStyles_kt_kq2bkd) {
      properties_initialized_AppStyles_kt_kq2bkd = true;
      var tmp = Companion_getInstance_5();
      HeadlineTextStyle = base(tmp, VOID, HeadlineTextStyle$lambda);
      var tmp_0 = Companion_getInstance_5();
      SubheadlineTextStyle = base(tmp_0, VOID, SubheadlineTextStyle$lambda);
      var tmp_1 = get_ButtonStyle();
      CircleButtonVariant = addVariantBase(tmp_1, VOID, CircleButtonVariant$lambda);
      var tmp_2 = get_ButtonStyle();
      UncoloredButtonVariant = addVariantBase(tmp_2, VOID, UncoloredButtonVariant$lambda);
    }
  }
  var org_alia_portfolio_SitePalette$stable;
  var org_alia_portfolio_SitePalettes$stable;
  function SitePalette(nearBackground, primaryText, secondaryText, border) {
    this.nearBackground_1 = nearBackground;
    this.primaryText_1 = primaryText;
    this.secondaryText_1 = secondaryText;
    this.border_1 = border;
  }
  protoOf(SitePalette).get_nearBackground_c1s3l_k$ = function () {
    return this.nearBackground_1;
  };
  protoOf(SitePalette).get_primaryText_gbqxm_k$ = function () {
    return this.primaryText_1;
  };
  protoOf(SitePalette).get_secondaryText_flcpd4_k$ = function () {
    return this.secondaryText_1;
  };
  protoOf(SitePalette).get_border_bj7585_k$ = function () {
    return this.border_1;
  };
  function SitePalettes() {
    SitePalettes_instance = this;
    this.light_1 = new SitePalette(Companion_getInstance_6().rgb_6orfmz_k$(16119285), Colors_getInstance().get_Black_i7mvue_k$(), Companion_getInstance_6().rgb_6orfmz_k$(6710886), Companion_getInstance_6().rgb_6orfmz_k$(14737632));
    this.dark_1 = new SitePalette(Companion_getInstance_6().rgb_6orfmz_k$(1118481), Colors_getInstance().get_White_ij46ow_k$(), Companion_getInstance_6().rgb_6orfmz_k$(10066329), Companion_getInstance_6().rgb_6orfmz_k$(3355443));
  }
  protoOf(SitePalettes).get_light_iuogdp_k$ = function () {
    return this.light_1;
  };
  protoOf(SitePalettes).get_dark_wokkvz_k$ = function () {
    return this.dark_1;
  };
  var SitePalettes_instance;
  function SitePalettes_getInstance() {
    if (SitePalettes_instance == null)
      new SitePalettes();
    return SitePalettes_instance;
  }
  function toSitePalette(_this__u8e3s4) {
    var tmp;
    switch (_this__u8e3s4.get_ordinal_ip24qg_k$()) {
      case 0:
        tmp = SitePalettes_getInstance().light_1;
        break;
      case 1:
        tmp = SitePalettes_getInstance().dark_1;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function initTheme(ctx) {
    set_background(ctx.get_theme_iz24rk_k$().get_palettes_f7ft27_k$().get_light_iuogdp_k$(), Colors_getInstance().get_White_ij46ow_k$());
    set_color(ctx.get_theme_iz24rk_k$().get_palettes_f7ft27_k$().get_light_iuogdp_k$(), Colors_getInstance().get_Black_i7mvue_k$());
    set_background(ctx.get_theme_iz24rk_k$().get_palettes_f7ft27_k$().get_dark_wokkvz_k$(), Colors_getInstance().get_Black_i7mvue_k$());
    set_color(ctx.get_theme_iz24rk_k$().get_palettes_f7ft27_k$().get_dark_wokkvz_k$(), Colors_getInstance().get_White_ij46ow_k$());
  }
  function org_alia_portfolio_SitePalette$stableprop_getter() {
    return org_alia_portfolio_SitePalette$stable;
  }
  function org_alia_portfolio_SitePalettes$stableprop_getter() {
    return org_alia_portfolio_SitePalettes$stable;
  }
  function get_MarkdownStyle() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return MarkdownStyle;
  }
  var MarkdownStyle;
  function initMarkdownLayout(ctx) {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    var tmp0_safe_receiver = ensureNotNull(get_markdown(ctx)).get_frontMatter_iz7ndr_k$().get_6bo4tg_k$('title');
    var title = tmp0_safe_receiver == null ? null : singleOrNull(tmp0_safe_receiver);
    // Inline function 'kotlin.require' call
    if (!!(title == null)) {
      var message = 'Markdown file must set "title" in frontmatter';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp0 = ctx.get_data_wokkxf_k$();
    // Inline function 'com.varabyte.kobweb.core.data.add' call
    var value = new PageLayoutData(title);
    tmp0.set_wb2scb_k$(getKClass(PageLayoutData), value);
  }
  function MarkdownLayout(content, $composer, $changed) {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1434741169);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 4 : 2);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 3) === 2), $dirty & 1)) {
      var tmp = get_MarkdownStyle();
      var tmp_0 = toAttrs(tmp, null, $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter(), 1);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-700990574, true, MarkdownLayout$lambda(content), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_12(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp_0, tmp0, $composer_0, 48, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(MarkdownLayout$lambda_0(content, $changed));
    }
  }
  function MarkdownStyle$lambda($this$CssStyle) {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    $this$CssStyle.base_y8uu8g_k$(MarkdownStyle$lambda$lambda);
    $this$CssStyle.cssRule_fe6cwq_k$('h1', MarkdownStyle$lambda$lambda_0);
    $this$CssStyle.cssRule_fe6cwq_k$('h2', MarkdownStyle$lambda$lambda_1);
    $this$CssStyle.cssRule_fe6cwq_k$('h3', MarkdownStyle$lambda$lambda_2);
    $this$CssStyle.cssRule_fe6cwq_k$('h4', MarkdownStyle$lambda$lambda_3);
    $this$CssStyle.cssRule_fe6cwq_k$('ul', MarkdownStyle$lambda$lambda_4);
    $this$CssStyle.cssRule_fe6cwq_k$(' :is(li,ol,ul)', MarkdownStyle$lambda$lambda_5);
    $this$CssStyle.cssRule_fe6cwq_k$('code', MarkdownStyle$lambda$lambda_6($this$CssStyle));
    $this$CssStyle.cssRule_fe6cwq_k$('pre', MarkdownStyle$lambda$lambda_7);
    $this$CssStyle.cssRule_fe6cwq_k$('pre > code', MarkdownStyle$lambda$lambda_8($this$CssStyle));
    return Unit_getInstance();
  }
  function MarkdownStyle$lambda$lambda() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return fillMaxSize(Companion_getInstance_2());
  }
  function MarkdownStyle$lambda$lambda_0() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return lineHeight(margin(fontWeight(fontSize(Companion_getInstance_2(), get_cssRem(3)), 400), VOID, VOID, get_cssRem(2.5)), 1.2);
  }
  function MarkdownStyle$lambda$lambda_1() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return margin_0(fontWeight(fontSize(Companion_getInstance_2(), get_cssRem(3)), 300), get_cssRem(2));
  }
  function MarkdownStyle$lambda$lambda_2() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return margin_0(fontWeight(fontSize(Companion_getInstance_2(), get_cssRem(2.4)), 300), get_cssRem(1.5));
  }
  function MarkdownStyle$lambda$lambda_3() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return margin(fontWeight_0(fontSize(Companion_getInstance_2(), get_cssRem(1.2)), Companion_getInstance_7().get_Bolder_3mclb9_k$()), get_cssRem(1), VOID, get_cssRem(0.5));
  }
  function MarkdownStyle$lambda$lambda_4() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return overflowWrap(fillMaxWidth(Companion_getInstance_2()), Companion_getInstance_8().get_BreakWord_a9p49s_k$());
  }
  function MarkdownStyle$lambda$lambda_5() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return margin(Companion_getInstance_2(), VOID, VOID, get_cssRem(0.25));
  }
  function MarkdownStyle$lambda$lambda_6($this_CssStyle) {
    return function () {
      return fontWeight_0(color(Companion_getInstance_2(), get_color(toPalette($this_CssStyle.get_colorMode_trbg8z_k$())).toRgb_1tsrpu_k$().copyf$default_6pu18v_k$(VOID, VOID, VOID, 0.8)), Companion_getInstance_7().get_Bolder_3mclb9_k$());
    };
  }
  function MarkdownStyle$lambda$lambda_7() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return fillMaxWidth(margin(Companion_getInstance_2(), get_cssRem(0.5), VOID, get_cssRem(2)));
  }
  function MarkdownStyle$lambda$lambda$lambda($this$overflow) {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    $this$overflow.x_7tere2_k$(Companion_getInstance_9().get_Auto_wnyn88_k$());
    return Unit_getInstance();
  }
  function MarkdownStyle$lambda$lambda_8($this_CssStyle) {
    return function () {
      var tmp = Companion_getInstance_2();
      // Inline function 'org.jetbrains.compose.web.css.Companion.Block' call
      Companion_getInstance_10();
      // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = backgroundColor(fillMaxWidth(display(tmp, 'block')), toSitePalette($this_CssStyle.get_colorMode_trbg8z_k$()).get_nearBackground_c1s3l_k$());
      var tmp_1 = get_px(1);
      // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
      Companion_getInstance_11();
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_2 = fontSize(padding(borderRadius(border(tmp_0, tmp_1, 'solid', get_color(toPalette($this_CssStyle.get_colorMode_trbg8z_k$()))), get_cssRem(0.25)), get_cssRem(0.5)), get_cssRem(1));
      return overflow(tmp_2, MarkdownStyle$lambda$lambda$lambda);
    };
  }
  function MarkdownLayout$lambda($content) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      $content($composer_0, 0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_12(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function MarkdownLayout$lambda_0($content, $$changed) {
    return function ($composer, $force) {
      MarkdownLayout($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  var properties_initialized_MarkdownLayout_kt_c0ljiz;
  function _init_properties_MarkdownLayout_kt__1k3pk7() {
    if (!properties_initialized_MarkdownLayout_kt_c0ljiz) {
      properties_initialized_MarkdownLayout_kt_c0ljiz = true;
      MarkdownStyle = CssStyle(VOID, MarkdownStyle$lambda);
    }
  }
  function get_PageContentStyle() {
    _init_properties_PageLayout_kt__pf69s7();
    return PageContentStyle;
  }
  var PageContentStyle;
  var org_alia_portfolio_components_layouts_PageLayoutData$stable;
  function PageLayoutData(title) {
    this.title_1 = title;
  }
  protoOf(PageLayoutData).get_title_iz32un_k$ = function () {
    return this.title_1;
  };
  function PageLayout(ctx, content, $composer, $changed) {
    _init_properties_PageLayout_kt__pf69s7();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1524997434);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.changed_ga7h3f_k$(ctx) : $composer_0.changedInstance_s1wkiy_k$(ctx)) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 32 : 16);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 19) === 18), $dirty & 1)) {
      // Inline function 'com.varabyte.kobweb.core.data.getValue' call
      var this_0 = ctx.get_data_wokkxf_k$();
      var data = getValue(this_0, getKClass(PageLayoutData));
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.changed_ga7h3f_k$(data);
      // Inline function 'kotlin.let' call
      var it = tmp0.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = PageLayout$slambda_0(data, null);
        tmp0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp$ret$4 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      LaunchedEffect(data.title_1, tmp$ret$4, $composer_0, 0);
      var palette = toSitePalette(Companion_getInstance_1().get_current_2iudd5_k$($composer_0, 6));
      var tmp_1 = backgroundColor(minHeight(fillMaxWidth(Companion_getInstance_2()), get_vh(100)), palette.get_nearBackground_c1s3l_k$());
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_0 = this_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (false || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_0 = PageLayout$lambda;
        this_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp$ret$8 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      var tmp_4 = gridTemplateRows(tmp_1, tmp$ret$8);
      var tmp_5 = Center_getInstance();
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-1278697728, true, PageLayout$lambda_0(content), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_1 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_6;
      if (invalid_0 || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_1 = ComposableLambda$invoke$ref_15(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_1);
        tmp_6 = value_1;
      } else {
        tmp_6 = it_1;
      }
      var tmp_7 = tmp_6;
      var tmp0_0 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Box(tmp_4, tmp_5, null, tmp0_0, $composer_0, 3072 | com_varabyte_kobweb_compose_ui_Alignment_Center$stableprop_getter() << 3, 4);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(PageLayout$lambda_1(ctx, content, $changed));
    }
  }
  function org_alia_portfolio_components_layouts_PageLayoutData$stableprop_getter() {
    return org_alia_portfolio_components_layouts_PageLayoutData$stable;
  }
  function PageContentStyle$lambda($this$CssStyle) {
    _init_properties_PageLayout_kt__pf69s7();
    $this$CssStyle.base_y8uu8g_k$(PageContentStyle$lambda$lambda);
    var tmp = Breakpoint_MD_getInstance();
    $this$CssStyle.invoke_xzuw0j_k$(tmp, PageContentStyle$lambda$lambda_0);
    return Unit_getInstance();
  }
  function PageContentStyle$lambda$lambda() {
    _init_properties_PageLayout_kt__pf69s7();
    var tmp0_$receiver = fillMaxSize(Companion_getInstance_2());
    var tmp1_leftRight = get_cssRem(2);
    var tmp2_top = get_cssRem(2);
    return padding_0(tmp0_$receiver, tmp2_top, tmp1_leftRight);
  }
  function PageContentStyle$lambda$lambda_0() {
    _init_properties_PageLayout_kt__pf69s7();
    return maxWidth(Companion_getInstance_2(), get_cssRem(70));
  }
  function PageLayout$slambda($data, resultContinuation) {
    this.$data_1 = $data;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(PageLayout$slambda).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(PageLayout$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(PageLayout$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          document.title = this.$data_1.title_1;
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(PageLayout$slambda).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new PageLayout$slambda(this.$data_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(PageLayout$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function PageLayout$slambda_0($data, resultContinuation) {
    var i = new PageLayout$slambda($data, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function PageLayout$lambda($this$gridTemplateRows) {
    _init_properties_PageLayout_kt__pf69s7();
    $this$gridTemplateRows.size_q03g6h_k$(get_fr(1));
    $this$gridTemplateRows.size_azcpvi_k$($this$gridTemplateRows.get_minContent_f65gog_k$());
    return Unit_getInstance();
  }
  function PageLayout$lambda$lambda$lambda($content, $this_Column) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      $content($this_Column, $composer_0, 0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_13(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function PageLayout$lambda$lambda($content) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 6) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this$Column) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 19) === 18), $dirty & 1)) {
        NavHeader($composer_0, 0);
        var tmp_1 = get_PageContentStyle();
        var tmp_2 = toAttrs(tmp_1, null, $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter(), 1);
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-1274867254, true, PageLayout$lambda$lambda$lambda($content, $this$Column), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = ComposableLambda$invoke$ref_13(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_3 = value;
        } else {
          tmp_3 = it;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Div(tmp_2, tmp0, $composer_0, 48, 0);
        tmp_0 = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_14(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function PageLayout$lambda_0($content) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
        var tmp_0 = gridRow(fillMaxSize(Companion_getInstance_2()), 1);
        var tmp_1 = CenterHorizontally_getInstance();
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-1017857879, true, PageLayout$lambda$lambda($content), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_2;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = ComposableLambda$invoke$ref_14(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Column(tmp_0, null, tmp_1, null, tmp0, $composer_0, 24576 | com_varabyte_kobweb_compose_ui_Alignment_CenterHorizontally$stableprop_getter() << 6, 10);
        Footer(gridRow(fillMaxWidth(Companion_getInstance_2()), 2), $composer_0, 0, 0);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_15(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function PageLayout$lambda_1($ctx, $content, $$changed) {
    return function ($composer, $force) {
      PageLayout($ctx, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  var properties_initialized_PageLayout_kt_piu0g5;
  function _init_properties_PageLayout_kt__pf69s7() {
    if (!properties_initialized_PageLayout_kt_piu0g5) {
      properties_initialized_PageLayout_kt_piu0g5 = true;
      PageContentStyle = CssStyle(VOID, PageContentStyle$lambda);
      org_alia_portfolio_components_layouts_PageLayoutData$stable = 0;
    }
  }
  function get_BodyOfWorkGridStyle() {
    _init_properties_BodyOfWorkSection_kt__256nxz();
    return BodyOfWorkGridStyle;
  }
  var BodyOfWorkGridStyle;
  function get_defaultProjects() {
    _init_properties_BodyOfWorkSection_kt__256nxz();
    return defaultProjects;
  }
  var defaultProjects;
  function BodyOfWorkSection(projects, $composer, $changed, $default) {
    _init_properties_BodyOfWorkSection_kt__256nxz();
    var projects_0 = {_v: projects};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1501669913);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | (($default & 1) === 0 && $composer_0.changedInstance_s1wkiy_k$(projects_0._v) ? 4 : 2);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 3) === 2), $dirty & 1)) {
      $composer_0.startDefaults_g83kzo_k$();
      if (($changed & 1) === 0 || $composer_0.get_defaultsInvalid_y88fc4_k$()) {
        if (!(($default & 1) === 0)) {
          projects_0._v = get_defaultProjects();
          $dirty = $dirty & -15;
        }
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        if (!(($default & 1) === 0))
          $dirty = $dirty & -15;
      }
      $composer_0.endDefaults_b0s0ot_k$();
      var tmp = padding_0(fillMaxWidth(Companion_getInstance_2()), get_cssRem(4), VOID, get_cssRem(4));
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-981473022, true, BodyOfWorkSection$lambda(projects_0), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_18(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Column(tmp, null, null, null, tmp0, $composer_0, 24576, 14);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(BodyOfWorkSection$lambda_0(projects_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_16(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$BodyOfWorkSectionKt$lambda$176729443$lambda($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    SpanText('Showcase', null, null, null, $composer_0, 6, 14);
    return Unit_getInstance();
  }
  function ComposableSingletons$BodyOfWorkSectionKt() {
    ComposableSingletons$BodyOfWorkSectionKt_instance = this;
    var tmp = this;
    tmp.lambda$176729443__1 = ComposableLambda$invoke$ref_16(composableLambdaInstance(176729443, false, ComposableSingletons$BodyOfWorkSectionKt$lambda$176729443$lambda));
  }
  protoOf(ComposableSingletons$BodyOfWorkSectionKt).get_lambda$176729443_oyb2ol_k$ = function () {
    return this.lambda$176729443__1;
  };
  var ComposableSingletons$BodyOfWorkSectionKt_instance;
  function ComposableSingletons$BodyOfWorkSectionKt_getInstance() {
    if (ComposableSingletons$BodyOfWorkSectionKt_instance == null)
      new ComposableSingletons$BodyOfWorkSectionKt();
    return ComposableSingletons$BodyOfWorkSectionKt_instance;
  }
  function BodyOfWorkGridStyle$lambda($this$base) {
    _init_properties_BodyOfWorkSection_kt__256nxz();
    var tmp = fillMaxWidth(Companion_getInstance_2());
    return gap(styleModifier(tmp, BodyOfWorkGridStyle$lambda$lambda), get_cssRem(3));
  }
  function BodyOfWorkGridStyle$lambda$lambda($this$styleModifier) {
    _init_properties_BodyOfWorkSection_kt__256nxz();
    $this$styleModifier.property_wcrait_k$('display', 'grid');
    $this$styleModifier.property_wcrait_k$('grid-template-columns', 'repeat(auto-fill, minmax(300px, 1fr))');
    return Unit_getInstance();
  }
  function BodyOfWorkSection$lambda$lambda($projects) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = $projects._v.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        ProjectCard(element, $composer_0, org_alia_portfolio_models_Project$stableprop_getter());
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_17(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function BodyOfWorkSection$lambda($projects) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
        Div(toAttrs_0(margin(toModifier(get_HeadlineTextStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter()), VOID, VOID, get_cssRem(2))), ComposableSingletons$BodyOfWorkSectionKt_getInstance().lambda$176729443__1, $composer_0, 48, 0);
        var tmp_0 = toAttrs_0(toModifier(get_BodyOfWorkGridStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter()));
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(2053918092, true, BodyOfWorkSection$lambda$lambda($projects), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = ComposableLambda$invoke$ref_17(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Div(tmp_0, tmp0, $composer_0, 48, 0);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_18(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function BodyOfWorkSection$lambda_0($projects, $$changed, $$default) {
    return function ($composer, $force) {
      BodyOfWorkSection($projects._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  var properties_initialized_BodyOfWorkSection_kt_7mhktx;
  function _init_properties_BodyOfWorkSection_kt__256nxz() {
    if (!properties_initialized_BodyOfWorkSection_kt_7mhktx) {
      properties_initialized_BodyOfWorkSection_kt_7mhktx = true;
      var tmp = Companion_getInstance_5();
      BodyOfWorkGridStyle = base(tmp, VOID, BodyOfWorkGridStyle$lambda);
      defaultProjects = listOf([new Project('mork-materie', 'M\xF8rk Materie', 'Abstrakt KI', 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80'), new Project('lys-refleksjon', 'Lys Refleksjon', 'Visuell film', 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=600&q=80'), new Project('skygge-dybde', 'Skygge Dybde', 'Minimalistisk', 'https://images.unsplash.com/photo-1507502707541-f369a3b18502?auto=format&fit=crop&w=600&q=80')]);
    }
  }
  function get_FooterStyle() {
    _init_properties_Footer_kt__fc6p2z();
    return FooterStyle;
  }
  var FooterStyle;
  function Footer(modifier, $composer, $changed, $default) {
    _init_properties_Footer_kt__fc6p2z();
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1814856638);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 4 : 2);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 3) === 2), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance_2();
      }
      var tmp = backgroundColor(toModifier(get_FooterStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter()).then_mmfvo6_k$(modifier_0._v), toSitePalette(Companion_getInstance_1().get_current_2iudd5_k$($composer_0, 6)).get_nearBackground_c1s3l_k$());
      var tmp_0 = Center_getInstance();
      Box(tmp, tmp_0, null, ComposableSingletons$FooterKt_getInstance().lambda$1046018556__1, $composer_0, 3072 | com_varabyte_kobweb_compose_ui_Alignment_Center$stableprop_getter() << 3, 4);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Footer$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_19(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$FooterKt$lambda$_2027905342$lambda_24abas($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
      var tmp = get_UndecoratedLinkVariant().then_9h6e8h_k$(get_UncoloredLinkVariant());
      Link('/', 'Hovedsiden', null, tmp, null, null, null, null, $composer_0, 54 | com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() << 9, 244);
      var tmp_0 = get_UndecoratedLinkVariant().then_9h6e8h_k$(get_UncoloredLinkVariant());
      Link('/about', 'Om', null, tmp_0, null, null, null, null, $composer_0, 54 | com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() << 9, 244);
      var tmp_1 = get_UndecoratedLinkVariant().then_9h6e8h_k$(get_UncoloredLinkVariant());
      Link('mailto:contact@example.com', 'Kontakt', null, tmp_1, null, null, null, null, $composer_0, 54 | com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() << 9, 244);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_20(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$FooterKt$lambda$_731565723$lambda_nh12hf($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
      var tmp = padding_0(gap(Companion_getInstance_2(), get_cssRem(2)), VOID, VOID, get_cssRem(1));
      Row(tmp, null, null, null, ComposableSingletons$FooterKt_getInstance().lambda$_2027905342_opzmo6__1, $composer_0, 24576, 14);
      var tmp_0 = opacity(fontSize(Companion_getInstance_2(), get_cssRem(0.8)), get_percent(50));
      SpanText('\xA9 2026 AI Ali. Alle rettigheter forbeholdt.', tmp_0, null, null, $composer_0, 6, 12);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_21(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$FooterKt$lambda$1046018556$lambda($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
      var tmp = maxWidth(fillMaxWidth(Companion_getInstance_2()), get_cssRem(60));
      var tmp_0 = CenterHorizontally_getInstance();
      Column(tmp, null, tmp_0, null, ComposableSingletons$FooterKt_getInstance().lambda$_731565723_g2yq6h_1, $composer_0, 24576 | com_varabyte_kobweb_compose_ui_Alignment_CenterHorizontally$stableprop_getter() << 6, 10);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$FooterKt() {
    ComposableSingletons$FooterKt_instance = this;
    var tmp = this;
    tmp.lambda$_2027905342_opzmo6__1 = ComposableLambda$invoke$ref_19(composableLambdaInstance(-2027905342, false, ComposableSingletons$FooterKt$lambda$_2027905342$lambda_24abas));
    var tmp_0 = this;
    tmp_0.lambda$_731565723_g2yq6h_1 = ComposableLambda$invoke$ref_20(composableLambdaInstance(-731565723, false, ComposableSingletons$FooterKt$lambda$_731565723$lambda_nh12hf));
    var tmp_1 = this;
    tmp_1.lambda$1046018556__1 = ComposableLambda$invoke$ref_21(composableLambdaInstance(1046018556, false, ComposableSingletons$FooterKt$lambda$1046018556$lambda));
  }
  protoOf(ComposableSingletons$FooterKt).get_lambda$_2027905342_f1i6k3_k$ = function () {
    return this.lambda$_2027905342_opzmo6__1;
  };
  protoOf(ComposableSingletons$FooterKt).get_lambda$_731565723_pastl0_k$ = function () {
    return this.lambda$_731565723_g2yq6h_1;
  };
  protoOf(ComposableSingletons$FooterKt).get_lambda$1046018556_bo2jpk_k$ = function () {
    return this.lambda$1046018556__1;
  };
  var ComposableSingletons$FooterKt_instance;
  function ComposableSingletons$FooterKt_getInstance() {
    if (ComposableSingletons$FooterKt_instance == null)
      new ComposableSingletons$FooterKt();
    return ComposableSingletons$FooterKt_instance;
  }
  function FooterStyle$lambda($this$base) {
    _init_properties_Footer_kt__fc6p2z();
    return padding_1(fillMaxWidth(Companion_getInstance_2()), get_cssRem(2), get_cssRem(1));
  }
  function Footer$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      Footer($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  var properties_initialized_Footer_kt_pg7k03;
  function _init_properties_Footer_kt__fc6p2z() {
    if (!properties_initialized_Footer_kt_pg7k03) {
      properties_initialized_Footer_kt_pg7k03 = true;
      var tmp = Companion_getInstance_5();
      FooterStyle = base(tmp, VOID, FooterStyle$lambda);
    }
  }
  function get_HeroBackgroundStyle() {
    _init_properties_HeroSection_kt__ak5a5j();
    return HeroBackgroundStyle;
  }
  var HeroBackgroundStyle;
  function HeroSection(videoUrl, $composer, $changed) {
    _init_properties_HeroSection_kt__ak5a5j();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-169087508);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(videoUrl) ? 4 : 2);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 3) === 2), $dirty & 1)) {
      var tmp = height(fillMaxWidth(Companion_getInstance_2()), get_vh(100));
      // Inline function 'org.jetbrains.compose.web.css.Companion.Relative' call
      Companion_getInstance_12();
      // Inline function 'org.jetbrains.compose.web.css.Position' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$3 = 'relative';
      var tmp_0 = margin(position(tmp, tmp$ret$3), get_cssRem(-4));
      var tmp_1 = Center_getInstance();
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(1868370342, true, HeroSection$lambda(videoUrl), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_26(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Box(tmp_0, tmp_1, null, tmp0, $composer_0, 3072 | com_varabyte_kobweb_compose_ui_Alignment_Center$stableprop_getter() << 3, 4);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(HeroSection$lambda_0(videoUrl, $changed));
    }
  }
  function ComposableLambda$invoke$ref_22(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$HeroSectionKt$lambda$249673712$lambda($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    SpanText('Visuell KI-Kreat\xF8r & Director', null, null, null, $composer_0, 6, 14);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_23(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$HeroSectionKt$lambda$_1823066215$lambda_c6tr1u($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    SpanText('Utforsker grensesnittet mellom kunstig intelligens og film.', null, null, null, $composer_0, 6, 14);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_24(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$HeroSectionKt$lambda$_1118580721$lambda_mxtqc4($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
      var tmp = toModifier(get_HeadlineTextStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter());
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = ComposableSingletons$HeroSectionKt$lambda$_1118580721$lambda$lambda_ix6h35;
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp$ret$3 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      Div(toAttrs_0(styleModifier(tmp, tmp$ret$3)), ComposableSingletons$HeroSectionKt_getInstance().lambda$249673712__1, $composer_0, 48, 0);
      var tmp_2 = toModifier(get_SubheadlineTextStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter());
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_0 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (false || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_0 = ComposableSingletons$HeroSectionKt$lambda$_1118580721$lambda$lambda_ix6h35_0;
        $composer_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp$ret$7 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      Div(toAttrs_0(color(styleModifier(tmp_2, tmp$ret$7), Colors_getInstance().get_White_ij46ow_k$().copyf$default_6pu18v_k$(VOID, VOID, VOID, 0.8))), ComposableSingletons$HeroSectionKt_getInstance().lambda$_1823066215_a2vace_1, $composer_0, 48, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$HeroSectionKt$lambda$_1118580721$lambda$lambda_ix6h35($this$styleModifier) {
    $this$styleModifier.property_wcrait_k$('text-align', 'center');
    return Unit_getInstance();
  }
  function ComposableSingletons$HeroSectionKt$lambda$_1118580721$lambda$lambda_ix6h35_0($this$styleModifier) {
    $this$styleModifier.property_wcrait_k$('text-align', 'center');
    return Unit_getInstance();
  }
  function ComposableSingletons$HeroSectionKt() {
    ComposableSingletons$HeroSectionKt_instance = this;
    var tmp = this;
    tmp.lambda$249673712__1 = ComposableLambda$invoke$ref_22(composableLambdaInstance(249673712, false, ComposableSingletons$HeroSectionKt$lambda$249673712$lambda));
    var tmp_0 = this;
    tmp_0.lambda$_1823066215_a2vace_1 = ComposableLambda$invoke$ref_23(composableLambdaInstance(-1823066215, false, ComposableSingletons$HeroSectionKt$lambda$_1823066215$lambda_c6tr1u));
    var tmp_1 = this;
    tmp_1.lambda$_1118580721_hu7v0g_1 = ComposableLambda$invoke$ref_24(composableLambdaInstance(-1118580721, false, ComposableSingletons$HeroSectionKt$lambda$_1118580721$lambda_mxtqc4));
  }
  protoOf(ComposableSingletons$HeroSectionKt).get_lambda$249673712_twjqpf_k$ = function () {
    return this.lambda$249673712__1;
  };
  protoOf(ComposableSingletons$HeroSectionKt).get_lambda$_1823066215_f21ydn_k$ = function () {
    return this.lambda$_1823066215_a2vace_1;
  };
  protoOf(ComposableSingletons$HeroSectionKt).get_lambda$_1118580721_8bm5n7_k$ = function () {
    return this.lambda$_1118580721_hu7v0g_1;
  };
  var ComposableSingletons$HeroSectionKt_instance;
  function ComposableSingletons$HeroSectionKt_getInstance() {
    if (ComposableSingletons$HeroSectionKt_instance == null)
      new ComposableSingletons$HeroSectionKt();
    return ComposableSingletons$HeroSectionKt_instance;
  }
  function HeroBackgroundStyle$lambda($this$base) {
    _init_properties_HeroSection_kt__ak5a5j();
    var tmp = Companion_getInstance_2();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Absolute' call
    Companion_getInstance_12();
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'absolute';
    var tmp_0 = zIndex(height(width(left(top(position(tmp, tmp$ret$3), get_px(0)), get_percent(50)), get_vw(100)), get_vh(100)), 0);
    return styleModifier(tmp_0, HeroBackgroundStyle$lambda$lambda);
  }
  function HeroBackgroundStyle$lambda$lambda($this$styleModifier) {
    _init_properties_HeroSection_kt__ak5a5j();
    $this$styleModifier.property_wcrait_k$('transform', 'translateX(-50%)');
    $this$styleModifier.property_wcrait_k$('overflow', 'hidden');
    return Unit_getInstance();
  }
  function HeroSection$lambda$lambda$lambda$lambda($this$ref, it) {
    _init_properties_HeroSection_kt__ak5a5j();
    it.muted = true;
    // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
    return new HeroSection$$inlined$run$2$2$2$2$1();
  }
  function HeroSection$$inlined$run$2$2$2$2$1() {
  }
  protoOf(HeroSection$$inlined$run$2$2$2$2$1).dispose_3nnxhr_k$ = function () {
  };
  function HeroSection$lambda$lambda$lambda$lambda_0($this$style) {
    _init_properties_HeroSection_kt__ak5a5j();
    $this$style.property_wcrait_k$('width', '100%');
    $this$style.property_wcrait_k$('height', '100%');
    $this$style.property_wcrait_k$('object-fit', 'cover');
    return Unit_getInstance();
  }
  function HeroSection$lambda$lambda$lambda($videoUrl) {
    return function ($this$Video) {
      $this$Video.attr_w68641_k$('src', $videoUrl);
      $this$Video.attr_w68641_k$('autoplay', '');
      $this$Video.attr_w68641_k$('loop', '');
      $this$Video.attr_w68641_k$('playsinline', '');
      $this$Video.attr_w68641_k$('muted', '');
      $this$Video.ref_o4g25g_k$(HeroSection$lambda$lambda$lambda$lambda);
      $this$Video.style_xwwy6r_k$(HeroSection$lambda$lambda$lambda$lambda_0);
      return Unit_getInstance();
    };
  }
  function HeroSection$lambda$lambda($videoUrl) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_0.changed_ga7h3f_k$($videoUrl);
        // Inline function 'kotlin.let' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = HeroSection$lambda$lambda$lambda($videoUrl);
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp_2 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        Video(tmp_2, null, $composer_0, 0, 2);
        var tmp_3 = backgroundColor(fillMaxSize(Companion_getInstance_2()), Colors_getInstance().get_Black_i7mvue_k$().copyf$default_6pu18v_k$(VOID, VOID, VOID, 0.5));
        Box(tmp_3, null, null, null, $composer_0, 0, 14);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_25(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function HeroSection$lambda($videoUrl) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
        var tmp_0 = toModifier(get_HeroBackgroundStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter());
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(420003808, true, HeroSection$lambda$lambda($videoUrl), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = ComposableLambda$invoke$ref_25(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Box(tmp_0, null, null, tmp0, $composer_0, 3072, 6);
        var tmp0_horizontalAlignment = CenterHorizontally_getInstance();
        var tmp1_modifier = zIndex(color(gap(Companion_getInstance_2(), get_cssRem(1)), Colors_getInstance().get_White_ij46ow_k$()), 1);
        Column(tmp1_modifier, null, tmp0_horizontalAlignment, null, ComposableSingletons$HeroSectionKt_getInstance().lambda$_1118580721_hu7v0g_1, $composer_0, 24576 | com_varabyte_kobweb_compose_ui_Alignment_CenterHorizontally$stableprop_getter() << 6, 10);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_26(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function HeroSection$lambda_0($videoUrl, $$changed) {
    return function ($composer, $force) {
      HeroSection($videoUrl, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  var properties_initialized_HeroSection_kt_1pa7h7;
  function _init_properties_HeroSection_kt__ak5a5j() {
    if (!properties_initialized_HeroSection_kt_1pa7h7) {
      properties_initialized_HeroSection_kt_1pa7h7 = true;
      var tmp = Companion_getInstance_5();
      HeroBackgroundStyle = base(tmp, VOID, HeroBackgroundStyle$lambda);
    }
  }
  function get_NavHeaderStyle() {
    _init_properties_NavHeader_kt__vdotjy();
    return NavHeaderStyle;
  }
  var NavHeaderStyle;
  function NavLink(path, text, $composer, $changed) {
    _init_properties_NavHeader_kt__vdotjy();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1057931682);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(path) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(text) ? 32 : 16);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 19) === 18), $dirty & 1)) {
      var tmp0_variant = get_UndecoratedLinkVariant().then_9h6e8h_k$(get_UncoloredLinkVariant());
      var tmp1_modifier = letterSpacing(fontWeight_0(Companion_getInstance_2(), Companion_getInstance_7().get_Bold_wnz5ke_k$()), get_px(1));
      Link(path, text, tmp1_modifier, tmp0_variant, null, null, null, null, $composer_0, 14 & $dirty | 112 & $dirty | com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() << 9, 240);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(NavLink$lambda(path, text, $changed));
    }
  }
  function ColorModeButton($composer, $changed) {
    _init_properties_NavHeader_kt__vdotjy();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-306286327);
    if ($composer_0.shouldExecute_4fplh_k$(!($changed === 0), $changed & 1)) {
      var colorMode$delegate = Companion_getInstance_1().get_currentState_dmzs7c_k$($composer_0, 6);
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.changed_ga7h3f_k$(colorMode$delegate);
      // Inline function 'kotlin.let' call
      var it = tmp0.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = ColorModeButton$lambda_1(colorMode$delegate);
        tmp0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp_1 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(2029881680, true, ColorModeButton$lambda_2(colorMode$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_0 = ComposableLambda$invoke$ref_30(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0_0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      IconButton(tmp_1, tmp0_0, $composer_0, 48);
      var tmp_4 = Companion_getInstance_13().get_PreviousSibling_b9lu4i_k$();
      var tmp_5 = PopupPlacement_BottomRight_getInstance();
      Tooltip(tmp_4, 'Toggle color mode', null, null, tmp_5, false, null, null, 0, 0, null, null, $composer_0, 24624, 0, 4076);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(ColorModeButton$lambda_3($changed));
    }
  }
  function NavHeader($composer, $changed) {
    _init_properties_NavHeader_kt__vdotjy();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1839863153);
    if ($composer_0.shouldExecute_4fplh_k$(!($changed === 0), $changed & 1)) {
      var tmp = toModifier(get_NavHeaderStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter());
      var tmp_0 = CenterVertically_getInstance();
      Row(tmp, null, tmp_0, null, ComposableSingletons$NavHeaderKt_getInstance().lambda$1599133006__1, $composer_0, 24576 | com_varabyte_kobweb_compose_ui_Alignment_CenterVertically$stableprop_getter() << 6, 10);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(NavHeader$lambda($changed));
    }
  }
  function ComposableLambda$invoke$ref_27(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$NavHeaderKt$lambda$1370040000$lambda($composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
      var tmp = letterSpacing(fontSize(fontWeight_0(Companion_getInstance_2(), Companion_getInstance_7().get_Bold_wnz5ke_k$()), get_cssRem(1.2)), get_px(2));
      SpanText('AI Ali', tmp, null, null, $composer_0, 6, 12);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_28(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$NavHeaderKt$lambda$_344696213$lambda_ff4ye7($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
      NavLink('mailto:contact@example.com', 'KONTAKT', $composer_0, 54);
      ColorModeButton($composer_0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_29(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$NavHeaderKt$lambda$1599133006$lambda($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
      var tmp0_variant = get_UndecoratedLinkVariant().then_9h6e8h_k$(get_UncoloredLinkVariant());
      var tmp1_modifier = fontSize(fontWeight_0(Companion_getInstance_2(), Companion_getInstance_7().get_Bolder_3mclb9_k$()), get_cssRem(1.5));
      Link_0('/', tmp1_modifier, tmp0_variant, null, null, null, null, ComposableSingletons$NavHeaderKt_getInstance().lambda$1370040000__1, $composer_0, 12582918 | com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() << 6, 120);
      Spacer($composer_0, 0);
      var tmp = gap(Companion_getInstance_2(), get_cssRem(2));
      var tmp_0 = CenterVertically_getInstance();
      Row(tmp, null, tmp_0, null, ComposableSingletons$NavHeaderKt_getInstance().lambda$_344696213_42ehfg_1, $composer_0, 24576 | com_varabyte_kobweb_compose_ui_Alignment_CenterVertically$stableprop_getter() << 6, 10);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$NavHeaderKt() {
    ComposableSingletons$NavHeaderKt_instance = this;
    var tmp = this;
    tmp.lambda$1370040000__1 = ComposableLambda$invoke$ref_27(composableLambdaInstance(1370040000, false, ComposableSingletons$NavHeaderKt$lambda$1370040000$lambda));
    var tmp_0 = this;
    tmp_0.lambda$_344696213_42ehfg_1 = ComposableLambda$invoke$ref_28(composableLambdaInstance(-344696213, false, ComposableSingletons$NavHeaderKt$lambda$_344696213$lambda_ff4ye7));
    var tmp_1 = this;
    tmp_1.lambda$1599133006__1 = ComposableLambda$invoke$ref_29(composableLambdaInstance(1599133006, false, ComposableSingletons$NavHeaderKt$lambda$1599133006$lambda));
  }
  protoOf(ComposableSingletons$NavHeaderKt).get_lambda$1370040000_v2x7t5_k$ = function () {
    return this.lambda$1370040000__1;
  };
  protoOf(ComposableSingletons$NavHeaderKt).get_lambda$_344696213_m3if9d_k$ = function () {
    return this.lambda$_344696213_42ehfg_1;
  };
  protoOf(ComposableSingletons$NavHeaderKt).get_lambda$1599133006_wrf8qp_k$ = function () {
    return this.lambda$1599133006__1;
  };
  var ComposableSingletons$NavHeaderKt_instance;
  function ComposableSingletons$NavHeaderKt_getInstance() {
    if (ComposableSingletons$NavHeaderKt_instance == null)
      new ComposableSingletons$NavHeaderKt();
    return ComposableSingletons$NavHeaderKt_instance;
  }
  function NavHeaderStyle$lambda($this$base) {
    _init_properties_NavHeader_kt__vdotjy();
    return padding_1(fillMaxWidth(Companion_getInstance_2()), get_cssRem(2), get_cssRem(1));
  }
  function NavLink$lambda($path, $text, $$changed) {
    return function ($composer, $force) {
      NavLink($path, $text, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ColorModeButton$lambda($colorMode$delegate) {
    _init_properties_NavHeader_kt__vdotjy();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('colorMode', KMutableProperty0, true);
    return $colorMode$delegate.get_value_j01efc_k$();
  }
  function ColorModeButton$lambda_0($colorMode$delegate, _set____db54di) {
    _init_properties_NavHeader_kt__vdotjy();
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('colorMode', KMutableProperty0, true);
    $colorMode$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function ColorModeButton$lambda_1($colorMode$delegate) {
    return function () {
      ColorModeButton$lambda_0($colorMode$delegate, ColorModeButton$lambda($colorMode$delegate).get_opposite_ywslzk_k$());
      return Unit_getInstance();
    };
  }
  function ColorModeButton$lambda_2($colorMode$delegate) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
        var tmp_0;
        if (ColorModeButton$lambda($colorMode$delegate).get_isLight_zemp0j_k$()) {
          $composer_0.startReplaceGroup_5hh8aj_k$(801143162);
          MoonIcon(null, $composer_0, 0, 1);
          $composer_0.endReplaceGroup_ek144q_k$();
          tmp_0 = Unit_getInstance();
        } else {
          $composer_0.startReplaceGroup_5hh8aj_k$(801143673);
          SunIcon(null, $composer_0, 0, 1);
          $composer_0.endReplaceGroup_ek144q_k$();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_30(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
      return Unit_getInstance();
    };
  }
  function ColorModeButton$lambda_3($$changed) {
    return function ($composer, $force) {
      ColorModeButton($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function NavHeader$lambda($$changed) {
    return function ($composer, $force) {
      NavHeader($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  var properties_initialized_NavHeader_kt_f5zrgg;
  function _init_properties_NavHeader_kt__vdotjy() {
    if (!properties_initialized_NavHeader_kt_f5zrgg) {
      properties_initialized_NavHeader_kt_f5zrgg = true;
      var tmp = Companion_getInstance_5();
      NavHeaderStyle = base(tmp, VOID, NavHeaderStyle$lambda);
    }
  }
  function get_ProjectCardStyle() {
    _init_properties_ProjectCard_kt__53lzmf();
    return ProjectCardStyle;
  }
  var ProjectCardStyle;
  function ProjectCard(project, $composer, $changed) {
    _init_properties_ProjectCard_kt__53lzmf();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-708886402);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.changed_ga7h3f_k$(project) : $composer_0.changedInstance_s1wkiy_k$(project)) ? 4 : 2);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 3) === 2), $dirty & 1)) {
      var tmp = '/project?id=' + project.get_id_kntnx8_k$();
      var tmp_0 = toModifier(get_ProjectCardStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter());
      var tmp_1 = get_UndecoratedLinkVariant().then_9h6e8h_k$(get_UncoloredLinkVariant());
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-799118260, true, ProjectCard$lambda(project), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_33(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Link_0(tmp, tmp_0, tmp_1, null, null, null, null, tmp0, $composer_0, 12582912 | com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() << 6, 120);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(ProjectCard$lambda_0(project, $changed));
    }
  }
  function ProjectCardStyle$lambda($this$CssStyle) {
    _init_properties_ProjectCard_kt__53lzmf();
    $this$CssStyle.base_y8uu8g_k$(ProjectCardStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle);
    $this$CssStyle.invoke_9o9x0o_k$(tmp, ProjectCardStyle$lambda$lambda_0);
    return Unit_getInstance();
  }
  function ProjectCardStyle$lambda$lambda() {
    _init_properties_ProjectCard_kt__53lzmf();
    var tmp = cursor(fillMaxWidth(Companion_getInstance_2()), Companion_getInstance_14().get_Pointer_m64vg4_k$());
    return styleModifier(tmp, ProjectCardStyle$lambda$lambda$lambda);
  }
  function ProjectCardStyle$lambda$lambda$lambda($this$styleModifier) {
    _init_properties_ProjectCard_kt__53lzmf();
    $this$styleModifier.property_wcrait_k$('transition', 'transform 200ms');
    return Unit_getInstance();
  }
  function ProjectCardStyle$lambda$lambda_0() {
    _init_properties_ProjectCard_kt__53lzmf();
    return scale(Companion_getInstance_2(), 1.02);
  }
  function ProjectCard$lambda$lambda$lambda($project) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      Text($project.get_title_iz32un_k$(), $composer_0, 0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_31(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ProjectCard$lambda$lambda($project) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
        var tmp_0 = $project.get_coverImage_7ezxp_k$();
        var tmp_1 = $project.get_title_iz32un_k$();
        var tmp_2 = objectFit(height(fillMaxWidth(Companion_getInstance_2()), get_cssRem(20)), Companion_getInstance_15().get_Cover_i8910u_k$());
        Image(tmp_0, tmp_1, tmp_2, null, null, null, null, null, null, null, $composer_0, 0, 1016);
        var tmp_3 = toAttrs_0(fontWeight_0(fontSize(Companion_getInstance_2(), get_cssRem(1.2)), Companion_getInstance_7().get_SemiBold_aid1c4_k$()));
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-1465653950, true, ProjectCard$lambda$lambda$lambda($project), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_4;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = ComposableLambda$invoke$ref_31(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_4 = value;
        } else {
          tmp_4 = it;
        }
        var tmp_5 = tmp_4;
        var tmp0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Div(tmp_3, tmp0, $composer_0, 48, 0);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_32(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ProjectCard$lambda($project) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
        var tmp_0 = gap(Companion_getInstance_2(), get_cssRem(0.8));
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-69656061, true, ProjectCard$lambda$lambda($project), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = ComposableLambda$invoke$ref_32(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Column(tmp_0, null, null, null, tmp0, $composer_0, 24576, 14);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_33(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
      return Unit_getInstance();
    };
  }
  function ProjectCard$lambda_0($project, $$changed) {
    return function ($composer, $force) {
      ProjectCard($project, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  var properties_initialized_ProjectCard_kt_82k66x;
  function _init_properties_ProjectCard_kt__53lzmf() {
    if (!properties_initialized_ProjectCard_kt_82k66x) {
      properties_initialized_ProjectCard_kt_82k66x = true;
      ProjectCardStyle = CssStyle(VOID, ProjectCardStyle$lambda);
    }
  }
  function IconButton(onClick, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-662575913);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onClick) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 32 : 16);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 19) === 18), $dirty & 1)) {
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it = tmp0.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = IconButton$lambda(onClick);
        tmp0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp_1 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      var tmp_2 = setVariable(Companion_getInstance_2(), ButtonVars_getInstance().get_FontSize_oos3dz_k$(), get_em(1));
      var tmp_3 = get_CircleButtonVariant().then_9h6e8h_k$(get_UncoloredButtonVariant());
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(1904128743, true, IconButton$lambda_0(content), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_4;
      if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_0 = ComposableLambda$invoke$ref_34(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_4 = value_0;
      } else {
        tmp_4 = it_0;
      }
      var tmp_5 = tmp_4;
      var tmp0_0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Button(tmp_1, tmp_2, tmp_3, null, false, null, null, null, null, tmp0_0, $composer_0, 805306368 | com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() << 6, 504);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(IconButton$lambda_1(onClick, content, $changed));
    }
  }
  function IconButton$lambda($onClick) {
    return function (it) {
      $onClick();
      return Unit_getInstance();
    };
  }
  function IconButton$lambda_0($content) {
    return function ($this$Button, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
        tmp = $content($composer_0, 0);
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_34(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function IconButton$lambda_1($onClick, $content, $$changed) {
    return function ($composer, $force) {
      IconButton($onClick, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  var org_alia_portfolio_models_Project$stable;
  function Project(id, title, description, coverImage, mediaUrls) {
    mediaUrls = mediaUrls === VOID ? emptyList() : mediaUrls;
    this.id_1 = id;
    this.title_1 = title;
    this.description_1 = description;
    this.coverImage_1 = coverImage;
    this.mediaUrls_1 = mediaUrls;
  }
  protoOf(Project).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(Project).get_title_iz32un_k$ = function () {
    return this.title_1;
  };
  protoOf(Project).get_description_emjre5_k$ = function () {
    return this.description_1;
  };
  protoOf(Project).get_coverImage_7ezxp_k$ = function () {
    return this.coverImage_1;
  };
  protoOf(Project).get_mediaUrls_r476wx_k$ = function () {
    return this.mediaUrls_1;
  };
  protoOf(Project).component1_7eebsc_k$ = function () {
    return this.id_1;
  };
  protoOf(Project).component2_7eebsb_k$ = function () {
    return this.title_1;
  };
  protoOf(Project).component3_7eebsa_k$ = function () {
    return this.description_1;
  };
  protoOf(Project).component4_7eebs9_k$ = function () {
    return this.coverImage_1;
  };
  protoOf(Project).component5_7eebs8_k$ = function () {
    return this.mediaUrls_1;
  };
  protoOf(Project).copy_8sqdmb_k$ = function (id, title, description, coverImage, mediaUrls) {
    return new Project(id, title, description, coverImage, mediaUrls);
  };
  protoOf(Project).copy$default_f19qxw_k$ = function (id, title, description, coverImage, mediaUrls, $super) {
    id = id === VOID ? this.id_1 : id;
    title = title === VOID ? this.title_1 : title;
    description = description === VOID ? this.description_1 : description;
    coverImage = coverImage === VOID ? this.coverImage_1 : coverImage;
    mediaUrls = mediaUrls === VOID ? this.mediaUrls_1 : mediaUrls;
    return $super === VOID ? this.copy_8sqdmb_k$(id, title, description, coverImage, mediaUrls) : $super.copy_8sqdmb_k$.call(this, id, title, description, coverImage, mediaUrls);
  };
  protoOf(Project).toString = function () {
    return 'Project(id=' + this.id_1 + ', title=' + this.title_1 + ', description=' + this.description_1 + ', coverImage=' + this.coverImage_1 + ', mediaUrls=' + toString(this.mediaUrls_1) + ')';
  };
  protoOf(Project).hashCode = function () {
    var result = getStringHashCode(this.id_1);
    result = imul(result, 31) + getStringHashCode(this.title_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.description_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.coverImage_1) | 0;
    result = imul(result, 31) + hashCode(this.mediaUrls_1) | 0;
    return result;
  };
  protoOf(Project).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Project))
      return false;
    if (!(this.id_1 === other.id_1))
      return false;
    if (!(this.title_1 === other.title_1))
      return false;
    if (!(this.description_1 === other.description_1))
      return false;
    if (!(this.coverImage_1 === other.coverImage_1))
      return false;
    if (!equals(this.mediaUrls_1, other.mediaUrls_1))
      return false;
    return true;
  };
  function org_alia_portfolio_models_Project$stableprop_getter() {
    return org_alia_portfolio_models_Project$stable;
  }
  function initHomePage(ctx) {
    var tmp0 = ctx.get_data_wokkxf_k$();
    // Inline function 'com.varabyte.kobweb.core.data.add' call
    var value = new PageLayoutData('Ali A. - Visuell KI-Kreat\xF8r');
    tmp0.set_wb2scb_k$(getKClass(PageLayoutData), value);
  }
  function HomePage($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(241987027);
    if ($composer_0.shouldExecute_4fplh_k$(!($changed === 0), $changed & 1)) {
      var tmp = gap(fillMaxWidth(Companion_getInstance_2()), get_cssRem(4));
      Column(tmp, null, null, null, ComposableSingletons$IndexKt_getInstance().lambda$_1266561270_4176pg_1, $composer_0, 24576, 14);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(HomePage$lambda($changed));
    }
  }
  function ComposableLambda$invoke$ref_35(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$IndexKt$lambda$_1266561270$lambda_vtqxll($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
      HeroSection('/hero_test.mp4', $composer_0, 6);
      BodyOfWorkSection(null, $composer_0, 0, 1);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$IndexKt() {
    ComposableSingletons$IndexKt_instance = this;
    var tmp = this;
    tmp.lambda$_1266561270_4176pg_1 = ComposableLambda$invoke$ref_35(composableLambdaInstance(-1266561270, false, ComposableSingletons$IndexKt$lambda$_1266561270$lambda_vtqxll));
  }
  protoOf(ComposableSingletons$IndexKt).get_lambda$_1266561270_8frm61_k$ = function () {
    return this.lambda$_1266561270_4176pg_1;
  };
  var ComposableSingletons$IndexKt_instance;
  function ComposableSingletons$IndexKt_getInstance() {
    if (ComposableSingletons$IndexKt_instance == null)
      new ComposableSingletons$IndexKt();
    return ComposableSingletons$IndexKt_instance;
  }
  function HomePage$lambda($$changed) {
    return function ($composer, $force) {
      HomePage($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function initProjectPage(ctx) {
    var tmp0 = ctx.get_data_wokkxf_k$();
    // Inline function 'com.varabyte.kobweb.core.data.add' call
    var value = new PageLayoutData('Prosjekt Detaljer');
    tmp0.set_wb2scb_k$(getKClass(PageLayoutData), value);
  }
  function ProjectPage($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1840224864);
    if ($composer_0.shouldExecute_4fplh_k$(!($changed === 0), $changed & 1)) {
      var ctx = rememberPageContext($composer_0, 0);
      var projectId = ctx.get_route_iy3cio_k$().get_params_hy4oen_k$().get_wei43m_k$('id');
      // Inline function 'kotlin.collections.find' call
      var tmp0 = get_defaultProjects();
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
        while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
          var element = _iterator__ex2g4s.next_20eer_k$();
          if (element.get_id_kntnx8_k$() === projectId) {
            tmp$ret$1 = element;
            break $l$block;
          }
        }
        tmp$ret$1 = null;
      }
      var project = tmp$ret$1;
      var tmp = gap(padding_0(minHeight(fillMaxWidth(Companion_getInstance_2()), get_vh(100)), get_cssRem(4), VOID, get_cssRem(4)), get_cssRem(4));
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-1890705207, true, ProjectPage$lambda(project), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_41(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Column(tmp, null, null, null, tmp0_0, $composer_0, 24576, 14);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(ProjectPage$lambda_0($changed));
    }
  }
  function ComposableLambda$invoke$ref_36(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$IndexKt$lambda$_949469521$lambda_i6hofs($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    SpanText('Prosjektet ble ikke funnet.', null, null, null, $composer_0, 6, 14);
    return Unit_getInstance();
  }
  function ComposableSingletons$IndexKt_0() {
    ComposableSingletons$IndexKt_instance_0 = this;
    var tmp = this;
    tmp.lambda$_949469521_v1g9jf_1 = ComposableLambda$invoke$ref_36(composableLambdaInstance(-949469521, false, ComposableSingletons$IndexKt$lambda$_949469521$lambda_i6hofs));
  }
  protoOf(ComposableSingletons$IndexKt_0).get_lambda$_949469521_emrj3u_k$ = function () {
    return this.lambda$_949469521_v1g9jf_1;
  };
  var ComposableSingletons$IndexKt_instance_0;
  function ComposableSingletons$IndexKt_getInstance_0() {
    if (ComposableSingletons$IndexKt_instance_0 == null)
      new ComposableSingletons$IndexKt_0();
    return ComposableSingletons$IndexKt_instance_0;
  }
  function ProjectPage$lambda$lambda$lambda($project) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp = $project.get_title_iz32un_k$();
      SpanText(tmp, null, null, null, $composer_0, 0, 14);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_37(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ProjectPage$lambda$lambda$lambda_0($project) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp = $project.get_description_emjre5_k$();
      SpanText(tmp, null, null, null, $composer_0, 0, 14);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_38(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ProjectPage$lambda$lambda($project) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
        var tmp_0 = toAttrs_0(toModifier(get_HeadlineTextStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter()));
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-1053833489, true, ProjectPage$lambda$lambda$lambda($project), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = ComposableLambda$invoke$ref_37(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Div(tmp_0, tmp0, $composer_0, 48, 0);
        var tmp_3 = toAttrs_0(toModifier(get_SubheadlineTextStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter()));
        // Inline function 'kotlin.run' call
        var dispatchReceiver_0 = rememberComposableLambda(-501185768, true, ProjectPage$lambda$lambda$lambda_0($project), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        var it_0 = $composer_2.rememberedValue_4dg93v_k$();
        var tmp_4;
        if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value_0 = ComposableLambda$invoke$ref_38(dispatchReceiver_0);
          $composer_2.updateRememberedValue_l1wh71_k$(value_0);
          tmp_4 = value_0;
        } else {
          tmp_4 = it_0;
        }
        var tmp_5 = tmp_4;
        var tmp0_0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        sourceInformationMarkerEnd($composer_2);
        Div(tmp_3, tmp0_0, $composer_0, 48, 0);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_39(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ProjectPage$lambda$lambda_0($this$styleModifier) {
    $this$styleModifier.property_wcrait_k$('border-radius', '0.5rem');
    return Unit_getInstance();
  }
  function ProjectPage$lambda$lambda$lambda_1($this$styleModifier) {
    $this$styleModifier.property_wcrait_k$('border-radius', '0.5rem');
    return Unit_getInstance();
  }
  function ProjectPage$lambda$lambda_1($project) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s = $project.get_mediaUrls_r476wx_k$().iterator_jk1svi_k$();
        while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
          var element = _iterator__ex2g4s.next_20eer_k$();
          var tmp_0 = objectFit(fillMaxWidth(Companion_getInstance_2()), Companion_getInstance_15().get_Cover_i8910u_k$());
          // Inline function 'androidx.compose.runtime.cache' call
          // Inline function 'kotlin.let' call
          var it = $composer_0.rememberedValue_4dg93v_k$();
          var tmp_1;
          if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
            var value = ProjectPage$lambda$lambda$lambda_1;
            $composer_0.updateRememberedValue_l1wh71_k$(value);
            tmp_1 = value;
          } else {
            tmp_1 = it;
          }
          var tmp_2 = tmp_1;
          var tmp$ret$3 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
          var tmp_3 = styleModifier(tmp_0, tmp$ret$3);
          Image_0(element, tmp_3, null, null, null, null, null, null, null, null, $composer_0, 0, 1020);
        }
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_40(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ProjectPage$lambda($project) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
        var tmp_0;
        if ($project == null) {
          $composer_0.startReplaceGroup_5hh8aj_k$(-1797666341);
          Div(toAttrs_0(color(fontSize(Companion_getInstance_2(), get_cssRem(2)), Colors_getInstance().get_White_ij46ow_k$())), ComposableSingletons$IndexKt_getInstance_0().lambda$_949469521_v1g9jf_1, $composer_0, 48, 0);
          $composer_0.endReplaceGroup_ek144q_k$();
          tmp_0 = Unit_getInstance();
        } else {
          $composer_0.startReplaceGroup_5hh8aj_k$(-1797469305);
          var tmp_1 = gap(Companion_getInstance_2(), get_cssRem(1));
          // Inline function 'kotlin.run' call
          var dispatchReceiver = rememberComposableLambda(-1049049458, true, ProjectPage$lambda$lambda($project), $composer_0, 54);
          // Inline function 'androidx.compose.runtime.remember' call
          var $composer_1 = $composer_0;
          sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
          // Inline function 'kotlin.let' call
          var it = $composer_1.rememberedValue_4dg93v_k$();
          var tmp_2;
          if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
            var value = ComposableLambda$invoke$ref_39(dispatchReceiver);
            $composer_1.updateRememberedValue_l1wh71_k$(value);
            tmp_2 = value;
          } else {
            tmp_2 = it;
          }
          var tmp_3 = tmp_2;
          var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
          sourceInformationMarkerEnd($composer_1);
          Column(tmp_1, null, null, null, tmp0, $composer_0, 24576, 14);
          var tmp_4 = $project.get_coverImage_7ezxp_k$();
          var tmp_5 = $project.get_title_iz32un_k$();
          var tmp_6 = objectFit(height(fillMaxWidth(Companion_getInstance_2()), get_vh(60)), Companion_getInstance_15().get_Cover_i8910u_k$());
          // Inline function 'androidx.compose.runtime.cache' call
          // Inline function 'kotlin.let' call
          var it_0 = $composer_0.rememberedValue_4dg93v_k$();
          var tmp_7;
          if (false || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
            var value_0 = ProjectPage$lambda$lambda_0;
            $composer_0.updateRememberedValue_l1wh71_k$(value_0);
            tmp_7 = value_0;
          } else {
            tmp_7 = it_0;
          }
          var tmp_8 = tmp_7;
          var tmp$ret$10 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
          var tmp_9 = styleModifier(tmp_6, tmp$ret$10);
          Image(tmp_4, tmp_5, tmp_9, null, null, null, null, null, null, null, $composer_0, 0, 1016);
          // Inline function 'kotlin.collections.isNotEmpty' call
          if (!$project.get_mediaUrls_r476wx_k$().isEmpty_y1axqb_k$()) {
            $composer_0.startReplaceGroup_5hh8aj_k$(-1796646038);
            var tmp_10 = gap(Companion_getInstance_2(), get_cssRem(2));
            // Inline function 'kotlin.run' call
            var dispatchReceiver_0 = rememberComposableLambda(-75483757, true, ProjectPage$lambda$lambda_1($project), $composer_0, 54);
            // Inline function 'androidx.compose.runtime.remember' call
            var $composer_2 = $composer_0;
            sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
            // Inline function 'androidx.compose.runtime.cache' call
            var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
            // Inline function 'kotlin.let' call
            var it_1 = $composer_2.rememberedValue_4dg93v_k$();
            var tmp_11;
            if (invalid_0 || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
              var value_1 = ComposableLambda$invoke$ref_40(dispatchReceiver_0);
              $composer_2.updateRememberedValue_l1wh71_k$(value_1);
              tmp_11 = value_1;
            } else {
              tmp_11 = it_1;
            }
            var tmp_12 = tmp_11;
            var tmp0_0 = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
            sourceInformationMarkerEnd($composer_2);
            Column(tmp_10, null, null, null, tmp0_0, $composer_0, 24576, 14);
            $composer_0.endReplaceGroup_ek144q_k$();
          } else {
            $composer_0.startReplaceGroup_5hh8aj_k$(-1796262599);
            $composer_0.endReplaceGroup_ek144q_k$();
          }
          $composer_0.endReplaceGroup_ek144q_k$();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_41(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
      return Unit_getInstance();
    };
  }
  function ProjectPage$lambda_0($$changed) {
    return function ($composer, $force) {
      ProjectPage($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  //region block: init
  COLOR_MODE_KEY = 'alia_portfolio:colorMode';
  org_alia_portfolio_SitePalette$stable = 8;
  org_alia_portfolio_SitePalettes$stable = 8;
  org_alia_portfolio_models_Project$stable = 8;
  //endregion
  mainWrapper();
  return _;
}));
