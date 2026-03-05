(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './androidx-compose-runtime-runtime.js', './kotlinx-coroutines-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./androidx-compose-runtime-runtime.js'), require('./kotlinx-coroutines-core.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'html-internal-html-core-runtime'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'html-internal-html-core-runtime'.");
    }
    if (typeof globalThis['androidx-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'html-internal-html-core-runtime'. Its dependency 'androidx-compose-runtime-runtime' was not found. Please, check whether 'androidx-compose-runtime-runtime' is loaded prior to 'html-internal-html-core-runtime'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'html-internal-html-core-runtime'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'html-internal-html-core-runtime'.");
    }
    globalThis['html-internal-html-core-runtime'] = factory(typeof globalThis['html-internal-html-core-runtime'] === 'undefined' ? {} : globalThis['html-internal-html-core-runtime'], globalThis['kotlin-kotlin-stdlib'], globalThis['androidx-compose-runtime-runtime'], globalThis['kotlinx-coroutines-core']);
  }
}(function (_, kotlin_kotlin, kotlin_androidx_compose_runtime_runtime, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.c8;
  var ensureNotNull = kotlin_kotlin.$_$.fb;
  var Unit_instance = kotlin_kotlin.$_$.e2;
  var initMetadataForClass = kotlin_kotlin.$_$.m7;
  var AbstractApplier = kotlin_androidx_compose_runtime_runtime.$_$.c;
  var THROW_CCE = kotlin_kotlin.$_$.ya;
  var VOID = kotlin_kotlin.$_$.c;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t;
  var Companion_instance = kotlin_androidx_compose_runtime_runtime.$_$.e1;
  var CoroutineImpl = kotlin_kotlin.$_$.w5;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var isInterface = kotlin_kotlin.$_$.u7;
  var initMetadataForLambda = kotlin_kotlin.$_$.q7;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.h;
  var initMetadataForObject = kotlin_kotlin.$_$.r7;
  var CoroutineDispatcher = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var get_DefaultMonotonicFrameClock = kotlin_androidx_compose_runtime_runtime.$_$.f;
  var Recomposer = kotlin_androidx_compose_runtime_runtime.$_$.l;
  var CoroutineStart_UNDISPATCHED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var ControlledComposition = kotlin_androidx_compose_runtime_runtime.$_$.e;
  var composableLambdaInstance = kotlin_androidx_compose_runtime_runtime.$_$.a;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.h5;
  var sourceInformation = kotlin_androidx_compose_runtime_runtime.$_$.v;
  var traceEventStart = kotlin_androidx_compose_runtime_runtime.$_$.y;
  var isTraceInProgress = kotlin_androidx_compose_runtime_runtime.$_$.p;
  var traceEventEnd = kotlin_androidx_compose_runtime_runtime.$_$.x;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(DomNodeWrapper, 'DomNodeWrapper');
  initMetadataForClass(DomApplier, 'DomApplier', VOID, AbstractApplier);
  initMetadataForLambda(GlobalSnapshotManager$schedule$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForObject(GlobalSnapshotManager, 'GlobalSnapshotManager');
  initMetadataForClass(JsMicrotasksDispatcher, 'JsMicrotasksDispatcher', JsMicrotasksDispatcher, CoroutineDispatcher);
  initMetadataForLambda(renderComposable$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(renderComposable$scope$1);
  //endregion
  function DomNodeWrapper(node) {
    this.j2z_1 = node;
  }
  protoOf(DomNodeWrapper).k2z = function () {
    return this.j2z_1;
  };
  protoOf(DomNodeWrapper).l2z = function (index, nodeWrapper) {
    var length = this.k2z().childNodes.length;
    if (index < length) {
      var tmp = this.k2z();
      var tmp_0 = nodeWrapper.k2z();
      // Inline function 'org.w3c.dom.get' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = this.k2z().childNodes[index];
      tmp.insertBefore(tmp_0, ensureNotNull(tmp$ret$1));
    } else {
      this.k2z().appendChild(nodeWrapper.k2z());
    }
  };
  protoOf(DomNodeWrapper).k1f = function (index, count) {
    // Inline function 'kotlin.repeat' call
    var inductionVariable = 0;
    if (inductionVariable < count)
      do {
        var index_0 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.k2z();
        // Inline function 'org.w3c.dom.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = this.k2z().childNodes[index];
        tmp.removeChild(ensureNotNull(tmp$ret$1));
      }
       while (inductionVariable < count);
  };
  protoOf(DomNodeWrapper).l1f = function (from, to, count) {
    if (from === to) {
      return Unit_instance;
    }
    var inductionVariable = 0;
    if (inductionVariable < count)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var fromIndex = from > to ? from + i | 0 : from;
        var toIndex = from > to ? to + i | 0 : (to + count | 0) - 2 | 0;
        var tmp = this.k2z();
        // Inline function 'org.w3c.dom.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = this.k2z().childNodes[fromIndex];
        var child = tmp.removeChild(ensureNotNull(tmp$ret$1));
        var tmp_0 = this.k2z();
        // Inline function 'org.w3c.dom.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$3 = this.k2z().childNodes[toIndex];
        tmp_0.insertBefore(child, ensureNotNull(tmp$ret$3));
      }
       while (inductionVariable < count);
  };
  function DomApplier(root) {
    AbstractApplier.call(this, root);
  }
  protoOf(DomApplier).p2z = function (index, instance) {
  };
  protoOf(DomApplier).i1f = function (index, instance) {
    return this.p2z(index, instance instanceof DomNodeWrapper ? instance : THROW_CCE());
  };
  protoOf(DomApplier).q2z = function (index, instance) {
    this.c1f().l2z(index, instance);
  };
  protoOf(DomApplier).j1f = function (index, instance) {
    return this.q2z(index, instance instanceof DomNodeWrapper ? instance : THROW_CCE());
  };
  protoOf(DomApplier).k1f = function (index, count) {
    this.c1f().k1f(index, count);
  };
  protoOf(DomApplier).l1f = function (from, to, count) {
    this.c1f().l1f(from, to, count);
  };
  var org_jetbrains_compose_web_internal_runtime_GlobalSnapshotManager$stable;
  function synchronize($this) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = $this.w2z_1.i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      element();
    }
    $this.w2z_1.d2();
    $this.x2z_1 = false;
  }
  function schedule($this, block) {
    $this.w2z_1.h(block);
    if (!$this.x2z_1) {
      $this.x2z_1 = true;
      launch($this.u2z_1, VOID, VOID, GlobalSnapshotManager$schedule$slambda_0(null));
    }
  }
  function GlobalSnapshotManager$globalWriteObserver$lambda(it) {
    if (!GlobalSnapshotManager_getInstance().s2z_1) {
      GlobalSnapshotManager_getInstance().s2z_1 = true;
      var tmp = GlobalSnapshotManager_getInstance();
      schedule(tmp, GlobalSnapshotManager$globalWriteObserver$lambda$lambda);
    }
    return Unit_instance;
  }
  function GlobalSnapshotManager$globalWriteObserver$lambda$lambda() {
    GlobalSnapshotManager_getInstance().s2z_1 = false;
    Companion_instance.m24();
    return Unit_instance;
  }
  function GlobalSnapshotManager$schedule$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(GlobalSnapshotManager$schedule$slambda).d19 = function ($this$launch, $completion) {
    var tmp = this.e19($this$launch, $completion);
    tmp.h8_1 = Unit_instance;
    tmp.i8_1 = null;
    return tmp.n8();
  };
  protoOf(GlobalSnapshotManager$schedule$slambda).z8 = function (p1, $completion) {
    return this.d19((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(GlobalSnapshotManager$schedule$slambda).n8 = function () {
    var suspendResult = this.h8_1;
    $sm: do
      try {
        var tmp = this.f8_1;
        if (tmp === 0) {
          this.g8_1 = 1;
          synchronize(GlobalSnapshotManager_getInstance());
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
  protoOf(GlobalSnapshotManager$schedule$slambda).e19 = function ($this$launch, completion) {
    var i = new GlobalSnapshotManager$schedule$slambda(completion);
    i.g30_1 = $this$launch;
    return i;
  };
  function GlobalSnapshotManager$schedule$slambda_0(resultContinuation) {
    var i = new GlobalSnapshotManager$schedule$slambda(resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.d19($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function GlobalSnapshotManager() {
    GlobalSnapshotManager_instance = this;
    this.r2z_1 = false;
    this.s2z_1 = false;
    this.t2z_1 = null;
    this.u2z_1 = CoroutineScope_0((new JsMicrotasksDispatcher()).jg(SupervisorJob()));
    var tmp = this;
    tmp.v2z_1 = GlobalSnapshotManager$globalWriteObserver$lambda;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.w2z_1 = ArrayList_init_$Create$();
    this.x2z_1 = false;
  }
  protoOf(GlobalSnapshotManager).h30 = function () {
    if (!this.r2z_1) {
      this.r2z_1 = true;
      this.t2z_1 = Companion_instance.a2p(this.v2z_1);
    }
  };
  var GlobalSnapshotManager_instance;
  function GlobalSnapshotManager_getInstance() {
    if (GlobalSnapshotManager_instance == null)
      new GlobalSnapshotManager();
    return GlobalSnapshotManager_instance;
  }
  var org_jetbrains_compose_web_internal_runtime_JsMicrotasksDispatcher$stable;
  function JsMicrotasksDispatcher$dispatch$lambda($block) {
    return function (it) {
      $block.fu();
      return Unit_instance;
    };
  }
  function JsMicrotasksDispatcher() {
    CoroutineDispatcher.call(this);
  }
  protoOf(JsMicrotasksDispatcher).dv = function (context, block) {
    var tmp = Promise.resolve(Unit_instance);
    tmp.then(JsMicrotasksDispatcher$dispatch$lambda(block));
  };
  function renderComposable(rootElementId, content) {
    return renderComposable_0(ensureNotNull(document.getElementById(rootElementId)), VOID, content);
  }
  function renderComposable_0(root, monotonicFrameClock, content) {
    monotonicFrameClock = monotonicFrameClock === VOID ? get_DefaultMonotonicFrameClock() : monotonicFrameClock;
    GlobalSnapshotManager_getInstance().h30();
    var context = monotonicFrameClock.jg(new JsMicrotasksDispatcher());
    var recomposer = new Recomposer(context);
    var tmp = CoroutineScope_0(context);
    var tmp_0 = CoroutineStart_UNDISPATCHED_getInstance();
    launch(tmp, VOID, tmp_0, renderComposable$slambda_0(recomposer, null));
    var composition = ControlledComposition(new DomApplier(new DomNodeWrapper(root)), recomposer);
    var scope = new renderComposable$scope$1(root);
    composition.h20(ComposableLambda$invoke$ref(composableLambdaInstance(-844806999, true, renderComposable$lambda(content, scope))));
    return composition;
  }
  function renderComposable$slambda($recomposer, resultContinuation) {
    this.r30_1 = $recomposer;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(renderComposable$slambda).d19 = function ($this$launch, $completion) {
    var tmp = this.e19($this$launch, $completion);
    tmp.h8_1 = Unit_instance;
    tmp.i8_1 = null;
    return tmp.n8();
  };
  protoOf(renderComposable$slambda).z8 = function (p1, $completion) {
    return this.d19((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(renderComposable$slambda).n8 = function () {
    var suspendResult = this.h8_1;
    $sm: do
      try {
        var tmp = this.f8_1;
        switch (tmp) {
          case 0:
            this.g8_1 = 2;
            this.f8_1 = 1;
            suspendResult = this.r30_1.z27(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.i8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.g8_1 === 2) {
          throw e;
        } else {
          this.f8_1 = this.g8_1;
          this.i8_1 = e;
        }
      }
     while (true);
  };
  protoOf(renderComposable$slambda).e19 = function ($this$launch, completion) {
    var i = new renderComposable$slambda(this.r30_1, completion);
    i.s30_1 = $this$launch;
    return i;
  };
  function renderComposable$slambda_0($recomposer, resultContinuation) {
    var i = new renderComposable$slambda($recomposer, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.d19($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function renderComposable$scope$1($root) {
    this.t30_1 = $root;
  }
  protoOf(renderComposable$scope$1).u30 = function (_this__u8e3s4) {
    return this.t30_1;
  };
  function ComposableLambda$invoke$ref(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.u1v(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function renderComposable$lambda($content, $scope) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C60@2343L14:renderComposable.kt#gialxy');
      var tmp;
      if ($composer_0.w1h(!(($changed & 3) === 2), $changed & 1)) {
        if (isTraceInProgress()) {
          traceEventStart(-844806999, $changed, -1, 'org.jetbrains.compose.web.renderComposable.<anonymous> (renderComposable.kt:60)');
        }
        $content($scope, $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
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
  //region block: init
  org_jetbrains_compose_web_internal_runtime_GlobalSnapshotManager$stable = 8;
  org_jetbrains_compose_web_internal_runtime_JsMicrotasksDispatcher$stable = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = DomApplier;
  _.$_$.b = DomNodeWrapper;
  _.$_$.c = renderComposable;
  //endregion
  return _;
}));

//# sourceMappingURL=html-internal-html-core-runtime.js.map
