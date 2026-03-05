(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kobweb-frontend-silk-widgets.js', './kobweb-frontend-compose-html-ext.js', './kotlin-kotlin-stdlib.js', './kobweb-frontend-kobweb-compose.js', './html-html-core.js', './kobweb-frontend-silk-foundation.js', './androidx-compose-runtime-runtime.js', './kobweb-frontend-kobweb-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kobweb-frontend-silk-widgets.js'), require('./kobweb-frontend-compose-html-ext.js'), require('./kotlin-kotlin-stdlib.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./html-html-core.js'), require('./kobweb-frontend-silk-foundation.js'), require('./androidx-compose-runtime-runtime.js'), require('./kobweb-frontend-kobweb-core.js'));
  else {
    if (typeof globalThis['kobweb-frontend-silk-widgets'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'kobweb-frontend-silk-widgets' was not found. Please, check whether 'kobweb-frontend-silk-widgets' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof globalThis['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof globalThis['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof globalThis['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof globalThis['kobweb-frontend-silk-foundation'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'kobweb-frontend-silk-foundation' was not found. Please, check whether 'kobweb-frontend-silk-foundation' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof globalThis['androidx-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'androidx-compose-runtime-runtime' was not found. Please, check whether 'androidx-compose-runtime-runtime' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof globalThis['kobweb-frontend-kobweb-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'kobweb-frontend-kobweb-core' was not found. Please, check whether 'kobweb-frontend-kobweb-core' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    globalThis['kobweb-frontend-silk-widgets-kobweb'] = factory(typeof globalThis['kobweb-frontend-silk-widgets-kobweb'] === 'undefined' ? {} : globalThis['kobweb-frontend-silk-widgets-kobweb'], globalThis['kobweb-frontend-silk-widgets'], globalThis['kobweb-frontend-compose-html-ext'], globalThis['kotlin-kotlin-stdlib'], globalThis['kobweb-frontend-kobweb-compose'], globalThis['html-html-core'], globalThis['kobweb-frontend-silk-foundation'], globalThis['androidx-compose-runtime-runtime'], globalThis['kobweb-frontend-kobweb-core']);
  }
}(function (_, kotlin_com_varabyte_kobweb_silk_widgets, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_kotlin, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_silk_foundation, kotlin_androidx_compose_runtime_runtime, kotlin_com_varabyte_kobweb_kobweb_core) {
  'use strict';
  //region block: imports
  var get_BorderColorVar = kotlin_com_varabyte_kobweb_silk_widgets.$_$.j;
  var StyleVariable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h;
  var KProperty1 = kotlin_kotlin.$_$.p8;
  var getPropertyCallableRef = kotlin_kotlin.$_$.j7;
  var protoOf = kotlin_kotlin.$_$.c8;
  var initMetadataForObject = kotlin_kotlin.$_$.r7;
  var Companion_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v3;
  var Companion_instance_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.j3;
  var listStyle = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r1;
  var Companion_instance_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.r3;
  var textAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w2;
  var get_cssRem = kotlin_org_jetbrains_compose_html_html_core.$_$.r1;
  var padding = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m2;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.y2;
  var borderRadius = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p;
  var Companion_instance_2 = kotlin_org_jetbrains_compose_html_html_core.$_$.l;
  var border = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r;
  var Companion_instance_3 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.g2;
  var VOID = kotlin_kotlin.$_$.c;
  var base = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a1;
  var addVariantBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.w;
  var Unit_instance = kotlin_kotlin.$_$.e2;
  var com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter = kotlin_com_varabyte_kobweb_silk_foundation.$_$.c1;
  var com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.m2;
  var Companion_instance_4 = kotlin_org_jetbrains_compose_html_html_core.$_$.i;
  var display = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b1;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m3;
  var rememberComposableLambda = kotlin_androidx_compose_runtime_runtime.$_$.b;
  var sourceInformationMarkerStart = kotlin_androidx_compose_runtime_runtime.$_$.u;
  var Companion_getInstance = kotlin_androidx_compose_runtime_runtime.$_$.f1;
  var THROW_CCE = kotlin_kotlin.$_$.ya;
  var sourceInformationMarkerEnd = kotlin_androidx_compose_runtime_runtime.$_$.t;
  var Div = kotlin_org_jetbrains_compose_html_html_core.$_$.l3;
  var Companion_instance_5 = kotlin_com_varabyte_kobweb_kobweb_core.$_$.l;
  var com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b1;
  var toModifier = kotlin_com_varabyte_kobweb_silk_foundation.$_$.g1;
  var Img = kotlin_org_jetbrains_compose_html_html_core.$_$.n3;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.w2;
  var width = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f3;
  var Companion_instance_6 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.k3;
  var objectFit = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c2;
  var updateChangedFlags = kotlin_androidx_compose_runtime_runtime.$_$.z;
  var registerRefScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.p2;
  var CssStyle = kotlin_com_varabyte_kobweb_silk_foundation.$_$.u;
  var StyleVariable_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g;
  var Anchor = kotlin_com_varabyte_kobweb_kobweb_core.$_$.f;
  var get_link = kotlin_com_varabyte_kobweb_silk_foundation.$_$.o;
  var get_visited = kotlin_com_varabyte_kobweb_silk_foundation.$_$.r;
  var get_hover = kotlin_com_varabyte_kobweb_silk_foundation.$_$.n;
  var Companion_instance_7 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.s3;
  var textDecorationLine = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x2;
  var color = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z;
  var get_ColorVar = kotlin_com_varabyte_kobweb_silk_widgets.$_$.k;
  var Text = kotlin_org_jetbrains_compose_html_html_core.$_$.r3;
  var registerRefScope_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.q2;
  var addVariant = kotlin_com_varabyte_kobweb_silk_foundation.$_$.x;
  var Colors_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r3;
  var get_entries = kotlin_com_varabyte_kobweb_silk_foundation.$_$.o1;
  var get_cssClass = kotlin_com_varabyte_kobweb_silk_foundation.$_$.p1;
  var registerStyleBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.e;
  var toPalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.n1;
  var setVariable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t2;
  var ColorGroup = kotlin_com_varabyte_kobweb_silk_foundation.$_$.j1;
  var KMutableProperty1 = kotlin_kotlin.$_$.n8;
  var initMetadataForClass = kotlin_kotlin.$_$.m7;
  var MutablePalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.k1;
  var com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup$stableprop_getter = kotlin_com_varabyte_kobweb_silk_foundation.$_$.l1;
  var com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter = kotlin_com_varabyte_kobweb_silk_foundation.$_$.m1;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(TocVars, 'TocVars');
  initMetadataForObject(LinkVars, 'LinkVars');
  initMetadataForClass(MutableLink, 'MutableLink', VOID, ColorGroup);
  //endregion
  function get_TocStyle() {
    _init_properties_Toc_kt__9n5312();
    return TocStyle;
  }
  var TocStyle;
  function get_TocBorderedVariant() {
    _init_properties_Toc_kt__9n5312();
    return TocBorderedVariant;
  }
  var TocBorderedVariant;
  var com_varabyte_kobweb_silk_components_document_TocVars$stable;
  function TocVars$_get_BorderColor_$ref_d3lohz() {
    return function (p0) {
      return p0.x3u();
    };
  }
  function TocVars() {
    TocVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().m3b();
    tmp.d4b_1 = StyleVariable(tmp0_defaultFallback, 'silk');
  }
  protoOf(TocVars).x3u = function () {
    var tmp = KProperty1;
    return this.d4b_1.s3b(this, getPropertyCallableRef('BorderColor', 1, tmp, TocVars$_get_BorderColor_$ref_d3lohz(), null));
  };
  var TocVars_instance;
  function TocVars_getInstance() {
    if (TocVars_instance == null)
      new TocVars();
    return TocVars_instance;
  }
  function TocStyle$lambda($this$base) {
    _init_properties_Toc_kt__9n5312();
    return padding(textAlign(listStyle(Companion_instance, Companion_instance_0.j39()), Companion_instance_1.s38()), get_cssRem(0));
  }
  function TocBorderedVariant$lambda($this$addVariantBase) {
    _init_properties_Toc_kt__9n5312();
    var tmp = borderRadius(Companion_instance, get_px(5));
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return padding(border(tmp, tmp_0, 'solid', TocVars_getInstance().x3u().m3b()), get_cssRem(1));
  }
  var properties_initialized_Toc_kt_t9o4p4;
  function _init_properties_Toc_kt__9n5312() {
    if (!properties_initialized_Toc_kt_t9o4p4) {
      properties_initialized_Toc_kt_t9o4p4 = true;
      var tmp = Companion_instance_3;
      TocStyle = base(tmp, VOID, TocStyle$lambda);
      var tmp_0 = get_TocStyle();
      TocBorderedVariant = addVariantBase(tmp_0, VOID, TocBorderedVariant$lambda);
      com_varabyte_kobweb_silk_components_document_TocVars$stable = 8;
    }
  }
  function get_ImageStyle() {
    _init_properties_Image_kt__h9v8mh();
    return ImageStyle;
  }
  var ImageStyle;
  function get_FitWidthImageVariant() {
    _init_properties_Image_kt__h9v8mh();
    return FitWidthImageVariant;
  }
  var FitWidthImageVariant;
  function Image(src, description, modifier, variant, width, height, loading, decoding, fetchPriority, ref, $composer, $changed, $default) {
    _init_properties_Image_kt__h9v8mh();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var width_0 = {_v: width};
    var height_0 = {_v: height};
    var loading_0 = {_v: loading};
    var decoding_0 = {_v: decoding};
    var fetchPriority_0 = {_v: fetchPriority};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.e1h(-587079072);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.r1h(src) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.r1h(description) ? 32 : 16);
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
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.r1h(width_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.r1h(height_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0) {
      var tmp;
      var tmp_0 = $composer_0;
      var tmpEnum = loading_0._v;
      if (tmp_0.t1h(tmpEnum == null ? -1 : tmpEnum.l2_1)) {
        tmp = 1048576;
      } else {
        tmp = 524288;
      }
      $dirty = $dirty | tmp;
    }
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 12582912) === 0) {
      var tmp_1;
      var tmp_2 = $composer_0;
      var tmpEnum_0 = decoding_0._v;
      if (tmp_2.t1h(tmpEnum_0 == null ? -1 : tmpEnum_0.l2_1)) {
        tmp_1 = 8388608;
      } else {
        tmp_1 = 4194304;
      }
      $dirty = $dirty | tmp_1;
    }
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 100663296) === 0) {
      var tmp_3;
      var tmp_4 = $composer_0;
      var tmpEnum_1 = fetchPriority_0._v;
      if (tmp_4.t1h(tmpEnum_1 == null ? -1 : tmpEnum_1.l2_1)) {
        tmp_3 = 67108864;
      } else {
        tmp_3 = 33554432;
      }
      $dirty = $dirty | tmp_3;
    }
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 805306368) === 0)
      $dirty = $dirty | ((($changed & 1073741824) === 0 ? $composer_0.r1h(ref_0._v) : $composer_0.u1h(ref_0._v)) ? 536870912 : 268435456);
    if ($composer_0.w1h(!(($dirty & 306783379) === 306783378), $dirty & 1)) {
      if (!(($default & 4) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 8) === 0)) {
        variant_0._v = null;
      }
      if (!(($default & 16) === 0)) {
        width_0._v = null;
      }
      if (!(($default & 32) === 0)) {
        height_0._v = null;
      }
      if (!(($default & 64) === 0)) {
        loading_0._v = null;
      }
      if (!(($default & 128) === 0)) {
        decoding_0._v = null;
      }
      if (!(($default & 256) === 0)) {
        fetchPriority_0._v = null;
      }
      if (!(($default & 512) === 0)) {
        ref_0._v = null;
      }
      Image_0(src, modifier_0._v, variant_0._v, width_0._v, height_0._v, description, loading_0._v, decoding_0._v, fetchPriority_0._v, ref_0._v, $composer_0, 14 & $dirty | 112 & $dirty >> 3 | com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() << 6 | 896 & $dirty >> 3 | 7168 & $dirty >> 3 | 57344 & $dirty >> 3 | 458752 & $dirty << 12 | 3670016 & $dirty | 29360128 & $dirty | 234881024 & $dirty | com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter() << 27 | 1879048192 & $dirty, 0);
    } else {
      $composer_0.j1h();
    }
    var tmp0_safe_receiver = $composer_0.f1h();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y21(Image$lambda(src, description, modifier_0, variant_0, width_0, height_0, loading_0, decoding_0, fetchPriority_0, ref_0, $changed, $default));
    }
  }
  function Image_0(src, modifier, variant, width, height, alt, loading, decoding, fetchPriority, ref, $composer, $changed, $default) {
    _init_properties_Image_kt__h9v8mh();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var width_0 = {_v: width};
    var height_0 = {_v: height};
    var alt_0 = {_v: alt};
    var loading_0 = {_v: loading};
    var decoding_0 = {_v: decoding};
    var fetchPriority_0 = {_v: fetchPriority};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.e1h(-211707950);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.r1h(src) ? 4 : 2);
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
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.r1h(width_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.r1h(height_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.r1h(alt_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0) {
      var tmp;
      var tmp_0 = $composer_0;
      var tmpEnum = loading_0._v;
      if (tmp_0.t1h(tmpEnum == null ? -1 : tmpEnum.l2_1)) {
        tmp = 1048576;
      } else {
        tmp = 524288;
      }
      $dirty = $dirty | tmp;
    }
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 12582912) === 0) {
      var tmp_1;
      var tmp_2 = $composer_0;
      var tmpEnum_0 = decoding_0._v;
      if (tmp_2.t1h(tmpEnum_0 == null ? -1 : tmpEnum_0.l2_1)) {
        tmp_1 = 8388608;
      } else {
        tmp_1 = 4194304;
      }
      $dirty = $dirty | tmp_1;
    }
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 100663296) === 0) {
      var tmp_3;
      var tmp_4 = $composer_0;
      var tmpEnum_1 = fetchPriority_0._v;
      if (tmp_4.t1h(tmpEnum_1 == null ? -1 : tmpEnum_1.l2_1)) {
        tmp_3 = 67108864;
      } else {
        tmp_3 = 33554432;
      }
      $dirty = $dirty | tmp_3;
    }
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 805306368) === 0)
      $dirty = $dirty | ((($changed & 1073741824) === 0 ? $composer_0.r1h(ref_0._v) : $composer_0.u1h(ref_0._v)) ? 536870912 : 268435456);
    if ($composer_0.w1h(!(($dirty & 306783379) === 306783378), $dirty & 1)) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 4) === 0)) {
        variant_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        width_0._v = null;
      }
      if (!(($default & 16) === 0)) {
        height_0._v = null;
      }
      if (!(($default & 32) === 0)) {
        alt_0._v = '';
      }
      if (!(($default & 64) === 0)) {
        loading_0._v = null;
      }
      if (!(($default & 128) === 0)) {
        decoding_0._v = null;
      }
      if (!(($default & 256) === 0)) {
        fetchPriority_0._v = null;
      }
      if (!(($default & 512) === 0)) {
        ref_0._v = null;
      }
      if (!(ref_0._v == null)) {
        $composer_0.y1g(-1979167271);
        var tmp_5 = Companion_instance;
        // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
        // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_6 = toAttrs(display(tmp_5, 'none'));
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-1360541896, true, Image$lambda_0(ref_0), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.r1h(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.p1h();
        var tmp_7;
        if (invalid || it === Companion_getInstance().r1g_1) {
          var value = ComposableLambda$invoke$ref(dispatchReceiver);
          $composer_1.q1h(value);
          tmp_7 = value;
        } else {
          tmp_7 = it;
        }
        var tmp_8 = tmp_7;
        var tmp0 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Div(tmp_6, tmp0, $composer_0, 48, 0);
        $composer_0.z1g();
      } else {
        $composer_0.y1g(-1979022160);
        $composer_0.z1g();
      }
      var tmp_9 = Companion_instance_5.w3g(src);
      var tmp_10 = alt_0._v;
      var tmp_11 = toModifier(get_ImageStyle(), [variant_0._v], $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter() | com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() << 3).t3i(modifier_0._v);
      var tmp0_0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = !!(!!(!!(!!(($dirty & 7168) === 2048 | ($dirty & 57344) === 16384) | ($dirty & 3670016) === 1048576) | ($dirty & 29360128) === 8388608) | ($dirty & 234881024) === 67108864);
      // Inline function 'kotlin.let' call
      var it_0 = tmp0_0.p1h();
      var tmp_12;
      if (invalid_0 || it_0 === Companion_getInstance().r1g_1) {
        var value_0 = Image$lambda_1(width_0, height_0, loading_0, decoding_0, fetchPriority_0);
        tmp0_0.q1h(value_0);
        tmp_12 = value_0;
      } else {
        tmp_12 = it_0;
      }
      var tmp_13 = tmp_12;
      var tmp$ret$14 = (tmp_13 == null ? true : !(tmp_13 == null)) ? tmp_13 : THROW_CCE();
      Img(tmp_9, tmp_10, toAttrs(tmp_11, tmp$ret$14), $composer_0, 112 & $dirty >> 12, 0);
    } else {
      $composer_0.j1h();
    }
    var tmp0_safe_receiver = $composer_0.f1h();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y21(Image$lambda_2(src, modifier_0, variant_0, width_0, height_0, alt_0, loading_0, decoding_0, fetchPriority_0, ref_0, $changed, $default));
    }
  }
  function ImageStyle$lambda($this$CssStyle) {
    _init_properties_Image_kt__h9v8mh();
    return Unit_instance;
  }
  function FitWidthImageVariant$lambda($this$addVariantBase) {
    _init_properties_Image_kt__h9v8mh();
    return objectFit(width(Companion_instance, get_percent(100)), Companion_instance_6.u3a());
  }
  function Image$lambda($src, $description, $modifier, $variant, $width, $height, $loading, $decoding, $fetchPriority, $ref, $$changed, $$default) {
    return function ($composer, $force) {
      Image($src, $description, $modifier._v, $variant._v, $width._v, $height._v, $loading._v, $decoding._v, $fetchPriority._v, $ref._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Image$lambda$lambda(it) {
    _init_properties_Image_kt__h9v8mh();
    var tmp = it.nextSibling;
    return tmp instanceof HTMLImageElement ? tmp : THROW_CCE();
  }
  function Image$lambda_0($ref) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp = $ref._v;
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_0.p1h();
      var tmp_0;
      if (false || it === Companion_getInstance().r1g_1) {
        var value = Image$lambda$lambda;
        $composer_0.q1h(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp$ret$3 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      registerRefScope($this$Div, tmp, tmp$ret$3, $composer_0, 384 | 14 & $changed | com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter() << 3);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.x2n(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function Image$lambda_1($width, $height, $loading, $decoding, $fetchPriority) {
    return function ($this$toAttrs) {
      var tmp;
      if (!($width._v == null)) {
        $this$toAttrs.y30('width', $width._v.toString());
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!($height._v == null)) {
        $this$toAttrs.y30('height', $height._v.toString());
        tmp_0 = Unit_instance;
      }
      var tmp_1;
      if (!($loading._v == null)) {
        $this$toAttrs.y30('loading', $loading._v.toString());
        tmp_1 = Unit_instance;
      }
      var tmp_2;
      if (!($decoding._v == null)) {
        $this$toAttrs.y30('decoding', $decoding._v.toString());
        tmp_2 = Unit_instance;
      }
      var tmp_3;
      if (!($fetchPriority._v == null)) {
        $this$toAttrs.y30('fetchpriority', $fetchPriority._v.toString());
        tmp_3 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function Image$lambda_2($src, $modifier, $variant, $width, $height, $alt, $loading, $decoding, $fetchPriority, $ref, $$changed, $$default) {
    return function ($composer, $force) {
      Image_0($src, $modifier._v, $variant._v, $width._v, $height._v, $alt._v, $loading._v, $decoding._v, $fetchPriority._v, $ref._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var properties_initialized_Image_kt_7kjzpx;
  function _init_properties_Image_kt__h9v8mh() {
    if (!properties_initialized_Image_kt_7kjzpx) {
      properties_initialized_Image_kt_7kjzpx = true;
      ImageStyle = CssStyle(VOID, ImageStyle$lambda);
      var tmp = get_ImageStyle();
      FitWidthImageVariant = addVariantBase(tmp, VOID, FitWidthImageVariant$lambda);
    }
  }
  function get_LinkStyle() {
    _init_properties_Link_kt__dm1ox2();
    return LinkStyle;
  }
  var LinkStyle;
  function get_UndecoratedLinkVariant() {
    _init_properties_Link_kt__dm1ox2();
    return UndecoratedLinkVariant;
  }
  var UndecoratedLinkVariant;
  function get_UncoloredLinkVariant() {
    _init_properties_Link_kt__dm1ox2();
    return UncoloredLinkVariant;
  }
  var UncoloredLinkVariant;
  function get_AlwaysUnderlinedLinkVariant() {
    _init_properties_Link_kt__dm1ox2();
    return AlwaysUnderlinedLinkVariant;
  }
  var AlwaysUnderlinedLinkVariant;
  var com_varabyte_kobweb_silk_components_navigation_LinkVars$stable;
  function LinkVars$_get_DefaultColor_$ref_plujau() {
    return function (p0) {
      return p0.g4b();
    };
  }
  function LinkVars$_get_VisitedColor_$ref_j60201() {
    return function (p0) {
      return p0.h4b();
    };
  }
  function LinkVars() {
    LinkVars_instance = this;
    this.e4b_1 = StyleVariable_0('silk');
    this.f4b_1 = StyleVariable_0('silk');
  }
  protoOf(LinkVars).g4b = function () {
    var tmp = KProperty1;
    return this.e4b_1.s3b(this, getPropertyCallableRef('DefaultColor', 1, tmp, LinkVars$_get_DefaultColor_$ref_plujau(), null));
  };
  protoOf(LinkVars).h4b = function () {
    var tmp = KProperty1;
    return this.f4b_1.s3b(this, getPropertyCallableRef('VisitedColor', 1, tmp, LinkVars$_get_VisitedColor_$ref_j60201(), null));
  };
  var LinkVars_instance;
  function LinkVars_getInstance() {
    if (LinkVars_instance == null)
      new LinkVars();
    return LinkVars_instance;
  }
  function Link(path, text, modifier, variant, openInternalLinksStrategy, openExternalLinksStrategy, updateHistoryMode, ref, $composer, $changed, $default) {
    _init_properties_Link_kt__dm1ox2();
    var text_0 = {_v: text};
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var openInternalLinksStrategy_0 = {_v: openInternalLinksStrategy};
    var openExternalLinksStrategy_0 = {_v: openExternalLinksStrategy};
    var updateHistoryMode_0 = {_v: updateHistoryMode};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.e1h(1486184471);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.r1h(path) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.r1h(text_0._v) ? 32 : 16);
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
      var tmpEnum = openInternalLinksStrategy_0._v;
      if (tmp_0.t1h(tmpEnum == null ? -1 : tmpEnum.l2_1)) {
        tmp = 16384;
      } else {
        tmp = 8192;
      }
      $dirty = $dirty | tmp;
    }
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0) {
      var tmp_1;
      var tmp_2 = $composer_0;
      var tmpEnum_0 = openExternalLinksStrategy_0._v;
      if (tmp_2.t1h(tmpEnum_0 == null ? -1 : tmpEnum_0.l2_1)) {
        tmp_1 = 131072;
      } else {
        tmp_1 = 65536;
      }
      $dirty = $dirty | tmp_1;
    }
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0) {
      var tmp_3;
      var tmp_4 = $composer_0;
      var tmpEnum_1 = updateHistoryMode_0._v;
      if (tmp_4.t1h(tmpEnum_1 == null ? -1 : tmpEnum_1.l2_1)) {
        tmp_3 = 1048576;
      } else {
        tmp_3 = 524288;
      }
      $dirty = $dirty | tmp_3;
    }
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 12582912) === 0)
      $dirty = $dirty | ((($changed & 16777216) === 0 ? $composer_0.r1h(ref_0._v) : $composer_0.u1h(ref_0._v)) ? 8388608 : 4194304);
    if ($composer_0.w1h(!(($dirty & 4793491) === 4793490), $dirty & 1)) {
      if (!(($default & 2) === 0)) {
        text_0._v = null;
      }
      if (!(($default & 4) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 8) === 0)) {
        variant_0._v = null;
      }
      if (!(($default & 16) === 0)) {
        openInternalLinksStrategy_0._v = null;
      }
      if (!(($default & 32) === 0)) {
        openExternalLinksStrategy_0._v = null;
      }
      if (!(($default & 64) === 0)) {
        updateHistoryMode_0._v = null;
      }
      if (!(($default & 128) === 0)) {
        ref_0._v = null;
      }
      var tmp_5 = modifier_0._v;
      var tmp_6 = variant_0._v;
      var tmp_7 = openInternalLinksStrategy_0._v;
      var tmp_8 = openExternalLinksStrategy_0._v;
      var tmp_9 = updateHistoryMode_0._v;
      var tmp_10 = ref_0._v;
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(598449929, true, Link$lambda(text_0, path), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.r1h(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.p1h();
      var tmp_11;
      if (invalid || it === Companion_getInstance().r1g_1) {
        var value = ComposableLambda$invoke$ref_0(dispatchReceiver);
        $composer_1.q1h(value);
        tmp_11 = value;
      } else {
        tmp_11 = it;
      }
      var tmp_12 = tmp_11;
      var tmp0 = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Link_0(path, tmp_5, tmp_6, tmp_7, tmp_8, tmp_9, tmp_10, tmp0, $composer_0, 12582912 | 14 & $dirty | 112 & $dirty >> 3 | com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() << 6 | 896 & $dirty >> 3 | 7168 & $dirty >> 3 | 57344 & $dirty >> 3 | 458752 & $dirty >> 3 | com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter() << 18 | 3670016 & $dirty >> 3, 0);
    } else {
      $composer_0.j1h();
    }
    var tmp0_safe_receiver = $composer_0.f1h();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y21(Link$lambda_0(path, text_0, modifier_0, variant_0, openInternalLinksStrategy_0, openExternalLinksStrategy_0, updateHistoryMode_0, ref_0, $changed, $default));
    }
  }
  function Link_0(path, modifier, variant, openInternalLinksStrategy, openExternalLinksStrategy, updateHistoryMode, ref, content, $composer, $changed, $default) {
    _init_properties_Link_kt__dm1ox2();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var openInternalLinksStrategy_0 = {_v: openInternalLinksStrategy};
    var openExternalLinksStrategy_0 = {_v: openExternalLinksStrategy};
    var updateHistoryMode_0 = {_v: updateHistoryMode};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.e1h(-253586851);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.r1h(path) ? 4 : 2);
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
      var tmpEnum = openInternalLinksStrategy_0._v;
      if (tmp_0.t1h(tmpEnum == null ? -1 : tmpEnum.l2_1)) {
        tmp = 2048;
      } else {
        tmp = 1024;
      }
      $dirty = $dirty | tmp;
    }
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0) {
      var tmp_1;
      var tmp_2 = $composer_0;
      var tmpEnum_0 = openExternalLinksStrategy_0._v;
      if (tmp_2.t1h(tmpEnum_0 == null ? -1 : tmpEnum_0.l2_1)) {
        tmp_1 = 16384;
      } else {
        tmp_1 = 8192;
      }
      $dirty = $dirty | tmp_1;
    }
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0) {
      var tmp_3;
      var tmp_4 = $composer_0;
      var tmpEnum_1 = updateHistoryMode_0._v;
      if (tmp_4.t1h(tmpEnum_1 == null ? -1 : tmpEnum_1.l2_1)) {
        tmp_3 = 131072;
      } else {
        tmp_3 = 65536;
      }
      $dirty = $dirty | tmp_3;
    }
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ((($changed & 2097152) === 0 ? $composer_0.r1h(ref_0._v) : $composer_0.u1h(ref_0._v)) ? 1048576 : 524288);
    if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.u1h(content) ? 8388608 : 4194304);
    if ($composer_0.w1h(!(($dirty & 4793491) === 4793490), $dirty & 1)) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 4) === 0)) {
        variant_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        openInternalLinksStrategy_0._v = null;
      }
      if (!(($default & 16) === 0)) {
        openExternalLinksStrategy_0._v = null;
      }
      if (!(($default & 32) === 0)) {
        updateHistoryMode_0._v = null;
      }
      if (!(($default & 64) === 0)) {
        ref_0._v = null;
      }
      var tmp_5 = toAttrs(toModifier(get_LinkStyle(), [variant_0._v], $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter() | com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() << 3).t3i(modifier_0._v));
      var tmp_6 = openInternalLinksStrategy_0._v;
      var tmp_7 = openExternalLinksStrategy_0._v;
      var tmp_8 = updateHistoryMode_0._v;
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(682923050, true, Link$lambda_1(ref_0, content), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.r1h(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.p1h();
      var tmp_9;
      if (invalid || it === Companion_getInstance().r1g_1) {
        var value = ComposableLambda$invoke$ref_1(dispatchReceiver);
        $composer_1.q1h(value);
        tmp_9 = value;
      } else {
        tmp_9 = it;
      }
      var tmp_10 = tmp_9;
      var tmp0 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Anchor(path, tmp_5, tmp_6, tmp_7, tmp_8, tmp0, $composer_0, 196608 | 14 & $dirty | 896 & $dirty >> 3 | 7168 & $dirty >> 3 | 57344 & $dirty >> 3, 0);
    } else {
      $composer_0.j1h();
    }
    var tmp0_safe_receiver = $composer_0.f1h();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y21(Link$lambda_2(path, modifier_0, variant_0, openInternalLinksStrategy_0, openExternalLinksStrategy_0, updateHistoryMode_0, ref_0, content, $changed, $default));
    }
  }
  function LinkStyle$lambda($this$CssStyle) {
    _init_properties_Link_kt__dm1ox2();
    $this$CssStyle.b3o(LinkStyle$lambda$lambda);
    var tmp = get_link($this$CssStyle);
    $this$CssStyle.e3q(tmp, LinkStyle$lambda$lambda_0);
    var tmp_0 = get_visited($this$CssStyle);
    $this$CssStyle.e3q(tmp_0, LinkStyle$lambda$lambda_1);
    var tmp_1 = get_hover($this$CssStyle);
    $this$CssStyle.e3q(tmp_1, LinkStyle$lambda$lambda_2);
    return Unit_instance;
  }
  function LinkStyle$lambda$lambda() {
    _init_properties_Link_kt__dm1ox2();
    return textDecorationLine(Companion_instance, Companion_instance_7.j39());
  }
  function LinkStyle$lambda$lambda_0() {
    _init_properties_Link_kt__dm1ox2();
    return color(Companion_instance, LinkVars_getInstance().g4b().m3b());
  }
  function LinkStyle$lambda$lambda_1() {
    _init_properties_Link_kt__dm1ox2();
    return color(Companion_instance, LinkVars_getInstance().h4b().m3b());
  }
  function LinkStyle$lambda$lambda_2() {
    _init_properties_Link_kt__dm1ox2();
    return textDecorationLine(Companion_instance, Companion_instance_7.v3b());
  }
  function UndecoratedLinkVariant$lambda($this$addVariant) {
    _init_properties_Link_kt__dm1ox2();
    var tmp = get_hover($this$addVariant);
    $this$addVariant.e3q(tmp, UndecoratedLinkVariant$lambda$lambda);
    return Unit_instance;
  }
  function UndecoratedLinkVariant$lambda$lambda() {
    _init_properties_Link_kt__dm1ox2();
    return textDecorationLine(Companion_instance, Companion_instance_7.j39());
  }
  function UncoloredLinkVariant$lambda($this$addVariant) {
    _init_properties_Link_kt__dm1ox2();
    var colorModifier = color(Companion_instance, get_ColorVar().m3b());
    var tmp = get_link($this$addVariant);
    $this$addVariant.e3q(tmp, UncoloredLinkVariant$lambda$lambda(colorModifier));
    var tmp_0 = get_visited($this$addVariant);
    $this$addVariant.e3q(tmp_0, UncoloredLinkVariant$lambda$lambda_0(colorModifier));
    return Unit_instance;
  }
  function UncoloredLinkVariant$lambda$lambda($colorModifier) {
    return function () {
      return $colorModifier;
    };
  }
  function UncoloredLinkVariant$lambda$lambda_0($colorModifier) {
    return function () {
      return $colorModifier;
    };
  }
  function AlwaysUnderlinedLinkVariant$lambda($this$addVariant) {
    _init_properties_Link_kt__dm1ox2();
    $this$addVariant.b3o(AlwaysUnderlinedLinkVariant$lambda$lambda);
    return Unit_instance;
  }
  function AlwaysUnderlinedLinkVariant$lambda$lambda() {
    _init_properties_Link_kt__dm1ox2();
    return textDecorationLine(Companion_instance, Companion_instance_7.v3b());
  }
  function Link$lambda($text, $path) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.w1h(!(($changed & 3) === 2), $changed & 1)) {
        var tmp0_elvis_lhs = $text._v;
        Text(tmp0_elvis_lhs == null ? $path : tmp0_elvis_lhs, $composer_0, 0);
        tmp = Unit_instance;
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
  function Link$lambda_0($path, $text, $modifier, $variant, $openInternalLinksStrategy, $openExternalLinksStrategy, $updateHistoryMode, $ref, $$changed, $$default) {
    return function ($composer, $force) {
      Link($path, $text._v, $modifier._v, $variant._v, $openInternalLinksStrategy._v, $openExternalLinksStrategy._v, $updateHistoryMode._v, $ref._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Link$lambda_1($ref, $content) {
    return function ($this$Anchor, $composer, $changed) {
      var $composer_0 = $composer;
      registerRefScope_0($this$Anchor, $ref._v, $composer_0, 14 & $changed | com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter() << 3);
      $content($composer_0, 0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_1(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.x2n(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function Link$lambda_2($path, $modifier, $variant, $openInternalLinksStrategy, $openExternalLinksStrategy, $updateHistoryMode, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Link_0($path, $modifier._v, $variant._v, $openInternalLinksStrategy._v, $openExternalLinksStrategy._v, $updateHistoryMode._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var properties_initialized_Link_kt_5x6v44;
  function _init_properties_Link_kt__dm1ox2() {
    if (!properties_initialized_Link_kt_5x6v44) {
      properties_initialized_Link_kt_5x6v44 = true;
      LinkStyle = CssStyle(VOID, LinkStyle$lambda);
      var tmp = get_LinkStyle();
      UndecoratedLinkVariant = addVariant(tmp, VOID, UndecoratedLinkVariant$lambda);
      var tmp_0 = get_LinkStyle();
      UncoloredLinkVariant = addVariant(tmp_0, VOID, UncoloredLinkVariant$lambda);
      var tmp_1 = get_LinkStyle();
      AlwaysUnderlinedLinkVariant = addVariant(tmp_1, VOID, AlwaysUnderlinedLinkVariant$lambda);
      com_varabyte_kobweb_silk_components_navigation_LinkVars$stable = 8;
    }
  }
  function initSilkWidgetsKobweb(ctx) {
    var mutableTheme = ctx.m3m_1;
    // Inline function 'kotlin.apply' call
    var this_0 = mutableTheme.d3n_1;
    // Inline function 'kotlin.apply' call
    var this_1 = this_0.j3t_1;
    get_link_0(this_1).l49(Colors_instance.h3k(), Colors_instance.v3k());
    // Inline function 'kotlin.apply' call
    var this_2 = this_0.k3t_1;
    get_link_0(this_2).l49(Colors_instance.k3k(), Colors_instance.y3k());
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = get_entries().i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      var tmp = '.' + get_cssClass(element);
      registerStyleBase(ctx.l3m_1, tmp, initSilkWidgetsKobweb$lambda(element));
    }
    mutableTheme.f3n('silk-image', get_ImageStyle());
    mutableTheme.r3r('-fit-width', get_FitWidthImageVariant());
    mutableTheme.f3n('silk-link', get_LinkStyle());
    mutableTheme.r3r('-uncolored', get_UncoloredLinkVariant());
    mutableTheme.r3r('-undecorated', get_UndecoratedLinkVariant());
    mutableTheme.r3r('-always-underlined', get_AlwaysUnderlinedLinkVariant());
    mutableTheme.f3n('silk-toc', get_TocStyle());
    mutableTheme.r3r('-bordered', get_TocBorderedVariant());
  }
  function initSilkWidgetsKobweb$lambda($colorMode) {
    return function () {
      var palette = toPalette($colorMode);
      return setVariable(setVariable(Companion_instance, LinkVars_getInstance().g4b(), get_link_1(palette).m49()), LinkVars_getInstance().h4b(), get_link_1(palette).m4b());
    };
  }
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetKobwebColorGroups_MutableLink$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetKobwebColorGroups$stable;
  function SilkWidgetKobwebColorGroups$MutableLink$_get_default_$ref_q6ezpd() {
    return function (p0) {
      return p0.m49();
    };
  }
  function SilkWidgetKobwebColorGroups$MutableLink$_set_default_$ref_ekavxv() {
    return function (p0, p1) {
      p0.x49(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetKobwebColorGroups$MutableLink$_get_default_$ref_q6ezpd_0() {
    return function (p0) {
      return p0.m49();
    };
  }
  function SilkWidgetKobwebColorGroups$MutableLink$_set_default_$ref_ekavxv_0() {
    return function (p0, p1) {
      p0.x49(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetKobwebColorGroups$MutableLink$_get_visited_$ref_txpy16() {
    return function (p0) {
      return p0.m4b();
    };
  }
  function SilkWidgetKobwebColorGroups$MutableLink$_set_visited_$ref_aszxm2() {
    return function (p0, p1) {
      p0.n4b(p1);
      return Unit_instance;
    };
  }
  function SilkWidgetKobwebColorGroups$MutableLink$_get_visited_$ref_txpy16_0() {
    return function (p0) {
      return p0.m4b();
    };
  }
  function SilkWidgetKobwebColorGroups$MutableLink$_set_visited_$ref_aszxm2_0() {
    return function (p0, p1) {
      p0.n4b(p1);
      return Unit_instance;
    };
  }
  function MutableLink(palette) {
    ColorGroup.call(this, palette, 'link');
    this.k4b_1 = this.v3t();
    this.l4b_1 = this.v3t();
  }
  protoOf(MutableLink).x49 = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetKobwebColorGroups$MutableLink$_get_default_$ref_q6ezpd_0();
    return this.k4b_1.s3t(this, getPropertyCallableRef('default', 1, tmp, tmp_0, SilkWidgetKobwebColorGroups$MutableLink$_set_default_$ref_ekavxv_0()), _set____db54di);
  };
  protoOf(MutableLink).m49 = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetKobwebColorGroups$MutableLink$_get_default_$ref_q6ezpd();
    return this.k4b_1.s3b(this, getPropertyCallableRef('default', 1, tmp, tmp_0, SilkWidgetKobwebColorGroups$MutableLink$_set_default_$ref_ekavxv()));
  };
  protoOf(MutableLink).n4b = function (_set____db54di) {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetKobwebColorGroups$MutableLink$_get_visited_$ref_txpy16_0();
    return this.l4b_1.s3t(this, getPropertyCallableRef('visited', 1, tmp, tmp_0, SilkWidgetKobwebColorGroups$MutableLink$_set_visited_$ref_aszxm2_0()), _set____db54di);
  };
  protoOf(MutableLink).m4b = function () {
    var tmp = KMutableProperty1;
    var tmp_0 = SilkWidgetKobwebColorGroups$MutableLink$_get_visited_$ref_txpy16();
    return this.l4b_1.s3b(this, getPropertyCallableRef('visited', 1, tmp, tmp_0, SilkWidgetKobwebColorGroups$MutableLink$_set_visited_$ref_aszxm2()));
  };
  protoOf(MutableLink).l49 = function (default_0, visited) {
    this.x49(default_0);
    this.n4b(visited);
  };
  function get_link_0(_this__u8e3s4) {
    _init_properties_SilkWidgetKobwebColorGroups_kt__t3jte2();
    return new MutableLink(_this__u8e3s4);
  }
  function get_link_1(_this__u8e3s4) {
    _init_properties_SilkWidgetKobwebColorGroups_kt__t3jte2();
    return get_link_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  var properties_initialized_SilkWidgetKobwebColorGroups_kt_ed8ye0;
  function _init_properties_SilkWidgetKobwebColorGroups_kt__t3jte2() {
    if (!properties_initialized_SilkWidgetKobwebColorGroups_kt_ed8ye0) {
      properties_initialized_SilkWidgetKobwebColorGroups_kt_ed8ye0 = true;
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetKobwebColorGroups_MutableLink$stable = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetKobwebColorGroups$stable = 0;
    }
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Image_0;
  _.$_$.b = Image;
  _.$_$.c = Link;
  _.$_$.d = Link_0;
  _.$_$.e = get_UncoloredLinkVariant;
  _.$_$.f = get_UndecoratedLinkVariant;
  _.$_$.g = initSilkWidgetsKobweb;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-silk-widgets-kobweb.js.map
