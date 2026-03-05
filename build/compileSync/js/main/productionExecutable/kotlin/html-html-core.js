(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './androidx-compose-runtime-runtime.js', './html-internal-html-core-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./androidx-compose-runtime-runtime.js'), require('./html-internal-html-core-runtime.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'html-html-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'html-html-core'.");
    }
    if (typeof globalThis['androidx-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'html-html-core'. Its dependency 'androidx-compose-runtime-runtime' was not found. Please, check whether 'androidx-compose-runtime-runtime' is loaded prior to 'html-html-core'.");
    }
    if (typeof globalThis['html-internal-html-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'html-html-core'. Its dependency 'html-internal-html-core-runtime' was not found. Please, check whether 'html-internal-html-core-runtime' is loaded prior to 'html-html-core'.");
    }
    globalThis['html-html-core'] = factory(typeof globalThis['html-html-core'] === 'undefined' ? {} : globalThis['html-html-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['androidx-compose-runtime-runtime'], globalThis['html-internal-html-core-runtime']);
  }
}(function (_, kotlin_kotlin, kotlin_androidx_compose_runtime_runtime, kotlin_org_jetbrains_compose_html_internal_html_core_runtime) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.e2;
  var protoOf = kotlin_kotlin.$_$.c8;
  var asList = kotlin_kotlin.$_$.a3;
  var initMetadataForInterface = kotlin_kotlin.$_$.p7;
  var VOID = kotlin_kotlin.$_$.c;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.n;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.h;
  var addAll = kotlin_kotlin.$_$.x2;
  var initMetadataForClass = kotlin_kotlin.$_$.m7;
  var Enum = kotlin_kotlin.$_$.qa;
  var charSequenceLength = kotlin_kotlin.$_$.b7;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.o;
  var ensureNotNull = kotlin_kotlin.$_$.fb;
  var initMetadataForCompanion = kotlin_kotlin.$_$.n7;
  var initMetadataForObject = kotlin_kotlin.$_$.r7;
  var toString = kotlin_kotlin.$_$.d8;
  var hashCode = kotlin_kotlin.$_$.l7;
  var equals = kotlin_kotlin.$_$.f7;
  var getStringHashCode = kotlin_kotlin.$_$.k7;
  var toString_0 = kotlin_kotlin.$_$.mb;
  var numberToDouble = kotlin_kotlin.$_$.z7;
  var getNumberHashCode = kotlin_kotlin.$_$.i7;
  var defineProp = kotlin_kotlin.$_$.d7;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.f1;
  var isInterface = kotlin_kotlin.$_$.u7;
  var objectCreate = kotlin_kotlin.$_$.b8;
  var getBooleanHashCode = kotlin_kotlin.$_$.g7;
  var Collection = kotlin_kotlin.$_$.o2;
  var getKClassFromExpression = kotlin_kotlin.$_$.k8;
  var mutableStateListOf = kotlin_androidx_compose_runtime_runtime.$_$.q;
  var listOfNotNull = kotlin_kotlin.$_$.e4;
  var joinToString = kotlin_kotlin.$_$.x3;
  var joinToString_0 = kotlin_kotlin.$_$.y3;
  var contains = kotlin_kotlin.$_$.y8;
  var sourceInformation = kotlin_androidx_compose_runtime_runtime.$_$.v;
  var traceEventStart = kotlin_androidx_compose_runtime_runtime.$_$.y;
  var isTraceInProgress = kotlin_androidx_compose_runtime_runtime.$_$.p;
  var sourceInformationMarkerStart = kotlin_androidx_compose_runtime_runtime.$_$.u;
  var Companion_getInstance = kotlin_androidx_compose_runtime_runtime.$_$.f1;
  var THROW_CCE = kotlin_kotlin.$_$.ya;
  var sourceInformationMarkerEnd = kotlin_androidx_compose_runtime_runtime.$_$.t;
  var _SkippableUpdater___init__impl__4ft0t9 = kotlin_androidx_compose_runtime_runtime.$_$.a1;
  var _SkippableUpdater___get_composer__impl__6t7yne = kotlin_androidx_compose_runtime_runtime.$_$.b1;
  var _Updater___init__impl__rbfxm8 = kotlin_androidx_compose_runtime_runtime.$_$.c1;
  var Updater__set_impl_v7kwss = kotlin_androidx_compose_runtime_runtime.$_$.d1;
  var DisposableEffect = kotlin_androidx_compose_runtime_runtime.$_$.i;
  var traceEventEnd = kotlin_androidx_compose_runtime_runtime.$_$.x;
  var DomNodeWrapper = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.b;
  var emptyList = kotlin_kotlin.$_$.n3;
  var copyToArray = kotlin_kotlin.$_$.k3;
  var updateChangedFlags = kotlin_androidx_compose_runtime_runtime.$_$.z;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.z5;
  var invalidApplier = kotlin_androidx_compose_runtime_runtime.$_$.o;
  var DomApplier = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.a;
  var KProperty1 = kotlin_kotlin.$_$.p8;
  var getPropertyCallableRef = kotlin_kotlin.$_$.j7;
  var lazy = kotlin_kotlin.$_$.gb;
  var rememberComposableLambda = kotlin_androidx_compose_runtime_runtime.$_$.b;
  var DisposableEffect_0 = kotlin_androidx_compose_runtime_runtime.$_$.h;
  //endregion
  //region block: pre-declaration
  function onClick(listener) {
    this.e31(new MouseEventListener('click', listener));
  }
  initMetadataForInterface(EventsListenerScope, 'EventsListenerScope');
  function classes(classes) {
    return this.a31(asList(classes));
  }
  function tabIndex(value) {
    return this.y30('tabindex', value.toString());
  }
  initMetadataForInterface(AttrsScope, 'AttrsScope', VOID, VOID, [EventsListenerScope]);
  initMetadataForClass(AttrsScopeBuilder, 'AttrsScopeBuilder', AttrsScopeBuilder, VOID, [AttrsScope, EventsListenerScope]);
  initMetadataForClass(EventsListenerScopeBuilder, 'EventsListenerScopeBuilder', EventsListenerScopeBuilder, VOID, [EventsListenerScope]);
  initMetadataForClass(ButtonType, 'ButtonType', VOID, Enum);
  initMetadataForClass(SyntheticEventListener, 'SyntheticEventListener');
  initMetadataForClass(MouseEventListener, 'MouseEventListener', VOID, SyntheticEventListener);
  initMetadataForCompanion(Companion);
  initMetadataForCompanion(Companion_0);
  initMetadataForCompanion(Companion_1);
  initMetadataForCompanion(Companion_2);
  initMetadataForCompanion(Companion_3);
  initMetadataForCompanion(Companion_4);
  initMetadataForCompanion(Companion_5);
  initMetadataForClass(CSSKeyframe, 'CSSKeyframe');
  initMetadataForObject(From, 'From', VOID, CSSKeyframe);
  initMetadataForObject(To, 'To', VOID, CSSKeyframe);
  initMetadataForInterface(CSSStyledRuleDeclaration, 'CSSStyledRuleDeclaration');
  initMetadataForClass(CSSKeyframeRuleDeclaration, 'CSSKeyframeRuleDeclaration', VOID, VOID, [CSSStyledRuleDeclaration]);
  initMetadataForClass(CSSKeyframesRuleDeclaration, 'CSSKeyframesRuleDeclaration');
  initMetadataForClass(Raw, 'Raw');
  initMetadataForClass(MediaFeature, 'MediaFeature');
  initMetadataForInterface(CSSGroupingRuleDeclaration, 'CSSGroupingRuleDeclaration');
  initMetadataForClass(CSSMediaRuleDeclaration, 'CSSMediaRuleDeclaration', VOID, VOID, [CSSGroupingRuleDeclaration]);
  initMetadataForClass(CSSStyleRuleDeclaration, 'CSSStyleRuleDeclaration', VOID, VOID, [CSSStyledRuleDeclaration]);
  function property(propertyName, value, important) {
    var message = '!important is not supported by this implementation';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function property_0(propertyName, value) {
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.o32(propertyName, value);
  }
  function property_1(propertyName, value) {
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.o32(propertyName, value);
  }
  function variable(variableName, value) {
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.s32(variableName, value);
  }
  initMetadataForInterface(StyleScope, 'StyleScope');
  initMetadataForInterface(StyleHolder, 'StyleHolder');
  initMetadataForClass(StyleScopeBuilder, 'StyleScopeBuilder', StyleScopeBuilder, VOID, [StyleScope, StyleHolder]);
  initMetadataForClass(CSSRuleBuilderImpl, 'CSSRuleBuilderImpl', CSSRuleBuilderImpl, StyleScopeBuilder, [StyleScope, StyleScopeBuilder]);
  initMetadataForCompanion(Companion_6);
  initMetadataForClass(CSSUnitValueTyped, 'CSSUnitValueTyped');
  initMetadataForObject(Color, 'Color');
  initMetadataForClass(StylePropertyDeclaration, 'StylePropertyDeclaration');
  initMetadataForCompanion(Companion_7);
  function add(selector, style) {
    this.f32(new CSSStyleRuleDeclaration(selector, style));
  }
  initMetadataForInterface(CSSRulesHolder, 'CSSRulesHolder');
  function returnUniversalSelector() {
    return get_Universal();
  }
  function returnHoverSelector() {
    return this.p33();
  }
  function get_hover() {
    return new PseudoClassInternal('hover');
  }
  initMetadataForInterface(SelectorsScope, 'SelectorsScope');
  function invoke(_this__u8e3s4, cssRule) {
    this.m33(new RawSelector(_this__u8e3s4), cssRule);
  }
  function style(_this__u8e3s4, cssRule) {
    this.m33(new RawSelector(_this__u8e3s4), cssRule);
  }
  initMetadataForInterface(GenericStyleSheetBuilder, 'GenericStyleSheetBuilder', VOID, VOID, [CSSRulesHolder, SelectorsScope]);
  function style_0(selector, cssRule) {
    this.k33(selector, buildCSSStyleRule(cssRule));
  }
  initMetadataForInterface(StyleSheetBuilder, 'StyleSheetBuilder', VOID, VOID, [CSSRulesHolder, GenericStyleSheetBuilder]);
  initMetadataForClass(StyleSheet, 'StyleSheet', StyleSheet_init_$Create$, VOID, [StyleSheetBuilder, CSSRulesHolder]);
  initMetadataForClass(CSSRulesHolderState, 'CSSRulesHolderState', CSSRulesHolderState, VOID, [CSSRulesHolder]);
  initMetadataForClass(CSSSelector, 'CSSSelector');
  initMetadataForClass(RawSelector, 'RawSelector', VOID, CSSSelector);
  initMetadataForClass(PseudoClassInternal, 'PseudoClassInternal', VOID, CSSSelector);
  initMetadataForClass(CSSBorder, 'CSSBorder', CSSBorder);
  initMetadataForClass(DomElementWrapper, 'DomElementWrapper', VOID, DomNodeWrapper);
  initMetadataForClass(ElementScopeBase, 'ElementScopeBase');
  initMetadataForClass(ElementScopeImpl, 'ElementScopeImpl', ElementScopeImpl, ElementScopeBase);
  initMetadataForInterface(ElementBuilder, 'ElementBuilder');
  initMetadataForClass(ElementBuilderImplementation, 'ElementBuilderImplementation', VOID, VOID, [ElementBuilder]);
  initMetadataForClass(Style$$inlined$run$2$2$1);
  initMetadataForClass(SyntheticEvent, 'SyntheticEvent');
  initMetadataForClass(SyntheticMouseEvent, 'SyntheticMouseEvent', VOID, SyntheticEvent);
  //endregion
  var setInputValue;
  var setTextAreaDefaultValue;
  var setCheckedValue;
  function type(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.y30('type', value.x30_1);
  }
  function alt(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.y30('alt', value);
  }
  function src(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.y30('src', value);
  }
  function href(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.y30('href', value);
  }
  function setInputValue$lambda(e, v) {
    _init_properties_Attrs_kt__w5qjhs();
    if (!(v === e.value)) {
      e.value = v;
    }
    saveControlledInputState(e, v);
    return Unit_instance;
  }
  function setTextAreaDefaultValue$lambda(e, v) {
    _init_properties_Attrs_kt__w5qjhs();
    e.innerText = v;
    return Unit_instance;
  }
  function setCheckedValue$lambda(e, v) {
    _init_properties_Attrs_kt__w5qjhs();
    e.checked = v;
    saveControlledInputState(e, v);
    return Unit_instance;
  }
  var properties_initialized_Attrs_kt_uypsku;
  function _init_properties_Attrs_kt__w5qjhs() {
    if (!properties_initialized_Attrs_kt_uypsku) {
      properties_initialized_Attrs_kt_uypsku = true;
      setInputValue = setInputValue$lambda;
      setTextAreaDefaultValue = setTextAreaDefaultValue$lambda;
      setCheckedValue = setCheckedValue$lambda;
    }
  }
  function AttrsScope() {
  }
  function AttrsScopeBuilder(eventsListenerScopeBuilder) {
    eventsListenerScopeBuilder = eventsListenerScopeBuilder === VOID ? new EventsListenerScopeBuilder() : eventsListenerScopeBuilder;
    this.g31_1 = eventsListenerScopeBuilder;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.h31_1 = LinkedHashMap_init_$Create$();
    this.i31_1 = new StyleScopeBuilder();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.j31_1 = ArrayList_init_$Create$();
    this.k31_1 = null;
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.l31_1 = ArrayList_init_$Create$();
  }
  protoOf(AttrsScopeBuilder).a31 = function (classes) {
    this.l31_1.r(classes);
  };
  protoOf(AttrsScopeBuilder).b31 = function (classes) {
    addAll(this.l31_1, classes);
  };
  protoOf(AttrsScopeBuilder).z30 = function (builder) {
    // Inline function 'kotlin.apply' call
    builder(this.i31_1);
  };
  protoOf(AttrsScopeBuilder).d31 = function (effect) {
    this.k31_1 = effect;
  };
  protoOf(AttrsScopeBuilder).y30 = function (attr, value) {
    // Inline function 'kotlin.collections.set' call
    this.h31_1.a2(attr, value);
    return this;
  };
  protoOf(AttrsScopeBuilder).m31 = function () {
    return this.h31_1;
  };
  protoOf(AttrsScopeBuilder).e31 = function (listener) {
    this.g31_1.e31(listener);
  };
  protoOf(AttrsScopeBuilder).f31 = function (listener) {
    this.g31_1.f31(listener);
  };
  var org_jetbrains_compose_web_attributes_EventsListenerScopeBuilder$stable;
  function EventsListenerScope() {
  }
  function EventsListenerScopeBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.n31_1 = ArrayList_init_$Create$();
  }
  protoOf(EventsListenerScopeBuilder).e31 = function (listener) {
    this.n31_1.h(listener);
  };
  protoOf(EventsListenerScopeBuilder).o31 = function () {
    return this.n31_1;
  };
  var org_jetbrains_compose_web_attributes_InputType_Button$stable;
  var org_jetbrains_compose_web_attributes_InputType_Checkbox$stable;
  var org_jetbrains_compose_web_attributes_InputType_Color$stable;
  var org_jetbrains_compose_web_attributes_InputType_Date$stable;
  var org_jetbrains_compose_web_attributes_InputType_DateTimeLocal$stable;
  var org_jetbrains_compose_web_attributes_InputType_Email$stable;
  var org_jetbrains_compose_web_attributes_InputType_File$stable;
  var org_jetbrains_compose_web_attributes_InputType_Hidden$stable;
  var org_jetbrains_compose_web_attributes_InputType_Month$stable;
  var org_jetbrains_compose_web_attributes_InputType_Number$stable;
  var org_jetbrains_compose_web_attributes_InputType_Password$stable;
  var org_jetbrains_compose_web_attributes_InputType_Radio$stable;
  var org_jetbrains_compose_web_attributes_InputType_Range$stable;
  var org_jetbrains_compose_web_attributes_InputType_Search$stable;
  var org_jetbrains_compose_web_attributes_InputType_Submit$stable;
  var org_jetbrains_compose_web_attributes_InputType_Tel$stable;
  var org_jetbrains_compose_web_attributes_InputType_Text$stable;
  var org_jetbrains_compose_web_attributes_InputType_Time$stable;
  var org_jetbrains_compose_web_attributes_InputType_Url$stable;
  var org_jetbrains_compose_web_attributes_InputType_Week$stable;
  var org_jetbrains_compose_web_attributes_InputType_InputTypeWithStringValue$stable;
  var org_jetbrains_compose_web_attributes_InputType_InputTypeWithUnitValue$stable;
  var org_jetbrains_compose_web_attributes_InputType_InputTypeCheckedValue$stable;
  var org_jetbrains_compose_web_attributes_InputType_InputTypeNumberValue$stable;
  var org_jetbrains_compose_web_attributes_InputType$stable;
  var org_jetbrains_compose_web_attributes_DirType_Ltr$stable;
  var org_jetbrains_compose_web_attributes_DirType_Rtl$stable;
  var org_jetbrains_compose_web_attributes_DirType_Auto$stable;
  var org_jetbrains_compose_web_attributes_DirType$stable;
  var org_jetbrains_compose_web_attributes_ATarget_Blank$stable;
  var org_jetbrains_compose_web_attributes_ATarget_Parent$stable;
  var org_jetbrains_compose_web_attributes_ATarget_Self$stable;
  var org_jetbrains_compose_web_attributes_ATarget_Top$stable;
  var org_jetbrains_compose_web_attributes_ATarget$stable;
  var org_jetbrains_compose_web_attributes_ARel_Alternate$stable;
  var org_jetbrains_compose_web_attributes_ARel_Author$stable;
  var org_jetbrains_compose_web_attributes_ARel_Bookmark$stable;
  var org_jetbrains_compose_web_attributes_ARel_External$stable;
  var org_jetbrains_compose_web_attributes_ARel_Help$stable;
  var org_jetbrains_compose_web_attributes_ARel_License$stable;
  var org_jetbrains_compose_web_attributes_ARel_Next$stable;
  var org_jetbrains_compose_web_attributes_ARel_First$stable;
  var org_jetbrains_compose_web_attributes_ARel_Prev$stable;
  var org_jetbrains_compose_web_attributes_ARel_Last$stable;
  var org_jetbrains_compose_web_attributes_ARel_NoFollow$stable;
  var org_jetbrains_compose_web_attributes_ARel_NoOpener$stable;
  var org_jetbrains_compose_web_attributes_ARel_NoReferrer$stable;
  var org_jetbrains_compose_web_attributes_ARel_Opener$stable;
  var org_jetbrains_compose_web_attributes_ARel_Search$stable;
  var org_jetbrains_compose_web_attributes_ARel_Tag$stable;
  var org_jetbrains_compose_web_attributes_ARel_CustomARel$stable;
  var org_jetbrains_compose_web_attributes_ARel$stable;
  var org_jetbrains_compose_web_attributes_ButtonFormTarget_Blank$stable;
  var org_jetbrains_compose_web_attributes_ButtonFormTarget_Parent$stable;
  var org_jetbrains_compose_web_attributes_ButtonFormTarget_Self$stable;
  var org_jetbrains_compose_web_attributes_ButtonFormTarget_Top$stable;
  var org_jetbrains_compose_web_attributes_ButtonFormTarget$stable;
  var org_jetbrains_compose_web_attributes_FormTarget_Blank$stable;
  var org_jetbrains_compose_web_attributes_FormTarget_Parent$stable;
  var org_jetbrains_compose_web_attributes_FormTarget_Self$stable;
  var org_jetbrains_compose_web_attributes_FormTarget_Top$stable;
  var org_jetbrains_compose_web_attributes_FormTarget$stable;
  var org_jetbrains_compose_web_attributes_InputFormTarget_Blank$stable;
  var org_jetbrains_compose_web_attributes_InputFormTarget_Parent$stable;
  var org_jetbrains_compose_web_attributes_InputFormTarget_Self$stable;
  var org_jetbrains_compose_web_attributes_InputFormTarget_Top$stable;
  var org_jetbrains_compose_web_attributes_InputFormTarget$stable;
  var ButtonType_Button_instance;
  var ButtonType_Reset_instance;
  var ButtonType_Submit_instance;
  var ButtonType_entriesInitialized;
  function ButtonType_initEntries() {
    if (ButtonType_entriesInitialized)
      return Unit_instance;
    ButtonType_entriesInitialized = true;
    ButtonType_Button_instance = new ButtonType('Button', 0, 'button');
    ButtonType_Reset_instance = new ButtonType('Reset', 1, 'reset');
    ButtonType_Submit_instance = new ButtonType('Submit', 2, 'submit');
  }
  function ButtonType(name, ordinal, str) {
    Enum.call(this, name, ordinal);
    this.x30_1 = str;
  }
  function ButtonType_Button_getInstance() {
    ButtonType_initEntries();
    return ButtonType_Button_instance;
  }
  var org_jetbrains_compose_web_attributes_SyntheticEventListener$stable;
  var org_jetbrains_compose_web_attributes_AnimationEventListener$stable;
  var org_jetbrains_compose_web_attributes_MouseEventListener$stable;
  var org_jetbrains_compose_web_attributes_MouseWheelEventListener$stable;
  var org_jetbrains_compose_web_attributes_KeyboardEventListener$stable;
  var org_jetbrains_compose_web_attributes_FocusEventListener$stable;
  var org_jetbrains_compose_web_attributes_TouchEventListener$stable;
  var org_jetbrains_compose_web_attributes_DragEventListener$stable;
  var org_jetbrains_compose_web_attributes_ClipboardEventListener$stable;
  var org_jetbrains_compose_web_attributes_InputEventListener$stable;
  var org_jetbrains_compose_web_attributes_ChangeEventListener$stable;
  var org_jetbrains_compose_web_attributes_SelectEventListener$stable;
  function SyntheticEventListener(event, listener) {
    this.p31_1 = event;
    this.q31_1 = listener;
    this.r31_1 = this.p31_1;
  }
  protoOf(SyntheticEventListener).q2d = function () {
    return this.r31_1;
  };
  protoOf(SyntheticEventListener).so = function (event) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = new SyntheticEvent(event);
    this.q31_1(tmp$ret$1);
  };
  protoOf(SyntheticEventListener).handleEvent = function (event) {
    return this.so(event);
  };
  function MouseEventListener(event, listener) {
    SyntheticEventListener.call(this, event, listener);
  }
  protoOf(MouseEventListener).so = function (event) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this.q31_1(new SyntheticMouseEvent(event));
  };
  protoOf(MouseEventListener).handleEvent = function (event) {
    return this.so(event);
  };
  var org_jetbrains_compose_web_attributes_builders_InputAttrsScope$stable;
  function get_controlledInputsValuesWeakMap() {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    return controlledInputsValuesWeakMap;
  }
  var controlledInputsValuesWeakMap;
  function get_controlledRadioGroups() {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    return controlledRadioGroups;
  }
  var controlledRadioGroups;
  function saveControlledInputState(element, value) {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    get_controlledInputsValuesWeakMap().set(element, value);
    if (element instanceof HTMLInputElement) {
      updateRadioGroupIfNeeded(element);
    }
  }
  function updateRadioGroupIfNeeded(element) {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    var tmp;
    if (element.type === 'radio') {
      // Inline function 'kotlin.text.isNotEmpty' call
      var this_0 = element.name;
      tmp = charSequenceLength(this_0) > 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      if (!get_controlledRadioGroups().u1(element.name)) {
        var tmp0 = get_controlledRadioGroups();
        var tmp2 = element.name;
        // Inline function 'kotlin.collections.mutableSetOf' call
        // Inline function 'kotlin.collections.set' call
        var value = LinkedHashSet_init_$Create$();
        tmp0.a2(tmp2, value);
      }
      ensureNotNull(get_controlledRadioGroups().w1(element.name)).h(element);
    }
  }
  var properties_initialized_InternalControlledInputUtils_kt_dwq2r0;
  function _init_properties_InternalControlledInputUtils_kt__h0qaxa() {
    if (!properties_initialized_InternalControlledInputUtils_kt_dwq2r0) {
      properties_initialized_InternalControlledInputUtils_kt_dwq2r0 = true;
      // Inline function 'kotlin.js.unsafeCast' call
      controlledInputsValuesWeakMap = new WeakMap();
      // Inline function 'kotlin.collections.mutableMapOf' call
      controlledRadioGroups = LinkedHashMap_init_$Create$();
    }
  }
  var androidx_compose_web_attributes_SelectAttrsScope$stable;
  var org_jetbrains_compose_web_attributes_builders_TextAreaAttrsScope$stable;
  var org_jetbrains_compose_web_css_CSSKeyframesRule$stable;
  var org_jetbrains_compose_web_css_CSSBuilderImpl$stable;
  var org_jetbrains_compose_web_css_GridAutoFlow$stable;
  function Companion() {
  }
  var Companion_instance;
  function Companion_getInstance_0() {
    return Companion_instance;
  }
  function Companion_0() {
  }
  var Companion_instance_0;
  function Companion_getInstance_1() {
    return Companion_instance_0;
  }
  function Companion_1() {
  }
  var Companion_instance_1;
  function Companion_getInstance_2() {
    return Companion_instance_1;
  }
  function Companion_2() {
  }
  var Companion_instance_2;
  function Companion_getInstance_3() {
    return Companion_instance_2;
  }
  function Companion_3() {
  }
  var Companion_instance_3;
  function Companion_getInstance_4() {
    return Companion_instance_3;
  }
  function Companion_4() {
  }
  var Companion_instance_4;
  function Companion_getInstance_5() {
    return Companion_instance_4;
  }
  function Companion_5() {
  }
  var Companion_instance_5;
  function Companion_getInstance_6() {
    return Companion_instance_5;
  }
  var org_jetbrains_compose_web_css_CSSKeyframesRuleDeclaration$stable;
  var org_jetbrains_compose_web_css_CSSKeyframe_From$stable;
  var org_jetbrains_compose_web_css_CSSKeyframe_To$stable;
  var org_jetbrains_compose_web_css_CSSKeyframe_Percentage$stable;
  var org_jetbrains_compose_web_css_CSSKeyframe_Combine$stable;
  var org_jetbrains_compose_web_css_CSSKeyframe$stable;
  var org_jetbrains_compose_web_css_CSSKeyframeRuleDeclaration$stable;
  var org_jetbrains_compose_web_css_CSSKeyframesBuilder$stable;
  function From() {
    From_instance = this;
    CSSKeyframe.call(this);
  }
  protoOf(From).toString = function () {
    return 'from';
  };
  var From_instance;
  function From_getInstance() {
    if (From_instance == null)
      new From();
    return From_instance;
  }
  function To() {
    To_instance = this;
    CSSKeyframe.call(this);
  }
  protoOf(To).toString = function () {
    return 'to';
  };
  var To_instance;
  function To_getInstance() {
    if (To_instance == null)
      new To();
    return To_instance;
  }
  function CSSKeyframe() {
  }
  function CSSKeyframeRuleDeclaration(keyframe, style) {
    this.v31_1 = keyframe;
    this.w31_1 = style;
  }
  protoOf(CSSKeyframeRuleDeclaration).x31 = function () {
    return this.w31_1;
  };
  protoOf(CSSKeyframeRuleDeclaration).y31 = function () {
    return this.v31_1.toString();
  };
  protoOf(CSSKeyframeRuleDeclaration).toString = function () {
    return 'CSSKeyframeRuleDeclaration(keyframe=' + this.v31_1.toString() + ', style=' + toString(this.w31_1) + ')';
  };
  protoOf(CSSKeyframeRuleDeclaration).hashCode = function () {
    var result = hashCode(this.v31_1);
    result = imul(result, 31) + hashCode(this.w31_1) | 0;
    return result;
  };
  protoOf(CSSKeyframeRuleDeclaration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSKeyframeRuleDeclaration))
      return false;
    if (!equals(this.v31_1, other.v31_1))
      return false;
    if (!equals(this.w31_1, other.w31_1))
      return false;
    return true;
  };
  function CSSKeyframesRuleDeclaration(name, keys) {
    this.z31_1 = name;
    this.a32_1 = keys;
  }
  protoOf(CSSKeyframesRuleDeclaration).y31 = function () {
    return '@keyframes ' + this.z31_1;
  };
  protoOf(CSSKeyframesRuleDeclaration).toString = function () {
    return 'CSSKeyframesRuleDeclaration(name=' + this.z31_1 + ', keys=' + toString(this.a32_1) + ')';
  };
  protoOf(CSSKeyframesRuleDeclaration).hashCode = function () {
    var result = getStringHashCode(this.z31_1);
    result = imul(result, 31) + hashCode(this.a32_1) | 0;
    return result;
  };
  protoOf(CSSKeyframesRuleDeclaration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSKeyframesRuleDeclaration))
      return false;
    if (!(this.z31_1 === other.z31_1))
      return false;
    if (!equals(this.a32_1, other.a32_1))
      return false;
    return true;
  };
  var org_jetbrains_compose_web_css_CSSMediaQuery_Raw$stable;
  var org_jetbrains_compose_web_css_CSSMediaQuery_MediaType$stable;
  var org_jetbrains_compose_web_css_CSSMediaQuery_MediaFeature$stable;
  var org_jetbrains_compose_web_css_CSSMediaQuery_NotFeature$stable;
  var org_jetbrains_compose_web_css_CSSMediaQuery_And$stable;
  var org_jetbrains_compose_web_css_CSSMediaQuery_Not$stable;
  var org_jetbrains_compose_web_css_CSSMediaQuery_Combine$stable;
  var org_jetbrains_compose_web_css_CSSMediaQuery_Only$stable;
  var org_jetbrains_compose_web_css_CSSMediaQuery_Or$stable;
  var org_jetbrains_compose_web_css_CSSMediaRuleDeclaration$stable;
  function Raw(string) {
    this.b32_1 = string;
  }
  protoOf(Raw).toString = function () {
    return this.b32_1;
  };
  protoOf(Raw).hashCode = function () {
    return getStringHashCode(this.b32_1);
  };
  protoOf(Raw).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Raw))
      return false;
    if (!(this.b32_1 === other.b32_1))
      return false;
    return true;
  };
  function MediaFeature(name, value) {
    value = value === VOID ? null : value;
    this.c32_1 = name;
    this.d32_1 = value;
  }
  protoOf(MediaFeature).equals = function (other) {
    var tmp;
    if (other instanceof MediaFeature) {
      tmp = (this.c32_1 === other.c32_1 && toString_0(this.d32_1) === toString_0(other.d32_1));
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(MediaFeature).toString = function () {
    var tmp;
    if (this.d32_1 == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = ': ' + toString(this.d32_1) + ')';
    }
    var tmp1_elvis_lhs = tmp;
    return '(' + this.c32_1 + (tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs);
  };
  function media(_this__u8e3s4, query, rulesBuild) {
    media_0(_this__u8e3s4, new Raw(query), rulesBuild);
  }
  function media_0(_this__u8e3s4, query, rulesBuild) {
    var rules = _this__u8e3s4.e32(rulesBuild);
    _this__u8e3s4.f32(new CSSMediaRuleDeclaration(query, rules));
  }
  function CSSMediaRuleDeclaration(query, rules) {
    this.g32_1 = query;
    this.h32_1 = rules;
  }
  protoOf(CSSMediaRuleDeclaration).i32 = function () {
    return this.h32_1;
  };
  protoOf(CSSMediaRuleDeclaration).y31 = function () {
    return '@media ' + toString(this.g32_1);
  };
  protoOf(CSSMediaRuleDeclaration).equals = function (other) {
    var tmp;
    if (other instanceof CSSMediaRuleDeclaration) {
      tmp = (equals(this.h32_1, other.h32_1) && equals(this.g32_1, other.g32_1));
    } else {
      tmp = false;
    }
    return tmp;
  };
  var org_jetbrains_compose_web_css_CSSCalcValue$stable;
  function unaryMinus(_this__u8e3s4) {
    return new CSSUnitValueTyped(-_this__u8e3s4.value, _this__u8e3s4.unit);
  }
  var org_jetbrains_compose_web_css_CSSRuleBuilderImpl$stable;
  var org_jetbrains_compose_web_css_CSSStyleRuleDeclaration$stable;
  function CSSGroupingRuleDeclaration() {
  }
  function CSSStyledRuleDeclaration() {
  }
  function buildCSSStyleRule(cssRule) {
    var builder = new CSSRuleBuilderImpl();
    cssRule(builder);
    return builder;
  }
  function CSSStyleRuleDeclaration(selector, style) {
    this.j32_1 = selector;
    this.k32_1 = style;
  }
  protoOf(CSSStyleRuleDeclaration).x31 = function () {
    return this.k32_1;
  };
  protoOf(CSSStyleRuleDeclaration).y31 = function () {
    return this.j32_1.l32();
  };
  protoOf(CSSStyleRuleDeclaration).toString = function () {
    return 'CSSStyleRuleDeclaration(selector=' + toString(this.j32_1) + ', style=' + toString(this.k32_1) + ')';
  };
  protoOf(CSSStyleRuleDeclaration).hashCode = function () {
    var result = hashCode(this.j32_1);
    result = imul(result, 31) + hashCode(this.k32_1) | 0;
    return result;
  };
  protoOf(CSSStyleRuleDeclaration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSStyleRuleDeclaration))
      return false;
    if (!equals(this.j32_1, other.j32_1))
      return false;
    if (!equals(this.k32_1, other.k32_1))
      return false;
    return true;
  };
  function CSSRuleBuilderImpl() {
    StyleScopeBuilder.call(this);
  }
  var org_jetbrains_compose_web_css_CSSUnitValueTyped$stable;
  function Companion_6() {
  }
  var Companion_instance_6;
  function Companion_getInstance_7() {
    return Companion_instance_6;
  }
  function get_cssRem(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.rem' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'rem');
  }
  function get_px(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'px');
  }
  function get_percent(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.percent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, '%');
  }
  function get_vh(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.vh' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'vh');
  }
  function get_em(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.em' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'em');
  }
  function get_fr(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.fr' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'fr');
  }
  function get_ms(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.ms' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'ms');
  }
  function CSSUnitValueTyped(value, unit) {
    this.w32_1 = value;
    this.x32_1 = unit;
    delete this.value;
    delete this.unit;
  }
  protoOf(CSSUnitValueTyped).t1 = function () {
    return this.w32_1;
  };
  protoOf(CSSUnitValueTyped).y32 = function () {
    return this.x32_1;
  };
  protoOf(CSSUnitValueTyped).toString = function () {
    return '' + this.w32_1 + toString(this.x32_1);
  };
  protoOf(CSSUnitValueTyped).hashCode = function () {
    var result = getNumberHashCode(this.w32_1);
    result = imul(result, 31) + hashCode(this.x32_1) | 0;
    return result;
  };
  protoOf(CSSUnitValueTyped).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSUnitValueTyped))
      return false;
    if (!equals(this.w32_1, other.w32_1))
      return false;
    if (!equals(this.x32_1, other.x32_1))
      return false;
    return true;
  };
  function get_vw(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.vw' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'vw');
  }
  var org_jetbrains_compose_web_css_Color_RGB$stable;
  var org_jetbrains_compose_web_css_Color_RGBA$stable;
  var org_jetbrains_compose_web_css_Color_HSL$stable;
  var org_jetbrains_compose_web_css_Color_HSLA$stable;
  var org_jetbrains_compose_web_css_Color$stable;
  function Color() {
  }
  var Color_instance;
  function Color_getInstance() {
    return Color_instance;
  }
  function Color_0(name) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return name;
  }
  var org_jetbrains_compose_web_css_CSSStyleVariable$stable;
  var org_jetbrains_compose_web_css_StyleScopeBuilder$stable;
  var org_jetbrains_compose_web_css_StylePropertyDeclaration$stable;
  function StyleScope() {
  }
  function StyleScopeBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.m32_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.n32_1 = ArrayList_init_$Create$();
  }
  protoOf(StyleScopeBuilder).u32 = function () {
    return this.m32_1;
  };
  protoOf(StyleScopeBuilder).v32 = function () {
    return this.n32_1;
  };
  protoOf(StyleScopeBuilder).p32 = function (propertyName, value, important) {
    this.u32().h(new StylePropertyDeclaration(propertyName, value, important));
  };
  protoOf(StyleScopeBuilder).o32 = function (propertyName, value) {
    this.p32(propertyName, value, false);
  };
  protoOf(StyleScopeBuilder).s32 = function (variableName, value) {
    this.v32().h(StylePropertyDeclaration_init_$Create$(variableName, value));
  };
  protoOf(StyleScopeBuilder).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, StyleHolder) : false) {
      tmp = (nativeEquals(this.u32(), other.u32()) && nativeEquals(this.v32(), other.v32()));
    } else {
      tmp = false;
    }
    return tmp;
  };
  function StyleHolder() {
  }
  function StylePropertyDeclaration_init_$Init$(name, value, $this) {
    StylePropertyDeclaration.call($this, name, value, false);
    return $this;
  }
  function StylePropertyDeclaration_init_$Create$(name, value) {
    return StylePropertyDeclaration_init_$Init$(name, value, objectCreate(protoOf(StylePropertyDeclaration)));
  }
  function StylePropertyDeclaration(name, value, important) {
    this.z32_1 = name;
    this.a33_1 = value;
    this.b33_1 = important;
  }
  protoOf(StylePropertyDeclaration).me = function () {
    return this.z32_1;
  };
  protoOf(StylePropertyDeclaration).ne = function () {
    return this.a33_1;
  };
  protoOf(StylePropertyDeclaration).c33 = function () {
    return this.b33_1;
  };
  protoOf(StylePropertyDeclaration).toString = function () {
    return 'StylePropertyDeclaration(name=' + this.z32_1 + ', value=' + toString(this.a33_1) + ', important=' + this.b33_1 + ')';
  };
  protoOf(StylePropertyDeclaration).hashCode = function () {
    var result = getStringHashCode(this.z32_1);
    result = imul(result, 31) + hashCode(this.a33_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.b33_1) | 0;
    return result;
  };
  protoOf(StylePropertyDeclaration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StylePropertyDeclaration))
      return false;
    if (!(this.z32_1 === other.z32_1))
      return false;
    if (!equals(this.a33_1, other.a33_1))
      return false;
    if (!(this.b33_1 === other.b33_1))
      return false;
    return true;
  };
  function nativeEquals(_this__u8e3s4, properties) {
    if (!(_this__u8e3s4.n() === properties.n()))
      return false;
    var index = 0;
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(_this__u8e3s4, Collection)) {
        tmp = _this__u8e3s4.l();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var _iterator__ex2g4s = _this__u8e3s4.i();
      while (_iterator__ex2g4s.j()) {
        var element = _iterator__ex2g4s.k();
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        var otherProp = properties.m(_unary__edvuaz);
        if (!(element.z32_1 === otherProp.z32_1 && element.b33_1 === otherProp.b33_1 && toString(element.a33_1) === toString(otherProp.a33_1))) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  }
  var org_jetbrains_compose_web_css_CSSRulesHolderState$stable;
  var org_jetbrains_compose_web_css_StyleSheet_CSSSelfSelector$stable;
  var org_jetbrains_compose_web_css_StyleSheet$stable;
  function org_jetbrains_compose_web_css_StyleSheet$stableprop_getter() {
    return org_jetbrains_compose_web_css_StyleSheet$stable;
  }
  function StyleSheet_init_$Init$(rulesHolder, usePrefix, $this) {
    rulesHolder = rulesHolder === VOID ? new CSSRulesHolderState() : rulesHolder;
    usePrefix = usePrefix === VOID ? true : usePrefix;
    StyleSheet.call($this, usePrefix ? null : '', rulesHolder);
    return $this;
  }
  function StyleSheet_init_$Create$(rulesHolder, usePrefix) {
    return StyleSheet_init_$Init$(rulesHolder, usePrefix, objectCreate(protoOf(StyleSheet)));
  }
  function Companion_7() {
    this.d33_1 = 0;
  }
  var Companion_instance_7;
  function Companion_getInstance_8() {
    return Companion_instance_7;
  }
  function StyleSheet(customPrefix, rulesHolder) {
    rulesHolder = rulesHolder === VOID ? new CSSRulesHolderState() : rulesHolder;
    this.e33_1 = rulesHolder;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.f33_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    tmp_0.g33_1 = customPrefix == null ? '' + getKClassFromExpression(this).t9() + '-' : customPrefix;
    this.h33_1 = customPrefix == null;
  }
  protoOf(StyleSheet).i33 = function (rulesBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = StyleSheet_init_$Create$();
    rulesBuild(this_0);
    return this_0.j33();
  };
  protoOf(StyleSheet).e32 = function (rulesBuild) {
    return this.i33(rulesBuild);
  };
  protoOf(StyleSheet).j33 = function () {
    return this.e33_1.j33();
  };
  protoOf(StyleSheet).f32 = function (cssRule) {
    this.e33_1.f32(cssRule);
  };
  protoOf(StyleSheet).k33 = function (selector, style) {
    this.e33_1.k33(selector, style);
  };
  protoOf(StyleSheet).m33 = function (selector, cssRule) {
    return this.l33(selector, cssRule);
  };
  function CSSRulesHolderState() {
    this.q33_1 = mutableStateListOf();
  }
  protoOf(CSSRulesHolderState).j33 = function () {
    return this.q33_1;
  };
  protoOf(CSSRulesHolderState).f32 = function (cssRule) {
    this.q33_1.cl(cssRule);
  };
  function get_Universal() {
    _init_properties_StyleSheetBuilder_kt__ftybdn();
    return Universal;
  }
  var Universal;
  var org_jetbrains_compose_web_css_PseudoClassInternal_Lang$stable;
  var org_jetbrains_compose_web_css_PseudoClassInternal_NthChild$stable;
  var org_jetbrains_compose_web_css_PseudoClassInternal_NthLastChild$stable;
  var org_jetbrains_compose_web_css_PseudoClassInternal_NthOfType$stable;
  var org_jetbrains_compose_web_css_PseudoClassInternal_NthLastOfType$stable;
  var org_jetbrains_compose_web_css_PseudoClassInternal_Host$stable;
  var org_jetbrains_compose_web_css_PseudoClassInternal_Not$stable;
  var org_jetbrains_compose_web_css_PseudoElementInternal_Slotted$stable;
  var org_jetbrains_compose_web_css_StyleSheetBuilderImpl$stable;
  function GenericStyleSheetBuilder() {
  }
  function StyleSheetBuilder() {
  }
  function CSSRulesHolder() {
  }
  function RawSelector(selector) {
    CSSSelector.call(this);
    this.r33_1 = selector;
  }
  protoOf(RawSelector).toString = function () {
    return this.r33_1;
  };
  protoOf(RawSelector).hashCode = function () {
    return getStringHashCode(this.r33_1);
  };
  protoOf(RawSelector).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RawSelector))
      return false;
    if (!(this.r33_1 === other.r33_1))
      return false;
    return true;
  };
  function SelectorsScope() {
  }
  function PseudoClassInternal(name) {
    CSSSelector.call(this);
    this.s33_1 = name;
  }
  protoOf(PseudoClassInternal).equals = function (other) {
    var tmp;
    if (other instanceof PseudoClassInternal) {
      tmp = (this.s33_1 === other.s33_1 && this.t33() == other.t33());
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(PseudoClassInternal).t33 = function () {
    return null;
  };
  protoOf(PseudoClassInternal).toString = function () {
    var tmp0_safe_receiver = this.t33();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = '(' + tmp0_safe_receiver + ')';
    }
    var tmp1_elvis_lhs = tmp;
    return ':' + this.s33_1 + (tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs);
  };
  var properties_initialized_StyleSheetBuilder_kt_uqx9b1;
  function _init_properties_StyleSheetBuilder_kt__ftybdn() {
    if (!properties_initialized_StyleSheetBuilder_kt_uqx9b1) {
      properties_initialized_StyleSheetBuilder_kt_uqx9b1 = true;
      Universal = new RawSelector('*');
      org_jetbrains_compose_web_css_PseudoClassInternal_Lang$stable = 0;
      org_jetbrains_compose_web_css_PseudoClassInternal_NthChild$stable = 8;
      org_jetbrains_compose_web_css_PseudoClassInternal_NthLastChild$stable = 8;
      org_jetbrains_compose_web_css_PseudoClassInternal_NthOfType$stable = 8;
      org_jetbrains_compose_web_css_PseudoClassInternal_NthLastOfType$stable = 8;
      org_jetbrains_compose_web_css_PseudoClassInternal_Host$stable = 0;
      org_jetbrains_compose_web_css_PseudoClassInternal_Not$stable = 0;
      org_jetbrains_compose_web_css_PseudoElementInternal_Slotted$stable = 0;
      org_jetbrains_compose_web_css_StyleSheetBuilderImpl$stable = 8;
    }
  }
  var org_jetbrains_compose_web_css_CSSAnimation$stable;
  function backgroundColor(_this__u8e3s4, value) {
    _this__u8e3s4.o32('background-color', value);
  }
  var org_jetbrains_compose_web_css_CSSBorder$stable;
  function border(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    border_0(_this__u8e3s4, border$lambda(width, style, color));
  }
  function borderRadius(_this__u8e3s4, r) {
    _this__u8e3s4.o32('border-radius', r);
  }
  function CSSBorder() {
    this.u33_1 = null;
    this.v33_1 = null;
    this.w33_1 = null;
  }
  protoOf(CSSBorder).equals = function (other) {
    var tmp;
    if (other instanceof CSSBorder) {
      tmp = (equals(this.u33_1, other.u33_1) && equals(this.v33_1, other.v33_1) && equals(this.w33_1, other.w33_1));
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(CSSBorder).toString = function () {
    var values = listOfNotNull([this.u33_1, this.v33_1, this.w33_1]);
    return joinToString(values, ' ');
  };
  function width(_this__u8e3s4, size) {
    _this__u8e3s4.u33_1 = size;
  }
  function style_1(_this__u8e3s4, style) {
    _this__u8e3s4.v33_1 = style;
  }
  function color(_this__u8e3s4, color) {
    _this__u8e3s4.w33_1 = color;
  }
  function border_0(_this__u8e3s4, borderBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = new CSSBorder();
    borderBuild(this_0);
    _this__u8e3s4.o32('border', this_0);
  }
  function border$lambda($width, $style, $color) {
    return function ($this$border) {
      var tmp0_safe_receiver = $width;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        width($this$border, tmp0_safe_receiver);
      }
      var tmp1_safe_receiver = $style;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        style_1($this$border, tmp1_safe_receiver);
      }
      var tmp2_safe_receiver = $color;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        color($this$border, tmp2_safe_receiver);
      }
      return Unit_instance;
    };
  }
  function width_0(_this__u8e3s4, value) {
    _this__u8e3s4.o32('width', value);
  }
  function height(_this__u8e3s4, value) {
    _this__u8e3s4.o32('height', value);
  }
  function minWidth(_this__u8e3s4, value) {
    _this__u8e3s4.o32('min-width', value);
  }
  function minHeight(_this__u8e3s4, value) {
    _this__u8e3s4.o32('min-height', value);
  }
  function boxSizing(_this__u8e3s4, value) {
    _this__u8e3s4.q32('box-sizing', value);
  }
  function maxWidth(_this__u8e3s4, value) {
    _this__u8e3s4.o32('max-width', value);
  }
  function color_0(_this__u8e3s4, value) {
    _this__u8e3s4.o32('color', value);
  }
  function flexGrow(_this__u8e3s4, value) {
    _this__u8e3s4.r32('flex-grow', value);
  }
  function alignItems(_this__u8e3s4, alignItems) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.q32('align-items', alignItems);
  }
  function alignSelf(_this__u8e3s4, alignSelf) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.q32('align-self', alignSelf);
  }
  function flexDirection(_this__u8e3s4, flexDirection) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.q32('flex-direction', flexDirection);
  }
  function justifyContent(_this__u8e3s4, justifyContent) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.q32('justify-content', justifyContent);
  }
  function gap(_this__u8e3s4, value) {
    _this__u8e3s4.o32('gap', value);
  }
  function gridTemplateColumns(_this__u8e3s4, value) {
    _this__u8e3s4.q32('grid-template-columns', value);
  }
  function gridRow(_this__u8e3s4, start, end) {
    _this__u8e3s4.q32('grid-row', '' + start + ' / ' + end);
  }
  function gridTemplateRows(_this__u8e3s4, value) {
    _this__u8e3s4.q32('grid-template-rows', value);
  }
  function gridArea(_this__u8e3s4, rowStart, columnStart) {
    _this__u8e3s4.q32('grid-area', rowStart + ' / ' + columnStart);
  }
  function columnGap(_this__u8e3s4, value) {
    _this__u8e3s4.o32('column-gap', value);
  }
  function rowGap(_this__u8e3s4, value) {
    _this__u8e3s4.o32('row-gap', value);
  }
  function gridAutoColumns(_this__u8e3s4, value) {
    _this__u8e3s4.q32('grid-auto-columns', value);
  }
  function gridAutoRows(_this__u8e3s4, value) {
    _this__u8e3s4.q32('grid-auto-rows', value);
  }
  function margin(_this__u8e3s4, value) {
    _this__u8e3s4.q32('margin', joinToString_0(value, ' '));
  }
  function marginBottom(_this__u8e3s4, value) {
    _this__u8e3s4.o32('margin-bottom', value);
  }
  function padding(_this__u8e3s4, value) {
    _this__u8e3s4.q32('padding', joinToString_0(value, ' '));
  }
  function position(_this__u8e3s4, position) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.q32('position', position);
  }
  function top(_this__u8e3s4, value) {
    _this__u8e3s4.o32('top', value);
  }
  function left(_this__u8e3s4, value) {
    _this__u8e3s4.o32('left', value);
  }
  function right(_this__u8e3s4, value) {
    _this__u8e3s4.o32('right', value);
  }
  function bottom(_this__u8e3s4, value) {
    _this__u8e3s4.o32('bottom', value);
  }
  function display(_this__u8e3s4, displayStyle) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.q32('display', displayStyle);
  }
  function opacity(_this__u8e3s4, value) {
    _this__u8e3s4.r32('opacity', value);
  }
  function fontSize(_this__u8e3s4, value) {
    _this__u8e3s4.o32('font-size', value);
  }
  function lineHeight(_this__u8e3s4, value) {
    _this__u8e3s4.q32('line-height', value);
  }
  function letterSpacing(_this__u8e3s4, value) {
    _this__u8e3s4.o32('letter-spacing', value);
  }
  function fontWeight(_this__u8e3s4, value) {
    _this__u8e3s4.r32('font-weight', value);
  }
  function fontFamily(_this__u8e3s4, value) {
    _this__u8e3s4.q32('font-family', joinToString_0(value, ', ', VOID, VOID, VOID, VOID, fontFamily$lambda));
  }
  function fontFamily$lambda(it) {
    return contains(it, ' ') ? '"' + it + '"' : it;
  }
  var org_jetbrains_compose_web_css_Transition$stable;
  var org_jetbrains_compose_web_css_Transitions$stable;
  function CSSSelector() {
  }
  protoOf(CSSSelector).l32 = function () {
    return toString(this);
  };
  function TagElement(elementBuilder, applyAttrs, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.e1h(-410614847);
    sourceInformation($composer_0, 'C(TagElement)P(2)111@3506L42,114@3642L1030:Base.kt#97hrze');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.r1h(elementBuilder) : $composer_0.u1h(elementBuilder)) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.u1h(applyAttrs) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.u1h(content) ? 256 : 128);
    if ($composer_0.w1h(!(($dirty & 147) === 146), $dirty & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-410614847, $dirty, -1, 'org.jetbrains.compose.web.dom.TagElement (Base.kt:110)');
      }
      sourceInformationMarkerStart($composer_0, 536130251, 'CC(remember):Base.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      var it = this_0.p1h();
      var tmp;
      if (false || it === Companion_getInstance().r1g_1) {
        var value = new ElementScopeImpl();
        this_0.q1h(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var scope = tmp0_group;
      var refEffect = null;
      // Inline function 'org.jetbrains.compose.web.dom.ComposeDomNode' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1356037561, 'CC(ComposeDomNode)P(3,2)32@1123L41,35@1232L20:Base.kt#97hrze');
      $composer_1.k1h();
      if ($composer_1.t1g()) {
        var tmp_1 = $composer_1;
        tmp_1.l1h(TagElement$lambda(elementBuilder, scope));
      } else {
        $composer_1.m1h();
      }
      var tmp0 = _SkippableUpdater___init__impl__4ft0t9($composer_1);
      var $composer_2 = $composer_1;
      sourceInformationMarkerStart($composer_2, -123012359, 'C:Base.kt#97hrze');
      var attrsScope = new AttrsScopeBuilder();
      if (applyAttrs == null)
        null;
      else
        applyAttrs(attrsScope);
      refEffect = attrsScope.k31_1;
      $composer_2.y1g(-1389436843);
      sourceInformation($composer_2, '*127@4091L32,128@4168L42,129@4254L30,132@4405L39,134@4511L35');
      // Inline function 'androidx.compose.runtime.SkippableUpdater.update' call
      _SkippableUpdater___get_composer__impl__6t7yne(tmp0).w1g(509942095);
      var $this$update = _Updater___init__impl__rbfxm8(_SkippableUpdater___get_composer__impl__6t7yne(tmp0));
      sourceInformationMarkerStart($composer_2, 1723456829, 'CC(remember):Base.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_0 = $composer_2.p1h();
      var tmp_2;
      if (false || it_0 === Companion_getInstance().r1g_1) {
        var value_0 = DomElementWrapper$updateClasses$ref();
        $composer_2.q1h(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0_group_0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Updater__set_impl_v7kwss($this$update, attrsScope.l31_1, tmp0_group_0);
      sourceInformationMarkerStart($composer_2, 1723459303, 'CC(remember):Base.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_1 = $composer_2.p1h();
      var tmp_4;
      if (false || it_1 === Companion_getInstance().r1g_1) {
        var value_1 = DomElementWrapper$updateStyleDeclarations$ref();
        $composer_2.q1h(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = it_1;
      }
      var tmp_5 = tmp_4;
      var tmp1_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Updater__set_impl_v7kwss($this$update, attrsScope.i31_1, tmp1_group);
      var tmp_6 = attrsScope.m31();
      sourceInformationMarkerStart($composer_2, 1723462043, 'CC(remember):Base.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_2 = $composer_2.p1h();
      var tmp_7;
      if (false || it_2 === Companion_getInstance().r1g_1) {
        var value_2 = DomElementWrapper$updateAttrs$ref();
        $composer_2.q1h(value_2);
        tmp_7 = value_2;
      } else {
        tmp_7 = it_2;
      }
      var tmp_8 = tmp_7;
      var tmp2_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Updater__set_impl_v7kwss($this$update, tmp_6, tmp2_group);
      var tmp_9 = attrsScope.g31_1.o31();
      sourceInformationMarkerStart($composer_2, 1723466884, 'CC(remember):Base.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_3 = $composer_2.p1h();
      var tmp_10;
      if (false || it_3 === Companion_getInstance().r1g_1) {
        var value_3 = DomElementWrapper$updateEventListeners$ref();
        $composer_2.q1h(value_3);
        tmp_10 = value_3;
      } else {
        tmp_10 = it_3;
      }
      var tmp_11 = tmp_10;
      var tmp3_group = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Updater__set_impl_v7kwss($this$update, tmp_9, tmp3_group);
      sourceInformationMarkerStart($composer_2, 1723470272, 'CC(remember):Base.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_4 = $composer_2.p1h();
      var tmp_12;
      if (false || it_4 === Companion_getInstance().r1g_1) {
        var value_4 = DomElementWrapper$updateProperties$ref();
        $composer_2.q1h(value_4);
        tmp_12 = value_4;
      } else {
        tmp_12 = it_4;
      }
      var tmp_13 = tmp_12;
      var tmp4_group = (tmp_13 == null ? true : !(tmp_13 == null)) ? tmp_13 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Updater__set_impl_v7kwss($this$update, attrsScope.j31_1, tmp4_group);
      _SkippableUpdater___get_composer__impl__6t7yne(tmp0).x1g();
      $composer_2.z1g();
      sourceInformationMarkerEnd($composer_2);
      $composer_1.w1g(2058660585);
      var $changed_0 = 8 & 0 >> 3 | 14 & 0 >> 3 | 112 & 0 >> 6;
      var $composer_3 = $composer_1;
      sourceInformationMarkerStart($composer_3, -247057115, 'C:Base.kt#97hrze');
      if (content == null) {
        $composer_3.y1g(-247048468);
        $composer_3.z1g();
      } else {
        $composer_3.y1g(-1670537291);
        sourceInformation($composer_3, '139@4644L12');
        content(scope, $composer_3, 14 & $changed_0 | 112 & $dirty >> 3);
        $composer_3.z1g();
      }
      sourceInformationMarkerEnd($composer_3);
      $composer_1.x1g();
      $composer_1.n1h();
      sourceInformationMarkerEnd($composer_1);
      var tmp0_safe_receiver = refEffect;
      if (tmp0_safe_receiver == null) {
        $composer_0.y1g(-558655727);
        $composer_0.z1g();
      } else {
        $composer_0.y1g(-558655726);
        sourceInformation($composer_0, '*144@4736L58,144@4713L81');
        // Inline function 'kotlin.let' call
        sourceInformationMarkerStart($composer_0, 263239824, 'CC(remember):Base.kt#9igjgp');
        var tmp0_0 = $composer_0;
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = !!($composer_0.r1h(tmp0_safe_receiver) | $composer_0.u1h(scope));
        // Inline function 'kotlin.let' call
        var it_5 = tmp0_0.p1h();
        var tmp_14;
        if (invalid || it_5 === Companion_getInstance().r1g_1) {
          var value_5 = TagElement$lambda_0(tmp0_safe_receiver, scope);
          tmp0_0.q1h(value_5);
          tmp_14 = value_5;
        } else {
          tmp_14 = it_5;
        }
        var tmp_15 = tmp_14;
        var tmp0_group_1 = (tmp_15 == null ? true : !(tmp_15 == null)) ? tmp_15 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        DisposableEffect(null, tmp0_group_1, $composer_0, 6);
        $composer_0.z1g();
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.j1h();
    }
    var tmp1_safe_receiver = $composer_0.f1h();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.y21(TagElement$lambda_1(elementBuilder, applyAttrs, content, $changed));
    }
  }
  function DomElementWrapper(node) {
    DomNodeWrapper.call(this, node);
    this.y33_1 = node;
    this.z33_1 = emptyList();
  }
  protoOf(DomElementWrapper).k2z = function () {
    return this.y33_1;
  };
  protoOf(DomElementWrapper).a34 = function (list) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = this.z33_1.i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      this.y33_1.removeEventListener(element.q2d(), element);
    }
    this.z33_1 = list;
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_0 = this.z33_1.i();
    while (_iterator__ex2g4s_0.j()) {
      var element_0 = _iterator__ex2g4s_0.k();
      this.y33_1.addEventListener(element_0.q2d(), element_0);
    }
  };
  protoOf(DomElementWrapper).b34 = function (applicators) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = applicators.i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      var applicator = element.me();
      var item = element.ne();
      applicator(this.y33_1, item);
    }
  };
  protoOf(DomElementWrapper).c34 = function (styleApplier) {
    var tmp0_subject = this.y33_1;
    var tmp;
    if (tmp0_subject instanceof HTMLElement) {
      tmp = true;
    } else {
      tmp = tmp0_subject instanceof SVGElement;
    }
    if (tmp) {
      this.y33_1.removeAttribute('style');
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var style = this.y33_1.style;
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = styleApplier.u32().i();
      while (_iterator__ex2g4s.j()) {
        var element = _iterator__ex2g4s.k();
        var name = element.me();
        var value = element.ne();
        var important = element.c33();
        style.setProperty(name, toString(value), important ? 'important' : '');
      }
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_0 = styleApplier.v32().i();
      while (_iterator__ex2g4s_0.j()) {
        var element_0 = _iterator__ex2g4s_0.k();
        var name_0 = element_0.me();
        var value_0 = element_0.ne();
        style.setProperty(name_0, toString(value_0));
      }
    }
  };
  protoOf(DomElementWrapper).d34 = function (attrs) {
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = this.y33_1.getAttributeNames();
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      switch (element) {
        case 'style':
        case 'class':
          break;
        default:
          this.y33_1.removeAttribute(element);
          break;
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = attrs.z1().i();
    while (_iterator__ex2g4s.j()) {
      var element_0 = _iterator__ex2g4s.k();
      this.y33_1.setAttribute(element_0.s1(), element_0.t1());
    }
  };
  protoOf(DomElementWrapper).e34 = function (classes) {
    this.y33_1.removeAttribute('class');
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!classes.l()) {
      var tmp = this.y33_1.classList;
      // Inline function 'kotlin.collections.toTypedArray' call
      var tmp$ret$1 = copyToArray(classes);
      (function () {
        var $externalVarargReceiverTmp = tmp;
        return $externalVarargReceiverTmp.add.apply($externalVarargReceiverTmp, [].slice.call(tmp$ret$1.slice()));
      }.call(this));
    }
  };
  function TagElement$lambda($elementBuilder, $scope) {
    return function () {
      var node = $elementBuilder.d2b();
      $scope.h34(node);
      return new DomElementWrapper(node);
    };
  }
  function DomElementWrapper$updateClasses$ref() {
    var l = function (p0, p1) {
      p0.e34(p1);
      return Unit_instance;
    };
    l.callableName = 'updateClasses';
    return l;
  }
  function DomElementWrapper$updateStyleDeclarations$ref() {
    var l = function (p0, p1) {
      p0.c34(p1);
      return Unit_instance;
    };
    l.callableName = 'updateStyleDeclarations';
    return l;
  }
  function DomElementWrapper$updateAttrs$ref() {
    var l = function (p0, p1) {
      p0.d34(p1);
      return Unit_instance;
    };
    l.callableName = 'updateAttrs';
    return l;
  }
  function DomElementWrapper$updateEventListeners$ref() {
    var l = function (p0, p1) {
      p0.a34(p1);
      return Unit_instance;
    };
    l.callableName = 'updateEventListeners';
    return l;
  }
  function DomElementWrapper$updateProperties$ref() {
    var l = function (p0, p1) {
      p0.b34(p1);
      return Unit_instance;
    };
    l.callableName = 'updateProperties';
    return l;
  }
  function TagElement$lambda_0($effect, $scope) {
    return function ($this$DisposableEffect) {
      return $effect($this$DisposableEffect, $scope.i34());
    };
  }
  function TagElement$lambda_1($elementBuilder, $applyAttrs, $content, $$changed) {
    return function ($composer, $force) {
      TagElement($elementBuilder, $applyAttrs, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var org_jetbrains_compose_web_dom_ElementScopeBase$stable;
  var org_jetbrains_compose_web_dom_ElementScopeImpl$stable;
  function ElementScopeImpl() {
    ElementScopeBase.call(this);
  }
  protoOf(ElementScopeImpl).h34 = function (_set____db54di) {
    this.g34_1 = _set____db54di;
  };
  protoOf(ElementScopeImpl).i34 = function () {
    var tmp = this.g34_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('element');
    }
  };
  protoOf(ElementScopeImpl).u30 = function (_this__u8e3s4) {
    return this.i34();
  };
  function ElementScopeBase() {
    this.j34_1 = 0;
  }
  var Address;
  var Article;
  var Aside;
  var Header;
  var Area;
  var Audio;
  var Map;
  var Track;
  function get_Video() {
    _init_properties_Elements_kt__eyv5nt();
    return Video;
  }
  var Video;
  var Datalist;
  var Fieldset;
  var Legend;
  var Meter;
  var Output;
  var Progress;
  var Embed;
  var Iframe;
  var Object_0;
  var Param;
  var Picture;
  var Source;
  var Canvas;
  var DList;
  var DTerm;
  var DDescription;
  function get_Div() {
    _init_properties_Elements_kt__eyv5nt();
    return Div;
  }
  var Div;
  function get_A() {
    _init_properties_Elements_kt__eyv5nt();
    return A;
  }
  var A;
  var Input;
  function get_Button() {
    _init_properties_Elements_kt__eyv5nt();
    return Button;
  }
  var Button;
  var H1;
  var H2;
  var H3;
  var H4;
  var H5;
  var H6;
  var P;
  var Em;
  var I;
  var B;
  var Small;
  var Sup;
  var Sub;
  var Blockquote;
  function get_Span() {
    _init_properties_Elements_kt__eyv5nt();
    return Span;
  }
  var Span;
  function get_Br() {
    _init_properties_Elements_kt__eyv5nt();
    return Br;
  }
  var Br;
  var Ul;
  var Ol;
  var Li;
  function get_Img() {
    _init_properties_Elements_kt__eyv5nt();
    return Img;
  }
  var Img;
  var Form;
  var Select;
  var Option;
  var OptGroup;
  var Section;
  var TextArea;
  var Nav;
  var Pre;
  var Code;
  var Main;
  var Footer;
  var Hr;
  var Label;
  var Table;
  var Caption;
  var Col;
  var Colgroup;
  var Tr;
  var Thead;
  var Th;
  var Td;
  var Tbody;
  var Tfoot;
  function get_Style() {
    _init_properties_Elements_kt__eyv5nt();
    return Style;
  }
  var Style;
  function Text_0(value, $composer, $changed) {
    _init_properties_Elements_kt__eyv5nt();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.e1h(-1813500779);
    sourceInformation($composer_0, 'C(Text)484@16497L47,483@16438L207:Elements.kt#97hrze');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.r1h(value) ? 4 : 2);
    if ($composer_0.w1h(!(($dirty & 3) === 2), $dirty & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-1813500779, $dirty, -1, 'org.jetbrains.compose.web.dom.Text (Elements.kt:482)');
      }
      sourceInformationMarkerStart($composer_0, 982476452, 'CC(remember):Elements.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      var it = this_0.p1h();
      var tmp;
      if (false || it === Companion_getInstance().r1g_1) {
        var value_0 = Text$lambda;
        this_0.q1h(value_0);
        tmp = value_0;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      // Inline function 'androidx.compose.runtime.ComposeNode' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1886828752, 'CC(ComposeNode):Composables.kt#9igjgp');
      var tmp_1 = $composer_1.s1g();
      if (!(tmp_1 instanceof DomApplier)) {
        invalidApplier();
      }
      $composer_1.k1h();
      if ($composer_1.t1g()) {
        $composer_1.l1h(tmp0_group);
      } else {
        $composer_1.m1h();
      }
      var $this$ComposeNode = _Updater___init__impl__rbfxm8($composer_1);
      Updater__set_impl_v7kwss($this$ComposeNode, value, Text$lambda_0);
      $composer_1.n1h();
      sourceInformationMarkerEnd($composer_1);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.j1h();
    }
    var tmp1_safe_receiver = $composer_0.f1h();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.y21(Text$lambda_1(value, $changed));
    }
  }
  function Div_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.e1h(-2046833685);
    sourceInformation($composer_0, 'C(Div)496@16785L101:Elements.kt#97hrze');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.u1h(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.u1h(content_0._v) ? 32 : 16);
    if ($composer_0.w1h(!(($dirty & 19) === 18), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-2046833685, $dirty, -1, 'org.jetbrains.compose.web.dom.Div (Elements.kt:495)');
      }
      TagElement(get_Div(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.j1h();
    }
    var tmp0_safe_receiver = $composer_0.f1h();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y21(Div$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function ElementBuilder() {
  }
  function _get_el__ndc0ck($this) {
    var tmp0 = $this.l34_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('el', 1, tmp, ElementBuilderImplementation$_get_el_$ref_ff87uu(), null);
    return tmp0.t1();
  }
  function ElementBuilderImplementation$el$delegate$lambda(this$0) {
    return function () {
      return document.createElement(this$0.k34_1);
    };
  }
  function ElementBuilderImplementation$_get_el_$ref_ff87uu() {
    return function (p0) {
      return _get_el__ndc0ck(p0);
    };
  }
  function ElementBuilderImplementation(tagName) {
    this.k34_1 = tagName;
    var tmp = this;
    tmp.l34_1 = lazy(ElementBuilderImplementation$el$delegate$lambda(this));
  }
  protoOf(ElementBuilderImplementation).d2b = function () {
    var tmp = _get_el__ndc0ck(this).cloneNode();
    return tmp instanceof Element ? tmp : THROW_CCE();
  };
  function Video_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.e1h(162063317);
    sourceInformation($composer_0, 'C(Video)281@12206L103:Elements.kt#97hrze');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.u1h(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.u1h(content_0._v) ? 32 : 16);
    if ($composer_0.w1h(!(($dirty & 19) === 18), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(162063317, $dirty, -1, 'org.jetbrains.compose.web.dom.Video (Elements.kt:280)');
      }
      TagElement(get_Video(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.j1h();
    }
    var tmp0_safe_receiver = $composer_0.f1h();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y21(Video$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Img_0(src, alt, attrs, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var alt_0 = {_v: alt};
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.e1h(140604733);
    sourceInformation($composer_0, 'C(Img)P(2)648@21554L92,646@21499L169:Elements.kt#97hrze');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.r1h(src) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.r1h(alt_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.u1h(attrs_0._v) ? 256 : 128);
    if ($composer_0.w1h(!(($dirty & 147) === 146), $dirty & 1)) {
      if (!(($default & 2) === 0)) {
        alt_0._v = '';
      }
      if (!(($default & 4) === 0)) {
        attrs_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(140604733, $dirty, -1, 'org.jetbrains.compose.web.dom.Img (Elements.kt:646)');
      }
      var tmp = get_Img();
      sourceInformationMarkerStart($composer_0, 1977167545, 'CC(remember):Elements.kt#9igjgp');
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(!!(($dirty & 14) === 4 | ($dirty & 112) === 32) | ($dirty & 896) === 256);
      // Inline function 'kotlin.let' call
      var it = tmp0.p1h();
      var tmp_0;
      if (invalid || it === Companion_getInstance().r1g_1) {
        var value = Img$lambda(src, alt_0, attrs_0);
        tmp0.q1h(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      TagElement(tmp, tmp0_group, null, $composer_0, 384);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.j1h();
    }
    var tmp1_safe_receiver = $composer_0.f1h();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.y21(Img$lambda_0(src, alt_0, attrs_0, $changed, $default));
    }
  }
  function A_0(href, attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var href_0 = {_v: href};
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.e1h(1783231114);
    sourceInformation($composer_0, 'C(A)P(2)511@17117L160,509@17056L254:Elements.kt#97hrze');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.r1h(href_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.u1h(attrs_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.u1h(content_0._v) ? 256 : 128);
    if ($composer_0.w1h(!(($dirty & 147) === 146), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        href_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 4) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(1783231114, $dirty, -1, 'org.jetbrains.compose.web.dom.A (Elements.kt:508)');
      }
      var tmp = get_A();
      sourceInformationMarkerStart($composer_0, -6843510, 'CC(remember):Elements.kt#9igjgp');
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(($dirty & 14) === 4 | ($dirty & 112) === 32);
      // Inline function 'kotlin.let' call
      var it = tmp0.p1h();
      var tmp_0;
      if (invalid || it === Companion_getInstance().r1g_1) {
        var value = A$lambda(href_0, attrs_0);
        tmp0.q1h(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      TagElement(tmp, tmp0_group, content_0._v, $composer_0, 896 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.j1h();
    }
    var tmp1_safe_receiver = $composer_0.f1h();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.y21(A$lambda_0(href_0, attrs_0, content_0, $changed, $default));
    }
  }
  function Button_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.e1h(686179432);
    sourceInformation($composer_0, 'C(Button)527@17455L74:Elements.kt#97hrze');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.u1h(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.u1h(content_0._v) ? 32 : 16);
    if ($composer_0.w1h(!(($dirty & 19) === 18), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(686179432, $dirty, -1, 'org.jetbrains.compose.web.dom.Button (Elements.kt:527)');
      }
      TagElement(get_Button(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.j1h();
    }
    var tmp0_safe_receiver = $composer_0.f1h();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y21(Button$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Br_0(attrs, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.e1h(-1362499962);
    sourceInformation($composer_0, 'C(Br)621@20695L67:Elements.kt#97hrze');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.u1h(attrs_0._v) ? 4 : 2);
    if ($composer_0.w1h(!(($dirty & 3) === 2), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-1362499962, $dirty, -1, 'org.jetbrains.compose.web.dom.Br (Elements.kt:621)');
      }
      TagElement(get_Br(), attrs_0._v, null, $composer_0, 384 | 112 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.j1h();
    }
    var tmp0_safe_receiver = $composer_0.f1h();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y21(Br$lambda(attrs_0, $changed, $default));
    }
  }
  function Span_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.e1h(1254704640);
    sourceInformation($composer_0, 'C(Span)617@20546L72:Elements.kt#97hrze');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.u1h(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.u1h(content_0._v) ? 32 : 16);
    if ($composer_0.w1h(!(($dirty & 19) === 18), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(1254704640, $dirty, -1, 'org.jetbrains.compose.web.dom.Span (Elements.kt:617)');
      }
      TagElement(get_Span(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.j1h();
    }
    var tmp0_safe_receiver = $composer_0.f1h();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y21(Span$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Style_0(applyAttrs, cssRules, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var applyAttrs_0 = {_v: applyAttrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.e1h(244974285);
    sourceInformation($composer_0, 'C(Style)1005@29808L92,1010@29908L272,1003@29743L437:Elements.kt#97hrze');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.u1h(applyAttrs_0._v) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.u1h(cssRules) ? 32 : 16);
    if ($composer_0.w1h(!(($dirty & 19) === 18), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        applyAttrs_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(244974285, $dirty, -1, 'org.jetbrains.compose.web.dom.Style (Elements.kt:1002)');
      }
      var tmp = get_Style();
      sourceInformationMarkerStart($composer_0, -802907287, 'CC(remember):Elements.kt#9igjgp');
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it = tmp0.p1h();
      var tmp_0;
      if (invalid || it === Companion_getInstance().r1g_1) {
        var value = Style$lambda(applyAttrs_0);
        tmp0.q1h(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(962227798, true, Style$lambda_0(cssRules), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.r1h(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.p1h();
      var tmp_2;
      if (invalid_0 || it_0 === Companion_getInstance().r1g_1) {
        var value_0 = ComposableLambda$invoke$ref(dispatchReceiver);
        $composer_1.q1h(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0_0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      TagElement(tmp, tmp0_group, tmp0_0, $composer_0, 384);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.j1h();
    }
    var tmp1_safe_receiver = $composer_0.f1h();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.y21(Style$lambda_1(applyAttrs_0, cssRules, $changed, $default));
    }
  }
  function clearCSSRules(_this__u8e3s4) {
    _init_properties_Elements_kt__eyv5nt();
    // Inline function 'kotlin.repeat' call
    var times = _this__u8e3s4.cssRules.length;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _this__u8e3s4.deleteRule(0);
      }
       while (inductionVariable < times);
  }
  function Text$lambda() {
    _init_properties_Elements_kt__eyv5nt();
    return new DomNodeWrapper(document.createTextNode(''));
  }
  function Text$lambda_0($this$set, value) {
    _init_properties_Elements_kt__eyv5nt();
    var tmp = $this$set.k2z();
    (tmp instanceof Text ? tmp : THROW_CCE()).data = value;
    return Unit_instance;
  }
  function Text$lambda_1($value, $$changed) {
    return function ($composer, $force) {
      Text_0($value, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function Div$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Div_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Video$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Video_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Img$lambda($src, $alt, $attrs) {
    return function ($this$TagElement) {
      alt(src($this$TagElement, $src), $alt._v);
      var tmp;
      if (!($attrs._v == null)) {
        tmp = $attrs._v($this$TagElement);
      }
      return Unit_instance;
    };
  }
  function Img$lambda_0($src, $alt, $attrs, $$changed, $$default) {
    return function ($composer, $force) {
      Img_0($src, $alt._v, $attrs._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function A$lambda($href, $attrs) {
    return function ($this$TagElement) {
      var tmp;
      if (!($href._v == null)) {
        href($this$TagElement, $href._v);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!($attrs._v == null)) {
        tmp_0 = $attrs._v($this$TagElement);
      }
      return Unit_instance;
    };
  }
  function A$lambda_0($href, $attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      A_0($href._v, $attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Button$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Button_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Br$lambda($attrs, $$changed, $$default) {
    return function ($composer, $force) {
      Br_0($attrs._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Span$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Span_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Style$lambda($applyAttrs) {
    return function ($this$TagElement) {
      var tmp;
      if (!($applyAttrs._v == null)) {
        tmp = $applyAttrs._v($this$TagElement);
      }
      return Unit_instance;
    };
  }
  function Style$$inlined$run$2$2$1($cssStylesheet) {
    this.m34_1 = $cssStylesheet;
  }
  protoOf(Style$$inlined$run$2$2$1).kt = function () {
    var tmp0_safe_receiver = this.m34_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      clearCSSRules(tmp0_safe_receiver);
    }
  };
  function Style$lambda$lambda($this_TagElement, $cssRules) {
    return function ($this$DisposableEffect) {
      var tmp = $this_TagElement.u30($this$DisposableEffect).sheet;
      var cssStylesheet = tmp instanceof CSSStyleSheet ? tmp : null;
      if (cssStylesheet == null)
        null;
      else {
        setCSSRules(cssStylesheet, $cssRules);
      }
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new Style$$inlined$run$2$2$1(cssStylesheet);
    };
  }
  function Style$lambda_0($cssRules) {
    return function ($this$TagElement, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C1011@29960L214,1011@29918L256:Elements.kt#97hrze');
      var $dirty = $changed;
      var tmp;
      if (($changed & 6) === 0) {
        $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.r1h($this$TagElement) : $composer_0.u1h($this$TagElement)) ? 4 : 2);
        tmp = Unit_instance;
      }
      var tmp_0;
      if ($composer_0.w1h(!(($dirty & 19) === 18), $dirty & 1)) {
        if (isTraceInProgress()) {
          traceEventStart(962227798, $dirty, -1, 'org.jetbrains.compose.web.dom.Style.<anonymous> (Elements.kt:1011)');
        }
        var tmp_1 = $cssRules.n();
        sourceInformationMarkerStart($composer_0, 1282947116, 'CC(remember):Elements.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = !!((($dirty & 14) === 4 || (!(($dirty & 8) === 0) && $composer_0.u1h($this$TagElement))) | $composer_0.u1h($cssRules));
        // Inline function 'kotlin.let' call
        var it = $composer_0.p1h();
        var tmp_2;
        if (invalid || it === Companion_getInstance().r1g_1) {
          var value = Style$lambda$lambda($this$TagElement, $cssRules);
          $composer_0.q1h(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        DisposableEffect_0($cssRules, tmp_1, tmp0_group, $composer_0, 0);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_instance;
        }
        tmp_0 = tmp_4;
      } else {
        $composer_0.j1h();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.x2n(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function Style$lambda_1($applyAttrs, $cssRules, $$changed, $$default) {
    return function ($composer, $force) {
      Style_0($applyAttrs._v, $cssRules, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var properties_initialized_Elements_kt_gtqiqv;
  function _init_properties_Elements_kt__eyv5nt() {
    if (!properties_initialized_Elements_kt_gtqiqv) {
      properties_initialized_Elements_kt_gtqiqv = true;
      Address = new ElementBuilderImplementation('address');
      Article = new ElementBuilderImplementation('article');
      Aside = new ElementBuilderImplementation('aside');
      Header = new ElementBuilderImplementation('header');
      Area = new ElementBuilderImplementation('area');
      Audio = new ElementBuilderImplementation('audio');
      Map = new ElementBuilderImplementation('map');
      Track = new ElementBuilderImplementation('track');
      Video = new ElementBuilderImplementation('video');
      Datalist = new ElementBuilderImplementation('datalist');
      Fieldset = new ElementBuilderImplementation('fieldset');
      Legend = new ElementBuilderImplementation('legend');
      Meter = new ElementBuilderImplementation('meter');
      Output = new ElementBuilderImplementation('output');
      Progress = new ElementBuilderImplementation('progress');
      Embed = new ElementBuilderImplementation('embed');
      Iframe = new ElementBuilderImplementation('iframe');
      Object_0 = new ElementBuilderImplementation('object');
      Param = new ElementBuilderImplementation('param');
      Picture = new ElementBuilderImplementation('picture');
      Source = new ElementBuilderImplementation('source');
      Canvas = new ElementBuilderImplementation('canvas');
      DList = new ElementBuilderImplementation('dl');
      DTerm = new ElementBuilderImplementation('dt');
      DDescription = new ElementBuilderImplementation('dd');
      Div = new ElementBuilderImplementation('div');
      A = new ElementBuilderImplementation('a');
      Input = new ElementBuilderImplementation('input');
      Button = new ElementBuilderImplementation('button');
      H1 = new ElementBuilderImplementation('h1');
      H2 = new ElementBuilderImplementation('h2');
      H3 = new ElementBuilderImplementation('h3');
      H4 = new ElementBuilderImplementation('h4');
      H5 = new ElementBuilderImplementation('h5');
      H6 = new ElementBuilderImplementation('h6');
      P = new ElementBuilderImplementation('p');
      Em = new ElementBuilderImplementation('em');
      I = new ElementBuilderImplementation('i');
      B = new ElementBuilderImplementation('b');
      Small = new ElementBuilderImplementation('small');
      Sup = new ElementBuilderImplementation('sup');
      Sub = new ElementBuilderImplementation('sub');
      Blockquote = new ElementBuilderImplementation('blockquote');
      Span = new ElementBuilderImplementation('span');
      Br = new ElementBuilderImplementation('br');
      Ul = new ElementBuilderImplementation('ul');
      Ol = new ElementBuilderImplementation('ol');
      Li = new ElementBuilderImplementation('li');
      Img = new ElementBuilderImplementation('img');
      Form = new ElementBuilderImplementation('form');
      Select = new ElementBuilderImplementation('select');
      Option = new ElementBuilderImplementation('option');
      OptGroup = new ElementBuilderImplementation('optgroup');
      Section = new ElementBuilderImplementation('section');
      TextArea = new ElementBuilderImplementation('textarea');
      Nav = new ElementBuilderImplementation('nav');
      Pre = new ElementBuilderImplementation('pre');
      Code = new ElementBuilderImplementation('code');
      Main = new ElementBuilderImplementation('main');
      Footer = new ElementBuilderImplementation('footer');
      Hr = new ElementBuilderImplementation('hr');
      Label = new ElementBuilderImplementation('label');
      Table = new ElementBuilderImplementation('table');
      Caption = new ElementBuilderImplementation('caption');
      Col = new ElementBuilderImplementation('col');
      Colgroup = new ElementBuilderImplementation('colgroup');
      Tr = new ElementBuilderImplementation('tr');
      Thead = new ElementBuilderImplementation('thead');
      Th = new ElementBuilderImplementation('th');
      Td = new ElementBuilderImplementation('td');
      Tbody = new ElementBuilderImplementation('tbody');
      Tfoot = new ElementBuilderImplementation('tfoot');
      Style = new ElementBuilderImplementation('style');
    }
  }
  function stringPresentation(_this__u8e3s4, baseIndent, indent, delimiter) {
    baseIndent = baseIndent === VOID ? '' : baseIndent;
    indent = indent === VOID ? '    ' : indent;
    delimiter = delimiter === VOID ? '\n' : delimiter;
    var cssRuleDeclaration = _this__u8e3s4;
    // Inline function 'kotlin.collections.mutableListOf' call
    var strings = ArrayList_init_$Create$();
    strings.h(baseIndent + cssRuleDeclaration.y31() + ' {');
    if (isInterface(cssRuleDeclaration, CSSStyledRuleDeclaration)) {
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = cssRuleDeclaration.x31().u32().i();
      while (_iterator__ex2g4s.j()) {
        var element = _iterator__ex2g4s.k();
        var name = element.me();
        var value = element.ne();
        var important = element.c33();
        strings.h(baseIndent + indent + name + ': ' + toString(value) + (important ? ' !important' : '') + ';');
      }
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_0 = cssRuleDeclaration.x31().v32().i();
      while (_iterator__ex2g4s_0.j()) {
        var element_0 = _iterator__ex2g4s_0.k();
        var name_0 = element_0.me();
        var value_0 = element_0.ne();
        strings.h(baseIndent + indent + '--' + name_0 + ': ' + toString(value_0) + ';');
      }
    } else {
      if (isInterface(cssRuleDeclaration, CSSGroupingRuleDeclaration)) {
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s_1 = cssRuleDeclaration.i32().i();
        while (_iterator__ex2g4s_1.j()) {
          var element_1 = _iterator__ex2g4s_1.k();
          strings.h(stringPresentation(element_1, baseIndent + indent, indent, delimiter));
        }
      } else {
        if (cssRuleDeclaration instanceof CSSKeyframesRuleDeclaration) {
          // Inline function 'kotlin.collections.forEach' call
          var _iterator__ex2g4s_2 = cssRuleDeclaration.a32_1.i();
          while (_iterator__ex2g4s_2.j()) {
            var element_2 = _iterator__ex2g4s_2.k();
            strings.h(stringPresentation(element_2, baseIndent + indent, indent, delimiter));
          }
        }
      }
    }
    strings.h(baseIndent + '}');
    return joinToString(strings, delimiter);
  }
  function setCSSRules(_this__u8e3s4, cssRules) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = cssRules.i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      addRule(_this__u8e3s4, element);
    }
  }
  function addRule(_this__u8e3s4, cssRuleDeclaration) {
    var tmp0_safe_receiver = addRule_0(_this__u8e3s4, cssRuleDeclaration.y31() + ' {}');
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      fillRule(cssRuleDeclaration, tmp0_safe_receiver);
    }
  }
  function addRule_0(_this__u8e3s4, cssRule) {
    var cssRuleIndex = _this__u8e3s4.insertRule(cssRule, _this__u8e3s4.cssRules.length);
    return _this__u8e3s4.cssRules.item(cssRuleIndex);
  }
  function fillRule(cssRuleDeclaration, cssRule) {
    if (isInterface(cssRuleDeclaration, CSSStyledRuleDeclaration)) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var cssStyleRule = cssRule;
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = cssRuleDeclaration.x31().u32().i();
      while (_iterator__ex2g4s.j()) {
        var element = _iterator__ex2g4s.k();
        var name = element.me();
        var value = element.ne();
        var important = element.c33();
        setProperty(cssStyleRule.style, name, value, important);
      }
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_0 = cssRuleDeclaration.x31().v32().i();
      while (_iterator__ex2g4s_0.j()) {
        var element_0 = _iterator__ex2g4s_0.k();
        var name_0 = element_0.me();
        var value_0 = element_0.ne();
        setVariable(cssStyleRule.style, name_0, value_0);
      }
    } else {
      if (isInterface(cssRuleDeclaration, CSSGroupingRuleDeclaration)) {
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var cssGroupingRule = cssRule;
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s_1 = cssRuleDeclaration.i32().i();
        while (_iterator__ex2g4s_1.j()) {
          var element_1 = _iterator__ex2g4s_1.k();
          addRule_1(cssGroupingRule, element_1);
        }
      } else {
        if (cssRuleDeclaration instanceof CSSKeyframesRuleDeclaration) {
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var cssGroupingRule_0 = cssRule;
          // Inline function 'kotlin.collections.forEach' call
          var _iterator__ex2g4s_2 = cssRuleDeclaration.a32_1.i();
          while (_iterator__ex2g4s_2.j()) {
            var element_2 = _iterator__ex2g4s_2.k();
            addRule_2(cssGroupingRule_0, element_2);
          }
        }
      }
    }
  }
  function setProperty(style, name, value, important) {
    style.setProperty(name, toString(value), important ? 'important' : '');
  }
  function setVariable(style, name, value) {
    style.setProperty('--' + name, toString(value));
  }
  function addRule_1(_this__u8e3s4, cssRuleDeclaration) {
    var tmp0_safe_receiver = addRule_3(_this__u8e3s4, cssRuleDeclaration.y31() + ' {}');
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      fillRule(cssRuleDeclaration, tmp0_safe_receiver);
    }
  }
  function addRule_2(_this__u8e3s4, cssRuleDeclaration) {
    var tmp0_safe_receiver = addRule_4(_this__u8e3s4, cssRuleDeclaration.y31() + ' {}');
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      fillRule(cssRuleDeclaration, tmp0_safe_receiver);
    }
  }
  function addRule_3(_this__u8e3s4, cssRule) {
    var cssRuleIndex = _this__u8e3s4.insertRule(cssRule, _this__u8e3s4.cssRules.length);
    return _this__u8e3s4.cssRules.item(cssRuleIndex);
  }
  function addRule_4(_this__u8e3s4, cssRule) {
    // Inline function 'org.jetbrains.compose.web.css.appendRule' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.appendRule(cssRule);
    return _this__u8e3s4.cssRules.item(_this__u8e3s4.cssRules.length - 1 | 0);
  }
  var org_jetbrains_compose_web_events_SyntheticAnimationEvent$stable;
  var org_jetbrains_compose_web_events_SyntheticChangeEvent$stable;
  var org_jetbrains_compose_web_events_SyntheticClipboardEvent$stable;
  var androidx_compose_web_events_SyntheticEvent$stable;
  function SyntheticEvent(nativeEvent) {
    this.n34_1 = nativeEvent;
    var tmp = this;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.o34_1 = this.n34_1.target;
    this.p34_1 = this.n34_1.bubbles;
    this.q34_1 = this.n34_1.cancelable;
    this.r34_1 = this.n34_1.composed;
    this.s34_1 = this.n34_1.currentTarget;
    this.t34_1 = this.n34_1.eventPhase;
    this.u34_1 = this.n34_1.defaultPrevented;
    this.v34_1 = this.n34_1.timeStamp;
    this.w34_1 = this.n34_1.type;
    this.x34_1 = this.n34_1.isTrusted;
  }
  protoOf(SyntheticEvent).y34 = function () {
    return this.n34_1.preventDefault();
  };
  protoOf(SyntheticEvent).z34 = function () {
    return this.n34_1.stopPropagation();
  };
  var org_jetbrains_compose_web_events_SyntheticFocusEvent$stable;
  var org_jetbrains_compose_web_events_SyntheticInputEvent$stable;
  var androidx_compose_web_events_SyntheticMouseEvent$stable;
  var androidx_compose_web_events_SyntheticWheelEvent$stable;
  var androidx_compose_web_events_SyntheticDragEvent$stable;
  function SyntheticMouseEvent(nativeEvent) {
    SyntheticEvent.call(this, nativeEvent);
    this.l35_1 = nativeEvent;
    this.m35_1 = nativeEvent.altKey;
    this.n35_1 = nativeEvent.button;
    this.o35_1 = nativeEvent.buttons;
    this.p35_1 = nativeEvent.clientX;
    this.q35_1 = nativeEvent.clientY;
    this.r35_1 = nativeEvent.ctrlKey;
    this.s35_1 = nativeEvent.metaKey;
    var tmp = this;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = nativeEvent.movementX;
    var tmp0_elvis_lhs = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : null;
    tmp.t35_1 = tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs;
    var tmp_1 = this;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = nativeEvent.movementY;
    var tmp0_elvis_lhs_0 = (!(tmp_2 == null) ? typeof tmp_2 === 'number' : false) ? tmp_2 : null;
    tmp_1.u35_1 = tmp0_elvis_lhs_0 == null ? 0 : tmp0_elvis_lhs_0;
    this.v35_1 = nativeEvent.offsetX;
    this.w35_1 = nativeEvent.offsetY;
    this.x35_1 = nativeEvent.pageX;
    this.y35_1 = nativeEvent.pageY;
    this.z35_1 = nativeEvent.region;
    this.a36_1 = nativeEvent.relatedTarget;
    this.b36_1 = nativeEvent.screenX;
    this.c36_1 = nativeEvent.screenY;
    this.d36_1 = nativeEvent.shiftKey;
    this.e36_1 = nativeEvent.x;
    this.f36_1 = nativeEvent.y;
  }
  var org_jetbrains_compose_web_events_SyntheticSelectEvent$stable;
  var org_jetbrains_compose_web_events_SyntheticSubmitEvent$stable;
  var org_jetbrains_compose_web_events_SyntheticTouchEvent$stable;
  //region block: post-declaration
  protoOf(AttrsScopeBuilder).c31 = tabIndex;
  protoOf(EventsListenerScopeBuilder).f31 = onClick;
  protoOf(StyleScopeBuilder).q32 = property_0;
  protoOf(StyleScopeBuilder).r32 = property_1;
  protoOf(StyleScopeBuilder).t32 = variable;
  defineProp(protoOf(CSSUnitValueTyped), 'value', function () {
    return this.t1();
  });
  defineProp(protoOf(CSSUnitValueTyped), 'unit', function () {
    return this.y32();
  });
  protoOf(StyleSheet).l33 = style_0;
  protoOf(StyleSheet).n33 = style;
  protoOf(StyleSheet).o33 = invoke;
  protoOf(StyleSheet).returnUniversalSelector = returnUniversalSelector;
  protoOf(StyleSheet).returnHoverSelector = returnHoverSelector;
  protoOf(StyleSheet).p33 = get_hover;
  protoOf(CSSRulesHolderState).k33 = add;
  //endregion
  //region block: init
  org_jetbrains_compose_web_attributes_EventsListenerScopeBuilder$stable = 8;
  org_jetbrains_compose_web_attributes_InputType_Button$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_Checkbox$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_Color$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_Date$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_DateTimeLocal$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_Email$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_File$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_Hidden$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_Month$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_Number$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_Password$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_Radio$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_Range$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_Search$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_Submit$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_Tel$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_Text$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_Time$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_Url$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_Week$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_InputTypeWithStringValue$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_InputTypeWithUnitValue$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_InputTypeCheckedValue$stable = 0;
  org_jetbrains_compose_web_attributes_InputType_InputTypeNumberValue$stable = 0;
  org_jetbrains_compose_web_attributes_InputType$stable = 0;
  org_jetbrains_compose_web_attributes_DirType_Ltr$stable = 0;
  org_jetbrains_compose_web_attributes_DirType_Rtl$stable = 0;
  org_jetbrains_compose_web_attributes_DirType_Auto$stable = 0;
  org_jetbrains_compose_web_attributes_DirType$stable = 0;
  org_jetbrains_compose_web_attributes_ATarget_Blank$stable = 0;
  org_jetbrains_compose_web_attributes_ATarget_Parent$stable = 0;
  org_jetbrains_compose_web_attributes_ATarget_Self$stable = 0;
  org_jetbrains_compose_web_attributes_ATarget_Top$stable = 0;
  org_jetbrains_compose_web_attributes_ATarget$stable = 0;
  org_jetbrains_compose_web_attributes_ARel_Alternate$stable = 0;
  org_jetbrains_compose_web_attributes_ARel_Author$stable = 0;
  org_jetbrains_compose_web_attributes_ARel_Bookmark$stable = 0;
  org_jetbrains_compose_web_attributes_ARel_External$stable = 0;
  org_jetbrains_compose_web_attributes_ARel_Help$stable = 0;
  org_jetbrains_compose_web_attributes_ARel_License$stable = 0;
  org_jetbrains_compose_web_attributes_ARel_Next$stable = 0;
  org_jetbrains_compose_web_attributes_ARel_First$stable = 0;
  org_jetbrains_compose_web_attributes_ARel_Prev$stable = 0;
  org_jetbrains_compose_web_attributes_ARel_Last$stable = 0;
  org_jetbrains_compose_web_attributes_ARel_NoFollow$stable = 0;
  org_jetbrains_compose_web_attributes_ARel_NoOpener$stable = 0;
  org_jetbrains_compose_web_attributes_ARel_NoReferrer$stable = 0;
  org_jetbrains_compose_web_attributes_ARel_Opener$stable = 0;
  org_jetbrains_compose_web_attributes_ARel_Search$stable = 0;
  org_jetbrains_compose_web_attributes_ARel_Tag$stable = 0;
  org_jetbrains_compose_web_attributes_ARel_CustomARel$stable = 0;
  org_jetbrains_compose_web_attributes_ARel$stable = 0;
  org_jetbrains_compose_web_attributes_ButtonFormTarget_Blank$stable = 0;
  org_jetbrains_compose_web_attributes_ButtonFormTarget_Parent$stable = 0;
  org_jetbrains_compose_web_attributes_ButtonFormTarget_Self$stable = 0;
  org_jetbrains_compose_web_attributes_ButtonFormTarget_Top$stable = 0;
  org_jetbrains_compose_web_attributes_ButtonFormTarget$stable = 0;
  org_jetbrains_compose_web_attributes_FormTarget_Blank$stable = 0;
  org_jetbrains_compose_web_attributes_FormTarget_Parent$stable = 0;
  org_jetbrains_compose_web_attributes_FormTarget_Self$stable = 0;
  org_jetbrains_compose_web_attributes_FormTarget_Top$stable = 0;
  org_jetbrains_compose_web_attributes_FormTarget$stable = 0;
  org_jetbrains_compose_web_attributes_InputFormTarget_Blank$stable = 0;
  org_jetbrains_compose_web_attributes_InputFormTarget_Parent$stable = 0;
  org_jetbrains_compose_web_attributes_InputFormTarget_Self$stable = 0;
  org_jetbrains_compose_web_attributes_InputFormTarget_Top$stable = 0;
  org_jetbrains_compose_web_attributes_InputFormTarget$stable = 0;
  org_jetbrains_compose_web_attributes_SyntheticEventListener$stable = 0;
  org_jetbrains_compose_web_attributes_AnimationEventListener$stable = 0;
  org_jetbrains_compose_web_attributes_MouseEventListener$stable = 0;
  org_jetbrains_compose_web_attributes_MouseWheelEventListener$stable = 0;
  org_jetbrains_compose_web_attributes_KeyboardEventListener$stable = 0;
  org_jetbrains_compose_web_attributes_FocusEventListener$stable = 0;
  org_jetbrains_compose_web_attributes_TouchEventListener$stable = 0;
  org_jetbrains_compose_web_attributes_DragEventListener$stable = 0;
  org_jetbrains_compose_web_attributes_ClipboardEventListener$stable = 0;
  org_jetbrains_compose_web_attributes_InputEventListener$stable = 0;
  org_jetbrains_compose_web_attributes_ChangeEventListener$stable = 0;
  org_jetbrains_compose_web_attributes_SelectEventListener$stable = 0;
  org_jetbrains_compose_web_attributes_builders_InputAttrsScope$stable = 8;
  androidx_compose_web_attributes_SelectAttrsScope$stable = 8;
  org_jetbrains_compose_web_attributes_builders_TextAreaAttrsScope$stable = 8;
  org_jetbrains_compose_web_css_CSSKeyframesRule$stable = 8;
  org_jetbrains_compose_web_css_CSSBuilderImpl$stable = 8;
  org_jetbrains_compose_web_css_GridAutoFlow$stable = 0;
  Companion_instance = new Companion();
  Companion_instance_0 = new Companion_0();
  Companion_instance_1 = new Companion_1();
  Companion_instance_2 = new Companion_2();
  Companion_instance_3 = new Companion_3();
  Companion_instance_4 = new Companion_4();
  Companion_instance_5 = new Companion_5();
  org_jetbrains_compose_web_css_CSSKeyframesRuleDeclaration$stable = 8;
  org_jetbrains_compose_web_css_CSSKeyframe_From$stable = 0;
  org_jetbrains_compose_web_css_CSSKeyframe_To$stable = 0;
  org_jetbrains_compose_web_css_CSSKeyframe_Percentage$stable = 8;
  org_jetbrains_compose_web_css_CSSKeyframe_Combine$stable = 8;
  org_jetbrains_compose_web_css_CSSKeyframe$stable = 0;
  org_jetbrains_compose_web_css_CSSKeyframeRuleDeclaration$stable = 8;
  org_jetbrains_compose_web_css_CSSKeyframesBuilder$stable = 8;
  org_jetbrains_compose_web_css_CSSMediaQuery_Raw$stable = 0;
  org_jetbrains_compose_web_css_CSSMediaQuery_MediaType$stable = 0;
  org_jetbrains_compose_web_css_CSSMediaQuery_MediaFeature$stable = 8;
  org_jetbrains_compose_web_css_CSSMediaQuery_NotFeature$stable = 8;
  org_jetbrains_compose_web_css_CSSMediaQuery_And$stable = 8;
  org_jetbrains_compose_web_css_CSSMediaQuery_Not$stable = 8;
  org_jetbrains_compose_web_css_CSSMediaQuery_Combine$stable = 8;
  org_jetbrains_compose_web_css_CSSMediaQuery_Only$stable = 8;
  org_jetbrains_compose_web_css_CSSMediaQuery_Or$stable = 8;
  org_jetbrains_compose_web_css_CSSMediaRuleDeclaration$stable = 8;
  org_jetbrains_compose_web_css_CSSCalcValue$stable = 8;
  org_jetbrains_compose_web_css_CSSRuleBuilderImpl$stable = 8;
  org_jetbrains_compose_web_css_CSSStyleRuleDeclaration$stable = 8;
  org_jetbrains_compose_web_css_CSSUnitValueTyped$stable = 0;
  Companion_instance_6 = new Companion_6();
  org_jetbrains_compose_web_css_Color_RGB$stable = 8;
  org_jetbrains_compose_web_css_Color_RGBA$stable = 8;
  org_jetbrains_compose_web_css_Color_HSL$stable = 8;
  org_jetbrains_compose_web_css_Color_HSLA$stable = 8;
  org_jetbrains_compose_web_css_Color$stable = 0;
  Color_instance = new Color();
  org_jetbrains_compose_web_css_CSSStyleVariable$stable = 0;
  org_jetbrains_compose_web_css_StyleScopeBuilder$stable = 8;
  org_jetbrains_compose_web_css_StylePropertyDeclaration$stable = 8;
  org_jetbrains_compose_web_css_CSSRulesHolderState$stable = 0;
  org_jetbrains_compose_web_css_StyleSheet_CSSSelfSelector$stable = 8;
  org_jetbrains_compose_web_css_StyleSheet$stable = 8;
  Companion_instance_7 = new Companion_7();
  org_jetbrains_compose_web_css_CSSAnimation$stable = 8;
  org_jetbrains_compose_web_css_CSSBorder$stable = 8;
  org_jetbrains_compose_web_css_Transition$stable = 8;
  org_jetbrains_compose_web_css_Transitions$stable = 8;
  org_jetbrains_compose_web_dom_ElementScopeBase$stable = 8;
  org_jetbrains_compose_web_dom_ElementScopeImpl$stable = 8;
  org_jetbrains_compose_web_events_SyntheticAnimationEvent$stable = 8;
  org_jetbrains_compose_web_events_SyntheticChangeEvent$stable = 8;
  org_jetbrains_compose_web_events_SyntheticClipboardEvent$stable = 8;
  androidx_compose_web_events_SyntheticEvent$stable = 8;
  org_jetbrains_compose_web_events_SyntheticFocusEvent$stable = 8;
  org_jetbrains_compose_web_events_SyntheticInputEvent$stable = 8;
  androidx_compose_web_events_SyntheticMouseEvent$stable = 8;
  androidx_compose_web_events_SyntheticWheelEvent$stable = 8;
  androidx_compose_web_events_SyntheticDragEvent$stable = 8;
  org_jetbrains_compose_web_events_SyntheticSelectEvent$stable = 8;
  org_jetbrains_compose_web_events_SyntheticSubmitEvent$stable = 8;
  org_jetbrains_compose_web_events_SyntheticTouchEvent$stable = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = ButtonType_Button_getInstance;
  _.$_$.b = StyleSheet_init_$Init$;
  _.$_$.c = StyleSheet_init_$Create$;
  _.$_$.d = Companion_instance_2;
  _.$_$.e = Companion_instance_3;
  _.$_$.f = From_getInstance;
  _.$_$.g = To_getInstance;
  _.$_$.h = Color_instance;
  _.$_$.i = Companion_instance_0;
  _.$_$.j = Companion_instance_4;
  _.$_$.k = Companion_instance_5;
  _.$_$.l = Companion_instance;
  _.$_$.m = Companion_instance_1;
  _.$_$.n = classes;
  _.$_$.o = tabIndex;
  _.$_$.p = AttrsScope;
  _.$_$.q = onClick;
  _.$_$.r = type;
  _.$_$.s = CSSBorder;
  _.$_$.t = CSSGroupingRuleDeclaration;
  _.$_$.u = CSSKeyframeRuleDeclaration;
  _.$_$.v = CSSKeyframesRuleDeclaration;
  _.$_$.w = MediaFeature;
  _.$_$.x = Raw;
  _.$_$.y = CSSMediaRuleDeclaration;
  _.$_$.z = CSSStyledRuleDeclaration;
  _.$_$.a1 = Color_0;
  _.$_$.b1 = property_0;
  _.$_$.c1 = property_1;
  _.$_$.d1 = variable;
  _.$_$.e1 = StyleScopeBuilder;
  _.$_$.f1 = StyleScope;
  _.$_$.g1 = StyleSheet;
  _.$_$.h1 = alignItems;
  _.$_$.i1 = alignSelf;
  _.$_$.j1 = backgroundColor;
  _.$_$.k1 = borderRadius;
  _.$_$.l1 = border;
  _.$_$.m1 = bottom;
  _.$_$.n1 = boxSizing;
  _.$_$.o1 = color;
  _.$_$.p1 = color_0;
  _.$_$.q1 = columnGap;
  _.$_$.r1 = get_cssRem;
  _.$_$.s1 = display;
  _.$_$.t1 = get_em;
  _.$_$.u1 = flexDirection;
  _.$_$.v1 = flexGrow;
  _.$_$.w1 = fontFamily;
  _.$_$.x1 = fontSize;
  _.$_$.y1 = fontWeight;
  _.$_$.z1 = get_fr;
  _.$_$.a2 = gap;
  _.$_$.b2 = gridArea;
  _.$_$.c2 = gridAutoColumns;
  _.$_$.d2 = gridAutoRows;
  _.$_$.e2 = gridRow;
  _.$_$.f2 = gridTemplateColumns;
  _.$_$.g2 = gridTemplateRows;
  _.$_$.h2 = height;
  _.$_$.i2 = justifyContent;
  _.$_$.j2 = left;
  _.$_$.k2 = letterSpacing;
  _.$_$.l2 = lineHeight;
  _.$_$.m2 = marginBottom;
  _.$_$.n2 = margin;
  _.$_$.o2 = maxWidth;
  _.$_$.p2 = media;
  _.$_$.q2 = minHeight;
  _.$_$.r2 = minWidth;
  _.$_$.s2 = get_ms;
  _.$_$.t2 = opacity;
  _.$_$.u2 = org_jetbrains_compose_web_css_StyleSheet$stableprop_getter;
  _.$_$.v2 = padding;
  _.$_$.w2 = get_percent;
  _.$_$.x2 = position;
  _.$_$.y2 = get_px;
  _.$_$.z2 = right;
  _.$_$.a3 = rowGap;
  _.$_$.b3 = style_1;
  _.$_$.c3 = top;
  _.$_$.d3 = unaryMinus;
  _.$_$.e3 = get_vh;
  _.$_$.f3 = get_vw;
  _.$_$.g3 = width_0;
  _.$_$.h3 = width;
  _.$_$.i3 = A_0;
  _.$_$.j3 = Br_0;
  _.$_$.k3 = Button_0;
  _.$_$.l3 = Div_0;
  _.$_$.m3 = ElementBuilder;
  _.$_$.n3 = Img_0;
  _.$_$.o3 = Span_0;
  _.$_$.p3 = Style_0;
  _.$_$.q3 = TagElement;
  _.$_$.r3 = Text_0;
  _.$_$.s3 = Video_0;
  _.$_$.t3 = stringPresentation;
  //endregion
  return _;
}));

//# sourceMappingURL=html-html-core.js.map
