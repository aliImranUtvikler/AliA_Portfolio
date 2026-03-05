(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './androidx-compose-runtime-runtime.js', './kobweb-frontend-kobweb-core.js', './kobweb-frontend-silk-foundation.js', './html-internal-html-core-runtime.js', './kobweb-frontend-silk-widgets.js', './kobweb-frontend-silk-widgets-kobweb.js', './kobweb-frontend-kobweb-silk.js', './kobweb-frontend-kobweb-compose.js', './kobweb-frontend-compose-html-ext.js', './kotlinx-coroutines-core.js', './html-html-core.js', './kobweb-frontend-kobwebx-markdown.js', './kobweb-frontend-browser-ext.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./androidx-compose-runtime-runtime.js'), require('./kobweb-frontend-kobweb-core.js'), require('./kobweb-frontend-silk-foundation.js'), require('./html-internal-html-core-runtime.js'), require('./kobweb-frontend-silk-widgets.js'), require('./kobweb-frontend-silk-widgets-kobweb.js'), require('./kobweb-frontend-kobweb-silk.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./kobweb-frontend-compose-html-ext.js'), require('./kotlinx-coroutines-core.js'), require('./html-html-core.js'), require('./kobweb-frontend-kobwebx-markdown.js'), require('./kobweb-frontend-browser-ext.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'org.alia.portfolio:portfolio'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'org.alia.portfolio:portfolio'.");
    }
    if (typeof globalThis['androidx-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'org.alia.portfolio:portfolio'. Its dependency 'androidx-compose-runtime-runtime' was not found. Please, check whether 'androidx-compose-runtime-runtime' is loaded prior to 'org.alia.portfolio:portfolio'.");
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
    globalThis['org.alia.portfolio:portfolio'] = factory(typeof globalThis['org.alia.portfolio:portfolio'] === 'undefined' ? {} : globalThis['org.alia.portfolio:portfolio'], globalThis['kotlin-kotlin-stdlib'], globalThis['androidx-compose-runtime-runtime'], globalThis['kobweb-frontend-kobweb-core'], globalThis['kobweb-frontend-silk-foundation'], globalThis['html-internal-html-core-runtime'], globalThis['kobweb-frontend-silk-widgets'], globalThis['kobweb-frontend-silk-widgets-kobweb'], globalThis['kobweb-frontend-kobweb-silk'], globalThis['kobweb-frontend-kobweb-compose'], globalThis['kobweb-frontend-compose-html-ext'], globalThis['kotlinx-coroutines-core'], globalThis['html-html-core'], globalThis['kobweb-frontend-kobwebx-markdown'], globalThis['kobweb-frontend-browser-ext']);
  }
}(function (_, kotlin_kotlin, kotlin_androidx_compose_runtime_runtime, kotlin_com_varabyte_kobweb_kobweb_core, kotlin_com_varabyte_kobweb_silk_foundation, kotlin_org_jetbrains_compose_html_internal_html_core_runtime, kotlin_com_varabyte_kobweb_silk_widgets, kotlin_com_varabyte_kobweb_silk_widgets_kobweb, kotlin_com_varabyte_kobweb_kobweb_silk, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobwebx_kobwebx_markdown, kotlin_com_varabyte_kobweb_browser_ext) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.e2;
  var androidx_compose_runtime_ProvidedValue$stableprop_getter = kotlin_androidx_compose_runtime_runtime.$_$.m;
  var CompositionLocalProvider = kotlin_androidx_compose_runtime_runtime.$_$.d;
  var AppGlobals_instance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.k;
  var to = kotlin_kotlin.$_$.nb;
  var mapOf = kotlin_kotlin.$_$.i4;
  var Companion_instance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.l;
  var Router = kotlin_com_varabyte_kobweb_kobweb_core.$_$.g;
  var initKobweb = kotlin_com_varabyte_kobweb_kobweb_core.$_$.b;
  var set_additionalSilkInitialization = kotlin_com_varabyte_kobweb_silk_foundation.$_$.d;
  var removePrefix = kotlin_kotlin.$_$.o9;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.t1;
  var charArrayOf = kotlin_kotlin.$_$.y6;
  var trimStart = kotlin_kotlin.$_$.ja;
  var remove = kotlin_com_varabyte_kobweb_kobweb_core.$_$.i;
  var UpdateHistoryMode_REPLACE_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.j;
  var ensureNotNull = kotlin_kotlin.$_$.fb;
  var composableLambdaInstance = kotlin_androidx_compose_runtime_runtime.$_$.a;
  var renderComposable = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.c;
  var rememberComposableLambda = kotlin_androidx_compose_runtime_runtime.$_$.b;
  var sourceInformationMarkerStart = kotlin_androidx_compose_runtime_runtime.$_$.u;
  var Companion_getInstance = kotlin_androidx_compose_runtime_runtime.$_$.f1;
  var THROW_CCE = kotlin_kotlin.$_$.ya;
  var sourceInformationMarkerEnd = kotlin_androidx_compose_runtime_runtime.$_$.t;
  var com_varabyte_kobweb_core_PageContext$stableprop_getter = kotlin_com_varabyte_kobweb_kobweb_core.$_$.d;
  var DeferringHost = kotlin_com_varabyte_kobweb_silk_foundation.$_$.c;
  var initMetadataForObject = kotlin_kotlin.$_$.r7;
  var updateChangedFlags = kotlin_androidx_compose_runtime_runtime.$_$.z;
  var VOID = kotlin_kotlin.$_$.c;
  var removeSuffix = kotlin_kotlin.$_$.p9;
  var initSilkWidgets = kotlin_com_varabyte_kobweb_silk_widgets.$_$.h;
  var initSilkWidgetsKobweb = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.g;
  var com_varabyte_kobweb_navigation_Router$stableprop_getter = kotlin_com_varabyte_kobweb_kobweb_core.$_$.h;
  var compositionLocalOf = kotlin_androidx_compose_runtime_runtime.$_$.n;
  var Companion_instance_0 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.h2;
  var loadFromLocalStorage = kotlin_com_varabyte_kobweb_silk_foundation.$_$.r1;
  var ColorMode_DARK_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b2;
  var registerStyleBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.e;
  var SilkApp = kotlin_com_varabyte_kobweb_kobweb_silk.$_$.a;
  var Companion_instance_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v3;
  var Companion_instance_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.q3;
  var scrollBehavior = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s2;
  var CoroutineImpl = kotlin_kotlin.$_$.w5;
  var protoOf = kotlin_kotlin.$_$.c8;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var isInterface = kotlin_kotlin.$_$.u7;
  var saveToLocalStorage = kotlin_com_varabyte_kobweb_silk_foundation.$_$.s1;
  var initMetadataForLambda = kotlin_kotlin.$_$.q7;
  var LaunchedEffect = kotlin_androidx_compose_runtime_runtime.$_$.j;
  var get_SmoothColorStyle = kotlin_com_varabyte_kobweb_silk_widgets.$_$.i;
  var com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b1;
  var toModifier = kotlin_com_varabyte_kobweb_silk_foundation.$_$.h1;
  var get_vh = kotlin_org_jetbrains_compose_html_html_core.$_$.e3;
  var minHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a2;
  var Surface = kotlin_com_varabyte_kobweb_silk_widgets.$_$.f;
  var get_HorizontalDividerStyle = kotlin_com_varabyte_kobweb_silk_widgets.$_$.e;
  var modifyStyleBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.x1;
  var get_cssRem = kotlin_org_jetbrains_compose_html_html_core.$_$.r1;
  var fontSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g1;
  var fontWeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i1;
  var letterSpacing = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p1;
  var Companion_instance_3 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.r3;
  var textAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w2;
  var lineHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q1;
  var Colors_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r3;
  var color = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.y2;
  var padding = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m2;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.w2;
  var borderRadius = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p;
  var ButtonVars_getInstance = kotlin_com_varabyte_kobweb_silk_widgets.$_$.p;
  var setVariable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t2;
  var MediaFeature = kotlin_org_jetbrains_compose_html_html_core.$_$.w;
  var fontFamily = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f1;
  var fillMaxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d1;
  var Companion_instance_4 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.g2;
  var base = kotlin_com_varabyte_kobweb_silk_foundation.$_$.z;
  var get_ButtonStyle = kotlin_com_varabyte_kobweb_silk_widgets.$_$.a;
  var addVariantBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.w;
  var initMetadataForClass = kotlin_kotlin.$_$.m7;
  var Companion_instance_5 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q3;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.hb;
  var set_background = kotlin_com_varabyte_kobweb_silk_widgets.$_$.l;
  var set_color = kotlin_com_varabyte_kobweb_silk_widgets.$_$.n;
  var get_markdown = kotlin_com_varabyte_kobwebx_kobwebx_markdown.$_$.a;
  var singleOrNull = kotlin_kotlin.$_$.v4;
  var toString = kotlin_kotlin.$_$.d8;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.b1;
  var getKClass = kotlin_kotlin.$_$.l8;
  var toAttrs = kotlin_com_varabyte_kobweb_silk_foundation.$_$.e1;
  var Div = kotlin_org_jetbrains_compose_html_html_core.$_$.l3;
  var fillMaxSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c1;
  var margin = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y1;
  var margin_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x1;
  var Companion_instance_6 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e3;
  var fontWeight_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h1;
  var Companion_instance_7 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.p3;
  var overflowWrap = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i2;
  var toPalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.n1;
  var get_color = kotlin_com_varabyte_kobweb_silk_widgets.$_$.m;
  var Companion_instance_8 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.o3;
  var Companion_instance_9 = kotlin_org_jetbrains_compose_html_html_core.$_$.i;
  var display = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b1;
  var backgroundColor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m;
  var Companion_instance_10 = kotlin_org_jetbrains_compose_html_html_core.$_$.l;
  var border = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r;
  var overflow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j2;
  var CssStyle = kotlin_com_varabyte_kobweb_silk_foundation.$_$.t;
  var getValue = kotlin_com_varabyte_kobweb_kobweb_core.$_$.a;
  var gridTemplateRows = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m1;
  var Center_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u3;
  var com_varabyte_kobweb_compose_ui_Alignment_Center$stableprop_getter = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h3;
  var Box = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a;
  var Breakpoint_MD_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a2;
  var padding_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n2;
  var maxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z1;
  var get_fr = kotlin_org_jetbrains_compose_html_html_core.$_$.z1;
  var gridRow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k1;
  var CenterHorizontally_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s3;
  var com_varabyte_kobweb_compose_ui_Alignment_CenterHorizontally$stableprop_getter = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i3;
  var Column = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b;
  var SpanText = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a;
  var styleModifier = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k3;
  var gap = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j1;
  var toAttrs_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m3;
  var listOf = kotlin_kotlin.$_$.g4;
  var get_UndecoratedLinkVariant = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.f;
  var get_UncoloredLinkVariant = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.e;
  var com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter = kotlin_com_varabyte_kobweb_silk_foundation.$_$.c1;
  var Link = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.c;
  var Row = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c;
  var opacity = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f2;
  var padding_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o2;
  var height = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n1;
  var Companion_instance_11 = kotlin_org_jetbrains_compose_html_html_core.$_$.m;
  var position = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p2;
  var top = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y2;
  var left = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o1;
  var get_vw = kotlin_org_jetbrains_compose_html_html_core.$_$.f3;
  var width = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f3;
  var zIndex = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g3;
  var Video = kotlin_org_jetbrains_compose_html_html_core.$_$.s3;
  var Companion_instance_12 = kotlin_com_varabyte_kobweb_browser_ext.$_$.j;
  var PopupPlacement_BottomRight_getInstance = kotlin_com_varabyte_kobweb_silk_widgets.$_$.o;
  var Tooltip = kotlin_com_varabyte_kobweb_silk_widgets.$_$.g;
  var CenterVertically_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t3;
  var com_varabyte_kobweb_compose_ui_Alignment_CenterVertically$stableprop_getter = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j3;
  var Link_0 = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.d;
  var Spacer = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d;
  var KMutableProperty0 = kotlin_kotlin.$_$.m8;
  var getLocalDelegateReference = kotlin_kotlin.$_$.h7;
  var SunIcon = kotlin_com_varabyte_kobweb_silk_widgets.$_$.d;
  var MoonIcon = kotlin_com_varabyte_kobweb_silk_widgets.$_$.c;
  var get_hover = kotlin_com_varabyte_kobweb_silk_foundation.$_$.n;
  var Companion_instance_13 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d3;
  var cursor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a1;
  var scale = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r2;
  var Text = kotlin_org_jetbrains_compose_html_html_core.$_$.r3;
  var Companion_instance_14 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.k3;
  var objectFit = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c2;
  var Image = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.b;
  var get_em = kotlin_org_jetbrains_compose_html_html_core.$_$.t1;
  var Button = kotlin_com_varabyte_kobweb_silk_widgets.$_$.b;
  var emptyList = kotlin_kotlin.$_$.n3;
  var getStringHashCode = kotlin_kotlin.$_$.k7;
  var hashCode = kotlin_kotlin.$_$.l7;
  var equals = kotlin_kotlin.$_$.f7;
  var rememberPageContext = kotlin_com_varabyte_kobweb_kobweb_core.$_$.e;
  var Image_0 = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.a;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(ComposableSingletons$MainKt, 'ComposableSingletons$MainKt');
  initMetadataForLambda(AppEntry$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(SitePalette, 'SitePalette');
  initMetadataForObject(SitePalettes, 'SitePalettes');
  initMetadataForClass(PageLayoutData, 'PageLayoutData');
  initMetadataForLambda(PageLayout$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForObject(ComposableSingletons$BodyOfWorkSectionKt, 'ComposableSingletons$BodyOfWorkSectionKt');
  initMetadataForObject(ComposableSingletons$FooterKt, 'ComposableSingletons$FooterKt');
  initMetadataForObject(ComposableSingletons$HeroSectionKt, 'ComposableSingletons$HeroSectionKt');
  initMetadataForClass(HeroSection$$inlined$run$2$2$2$2$1);
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
  function provideLayoutScope(layoutScope, content, $composer, $changed) {
    _init_properties_main_kt__ykjpl3();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.e1h(-268603817);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.r1h(layoutScope) : $composer_0.u1h(layoutScope)) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.u1h(content) ? 32 : 16);
    if ($composer_0.w1h(!(($dirty & 19) === 18), $dirty & 1)) {
      CompositionLocalProvider(get_LayoutScopeLocal().t21(layoutScope), content, $composer_0, androidx_compose_runtime_ProvidedValue$stableprop_getter() | 112 & $dirty);
    } else {
      $composer_0.j1h();
    }
    var tmp0_safe_receiver = $composer_0.f1h();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y21(provideLayoutScope$lambda(layoutScope, content, $changed));
    }
  }
  function main() {
    _init_properties_main_kt__ykjpl3();
    AppGlobals_instance.k3f(mapOf(to('title', '${projectTitle}')));
    Companion_instance.j3h('');
    var router = new Router();
    initKobweb(router, main$lambda);
    router.k3i(main$lambda_0);
    set_additionalSilkInitialization(main$lambda_1);
    router.m3i(remove(Companion_instance, '/' + trimStart(removePrefix(window.location.href, window.origin), charArrayOf([_Char___init__impl__6a9atx(47)]))), UpdateHistoryMode_REPLACE_getInstance());
    var root = ensureNotNull(document.getElementById('_kobweb-root'));
    while (!(root.firstChild == null)) {
      root.removeChild(ensureNotNull(root.firstChild));
    }
    renderComposable('_kobweb-root', ComposableLambda$invoke$ref_8(composableLambdaInstance(1108811911, true, main$lambda_2(router))));
  }
  function ComposableLambda$invoke$ref(p0) {
    return function (_this__u8e3s4, p0_0, p1, p2) {
      p0.y2n(_this__u8e3s4, p0_0, p1, p2);
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda$1498945258$lambda(pageCtx, pageMethod, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.r1h(pageCtx) : $composer_0.u1h(pageCtx)) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.u1h(pageMethod) ? 32 : 16);
    if ($composer_0.w1h(!(($dirty & 147) === 146), $dirty & 1)) {
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-1761814108, true, ComposableSingletons$MainKt$lambda$1498945258$lambda$lambda(pageMethod, pageCtx), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.r1h(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.p1h();
      var tmp;
      if (invalid || it === Companion_getInstance().r1g_1) {
        var value = ComposableLambda$invoke$ref_0(dispatchReceiver);
        $composer_1.q1h(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      MarkdownLayout(tmp0, $composer_0, 6);
    } else {
      $composer_0.j1h();
    }
    return Unit_instance;
  }
  function ComposableSingletons$MainKt$lambda$1498945258$lambda$lambda($pageMethod, $pageCtx) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.w1h(!(($changed & 3) === 2), $changed & 1)) {
        tmp = $pageMethod($pageCtx, $composer_0, com_varabyte_kobweb_core_PageContext$stableprop_getter());
      } else {
        $composer_0.j1h();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_0(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.u1v(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_1(p0) {
    return function (_this__u8e3s4, p0_0, p1, p2) {
      p0.y2n(_this__u8e3s4, p0_0, p1, p2);
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda$_1396482527$lambda_75hsrn(pageCtx, pageMethod, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.r1h(pageCtx) : $composer_0.u1h(pageCtx)) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.u1h(pageMethod) ? 32 : 16);
    if ($composer_0.w1h(!(($dirty & 147) === 146), $dirty & 1)) {
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(605933002, true, ComposableSingletons$MainKt$lambda$_1396482527$lambda$lambda_v3zxsi(pageMethod, pageCtx), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.r1h(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.p1h();
      var tmp;
      if (invalid || it === Companion_getInstance().r1g_1) {
        var value = ComposableLambda$invoke$ref_3(dispatchReceiver);
        $composer_1.q1h(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      PageLayout(pageCtx, tmp0, $composer_0, 48 | com_varabyte_kobweb_core_PageContext$stableprop_getter() | 14 & $dirty);
    } else {
      $composer_0.j1h();
    }
    return Unit_instance;
  }
  function ComposableSingletons$MainKt$lambda$_1396482527$lambda$lambda$lambda_6ermrn($pageMethod, $pageCtx) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.w1h(!(($changed & 3) === 2), $changed & 1)) {
        tmp = $pageMethod($pageCtx, $composer_0, com_varabyte_kobweb_core_PageContext$stableprop_getter());
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
  function ComposableSingletons$MainKt$lambda$_1396482527$lambda$lambda_v3zxsi($pageMethod, $pageCtx) {
    return function ($this$_org_alia_portfolio_components_layouts_PageLayout, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 6) === 0) {
        $dirty = $dirty | ($composer_0.r1h($this$_org_alia_portfolio_components_layouts_PageLayout) ? 4 : 2);
        tmp = Unit_instance;
      }
      var tmp_0;
      if ($composer_0.w1h(!(($dirty & 19) === 18), $dirty & 1)) {
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-1470159405, true, ComposableSingletons$MainKt$lambda$_1396482527$lambda$lambda$lambda_6ermrn($pageMethod, $pageCtx), $composer_0, 54);
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
        provideLayoutScope($this$_org_alia_portfolio_components_layouts_PageLayout, tmp0, $composer_0, 48 | 14 & $dirty);
        tmp_0 = Unit_instance;
      } else {
        $composer_0.j1h();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_3(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.x2n(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_4(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.x2n(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda$_521244896$lambda_jdp3wp(pageCtx, $composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.w1h(!(($changed & 17) === 16), $changed & 1)) {
      HomePage($composer_0, 0);
    } else {
      $composer_0.j1h();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_5(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.x2n(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda$_1474002729$lambda_4qld8c(pageCtx, $composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.w1h(!(($changed & 17) === 16), $changed & 1)) {
      ProjectPage($composer_0, 0);
    } else {
      $composer_0.j1h();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_6(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.x2n(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda$854823496$lambda(it, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.u1h(it) ? 4 : 2);
    if ($composer_0.w1h(!(($dirty & 19) === 18), $dirty & 1)) {
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-440954647, true, ComposableSingletons$MainKt$lambda$854823496$lambda$lambda(it), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.r1h(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.p1h();
      var tmp;
      if (invalid || it_0 === Companion_getInstance().r1g_1) {
        var value = ComposableLambda$invoke$ref_7(dispatchReceiver);
        $composer_1.q1h(value);
        tmp = value;
      } else {
        tmp = it_0;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      DeferringHost(tmp0, $composer_0, 6);
    } else {
      $composer_0.j1h();
    }
    return Unit_instance;
  }
  function ComposableSingletons$MainKt$lambda$854823496$lambda$lambda($it) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.w1h(!(($changed & 3) === 2), $changed & 1)) {
        tmp = $it($composer_0, 0);
      } else {
        $composer_0.j1h();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_7(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.u1v(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt() {
    ComposableSingletons$MainKt_instance = this;
    var tmp = this;
    tmp.o4b_1 = ComposableLambda$invoke$ref(composableLambdaInstance(1498945258, false, ComposableSingletons$MainKt$lambda$1498945258$lambda));
    var tmp_0 = this;
    tmp_0.p4b_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(-1396482527, false, ComposableSingletons$MainKt$lambda$_1396482527$lambda_75hsrn));
    var tmp_1 = this;
    tmp_1.q4b_1 = ComposableLambda$invoke$ref_4(composableLambdaInstance(-521244896, false, ComposableSingletons$MainKt$lambda$_521244896$lambda_jdp3wp));
    var tmp_2 = this;
    tmp_2.r4b_1 = ComposableLambda$invoke$ref_5(composableLambdaInstance(-1474002729, false, ComposableSingletons$MainKt$lambda$_1474002729$lambda_4qld8c));
    var tmp_3 = this;
    tmp_3.s4b_1 = ComposableLambda$invoke$ref_6(composableLambdaInstance(854823496, false, ComposableSingletons$MainKt$lambda$854823496$lambda));
  }
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
      return Unit_instance;
    };
  }
  function main$lambda(ctx) {
    _init_properties_main_kt__ykjpl3();
    ctx.m3g_1.h3i('org.alia.portfolio.components.layouts.MarkdownLayout', 'org.alia.portfolio.components.layouts.PageLayout', main$lambda$lambda, ComposableSingletons$MainKt_getInstance().o4b_1);
    ctx.m3g_1.i3i('org.alia.portfolio.components.layouts.PageLayout', VOID, VOID, ComposableSingletons$MainKt_getInstance().p4b_1);
    ctx.m3g_1.j3i('/', 'org.alia.portfolio.components.layouts.PageLayout', main$lambda$lambda_0, ComposableSingletons$MainKt_getInstance().q4b_1);
    ctx.m3g_1.j3i('/project/', 'org.alia.portfolio.components.layouts.PageLayout', main$lambda$lambda_1, ComposableSingletons$MainKt_getInstance().r4b_1);
    return Unit_instance;
  }
  function main$lambda$lambda(ctx) {
    _init_properties_main_kt__ykjpl3();
    initMarkdownLayout(ctx);
    return Unit_instance;
  }
  function main$lambda$lambda_0(ctx) {
    _init_properties_main_kt__ykjpl3();
    initHomePage(ctx);
    return Unit_instance;
  }
  function main$lambda$lambda_1(ctx) {
    _init_properties_main_kt__ykjpl3();
    initProjectPage(ctx);
    return Unit_instance;
  }
  function main$lambda_0($this$addRouteInterceptor) {
    _init_properties_main_kt__ykjpl3();
    $this$addRouteInterceptor.n3i(removeSuffix(removeSuffix($this$addRouteInterceptor.z3h_1, '.html'), '.htm'));
    return Unit_instance;
  }
  function main$lambda_1(ctx) {
    _init_properties_main_kt__ykjpl3();
    initSilkWidgets(ctx);
    initSilkWidgetsKobweb(ctx);
    ctx.m3m_1.l3r('headline-text', get_HeadlineTextStyle());
    ctx.m3m_1.l3r('subheadline-text', get_SubheadlineTextStyle());
    ctx.m3m_1.l3r('footer', get_FooterStyle());
    ctx.m3m_1.l3r('hero-background', get_HeroBackgroundStyle());
    ctx.m3m_1.l3r('nav-header', get_NavHeaderStyle());
    ctx.m3m_1.l3r('project-card', get_ProjectCardStyle());
    ctx.m3m_1.l3r('body-of-work-grid', get_BodyOfWorkGridStyle());
    ctx.m3m_1.l3r('markdown', get_MarkdownStyle());
    ctx.m3m_1.l3r('page-content', get_PageContentStyle());
    ctx.m3m_1.r3r('-circle', get_CircleButtonVariant());
    ctx.m3m_1.r3r('-uncolored', get_UncoloredButtonVariant());
    initSiteStyles(ctx);
    initColorMode(ctx);
    initStyles(ctx);
    initTheme(ctx);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_8(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.x2n(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function main$lambda$lambda_2($router) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.w1h(!(($changed & 3) === 2), $changed & 1)) {
        $router.c3i(ComposableSingletons$MainKt_getInstance().s4b_1, $composer_0, 6 | com_varabyte_kobweb_navigation_Router$stableprop_getter() << 3, 0);
        tmp = Unit_instance;
      } else {
        $composer_0.j1h();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_9(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.u1v(_this__u8e3s4, p0_0);
      return Unit_instance;
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
      var invalid = $composer_1.r1h(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.p1h();
      var tmp;
      if (invalid || it === Companion_getInstance().r1g_1) {
        var value = ComposableLambda$invoke$ref_9(dispatchReceiver);
        $composer_1.q1h(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      AppEntry(tmp0, $composer_0, 6);
      return Unit_instance;
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
  function initColorMode(ctx) {
    var tmp = ctx.k3m_1;
    var tmp0_elvis_lhs = loadFromLocalStorage(Companion_instance_0, 'alia_portfolio:colorMode');
    tmp.w3n_1 = tmp0_elvis_lhs == null ? ColorMode_DARK_getInstance() : tmp0_elvis_lhs;
  }
  function initStyles(ctx) {
    // Inline function 'kotlin.apply' call
    var this_0 = ctx.l3m_1;
    registerStyleBase(this_0, 'body', initStyles$lambda);
  }
  function AppEntry(content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.e1h(-1557705896);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.u1h(content) ? 4 : 2);
    if ($composer_0.w1h(!(($dirty & 3) === 2), $dirty & 1)) {
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(1327786489, true, AppEntry$lambda(content), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.r1h(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.p1h();
      var tmp;
      if (invalid || it === Companion_getInstance().r1g_1) {
        var value = ComposableLambda$invoke$ref_11(dispatchReceiver);
        $composer_1.q1h(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      SilkApp(tmp0, $composer_0, 6);
    } else {
      $composer_0.j1h();
    }
    var tmp0_safe_receiver = $composer_0.f1h();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y21(AppEntry$lambda_0(content, $changed));
    }
  }
  function initStyles$lambda() {
    return scrollBehavior(Companion_instance_1, Companion_instance_2.e3b());
  }
  function AppEntry$lambda$slambda($colorMode, resultContinuation) {
    this.b4c_1 = $colorMode;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AppEntry$lambda$slambda).d19 = function ($this$LaunchedEffect, $completion) {
    var tmp = this.e19($this$LaunchedEffect, $completion);
    tmp.h8_1 = Unit_instance;
    tmp.i8_1 = null;
    return tmp.n8();
  };
  protoOf(AppEntry$lambda$slambda).z8 = function (p1, $completion) {
    return this.d19((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AppEntry$lambda$slambda).n8 = function () {
    var suspendResult = this.h8_1;
    $sm: do
      try {
        var tmp = this.f8_1;
        if (tmp === 0) {
          this.g8_1 = 1;
          saveToLocalStorage(this.b4c_1, 'alia_portfolio:colorMode');
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
  protoOf(AppEntry$lambda$slambda).e19 = function ($this$LaunchedEffect, completion) {
    var i = new AppEntry$lambda$slambda(this.b4c_1, completion);
    i.c4c_1 = $this$LaunchedEffect;
    return i;
  };
  function AppEntry$lambda$slambda_0($colorMode, resultContinuation) {
    var i = new AppEntry$lambda$slambda($colorMode, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.d19($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AppEntry$lambda$lambda($content) {
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
  function ComposableLambda$invoke$ref_10(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.u1v(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function AppEntry$lambda($content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.w1h(!(($changed & 3) === 2), $changed & 1)) {
        var colorMode = Companion_instance_0.p3l($composer_0, 6);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_0.t1h(colorMode.l2_1);
        // Inline function 'kotlin.let' call
        var it = $composer_0.p1h();
        var tmp_0;
        if (invalid || it === Companion_getInstance().r1g_1) {
          var value = AppEntry$lambda$slambda_0(colorMode, null);
          $composer_0.q1h(value);
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
        var invalid_0 = $composer_1.r1h(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it_0 = $composer_1.p1h();
        var tmp_3;
        if (invalid_0 || it_0 === Companion_getInstance().r1g_1) {
          var value_0 = ComposableLambda$invoke$ref_10(dispatchReceiver);
          $composer_1.q1h(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Surface(tmp_2, null, null, null, tmp0, $composer_0, 24576, 14);
        tmp = Unit_instance;
      } else {
        $composer_0.j1h();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_11(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.u1v(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function AppEntry$lambda_0($content, $$changed) {
    return function ($composer, $force) {
      AppEntry($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
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
    ctx.l3m_1.y3n('html', initSiteStyles$lambda);
    registerStyleBase(ctx.l3m_1, 'body', initSiteStyles$lambda_0);
    var tmp = get_HorizontalDividerStyle();
    modifyStyleBase(ctx.m3m_1, tmp, VOID, initSiteStyles$lambda_1);
  }
  function HeadlineTextStyle$lambda($this$base) {
    _init_properties_AppStyles_kt__9fg0zz();
    return lineHeight(textAlign(letterSpacing(fontWeight(fontSize(Companion_instance_1, get_cssRem(2.5)), 700), get_cssRem(-0.02)), Companion_instance_3.s38()), 1.1);
  }
  function SubheadlineTextStyle$lambda($this$base) {
    _init_properties_AppStyles_kt__9fg0zz();
    return color(textAlign(fontWeight(fontSize(Companion_instance_1, get_cssRem(1.1)), 300), Companion_instance_3.s38()), Colors_instance.q3k());
  }
  function CircleButtonVariant$lambda($this$addVariantBase) {
    _init_properties_AppStyles_kt__9fg0zz();
    return borderRadius(padding(Companion_instance_1, get_px(0)), get_percent(50));
  }
  function UncoloredButtonVariant$lambda($this$addVariantBase) {
    _init_properties_AppStyles_kt__9fg0zz();
    return setVariable(Companion_instance_1, ButtonVars_getInstance().d3x(), Colors_instance.e3k());
  }
  function initSiteStyles$lambda($this$registerStyle) {
    _init_properties_AppStyles_kt__9fg0zz();
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = 'no-preference';
    var tmp = new MediaFeature('prefers-reduced-motion', tmp$ret$2);
    $this$registerStyle.e3o(tmp, initSiteStyles$lambda$lambda);
    return Unit_instance;
  }
  function initSiteStyles$lambda$lambda() {
    _init_properties_AppStyles_kt__9fg0zz();
    return scrollBehavior(Companion_instance_1, Companion_instance_2.e3b());
  }
  function initSiteStyles$lambda_0() {
    _init_properties_AppStyles_kt__9fg0zz();
    return fontWeight(letterSpacing(lineHeight(fontSize(fontFamily(Companion_instance_1, ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif']), get_px(16)), 1.6), get_cssRem(0.02)), 400);
  }
  function initSiteStyles$lambda_1($this$modifyStyleBase) {
    _init_properties_AppStyles_kt__9fg0zz();
    return color(fillMaxWidth(Companion_instance_1), Colors_instance.l3k());
  }
  var properties_initialized_AppStyles_kt_kq2bkd;
  function _init_properties_AppStyles_kt__9fg0zz() {
    if (!properties_initialized_AppStyles_kt_kq2bkd) {
      properties_initialized_AppStyles_kt_kq2bkd = true;
      var tmp = Companion_instance_4;
      HeadlineTextStyle = base(tmp, VOID, HeadlineTextStyle$lambda);
      var tmp_0 = Companion_instance_4;
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
    this.d4c_1 = nearBackground;
    this.e4c_1 = primaryText;
    this.f4c_1 = secondaryText;
    this.g4c_1 = border;
  }
  function SitePalettes() {
    SitePalettes_instance = this;
    this.h4c_1 = new SitePalette(Companion_instance_5.c3k(16119285), Colors_instance.g3k(), Companion_instance_5.c3k(6710886), Companion_instance_5.c3k(14737632));
    this.i4c_1 = new SitePalette(Companion_instance_5.c3k(1118481), Colors_instance.z3k(), Companion_instance_5.c3k(10066329), Companion_instance_5.c3k(3355443));
  }
  var SitePalettes_instance;
  function SitePalettes_getInstance() {
    if (SitePalettes_instance == null)
      new SitePalettes();
    return SitePalettes_instance;
  }
  function toSitePalette(_this__u8e3s4) {
    var tmp;
    switch (_this__u8e3s4.l2_1) {
      case 0:
        tmp = SitePalettes_getInstance().h4c_1;
        break;
      case 1:
        tmp = SitePalettes_getInstance().i4c_1;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function initTheme(ctx) {
    set_background(ctx.m3m_1.d3n_1.j3t_1, Colors_instance.z3k());
    set_color(ctx.m3m_1.d3n_1.j3t_1, Colors_instance.g3k());
    set_background(ctx.m3m_1.d3n_1.k3t_1, Colors_instance.g3k());
    set_color(ctx.m3m_1.d3n_1.k3t_1, Colors_instance.z3k());
  }
  function get_MarkdownStyle() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return MarkdownStyle;
  }
  var MarkdownStyle;
  function initMarkdownLayout(ctx) {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    var tmp0_safe_receiver = ensureNotNull(get_markdown(ctx)).n3u_1.fc('title');
    var title = tmp0_safe_receiver == null ? null : singleOrNull(tmp0_safe_receiver);
    // Inline function 'kotlin.require' call
    if (!!(title == null)) {
      var message = 'Markdown file must set "title" in frontmatter';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp0 = ctx.o3g_1;
    // Inline function 'com.varabyte.kobweb.core.data.add' call
    var value = new PageLayoutData(title);
    tmp0.j3g(getKClass(PageLayoutData), value);
  }
  function MarkdownLayout(content, $composer, $changed) {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.e1h(1434741169);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.u1h(content) ? 4 : 2);
    if ($composer_0.w1h(!(($dirty & 3) === 2), $dirty & 1)) {
      var tmp = get_MarkdownStyle();
      var tmp_0 = toAttrs(tmp, null, $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter(), 1);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-700990574, true, MarkdownLayout$lambda(content), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.r1h(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.p1h();
      var tmp_1;
      if (invalid || it === Companion_getInstance().r1g_1) {
        var value = ComposableLambda$invoke$ref_12(dispatchReceiver);
        $composer_1.q1h(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp_0, tmp0, $composer_0, 48, 0);
    } else {
      $composer_0.j1h();
    }
    var tmp0_safe_receiver = $composer_0.f1h();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y21(MarkdownLayout$lambda_0(content, $changed));
    }
  }
  function MarkdownStyle$lambda($this$CssStyle) {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    $this$CssStyle.b3o(MarkdownStyle$lambda$lambda);
    $this$CssStyle.d3o('h1', MarkdownStyle$lambda$lambda_0);
    $this$CssStyle.d3o('h2', MarkdownStyle$lambda$lambda_1);
    $this$CssStyle.d3o('h3', MarkdownStyle$lambda$lambda_2);
    $this$CssStyle.d3o('h4', MarkdownStyle$lambda$lambda_3);
    $this$CssStyle.d3o('ul', MarkdownStyle$lambda$lambda_4);
    $this$CssStyle.d3o(' :is(li,ol,ul)', MarkdownStyle$lambda$lambda_5);
    $this$CssStyle.d3o('code', MarkdownStyle$lambda$lambda_6($this$CssStyle));
    $this$CssStyle.d3o('pre', MarkdownStyle$lambda$lambda_7);
    $this$CssStyle.d3o('pre > code', MarkdownStyle$lambda$lambda_8($this$CssStyle));
    return Unit_instance;
  }
  function MarkdownStyle$lambda$lambda() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return fillMaxSize(Companion_instance_1);
  }
  function MarkdownStyle$lambda$lambda_0() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return lineHeight(margin(fontWeight(fontSize(Companion_instance_1, get_cssRem(3)), 400), VOID, VOID, get_cssRem(2.5)), 1.2);
  }
  function MarkdownStyle$lambda$lambda_1() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return margin_0(fontWeight(fontSize(Companion_instance_1, get_cssRem(3)), 300), get_cssRem(2));
  }
  function MarkdownStyle$lambda$lambda_2() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return margin_0(fontWeight(fontSize(Companion_instance_1, get_cssRem(2.4)), 300), get_cssRem(1.5));
  }
  function MarkdownStyle$lambda$lambda_3() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return margin(fontWeight_0(fontSize(Companion_instance_1, get_cssRem(1.2)), Companion_instance_6.n39()), get_cssRem(1), VOID, get_cssRem(0.5));
  }
  function MarkdownStyle$lambda$lambda_4() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return overflowWrap(fillMaxWidth(Companion_instance_1), Companion_instance_7.a3b());
  }
  function MarkdownStyle$lambda$lambda_5() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return margin(Companion_instance_1, VOID, VOID, get_cssRem(0.25));
  }
  function MarkdownStyle$lambda$lambda_6($this_CssStyle) {
    return function () {
      return fontWeight_0(color(Companion_instance_1, get_color(toPalette($this_CssStyle.j3p_1)).u3j().s3j(VOID, VOID, VOID, 0.8)), Companion_instance_6.n39());
    };
  }
  function MarkdownStyle$lambda$lambda_7() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return fillMaxWidth(margin(Companion_instance_1, get_cssRem(0.5), VOID, get_cssRem(2)));
  }
  function MarkdownStyle$lambda$lambda$lambda($this$overflow) {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    $this$overflow.n3l(Companion_instance_8.z3a());
    return Unit_instance;
  }
  function MarkdownStyle$lambda$lambda_8($this_CssStyle) {
    return function () {
      var tmp = Companion_instance_1;
      // Inline function 'org.jetbrains.compose.web.css.Companion.Block' call
      // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = backgroundColor(fillMaxWidth(display(tmp, 'block')), toSitePalette($this_CssStyle.j3p_1).d4c_1);
      var tmp_1 = get_px(1);
      // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_2 = fontSize(padding(borderRadius(border(tmp_0, tmp_1, 'solid', get_color(toPalette($this_CssStyle.j3p_1))), get_cssRem(0.25)), get_cssRem(0.5)), get_cssRem(1));
      return overflow(tmp_2, MarkdownStyle$lambda$lambda$lambda);
    };
  }
  function MarkdownLayout$lambda($content) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      $content($composer_0, 0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_12(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.x2n(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function MarkdownLayout$lambda_0($content, $$changed) {
    return function ($composer, $force) {
      MarkdownLayout($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
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
    this.j4c_1 = title;
  }
  function PageLayout(ctx, content, $composer, $changed) {
    _init_properties_PageLayout_kt__pf69s7();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.e1h(-1524997434);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.r1h(ctx) : $composer_0.u1h(ctx)) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.u1h(content) ? 32 : 16);
    if ($composer_0.w1h(!(($dirty & 19) === 18), $dirty & 1)) {
      // Inline function 'com.varabyte.kobweb.core.data.getValue' call
      var this_0 = ctx.p3f_1;
      var data = getValue(this_0, getKClass(PageLayoutData));
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.r1h(data);
      // Inline function 'kotlin.let' call
      var it = tmp0.p1h();
      var tmp;
      if (invalid || it === Companion_getInstance().r1g_1) {
        var value = PageLayout$slambda_0(data, null);
        tmp0.q1h(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp$ret$4 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      LaunchedEffect(data.j4c_1, tmp$ret$4, $composer_0, 0);
      var palette = toSitePalette(Companion_instance_0.p3l($composer_0, 6));
      var tmp_1 = backgroundColor(minHeight(fillMaxWidth(Companion_instance_1), get_vh(100)), palette.d4c_1);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_0 = this_1.p1h();
      var tmp_2;
      if (false || it_0 === Companion_getInstance().r1g_1) {
        var value_0 = PageLayout$lambda;
        this_1.q1h(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp$ret$8 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      var tmp_4 = gridTemplateRows(tmp_1, tmp$ret$8);
      var tmp_5 = Center_instance;
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-1278697728, true, PageLayout$lambda_0(content), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.r1h(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_1 = $composer_1.p1h();
      var tmp_6;
      if (invalid_0 || it_1 === Companion_getInstance().r1g_1) {
        var value_1 = ComposableLambda$invoke$ref_15(dispatchReceiver);
        $composer_1.q1h(value_1);
        tmp_6 = value_1;
      } else {
        tmp_6 = it_1;
      }
      var tmp_7 = tmp_6;
      var tmp0_0 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Box(tmp_4, tmp_5, null, tmp0_0, $composer_0, 3072 | com_varabyte_kobweb_compose_ui_Alignment_Center$stableprop_getter() << 3, 4);
    } else {
      $composer_0.j1h();
    }
    var tmp0_safe_receiver = $composer_0.f1h();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y21(PageLayout$lambda_1(ctx, content, $changed));
    }
  }
  function PageContentStyle$lambda($this$CssStyle) {
    _init_properties_PageLayout_kt__pf69s7();
    $this$CssStyle.b3o(PageContentStyle$lambda$lambda);
    var tmp = Breakpoint_MD_getInstance();
    $this$CssStyle.d3q(tmp, PageContentStyle$lambda$lambda_0);
    return Unit_instance;
  }
  function PageContentStyle$lambda$lambda() {
    _init_properties_PageLayout_kt__pf69s7();
    var tmp0_$receiver = fillMaxSize(Companion_instance_1);
    var tmp1_leftRight = get_cssRem(2);
    var tmp2_top = get_cssRem(2);
    return padding_0(tmp0_$receiver, tmp2_top, tmp1_leftRight);
  }
  function PageContentStyle$lambda$lambda_0() {
    _init_properties_PageLayout_kt__pf69s7();
    return maxWidth(Companion_instance_1, get_cssRem(70));
  }
  function PageLayout$slambda($data, resultContinuation) {
    this.s4c_1 = $data;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(PageLayout$slambda).d19 = function ($this$LaunchedEffect, $completion) {
    var tmp = this.e19($this$LaunchedEffect, $completion);
    tmp.h8_1 = Unit_instance;
    tmp.i8_1 = null;
    return tmp.n8();
  };
  protoOf(PageLayout$slambda).z8 = function (p1, $completion) {
    return this.d19((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(PageLayout$slambda).n8 = function () {
    var suspendResult = this.h8_1;
    $sm: do
      try {
        var tmp = this.f8_1;
        if (tmp === 0) {
          this.g8_1 = 1;
          document.title = this.s4c_1.j4c_1;
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
  protoOf(PageLayout$slambda).e19 = function ($this$LaunchedEffect, completion) {
    var i = new PageLayout$slambda(this.s4c_1, completion);
    i.t4c_1 = $this$LaunchedEffect;
    return i;
  };
  function PageLayout$slambda_0($data, resultContinuation) {
    var i = new PageLayout$slambda($data, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.d19($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function PageLayout$lambda($this$gridTemplateRows) {
    _init_properties_PageLayout_kt__pf69s7();
    $this$gridTemplateRows.u39(get_fr(1));
    $this$gridTemplateRows.t39($this$gridTemplateRows.s39());
    return Unit_instance;
  }
  function PageLayout$lambda$lambda$lambda($content, $this_Column) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      $content($this_Column, $composer_0, 0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_13(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.x2n(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function PageLayout$lambda$lambda($content) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 6) === 0) {
        $dirty = $dirty | ($composer_0.r1h($this$Column) ? 4 : 2);
        tmp = Unit_instance;
      }
      var tmp_0;
      if ($composer_0.w1h(!(($dirty & 19) === 18), $dirty & 1)) {
        NavHeader($composer_0, 0);
        var tmp_1 = get_PageContentStyle();
        var tmp_2 = toAttrs(tmp_1, null, $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter(), 1);
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-1274867254, true, PageLayout$lambda$lambda$lambda($content, $this$Column), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.r1h(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.p1h();
        var tmp_3;
        if (invalid || it === Companion_getInstance().r1g_1) {
          var value = ComposableLambda$invoke$ref_13(dispatchReceiver);
          $composer_1.q1h(value);
          tmp_3 = value;
        } else {
          tmp_3 = it;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Div(tmp_2, tmp0, $composer_0, 48, 0);
        tmp_0 = Unit_instance;
      } else {
        $composer_0.j1h();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_14(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.x2n(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function PageLayout$lambda_0($content) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.w1h(!(($changed & 17) === 16), $changed & 1)) {
        var tmp_0 = gridRow(fillMaxSize(Companion_instance_1), 1);
        var tmp_1 = CenterHorizontally_instance;
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-1017857879, true, PageLayout$lambda$lambda($content), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.r1h(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.p1h();
        var tmp_2;
        if (invalid || it === Companion_getInstance().r1g_1) {
          var value = ComposableLambda$invoke$ref_14(dispatchReceiver);
          $composer_1.q1h(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Column(tmp_0, null, tmp_1, null, tmp0, $composer_0, 24576 | com_varabyte_kobweb_compose_ui_Alignment_CenterHorizontally$stableprop_getter() << 6, 10);
        Footer(gridRow(fillMaxWidth(Companion_instance_1), 2), $composer_0, 0, 0);
        tmp = Unit_instance;
      } else {
        $composer_0.j1h();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_15(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.x2n(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function PageLayout$lambda_1($ctx, $content, $$changed) {
    return function ($composer, $force) {
      PageLayout($ctx, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
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
    $composer_0 = $composer_0.e1h(1501669913);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | (($default & 1) === 0 && $composer_0.u1h(projects_0._v) ? 4 : 2);
    if ($composer_0.w1h(!(($dirty & 3) === 2), $dirty & 1)) {
      $composer_0.c1h();
      if (($changed & 1) === 0 || $composer_0.u1g()) {
        if (!(($default & 1) === 0)) {
          projects_0._v = get_defaultProjects();
          $dirty = $dirty & -15;
        }
      } else {
        $composer_0.j1h();
        if (!(($default & 1) === 0))
          $dirty = $dirty & -15;
      }
      $composer_0.d1h();
      var tmp = padding_0(fillMaxWidth(Companion_instance_1), get_cssRem(4), VOID, get_cssRem(4));
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-981473022, true, BodyOfWorkSection$lambda(projects_0), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.r1h(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.p1h();
      var tmp_0;
      if (invalid || it === Companion_getInstance().r1g_1) {
        var value = ComposableLambda$invoke$ref_18(dispatchReceiver);
        $composer_1.q1h(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Column(tmp, null, null, null, tmp0, $composer_0, 24576, 14);
    } else {
      $composer_0.j1h();
    }
    var tmp0_safe_receiver = $composer_0.f1h();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y21(BodyOfWorkSection$lambda_0(projects_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_16(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.x2n(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$BodyOfWorkSectionKt$lambda$176729443$lambda($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    SpanText('Showcase', null, null, null, $composer_0, 6, 14);
    return Unit_instance;
  }
  function ComposableSingletons$BodyOfWorkSectionKt() {
    ComposableSingletons$BodyOfWorkSectionKt_instance = this;
    var tmp = this;
    tmp.u4c_1 = ComposableLambda$invoke$ref_16(composableLambdaInstance(176729443, false, ComposableSingletons$BodyOfWorkSectionKt$lambda$176729443$lambda));
  }
  var ComposableSingletons$BodyOfWorkSectionKt_instance;
  function ComposableSingletons$BodyOfWorkSectionKt_getInstance() {
    if (ComposableSingletons$BodyOfWorkSectionKt_instance == null)
      new ComposableSingletons$BodyOfWorkSectionKt();
    return ComposableSingletons$BodyOfWorkSectionKt_instance;
  }
  function BodyOfWorkGridStyle$lambda($this$base) {
    _init_properties_BodyOfWorkSection_kt__256nxz();
    var tmp = fillMaxWidth(Companion_instance_1);
    return gap(styleModifier(tmp, BodyOfWorkGridStyle$lambda$lambda), get_cssRem(3));
  }
  function BodyOfWorkGridStyle$lambda$lambda($this$styleModifier) {
    _init_properties_BodyOfWorkSection_kt__256nxz();
    $this$styleModifier.q32('display', 'grid');
    $this$styleModifier.q32('grid-template-columns', 'repeat(auto-fill, minmax(300px, 1fr))');
    return Unit_instance;
  }
  function BodyOfWorkSection$lambda$lambda($projects) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = $projects._v.i();
      while (_iterator__ex2g4s.j()) {
        var element = _iterator__ex2g4s.k();
        ProjectCard(element, $composer_0, org_alia_portfolio_models_Project$stableprop_getter());
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_17(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.x2n(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function BodyOfWorkSection$lambda($projects) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.w1h(!(($changed & 17) === 16), $changed & 1)) {
        Div(toAttrs_0(margin(toModifier(get_HeadlineTextStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter()), VOID, VOID, get_cssRem(2))), ComposableSingletons$BodyOfWorkSectionKt_getInstance().u4c_1, $composer_0, 48, 0);
        var tmp_0 = toAttrs_0(toModifier(get_BodyOfWorkGridStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter()));
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(2053918092, true, BodyOfWorkSection$lambda$lambda($projects), $composer_0, 54);
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
        Div(tmp_0, tmp0, $composer_0, 48, 0);
        tmp = Unit_instance;
      } else {
        $composer_0.j1h();
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
  function BodyOfWorkSection$lambda_0($projects, $$changed, $$default) {
    return function ($composer, $force) {
      BodyOfWorkSection($projects._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var properties_initialized_BodyOfWorkSection_kt_7mhktx;
  function _init_properties_BodyOfWorkSection_kt__256nxz() {
    if (!properties_initialized_BodyOfWorkSection_kt_7mhktx) {
      properties_initialized_BodyOfWorkSection_kt_7mhktx = true;
      var tmp = Companion_instance_4;
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
    $composer_0 = $composer_0.e1h(-1814856638);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.r1h(modifier_0._v) ? 4 : 2);
    if ($composer_0.w1h(!(($dirty & 3) === 2), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance_1;
      }
      var tmp = backgroundColor(toModifier(get_FooterStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter()).t3i(modifier_0._v), toSitePalette(Companion_instance_0.p3l($composer_0, 6)).d4c_1);
      var tmp_0 = Center_instance;
      Box(tmp, tmp_0, null, ComposableSingletons$FooterKt_getInstance().x4c_1, $composer_0, 3072 | com_varabyte_kobweb_compose_ui_Alignment_Center$stableprop_getter() << 3, 4);
    } else {
      $composer_0.j1h();
    }
    var tmp0_safe_receiver = $composer_0.f1h();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y21(Footer$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_19(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.x2n(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$FooterKt$lambda$_2027905342$lambda_24abas($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.w1h(!(($changed & 17) === 16), $changed & 1)) {
      var tmp = get_UndecoratedLinkVariant().j3q(get_UncoloredLinkVariant());
      Link('/', 'Hovedsiden', null, tmp, null, null, null, null, $composer_0, 54 | com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() << 9, 244);
      var tmp_0 = get_UndecoratedLinkVariant().j3q(get_UncoloredLinkVariant());
      Link('/about', 'Om', null, tmp_0, null, null, null, null, $composer_0, 54 | com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() << 9, 244);
      var tmp_1 = get_UndecoratedLinkVariant().j3q(get_UncoloredLinkVariant());
      Link('mailto:contact@example.com', 'Kontakt', null, tmp_1, null, null, null, null, $composer_0, 54 | com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() << 9, 244);
    } else {
      $composer_0.j1h();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_20(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.x2n(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$FooterKt$lambda$_731565723$lambda_nh12hf($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.w1h(!(($changed & 17) === 16), $changed & 1)) {
      var tmp = padding_0(gap(Companion_instance_1, get_cssRem(2)), VOID, VOID, get_cssRem(1));
      Row(tmp, null, null, null, ComposableSingletons$FooterKt_getInstance().v4c_1, $composer_0, 24576, 14);
      var tmp_0 = opacity(fontSize(Companion_instance_1, get_cssRem(0.8)), get_percent(50));
      SpanText('\xA9 2026 AI Ali. Alle rettigheter forbeholdt.', tmp_0, null, null, $composer_0, 6, 12);
    } else {
      $composer_0.j1h();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_21(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.x2n(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$FooterKt$lambda$1046018556$lambda($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.w1h(!(($changed & 17) === 16), $changed & 1)) {
      var tmp = maxWidth(fillMaxWidth(Companion_instance_1), get_cssRem(60));
      var tmp_0 = CenterHorizontally_instance;
      Column(tmp, null, tmp_0, null, ComposableSingletons$FooterKt_getInstance().w4c_1, $composer_0, 24576 | com_varabyte_kobweb_compose_ui_Alignment_CenterHorizontally$stableprop_getter() << 6, 10);
    } else {
      $composer_0.j1h();
    }
    return Unit_instance;
  }
  function ComposableSingletons$FooterKt() {
    ComposableSingletons$FooterKt_instance = this;
    var tmp = this;
    tmp.v4c_1 = ComposableLambda$invoke$ref_19(composableLambdaInstance(-2027905342, false, ComposableSingletons$FooterKt$lambda$_2027905342$lambda_24abas));
    var tmp_0 = this;
    tmp_0.w4c_1 = ComposableLambda$invoke$ref_20(composableLambdaInstance(-731565723, false, ComposableSingletons$FooterKt$lambda$_731565723$lambda_nh12hf));
    var tmp_1 = this;
    tmp_1.x4c_1 = ComposableLambda$invoke$ref_21(composableLambdaInstance(1046018556, false, ComposableSingletons$FooterKt$lambda$1046018556$lambda));
  }
  var ComposableSingletons$FooterKt_instance;
  function ComposableSingletons$FooterKt_getInstance() {
    if (ComposableSingletons$FooterKt_instance == null)
      new ComposableSingletons$FooterKt();
    return ComposableSingletons$FooterKt_instance;
  }
  function FooterStyle$lambda($this$base) {
    _init_properties_Footer_kt__fc6p2z();
    return padding_1(fillMaxWidth(Companion_instance_1), get_cssRem(2), get_cssRem(1));
  }
  function Footer$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      Footer($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var properties_initialized_Footer_kt_pg7k03;
  function _init_properties_Footer_kt__fc6p2z() {
    if (!properties_initialized_Footer_kt_pg7k03) {
      properties_initialized_Footer_kt_pg7k03 = true;
      var tmp = Companion_instance_4;
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
    $composer_0 = $composer_0.e1h(-169087508);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.r1h(videoUrl) ? 4 : 2);
    if ($composer_0.w1h(!(($dirty & 3) === 2), $dirty & 1)) {
      var tmp = height(fillMaxWidth(Companion_instance_1), get_vh(100));
      // Inline function 'org.jetbrains.compose.web.css.Companion.Relative' call
      // Inline function 'org.jetbrains.compose.web.css.Position' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$3 = 'relative';
      var tmp_0 = margin(position(tmp, tmp$ret$3), get_cssRem(-4));
      var tmp_1 = Center_instance;
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(1868370342, true, HeroSection$lambda(videoUrl), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.r1h(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.p1h();
      var tmp_2;
      if (invalid || it === Companion_getInstance().r1g_1) {
        var value = ComposableLambda$invoke$ref_26(dispatchReceiver);
        $composer_1.q1h(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Box(tmp_0, tmp_1, null, tmp0, $composer_0, 3072 | com_varabyte_kobweb_compose_ui_Alignment_Center$stableprop_getter() << 3, 4);
    } else {
      $composer_0.j1h();
    }
    var tmp0_safe_receiver = $composer_0.f1h();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y21(HeroSection$lambda_0(videoUrl, $changed));
    }
  }
  function ComposableLambda$invoke$ref_22(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.x2n(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$HeroSectionKt$lambda$249673712$lambda($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    SpanText('Visuell KI-Kreat\xF8r & Director', null, null, null, $composer_0, 6, 14);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_23(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.x2n(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$HeroSectionKt$lambda$_1823066215$lambda_c6tr1u($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    SpanText('Utforsker grensesnittet mellom kunstig intelligens og film.', null, null, null, $composer_0, 6, 14);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_24(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.x2n(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$HeroSectionKt$lambda$_1118580721$lambda_mxtqc4($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.w1h(!(($changed & 17) === 16), $changed & 1)) {
      var tmp = toModifier(get_HeadlineTextStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter());
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_0.p1h();
      var tmp_0;
      if (false || it === Companion_getInstance().r1g_1) {
        var value = ComposableSingletons$HeroSectionKt$lambda$_1118580721$lambda$lambda_ix6h35;
        $composer_0.q1h(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp$ret$3 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      Div(toAttrs_0(styleModifier(tmp, tmp$ret$3)), ComposableSingletons$HeroSectionKt_getInstance().y4c_1, $composer_0, 48, 0);
      var tmp_2 = toModifier(get_SubheadlineTextStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter());
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_0 = $composer_0.p1h();
      var tmp_3;
      if (false || it_0 === Companion_getInstance().r1g_1) {
        var value_0 = ComposableSingletons$HeroSectionKt$lambda$_1118580721$lambda$lambda_ix6h35_0;
        $composer_0.q1h(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp$ret$7 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      Div(toAttrs_0(color(styleModifier(tmp_2, tmp$ret$7), Colors_instance.z3k().s3j(VOID, VOID, VOID, 0.8))), ComposableSingletons$HeroSectionKt_getInstance().z4c_1, $composer_0, 48, 0);
    } else {
      $composer_0.j1h();
    }
    return Unit_instance;
  }
  function ComposableSingletons$HeroSectionKt$lambda$_1118580721$lambda$lambda_ix6h35($this$styleModifier) {
    $this$styleModifier.q32('text-align', 'center');
    return Unit_instance;
  }
  function ComposableSingletons$HeroSectionKt$lambda$_1118580721$lambda$lambda_ix6h35_0($this$styleModifier) {
    $this$styleModifier.q32('text-align', 'center');
    return Unit_instance;
  }
  function ComposableSingletons$HeroSectionKt() {
    ComposableSingletons$HeroSectionKt_instance = this;
    var tmp = this;
    tmp.y4c_1 = ComposableLambda$invoke$ref_22(composableLambdaInstance(249673712, false, ComposableSingletons$HeroSectionKt$lambda$249673712$lambda));
    var tmp_0 = this;
    tmp_0.z4c_1 = ComposableLambda$invoke$ref_23(composableLambdaInstance(-1823066215, false, ComposableSingletons$HeroSectionKt$lambda$_1823066215$lambda_c6tr1u));
    var tmp_1 = this;
    tmp_1.a4d_1 = ComposableLambda$invoke$ref_24(composableLambdaInstance(-1118580721, false, ComposableSingletons$HeroSectionKt$lambda$_1118580721$lambda_mxtqc4));
  }
  var ComposableSingletons$HeroSectionKt_instance;
  function ComposableSingletons$HeroSectionKt_getInstance() {
    if (ComposableSingletons$HeroSectionKt_instance == null)
      new ComposableSingletons$HeroSectionKt();
    return ComposableSingletons$HeroSectionKt_instance;
  }
  function HeroBackgroundStyle$lambda($this$base) {
    _init_properties_HeroSection_kt__ak5a5j();
    var tmp = Companion_instance_1;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Absolute' call
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'absolute';
    var tmp_0 = zIndex(height(width(left(top(position(tmp, tmp$ret$3), get_px(0)), get_percent(50)), get_vw(100)), get_vh(100)), 0);
    return styleModifier(tmp_0, HeroBackgroundStyle$lambda$lambda);
  }
  function HeroBackgroundStyle$lambda$lambda($this$styleModifier) {
    _init_properties_HeroSection_kt__ak5a5j();
    $this$styleModifier.q32('transform', 'translateX(-50%)');
    $this$styleModifier.q32('overflow', 'hidden');
    return Unit_instance;
  }
  function HeroSection$lambda$lambda$lambda$lambda($this$ref, it) {
    _init_properties_HeroSection_kt__ak5a5j();
    it.muted = true;
    // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
    return new HeroSection$$inlined$run$2$2$2$2$1();
  }
  function HeroSection$$inlined$run$2$2$2$2$1() {
  }
  protoOf(HeroSection$$inlined$run$2$2$2$2$1).kt = function () {
  };
  function HeroSection$lambda$lambda$lambda$lambda_0($this$style) {
    _init_properties_HeroSection_kt__ak5a5j();
    $this$style.q32('width', '100%');
    $this$style.q32('height', '100%');
    $this$style.q32('object-fit', 'cover');
    return Unit_instance;
  }
  function HeroSection$lambda$lambda$lambda($videoUrl) {
    return function ($this$Video) {
      $this$Video.y30('src', $videoUrl);
      $this$Video.y30('autoplay', '');
      $this$Video.y30('loop', '');
      $this$Video.y30('playsinline', '');
      $this$Video.y30('muted', '');
      $this$Video.d31(HeroSection$lambda$lambda$lambda$lambda);
      $this$Video.z30(HeroSection$lambda$lambda$lambda$lambda_0);
      return Unit_instance;
    };
  }
  function HeroSection$lambda$lambda($videoUrl) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.w1h(!(($changed & 17) === 16), $changed & 1)) {
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_0.r1h($videoUrl);
        // Inline function 'kotlin.let' call
        var it = $composer_0.p1h();
        var tmp_0;
        if (invalid || it === Companion_getInstance().r1g_1) {
          var value = HeroSection$lambda$lambda$lambda($videoUrl);
          $composer_0.q1h(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp_2 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        Video(tmp_2, null, $composer_0, 0, 2);
        var tmp_3 = backgroundColor(fillMaxSize(Companion_instance_1), Colors_instance.g3k().s3j(VOID, VOID, VOID, 0.5));
        Box(tmp_3, null, null, null, $composer_0, 0, 14);
        tmp = Unit_instance;
      } else {
        $composer_0.j1h();
        tmp = Unit_instance;
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
  function HeroSection$lambda($videoUrl) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.w1h(!(($changed & 17) === 16), $changed & 1)) {
        var tmp_0 = toModifier(get_HeroBackgroundStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter());
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(420003808, true, HeroSection$lambda$lambda($videoUrl), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.r1h(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.p1h();
        var tmp_1;
        if (invalid || it === Companion_getInstance().r1g_1) {
          var value = ComposableLambda$invoke$ref_25(dispatchReceiver);
          $composer_1.q1h(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Box(tmp_0, null, null, tmp0, $composer_0, 3072, 6);
        var tmp1_modifier = zIndex(color(gap(Companion_instance_1, get_cssRem(1)), Colors_instance.z3k()), 1);
        Column(tmp1_modifier, null, CenterHorizontally_instance, null, ComposableSingletons$HeroSectionKt_getInstance().a4d_1, $composer_0, 24576 | com_varabyte_kobweb_compose_ui_Alignment_CenterHorizontally$stableprop_getter() << 6, 10);
        tmp = Unit_instance;
      } else {
        $composer_0.j1h();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_26(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.x2n(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function HeroSection$lambda_0($videoUrl, $$changed) {
    return function ($composer, $force) {
      HeroSection($videoUrl, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var properties_initialized_HeroSection_kt_1pa7h7;
  function _init_properties_HeroSection_kt__ak5a5j() {
    if (!properties_initialized_HeroSection_kt_1pa7h7) {
      properties_initialized_HeroSection_kt_1pa7h7 = true;
      var tmp = Companion_instance_4;
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
    $composer_0 = $composer_0.e1h(-1057931682);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.r1h(path) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.r1h(text) ? 32 : 16);
    if ($composer_0.w1h(!(($dirty & 19) === 18), $dirty & 1)) {
      var tmp0_variant = get_UndecoratedLinkVariant().j3q(get_UncoloredLinkVariant());
      var tmp1_modifier = letterSpacing(fontWeight_0(Companion_instance_1, Companion_instance_6.m39()), get_px(1));
      Link(path, text, tmp1_modifier, tmp0_variant, null, null, null, null, $composer_0, 14 & $dirty | 112 & $dirty | com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() << 9, 240);
    } else {
      $composer_0.j1h();
    }
    var tmp0_safe_receiver = $composer_0.f1h();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y21(NavLink$lambda(path, text, $changed));
    }
  }
  function ColorModeButton($composer, $changed) {
    _init_properties_NavHeader_kt__vdotjy();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.e1h(-306286327);
    if ($composer_0.w1h(!($changed === 0), $changed & 1)) {
      var colorMode$delegate = Companion_instance_0.v3r($composer_0, 6);
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.r1h(colorMode$delegate);
      // Inline function 'kotlin.let' call
      var it = tmp0.p1h();
      var tmp;
      if (invalid || it === Companion_getInstance().r1g_1) {
        var value = ColorModeButton$lambda_1(colorMode$delegate);
        tmp0.q1h(value);
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
      var invalid_0 = $composer_1.r1h(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.p1h();
      var tmp_2;
      if (invalid_0 || it_0 === Companion_getInstance().r1g_1) {
        var value_0 = ComposableLambda$invoke$ref_30(dispatchReceiver);
        $composer_1.q1h(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0_0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      IconButton(tmp_1, tmp0_0, $composer_0, 48);
      var tmp_4 = Companion_instance_12.d2y();
      var tmp_5 = PopupPlacement_BottomRight_getInstance();
      Tooltip(tmp_4, 'Toggle color mode', null, null, tmp_5, false, null, null, 0, 0, null, null, $composer_0, 24624, 0, 4076);
    } else {
      $composer_0.j1h();
    }
    var tmp0_safe_receiver = $composer_0.f1h();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y21(ColorModeButton$lambda_3($changed));
    }
  }
  function NavHeader($composer, $changed) {
    _init_properties_NavHeader_kt__vdotjy();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.e1h(1839863153);
    if ($composer_0.w1h(!($changed === 0), $changed & 1)) {
      var tmp = toModifier(get_NavHeaderStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter());
      var tmp_0 = CenterVertically_instance;
      Row(tmp, null, tmp_0, null, ComposableSingletons$NavHeaderKt_getInstance().d4d_1, $composer_0, 24576 | com_varabyte_kobweb_compose_ui_Alignment_CenterVertically$stableprop_getter() << 6, 10);
    } else {
      $composer_0.j1h();
    }
    var tmp0_safe_receiver = $composer_0.f1h();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y21(NavHeader$lambda($changed));
    }
  }
  function ComposableLambda$invoke$ref_27(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.u1v(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function ComposableSingletons$NavHeaderKt$lambda$1370040000$lambda($composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.w1h(!(($changed & 3) === 2), $changed & 1)) {
      var tmp = letterSpacing(fontSize(fontWeight_0(Companion_instance_1, Companion_instance_6.m39()), get_cssRem(1.2)), get_px(2));
      SpanText('AI Ali', tmp, null, null, $composer_0, 6, 12);
    } else {
      $composer_0.j1h();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_28(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.x2n(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$NavHeaderKt$lambda$_344696213$lambda_ff4ye7($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.w1h(!(($changed & 17) === 16), $changed & 1)) {
      NavLink('mailto:contact@example.com', 'KONTAKT', $composer_0, 54);
      ColorModeButton($composer_0, 0);
    } else {
      $composer_0.j1h();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_29(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.x2n(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$NavHeaderKt$lambda$1599133006$lambda($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.w1h(!(($changed & 17) === 16), $changed & 1)) {
      var tmp0_variant = get_UndecoratedLinkVariant().j3q(get_UncoloredLinkVariant());
      var tmp1_modifier = fontSize(fontWeight_0(Companion_instance_1, Companion_instance_6.n39()), get_cssRem(1.5));
      Link_0('/', tmp1_modifier, tmp0_variant, null, null, null, null, ComposableSingletons$NavHeaderKt_getInstance().b4d_1, $composer_0, 12582918 | com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() << 6, 120);
      Spacer($composer_0, 0);
      var tmp = gap(Companion_instance_1, get_cssRem(2));
      var tmp_0 = CenterVertically_instance;
      Row(tmp, null, tmp_0, null, ComposableSingletons$NavHeaderKt_getInstance().c4d_1, $composer_0, 24576 | com_varabyte_kobweb_compose_ui_Alignment_CenterVertically$stableprop_getter() << 6, 10);
    } else {
      $composer_0.j1h();
    }
    return Unit_instance;
  }
  function ComposableSingletons$NavHeaderKt() {
    ComposableSingletons$NavHeaderKt_instance = this;
    var tmp = this;
    tmp.b4d_1 = ComposableLambda$invoke$ref_27(composableLambdaInstance(1370040000, false, ComposableSingletons$NavHeaderKt$lambda$1370040000$lambda));
    var tmp_0 = this;
    tmp_0.c4d_1 = ComposableLambda$invoke$ref_28(composableLambdaInstance(-344696213, false, ComposableSingletons$NavHeaderKt$lambda$_344696213$lambda_ff4ye7));
    var tmp_1 = this;
    tmp_1.d4d_1 = ComposableLambda$invoke$ref_29(composableLambdaInstance(1599133006, false, ComposableSingletons$NavHeaderKt$lambda$1599133006$lambda));
  }
  var ComposableSingletons$NavHeaderKt_instance;
  function ComposableSingletons$NavHeaderKt_getInstance() {
    if (ComposableSingletons$NavHeaderKt_instance == null)
      new ComposableSingletons$NavHeaderKt();
    return ComposableSingletons$NavHeaderKt_instance;
  }
  function NavHeaderStyle$lambda($this$base) {
    _init_properties_NavHeader_kt__vdotjy();
    return padding_1(fillMaxWidth(Companion_instance_1), get_cssRem(2), get_cssRem(1));
  }
  function NavLink$lambda($path, $text, $$changed) {
    return function ($composer, $force) {
      NavLink($path, $text, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ColorModeButton$lambda($colorMode$delegate) {
    _init_properties_NavHeader_kt__vdotjy();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('colorMode', KMutableProperty0, true);
    return $colorMode$delegate.t1();
  }
  function ColorModeButton$lambda_0($colorMode$delegate, _set____db54di) {
    _init_properties_NavHeader_kt__vdotjy();
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('colorMode', KMutableProperty0, true);
    $colorMode$delegate.b17(_set____db54di);
    return Unit_instance;
  }
  function ColorModeButton$lambda_1($colorMode$delegate) {
    return function () {
      ColorModeButton$lambda_0($colorMode$delegate, ColorModeButton$lambda($colorMode$delegate).s3l());
      return Unit_instance;
    };
  }
  function ColorModeButton$lambda_2($colorMode$delegate) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.w1h(!(($changed & 3) === 2), $changed & 1)) {
        var tmp_0;
        if (ColorModeButton$lambda($colorMode$delegate).w3r()) {
          $composer_0.y1g(801143162);
          MoonIcon(null, $composer_0, 0, 1);
          $composer_0.z1g();
          tmp_0 = Unit_instance;
        } else {
          $composer_0.y1g(801143673);
          SunIcon(null, $composer_0, 0, 1);
          $composer_0.z1g();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.j1h();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_30(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.u1v(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function ColorModeButton$lambda_3($$changed) {
    return function ($composer, $force) {
      ColorModeButton($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function NavHeader$lambda($$changed) {
    return function ($composer, $force) {
      NavHeader($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var properties_initialized_NavHeader_kt_f5zrgg;
  function _init_properties_NavHeader_kt__vdotjy() {
    if (!properties_initialized_NavHeader_kt_f5zrgg) {
      properties_initialized_NavHeader_kt_f5zrgg = true;
      var tmp = Companion_instance_4;
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
    $composer_0 = $composer_0.e1h(-708886402);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.r1h(project) : $composer_0.u1h(project)) ? 4 : 2);
    if ($composer_0.w1h(!(($dirty & 3) === 2), $dirty & 1)) {
      var tmp = '/project?id=' + project.e4d_1;
      var tmp_0 = toModifier(get_ProjectCardStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter());
      var tmp_1 = get_UndecoratedLinkVariant().j3q(get_UncoloredLinkVariant());
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-799118260, true, ProjectCard$lambda(project), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.r1h(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.p1h();
      var tmp_2;
      if (invalid || it === Companion_getInstance().r1g_1) {
        var value = ComposableLambda$invoke$ref_33(dispatchReceiver);
        $composer_1.q1h(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Link_0(tmp, tmp_0, tmp_1, null, null, null, null, tmp0, $composer_0, 12582912 | com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() << 6, 120);
    } else {
      $composer_0.j1h();
    }
    var tmp0_safe_receiver = $composer_0.f1h();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y21(ProjectCard$lambda_0(project, $changed));
    }
  }
  function ProjectCardStyle$lambda($this$CssStyle) {
    _init_properties_ProjectCard_kt__53lzmf();
    $this$CssStyle.b3o(ProjectCardStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle);
    $this$CssStyle.e3q(tmp, ProjectCardStyle$lambda$lambda_0);
    return Unit_instance;
  }
  function ProjectCardStyle$lambda$lambda() {
    _init_properties_ProjectCard_kt__53lzmf();
    var tmp = cursor(fillMaxWidth(Companion_instance_1), Companion_instance_13.h39());
    return styleModifier(tmp, ProjectCardStyle$lambda$lambda$lambda);
  }
  function ProjectCardStyle$lambda$lambda$lambda($this$styleModifier) {
    _init_properties_ProjectCard_kt__53lzmf();
    $this$styleModifier.q32('transition', 'transform 200ms');
    return Unit_instance;
  }
  function ProjectCardStyle$lambda$lambda_0() {
    _init_properties_ProjectCard_kt__53lzmf();
    return scale(Companion_instance_1, 1.02);
  }
  function ProjectCard$lambda$lambda$lambda($project) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      Text($project.f4d_1, $composer_0, 0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_31(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.x2n(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ProjectCard$lambda$lambda($project) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.w1h(!(($changed & 17) === 16), $changed & 1)) {
        var tmp_0 = objectFit(height(fillMaxWidth(Companion_instance_1), get_cssRem(20)), Companion_instance_14.t3a());
        Image($project.h4d_1, $project.f4d_1, tmp_0, null, null, null, null, null, null, null, $composer_0, 0, 1016);
        var tmp_1 = toAttrs_0(fontWeight_0(fontSize(Companion_instance_1, get_cssRem(1.2)), Companion_instance_6.l39()));
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-1465653950, true, ProjectCard$lambda$lambda$lambda($project), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.r1h(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.p1h();
        var tmp_2;
        if (invalid || it === Companion_getInstance().r1g_1) {
          var value = ComposableLambda$invoke$ref_31(dispatchReceiver);
          $composer_1.q1h(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Div(tmp_1, tmp0, $composer_0, 48, 0);
        tmp = Unit_instance;
      } else {
        $composer_0.j1h();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_32(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.x2n(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ProjectCard$lambda($project) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.w1h(!(($changed & 3) === 2), $changed & 1)) {
        var tmp_0 = gap(Companion_instance_1, get_cssRem(0.8));
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-69656061, true, ProjectCard$lambda$lambda($project), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.r1h(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.p1h();
        var tmp_1;
        if (invalid || it === Companion_getInstance().r1g_1) {
          var value = ComposableLambda$invoke$ref_32(dispatchReceiver);
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
  function ComposableLambda$invoke$ref_33(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.u1v(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function ProjectCard$lambda_0($project, $$changed) {
    return function ($composer, $force) {
      ProjectCard($project, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
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
    $composer_0 = $composer_0.e1h(-662575913);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.u1h(onClick) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.u1h(content) ? 32 : 16);
    if ($composer_0.w1h(!(($dirty & 19) === 18), $dirty & 1)) {
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it = tmp0.p1h();
      var tmp;
      if (invalid || it === Companion_getInstance().r1g_1) {
        var value = IconButton$lambda(onClick);
        tmp0.q1h(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp_1 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      var tmp_2 = setVariable(Companion_instance_1, ButtonVars_getInstance().h3x(), get_em(1));
      var tmp_3 = get_CircleButtonVariant().j3q(get_UncoloredButtonVariant());
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(1904128743, true, IconButton$lambda_0(content), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.r1h(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.p1h();
      var tmp_4;
      if (invalid_0 || it_0 === Companion_getInstance().r1g_1) {
        var value_0 = ComposableLambda$invoke$ref_34(dispatchReceiver);
        $composer_1.q1h(value_0);
        tmp_4 = value_0;
      } else {
        tmp_4 = it_0;
      }
      var tmp_5 = tmp_4;
      var tmp0_0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Button(tmp_1, tmp_2, tmp_3, null, false, null, null, null, null, tmp0_0, $composer_0, 805306368 | com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() << 6, 504);
    } else {
      $composer_0.j1h();
    }
    var tmp0_safe_receiver = $composer_0.f1h();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y21(IconButton$lambda_1(onClick, content, $changed));
    }
  }
  function IconButton$lambda($onClick) {
    return function (it) {
      $onClick();
      return Unit_instance;
    };
  }
  function IconButton$lambda_0($content) {
    return function ($this$Button, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.w1h(!(($changed & 17) === 16), $changed & 1)) {
        tmp = $content($composer_0, 0);
      } else {
        $composer_0.j1h();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_34(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.x2n(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function IconButton$lambda_1($onClick, $content, $$changed) {
    return function ($composer, $force) {
      IconButton($onClick, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var org_alia_portfolio_models_Project$stable;
  function Project(id, title, description, coverImage, mediaUrls) {
    mediaUrls = mediaUrls === VOID ? emptyList() : mediaUrls;
    this.e4d_1 = id;
    this.f4d_1 = title;
    this.g4d_1 = description;
    this.h4d_1 = coverImage;
    this.i4d_1 = mediaUrls;
  }
  protoOf(Project).toString = function () {
    return 'Project(id=' + this.e4d_1 + ', title=' + this.f4d_1 + ', description=' + this.g4d_1 + ', coverImage=' + this.h4d_1 + ', mediaUrls=' + toString(this.i4d_1) + ')';
  };
  protoOf(Project).hashCode = function () {
    var result = getStringHashCode(this.e4d_1);
    result = imul(result, 31) + getStringHashCode(this.f4d_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.g4d_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.h4d_1) | 0;
    result = imul(result, 31) + hashCode(this.i4d_1) | 0;
    return result;
  };
  protoOf(Project).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Project))
      return false;
    if (!(this.e4d_1 === other.e4d_1))
      return false;
    if (!(this.f4d_1 === other.f4d_1))
      return false;
    if (!(this.g4d_1 === other.g4d_1))
      return false;
    if (!(this.h4d_1 === other.h4d_1))
      return false;
    if (!equals(this.i4d_1, other.i4d_1))
      return false;
    return true;
  };
  function org_alia_portfolio_models_Project$stableprop_getter() {
    return org_alia_portfolio_models_Project$stable;
  }
  function initHomePage(ctx) {
    var tmp0 = ctx.o3g_1;
    // Inline function 'com.varabyte.kobweb.core.data.add' call
    var value = new PageLayoutData('Ali A. - Visuell KI-Kreat\xF8r');
    tmp0.j3g(getKClass(PageLayoutData), value);
  }
  function HomePage($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.e1h(241987027);
    if ($composer_0.w1h(!($changed === 0), $changed & 1)) {
      var tmp = gap(fillMaxWidth(Companion_instance_1), get_cssRem(4));
      Column(tmp, null, null, null, ComposableSingletons$IndexKt_getInstance().j4d_1, $composer_0, 24576, 14);
    } else {
      $composer_0.j1h();
    }
    var tmp0_safe_receiver = $composer_0.f1h();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y21(HomePage$lambda($changed));
    }
  }
  function ComposableLambda$invoke$ref_35(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.x2n(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$IndexKt$lambda$_1266561270$lambda_vtqxll($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.w1h(!(($changed & 17) === 16), $changed & 1)) {
      HeroSection('/hero_test.mp4', $composer_0, 6);
      BodyOfWorkSection(null, $composer_0, 0, 1);
    } else {
      $composer_0.j1h();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IndexKt() {
    ComposableSingletons$IndexKt_instance = this;
    var tmp = this;
    tmp.j4d_1 = ComposableLambda$invoke$ref_35(composableLambdaInstance(-1266561270, false, ComposableSingletons$IndexKt$lambda$_1266561270$lambda_vtqxll));
  }
  var ComposableSingletons$IndexKt_instance;
  function ComposableSingletons$IndexKt_getInstance() {
    if (ComposableSingletons$IndexKt_instance == null)
      new ComposableSingletons$IndexKt();
    return ComposableSingletons$IndexKt_instance;
  }
  function HomePage$lambda($$changed) {
    return function ($composer, $force) {
      HomePage($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function initProjectPage(ctx) {
    var tmp0 = ctx.o3g_1;
    // Inline function 'com.varabyte.kobweb.core.data.add' call
    var value = new PageLayoutData('Prosjekt Detaljer');
    tmp0.j3g(getKClass(PageLayoutData), value);
  }
  function ProjectPage($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.e1h(1840224864);
    if ($composer_0.w1h(!($changed === 0), $changed & 1)) {
      var ctx = rememberPageContext($composer_0, 0);
      var projectId = ctx.s3f().x3f_1.w1('id');
      // Inline function 'kotlin.collections.find' call
      var tmp0 = get_defaultProjects();
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var _iterator__ex2g4s = tmp0.i();
        while (_iterator__ex2g4s.j()) {
          var element = _iterator__ex2g4s.k();
          if (element.e4d_1 === projectId) {
            tmp$ret$1 = element;
            break $l$block;
          }
        }
        tmp$ret$1 = null;
      }
      var project = tmp$ret$1;
      var tmp = gap(padding_0(minHeight(fillMaxWidth(Companion_instance_1), get_vh(100)), get_cssRem(4), VOID, get_cssRem(4)), get_cssRem(4));
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-1890705207, true, ProjectPage$lambda(project), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.r1h(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.p1h();
      var tmp_0;
      if (invalid || it === Companion_getInstance().r1g_1) {
        var value = ComposableLambda$invoke$ref_41(dispatchReceiver);
        $composer_1.q1h(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Column(tmp, null, null, null, tmp0_0, $composer_0, 24576, 14);
    } else {
      $composer_0.j1h();
    }
    var tmp0_safe_receiver = $composer_0.f1h();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y21(ProjectPage$lambda_0($changed));
    }
  }
  function ComposableLambda$invoke$ref_36(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.x2n(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$IndexKt$lambda$_949469521$lambda_i6hofs($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    SpanText('Prosjektet ble ikke funnet.', null, null, null, $composer_0, 6, 14);
    return Unit_instance;
  }
  function ComposableSingletons$IndexKt_0() {
    ComposableSingletons$IndexKt_instance_0 = this;
    var tmp = this;
    tmp.k4d_1 = ComposableLambda$invoke$ref_36(composableLambdaInstance(-949469521, false, ComposableSingletons$IndexKt$lambda$_949469521$lambda_i6hofs));
  }
  var ComposableSingletons$IndexKt_instance_0;
  function ComposableSingletons$IndexKt_getInstance_0() {
    if (ComposableSingletons$IndexKt_instance_0 == null)
      new ComposableSingletons$IndexKt_0();
    return ComposableSingletons$IndexKt_instance_0;
  }
  function ProjectPage$lambda$lambda$lambda($project) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      SpanText($project.f4d_1, null, null, null, $composer_0, 0, 14);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_37(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.x2n(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ProjectPage$lambda$lambda$lambda_0($project) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      SpanText($project.g4d_1, null, null, null, $composer_0, 0, 14);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_38(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.x2n(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ProjectPage$lambda$lambda($project) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.w1h(!(($changed & 17) === 16), $changed & 1)) {
        var tmp_0 = toAttrs_0(toModifier(get_HeadlineTextStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter()));
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-1053833489, true, ProjectPage$lambda$lambda$lambda($project), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.r1h(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.p1h();
        var tmp_1;
        if (invalid || it === Companion_getInstance().r1g_1) {
          var value = ComposableLambda$invoke$ref_37(dispatchReceiver);
          $composer_1.q1h(value);
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
        var invalid_0 = $composer_2.r1h(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        var it_0 = $composer_2.p1h();
        var tmp_4;
        if (invalid_0 || it_0 === Companion_getInstance().r1g_1) {
          var value_0 = ComposableLambda$invoke$ref_38(dispatchReceiver_0);
          $composer_2.q1h(value_0);
          tmp_4 = value_0;
        } else {
          tmp_4 = it_0;
        }
        var tmp_5 = tmp_4;
        var tmp0_0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        sourceInformationMarkerEnd($composer_2);
        Div(tmp_3, tmp0_0, $composer_0, 48, 0);
        tmp = Unit_instance;
      } else {
        $composer_0.j1h();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_39(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.x2n(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ProjectPage$lambda$lambda_0($this$styleModifier) {
    $this$styleModifier.q32('border-radius', '0.5rem');
    return Unit_instance;
  }
  function ProjectPage$lambda$lambda$lambda_1($this$styleModifier) {
    $this$styleModifier.q32('border-radius', '0.5rem');
    return Unit_instance;
  }
  function ProjectPage$lambda$lambda_1($project) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.w1h(!(($changed & 17) === 16), $changed & 1)) {
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s = $project.i4d_1.i();
        while (_iterator__ex2g4s.j()) {
          var element = _iterator__ex2g4s.k();
          var tmp_0 = objectFit(fillMaxWidth(Companion_instance_1), Companion_instance_14.t3a());
          // Inline function 'androidx.compose.runtime.cache' call
          // Inline function 'kotlin.let' call
          var it = $composer_0.p1h();
          var tmp_1;
          if (false || it === Companion_getInstance().r1g_1) {
            var value = ProjectPage$lambda$lambda$lambda_1;
            $composer_0.q1h(value);
            tmp_1 = value;
          } else {
            tmp_1 = it;
          }
          var tmp_2 = tmp_1;
          var tmp$ret$3 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
          var tmp_3 = styleModifier(tmp_0, tmp$ret$3);
          Image_0(element, tmp_3, null, null, null, null, null, null, null, null, $composer_0, 0, 1020);
        }
        tmp = Unit_instance;
      } else {
        $composer_0.j1h();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_40(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.x2n(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ProjectPage$lambda($project) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.w1h(!(($changed & 17) === 16), $changed & 1)) {
        var tmp_0;
        if ($project == null) {
          $composer_0.y1g(-1797666341);
          Div(toAttrs_0(color(fontSize(Companion_instance_1, get_cssRem(2)), Colors_instance.z3k())), ComposableSingletons$IndexKt_getInstance_0().k4d_1, $composer_0, 48, 0);
          $composer_0.z1g();
          tmp_0 = Unit_instance;
        } else {
          $composer_0.y1g(-1797469305);
          var tmp_1 = gap(Companion_instance_1, get_cssRem(1));
          // Inline function 'kotlin.run' call
          var dispatchReceiver = rememberComposableLambda(-1049049458, true, ProjectPage$lambda$lambda($project), $composer_0, 54);
          // Inline function 'androidx.compose.runtime.remember' call
          var $composer_1 = $composer_0;
          sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid = $composer_1.r1h(dispatchReceiver);
          // Inline function 'kotlin.let' call
          var it = $composer_1.p1h();
          var tmp_2;
          if (invalid || it === Companion_getInstance().r1g_1) {
            var value = ComposableLambda$invoke$ref_39(dispatchReceiver);
            $composer_1.q1h(value);
            tmp_2 = value;
          } else {
            tmp_2 = it;
          }
          var tmp_3 = tmp_2;
          var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
          sourceInformationMarkerEnd($composer_1);
          Column(tmp_1, null, null, null, tmp0, $composer_0, 24576, 14);
          var tmp_4 = objectFit(height(fillMaxWidth(Companion_instance_1), get_vh(60)), Companion_instance_14.t3a());
          // Inline function 'androidx.compose.runtime.cache' call
          // Inline function 'kotlin.let' call
          var it_0 = $composer_0.p1h();
          var tmp_5;
          if (false || it_0 === Companion_getInstance().r1g_1) {
            var value_0 = ProjectPage$lambda$lambda_0;
            $composer_0.q1h(value_0);
            tmp_5 = value_0;
          } else {
            tmp_5 = it_0;
          }
          var tmp_6 = tmp_5;
          var tmp$ret$10 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
          var tmp_7 = styleModifier(tmp_4, tmp$ret$10);
          Image($project.h4d_1, $project.f4d_1, tmp_7, null, null, null, null, null, null, null, $composer_0, 0, 1016);
          // Inline function 'kotlin.collections.isNotEmpty' call
          if (!$project.i4d_1.l()) {
            $composer_0.y1g(-1796646038);
            var tmp_8 = gap(Companion_instance_1, get_cssRem(2));
            // Inline function 'kotlin.run' call
            var dispatchReceiver_0 = rememberComposableLambda(-75483757, true, ProjectPage$lambda$lambda_1($project), $composer_0, 54);
            // Inline function 'androidx.compose.runtime.remember' call
            var $composer_2 = $composer_0;
            sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
            // Inline function 'androidx.compose.runtime.cache' call
            var invalid_0 = $composer_2.r1h(dispatchReceiver_0);
            // Inline function 'kotlin.let' call
            var it_1 = $composer_2.p1h();
            var tmp_9;
            if (invalid_0 || it_1 === Companion_getInstance().r1g_1) {
              var value_1 = ComposableLambda$invoke$ref_40(dispatchReceiver_0);
              $composer_2.q1h(value_1);
              tmp_9 = value_1;
            } else {
              tmp_9 = it_1;
            }
            var tmp_10 = tmp_9;
            var tmp0_0 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
            sourceInformationMarkerEnd($composer_2);
            Column(tmp_8, null, null, null, tmp0_0, $composer_0, 24576, 14);
            $composer_0.z1g();
          } else {
            $composer_0.y1g(-1796262599);
            $composer_0.z1g();
          }
          $composer_0.z1g();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.j1h();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_41(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.x2n(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ProjectPage$lambda_0($$changed) {
    return function ($composer, $force) {
      ProjectPage($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  //region block: init
  org_alia_portfolio_SitePalette$stable = 8;
  org_alia_portfolio_SitePalettes$stable = 8;
  org_alia_portfolio_models_Project$stable = 8;
  //endregion
  mainWrapper();
  return _;
}));

//# sourceMappingURL=portfolio.js.map
